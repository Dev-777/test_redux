import React, { Component } from "react";
import { connect } from "react-redux";
import Page0 from "./Page0";

class App extends Component {
    constructor(state) {
        super(state);
        this.state = {
            name: "Karine",
            age: 26,
        }
    }


    render() {
state.dispatch(this.state);
        return (
            <h1>
                <Page0/>
            </h1>
        );
    }



}

function mapStateToProps( state ) {

    return {
        state: state,
    };
}

export default connect( mapStateToProps )( App );