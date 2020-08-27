import React from "react";
import $ from "jquery";


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {borough: '', description:'', square_meters:'', bedrooms:'', toilets:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("handle change: " + event.target.borough)
    this.setState({borough: event.target.borough, description: event.target.description,
    square_meters: event.target.square_meters, bedrooms: event.target.bedrooms, toilets: event.target.toilets});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    console.log(event.target);
    console.log(event.target.borough);
    event.preventDefault();
    console.log("state borough:" + this.state.borough);
    const formdata = new FormData(event.target);
    var object = {};
    formdata.forEach((value, key) => {object[key] = value});
    var json = JSON.stringify(object);
    var tosend =  JSON.stringify(Object.fromEntries(formdata));

    var a = "ahaha";
    console.log("ayudas");
    $.post('/addhouse', tosend, function(data){
      window.location.href = '/';
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Borough:
          <input type="text" name='borough' value={this.state.borough} onChange={this.handleChange} />
        </label> <br/>
        <label>
          Description:
          <input type="text" name='description' value={this.state.description} onChange={this.handleChange} />
        </label> <br/>
        <label>
          Square Meters:
          <input type="text" name='square_meters' value={this.state.square_meters} onChange={this.handleChange} />
        </label><br/>
        <label>
          Bedrooms:
          <input type="text" name='bedrooms' value={this.state.bedrooms} onChange={this.handleChange} />
        </label> <br/>
        <label>
          Toilets:
          <input type="text" name='toilets' value={this.state.toilets} onChange={this.handleChange} />
        </label> <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
