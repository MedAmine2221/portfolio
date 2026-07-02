import { addDoc, collection, Firestore } from "firebase/firestore";

import { db } from "@/config/firebase";

export const contactMe = async (data: any) => {
  if (!db) {
    throw new Error("Firestore is not initialized");
  }

  const tasksRef = collection(db as Firestore, "contact");

  await addDoc(tasksRef, {
    lastName: data.lastName,
    firstName: data.firstName,
    email: data.email,
    object: data.object,
    message: data.message,
    createdAt: new Date().toISOString(),
    status: "Waiting",
  });
};
