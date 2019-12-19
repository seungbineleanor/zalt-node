import React from 'react';

class FormList extends React.Component {
  render(){
    return (
      <div>Form List</div>
    );
  }
}

//state object from redux store
//lets props to be accessible to mapStateToProps
const mapStateToProps = (state, props) => {
  return { business : props.business_id }
}

export default connect(mapStateToProps)(FormList);
