import path from "path";
import xlsx from "xlsx";
import fs from "fs-extra";

function getXL(path){
    if (!fs.existsSync(path)) return new Error("File does not exist");
    try {
        return xlsx.utils.sheet_to_json(xlsx.readFile(path, {cellDates: true}).Sheets['Sheet1'])
    } catch (error) {
        console.log(error)
    }
}

console.log(getXL("../Sample1.xlsx"))