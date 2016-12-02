const React = require('react');
const Controls = React.createClass({
	propTypes: {
		countStatus: React.PropTypes.string.isRequired,
		onStatusChange: React.PropTypes.func.isRequired
	},

	onStatusChange: function(newStatus) {
		return () => {
			this.props.onStatusChange(newStatus);
		}
	},

	render: function() {
		const {countStatus} = this.props;
		const renderStartStopBtn = () => {
			if (countStatus === 'started') {
				return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
			} else {
				return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
			}
		}

		return (
			<div className="controls">
				{renderStartStopBtn()}
				<button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
			</div>
		);
	}
});

module.exports = Controls;