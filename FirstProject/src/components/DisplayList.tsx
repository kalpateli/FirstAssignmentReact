import { useState } from "react";


interface details{
  items:{
    item:string,
    desc:string}[];  
}

function DisplayList({items}:details){

  const [itemSelected , setItemSelected] = useState<string  | null>(null);
  
  const listDesc = (item:string) => {
    setItemSelected(item);
  };
  
    return(
      <>
        <div className="h4">List of Items</div>
        <ul>
          {items.map((i, index) => (        
            <li key={index} onClick={()=>{listDesc(i.desc)}}>
              <strong>{i.item}</strong>
              { 
                itemSelected === i.desc && 
                <div>
                  <p>{itemSelected}</p>
                </div>
              } 
            </li>
          ))}
        </ul>
       </>
    )

}

export default DisplayList;