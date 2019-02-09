import React from 'react';

class Smurf extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      infoCardToggle: false
    }
  }

  openCard = () => {
    this.setState({infoCardToggle: !this.state.infoCardToggle});
  };

  render(){
    return (
      <div>
        <div>Name: {this.props.smurf.name}</div>
        <div>Age: {this.props.smurf.age}</div>
        <div>Height: {this.props.smurf.height}</div>
        <button onClick={e => this.props.deleteSmurf(this.props.smurf.id)}>Delete Smurf</button>
      </div>
    );
  }
}

export default Smurf;
