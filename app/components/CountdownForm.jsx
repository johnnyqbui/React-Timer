const React = require('react');

const CountdownForm = React.createClass({
	onSubmit: function (e) {
		e.preventDefault();

		const strSeconds = this.refs.seconds.value;
		if (strSeconds.match(/^\d*$/) && strSeconds !== '') {
			this.refs.seconds.value = '';
			this.props.onSetCountdown(parseInt(strSeconds, 10));
		}
	},

	render: function() {
		return (
			<div>
				<form ref="form" onSubmit={this.onSubmit} className="countdown-form">
					<input type="text" placeholder="Enter Time in Seconds" ref="seconds"/>
					<button className="button expanded">Start</button>
				</form>
			</div>
		);
	}
});

module.exports = CountdownForm;