import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    componentDidMount() {
        console.log("DishDetail componentDidMount is invoked");
    }

    componentDidUpdate(){
        console.log("DishDetail componentDidUpdate is invoked");
    }

    comments(comments) {
        if (comments != null) {
            const comment =
                comments.map((comm) => {
                    return (
                        <div class="container">
                            <div>{comm.comment}</div>
                            <div>  --  {comm.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comm.date)))}</div>
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
        console.log("DishDetail render is invoked");
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