import React, { Component } from "react";
import Card from './Card';

class CardList extends Component {
    render() {

        const { robots } = this.props;
        const cardsArray = robots.map((user) => {
            return (
                <Card
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                />
            );
        })

        return (
            <div>
                {cardsArray}
            </div>
        );
    }
}

export default CardList