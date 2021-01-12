import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import Container from 'react-bootstrap/Container'

class RowHeader extends Component {
  render() {
    return (
      <Container className="rowHeaderClass" >
        <p>{this.props.name}</p>
        <Badge variant="dark">{this.props.count}</Badge>
      </Container>
    );
  }
}

export default RowHeader;
