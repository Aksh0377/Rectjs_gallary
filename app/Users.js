import React from 'react';
import history from './history';



export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                name: "Island",
                image: "https://img.icons8.com/clouds/2x/user.png",
                id: 2,
                name: "jack",
                image: "https://img.icons8.com/clouds/2x/user.png",

            }, {
                id: 3,
                name: "jack",
                image: "https://img.icons8.com/clouds/2x/user.png",
            }, {
                id: 4,
                name: "jack",
                image: "https://img.icons8.com/clouds/2x/user.png",
            }, {
                id: 5,
                name: "jack",
                image: "https://img.icons8.com/clouds/2x/user.png",
            }, {
                id: 6,
                name: "jack",
                image: "https://img.icons8.com/clouds/2x/user.png",
            }, {
                id: 7,
                name: "jack",
                image: "https://img.icons8.com/clouds/2x/user.png",
            }, {
                id: 8,
                name: "jack",
                image: "https://img.icons8.com/clouds/2x/user.png",
            }, {
                id: 9,
                name: "jack",
                image: "https://img.icons8.com/clouds/2x/user.png",
            }]
        };
    }
	render() {

		return (
			<Tiles data={this.state.data} />
		);
	}
}

class Tiles extends React.Component {
	render() {
		// Create tile for each item in data array
        // Pass data to each tile and assign a key
        console.log('data', this.props.data)
		return (
			<div className="tiles">
				{this.props.data.map((data) => {
					return <Tile data={data} key={data.id} />
				})}
			</div>
		);
	}
}

class Tile extends React.Component {

	constructor(props) {
			super(props);
			this.state = {
				open: false,
				mouseOver: false
			};
			// Bind properties to class instance
			this._clickHandler = this._clickHandler.bind(this);
			this._mouseEnter = this._mouseEnter.bind(this);
			this._mouseLeave = this._mouseLeave.bind(this);
		}
		// Event handlers to modify state values
	_mouseEnter(e) {
		e.preventDefault();
		if (this.state.mouseOver === false) {
			console.log(this.props.data.name);
			this.setState({
				mouseOver: true
			})
		}
	}
	_mouseLeave(e) {
		e.preventDefault();
		if (this.state.mouseOver === true) {
			this.setState({
				mouseOver: false
			})
		}
	}
	_clickHandler(e) {
        
        e.preventDefault();
        history.push('/photos');
	
	}

	render() {
        console.log('data==',this.props.data)
		// Modify styles based on state values
		let tileStyle = {};
		let headerStyle = {};
		let zoom = {};
		// When tile clicked
		if (this.state.open) {
			tileStyle = {
				width: '62vw',
				height: '62vw',
				position: 'absolute',
				top: '50%',
				left: '50%',
				margin: '0',
				marginTop: '-31vw',
				marginLeft: '-31vw',
				boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
				transform: 'none'
			};
		} else {
			tileStyle = {
				width: '18vw',
				height: '18vw'
			};
		}

		return (
			<div className="Usertile">
				<img
					onMouseEnter={this._mouseEnter}
					onMouseLeave={this._mouseLeave}
					onClick={this._clickHandler}
					src={this.props.data.image}
					alt={this.props.data.name}
					style={tileStyle}
				/>
                <div className="username">{this.props.data.name} </div> 
			</div>
		);
	}
}
