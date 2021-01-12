import React, { Component } from "react";
import RowContainer from "./RowContainer";
import Column from "./Column";
import Container from "react-bootstrap/Container";

const API = "http://localhost:3000/neighborhoods";

class Body extends Component {
  constructor() {
    super();

    this.updateBedrooms = this.updateBedrooms.bind(this);
  }

  state = {
    neighborhoods: [],
    selectedNeighborhoodIDs: [],
    priceLow: 2000,
    priceHigh: 2099,
    bedrooms: "any",
    likedApartments: [],
    dislikedApartments: []
  };

  updateBedrooms(event) {
    this.setState({
      bedrooms: event.target.value,
    });
  }

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          neighborhoods: this.sortNeighborhoods(data),
          selectedNeighborhoodIDs: this.allIDsFromJsonObject(data),
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  sortNeighborhoods = (jsonObj) => {
    return jsonObj.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    );
  };

  allIDsFromJsonObject = (jsonObj) => {
    return jsonObj.map((neighborhood) => neighborhood.id);
  };

  allNeighborhoodIDsAndNames = () => {
    return this.state.neighborhoods.map((neighborhood) => {
      return { id: neighborhood.id, name: neighborhood.name };
    });
  };

  filterNeighborhoodsByPriceLow = () => {
    let newArr = this.filterDislikedApartments().map((neighborhood) => ({
      id: neighborhood.id,
      name: neighborhood.name,
      apartments: neighborhood.apartments.filter((apt) => {
        if (this.state.bedrooms === "any") {
          if (
            apt.price >= parseInt(this.state.priceLow) - 100 &&
            apt.price <= parseInt(this.state.priceHigh) - 100
          ) {
            return apt;
          }
        } else {
          if (
            apt.price >= parseInt(this.state.priceLow) - 100 &&
            apt.price <= parseInt(this.state.priceHigh) - 100 &&
            apt.bedrooms === parseInt(this.state.bedrooms)
          ) {
            return apt;
          }
        }
      }),
    }));
    return newArr;
  };

  filterNeighborhoodsByPriceHigh = () => {
    let newArr = this.filterDislikedApartments().map((neighborhood) => ({
      id: neighborhood.id,
      name: neighborhood.name,
      apartments: neighborhood.apartments.filter((apt) => {
        if (this.state.bedrooms === "any") {
          if (
            apt.price >= parseInt(this.state.priceLow) + 99 &&
            apt.price <= parseInt(this.state.priceHigh) + 99
          ) {
            return apt;
          }
        } else {
          if (
            apt.price >= parseInt(this.state.priceLow) + 99 &&
            apt.price <= parseInt(this.state.priceHigh) + 99 &&
            apt.bedrooms === parseInt(this.state.bedrooms)
          ) {
            return apt;
          }
        }
      }),
    }));
    return newArr;
  };

  filterNeighborhoodsByPriceCenter = () => {
    let newArr = this.filterDislikedApartments().map((neighborhood) => ({
      id: neighborhood.id,
      name: neighborhood.name,
      apartments: neighborhood.apartments.filter((apt) => {
        if (this.state.bedrooms === "any") {
          if (
            apt.price >= parseInt(this.state.priceLow) &&
            apt.price <= parseInt(this.state.priceHigh)
          ) {
            return apt;
          }
        } else {
          if (
            apt.price >= parseInt(this.state.priceLow)  &&
            apt.price <= parseInt(this.state.priceHigh) &&
            apt.bedrooms === parseInt(this.state.bedrooms)
          ) {
            return apt;
          }
        }
      }),
    }));
    return newArr;
  };


  selectNeighborhoods = () => {
    let selectedNeighborhoods = this.state.selectedNeighborhoodIDs.map((id) =>
      this.state.neighborhoods.find((neighborhood) => neighborhood.id === id)
    );
    return selectedNeighborhoods;
  };

  filterDislikedApartments = () => {
    let newArr = this.selectNeighborhoods().map(neighborhood => ({
      id: neighborhood.id,
      name: neighborhood.name,
      apartments: neighborhood.apartments.filter((apt) => !this.state.dislikedApartments.includes(apt.id))
    }))
    return newArr
  }

  updateSelectedNeighborhoods = (neighborhoodArray) => {
    this.setState({ selectedNeighborhoodIDs: neighborhoodArray });
  };

  updatePrice = (low, high) => {
    this.setState({
      priceLow: parseInt(low),
      priceHigh: parseInt(high),
    });
  };

  handleLike = (str, id) => {
    if (str === "like"){
      this.setState(prevState => {
        return{
          likedApartments: [...prevState.likedApartments, id ]
        }
      })
    }
    else if (str === "unlike"){
      this.setState(prevState => {
        return{
          likedApartments: [...prevState.likedApartments.filter(aptId => aptId !== id)]
        }
      })
    }
  }

  handleDislike = (str, id) => {
    if (str === "dislike"){
      this.setState(prevState => {
        return{
          dislikedApartments: [...prevState.dislikedApartments, id ]
        }
      })
    }
    else if (str === "undislike"){
      this.setState(prevState => {
        return{
          dislikedApartments: [...prevState.dislikedApartments.filter(aptId => aptId !== id)]
        }
      })
    }
  }

  render() {
    return (
      <Container id="body-container" className="d-flex flex-column" fluid>
        <Column
          neighborhoods={this.allNeighborhoodIDsAndNames()}
          handleNeighborhoodChange={this.updateSelectedNeighborhoods}
          selectedIDs={this.state.selectedNeighborhoodIDs}
          priceLow={this.state.priceLow}
          priceHigh={this.state.priceHigh}
          updatePrice={this.updatePrice}
          updateBedrooms={this.updateBedrooms}
        />
        <RowContainer
          neighborhoodsCenter={this.filterNeighborhoodsByPriceCenter()}
          neighborhoodsLow={this.filterNeighborhoodsByPriceLow()}
          neighborhoodsHigh={this.filterNeighborhoodsByPriceHigh()}
          priceLow={this.state.priceLow}
          priceHigh={this.state.priceHigh}
          handleLike={this.handleLike}
          likedApts={this.state.likedApartments}
          handleDislike={this.handleDislike}
          dislikedApts={this.state.dislikedApartments}
        />
      </Container>
    );
  }
}

export default Body;
