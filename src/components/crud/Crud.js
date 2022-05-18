import { collection, getDocs, query } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"



export const getData = async() =>{
    const result = await getDocs(query(collection(db,'peliculas')));
    return result;
}