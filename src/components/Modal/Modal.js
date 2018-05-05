import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUrlInfo } from '../../functions/utils';

import './Modal.css';

class Modal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
		}
	}
	componentWillReceiveProps(nextProps) {
		const { url: { value } }= nextProps;
		
		if (value) {
			this.setState({
				title:fetchUrlInfo(value),
			});
		}
	}

	render() {
		const { url:{ value } } = this.props;
		const { title } = this.state;

		return (
			value 
				?	<div className='modal'>
						<div className='modal-window'>
							<a className='modal-close pointer'>&times;</a>
							<h2>Select boards to connect</h2>
							<h3>{title}</h3>
							<div className='modal-content'>
								<p>A CSS-only modal based on the :target pseudo-className. Hope you find it helpful.</p>
							</div>
						</div>
					</div>
				: ''
		);
	}
}

const mapStateToProps = state => {
	return {
		url: state.url,
	};
}

export default connect(mapStateToProps, null)(Modal);

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// // import { ToastContainer, toast, style } from 'react-toastify';
// import { Button, Header, Icon, Modal, Table, Image } from 'semantic-ui-react'

// // import { loading } from '../../store/actions/';

// import { bookForSelected, unBookForSelected } from '../../api/api';

// style({
//   colorSuccess: "#00AA9E",
//   colorError: "#FF7850",
//   padding: "0px",
// });

// class BookModal extends Component { 
//   constructor(props) {
//     super(props);

//     this.state = {
//       loadingButton: false,
//     }
//   }

//   /* UTILS */
//   userInList() {
//     const { data, user } = this.props;

//     if (data.length) {
//       for(let i = 0; i < data.length; i++) {
//         if (data[i].uid === user.uid) {
//           return true;
//         }
//       }
//     }

//     return false;
//   }

//   /* BUTTONS */
//   unBookButton(sameUser, docid) {
//     const { loadingButton } = this.state;

//     if (sameUser) {
//       return (
//         <Table.Cell textAlign='center' collapsing>
//           <Button icon='remove' className='no-radius' size='tiny' compact loading={loadingButton} color='red' onClick={() => { this.unBook(docid) }} />
//         </Table.Cell>
//       );
//     }

//     return '';
//   }

//   bookButton(uid, length) {
//     const { loadingButton } = this.state;

//     if(uid && !this.userInList()) {
//       return (
//         <Button 
//           color='green' 
//           className='no-radius'
//           inverted 
//           loading={loadingButton}
//           disabled={ length === 12 ? true : false }
//           onClick={ () => { this.bookButtonHandler() }}>
//           <Icon name='checkmark' /> Book
//         </Button>);
//     }

//     return '';
//   }

//   /* HANDLERS */
//   bookButtonHandler() {
//     const { selectedGroup, user, loaderHandler, closeModal } = this.props;

//     this.setState({
//       loadingButton: true,
//     });

//     loaderHandler(true);

//     bookForSelected(selectedGroup, user)
//       .then(r => {
//         closeModal();
//         loaderHandler(false);

//         this.setState({
//           loadingButton: false,
//         });

//         toast.success('Booked successfully! \u{1F4AA}', {
//           position: toast.POSITION.BOTTOM_LEFT
//         });
//       }).catch(e => {
//         closeModal();
//         loaderHandler(false);

//         this.setState({
//           loadingButton: false,
//         });

//         toast.error('Bad things happened, please try again! \u{1F627}', {
//           position: toast.POSITION.BOTTOM_LEFT
//         });
//       });
//   }

//   unBook(id) {
//     const { selectedGroup, loaderHandler, closeModal } = this.props;

//     this.setState({
//       loadingButton: true,
//     });

//     loaderHandler(true);

//     unBookForSelected(selectedGroup, id)
//       .then(r => {
//         closeModal();
//         loaderHandler(false);

//         this.setState({
//           loadingButton: false,
//         });

//         toast.success('Canceled successfully! \u{1F612}', {
//           position: toast.POSITION.BOTTOM_LEFT
//         });
//       }).catch(e => {
//         closeModal();     
//         loaderHandler(false);

//         this.setState({
//           loadingButton: false,
//         });

//         toast.error('Bad things happened, please try again! \u{1F627}', {
//           position: toast.POSITION.BOTTOM_LEFT
//         });
//       });
//   }

//   render() {
//     const { modalState, selectedGroup, closeModal, data, user } = this.props;

//     return (
//       <div>
//         <Modal basic open={modalState} dimmer='blurring' size='small'>
//           <Header>
//             <Icon name='info' />
//             <Header.Content>{selectedGroup.group}&emsp;<small>({selectedGroup.day} {selectedGroup.time})</small></Header.Content> 
//           </Header>
//           <Modal.Content scrolling>
//             <p>More info for selected group will go here</p>      
//             { 
//               data.length
//                 ? <Table className='transparent-background' textAlign='center' unstackable>
//                     <Table.Body>
//                       {
//                         data.map(d => {
//                           const { fullName, uid, id, picture } = d;

//                           return (
//                             <Table.Row key={uid}>
//                               <Table.Cell>
//                               <Header as='h4' image>
//                                 <Image src={picture} rounded size='small' />
//                                 <Header.Content className='white-text'>
//                                   { fullName }
//                                 {/*<Header.Subheader  className='white-text'>{email}</Header.Subheader>*/}
//                                 </Header.Content>
//                               </Header>
//                               </Table.Cell>
//                               { 
//                                 this.unBookButton(user.uid === uid, id)
//                               }
//                           </Table.Row>
//                           )
//                         })
//                       }
//                     </Table.Body>
//                 </Table>
//                 : <p className='c-text'><em>No reservations yet.</em></p>
//             }
//           </Modal.Content>
//           <Modal.Actions>
//             <Button basic className='no-radius' color='red' inverted onClick={closeModal}>
//               <Icon name='remove' /> Close
//             </Button>
//             { 
//               this.bookButton(user.uid, data.length)
//             }
//           </Modal.Actions>
//         </Modal>
//         <ToastContainer />
//       </div>
//     );
//   }

// }

// const mapStateToProps = state => { 
//   return {
//     user: state.user,
//   };
// }

// const mapDispatchToPros = dispatch => {
//   return {
//     loaderHandler: (status) => dispatch(loading(status)),
//   }
// }


// export default connect(mapStateToProps, mapDispatchToPros)(BookModal);