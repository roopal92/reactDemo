import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component{

    render(){
        dish=this.props.dish;
        if(dish!=null){
            return (
                <Card body outline color="primary">
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle> {dish.name}</CardTitle>
                        <CardText> {dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }else{
            return (<div></div>);   
        }
    }

}

export default DishDetail;