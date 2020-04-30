import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import DishDetail from './DishDetailComponent';

class Menu extends Component{

    constructor(props){
        super(props);
        this.state={
            selectedDish:null
        }
        console.log("Menu component constructor is invoked");
    }

    onDishSelect(dish){
        this.setState({selectedDish:dish});
    }

    componentDidMount(){
        console.log("Menu componentDidMount is invoked");
    }
   
    render(){
        const menu=this.props.dishes.map((dish)=>{ // li display as list
            return (
                <div key={dish.id} className="col-12  col-md-5 m-1"> 
                    <Card onClick={()=>this.onDishSelect(dish)}>         
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle> {dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div> //key helps recognise each of the element so when it needs to updated to identify it
            );
        });
        
        console.log("Menu component render is invoked");

        return (
            <div className="container">
                <div className="row">
                  {menu}
                </div>
                <div>
                    <div className="row">
                       <DishDetail dish={this.state.selectedDish}></DishDetail>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;