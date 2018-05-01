import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import { Board } from '../';

import './Boards.css';

class Boards extends Component {
    render() {
        return (
            <Grid className='Boards' container>
                <Board title='Test' description='Test 123 I dont know what toTest 123 I dont know what toTest 123 I dont know what toTest 123 I dont know what toTest 123 I dont know what toTest 123 I dont know what toTest 123 I dont know what to do'/>
                <Board title='Test' description='Test 123 I dont know what to do'/>
                <Board title='Test' description='Test 123 I dont know what to do'/>
                <Board title='Test' description='Test 123 I dont know what to do'/>
                <Board title='Test' description='Test 123 I dont know what to do'/>
                <Board title='Test' description='Test 123 I dont know what to do'/>
                <Board title='Test' description='Test 123 I dont know what to do'/>
                <Board title='Test' description='Test 123 I dont know what to do'/>
                <Board title='Test' description='Test 123 I dont know what to do'/>
                <Board title='Test' description='Test 123 I dont know what to do'/>
                <Board title='Test' description='Test 123 I dont know what to do'/>
                <Board title='Test' description='Test 123 I dont know what to do'/>
                <Board title='Test' description='Test 123 I dont know what to do'/>
                <Board title='Test' description='Test 123 I dont know what to do'/>
                <Board title='Test' description='Test 123 I dont know what to do'/>
                <Board title='Test' description='Test 123 I dont know what to do'/>
                <Board title='Test' description='Test 123 I dont know what to do'/>
                <Board title='Test' description='Test 123 I dont know what to do'/>
                <Board title='Test' description='Test 123 I dont know what to do'/>
                <Board title='Test' description='Test 123 I dont know what to do'/>
            </Grid>
        );
    }
}

export default Boards;
