import React, { Component } from 'react';
import { Card, Icon, Grid, Segment, CardContent, Label } from 'semantic-ui-react'

import './Board.css';

const Board = props => {
	const { title, description } = props;
	const truncate = {
		display: '-webkit - box',
		webkitLineClamp: '3',
		webkitBoxOrient: 'vertical',
		overflow: 'hidden'
	}

	return (
		<Grid.Column mobile={11} tablet={5} computer={4}>
			<Card className='Board' href='#' fluid>
				<Card.Content>
					<Card.Header className='truncate' content={title} />
					<Card.Description className='truncate-multi board-descr' style={truncate} content={description} />
				</Card.Content>
				<Card.Content extra className='board-extra'>
					<Icon name='user' />
					4 Friends
					<Label attached='bottom right'><Icon name='linkify' color='pink' />Copy</Label>

					
				</Card.Content>
			</Card>
		</Grid.Column>
	);
}

export default Board;
