import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';

const NeighborhoodDropdown = ({ neighborhoods, selectedIDs, handleNeighborhoodChange, updateBedrooms }) => {

    const [show, setShow] = useState(false);

    const selectedHash = {}
    
    for (const neighborhood in neighborhoods) {
        selectedHash[neighborhood.id] = false
    }

    for (const id of selectedIDs) {
        selectedHash[id] = true
    }

    const handleDropdownClick = (vis, event, source) => {
        if ( event.target && event.target.tagName !== 'BUTTON' ) return
        show ? setShow(false) : setShow(true)
    }

    const generateNeighborhoodCheckboxes = (neighborhoods) => {
        // {id: 101, name: "pacific heights"}
        if (neighborhoods.length === 0) return
        const sortedNeighborhoods = neighborhoods.sort( (a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1: -1 )
        // debugger
        return sortedNeighborhoods.map( neighborhood => (
            <>
                <input key={ neighborhood.id } type='checkbox' name={ neighborhood.name } value={ neighborhood.id } checked={ selectedHash[neighborhood.id] } />
                <label for={ neighborhood.name }>{ neighborhood.name }</label><br/>
            </>
        ))
    }

    const handleClick = (event) => {
        // follow to helper methods to update state in body
        const id = parseInt(event.target.value)
        if (event.target.checked) {
            addIdToSelectedIDs(id)
        } else {
            removeIdFromSelectedIDs(id)
        }
    }

    const addIdToSelectedIDs = (id) => {
        // updates state in body
        let newArr = [...selectedIDs, id].sort( (a,b) => a - b )
        handleNeighborhoodChange(newArr)
    }

    const removeIdFromSelectedIDs = (id) => {
        // updates state in body
        let newArr = selectedIDs.filter( sId => sId !== id )
        handleNeighborhoodChange(newArr)
    }

    return (
        <Dropdown show={ show } onToggle={ handleDropdownClick }>
            <Dropdown.Toggle variant='secondary'>
                Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Header>Bedrooms</Dropdown.Header>
                <Dropdown.Item id='bedrooms' as='select' onChange={ updateBedrooms } > 
                    <Dropdown.Item id='any' as='option' > any </Dropdown.Item> 
                    <Dropdown.Item id='0' as='option' > 0  </Dropdown.Item>
                    <Dropdown.Item id='1' as='option' > 1  </Dropdown.Item>
                    <Dropdown.Item id='2' as='option' > 2  </Dropdown.Item>
                    <Dropdown.Item id='3' as='option' > 3  </Dropdown.Item>
                    <Dropdown.Item id='4' as='option' > 4  </Dropdown.Item>
                    <Dropdown.Item id='5' as='option' > 5  </Dropdown.Item>
                    <Dropdown.Item id='6' as='option' > 6  </Dropdown.Item>
                    <Dropdown.Item id='7' as='option' > 7  </Dropdown.Item>
                    <Dropdown.Item id='8' as='option' > 8  </Dropdown.Item>
                </Dropdown.Item>
                <Dropdown.Header>Neighborhoods</Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item id='neighborhoods-dropdown-form' as='form' onChange={ handleClick } >
                    { generateNeighborhoodCheckboxes(neighborhoods) }    
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default NeighborhoodDropdown;
