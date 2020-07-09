import React, { PureComponent } from 'react'
import GameCard from "./GameCard/GameCard"
import classes from "./Game.module.css"
class Games extends PureComponent {

    state =
        {
            data:
                [
                    {
                        CardID: 1,
                        Heading: "Batman",
                        ImageURL: "./Assets/Batman.jpg",
                        itemStatus: false
                    },
                    {
                        CardID: 2,
                        Heading: "Superman",
                        ImageURL: "./Assets/Superman.jpg",
                        itemStatus: false
                    },
                    {
                        CardID: 3,
                        Heading: "Spiderman",
                        ImageURL: "./Assets/Spiderman.jpg",
                        itemStatus: false
                    },
                    {
                        CardID: 2,
                        Heading: "Superman",
                        ImageURL: "./Assets/Superman.jpg",
                        itemStatus: false
                    },
                    {
                        CardID: 3,
                        Heading: "Spiderman",
                        ImageURL: "./Assets/Spiderman.jpg",
                        itemStatus: false
                    },
                    {
                        CardID: 1,
                        Heading: "Batman",
                        ImageURL: "./Assets/Batman.jpg",
                        itemStatus: false
                    },
                    {
                        CardID: 4,
                        Heading: "Antman",
                        ImageURL: "./Assets/Antman.jpg",
                        itemStatus: false
                    },
                    {
                        CardID: 4,
                        Heading: "Antman",
                        ImageURL: "./Assets/Antman.jpg",
                        itemStatus: false
                    }
                ]
        }

    render() {

        return (
            <div className={classes.GameBox}>
                <GameCard>
                    {this.state.data}
                </GameCard>
            </div>
        )
    }
}

export default Games
