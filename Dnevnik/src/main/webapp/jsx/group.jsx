const React = require( 'react' )
const Menu = require( './menu.jsx' )
const Exit = require( './exit.jsx' )

const client = require('../js/client.js')

class Group extends React.Component {

    constructor( props ) {
        super( props );
		this.route = this.route.bind( this );
	}
	route(data){
		this.props.history.push( data );
	}
    
    render() {
        return (
        	<div className="main">
        		<Exit route={this.route}/>
	        	<Menu route={this.route}/>
            </div>
        );
    }
};
module.exports = Group