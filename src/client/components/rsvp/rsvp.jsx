import React from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
        test : state.rsvpreducer.test,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        testDispatch: () => dispatch({ type: 'TEST' }),
    }
}

class Rsvp extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="content rsvp">
                <p>RSVP skjema!!!!</p>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);
