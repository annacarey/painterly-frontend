import React from 'react';


function Toolbar (props) {


return (
<div> 
    
<div onClick={() => props.setColor("red")} className="square">Red</div>
<div onClick={() => props.setColor("blue")} className="square">Blue</div>
<div onClick={() => props.setColor("green")} className="square">Green</div>
<div onClick={() => props.setColor("yellow")} className="square">Yellow</div>
<div onClick={() => props.setColor("orange")} className="square">Orange</div>
<div onClick={() => props.setColor("purple")} className="square">Purple</div>

</div>
)

}

export default Toolbar;