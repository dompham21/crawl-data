const express = require("express");
const app = express();
const port = 3000;
const request = require('request');
const cheerio = require('cheerio');

app.set('views engine','ejs');
app.set('views','./views');




app.get('/',function(req,res){
    request('https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner',function(error,response,body){
        if(error){
            console.log(error);
            res.render('index.ejs',{html: "Co loi"});
        }
        else {
            $ = cheerio.load(body);
            let listData = $(body).find(".product-item");
          res.render('index.ejs',{html:listData});
        }
    });
});

app.listen(port,()=>{ console.log("Sever running on " + port)});