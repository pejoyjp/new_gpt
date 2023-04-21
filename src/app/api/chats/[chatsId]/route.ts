import { db } from "../../../../../firebase";
import { NextResponse } from "next/server"
import { doc, getDoc } from "firebase/firestore";



export async function GET(request: Request) {
  try{
    const res = request.url
    const chatId:string = res.slice(-36)
    const docRef = doc(db, "chats", chatId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const time = docSnap.data().time
      return new Response(time)
    } else {
      throw new Error('No data find')
    }
  }catch{
    throw new Error()
  }

}
  





