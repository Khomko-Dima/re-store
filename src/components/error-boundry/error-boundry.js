import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator'

export default class ErrorBoundry extends Component {

	state = {
		hasError: false
	}
	
	cpmponentDidCatch() {
		this.setState({ hasError: true });
	} //сработает когда появится ошибка

	render() {
		if (this.state.hasError) {
			return <ErrorIndicator />
		}
		return this.props.children;
	}
}