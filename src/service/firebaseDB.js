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
    const length = array.length;
    for (let i = length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const currentIndex = i - 1;
      const temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  }
}
