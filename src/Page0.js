import React from "react";
import { connect } from "react-redux";


function Page0( state ) {



    return (
        <div>
            <h1>Page0</h1>
        </div>
    )
}

function mapStateToProps( state ) {

    return {
        state: state,
    };
}

export default connect( mapStateToProps )( Page0 );