import { NextResponse } from "next/server"
import {collection, getDocs,where, query} from "firebase/firestore"
import {db} from "@/app/firebase/config.js"

export const GET = async (request,{params}) => {

    const { category } = params
    console.log("La categoria es: ",category)

    const productosRef = collection(db, "productos")
    const q = category == 'all' 
                ? productosRef
                : query(productosRef, where('category', '==', category))
    const querySnapshot = await getDocs(q)

    const items= []
    querySnapshot.docs.forEach(
        (doc)=>{
            //console.log(`${doc.id} => ${doc.data()}`)
            const item = {...doc.data(),id: doc.id}
            items.push(item)
            console.log(item)
        }
    )
    // const docs =  querySnapshot.docs.map(doc => doc.data())

    return NextResponse.json(items)
}
