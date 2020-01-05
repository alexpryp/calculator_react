import React, {  } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import { throwStatement, forInStatement } from '@babel/types';


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            secondValue: '',
            float: false,
            negative: false,
        };

        this.handleValue = this.handleValue.bind(this);
    }

    handleValue(event) {
        const target = event.target;
        const dataType = target.attributes[0].name;

        if (dataType === "data-value") {
            if (target.attributes[0].value === "." && this.state.float === false) {
                this.setState((state) => ({
                    value: state.value + target.attributes[0].value,
                    float: true,
                }));
            } else if (target.attributes[0].value === "." && this.state.float === true) {
                return;
            } else if (target.attributes[0].value === "-+" && this.state.negative === false) {
                if (this.state.value === 0) {
                    this.setState((state) => ({
                        value: "-",
                        negative: true,
                    }));
                } else {
                    this.setState((state) => ({
                        value: "-" + state.value,
                        negative: true,
                    }));
                }
            } else if (this.state.value === 0) {
                this.setState({value: target.attributes[0].value});
            } else {
                this.setState((state) => ({value: state.value + target.attributes[0].value}));
            }
        }
    }

    render() {
        return (
            <div className="calculator">
                <div className="display">{this.state.value}</div>
                <div className="buttons-panel" onClick={this.handleValue}>
                    <div className="buttons-row">
                        <button className="button-blue">C</button>
                        <button className="dark-grey" data-operator="/">&#247;</button>
                        <button className="dark-grey" data-operator="*">&#215;</button>
                        <button className="dark-grey backspace-button"><i className="fa fa-backspace"></i></button>
                    </div>
                    <div className="buttons-row">
                        <button data-value="7">7</button>
                        <button data-value="8">8</button>
                        <button data-value="9">9</button>
                        <button className="dark-grey" data-symbol="-">&#8722;</button>
                    </div>
                    <div className="buttons-row">
                        <button data-value="4">4</button>
                        <button data-value="5">5</button>
                        <button data-value="6">6</button>
                        <button className="dark-grey" data-symbol="+">+</button>
                    </div>
                    <div className="buttons-row">
                        <button data-value="1">1</button>
                        <button data-value="2">2</button>
                        <button data-value="3">3</button>
                        <button className="dark-grey">&#8730;</button>
                    </div>
                    <div className="buttons-row">
                        <button data-value="0">0</button>
                        <button data-value=".">.</button>
                        <button data-value="-+">&#177;</button>
                        <button className="button-orange" data-symbol="=">=</button>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));

