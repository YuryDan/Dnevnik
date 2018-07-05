const React = require( 'react' )
const Menu = require( '../menu.jsx' )
const Exit = require( '../exit.jsx' )
const Add = require( './add.jsx' )

const client = require('../../js/client.js')

class NewUser extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {listAllUsers: []};
       // this.route = this.route.bind( this );
        this.getAllUsers = this.getAllUsers.bind( this );
    }

    componentDidMount(){ 
        // this.getAllUsers(this);
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
        
        return (
            <div className="page-content container" >
                <div className="new-user" >
                    <label className="control-label">Добавление нового пользователя</label><br />
                    <form className="form-horizontal">
                            <div className="form-group">
                                <label className="col-sm-4 control-label">Введите имя:</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" name="name" placeholder="Поле для ввода имени" onChange={this.myChange} />
                                </div>
                                <div className="col-sm-4">
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-4 control-label">Введите фамилию:</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" name="surname" placeholder="Поле для ввода фамилии" onChange={this.myChange} />
                                </div>
                                <div className="col-sm-4">
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-4 control-label">Введите отчество:</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" name="secondName" placeholder="Поле для ввода отчества" onChange={this.myChange} />
                                </div>
                                <div className="col-sm-4">
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-4 control-label">Введите email:</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" name="email" placeholder="Поле для ввода email" onChange={this.myChange} />
                                </div>
                                <div className="col-sm-4">
                                    {/* {
                                        this.state.emailState == 1 ?
                                            <label className="control-label reg-label-fail" name="emailState"></label>
                                            :
                                            <label className="control-label reg-label-fail" name="emailState">Email не соответствует правилам</label>
                                    } */}
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-4 control-label reg-label">Придумайте пароль:</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" name="password" placeholder="Поле для ввода пароля" onChange={this.myChange} />
                                </div>
                                <div className="col-sm-4">
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-4 control-label reg-label">Выберите role:</label>
                                <div className="col-sm-4">
                                    <input type="radio" name="role" value="1" onChange={this.myChange} /> <label className="reg-label"> User</label> <br />
                                    <input type="radio" name="role" value="2" onChange={this.myChange} /> <label className="reg-label"> Admin</label> <br />
                                    <input type="radio" name="role" value="3" onChange={this.myChange} /> <label className="reg-label"> Manager</label>
                                </div>
                                <div className="col-sm-4">
                                    {/* {
                                        this.state.roleState == 1 ?
                                            <label className="control-label reg-label-fail" name="roleState"></label>
                                            :
                                            <label className="control-label reg-label-fail" name="roleState">Роль не выбрана</label>
                                    } */}
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-4 col-sm-4">
                                    <input type="button" className="btn btn-success" name="butsend" value="Зарегистрировать" onClick={this.myClick} />
                                </div>
                            </div>
                    </form>
                </div>
            </div>
        );
    }
};
module.exports = NewUser