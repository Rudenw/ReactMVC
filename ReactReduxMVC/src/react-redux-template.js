import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class $itemname$ extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)($itemname$);