import React from "react"


class Skill extends React.Component {
  render() {
    return (
      <div><strong>{this.props.id}:</strong>{this.props.description}</div>
    )
  }
}
export default Skill