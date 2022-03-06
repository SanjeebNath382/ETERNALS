import React,{useState,useEffect} from 'react';
import Spinner from "../images/spinner.gif";

export default function Vitals() {
    const [content, setcontent] = useState(0)
    const update = () =>{
        setInterval(()=>{
            setcontent(content+1);
        },5000)
    }
    useEffect(() => {
      update();
    }, [content])
    
    if(content==0){
        return (
            <h1 style={{textAlign:"center",alignContent:"center"}}>Please put your sensors on your arm</h1>
        )
    }
    if(content==1){
        return (
            <div style={{textAlign:"center",alignContent:"center"}}>
                <img src={Spinner}></img>
                <h2>Getting Vitals</h2>
            </div>
           
        )
    }
    if(content>=2){
        return (
            <ul style={{textAlign:"center",alignContent:"center"}}>
                <li>BPM:75</li>
                <li>Temp:96 F</li>
            </ul>
        )
    }
    

//   return (
//       <>
//           <Spinner animation="border" />
//       </>
    
//   )
}
