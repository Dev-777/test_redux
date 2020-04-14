import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import {createStore} from "redux";
import Reducer from "./reducer";

ReactDom.render(
    <Provider store={createStore(Reducer)}>
        <App/>
    </Provider>
    ,
    document.getElementById( 'root' )
);