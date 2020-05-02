import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';
import Person from '../shared/Person';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
            persons: [
                { name: 'Roopal', age: 22 }
            ],
            showPersons: false
        }
        console.log("Menu component constructor is invoked");
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    componentDidMount() {
        console.log("Menu componentDidMount is invoked");
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: 'Rai', age: 23 }
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: event.target.value, age: 23 }
            ]
        })
    }

    render() {
        const style = {
            backgroundColor: 'green',
            color:'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let loggedInUser = null;
        if (this.state.showPersons) {
            loggedInUser = (
                <div >
                    <Person name={this.state.persons[0].name} age={this.state.persons[0].age}
                        click={this.switchNameHandler}
                        changed={this.nameChangedHandler }
                        inputLength={this.state.persons[0].name.length}></Person>
                    <button onClick={this.switchNameHandler}> Switch Name</button>
                </div>
            );

            style.backgroundColor= 'grey';

        }
        const menu = this.props.dishes.map((dish) => { // li display as list
            return (
                <div key={dish.id} className="col-12  col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
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

                {loggedInUser}
                <button style={style} onClick={this.togglePersonsHandler}> Hide Text</button>
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