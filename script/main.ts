import { readExcel } from "./loadExcel";
import { askYesNo } from "./utils";

const CLAUDE_EXCEL_PATH = `./script/database.xlsx`;

if (askYesNo("Load excel database?")) {
  readExcel(CLAUDE_EXCEL_PATH);
} else {
  console.log("Nothing to do :)");
}

