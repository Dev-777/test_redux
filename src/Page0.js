import React from "react";
import { connect } from "react-redux";

function Page0( gexam ) {

    console.log( gexam, "histerik" );

    return (
        <div>
            <h1>Page0</h1>
        </div>
    );

}


let mapStateToProps = ( state ) => {
    console.log( state, "kkk" );
    return {
        state
    };
};

export default connect( mapStateToProps )( Page0 );