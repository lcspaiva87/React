import React ,{ Component } from 'react';

class MyForm extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'abc',
            message:'',
            fruit:'Aplle'
        }
        this.fruits = [
            {'name':'Aplle','value':'Aplle'},
            {'name': 'leite', 'value':'leite'}
        ];
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        const target = event.target,
            value = target.type === 'checkbox' ? target.checked : target.value,
            name = target.name;

        this.setState({
            [name]: value
        })
    }
    render(){
        const{state}=this;
        return(
            <form>
                <div>
                    <label>
                        Name:
                            <input type="text" name="name" value={state.name} onChange={this.handleChange}></input>{state.name}
                    </label>
                        <input type="submit" value="enviar"></input>
                </div>
                    <div>
                    <label>
                    Fruta:
                    <select value={state.fruit} multiple={true} name="fruits" onChange={this.handleChange}>
                        {
                            this.fruits.map(fruit => <option value={fruit.value}>{fruit.name}</option>)
                        }
                    </select>
                </label>
                    </div>
                <div>
                <label>
                    Message:
                        <textarea name="message" value="{state.message}" onChange={this.handleChange}/>
            </label>
                    <input type="submit" value="enviar"/>
                
                </div>
                </form>
               
        )
    }
}
export default MyForm;