import React, { useState, useEffect } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import TileContainer from "./TileContainer";
import browseByNeighborhoodPNG from '../assets/landing-page-browse-by-neighborhood.png';
import browseByPriceRangePNG from '../assets/landing-page-browse-by-price-range.png';
import { NavLink } from 'react-router-dom';

const Landing = () => {

    const url = 'http://localhost:3000/neighborhoods/sample'

    const [neighborhoods, setNeighborhoods] = useState([]);

    useEffect(() => {
        fetch(url)
            .then( resp => resp.json() )
            .then( json => {
                console.log('FETCHING!')
                const neighborhoodsWithFilteredApartments = filterNeighborhoodsBySamplePrice(json) 
                setNeighborhoods( neighborhoodsWithFilteredApartments )
            })
    }, [])

    const filterNeighborhoodsBySamplePrice = ( neighborhoodsArray ) => {
        return neighborhoodsArray.map( neighborhood => ({
            id: neighborhood.id,
            name: neighborhood.name,
            apartments: neighborhood.apartments.filter( apartment => apartment.price >= 2000 && apartment.price < 2500 )
        }))
    }

    const buildSampleNeighborhoods = () => {
        return neighborhoods.map( neighborhood => (
            <TileContainer isLandingPage={ true } key={ neighborhood.id } neighborhood={ neighborhood } />
        ))
    }

    return (
        <Container id='landing-page' className='d-flex justify-content-start align-items-stretch' fluid>
            <div className='flex-grow-1'>
                <Jumbotron id='welcome-box' className='shadow'>
                    <h1>Welcome to ApartmentFindr!</h1>
                    <p>
                        Looking for an apartment can tend to be an overwhelming experience...but it doesn't have to be! With ApartmentFindr, search through apartment listings tailored to your price points and neighborhoods. It's built to keep your apartment search organized: keep track of which listings you've liked and hide any listings you're not interested in by clicking the dislike button! 
                    </p>
                    <p>
                        <NavLink exact to='browse'>Browse our listings!</NavLink>
                    </p>
                </Jumbotron>
            </div>
            <img id='browse-by-neighborhood-img' src={ browseByNeighborhoodPNG } />
            <div id='sample-container' className='d-flex flex-column justify-content-between'>
                <img id='browse-by-price-img' src={ browseByPriceRangePNG } />
                { buildSampleNeighborhoods() }
            </div>
        </Container>
    );
}

export default Landing;
