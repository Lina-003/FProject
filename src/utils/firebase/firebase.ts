import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    setPersistence,
    browserSessionPersistence
} from "firebase/auth";
import firebaseConfig from "./firebaseConfig"
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { Product } from "../../types/products";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

/*const registerUser = async ({
                                email,
                                username,
                                password,
                            }: {
    email: string;
    username: string;
    password: string;
}): Promise<boolean> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        console.log(userCredential.user);
        return true;
    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        return false;
    }
};

const loginUser = async ({
                             email,
                             password,
                         }: {
    email: string;
    password: string;
}) => {
    return setPersistence(auth, browserSessionPersistence)
        .then(() => {
            return signInWithEmailAndPassword(auth, email, password);
        })
        .catch((error: any) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
};*/

const saveProductInDB = async ( product:Product ) => {
    try {
        await addDoc(collection(db, "products"), product);
      } catch (e) {
        console.error("Error adding document: ", e);      }
}

const getProductsFromDB = async (): Promise<Product[]> => {
  const resp: Product[] = [];
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    resp.push({
      ...doc.data(),
    } as Product);
  });
  return resp;
}

export default {
    /*registerUser,
    loginUser,*/
    saveProductInDB,
    getProductsFromDB
};