import { getFirestore, collection, getDocs } from "firebase/firestore";

export default class FirebaseDB {
  constructor() {
    this.db = getFirestore();
  }

  async getData(colectionName) {
    let list = [];
    const querySnapshot = await getDocs(collection(this.db, colectionName));
    querySnapshot.forEach((doc) => list.push(doc.data()));

    if (colectionName === "card") {
      list = [...list, ...list];
      return list;
    }
  }

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
  }
}
