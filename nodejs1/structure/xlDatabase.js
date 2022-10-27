/**
 * Written by Jonathan Scott
 * Microsoft Excel as a Database in JavaScript (NodeJS)
 */

import xlsx from "xlsx";
import path from "path";
import fs from "fs-extra";

class ExcelFile {
    /**
     * @param {xlsx.WorkBook | null} workbook
     */
    workbook


    /**
     * Constructor for the existing excel file.
     * @param {string<path.FormatInputPathObject>} path **(Required)** The path to the Excel WorkBook. 
     */
    constructor(path) {
        if (!path) return new ReferenceError("path is not initialized");
        if (typeof path !== "string") return new TypeError("path must be typeof string");
        if (!fs.existsSync(path)) return new Error("path must be a valid file path");
        try {
            this.workbook = xlsx.readFile(path)
        } catch (error) {
            console.error(error);
        }
    }

    getRaw() {
        return this.workbook
    }

    /**
     * 
     * @param {string} type 
     */
    serialize(type) {
        switch (type) {
            case "json":
                return Object.values(this.workbook.Sheets).map(s => xlsx.utils.sheet_to_json(s))

            default:
                return this.workbook.Sheets.map(e => e)
        }
    }
}

export { ExcelFile }