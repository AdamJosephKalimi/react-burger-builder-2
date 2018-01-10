import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

// We make axios the second argument so we can set up a
// global error handler
const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount () {
            axios.interceptors.request.use( req => {
              this.setState({error: null});
              return req
            });
            axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
            });
        }

        // Once error is clicked (you can see it in Modal),
        // the state of the error will revert to null,
        // so the error modal will disappear.
        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

// There will be a message property on the error returned by
// firebase. That is what we are rendering: {this.state.error.message}
        render () {
            return (
                <Aux>
                    <Modal
                    show={this.state.error}
                    modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;
