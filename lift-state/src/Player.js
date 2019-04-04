import React, {Component} from "react"

class Player extends Component
{
    //runs the function to chain the function up the the parent component
    ChangePlayer =(e)=>
    {
        this.props.click(this.props.playerNumber)
    };
    render() {
        return (
            <div>
                <p>Player:{this.props.playerNumber}</p>
                <p>{this.props.score}</p>
                <button onClick={this.ChangePlayer}>1pt</button>
            </div>
        );
    }
}


export default Player