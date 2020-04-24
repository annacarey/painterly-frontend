import React from 'react';
import Board from '../components/Board'
import Toolbar from '../components/Toolbar'
import './Containers.css';
import styled from 'styled-components'
import {grid1, grid2, grid3} from './grid.js'

class Canvas extends React.Component {
  
   state = {
       currentGrid: grid3,
       currentColor: "#FFFFFF"
   }

   componentDidMount() {
        this.props.currentPainting && this.setState({currentGrid: this.props.currentPainting.grid})
   }

   paintCell = (xCoordinate, yCoordinate) => {
       const newGrid = this.state.currentGrid.map((row, rowIndex) => {
            return row.map((cell, cellIndex) => {
                if (rowIndex === xCoordinate && cellIndex ===yCoordinate) {
                    cell = this.state.currentColor
                }
                return cell
            })
        }) 
        this.setState(() => {
            return {currentGrid: newGrid}
        }) 
    }

   setColorOnClick = (color) => {
       this.setState({currentColor: color})
   }

   
    render() {
        return (
        <Wrapper>
            <Toolbar 
                history = {this.props.history}
                currentGrid={this.state.currentGrid} 
                paintCell={this.paintCell} 
                setColor={this.setColorOnClick} 
                currentColor={this.state.currentColor}
                user={this.props.user}
                addPainting={this.props.addPainting}/>
            <CanvasWrapper>
                <Header className="create-drawing">Create your drawing below</Header>
                <HorizontalLine />
                <Board boardSize="large" currentColor={this.state.currentColor} currentGrid={this.state.currentGrid} paintCell ={this.paintCell}/>
            </CanvasWrapper>
        </Wrapper>
        )
    }
}

export default Canvas;

const Wrapper = styled.div`
    display: flex;
    margin-left: 10px;
`

const CanvasWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 20px;
`

const Header = styled.h1`
    width: 100%;
    margin: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
`

const HorizontalLine = styled.hr`
    width: 100%;
    height: 3px;
    margin-bottom: 20px;
`

// props for board: 
// currentColor={this.state.currentColor} currentGrid={this.state.currentGrid}