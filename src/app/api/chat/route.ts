import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../firebase";
import askQuestion from "../../../../libs/gpt";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
    try{
      const res = await request.json()
      const answer = await askQuestion(res.question)
      const time = res.time
      console.log(answer);
      const docRef = await addDoc(collection(db, "chats",res.chatsId,"chat"), {
       question:res.question,
       time:time,
       answer:answer,
       serverTime:new Date().toLocaleTimeString('en-US')
      });
      console.log("Document written with ID: ", docRef.id);
      return NextResponse.json({id:docRef.id,time,answer,serverTime:new Date().toLocaleTimeString('en-US')})
      
    }catch{
      throw new Error()
    }
  }
    