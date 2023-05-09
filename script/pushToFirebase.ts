import { Possesion, Shop, Tag } from "./models";
import serviceAccount from "./serviceAccountKey.json";
import { askYesNo } from "./utils";

var admin = require("firebase-admin");

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = app.firestore();
firestore.settings({ ignoreUndefinedProperties: true })

function addArray(colName: string, datas: any[]) {
  const col = firestore.collection(colName);
  datas.forEach((d) => col.add(d));
}

export function push(
  possesions: Possesion[],
  formats: Tag[],
  shops: Shop[],
  tags: Tag[]
) {
  if (askYesNo("Did you delete previous collection?")) {
    console.log("Starting export");
    addArray("possesions", possesions);
    console.log("possesions loaded 1/4");
    addArray("formats", formats);
    console.log("formats loaded 2/4");
    addArray("shops", shops);
    console.log("shops loaded 3/4");
    addArray("tags", tags);
    console.log("tags loaded 4/4");
    console.log("Done !");
  } else {
    console.log("You need to manually delete those!");
  }
}
