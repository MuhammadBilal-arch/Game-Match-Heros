import React, { Component } from 'react'
import classes from "./BlackScreen.module.css"
export default class BlackScreen extends Component {

    render() {
        return (
            <div className = {classes.BlackScreen}>
                {this.props.children}
            </div>
        )
    }
}
