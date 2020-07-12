import React, { Component } from 'react'
import classes from "./GameCard.module.css"
import MessageBox from "../../Messages/MessageBox/Message"
export class GameCard extends Component {

    state = {
        OldCardIndex: null,
        Attempts: 3,
        Message: "",
        Error: false,
        Counter: 0
    }

    GameCardHandler = (NewCardIndex) => {
        const { OldCardIndex, Attempts } = this.state;
        const data = this.props.children

        data[NewCardIndex].itemStatus = true;

        console.log("Data array Length " + data.length);

        this.setState({ OldCardIndex: NewCardIndex, Error: false });

        if (NewCardIndex === OldCardIndex && NewCardIndex !== null) {
            this.setState({ Message: "You are chosing same card!", Error: true })
            return true;
        }

        if (OldCardIndex !== null) {

            if (data[OldCardIndex].CardID !== data[NewCardIndex].CardID) {
                setTimeout(function () {
                    data[NewCardIndex].itemStatus = false;
                    data[OldCardIndex].itemStatus = false;
                    Attempts === 1 ? this.setState({ Message: "Game Over!", Error: true }) :
                        this.setState({ Attempts: Attempts - 1, Message: "Attempts Left : " + (this.state.Attempts - 1), Error: true, OldCardIndex: null })
                }.bind(this), 2000);
                return true;
            }

            if (data[OldCardIndex].CardID === data[NewCardIndex].CardID) {
                if (this.state.Counter === 75) {
                    this.setState(prevState => ({ Message: "Congratulation You won!", Error: true, OldCardIndex: null, Counter: prevState.Counter + 25 }))
                }
                else {
                    this.setState(prevState => ({ Message: "Good Job! Point + " + (this.state.Counter + 25), Error: true, OldCardIndex: null, Counter: prevState.Counter + 25 }))
                }
                return true;
            }
        }
    }

    render() {

        const data = this.props.children

        let ErrorObject = this.state.Error ? <MessageBox message={this.state.Message} score={this.state.Counter} /> : null

        return (
            <section className={classes.GameSection}>
                {ErrorObject}
                <div className={classes.GameHeadRow}>
                    <h3>Attempts Left : {this.state.Attempts}</h3>
                    <h2>Match Heroes</h2>
                    <h3>Score : {this.state.Counter}</h3>
                </div>
                <div className={classes.GameCardHead}>
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index * 2} className={classes.GameCard}>
                                    <div key={index * 2} className={classes.GameCardArea}>
                                        <button key={index * 2}
                                            className={item.itemStatus ? classes.GameCardFront : classes.GameCardBack}
                                            disabled={item.itemStatus ? true : false}
                                            onClick={() => this.GameCardHandler(index)}>
                                            {
                                                item.itemStatus ?
                                                    <>
                                                        <h3>{item.Heading}</h3>
                                                        <img src={item.ImageURL} alt="" />
                                                    </>
                                                    : null
                                            }
                                        </button>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}

export default GameCard
