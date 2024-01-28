import React from 'react'

const SearchColor = ( {color, handleColor} ) => {

    return (
        <form action="search" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="searchColor"></label>
            <input
                autofocus
                type='text'
                id = 'searchBar'
                role = "searchbox"
                placeholder = 'Search color...'
                value = {color}
                onChange = {(e) => handleColor(e.target.value)}
                required
            />
        </form>
    )
}

export default SearchColor
