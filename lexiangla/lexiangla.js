/*
腾讯乐享
进度条粘贴自https://segmentfault.com/a/1190000009152318
*/
const axios = require("axios");
const pg = require("./progress");
var pb = new pg('进度', 25);
const {headers,courseids} = require("./config.json")
function get(task, method = "get", data = null) {
    return new Promise(async (resolve) => {
        try {            
            let url = `https://lexiangla.com/api/v1/${task}`;
            if (method == "get") res = await axios.get(url, {
                headers
            });
            if (method == "post") res = await axios.post(url, data, {
                headers
            });
            if (method == "patch") res = await axios.patch(url, data, {
                headers
            });
            if (method == "put") res = await axios.put(url, data, {
                headers
            });
               resolve(res.data)
        } catch (err) {
           console.log(err.response.data.message??err.response.data);
           if(err.response.data=="Unauthorized.") {
           console.log("请重新填写cookie信息")
           resolve({code: 401,msg: err.response.data})
           }
           resolve({code: 500,msg: "课程接口请求出错"})
        }
        resolve();
    });
}

let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
async function lexiangla(cid) {
      for (t =0; t < cid.length; t++) {
        fll = encodeURI(cid[t])
        let list = await get(`classes/${fll}?lazy_load=1&increment=1&prompt_style=page`)
        if(list.code==401) break;
        for (g = 0; list.data&&list.data.chapters&&g < list.data.chapters.length; g++) {
            console.log("第" + (g + 1) + "章")
            lists = list.data.chapters[g].courses
            for (i = 0; i < lists.length; i++) {
                status = true
                console.log("第" +(i+1)+"节"+ lists[i].title + "  " + lists[i].duration)
                bbb = lists[i].duration
                for (k = 0; k < 999 && status; k++) {
                    let xres = await get(`classes/${fll}/courses/${lists[i].id}/study?prompt_style=none`, "put", {
                        "event": 60,
                        "section_key": ""
                    })
                    await sleep(3000)
                    if (xres.data && xres.data.learn_time) {
                        jd = xres.data.learn_time / bbb
                        pb.render({
                            completed: xres.data.learn_time,
                            total: bbb
                        });
                    }
                    if (xres.data && xres.data.status == 2) {
                        status = false
                        console.log("\n该章节已完成")
                    }
                }
            }
        }
    }
}


lexiangla(courseids)