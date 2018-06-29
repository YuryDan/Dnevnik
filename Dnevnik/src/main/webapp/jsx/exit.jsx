const React = require( 'react' )

const client = require('../js/client.js')

class Exit extends React.Component {

    constructor( props ) {
        super( props );
		this.exit = this.exit.bind( this );
	}
	exit(){
        client.removeJwtToken();
 		this.props.route('');
	}
    
    render() {
        return (
            <button type="button" className="btn btn-reg" onClick={this.exit}>Выход</button>
        );
    }
};
module.exports = Exit