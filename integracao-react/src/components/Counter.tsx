import React, { Component } from "react";
import ValueCounter from "./ValueCounter";
import logRender from "../decorators/logRender"

interface CounterProps {
    initialValue?: number;
}

interface CounterState {
    value: number;
}

@logRender
export default class Counter extends Component<CounterProps, CounterState> {
    public state = { value: this.props.initialValue || 0 };

    private setValue = (delta: number) => {
        this.setState({ value: this.state.value + delta });
    }
    render() {
        return (
            <div>
                <ValueCounter contador={this.state.value} />
                <button onClick={() => this.setValue(10)}>+</button>
                <button onClick={() => this.setValue(-10)}>-</button>
            </div>
        )
    }
}