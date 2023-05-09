import { defineStore } from "pinia";
import { useFirebaseStore } from "./firebase";
import { getFirestore } from "firebase/firestore";
import { collection, query, getDocs } from "firebase/firestore";
import type { Possesion, Shop, Tag } from "@/models";
import { ref } from "vue";

const fetchACollection = async (
  firestore: any,
  name: string
): Promise<any[]> => {
  const qPossesions = query(collection(firestore, name));
  const querySnapshot = await getDocs(qPossesions);
  return querySnapshot.docs.map((d) => d.data() as any);
};

export const useFirestoreStore = defineStore("firestore", () => {
  const { firebaseApp } = useFirebaseStore();
  const firestore = getFirestore(firebaseApp);

  const loading = ref(false);
  const possessions = ref([] as Possesion[]);
  const formats = ref([] as Tag[]);
  const shops = ref([] as Shop[]);
  const tags = ref([] as Tag[]);

  const getEverything = async () => {
    loading.value = true;
    possessions.value = await fetchACollection(firestore, "possesions");
    formats.value = await fetchACollection(firestore, "formats");
    shops.value = await fetchACollection(firestore, "shops");
    tags.value = await fetchACollection(firestore, "tags");
    loading.value = false;
  };

  getEverything();
  return {
    loading,
    possessions,
    formats,
    shops,
    tags,
  };
});
