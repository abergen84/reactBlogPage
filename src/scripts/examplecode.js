var HomeView = React.createClass({
		render: function(){
			return (
				//you must return only ONE element, if you tried adding another
				// div it would give you an error. you may not return two or more
				// sibling elements
				<div id="homeContainer">
					<Header />
					<NavBar />
					<ContentHolder />	
				</div>
				)
		}
	})

	var Header = React.createClass({
		render: function(){
			return (
				<div className="burgerHeader">
					<h1>Little Bigs</h1>
					<p>home of the littlest biggest taste</p>
				</div>
				)
		}
	})

	var NavBar = React.createClass({
		render: function(){
			return (
				<div className="navBar">
					<a>home</a>
					<a>menu</a>
					<a>contact</a>
				</div>
				)
		}
	})

	var ContentHolder = React.createClass({
		render: function(){
			return (
				<div className="contentHolder">
					<ImgContainer />
				</div>
				)
		}
	})

	var ImgContainer = React.createClass({
		render: function(){
			return (
				<div className="heroImage">
				<img src="https://upload.wikimedia.org/wikipedia/commons/8/8f/NYC-Diner-Bacon-Cheeseburger.jpg" />
				<p>this is a picture of a hamburger</p>
				</div>
				)
		}
	})

	ReactDOM.render(<HomeView />, document.querySelector('.container'))