const React = require('react');
const { Link } = require('react-router-dom');

class Home extends React.Component {
	render() {
		return (
			<div className='home-container'>
				<h1>Github Battle: Battle you frien!</h1>
				<Link className='button' to='/battle'>
					Battle Now
				</Link>
			</div>
		)
	}
}

module.exports = Home;