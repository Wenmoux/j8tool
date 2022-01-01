const axios = require("axios")
const fs = require("fs")
const yargs = require('yargs');
const cookie = ""





async function downloadFile(url, filename) {
    return new Promise(async (resolve) => {
        try {
            let res = await axios.get(url, {responseType: 'arraybuffer'})
            var dataBuffer = Buffer.alloc(res.data.byteLength);
            var view = new Uint8Array(res.data);
            for (var i = 0; i < dataBuffer.length; ++i) {
                dataBuffer[i] = view[i];
            }
            fs.writeFileSync(filename, dataBuffer)
        } catch (err) {
            console.log(err)
        }
        resolve();
    });
}



function get(url) {
    return new Promise(async (resolve) => {
        try {

            let res = await axios.get(url, {
                headers: {
                    //     "content-type": "application/json;charset=UTF-8",
                    cookie,
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; MEIZU 18 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36",
                    "referer": "https://fm.missevan.com/live/160481424",
                    // "user-agent": "Mozilla/5.0 (Linux; Android 10; Redmi K30) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.111 Mobile Safari/537.36"
                }
            })
            resolve(res.data)
        } catch (err) {
            console.log(err)
        }
        resolve();
    });
}

function getdetail(id) {
    return new Promise(async (resolve) => {
        try {
            let url = `https://www.missevan.com/dramaapi/getdrama?drama_id=${id}`
            let res = await get(url)
            //console.log(res)
            if (res && res.success) {
                info = res.info.drama
                console.log("获取成功")
                //   console.log(info) .cover .nwest
                console.log(`剧名：${info.name}\n作者：${info.author}\n简介：${info.abstract}`)
                //  return   res.data.info      
            } else {
                throw "没有查询到剧集信息"
            }
            resolve(res.info)
        } catch (err) {
            console.log(err)
        }
        resolve();
    });
}

//获取音频地址
async function getrealurl(id) {
    let url = `https://www.missevan.com/sound/getsound?soundid=${id}`
    let audioinfo = await get(url)
    let sound = audioinfo.info.sound
    //console.log(sound)   
    let s = sound ? (sound.videourl ? sound.videourl : (sound.soundurl_128 ? sound.soundurl_128 : (sound.soundurl ? sound.soundurl : "无链接,可能为付费音频,请先购买并添加cookies访问"))) : "无该音频不存在,请重新确认音频id"
    console.log("播放地址：%s", id, s)
    realurl = s.match("无") ? null : s
    return realurl
}

async function getdm(id) {
    let dm = await get(`https://www.missevan.com/sound/getdm?soundid=${id}`)
    return dm ? ? null
}
async function drama(id) {
    let start = 1
    let dramainfo = await getdetail(id)
    if(dramainfo){
    path = `./${dramainfo.drama.name}`;
    if (dramainfo.drama.integrity == 2) path += "【完】"
    else path += `【更至：${dramainfo.drama.newest}】`
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
        /*
        fs.mkdirSync(path + "/ft");
        fs.mkdirSync(path + "/music");
        fs.mkdirSync(path + "/episode");
        */
        console.log("文件夹%s 创建成功", path);
    } else {
        console.log("文件夹%s 已存在", path);
    }
    let dname = ["ft", "music", "episode"]
    await downloadFile(dramainfo.drama.cover, path + "/cover.jpg") //封面
    for (type of dname) {
        for (sound of dramainfo.episodes[type]) {
            console.log(sound.name)
            let durl = await getrealurl(sound.sound_id)
            let dm = await getdm(sound.sound_id)
            dpath = path + "/" + (start++) + "_" + sound.name //下载路径
            if (durl) {
                hz = durl.split("\.")[durl.split("\.").length - 1] //后缀
                vpath = dpath + "." + hz //音频  
                //dpath = path + "/" + type + "/" + sound.name + "." + hz
                if (!fs.existsSync(vpath)) {
                    console.log("开始下载音频")
                    await downloadFile(durl, dpath + ".m4a")
                    if (hz == "mp4") await downloadFile(durl, vpath)
                } else {
                    console.log("该音频已存在");
                }
            }
            if (dm) {
                xmlpath = dpath + ".xml" //路径            
                if (!fs.existsSync(xmlpath)) {
                    console.log("开始下载弹幕")
                    fs.writeFileSync(xmlpath, dm)
                } else {
                    console.log("该弹幕已存在");
                }
            } else console.log("无弹幕")
        }
    }
  }
}


async function d() {
    let argv = yargs.argv;
    for (id of argv._) {
        await drama(id)
    }

}

d()
