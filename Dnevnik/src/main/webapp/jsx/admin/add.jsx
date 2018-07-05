const React = require( 'react' )
const Menu = require( '../menu.jsx' )
const Exit = require( '../exit.jsx' )
const NewUser = require( './newUser.jsx' )

const client = require('../../js/client.js')

class Add extends React.Component {

    constructor( props ) {
        super( props );
        this.godMod = this.godMod.bind( this );
        this.route = this.route.bind( this );
    }
    componentDidMount(){ 
        this.godMod(this);
    }

    route(data){
		this.props.history.push( data );
    }

    godMod(){
         $.ajax({
			url: 'dnevnik/godMod',
			headers: client.createAuthorizationTokenHeader(),
			error: function () {
                this.route('main');
            }.bind(this)
            
        });
	}
    
    render() {
        return (
             <div className="main">
                <Exit route={this.route} />
                <Menu route={this.route} role={'admin'}/>
                <NewUser route={this.route}/>
            </div>
        );
    }
};
module.exports = Add