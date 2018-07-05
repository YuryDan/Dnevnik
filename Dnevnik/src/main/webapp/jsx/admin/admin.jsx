const React = require( 'react' )
const Menu = require( '../menu.jsx' )
const Exit = require( '../exit.jsx' )

const client = require('../../js/client.js')

class Admin extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {listAllUsers: []};
        this.route = this.route.bind( this );
        this.getAllUsers = this.getAllUsers.bind( this );
    }

    componentDidMount(){ 
        this.getAllUsers(this);
    }
    
    route(data){
		this.props.history.push( data );
    }
    
    getAllUsers(e){
        $.ajax({
			url: 'dnevnik/getAllUsers',
			headers: client.createAuthorizationTokenHeader(),
            success: function(data){ 
                this.setState({listAllUsers:data});
			}.bind(this),
			error: function () {
                this.route( 'main' );
            }.bind(this)
            
        });
    }
    
    render() {
        var allUsers = this.state.listAllUsers.map((user)=> {
            return (
				<tr>
					<td>{user.id}</td>
					<td>{user.name}</td>
					<td>{user.surname}</td>
					<td>{user.secondName}</td>
                    <td>{user.email}</td>
					<td>{user.roleType}</td>
				</tr>
            );
        });
        return (
            <div className="main">
                <Exit route={this.route} />
                <Menu route={this.route} role={'admin'}/>
                <div className="page-content container" >
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Имя</th>
                                <th>Фамилия</th>
                                <th>Отчество</th>
                                <th>E-mail</th>
                                <th>Роль</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
};
module.exports = Admin