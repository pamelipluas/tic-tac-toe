import * as React from "react";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    render() {
        return (
            <div>
                <div className="status"/>
                <div className="board-row">
                </div>
                <div className="board-row">
                </div>
                <div className="board-row">
                </div>
            </div>
        );
    }
}


export default Board;
