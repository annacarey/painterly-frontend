import React, {useState, Fragment} from 'react';
import { SliderPicker } from 'react-color';
import styled from 'styled-components'

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
        fetch('https://painterly-api.herokuapp.com/paintings', {
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
        <ToolbarDiv> 
            <Title>
                <label>Title your work!</label>
                <input type="text" onChange={handleChange} value={title}/>
                <button onClick={submitPainting}> Save Painting </button>
            </Title>
            <ColorPicker>
                <p>Pick your own!</p>
                <SliderPicker
                    color={customColor} 
                    onChangeComplete={handleChangeComplete}
                />
            </ColorPicker>
            <div onClick={handleClick} className="square" style={{backgroundColor: customColor}} />
            <div onClick={() => props.setColor("#FF0900")} className="square" style={{backgroundColor: "#FF0900"}} />
            <div onClick={() => props.setColor("#0079FF")} className="square" style={{backgroundColor: "#0079FF"}} />
            <div onClick={() => props.setColor("#00F11D")} className="square" style={{backgroundColor: "#00F11D"}} />
            <div onClick={() => props.setColor("#FFEF00")} className="square" style={{backgroundColor: "#FFEF00"}} />
            <div onClick={() => props.setColor("#FF7F00")} className="square" style={{backgroundColor: "#FF7F00"}} />
            <div onClick={() => props.setColor("#A800FF")} className="square" style={{backgroundColor: "#A800FF"}} />
            <div onClick={() => props.setColor("white")} className="last-square" style={{backgroundColor: "white"}}>Eraser</div>
            <br></br>
        </ToolbarDiv>
    )

}

// Pretty rainbow: 
// {BackgroundColor: "#cdedfd",
//             backgroundImage: "linear-gradient(319deg, #cdedfd 0%, #ffec82 37%, #ffcfd2 100%)"}



export default Toolbar;

const ToolbarDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    align-items: center;
    margin-top: 10px;
`

const Title = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`

const ColorPicker = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 10px;
    width: 100%;
`