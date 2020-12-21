import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle
} from 'reactstrap';

class DishdetailComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish })
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(comments) {
        const mycomments = comments.map((com) => {
            return (
                <li key={com.id}>
                    <p>{com.comment}</p>
                    <p>--{com.author}, {com.date}</p>
                </li>
            )
        });
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">{mycomments}</ul>
            </div>
        )
    }

    render() {
        if (this.props.selectedDish != null) {
            return (
                <div className="container ml-1">
                    <div className="row">
                        <div className="col-12 col-md-5 mt-1">
                            {this.renderDish(this.props.selectedDish)}
                        </div>
                        <div className="col-12 col-md-5 mt-1">
                            {this.renderComments(this.props.selectedDish.comments)}
                        </div>
                    </div>
                </div>

            )
        } else {
            return (<div></div>);
        }
    }
}

export default DishdetailComponent;