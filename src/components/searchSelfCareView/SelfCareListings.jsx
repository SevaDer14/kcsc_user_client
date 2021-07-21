import React from 'react'

const SelfCareListings = ({searchResults}) => {
  return (
    <div data-cy="search-results">
        {searchResults.services &&
          searchResults.services.map((result) => (
            <div key={result.id}>
              <h4>{result.name}</h4>
              <p>{result.description}</p>
            </div>
          ))}
      </div>
  )
}

export default SelfCareListings
