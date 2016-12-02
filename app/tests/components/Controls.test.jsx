import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import Controls from 'Controls';

describe('Controls', () => {
	it('should exist', () => {
		expect(Controls).toExist();
	});

	describe('render', () => {
		it('should render pause when started', () => {
			const controls = TestUtils.renderIntoDocument(<Controls countStatus='started'/>);
			const $el = $(ReactDOM.findDOMNode(controls));
			const $pauseBtn = $el.find('button:contains(Pause)');

			expect($pauseBtn.length).toBe(1);
		});
		it('should render start when paused', () => {
			const controls = TestUtils.renderIntoDocument(<Controls countStatus='paused'/>);
			const $el = $(ReactDOM.findDOMNode(controls));
			const $startBtn = $el.find('button:contains(Start)');

			expect($startBtn.length).toBe(1);
		});
	});
});