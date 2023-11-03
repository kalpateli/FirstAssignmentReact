import { useState , useEffect } from "react"



function LifecyclePrac(){
    
    
    const [count , setCount] = useState(0);

    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px',
        cursor: 'pointer',
        margin:'10px'
      };

    useEffect(()=>{
        console.log('The Count is : ',count);
        return () => {
            console.log('Clear');
        };
        
    },[count]);//dependency array

    return(
        <div>
            <h2>Count : {count}</h2>
            <button onClick={()=>setCount(count-1)} style={buttonStyle}>
                Decrement
            </button>
            <button onClick={()=>setCount(count+1)} style={buttonStyle}>
                Increment
            </button>
        </div>
    )
}


export default LifecyclePrac;