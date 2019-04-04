import React, { Component } from 'react';
import './App.css';
import Player from "./Player";

class App extends Component {

    //added clicked to record who clicked last, score1 and score2 for the core of players and winner to record who is ahead
    constructor(props) {
        super(props);
        this.state=
            {
                clicked:'None!',
                score1:0,
                score2:0,
                winner:""
            }
    }
    //record who clicked the button last and adds score based on who clicked their button
    PlayerClick =(player) =>
    {
      this.setState({clicked:` Player:${player} clicked last`}, this.playerScore(player))
    };
    //if statement to compare who clicked their button then adds a point to their score and then evaluates to see who is ahead
    playerScore =(player) =>
    {
        if(player ===1)
        {
            this.setState({score1: this.state.score1 += 1},this.winnerEvaluate);

        }
        else
            {
                this.setState({score2:this.state.score2+=1},this.winnerEvaluate)
            }
    };


    // compares the scores of each player to first see if either is greater than starting score then evaluate to see who is ahead
    //if both scores are the same they will simply be tied
    winnerEvaluate = () =>
    {
      if(this.state.score1 > 0 || this.state.score2 > 0)
      {
          if(this.state.score1 === this.state.score2)
          {
              this.setState({winner:"tied"})
          }
          else if(this.state.score1 > this.state.score2)
          {
              this.setState({winner:"Player 1 is ahead"})
          }
          else
              {
                  this.setState({winner:"Player 2 is ahead"})
              }
      }
    };
    render() {
    return (
      <div className="App">
          <p>{this.state.winner}</p>
          {this.state.clicked}
          <Player playerNumber={1} score={this.state.score1}  click={this.PlayerClick}/>
          <Player playerNumber={2} score={this.state.score2} click={this.PlayerClick}/>
      </div>
    );
  }
}

export default App;
