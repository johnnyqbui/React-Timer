const React = require('react');
const Nav = require('Nav');

// Binds this with fat arrow function
const Main = (props) => {
	return (
		<div>
			<Nav/>
			<div className="row">
				<div className="columns medium-6 large-4 small-centered">
				<p>React Boilerplate Ready to go!</p>
					{props.children}
				</div>
			</div>
		</div>
	);
}

module.exports = Main;