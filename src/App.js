import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Page0 from "./Page0";

class App extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            name: 'Karine',
            age: 25,
        };
        this.reducer0 = this.reducer0.bind( this );
    }

    reducer0() {
        return (
            ( state = this.state, action ) => {
                if ( action.type === "Monika" ) {
                    return (this.setState( { name: "You did that bro" } ));
                }
            });

    }


    componentDidMount() {

        let store = createStore( this.reducer0() );
        store.dispatch( { type: "Monika" } );
        console.log( this.state, "0" );
    }

    componentDidUpdate( prevProps, prevState, snapshot ) {
        console.log( this.state, 'update' );
    }

    render() {
        return (
            <div>
                <Provider store={createStore(this.reducer0())}>
                    <Page0/>
                </Provider>


            </div>
        );

    }


}


export default App;