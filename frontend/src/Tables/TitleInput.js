import React, { Component } from "react";

class TitleInput extends Component {
  constructor(props) {
    super(props);
    this.handleTitleChanges = this.handleTitleChanges.bind(this);
  }

  handleTitleChanges(event) {
    const title = event.target.value;
    this.props.title(title);
  }

  render() {
    return (
      <div>
        <select value={this.props.value} onChange={this.handleTitleChanges}>
          <option selected hidden />
          <option value="Old Man and the Sea">Old Man and the Sea</option>
          <option value="Where the Red Fern Grows">
            Where the Red Fern Grows
          </option>
          <option value="Nineteen Eighty-Four">Nineteen Eighty-Four</option>
          <option value="The Kite Runner">The Kite Runner</option>
        </select>
      </div>
    );
  }
}

export default TitleInput;