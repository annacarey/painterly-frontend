import React from 'react';

class Toolbar extends React.Component {

    state = { 
        title: ""
    }

    handleTitle = (e) => {
        this.setState({title: e.target.value})
    }


    submitPainting = (e) => {        
        e.preventDefault()
        if(this.state.title !== "") {
        fetch('http://localhost:3000/paintings',{
        method: "POST",
        headers: {'content-type': 'application/json',
                accepts: 'application/json'},
        body: JSON.stringify({
            title: this.state.title,
            grid: this.props.currentGrid,
            user_id: this.props.user.id
        })}
        )
        .then(resp => resp.json())
        .then(paintingData => {
            this.props.addPainting(paintingData)
        })
    } else {
        alert('Please add a title for your painting! ')
    }
    }

    render() { 
    return (
        <div>
        <div className="toolbar"> 
            
            <div onClick={() => this.props.setColor("white")} className="square">Eraser</div>
            <div onClick={() => this.props.setColor("red")} className="square">Red</div>
            <div onClick={() => this.props.setColor("blue")} className="square">Blue</div>
            <div onClick={() => this.props.setColor("green")} className="square">Green</div>
            <div onClick={() => this.props.setColor("yellow")} className="square">Yellow</div>
            <div onClick={() => this.props.setColor("orange")} className="square">Orange</div>
            <div onClick={() => this.props.setColor("purple")} className="square">Purple</div>

        <form onSubmit={this.submitPainting}>
        <input type="text" name="title" onChange={this.handleTitle} value={this.state.title} placeholder="Title"/>
        <input type="submit" Submit/>
        </form>
        
        </div>
        </div>
    )


}
}




export default Toolbar;