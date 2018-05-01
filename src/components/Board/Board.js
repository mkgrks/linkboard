import React, { Component } from 'react';
import { Card, Icon, Grid, Segment } from 'semantic-ui-react'

import './Board.css';

const Board = props => {
		const { title, description } = props;

		return (
				<Grid.Column mobile={11} tablet={5} computer={4}>
								<Card className='Board' raised href='#' fluid>
										<Card.Content header={title} />
												<Card.Content className='truncate-multi' description={description} />
												<Card.Content extra>
												<Icon name='user' />
												4 Friends
										</Card.Content>
								</Card>
				</Grid.Column>
		);
}

export default Board;
