import React from 'react'

const SearchColor = ( {color, setColor} ) => {

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
                onChange = {(e) => setColor(e.target.value)}
                required
            />
        </form>
    )
}

export default SearchColor
