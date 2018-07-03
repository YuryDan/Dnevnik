const React = require( 'react' )

const Menu = require( './menu.jsx' )
const Exit = require( './exit.jsx' )
const GodMod = require( './godMod.jsx' )
const client = require('../js/client.js')

class Main extends React.Component {

    constructor( props ) {
        super( props );
		this.state = {listActiveGroups: [], listCompleteGroups: []};
		this.route = this.route.bind( this );
		this.groupPage = this.groupPage.bind( this );
        this.getActiveGroups = this.getActiveGroups.bind( this );
		this.getCompleteGroups = this.getCompleteGroups.bind( this );
	}
	route(data){
		this.props.history.push( data );
	}

	groupPage(group){
		client.setGroupId(group.id);
		this.route( 'group' );
	}
    
    componentDidMount(){ 
        this.getActiveGroups(this);
		this.getCompleteGroups(this);
    }
    
    getActiveGroups(e){
        $.ajax({
			url: 'dnevnik/getActiveGroups',
			headers: client.createAuthorizationTokenHeader(),
            success: function(data){ 
                this.setState({listActiveGroups:data});
			}.bind(this),
			error: function (jqXHR, textStatus, errorThrown) {
                this.route( '' );
            }.bind(this)
            
        });
    }
    getCompleteGroups(e){
        $.ajax({
			url: 'dnevnik/getCompleteGroups',
			headers: client.createAuthorizationTokenHeader(),
            success: function(data){ 
                this.setState({listCompleteGroups:data});
			}.bind(this),
			error: function (jqXHR, textStatus, errorThrown) {
                this.route( '' );
            }.bind(this)
            
        });
    }
    
    render() {
    	var listActiveGroups = this.state.listActiveGroups.map((activeGroup)=> {
            return (
				<tr onClick={()=>this.groupPage(activeGroup)}>
					<td>{activeGroup.number}</td>
					<td>{activeGroup.courseType}</td>
					<td>{activeGroup.startDate}</td>
					<td>{activeGroup.days}</td>
					<td>{activeGroup.time}</td>
				</tr>
            );
        });
        var listCompleteGroups = this.state.listCompleteGroups.map((completeGroup)=> {
            return (
                <tr onClick={()=>this.groupPage(completeGroup)}>
			      <td>{completeGroup.number}</td>
			      <td>{completeGroup.courseType}</td>
			      <td>{completeGroup.startDate}</td>
			      <td>{completeGroup.days}</td>
			      <td>{completeGroup.time}</td>
			    </tr>
            );
        });
        return (
	        <div className="main">
				<Exit route={this.route}/>
				<GodMod route={this.route}/>
	        	<Menu route={this.route}/>
	            <div className="page-content container" >
					<ul className="nav nav-tabs" role="tablist">
						<li className="active"><a href="#active" aria-controls="active" role="tab" data-toggle="tab" className="mytab">Текущие группы</a></li>
						<li><a href="#complete" aria-controls="complete" role="tab" data-toggle="tab" className="mytab">Завершённые группы</a></li>
					</ul>
					<div className="tab-content">
						<div role="tabpanel" className="tab-pane active" id="active">
							<table className="table table-bordered">
								<thead>
									<tr>
										<th>Номер группы</th>
										<th>Название курса</th>
										<th>Дата начала</th>
										<th>Дни занятий</th>
										<th>Время проведения</th>
									</tr>
								</thead>
								<tbody>
									{listActiveGroups}
								</tbody>
							</table>
						</div>
						<div role="tabpanel" className="tab-pane" id="complete">
							<table className="table table-bordered">
								<thead>
									<tr>
										<th>Номер группы</th>
										<th>Название курса</th>
										<th>Дата начала</th>
										<th>Дни занятий</th>
										<th>Время проведения</th>
									</tr>
								</thead>
								<tbody>
									{listCompleteGroups}
								</tbody>
							</table>
						</div>
					</div>
	            </div>
	        </div>
        );
    }
};
module.exports = Main