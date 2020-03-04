import React, {useState, Fragment} from 'react';
import { SliderPicker } from 'react-color';

function Toolbar (props) {

    const [title, setTitle] = useState("")
    const [customColor, setCustomColor] = useState("")

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleClick = () => {
        props.setColor(customColor)
    }

    const handleChangeComplete = (color) => {
        setCustomColor(color.hex)
    }

    const userId = props.user.id

    function submitPainting() {
        fetch('http://localhost:3000/paintings', {
        method: "POST",
        headers: {'content-type': 'application/json',
                accepts: 'application/json'},
        body: JSON.stringify({
            title: title,
            grid: props.currentGrid,
            user_id: userId
        })}
        )
        .then(resp => resp.json())
        .then(paintingData => {
            if (paintingData.errors) {
                alert(paintingData.errors)
            } else {
                props.addPainting(paintingData)
                props.history.push("/dashboard/paintings")
            }
        })
    }
    
    return (
        <div className="toolbar"> 
            
            <div onClick={() => props.setColor("white")} className="last-square" style={{backgroundColor: "white"}}>Eraser</div>
            <div onClick={() => props.setColor("red")} className="square" style={{backgroundColor: "red"}} />
            <div onClick={() => props.setColor("blue")} className="square" style={{backgroundColor: "blue"}} />
            <div onClick={() => props.setColor("green")} className="square" style={{backgroundColor: "green"}} />
            <div onClick={() => props.setColor("yellow")} className="square" style={{backgroundColor: "yellow"}} />
            <div onClick={() => props.setColor("orange")} className="square" style={{backgroundColor: "orange"}} />
            <div onClick={() => props.setColor("purple")} className="square" style={{backgroundColor: "purple"}} />
            <div onClick={handleClick} className="square" style={{backgroundColor: customColor}} />
            <br></br>
            <SliderPicker
                color={customColor} 
                onChangeComplete={handleChangeComplete}
            />
            <p>Pick your own!</p>
             <button onClick={submitPainting}> Save Painting </button>
        <input type="text" onChange={handleChange} value={title}/>
        <label>Title your work!</label>

        </div>
    )

}

// Pretty rainbow: 
// {BackgroundColor: "#cdedfd",
//             backgroundImage: "linear-gradient(319deg, #cdedfd 0%, #ffec82 37%, #ffcfd2 100%)"}



export default Toolbar;