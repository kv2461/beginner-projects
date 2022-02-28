import React from "react";
import Square from "./Square";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i){
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({squares:squares,
        xIsNext: !this.state.xIsNext,
    });
    }

    renderSquare(i) {
        return (
        <Square
         value={this.state.squares[i]}
         onClick={() => this.handleClick(i)}
         />
        );
    }

    renderBlank(i) {
        return (
        <Square
         value="..."
         />
        );
    }
    

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className ="status">{status}</div>
                <div className ="board-row">
                    {this.renderBlank(0)}
                    {this.renderBlank(0)}
                    {this.renderSquare(0)}
                    {this.renderBlank(0)}
                    {this.renderBlank(0)}
                </div>
                <div className="board-row">
                    {this.renderBlank(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderBlank(0)}
                </div>
                <div className="board-row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0,1,4],
        [0,2,6],
        [0,3,8],
        [1,2,3],
        [4,5,6],
        [5,6,7],
        [6,7,8],
    ];
    for (let i=0;i<lines.length;i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}

export default Board;