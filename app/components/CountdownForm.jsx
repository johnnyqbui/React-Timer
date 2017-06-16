import React from 'react';

class CountdownForm extends React.Component{
	onSubmit(e) {
		e.preventDefault();

		const strSeconds = this.refs.seconds.value;
		if (strSeconds.match(/^\d*$/) && strSeconds !== '') {
			this.refs.seconds.value = '';
			this.props.onSetCountdown(parseInt(strSeconds, 10));
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit.bind(this)}>
					<input type="text" placeholder="What do you need to do?" ref="todo"/>
					<button className="button">Add</button>
				</form>
			</div>
		)
	}
};

module.exports = CountdownForm;