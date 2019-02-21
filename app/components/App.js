const React = require('react');
const Home = require('./Home');
const Battle = require('./Battle');
const Popular = require('./Popular');
const Results = require('./Results');
const Nav = require('./Nav');
const { BrowserRouter: Router, Route, Switch } = require('react-router-dom');;

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className='container'>
					<Nav/>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/battle' component={Battle} />
						<Route path='/battle/results' component={Results} />
						<Route path='/popular' component={Popular} />
						<Route render={ () => <p>Not Found</p> } />
					</Switch>
				</div>
			</Router>
		)
	}
}

module.exports = App;