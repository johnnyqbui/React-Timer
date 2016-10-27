const React = require('react');
const Nav = require('Nav');

// Binds this with fat arrow function
const Main = (props) => {
	return (
		<div>
			<Nav/>
			<div>
				<div>
					{props.children}
				</div>
			</div>
		</div>
	);
}

module.exports = Main;