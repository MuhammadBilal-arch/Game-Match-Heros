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
                Attempts === 0 ?
                    this.setState({ Message: "Game Over!", Error: true })
                    :
                    this.setState({ Attempts: Attempts - 1, Message: "Card doesnt matched!", Error: true, OldCardIndex: null })

                // data[OldCardIndex].itemStatus = false;
                // data[NewCardIndex].itemStatus = false;
                return true;
            }

            if (data[OldCardIndex].CardID === data[NewCardIndex].CardID) {
                const index = data[NewCardIndex].CardID;
                this.setState(prevState =>({ Message: "Good Job! Point +10", Error: true, OldCardIndex: null, Counter: prevState.Counter + 10 }))
                for (var j = 0; j < 2; j++) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].CardID === index) {
                            // data.splice(i, 1)                            
                            // data[i].itemStatus = false;
                        }
                    }
                }
                return true;
            }
        }
    }

    render() {

        const data = this.props.children

        let ErrorObject = this.state.Error ? <MessageBox message={this.state.Message} score = {this.state.Counter} /> : null

        return (
            <section className={classes.GameSection}>
                {ErrorObject}
                    <div className = {classes.GameHeadRow}>                    
                        <h3>Attempts Left : {this.state.Attempts}</h3>
                        <h2>Match Heroes</h2>
                        <h3>Score : {this.state.Counter}</h3>
                    </div>
                <div className={classes.GameCardHead}>
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index * 2} className={classes.GameCard} onClick={() => this.GameCardHandler(index)}>
                                    {
                                        item.itemStatus ?
                                            <>
                                                <h3>{item.Heading}</h3>
                                                <img src={item.ImageURL} alt="" />
                                            </>
                                            : null
                                    }
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
