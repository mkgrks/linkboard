import React, { Component } from 'react';
import './Board.css';

const Board = props => {
    const { title, description } = props;

    return (
        <div className='Board shadow pointer'>
            <h4><b>{ title }</b></h4>
            <p>{ description }</p> 
        </div> 
    );
}

export default Board;
