import React, {Component} from "react";

    class Surveys extends Component {
        constructor(props) {
        super(props);
        this.state = {value: ''};
        this.state = {value1:''};
        this.state = {value2:''};
        this.state = {value3:''};
        this.state = {value4:''};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }
    
        handleChange(event) {
        this.setState({value: event.target.value});
        this.setState({value: event.target.value1});
        this.setState({value: event.target.value2});
        this.setState({value: event.target.value3});
        this.setState({value4: event.target.value4});
        }
    
        handleSubmit(event) {
        alert('Your Form is submitted: ' ) 
        event.preventDefault();
        this.setState ({value: ''});
        this.setState ({value1:''});
        this.setState ({value2:''});
        this.setState ({value3:''});
        this.setState ({value4:''});
        window.location.href='/';
        }
    
        render() {
        return (
        <form onSubmit={this.handleSubmit}>
           <div>
                <label>
                Name:
                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} style={{width:300}} />
                </label>
            </div>
            <div>
                <label>
                Timeliness on scale of 0 to 5:
                <input type="text" className="form-control" value={this.state.value1} onChange={this.handleChange} style={{width:300}} />
                </label>
            </div>
            <div>
                <label>
                Project Completion Time on scale of 0 to 5:
                <input type="text" className="form-control" value={this.state.value2} onChange={this.handleChange} style={{width:300}} />
                </label>
            </div>
            <div>
                <label>
                Employee Courtiousness on scale of 0 to 5:
                <input type="text" className="form-control" value={this.state.value3} onChange={this.handleChange} style={{width:300}}/>
                </label>
            </div>
            <div>
                <label>
                How Satisfied are you on scale of 0 to 5?:
                <input type="text" className="form-control" value={this.state.value4} onChange={this.handleChange} style={{width:300}}/>
                </label>
            </div>
            
            <input type="submit"  className="btn btn-primary" value="Submit" />
        </form>
        );
        }
}

 export default Surveys;


