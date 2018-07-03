const React = require( 'react' )

const client = require('../js/client.js')

class GroupUsersInfo extends React.Component {

    constructor( props ) {
		super( props );
		this.state = {groupUsers: [], groupId : client.getGroupId()};
		this.route = this.route.bind( this );
		this.getInfoAboutGroupUsers = this.getInfoAboutGroupUsers.bind( this );
	}

	componentDidMount(){ 
        this.getInfoAboutGroupUsers(this);
	}
	
	route(e){
		this.props.route(e.target.name);
	}

	getInfoAboutGroupUsers(e){
        $.ajax({
			url: 'dnevnik/getInfoAboutGroupUsers',
			data: {
				id : this.state.groupId
			},
			headers: client.createAuthorizationTokenHeader(),
            success: function(data){ 
                this.setState({groupUsers:data});
			}.bind(this),
			error: function () {
                this.route('');
            }.bind(this)
            
        });
    }
    
    render() {
         var getUsers = this.state.groupUsers.map((user, index)=> {
            return (
                <tr>
			      <td>{index + 1}</td>
			      <td>{user.name + ' ' + user.surname + ' ' + user.secondName}</td>
			    </tr>
            );
        });
        return (
            <div className="page-content container" >
                {
                    this.state.groupUsers.length != 0 ?
                        <div className="group-info-table">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>№</th>
                                        <th>ФИО</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {getUsers}
                                </tbody>
                            </table>
                        </div>
                        :
                        null
                }
            </div>
        );
    }
};
module.exports = GroupUsersInfo