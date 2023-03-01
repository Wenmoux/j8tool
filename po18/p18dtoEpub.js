import {epub} from "./index.js";
import axios from "axios"
import cheerio from "cheerio"
let paa = ""
let  headers = {
        "x-requested-with": "XMLHttpRequest",
        "cookie":'',
        "Referer": "https://www.po18.tw",
        proxy: false
    }

const option = {
  title: "",
    author: "",
  cover: "",
  content: []
};





//const axios = require("axios")
function getContent(bid, pid, ii)  {
    return new Promise(async resolve => {
        try {
    //     console.log(bid)
console.log(pid)
    headers.referer = `https://www.po18.tw/books/${bid}/articles/${pid}`;
    const response = await axios.get(`https://www.po18.tw/books/${bid}/articlescontent/${pid}`, { headers });
    let r = response.data.replace(/ &nbsp;&nbsp;/g, "");
    const $ = cheerio.load(r);
    $("blockquote").remove();
let   name=     $("h1").text()
        $("h1").remove();
    option.content[ii] =  { title: name, data: $.html().trim() }       
        } catch (err) {
        // console.log(err)
          console.log("重新请求中");
       await getContent(bid, pid, ii);
        }
        resolve()
    })
}


//task()    
async function getCon(detail) {
  const urls = Array.from({ length: detail.pageNum }, (_, i) => `https://www.po18.tw/books/${detail.bid}/articles?page=${i + 1}`);
  let k = 0;
  for (const url of urls) {
    console.log(`第${urls.indexOf(url) + 1}页`);
    const { data } = await axios.get(url, { headers });
    const $ = cheerio.load(data);
    const list = $('#w0>div');
    console.log(list.length);
    await Promise.all(
      list.toArray().map((li) => {
        const name = $(".l_chaptname", li).text();
        console.log(`${k++}.${name}`);
        if ($(li).text().match(/訂購/)) {
          console.log('    请购买');
          return Promise.resolve();
        } else {
          console.log("    下载中...");
          const href = $(".l_btn>a", li).attr('href');
          const id = href.split('/');
          return getContent(id[2], id[4], k).then(() => {});
        }
      })
    );
  }
}

async function getdetail(bid) {
    let r = await axios.get(`https://www.po18.tw/books/${bid}`, {headers});
    let $ = cheerio.load(r.data);
   let  zh = $("dd.statu").text().match(/\d+/)
    let detail = {        
        title: $("h1.book_name").text().split("（")[0],
        author: $("a.book_author").text(),
        cover: $('.book_cover>img').attr("src"),
        desc: $('.B_I_content').html(),
        bid,
        pageNum: Math.ceil(zh/100)
    };
    return detail;
}



async function downp18(bid) {
  const detail = await getdetail(bid);
  paa = `./${detail.title}.txt`
  option.content[0]={title:"简介",data:detail.desc}
  option.author = detail.author;
  option.title = detail.title.split(/（|【/)[0];
  option.cover = detail.cover;
  console.log(detail);
  await getCon(detail);
  console.log("开始生成epub")
await  new epub(option);
}

downp18(787427);