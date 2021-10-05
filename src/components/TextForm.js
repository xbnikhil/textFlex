import React, {useState} from 'react'

export default function TextForm(props) {
    const HandleUpClick = ()=>{
        // console.log('HandleUpclick Has Been Fired')
        // setText("Converted to Uppercase")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");
        }
    const HandleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowwercase", "success");
        }
    const HandleClearClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared Successfully", "success");
        }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces has been removed successfully !", "success");
    }

    const HandleOnClick = (event)=>{
        // console.log("HandleOnClick ahs been Fired")
        setText(event.target.value)
    }
    const [text, setText] = useState("")
    // text = "Wrong" // Wrong way to change state
    // setText = ("Right") // Right way to change state
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}} >
            <h1>{props.Heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={HandleOnClick} style={{backgroundColor: props.mode==='dark'?'#1e2125':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick= {HandleUpClick} > Change to Uppercase </button>
            <button className="btn btn-success mx-1" onClick= {HandleLowClick} > Change to Lowercase </button>
            <button className="btn btn-primary mx-1" onClick= {HandleClearClick} > Clear Text </button>
            <button className="btn btn-success mx-1" onClick= {handleExtraSpaces} > Remove Extra Space </button>
        </div>
        <div className="container my-3" style={{ color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary </h2>
            <div>
                {text.split(" ").length} words and {text.length} characters
                <h2>
                Preview
                </h2>
                <p>
                {text}
                </p>
            </div>
        </div>
        </>
        

    )   
}
