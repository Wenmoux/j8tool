import fs from "fs"
import JSZip from "jszip"
import axios from "axios"
import {
    container,
    mimetype,
    chapter,
    toc_ncx,
    content_opf
} from "./template.js"

let main_css = fs.readFileSync("./assets/main.css")

function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  })
}

async function imgd(img) {
    return await axios.get(img, {
        responseType: 'arraybuffer'
    }).then(function(response) {
        return response.data
    })
}

function toc(id, name, author, mulu,uuid) {
    let a = toc_ncx.replaceAll("{uuid}", uuid).replaceAll("{bookName}", name).replaceAll("{bookAuthor}", author)
    let toc = ""
    for (let i in mulu) {
        i = Number(i)
        toc += `<navPoint id="chapter_${i+1}" playOrder="${i+1}" class="chapter">
      <navLabel>
        <text>${mulu[i].title}</text>
      </navLabel>
      <content src="Chapter/chapter_${i+1}.html" />
    </navPoint>\n    `
    }
    return a.replace("<navMap></navMap>", `<navMap>\n    ${toc}\n  </navMap>`).replace(/(\n[\s\t]*\r*\n)/g, '\n').replace(/^[\n\r\n\t]*|[\n\r\n\t]*$/g, '')
}

function copf(name, author, desc, mulu, imglist,content,uuid) {
    let c = content_opf.replaceAll("{uuid}", uuid).replaceAll("{bookName}", name).replaceAll("{bookAuthor}", author).replaceAll("{bookDesc}", desc)
    let spi = ""
    for (let i in mulu) {
        i = Number(i)
        spi += `<itemref idref="chapter_${i+1}" />\n    `
    }
    let d = c.replace(`<spine toc="ncx"></spine>`, `<spine toc="ncx">\n    ${spi}\n  </spine>`)
    let img = ""
    for (let i in imglist) {
        img += `<item id="${imglist[i].name}" href="${imglist[i].url}.png" media-type="image/png"/>\n    `
    }
    let manifest = ""
    for(let j in content) {
        manifest += `<item id="${content[j].id}" href="${content[j].url}.html" media-type="text/html" />\n    `
    }
    d = d.replace("{manifest}",manifest).replace("{imglist}", img)
    return d.replace(/(\n[\s\t]*\r*\n)/g, '\n').replace(/^[\n\r\n\t]*|[\n\r\n\t]*$/g, '')
}

function chap(mulu) {
    let cha = chapter.replaceAll("{bookName}", mulu.title).replaceAll("{bookContent}", mulu.data)
    return cha
}

export function epub(options) {
    let zip = new JSZip()
    zip.file("META-INF/container.xml", container)
    zip.file("mimetype", mimetype)
    let OEBPS = zip.folder("OEBPS")
    OEBPS.file("Styles/main.css", main_css)
    var img = OEBPS.folder("Images");
    img.file("cover.png", imgd(options.cover))
    let uuid = guid()
    let t = toc(options.id, options.title,
        options.author, options.content,uuid)
    OEBPS.file("toc.ncx", t)
    let imglist2 = []
    let content = []
    for (let i in options.content) {
        i = Number(i)
        let cha = chap(options.content[i])
        content.push({
            id: `chapter_${i+1}`,
            url: `Chapter/chapter_${i+1}`
        })
        let img = cha.match(/(?<=(img[^>]*src="))[^"]*/g)
        let imglist = []
        if (img)
            for (let j in img) {
                j = Number(j)
                imglist[j] = imgd(img[j])
                zip.file(`OEBPS/Images/${i+1}/${j+1}.png`, imglist[j])
                imglist2.push({
                    name: `${i+1}-${j+1}`,
                    url: `Images/${i+1}-${j+1}.png`
                })
                cha = cha.replace(img[j], `../Images/${i+1}/${j+1}.png`)
            }
        OEBPS.file(`Chapter/chapter_${i+1}.html`, cha)
    }
    let c = copf(options.title,
        options.author, options.desc, options.content, imglist2,content,uuid)
    OEBPS.file("content.opf", c)
    zip.generateAsync({
        type: "nodebuffer"
    }).then(function(content) {
        fs.writeFileSync(`./save/${options.title}.epub`, content)
    })
}