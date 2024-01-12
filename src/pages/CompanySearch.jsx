import { useState } from "react"
import { get } from "../services/authService"

const CompanySearch = () => {

    const [searchType, setSearchType] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const [searchError, setSearchError] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const handleSelectChange = (e) => {
      setSearchType(e.target.value)
    }

    const handleTextInputChange = (e) => {
      setSearchTerm(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if (searchType) {
        setSearchError('')
        get(`/companyJob/search?${searchType}=${searchTerm}`)
          .then((response) => {
            console.log(response.data)
            setSearchResults(response.data)
          })
          .catch((err) => {
            console.log(err)
          })

      } else {
        setSearchError('Must select Search Type')
      }
    }

  return (
    <div>
        <h1>Search for Companies</h1>

        <form onSubmit={handleSubmit}>

            <select onChange={handleSelectChange}>
              <option value=''>Choose Search Type</option>
              <option value='industry'>Industry</option>
              <option value='location'>Location</option>
              <option value='companyName'>Company Name</option>
            </select>

            <input onChange={handleTextInputChange} value={searchTerm} name='searchTerm' />

            <button type="submit">Submit</button>
        </form>

        {searchError && <p>{searchError}</p>}

        { 
          searchResults.length ? 
          <>
            {
              searchResults.map((company) => {
                return (
                  <h1>{company.companyName}</h1>
                )
              })
            }
          </>
          : <p>Enter your search term to see matching results</p>
        }
    </div>
  )
}

export default CompanySearch