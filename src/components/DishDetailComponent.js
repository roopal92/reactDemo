import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    comments(comments) {
        if (comments != null) {
            const comment =
                comments.map((comm) => {
                    return (
                        <div>
                            <div>{comm.comment}</div>
                            <div>  --  {comm.author}, {comm.date}</div>
                        </div>
                    );
                });
            return (<div>{comment}  </div>);
        } else {
            return (<div></div>);
        }
    }
    renderDish(dish) {
        if (dish != null) {
            return (
                <Card body outline color="primary">
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle > {dish.name}</CardTitle>
                        <CardText> {dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (<div></div>);
        }
    }

    render() {
        let dish = this.props.dish;
        if (dish != null) {
            return (
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-xs-12 col-md-5 col-1">
                            {this.renderDish(dish)}
                        </div>
                        <div class="col-12 col-sm-12 col-xs-12 col-md-5 col-2">
                            <h4>Comments</h4>
                            <div>{this.comments(dish.comments)} </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }

}

export default DishDetail;