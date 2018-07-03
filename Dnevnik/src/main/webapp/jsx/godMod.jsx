const React = require( 'react' )

const client = require('../js/client.js')

class GodMod extends React.Component {

    constructor( props ) {
        super( props );
		this.godMod = this.godMod.bind( this );
	}
    godMod(){
         $.ajax({
			url: 'dnevnik/godMod',
			headers: client.createAuthorizationTokenHeader(),
            success: function(data){ 
                this.props.route('admin');
			}.bind(this),
			error: function () {
                this.props.route('main');
            }.bind(this)
            
        });
	}
    
    render() {
        return (
            <button type="button" className="btn btn-reg" onClick={this.godMod}>GodMod</button>
        );
    }
};
module.exports = GodMod