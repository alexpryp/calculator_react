import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Calculator() {
    return (
        <div className="calculator">
            <div className="display">0</div>
            <div className="buttons-panel">
                <div className="buttons-row">
                    <button className="button-blue">C</button>
                    <button className="dark-grey">&#247;</button>
                    <button className="dark-grey">&#215;</button>
                    <button className="dark-grey"><i className="fa fa-backspace"></i></button>
                </div>
                <div className="buttons-row">
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className="dark-grey">-</button>
                </div>
                <div className="buttons-row">
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button className="dark-grey">+</button>
                </div>
                <div className="buttons-row">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button className="dark-grey">( )</button>
                </div>
                <div className="buttons-row">
                    <button>0</button>
                    <button>.</button>
                    <button>&#177;</button>
                    <button className="button-orange">=</button>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<Calculator />, document.getElementById('root'));
