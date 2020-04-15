import React, { Component } from "react";
import { initialState } from "./initialState";
import {store} from "./Store";
import { Provider } from "react-redux";
import Page0 from "./Page0";

class App extends Component {
    constructor( props ) {
        super( props );


    }

    componentDidMount() {

        console.log( "componentDidMount" , initialState.name);
    }


    render() {
        return (
            <div>
                <Provider store={store}>
                    <Page0/>
                </Provider>

            </div>
        );
    }

}

export default App;