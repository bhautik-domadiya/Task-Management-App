import { firestore } from "../firebase";
import { collection } from "./utils/collection.utils";


export const addTask = (payload:any) => {
    const collectionRef = firestore.collection(collection.task);
  
    return collectionRef
      .add(payload)
      .then((docRef) => {
        return docRef.id; 
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
        throw error;
      });
  };