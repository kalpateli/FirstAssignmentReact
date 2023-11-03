interface details{
  items:{
    item:string,
    desc:string
  }[];  
}

function DisplayList({items}:details){
    return(

        <>
          <div className="h4">List of Items</div>
          {items.map((i, index) => (
              <li key={index}>
              <strong>{i.item}</strong>: {i.desc}
            </li>
          ))}
       </>
    )

}

export default DisplayList;