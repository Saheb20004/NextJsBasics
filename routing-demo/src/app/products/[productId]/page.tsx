
// Learning metedata concepts
import { Metadata } from "next"

type Props={
    params:Promise<{productId:string}>
}

export const generateMetadata=async({
    params
}:Props):Promise<Metadata> => {
    const id=(await params).productId
    return{
        title:`Product ${id}`
    }
}

export default async function ProductDetails({params}:Props
   //{ params:Promise<{productId:string}>}
){
    const productId=(await params).productId
    return <h1>Details about product : {productId}!</h1>
}