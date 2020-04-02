import React, { Component} from 'react';

class NewCourseForm extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            category:'',
            image:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const newCourse = this.state;

        if(newCourse.name && newCourse.image && newCourse.category){
            this.props.onSubmit(newCourse);
            this.setState({
                name: '',
                image: ''
            })
        }
    }

handleChange(event){
        const {target} = event,
        {name, value }= target;
        this.setState({
            [name]: value
        })
    }
    render(){
        const{props, state} = this;
        return(
            <form className="course-form" onSubmit={this.handleSubmit} >
                <label>
                    <span>Nome:</span>
                    <input name="name" onChange={this.handleChange} value={state.nome}/>
                </label>
                <label>
                    <span>Image:</span>
                    <input name="image" onChange={this.handleChange} value={state.image}/>
                </label>
                <label>
                    <span>Categoria</span>
                    <select name="category" onChange={this.handleChange} value={state.category}>
                    <option value=''>Selecione</option>
                            <option value="javaScript">JavaScript</option>
                            <option value="java">java</option>
                            <option value="C#">C#</option>
                    </select>
                </label>
                <button type="submit"> Criar Curso</button>
            </form>
        )
    }
}
export default NewCourseForm;