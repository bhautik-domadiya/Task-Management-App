import { firestore } from "../firebase";
import { collection } from "./utils/collection.utils";

const fetchTaskList = async () => {
    try {
      const collectionRef = firestore.collection(collection.task);
      const snapshot = await collectionRef.get();
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        status: doc.data().status,
        description: doc.data().description,
        title: doc.data().title,
        dueDate: doc.data().dueDate?.seconds || doc.data().dueDate,
        createdAt:doc.data().createdAt?.seconds || doc.data().createdAt,
        assignee: doc.data().assignee,
        priority: doc.data().priority,
        updatedAt: doc.data().updatedAt,
      }));
      return data;
    } catch (error) {
      console.error('Error fetching data from Firestore:', error);
    }
  };

  export default fetchTaskList;


  export const taskWithUserData = () => {
    firestore.collectionGroup("tasks").get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
  
      const taskData = doc.data();
      
      const userRef = taskData.assignee;
      
      userRef.get()
        .then((userDoc:any) => {
          if (userDoc.exists) {
            const userData = userDoc.data();
          } else {
            console.log("User document not found for task:", taskData);
          }
        })
        .catch((error:any) => {
          console.error("Error getting user document:", error);
        });
    });
  })
  .catch((error) => {
    console.error("Error getting tasks:", error);
  });
  }