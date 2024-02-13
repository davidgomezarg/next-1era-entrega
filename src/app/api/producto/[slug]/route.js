import { NextResponse } from "next/server"
import { doc, getDoc } from "firebase/firestore"
import {db} from "@/app/firebase/config.js"

export async function GET(_, { params }) {
    const { slug } = params

    console.log("slug",slug)

    const docRef = doc(db, "productos", slug)
    const docSnapshot = await getDoc(docRef)

    return NextResponse.json( docSnapshot.data() )
}