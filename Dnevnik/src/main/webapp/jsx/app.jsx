const React = require( 'react' )
const ReactDOM = require( 'react-dom' )
const { BrowserRouter } = require( 'react-router-dom' )
const { Route } = require( 'react-router-dom' )

const Index = require( './index.jsx' )
const Main = require( './main.jsx' )
const Group = require( './group.jsx' )
const Find = require( './find.jsx' )
const Admin = require( './admin/admin.jsx' )
const Add = require( './admin/add.jsx' )

ReactDOM.render((
    <BrowserRouter>
    	<div>
	        <Route exact path="/" component={Index} /> 
	        <Route path="/main" component={Main} />
            <Route path="/group" component={Group} />
            <Route path="/find" component={Find} />
            <Route path="/admin" component={Admin} />
            <Route path="/add" component={Add} />
        </div> 
    </BrowserRouter>
),document.getElementById( 'content' ))

