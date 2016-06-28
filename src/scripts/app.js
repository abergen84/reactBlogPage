const React = require('react'),
	ReactDOM = require('react-dom')

const app = function() {

	var HomeContainer = React.createClass({
		render: function() {
			return (
				<div id="total-container">
					<Header />
					<MainDiv />
				</div>
				)
		}
	})

	var Header = React.createClass({
		render: function(){
			return (
				<header>
					<img src="http://magentanova.github.io/html-intro-1/images/houston.jpg" />
				</header>
				)
		}
	})

	var MainDiv = React.createClass({
		render: function() {
			return (
				<div id="main-container">
					<Logo />
					<Left />
					<Right />
				</div>
			)
		}
	})

	var Left = React.createClass({
		render: function() {
			return (
				<div id="left">
					<h2>The Iron Yard Houston</h2>
					<p>happenings and updates from the iron yard</p>
					<p>Search</p>
					<input type="text" placeholder="search keywords" />
				</div>
				)
		}
	})

	var Logo = React.createClass({
		render: function(){
			return (
				<img id="logo" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" />
			)
		}
	})

	var Right = React.createClass({
		render: function(){
			return (
				<div id="right">
					<h1>September 22 starts the new class of Iron Yard</h1>
					<h6>by brian dorton</h6>
					<img src="http://magentanova.github.io/html-intro-1/images/classroom.jpg" />
					<p>this is a test data dummy default javascript is cool and fun and kinda hard but
					whatever man it is what it is and its just lovely</p>
				</div>
				)
		}
	})

ReactDOM.render(<HomeContainer />, document.querySelector(".container"))

}

app()