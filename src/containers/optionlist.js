import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectOption } from '../actions/index';



class OptionList extends Component {

    createListItems() {
        return this.props.users.map((user) => {
            return (
                // eslint-disable-next-line 
                <li className="left-option" onClick={() => this.props.selectOption(user)} key={user.id} id={user.name}> <a href="#">{user.name} </a></li>
            );
        });
    }

    render() {
        return (
            <ul className="left-options">
             {/* <div className="nav nav-pills nav-stacked"> */}
                {this.createListItems()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectOption: selectOption }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(OptionList);