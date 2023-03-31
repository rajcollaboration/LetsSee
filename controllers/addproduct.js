import { createError } from "../errorhandle.js";
import addproduct from "../models/addproduct.js";
import xlsx from "xlsx";

export const flipcart = async (req, res, next) => {
  try {
    console.log({ ...req.body, ...req.file });
    const filePath = req.file.path;
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(worksheet, { raw: true });
    for (const product in data) {
        if (data.hasOwnProperty.call(data, product)) {
            const element = data[product];
            if (element["WebDevNotes"] != undefined) {
                const newProduct = new addproduct({name:element["WebDevNotes"],description: element[" Students Lecture Wise View - FJP1"]})
            await newProduct.save();
            console.log(element[" Students Lecture Wise View - FJP1"]);
            } 
        }
    }
    res.json(data);
    // const newProduct = new addproduct({...req.body})
    // await newProduct.save();

    // res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
  }
};
