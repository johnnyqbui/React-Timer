import React from 'react';
import {Link, IndexLink} from 'react-router';

const Nav = () => ({
	render: function() {
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">React Timer App</li>
						<li>
							<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>TImer</IndexLink>
						</li>
						<li>
							<Link to="/countdown"  activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<ul className="menu">
						<li className="menu-text">
							Created by <a href="https://github.com/johnnyqbui" target="_blank">Johnny Bui</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
})

module.exports = Nav;