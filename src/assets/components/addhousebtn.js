import React from "react";

class AddHouseBtn extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.location.href = "/addhouse";
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Add House
      </button>
    );
  }
}

export default AddHouseBtn;
