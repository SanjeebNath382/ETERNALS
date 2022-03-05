import React,{useState,useEffect} from 'react';
import Spinner from 'react-bootstrap/Spinner'

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
            <h1>Second Content</h1>
        )
    }
    if(content>=2){
        return (
            <h1>Third Content</h1>
        )
    }
    

//   return (
//       <>
//           <Spinner animation="border" />
//       </>
    
//   )
}
