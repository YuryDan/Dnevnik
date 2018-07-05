
const React = require( 'react' )

class Menu extends React.Component {

    constructor( props ) {
        super( props );
        this.state = { isClosed: false};
        this.menu = this.menu.bind( this );
        this.route = this.route.bind( this );
    }
    
    route(e){
            this.props.route(e.target.name);
    }
    menu(e){
        $('#wrapper').toggleClass('toggled');
        if (this.state.isClosed == true) {
            $('.hamburger').removeClass('is-open');
            $('.hamburger').addClass('is-closed');
            $('.page-content').removeClass('content-padding');
            this.setState( { isClosed: false } );
        } else {
            $('.hamburger').removeClass('is-closed');
            $('.hamburger').addClass('is-open');
            $('.page-content').addClass('content-padding');
            this.setState( { isClosed: true } );
        }
    }
    render() {
        return (
        	<div id="wrapper">
                    <div className="overlay"></div>
                    <nav className="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
                        <ul className="nav sidebar-nav">
                            <li className="sidebar-brand">
                                <a name="/" onClick={this.route}> Brand</a>
                            </li>
                            <li className="dropdown">
                                <a name="/main" onClick={this.route} className="dropdown-toggle">
                                    Главная
                                </a>
                            </li>
                            <li className="dropdown">
                                <a name="/find" onClick={this.route} className="dropdown-toggle">
                                    Поиск
                                </a>
                            </li>
                            {
                                this.props.role == 'admin' ?
                                    <li className="dropdown">
                                        <a name="/add" onClick={this.route} className="dropdown-toggle">
                                            Добавить
                                        </a>
                                    </li>
                                    :
                                    null
                            }
                        </ul>
                    </nav>
                    <div id="page-content-wrapper">
                        <button type="button" className="hamburger is-closed" data-toggle="offcanvas" onClick={this.menu}>
                            <span className="hamb-top"></span>
                            <span className="hamb-middle"></span>
                            <span className="hamb-bottom"></span>
                        </button>
                    </div>
                </div>
        );
    }
};
module.exports = Menu