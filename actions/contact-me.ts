import { addDoc, collection } from "firebase/firestore";

import { db } from "@/config/firebase";

export const contactMe = async (data: any) => {
  const tasksRef = collection(db, "contact");

  await addDoc(tasksRef, {
    lastName: data.lastName,
    firstName: data.firstName,
    email: data.email,
    object: data.object,
    message: data.message,
    createdAt: new Date().toISOString(),
  });
};
