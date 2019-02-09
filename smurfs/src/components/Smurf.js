import React from 'react';
import styled from 'styled-components';

const Name = styled.div`
  height: 35px;
  width: 200px;
  border: 1px solid black;
`
const InfoCard = styled.div`
  width: 200px;
  height: 150px;
  border: 1px solid blue;
`

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
        <Name onClick={this.openCard}>{this.props.smurf.name}</Name>
        {this.state.infoCardToggle ? <InfoCard>
          <div>Age: {this.props.smurf.age}</div>
          <div>Height: {this.props.smurf.height}</div>
          <button onClick={e => this.props.deleteSmurf(this.props.smurf.id)}>Delete Smurf</button>
        </InfoCard> : null}
      </div>
    );
  }
}

export default Smurf;
