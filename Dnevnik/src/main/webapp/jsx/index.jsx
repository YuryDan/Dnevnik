const React = require('react')
const client = require('../js/client.js')
class Index extends React.Component {

    constructor(props) {
        super(props);
        this.route = this.route.bind(this);
        this.doLogin = this.doLogin.bind(this);
    }

    componentDidMount() {
        if (client.getJwtToken() != null) {
            this.route('main');
        }
    }

    route(data) {
        this.props.history.push(data);
    }

    doLogin(e) {
        var formData = {
            email: $('input[name="email"]').val(),
            password: $('input[name="password"]').val()
        };
        $.ajax({
            url: "/auth",
            type: "POST",
            data: JSON.stringify(formData),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                client.setJwtToken(data.token);
                this.route('main')
            }.bind(this),
            error: function (jqXHR, textStatus, errorThrown) {
                alert('error');
            }
        });
    }
    render() {
        return (
            <div className="login-dark">
                <form id="loginForm">
                    <h2>Login Form</h2>
                    {/* <h2 className="sr-only">Login Form</h2> */}
                    <div className="illustration">
                        <i className="icon ion-ios-locked-outline"></i>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="email" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" name="password" id="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <input type="button" className="btn btn-primary btn-block" value="Войти" onClick={this.doLogin} />
                    </div>
                </form>
            </div>
        );
    }
};
module.exports = Index