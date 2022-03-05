import React,{useState,useEffect} from 'react';
import Spinner from "../images/spinner.gif";

export default function Vitals() {
    const [content, setcontent] = useState(0)
    const update = () =>{
        setInterval(()=>{
            setcontent(content+1);
        },3000)
    }
    useEffect(() => {
      update();
    }, [content])
    
    if(content==0){
        return (
            <h1>Please put your sensors on your arm</h1>
        )
    }
    if(content==1){
        return (
            <>
                <img src={Spinner}></img>
                <h2>Getting Vitals</h2>
            </>
           
        )
    }
    if(content>=2){
        return (
            <ul>
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
