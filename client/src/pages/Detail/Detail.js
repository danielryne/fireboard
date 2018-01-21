import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    firefighter: {}
  };
  // When this component mounts, grab the firefighter with the _id of this.props.match.params.id
  // e.g. localhost:3000/firefighters/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getFirefighter(this.props.match.params.id)
      .then(res => this.setState({ firefighter: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
              <h1>
                {this.state.firefighter.name} by {this.state.firefighter.working}
              </h1>
            
            <article>
              <h1>Notes</h1>
              <p>
                {this.state.firefighter.notes}
              </p>
            </article>
         
            <Link to="/">← Back to Working</Link>
      </div>
    );
  }
}

export default Detail;
