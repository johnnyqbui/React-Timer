const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Controls = require('Controls');

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