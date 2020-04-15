import {reducer} from "./Reducer";
import { createStore } from "redux";


export let store = createStore(reducer);