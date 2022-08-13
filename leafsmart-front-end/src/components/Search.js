import { useEffect, useState } from 'react';
import { AsyncPaginate } from "react-select-async-paginate";
import axios from 'axios';

const apiUser = process.env.REACT_APP_GEONAMES_USERNAME;
const apiUrl = process.env.REACT_APP_GEONAMES_URL;

const Search = (props) => {
  const { onSearchChange, savedSearch } = props;
  const [search, setSearch] = useState(savedSearch || null);

  useEffect(() => {
    loadOptions(savedSearch)
      .then((res) => {
        if (res.options.length) {
          setSearch(res.options[0]);
          onSearchChange(res.options[0]);
        } else {
          setSearch(null);
          onSearchChange(null);
        }
      })
      .catch((err) => {
        console.log("Error in Search: ", err);
      });
      // eslint-disable-next-line
  }, [savedSearch]);

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
      className="w-10/12 ml-12 mt-3"
      placeholder="Where to?"
      debounceTimeout={1000} //maximum 1 api call per second
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}

    />
  );
}

export default Search;
