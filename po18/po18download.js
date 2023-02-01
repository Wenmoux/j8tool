    const fs = require("fs")
    const axios = require("axios")
    const cheerio = require("cheerio")
    let paa = ""

    headers = {
        "x-requested-with": "XMLHttpRequest",
        "cookie": "",
        "Referer": "https://www.po18.tw",
        proxy: false
    }



    async function getdetail(bid) {
        let r = await axios.get(`https://www.po18.tw/books/${bid}/articles`, {
            headers
        })
        let $ = cheerio.load(r.data)
        let detail = {
            bid,
            title: $(".book_info>h1").text(),
            author: $(".author>h2").text(),
            pageNum: $(".pagenum>#w1>a").length>1? $(".pagenum>#w1>a").length-2:1

        }
        if (fs.existsSync(`./${detail.title}.txt`)) fs.unlinkSync(`./${detail.title}.txt`)
        fs.appendFileSync(`./${detail.title}.txt`, `${detail.title}\n作者：${detail.author}\n`)
        console.log(detail.title)
        console.log(detail.author)
        console.log(`共${detail.pageNum}页`)
        return detail
    }


    async function getCon(detail) {
        for (i = 1; i < detail.pageNum + 1; i++) {
            console.log(`第${i}页`)
            let r = await axios.get(`https://www.po18.tw/books/${detail.bid}/articles?page=${i}`, {
                headers
            })
            let $ = cheerio.load(r.data)
            fs.appendFileSync("rr.html", r.data)
            let list = $('#w0>div')
            for (li of list) {
                let name = $(".l_chaptname", li).text()
                fs.appendFileSync(paa, name + "\n")
                console.log(name)
                if ($(li).text().match(/訂購/)) fs.appendFileSync(paa, "      请先购买\n")
                else {
                    let href = $(".l_btn>a", li).attr("href")
                    id = href.split("/")
                    await getContent(id[2], id[4])
                }
            }
        }
    }


    async function getContent(bid, pid) {
        ccon = ""
        headers.referer = `https://www.po18.tw/books/${bid}/articles/${pid}`
        let r = await axios.get(`https://www.po18.tw/books/${bid}/articlescontent/${pid}`, {
            headers
        })
        const $ = cheerio.load(r.data)
        let list = $('p')
        list.each((index, li) => {
            con = "      " + $(li).text().trim()
            if (!con.match(/^\s*$/)) {
                ccon += con + "\n"
            }
        })
        fs.appendFileSync(paa, ccon+"\n\n")
    }



    async function downp18(bid) {
        let detail = await getdetail(bid)
        paa = `./${detail.title}.txt`
        await getCon(detail)
    }
    
    downp18(790633)
