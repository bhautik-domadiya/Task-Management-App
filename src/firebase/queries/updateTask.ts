import { firestore } from "../firebase";
import { collection } from "./utils/collection.utils";

interface IUpdateData {
  [key: string]: string | number;
}
export const updateStatus = (docId: string, updateData: IUpdateData) => {
  const docRef = firestore.collection(collection.task).doc(docId);

  return docRef
    .update(updateData)
    .then(() => {
      return 'updates';
    })
    .catch((error) => {
      throw error;
    });
};