package by.tc.dnevnik.models;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "groups")
public class Group implements Serializable{

	private static final long serialVersionUID = 1071042147155741373L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name = "id")
	private Long id;

	@Column(name = "number", unique = true)
	private String number;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "course")
	@JsonBackReference
	private Course course;

	@Temporal(TemporalType.DATE)
	private Date startDate;

	@Temporal(TemporalType.DATE)
	private Date finishDate;

	@Column(name = "days", nullable = false)
	private String days;

	@Column(name = "time", nullable = false)
	private String time;

	@Column(name = "duration")
	private int duration;

	@Column(name = "numberOfLessons")
	private int numberOfLessons;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "teacher")
	@JsonBackReference
	private User teacher;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "status")
	@JsonBackReference
	private GroupStatus status;
	
	@ManyToMany(mappedBy = "groups")
	@JsonBackReference
    private Set<Student> students;

	public Group() {
	}

	public Group(Long id) {
		this.id = id;
	}
	
	public Group(String number, Course course, Date startDate, Date finishDate, String days, String time, int duration,
			int numberOfLessons, User teacher) {
		this.number = number;
		this.course = course;
		this.startDate = startDate;
		this.finishDate = finishDate;
		this.days = days;
		this.time = time;
		this.duration = duration;
		this.numberOfLessons = numberOfLessons;
		this.teacher = teacher;
	}

	public Group(Long id, String number, Course course, Date startDate, Date finishDate, String days, String time,
			int duration, int numberOfLessons, User teacher) {
		this.id = id;
		this.number = number;
		this.course = course;
		this.startDate = startDate;
		this.finishDate = finishDate;
		this.days = days;
		this.time = time;
		this.duration = duration;
		this.numberOfLessons = numberOfLessons;
		this.teacher = teacher;
	}

	public Group(String number, Course course, Date startDate, Date finishDate, String days, String time, int duration,
			int numberOfLessons, User teacher, GroupStatus status) {
		this.number = number;
		this.course = course;
		this.startDate = startDate;
		this.finishDate = finishDate;
		this.days = days;
		this.time = time;
		this.duration = duration;
		this.numberOfLessons = numberOfLessons;
		this.teacher = teacher;
		this.status = status;
	}

	public Group(Long id, String number, Course course, Date startDate, Date finishDate, String days, String time,
			int duration, int numberOfLessons, User teacher, GroupStatus status) {
		this.id = id;
		this.number = number;
		this.course = course;
		this.startDate = startDate;
		this.finishDate = finishDate;
		this.days = days;
		this.time = time;
		this.duration = duration;
		this.numberOfLessons = numberOfLessons;
		this.teacher = teacher;
		this.status = status;
	}

	@Override
	public String toString() {
		return "Group [id=" + id + ", number=" + number + ", course=" + course + ", startDate=" + startDate
				+ ", finishDate=" + finishDate + ", days=" + days + ", time=" + time + ", duration=" + duration
				+ ", numberOfLessons=" + numberOfLessons + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((course == null) ? 0 : course.hashCode());
		result = prime * result + ((days == null) ? 0 : days.hashCode());
		result = prime * result + duration;
		result = prime * result + ((finishDate == null) ? 0 : finishDate.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((number == null) ? 0 : number.hashCode());
		result = prime * result + numberOfLessons;
		result = prime * result + ((startDate == null) ? 0 : startDate.hashCode());
		result = prime * result + ((time == null) ? 0 : time.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Group other = (Group) obj;
		if (course == null) {
			if (other.course != null)
				return false;
		} else if (!course.equals(other.course))
			return false;
		if (days == null) {
			if (other.days != null)
				return false;
		} else if (!days.equals(other.days))
			return false;
		if (duration != other.duration)
			return false;
		if (finishDate == null) {
			if (other.finishDate != null)
				return false;
		} else if (!finishDate.equals(other.finishDate))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (number == null) {
			if (other.number != null)
				return false;
		} else if (!number.equals(other.number))
			return false;
		if (numberOfLessons != other.numberOfLessons)
			return false;
		if (startDate == null) {
			if (other.startDate != null)
				return false;
		} else if (!startDate.equals(other.startDate))
			return false;
		if (time == null) {
			if (other.time != null)
				return false;
		} else if (!time.equals(other.time))
			return false;
		return true;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public Course getCourse() {
		return course;
	}
	
	@JsonProperty
	public String getCourseType() {
	    return course == null ? null : course.getType();
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getFinishDate() {
		return finishDate;
	}

	public void setFinishDate(Date finishDate) {
		this.finishDate = finishDate;
	}

	public String getDays() {
		return days;
	}

	public void setDays(String days) {
		this.days = days;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public int getNumberOfLessons() {
		return numberOfLessons;
	}

	public void setNumberOfLessons(int numberOfLessons) {
		this.numberOfLessons = numberOfLessons;
	}

	public User getTeacher() {
		return teacher;
	}
	
	@JsonProperty
	public String getTeacherFIO() {
	    return teacher == null ? null : teacher.getSurname() + " " + teacher.getName() + " " + teacher.getSecondName();
	}

	public void setTeacher(User teacher) {
		this.teacher = teacher;
	}

	public GroupStatus getStatus() {
		return status;
	}

	public void setStatus(GroupStatus status) {
		this.status = status;
	}

	public Set<Student> getStudents() {
		return students;
	}

	public void setStudents(Set<Student> students) {
		this.students = students;
	}

}
