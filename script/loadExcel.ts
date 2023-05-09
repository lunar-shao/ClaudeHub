import { v4 as uuidv4 } from "uuid";
import { askYesNo, parseStringToNumbers } from "./utils";
import { Possesion, Tag, Shop, WorkType } from "./models";
import { push as pushToFirebase } from "./pushToFirebase";

const readXlsxFile = require("read-excel-file/node");

const defaultTag: Tag[] = [
  { id: uuidv4(), name: "Prévisionné" },
  { id: uuidv4(), name: "Meili" },
  { id: uuidv4(), name: "Netflix" },
  { id: uuidv4(), name: "Anmin" },
  { id: uuidv4(), name: "Solde" },
  { id: uuidv4(), name: "Shao" },
  { id: uuidv4(), name: "Cadeau de Noël" },
  { id: uuidv4(), name: "Cadeau d'anniversaire" },
];

function findOrCreateShop(name: string, shops: Shop[]): Shop {
  if (name === null) {
    return { id: undefined } as any;
  }
  const shop = shops.find((s) => s.name === name);
  if (shop) {
    return shop;
  } else {
    const newShop: Shop = { id: uuidv4(), name };
    shops.push(newShop);
    return newShop;
  }
}

function findOrCreateTags(list: string, tags: Tag[]): Tag[] {
  if (list === null) {
    return [];
  }
  const tagsString = list.split(",");
  return tagsString.map((ts) => {
    const existingTag = tags.find((t) => t.name === ts);
    if (existingTag) {
      return existingTag;
    } else {
      const newTag: Tag = { id: uuidv4(), name: ts };
      tags.push(newTag);
      return newTag;
    }
  });
}

function rowToPossesion(
  row: any[],
  formats: Tag[],
  shops: Shop[],
  childIds?: number[],
  parent?: Possesion
): Possesion {
  if (parent) {
    row[3] = parent.purchasedDate;
    row[4] = shops.find((s) => s.id === parent.shopID)?.id;
  }
  const possesion: Possesion = {
    id: uuidv4(),
    userId: row[0],
    name: row[1],
    format: findOrCreateTags(row[2], formats).map(t => t.id), // transform format to type
    purchasedDate: row[3],
    shopID: findOrCreateShop(row[4], shops).id,
    priceBt: row[5],
    priceAt: row[6],
    note: row[7] || "",
  };
  const tags = defaultTag.filter((t) => possesion.note.includes(t.name));
  if (tags) {
    possesion.tags = tags.map(t => t.id);
  }
  if (childIds) {
    possesion.type = WorkType.COLLECTION;
    possesion.childIds = childIds;
  }
  if (parent) {
    possesion.parentId = parent.id;
  }
  return possesion;
}

export function readExcel(path: string) {
  const shops: Shop[] = [];
  const formats: Tag[] = [];
  const collections: Possesion[] = [];
  const possesions: Possesion[] = [];

  readXlsxFile(path).then((rows: any[]) => {
    rows.slice(1).forEach((row: any[]) => {
      // Skip entry without id and name
      if (row[0] && row[1]) {
        // This is a collection
        if (typeof row[0] === "string") {
          collections.push(
            rowToPossesion(row, formats, shops, parseStringToNumbers(row[0]))
          );
        } else {
          const parent = collections.find((c) =>
            c.childIds?.find((id) => id === row[0])
          );
          possesions.push(
            rowToPossesion(row, formats, shops, undefined, parent)
          );
        }
      }
    });
    const entries = possesions.concat(collections);
    console.log(`\n${possesions.length} work, ${collections.length} collections, ${formats.length} formats, ${shops.length} shops, ${defaultTag.length} defaultTag`);

    if (askYesNo("Push to firebase?")) {
      pushToFirebase(entries, formats, shops, defaultTag);
    } else {
      console.log("Bye bye!");
    }
  });
}
