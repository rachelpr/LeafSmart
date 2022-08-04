import { useState } from 'react';
import { AsyncPaginate } from "react-select-async-paginate";
import axios from 'axios';

//https://rapidapi.com/wirefreethought/api/geodb-cities
const apiUrl = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities"
const apiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '80d7167f11msh6c7145e3fd1d1a4p16cb90jsn629fc6ec6c82',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};


const Search = (props) => {
  const { onSearchChange } = props;
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData)
  }

  const loadOptions = (inputValue) => {
    return axios.get(`${apiUrl}?countryIds=CA&minPopulation=100000&namePrefix=${inputValue}&types=CITY`, apiOptions)
      .then(res => {
        return {
          options: res.data.data.map((city => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.city}, ${city.regionCode}`
            }
          }))
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <AsyncPaginate
      placeholder="Where to?"
      debounceTimeout={1000} //maximum 1 api call per second
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}

export default Search;
