import { db } from "../../../../firebase"
import { collection, addDoc } from "firebase/firestore"; 



export async function GET(request: Request) {
  try{
    const docRef = await addDoc(collection(db, "chats"), {
      time: new Date().toLocaleTimeString('en-US')
    });
    console.log("Document written with ID: ", docRef.id);
    return new Response(docRef.id)
    
  }catch{
    throw new Error()
  }

}
  
  