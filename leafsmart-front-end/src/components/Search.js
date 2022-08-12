import { useEffect, useState } from 'react';
import { AsyncPaginate } from "react-select-async-paginate";
import axios from 'axios';

const apiUser = process.env.REACT_APP_GEONAMES_USERNAME;
const apiUrl = process.env.REACT_APP_GEONAMES_URL;

const Search = (props) => {
  const { onSearchChange, value } = props;
  const [search, setSearch] = useState(value);

  useEffect(() => {
    loadOptions(value)
      .then((res) => {
        setSearch(res.options[0]);
        onSearchChange(res.options[0]);
      });
  }, [value]);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  const loadOptions = (inputValue) => {
    return axios.get(`${apiUrl}?name_startsWith=${inputValue}&cities=cities5000&country=CA&featureClass=P&maxRows=5&username=${apiUser}`)
      .then(res => {
        return {
          options: res.data.geonames.map((city => {
            return {
              value: `${city.geonameId} ${city.lat} ${city.lng}`,
              label: `${city.toponymName}, ${city.adminName1}`
            }
          }))
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <AsyncPaginate
      className="w-10/12 mr-0 my-auto"
      placeholder="Where to?"
      debounceTimeout={1000} //maximum 1 api call per second
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}

    />
  );
}

export default Search;
