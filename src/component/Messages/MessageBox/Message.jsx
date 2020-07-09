import React, { Component } from 'react'
import classes from "./Message.module.css"
import BlackScreen from "../BackScreen/BlackScreen"
export default class Message extends Component {

    state =
        {
            ErrorClose: false
        }

    RemoveErrorMessage = () => {
        this.setState({ ErrorClose: true })
    }

    render() {
        return (
            this.state.ErrorClose === false ?
                <BlackScreen>
                    <div className={classes.MessageBox} >
                        {this.props.message}<br/>
                        {/* <h5>+ {this.props.score}</h5> */}
                        <button className={classes.btn}><i className="fa fa-close" onClick={this.RemoveErrorMessage}></i></button>
                    </div>
                </BlackScreen>
                : null
        )
    }
}
