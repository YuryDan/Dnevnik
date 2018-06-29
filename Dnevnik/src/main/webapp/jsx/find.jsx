const React = require( 'react' )
const Menu = require( './menu.jsx' )
const Exit = require( './exit.jsx' )

const client = require('../js/client.js')

class Find extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {listAllGroups: [], listAllCourses: [], listAllTeachers: [], findList: []};
        this.route = this.route.bind( this );
        this.getAllGroups = this.getAllGroups.bind( this );
        this.getAllCourses = this.getAllCourses.bind( this );
        this.getAllteachers = this.getAllteachers.bind( this );
        this.find = this.find.bind( this );
    }
    
    route(data){
		this.props.history.push( data );
    }

     componentDidMount(){ 
        this.getAllGroups(this);
        this.getAllCourses(this);
        this.getAllteachers(this);
    }
    
    getAllGroups(e){
        $.ajax({
			url: 'dnevnik/getAllGroups',
			headers: client.createAuthorizationTokenHeader(),
            success: function(data){ 
                this.setState({listAllGroups:data});
			}.bind(this),
			error: function (jqXHR, textStatus, errorThrown) {
                this.route( '' );
            }.bind(this)
            
        });
    }
    getAllCourses(e){
        $.ajax({
			url: 'dnevnik/getAllCourses',
			headers: client.createAuthorizationTokenHeader(),
            success: function(data){ 
                this.setState({listAllCourses:data});
			}.bind(this),
			error: function (jqXHR, textStatus, errorThrown) {
                this.route( '' );
            }.bind(this)
            
        });
    }
    getAllteachers(e){
        $.ajax({
			url: 'dnevnik/getAllTeachers',
			headers: client.createAuthorizationTokenHeader(),
            success: function(data){ 
                this.setState({listAllTeachers:data});
			}.bind(this),
			error: function (jqXHR, textStatus, errorThrown) {
                this.route( '' );
            }.bind(this)
            
        });
    }

    find(e){
        console.log($("#groupNumber").val());
        console.log($("#course").val());
        console.log($("#teacher").val());
    }
    
    render() {
        var groupNumbers = this.state.listAllGroups.map((group)=> {
            return (
                <option value={group.number}></option>
            );
        });
        var courses = this.state.listAllCourses.map((course)=> {
            return (
                <option value={course.type}></option>
            );
        });
        var teachers = this.state.listAllTeachers.map((teacher)=> {
            return (
                <option value={teacher.surname + ' ' + teacher.name}></option>
            );
        });
        return (
            <div className="main">
                <Exit route={this.route} />
                <Menu route={this.route} />
                <div className="page-content container" >
                    <div className="find-menu" >
                        <div className="row">
                            <div className="col-sm-4 form-group">
                                <label className="label-find-menu">Номер группы</label>
                                <input type="text" id="groupNumber" list="numbers" className="form-control"/>
                                <datalist id="numbers">
                                    {groupNumbers}
                                </datalist>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="label-find-menu">Название курса</label>
                                    <input type="text" id="course" list="courses" className="form-control"/>
                                    <datalist id="courses">
                                       {courses}
                                    </datalist>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="label-find-menu">Преподаватель</label>
                                    <input type="text" id="teacher" list="teachers" className="form-control"/>
                                    <datalist id="teachers">
                                        {teachers}
                                    </datalist>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <button className="btn btn-find-menu" onClick={this.find}>Найти</button>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        this.state.findList.length != 0 ?
                            <label className="control-label">Да</label> 
                            :
                            null
                    }
                </div>
            </div>
        );
    }
};
module.exports = Find