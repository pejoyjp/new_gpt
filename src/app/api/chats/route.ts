import { db } from "../../../../firebase"
import { collection, addDoc, doc, setDoc } from "firebase/firestore"; 
import { v4 as uuidv4 } from 'uuid';


export async function GET(request: Request) {
  try{
    // const docRef = await addDoc(collection(db, "chats"), {
    //   id:uuidv4(), 
    //   time: new Date().toLocaleTimeString('en-US')
    // });
    // console.log("Document written with ID: ", docRef.id);
    // return new Response(docRef.id)

    const docRef = doc(db, "chats", uuidv4());
    await setDoc(docRef, { time: new Date().toLocaleTimeString('en-US') });
    console.log("Document written with ID: ", docRef.id);
    return new Response(docRef.id)
    
  }catch{
    throw new Error()
  }

}
  
  