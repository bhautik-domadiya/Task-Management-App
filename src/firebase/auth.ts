import { UserData } from "../utils/user.interface";
import { auth, firestore } from "./firebase";
import { collection } from "./queries/utils/collection.utils";
interface IProps {
    email: string;
    password:string;
    navigate:any
}
export const signIn = async (props: IProps) => {
    const { email,password,navigate } = props;
    try {
        await auth.signInWithEmailAndPassword(email,password).then((res)=>{
          navigate('board')
        }).catch((err)=>{
          console.log("Error",err);
        });
    } catch (error) {
        console.error('Error signing in:', error);
    }
};


const fetchUserData = async (email: string | null): Promise<UserData[]> => {
  try {
    if (email) {
      const collectionRef = firestore.collection(collection.users).where('email', '==', email);
      const snapshot = await collectionRef.get();
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as UserData[]; 
      return data;
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return [];
  }
};


export const checkAuth = (navigate: any): Promise<UserData | null> => {
  return new Promise(async (resolve, reject) => {
    auth.onAuthStateChanged(async (user: any) => {
      if (!user) {
        console.error('Access to protected route denied, redirecting to login...');
        navigate('/');
        reject('Access denied');
      } else {
        try {
          const userData = await fetchUserData(user.email);
          if (userData.length) {
            resolve(userData[0]);
          }
          
        } catch (error) {
          reject(error);
        }
      }
    });
  });
}
