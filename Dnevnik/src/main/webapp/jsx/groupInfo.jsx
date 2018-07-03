const React = require( 'react' )

const client = require('../js/client.js')

class GroupInfo extends React.Component {

    constructor( props ) {
		super( props );
		this.state = {group: [], groupId : client.getGroupId()};
		this.route = this.route.bind( this );
		this.getInfoAboutGroup = this.getInfoAboutGroup.bind( this );
	}

	componentDidMount(){ 
        this.getInfoAboutGroup(this);
	}
	
	route(e){
		this.props.route(e.target.name);
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
            <div className="page-content container" >
                <div className="group-info">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="group-info-one-row">
                                <div className="row">
                                    <div className="col-sm-6 group-info-one-col">
                                        <label className="group-info-label">Номер группы:&nbsp;&nbsp;</label>
                                    </div>
                                    <div className="col-sm-6 group-info-one-col">
                                        {this.state.group.number}
                                    </div>
                                </div>
                            </div>
                            <div className="group-info-one-row">
                                <div className="row">
                                    <div className="col-sm-6 group-info-one-col">
                                        <label className="group-info-label">Название курса:&nbsp;&nbsp;</label>
                                    </div>
                                    <div className="col-sm-6 group-info-one-col">
                                        {this.state.group.courseType}
                                    </div>
                                </div>
                            </div>
                            <div className="group-info-one-row">
                                <div className="row">
                                    <div className="col-sm-6 group-info-one-col">
                                        <label className="group-info-label">Преподаватель:&nbsp;&nbsp;</label>
                                    </div>
                                    <div className="col-sm-6 group-info-one-col">
                                        {this.state.group.teacherFIO}
                                    </div>
                                </div>
                            </div>
                            <div className="group-info-one-row">
                                <div className="row">
                                    <div className="col-sm-6 group-info-one-col">
                                        <label className="group-info-label">Дни занятий:&nbsp;&nbsp;</label>
                                    </div>
                                    <div className="col-sm-6 group-info-one-col">
                                        {this.state.group.days}
                                    </div>
                                </div>
                            </div>
                            <div className="group-info-one-row">
                                <div className="row">
                                    <div className="col-sm-6 group-info-one-col">
                                        <label className="group-info-label">Начало курса:&nbsp;&nbsp;</label>
                                    </div>
                                    <div className="col-sm-6 group-info-one-col">
                                        {this.state.group.startDate}
                                    </div>
                                </div>
                            </div>
                            <div className="group-info-one-row">
                                <div className="row">
                                    <div className="col-sm-6 group-info-one-col">
                                        <label className="group-info-label">Конец курса:&nbsp;&nbsp;</label>
                                    </div>
                                    <div className="col-sm-6 group-info-one-col">
                                        {this.state.group.finishDate}
                                    </div>
                                </div>
                            </div>
                            <div className="group-info-one-row">
                                <div className="row">
                                    <div className="col-sm-6 group-info-one-col">
                                        <label className="group-info-label">Количество занятий:&nbsp;&nbsp;</label>
                                    </div>
                                    <div className="col-sm-6 group-info-one-col">
                                        {this.state.group.numberOfLessons}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-sm-6 group-info-one-col">
                                        <label className="group-info-label">Продолжительность занятия:&nbsp;&nbsp;</label>
                                    </div>
                                    <div className="col-sm-6 group-info-one-col">
                                        {this.state.group.duration}а.ч.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
module.exports = GroupInfo