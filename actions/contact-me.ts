import { db } from "@/config/firebase";
import { addDoc, collection } from "firebase/firestore";

export const contactMe = async (data: any) =>{
    console.log("dataaaaaa ",data);
    
    const tasksRef = collection(db, "contact");
    console.log("tasksRef ",tasksRef);
    
    await addDoc(tasksRef, {
        lastName: data.lastName,
        firstName: data.firstName,
        email: data.email,
        object: data.object,
        message: data.message,
        createdAt: new Date().toISOString(),   
    });
}