const React = require( 'react' )
const Menu = require( './menu.jsx' )
const Exit = require( './exit.jsx' )
const GroupInfo = require( './groupInfo.jsx' )
const GroupUsersInfo = require( './groupUsersInfo.jsx' )

const client = require('../js/client.js')

class Group extends React.Component {

    constructor( props ) {
		super( props );
		this.state = {group: [], groupId : client.getGroupId()};
		this.route = this.route.bind( this );
		this.getInfoAboutGroup = this.getInfoAboutGroup.bind( this );
	}

	componentDidMount(){ 
        this.getInfoAboutGroup(this);
	}
	
	route(data){
		this.props.history.push( data );
	}

	getInfoAboutGroup(e){
        $.ajax({
			url: 'dnevnik/getInfoAboutGroup',
			data: {
				id : this.state.groupId
			},
			headers: client.createAuthorizationTokenHeader(),
            success: function(data){ 
                this.setState({group:data});
			}.bind(this),
			error: function () {
                this.route('');
            }.bind(this)
            
        });
    }
    
    render() {
        return (
        	<div className="main">
        		<Exit route={this.route}/>
	        	<Menu route={this.route}/>
				<GroupInfo route={this.route}/>
				<br/>
				<GroupUsersInfo route={this.route}/>
            </div>
        );
    }
};
module.exports = Group