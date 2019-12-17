import React from 'react';
import { connect } from 'react-redux';
import { getBusinesses } from '../../actions';

class BusinessList extends React.Component {
  //called when BusinessList is first loaded onto screen
  componentDidMount(){
    this.props.getBusinesses();
  }

  render(){
    if(this.props.businesses === null){
      return <div>loading...</div>
    }
    console.log(this.props.businesses);
    const cards = this.props.businesses.map((b) => {
      return (
        <div key={b._id} className="ui card">
          <div className="image">
            <img src= {b.image_url}/>
          </div>
          <div className="content">
            <a className="header">{b.name}</a>
            <div className="meta">
              <span className="date">{b.address}</span>
            </div>
            <div className="description">{b.description}</div>
          </div>
        </div>
      );
    });

    return <div className="ui cards">{ cards }</div>;
  };
};

//state object from redux store
const mapStateToProps = (state) => {
  return { businesses : state.businesses.businesses }
};

export default connect(mapStateToProps, { getBusinesses })(BusinessList);
