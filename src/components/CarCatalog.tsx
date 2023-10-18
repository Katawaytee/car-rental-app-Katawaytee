import Link from "next/link";
import ProductCard from "./ProductCard";

export default async function CarCatalog({carJson}:{carJson:Object}) {
  const carJsonReady = await carJson;
  return(
    <>
      Explore {carJsonReady.count} models in our catalog
      <div style={{margin:"20px", display:"flex",
      flexDirection:"row", alignContent:"space-around",
      justifyContent:"space-around", flexWrap:"wrap", padding:"10px"}}>
        
        {
          carJsonReady.data.map((carItem:Object)=>(
            
            <Link href={`/car/${carItem.id}`} className="w-1/6">
              <ProductCard carName={carItem.name} imgSrc={carItem.picture}/>
            </Link>
            
            )
          )
        }
        
      </div>
    </>
  );
}