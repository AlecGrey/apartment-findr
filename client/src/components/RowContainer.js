import React, { Component } from "react";
import { default as TileRow } from "./Row_";
import Container from "react-bootstrap/Container";
import { BsChevronDoubleUp, BsChevronDoubleDown } from "react-icons/bs";

class RowContainer extends Component {
  state = {
    nStartIndex: 0,
  };

  buildRowTop = (arrLow, arrCenter, arrHigh) => {
    let neighborhoodName = "";
    let index = this.state.nStartIndex;
    this.props.neighborhoodsLow[index]
      ? (neighborhoodName = this.props.neighborhoodsLow[index].name)
      : (neighborhoodName = null);
    let row1col1 = arrLow[index];
    let row1col2 = arrCenter[index];
    let row1col3 = arrHigh[index];
    return (
      <TileRow
        name={neighborhoodName}
        left={row1col1}
        center={row1col2}
        right={row1col3}
        handleLike={this.props.handleLike}
        likedApts={this.props.likedApts}
        handleDislike={this.props.handleDislike}
        dislikedApts={this.props.dislikedApts}
      />
    );
  };

  buildRowMiddle = (arrLow, arrCenter, arrHigh) => {
    let neighborhoodName = "";
    let index = this.state.nStartIndex + 1;
    this.props.neighborhoodsLow[index]
      ? (neighborhoodName = this.props.neighborhoodsLow[index].name)
      : (neighborhoodName = null);
    let row2col1 = arrLow[index];
    let row2col2 = arrCenter[index];
    let row2col3 = arrHigh[index];
    return (
      <TileRow
        name={neighborhoodName}
        left={row2col1}
        center={row2col2}
        right={row2col3}
        handleLike={this.props.handleLike}
        likedApts={this.props.likedApts}
        handleDislike={this.props.handleDislike}
        dislikedApts={this.props.dislikedApts}
      />
    );
  };

  buildRowBottom = (arrLow, arrCenter, arrHigh) => {
    let neighborhoodName = "";
    let index = this.state.nStartIndex + 2;
    this.props.neighborhoodsLow[index]
      ? (neighborhoodName = this.props.neighborhoodsLow[index].name)
      : (neighborhoodName = null);
    let row3col1 = arrLow[index];
    let row3col2 = arrCenter[index];
    let row3col3 = arrHigh[index];
    return (
      <TileRow
        name={neighborhoodName}
        left={row3col1}
        center={row3col2}
        right={row3col3}
        updatePrice={this.props.updatePrice}
        handleLike={this.props.handleLike}
        likedApts={this.props.likedApts}
        handleDislike={this.props.handleDislike}
        dislikedApts={this.props.dislikedApts}
      />
    );
  };

  neighborhoodDown = () => {
    if (this.state.nStartIndex >= this.props.neighborhoodsLow.length - 3)
      return;
    this.setState((prevState) => {
      return { nStartIndex: prevState.nStartIndex + 1 };
    });
  };

  neighborhoodUp = () => {
    if (this.state.nStartIndex < 1) return;
    this.setState((prevState) => {
      return { nStartIndex: prevState.nStartIndex - 1 };
    });
  };

  render() {
    return (
      <Container
        id="row-container"
        className="mt-auto d-flex flex-column justify-content-between"
        fluid
      >
        {this.buildRowTop(
          this.props.neighborhoodsLow,
          this.props.neighborhoodsCenter,
          this.props.neighborhoodsHigh
        )}
        {this.buildRowMiddle(
          this.props.neighborhoodsLow,
          this.props.neighborhoodsCenter,
          this.props.neighborhoodsHigh
        )}
        {this.buildRowBottom(
          this.props.neighborhoodsLow,
          this.props.neighborhoodsCenter,
          this.props.neighborhoodsHigh
        )}
        <div className="d-flex justify-content-center apt-arrow-up col-md-1">
          {this.state.nStartIndex < 1 ? (
            <BsChevronDoubleUp
              color="d8d8d8"
              onClick={() => this.neighborhoodUp()}
            />
          ) : (
            <BsChevronDoubleUp
              color="black"
              onClick={() => this.neighborhoodUp()}
            />
          )}
        </div>
        <div className="d-flex justify-content-center apt-arrow-down col-md-1">
          {this.state.nStartIndex >= this.props.neighborhoodsLow.length - 3 ? (
            <BsChevronDoubleDown
              color="d8d8d8"
              onClick={() => this.neighborhoodDown()}
            />
          ) : (
            <BsChevronDoubleDown
              color="black"
              onClick={() => this.neighborhoodDown()}
            />
          )}
        </div>
      </Container>
    );
  }
}

export default RowContainer;
