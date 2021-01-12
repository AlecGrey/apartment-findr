import React, { Component } from "react";
import TileContainer from "./TileContainer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Row_ extends Component {
  state = {
    page: 0,
  };

  changePageUp = () => {
    if (this.state.page >= this.props.apartments.length - 1) return;
    this.setState((prevState) => {
      return { page: prevState.page + 1 };
    });
  };

  changePageDown = () => {
    if (this.state.page <= 0) return;
    this.setState((prevState) => {
      return { page: prevState.page - 1 };
    });
  };

  render() {
    return (
      <Row className="tile-row border-bottom">
        {/* <RowHeader /> */}
        <Col
          className="border-right nav-color d-flex flex-column align-items-center justify-content-center"
          md={1}
        >
          <p className="text-center">{this.props.name ? this.props.name : 'loading...'}</p>
        </Col>
          <div className="tile-container d-flex justify-content-around">
            <TileContainer id="outer" className="pinstripeDark-color" 
            neighborhood={this.props.left} 
            handleLike = {this.props.handleLike} 
            likedApts={this.props.likedApts} 
            handleDislike = {this.props.handleDislike}
            dislikedApts = {this.props.dislikedApts}
            />
            <TileContainer id="center" 
            neighborhood={this.props.center} 
            handleLike = {this.props.handleLike} 
            likedApts = {this.props.likedApts} 
            handleDislike = {this.props.handleDislike}
            dislikedApts = {this.props.dislikedApts}
            />
            <TileContainer id="outer" 
            neighborhood={this.props.right} 
            handleLike = {this.props.handleLike} 
            likedApts = {this.props.likedApts} 
            handleDislike = {this.props.handleDislike}
            dislikedApts = {this.props.dislikedApts}
            />
          </div>
      </Row>
    );
  }
}

export default Row_;
