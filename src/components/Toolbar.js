import React from 'react';


function Toolbar (props) {


console.log(props.currentGrid)

function submitPainting() {
    fetch('http://localhost:3000/paintings',{
    method: "POST",
    headers: {'content-type': 'application/json',
            accepts: 'application/json'},
    body: JSON.stringify({
        title: "nothing",
        grid: props.currentGrid,
        user_id: 3
    })}
    )
    .then(resp => resp.json())
    .then(paintingdata => console.log(paintingdata, 'is this it'))
}
    
return (
<div> 
    
<div onClick={() => props.setColor("red")} className="square">Red</div>
<div onClick={() => props.setColor("blue")} className="square">Blue</div>
<div onClick={() => props.setColor("green")} className="square">Green</div>
<div onClick={() => props.setColor("yellow")} className="square">Yellow</div>
<div onClick={() => props.setColor("orange")} className="square">Orange</div>
<div onClick={() => props.setColor("purple")} className="square">Purple</div>
<div onClick={() => props.setColor("white")} className="square">Eraser</div>

<button onClick={submitPainting}> Save Painting </button>

</div>
)

}

export default Toolbar;