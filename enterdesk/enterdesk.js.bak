const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs");
const yargs = require("yargs");
let argv = yargs.argv;
let i = 1;
let title = "";
let pictures = [];
for (url of argv._) {
  getpics(url);
}

/*
使用方法 ： 
node enterdesk.js 链接
如 node enterdesk.js https://mm.enterdesk.com/bizhi/62280.html
*/
//获取图片列表
function getpics(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(async (res) => {
        const $ = cheerio.load(res.data);
        title = $(".arc_main_pic_img").attr("title");
        $(".swiper-slide>a").each((index, li) => {
          pictures.push($(li).attr("src").replace("edpic", "edpic_source"));
        });
        console.log("共%d张图片", pictures.length);
        path = `./${title}`;
        console.log(pictures);
        if (!fs.existsSync(path)) {
          fs.mkdirSync(path);
          console.log("文件夹%s 创建成功", path);
        } else {
          console.log("文件夹%s 已存在", path);
        }
        for (url of pictures) {
          fileName = `${title}/${i++}`;
          await downloadImage(url, `./${fileName}.jpg`);
        }
      })
      .catch((err) => {
        console.log("状态码：" + err.response.status);
        console.log("请确认id是否输入正确...");
      });
  });
}
//下载
async function downloadImage(image, filePath) {
  let { data: ReadStream } = await axios({
    method: "get",
    url: image,
    responseType: "stream",
  });
  let writeStream = fs.createWriteStream(filePath);
  ReadStream.pipe(writeStream);
  writeStream.on("close", () => {
    console.log(`${filePath} 下载完成！`);
  });
}
