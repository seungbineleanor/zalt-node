import React from 'react';
import { connect } from 'react-redux';
import { getBusinesses } from '../../actions';
import BusinessSearchBar from './BusinessSearchBar';
import { Link } from 'react-router-dom';
import { Header, Modal } from 'semantic-ui-react';
import Map from './Map';

class BusinessList extends React.Component {
  //called when BusinessList is first loaded onto screen

  state = { term : ''};

  componentDidMount(){
    this.props.getBusinesses();
  }

  onSearchSubmit = async (term) => {
    //value getting from child component BusinessSearchBar
   this.setState({ term : term });
 }

  render(){
    if(this.props.businesses === null){
      return <div>loading...</div>
    }

    const cards = this.props.businesses.map((b) => {
      if (b.name.includes(this.state.term)){
        return (
          <div key={b._id} className="ui card">
            <div className="image">
              <img src= {b.image_url}/>
            </div>
            <div className="content">
              <Link to = {`/b/${b._id}`} className="header">{b.name}</Link>
              <div key={b._id}>
                <Modal trigger={<a className="date">{b.address}</a>}>
                  <Modal.Header>{ b.name }</Modal.Header>
                  <Modal.Content>
                    <h3>{b.address}</h3>
                    <Map lat={b.lat} lng={b.lng} business_id={b._id} businesses={this.props.businesses} />
                  </Modal.Content>
                </Modal>
              </div>
              <div className="description">{b.description}</div>
            </div>
          </div>
        );
      }else{
        return null
      }
    });

    return (
      <div>
        <BusinessSearchBar onSubmit={this.onSearchSubmit}/>
        <div className="ui cards">{ cards }</div>
      </div>
    );
  }
}

//state object from redux store
const mapStateToProps = (state) => {
  return { businesses : state.businesses.businesses }
}

export default connect(mapStateToProps, { getBusinesses })(BusinessList);
