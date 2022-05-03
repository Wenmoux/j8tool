config = require("./config.js")
token = hbooker.token
username =hbooker.username
device_token = hbooker.devicetoken ?? "ciweimao_00000000000000000000000000000000"
cidArr = []
var sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const CryptoJS = require("crypto-js");
const axios = require("axios");
const iv = CryptoJS.enc.Hex.parse('00000000000000000000000000000000')
const decrypt = function(data, key) {
    key = CryptoJS.SHA256(key ? key : 'zG2nSeEfSHfvTCHy5LCcqtBbQehKNLXn')
    var decrypted = CryptoJS.AES.decrypt(data, key, {
        mode: CryptoJS.mode.CBC,
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
    })
    return decrypted.toString(CryptoJS.enc.Utf8)
}

function CGet(url, params) {
    return new Promise(async (resolve) => {
        try {
            params += `&app_version=2.3.922&device_token=${device_token}&login_token=${token}&account=${username}`
            url = "https://app.hbooker.com" + url;
            let response = await axios.post(url, params);
            let data = decrypt(response.data.trim());
            var lastIndex = data.lastIndexOf("}");
            data = data.substr(0, lastIndex + 1);
            let json = JSON.parse(data);
            resolve(json);
        } catch (err) {
            resolve({
                tip: err.message ?? err.code,
                errorwen: true
            });
        }
        resolve();
    });
}
async function hbooker() {
    let result = "【刺猬猫小说】：";
       msg = "" 
    while (true) {
        let message = await CGet("/reader/get_message_sys_list_by_type", "count=10&message_type=3&page=0")
        if (JSON.stringify(message).match("重新登录")) await require("./sendmsg")("刺猬猫宝箱："+"token失效单独通知")
        else if (message && message.data && message.data.message_sys_list) {
            cid = message.data.message_sys_list[0].chest_id
            if (cidArr.indexOf(cid) == -1) {
                let dd = Date.parse(new Date(message.data.message_sys_list[0].ctime))
                if (Date.now() - dd <= 14400000) {
                    let chestInfo = await CGet("/chest/get_chest_detail", `chest_id=${cid}&module=ouhuang&count=10&page=0`)
                    if (chestInfo.code == 100000) {
                        chestInfo = chestInfo.data.chest_info
                        console.log(`${chestInfo.reader_info.reader_name}打赏 ${chestInfo.book_info.book_name} ${chestInfo.cost} 点`)
                        bid = chestInfo.book_info.book_id
                        zt = chestInfo.rest_num
                        if (chestInfo.has_opened == 0) {
                            console.log(`>>剩余${chestInfo.rest_num}份`)
                            console.log(">>去开宝箱")
                            await CGet("/bookshelf/favor", "shelf_id=&book_id=" + bid)
                            openRes = await CGet("/chest/open_chest", `chest_id=${cid}`)                        
                            errorwen = openRes.error
                            await CGet("/bookshelf/favor", "shelf_id=&book_id=" + bid)                      
                             while(errorwen) {
                                console.log(">>去开宝箱")
                                openRes = await CGet("/chest/open_chest", `chest_id=${cid}`)
                                await sleep(1000)
                                if (!openRes.errorwen) errorwen = false
                            }  
                           if(openRes.code == 100000) msg = openRes.data.item_name.match(/经验值/)?("经验值 * "+openRes.data.item_num) :(openRes.data.item_name +" * "+openRes.data.item_num      )                                       
                           else msg = openRes.tip
                             console.log(">>>>结果：" + msg )
                             await CGet("/bookshelf/delete_shelf_book", "shelf_id=&book_id=" + bid)
//                             await require("./sendmsg")("刺猬猫宝箱："+ msg)                          
                        } else {
                            console.log(">>>>该宝箱开过啦")
                            cidArr.push(cid)
                        }
                    } else console.log(chestInfo)
                } else console.log(">>该宝箱过期啦")
            } else console.log(">>该宝箱开过啦，目前没有新の宝箱")
        } else console.log(">>>>错误：" + message.tip)
        console.log(">>>>骚等    "+"[ "+new Date().toLocaleString()+ " ]\n\n ")
        await sleep(1000 * 60 * 5)
    }
}

hbooker()
//module.exports = hbooker()
