import React,{useState} from 'react'

export default function Trial(props) {

   function handleChange(e){



    setText(e.target.value)
  
    }
   function upperCase(){
    setText(text.toUpperCase());
console.log(text);
props.showAlert("Converted to uppercase!", "success");

    }
    function lowerCase(){
      setText(text.toLowerCase());
      props.showAlert("Converted to lowercase!", "success");
      console.log(text);
    }
   function capatilize(){
     let temp=text[0].toUpperCase();
    for (let index = 1; index < text.length; index++) {
      if(text[index-1]===" " && text[index]!==" "){

        console.log('text')
        temp+=text[index].toUpperCase();
      }
      else{
        
        temp+=text[index];
      }
      
    }
    setText(temp)
    props.showAlert("Converted to Capitilize!", "success");
  }
  
   function clear(){
    setText('');
console.log(text);
props.showAlert("Text Cleared!", "success");
    }
    const [text,setText]=useState('Enter text here');
    let color={
      color:props.check==='dark'?'white':'black',
    }
    const background={
      backgroundColor:props.check==='dark'?'#2D033B':'#0d6efd'
    }
  return (
<>
<div className="mb-3 container my-3">
<h1 style={color}>Enter your text here
</h1>
  <textarea className="form-control" id="my-box" value={text} onChange={handleChange} rows="8"></textarea>
<button className="btn btn-primary my-3" style={background} onClick={upperCase}>Convert to uppercase</button>
<button className="btn btn-primary mx-3 my-3"  style={background}  onClick={lowerCase}>Convert to lowercase</button>
<button className="btn btn-primary mx-3 my-3" style={background}onClick={capatilize}>Convert to capatilize</button>
<button className="btn btn-danger mx-3 my-3"   onClick={clear}>Clear Text</button>

</div>
<div className="container" style={color}>
  <h3>{text.split(" ").length} words and {text.length} Characters </h3>
  <p>{text.length>0?text:"Nothing to preview!"}</p>
</div>

</>
  )
}
 