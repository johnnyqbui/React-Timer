import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

const Timer = require('Timer');

describe('Timer', () => {
	it('should exist', () => {
		expect(Timer).toExist();
	});

	it('should set state to started and begin count', (done) => {
		const timer = TestUtils.renderIntoDocument(<Timer/>);
		timer.handleStatusChange('started');

		setTimeout(() => {
			expect(timer.state.count).toBe(1);
			expect(timer.state.timerStatus).toBe('started');
			done();
		}, 1001);
	});

	it('should pause timer on paused status', (done) => {
		const timer = TestUtils.renderIntoDocument(<Timer/>);
		timer.setState({count: 10});
		timer.handleStatusChange('started');
		timer.handleStatusChange('paused');
		setTimeout(() => {
			expect(timer.state.count).toBe(10);
			expect(timer.state.timerStatus).toBe('paused');
			done();
		}, 1001);
	});

	it('should clear count on stopped status', (done) => {
		const timer = TestUtils.renderIntoDocument(<Timer/>);
		timer.setState({count: 10});
		timer.handleStatusChange('started');
		timer.handleStatusChange('stopped');

		setTimeout(() => {
			expect(timer.state.count).toBe(0);
			expect(timer.state.timerStatus).toBe('stopped');
			done();
		}, 1001);
	});

});