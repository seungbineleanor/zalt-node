import React from 'react';

class BusinessSearchBar extends React.Component {

  state = { term : ''};

  onFormSubmit = (event) => {
    event.preventDefault(); //prevent from form being submitting automatically
    this.props.onSubmit(this.state.term); //passing this.state.term up to business list
  }

  //callback
  onInputChange = (event) => {
    //whenever there is a change, we are updating the term property in our state
    //by pulling the event object out from the callback
    this.setState({term: event.target.value});
  }

  //rerendered when setState is called
  render(){
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Searh Business</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default BusinessSearchBar;
