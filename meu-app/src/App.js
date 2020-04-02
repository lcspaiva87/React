import React, { Component } from 'react';
import './App.css';
import Course from './componentes/Course';
import Myform from './MyForm';
import TextCounter from './TextCounter';
import { Courseser } from './services/Courseser';
import NewCourseForm from './componentes/NewCourseForm';
class App extends Component{
  static defaultProps={
    onSubmit: () =>{}
  }
  constructor(props){
    super(props);
    this.state={
      courses:[    ]
    }
    this.StartData = this.StartData.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.StartData();
  }
  
  async StartData(){
    const courses = await Courseser.list();
    this.setState({
      courses
    })
  }
  async add(course){
    const {courses} = this.state,
    newCourse = await Courseser.create(course);
    courses.push(newCourse);
    this.setState({courses});
  }
 
 async remove(courseId){
  const { courses } = this.state,
  courseIndex = courses.findIndex(course => courses.id == courseId);
  await  Courseser.remove(courseId); 
  courses.splice(courseIndex, 1);
  this.setState({courses});
}



  render(){
    const{ state }=this;
    return (
      <div className="App">
        <NewCourseForm  onSubmit={this.add}/>
        <ul className="courses-list">
          {
            state.courses.map(course => <Course course={course} onRemove={this.remove} />)
          }
        </ul>
      </div>
    );
  }
}

export default App;