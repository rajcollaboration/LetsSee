import puppeteer from "puppeteer";
import { join } from "path";
import addproduct from "../models/addproduct.js";

export const scrappAmazone = async (req, res, next) => {
    const url = req.body.url; // URL to scrape
  
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    console.log("ok");
    const elements = await page.$$('#centerCol')
    let data = []
    let others= []
    let title = "";
    let reviews = "";
    let price = "";
    for (const element of elements) {
      title = await page.evaluate(el => el.querySelector('h1#title span#productTitle').textContent,element);
      reviews = await page.evaluate(el => el.querySelector("#acrCustomerReviewLink span#acrCustomerReviewText").textContent,element);
      price = await page.evaluate(el => el.querySelector("span.a-price-whole").textContent,element);
      

      data = await page.evaluate(()=>{
        const dt = {
          brand : "",
          modelName: "",
          NetworkServiceProvider: "",
          OS:"",
          CellularTechnology: ""	
        }
      const span = Array.from(document.querySelectorAll('.a-normal.a-spacing-micro tr.a-spacing-small td span'));
      dt.brand = span[1].textContent;
      dt.modelName = span[3].textContent
      dt.NetworkServiceProvider = span[5].textContent;
      dt.OS  = span[7].textContent;
      dt.CellularTechnology = span[9].textContent
      return dt
     })
      
      
      console.log();
    
    }
    await browser.close();
    const newProduct =new addproduct({title,reviews,price,...data})
    console.log(newProduct);
    await newProduct.save();
    res.json({data,others});
};
