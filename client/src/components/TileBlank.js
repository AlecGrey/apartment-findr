import React from 'react';
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import { BsX as NoAptIcon } from 'react-icons/bs';

const PageLoadingCircle = () => {
    return (
        <div class="profile-main-loader">
            <div class="loader">
                <svg class="circular-loader"viewBox="25 25 50 50" >
                    <circle class="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#dddddd" stroke-width="2" />
                </svg>
            </div>
        </div>
    )
}

const TileBlank = ({ loadingTile }) => {


    return (
        <Card className='blank'>
            { 
                loadingTile ? 
                    <PageLoadingCircle /> : 
                    <NoAptIcon className='blank-tile-icon'/> 
            }
        </Card>
    );
}

export default TileBlank;