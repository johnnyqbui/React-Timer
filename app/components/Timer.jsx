const React = require('react');
const Clock = require('Clock');
const Controls = require('Controls');

const Timer = React.createClass({
	getInitialState: function() {
		return {
			count: 0,
			timerStatus: 'stopped',
		}
	},

	componentDidUpdate: function(prevProps, prevState) {
		if (this.state.timerStatus !== prevState.timerStatus) {
			switch (this.state.timerStatus) {
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({count: 0});
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	},

	componentWillUnmount: function() {
		clearInterval(this.timer);
		this.timer = undefined;
	},

	startTimer: function() {
		this.timer = setInterval(() => {
			let newCount = this.state.count + 1;
			this.setState({count: newCount});
		}, 1000)
	},

	handleSetTimerStatus: function() {
		this.setState({
			timerStatus: 'started'
		})
	},

	handleStatusChange: function(newStatus) {
		this.setState({
			timerStatus: newStatus
		})
	},

	render: function() {
		const { count, timerStatus } = this.state;

		const renderControlArea = () => {
			if (timerStatus !== 'stopped') {
				return <Controls countStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
			} else {
				return <form ref="form" onSubmit={this.handleSetTimerStatus}>
							<button className="button expanded">Start</button>
						</form>
			}
		};

		return (
			<div>
				<h1 className="page-title">Timer</h1>
				<Clock totalSeconds={count}/>
				{renderControlArea()}
			</div>
		)
	}
});

module.exports = Timer;