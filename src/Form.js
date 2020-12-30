import React, {Component} from 'react';

class Form extends Component {
  
  initialState = {
    name: '',
    job: '',
  }

  state = this.initialState
  // handleChange

  handleChange = (event) => {
    const {name, value} = event.target
  
    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  
  render() {
    const { name, job } = this.state;

    return (
      
        <form>
          <h3 className="text-primary" > Form </h3>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={this.handleChange} />
          </div>
          <div className="form-group" >
            <label htmlFor="job">Job</label> &nbsp;
            <input
              type="text"
              name="job"
              id="job"
              value={job}
              onChange={this.handleChange} />
          </div>
        <button type="button" 
                value="submit"
                className="btn btn-success"  
                onClick={ this.submitForm }
        >Submit</button>
          
        </form>

      
    );
  }
}

export default Form;