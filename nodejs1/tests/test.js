import {ExcelFile} from "../structure/xlDatabase.js"

let d = new ExcelFile("./Students.xlsx")

console.log(d.serialize("json"))