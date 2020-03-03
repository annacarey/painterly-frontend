import React, {useState} from 'react';

function Toolbar (props) {

    const [title, setTitle] = useState("")

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const userId = props.user.id
    function submitPainting() {
        console.log(title)
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
            props.addPainting(paintingData)
            props.history.push("/dashboard/paintings")
        })
    }
    
    return (
        <div className="toolbar"> 
            
            <div onClick={() => props.setColor("white")} className="square">Eraser</div>
            <div onClick={() => props.setColor("red")} className="square">Red</div>
            <div onClick={() => props.setColor("blue")} className="square">Blue</div>
            <div onClick={() => props.setColor("green")} className="square">Green</div>
            <div onClick={() => props.setColor("yellow")} className="square">Yellow</div>
            <div onClick={() => props.setColor("orange")} className="square">Orange</div>
            <div onClick={() => props.setColor("purple")} className="square">Purple</div>


        <button onClick={submitPainting}> Save Painting </button>
        <input type="text" onChange={handleChange} value={title}/>
        <label>Title:</label>

        </div>
    )

}



export default Toolbar;