import React from 'react';
import './Person.css';
import Validation from '../components/ValidationComponent';

const person =(props)=>{
    let feature=['bold']; /* Available in Person.css */
    return(
        <div className="Person">
            <p className={feature} onClick={props.click}>Welcome !! {props.name} {props.age}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
            <Validation inputLength={props.name.inputLength} />
        </div>
    )
};

export default person;
