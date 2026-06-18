// import React, { useState } from "react";
// import { useEffect } from "react";
// import axios from 'axios';

// const usePhoneCodes = () => {
// const [codes, setCodes] = useState([])
// const [isLoading, setIsLoading] = useState(true)
// const [error, setError] = useState(null)

// useEffect(() => {
// const cancelTokenSource = axios.CancelToken.source();


//   const fetchCodes = async () => {
//    try {
//      const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,idd,cca2', 
//        {CancelToken: cancelTokenSource.token}
//      )
       
//      const formattedCodes = response.data
//           .filter(country => country.idd?.root)
//           .map(country => ({
//             name: country.name.common,
//             code: `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ''}`,
//             cca2: country.cca2
//           }))
//           .sort((a, b) => a.name.localeCompare(b.name));

//           setCodes(formattedCodes)

//    } catch (error) {
//     if (axios.isCancel(error)) {
//       setError(error.message || 'failed to load country codes')
//     }
//    }finally{
//     setIsLoading(false)
//    }
//   };

//   fetchCodes();

//  return () => {
//       cancelTokenSource.cancel('Operation canceled by the user.');
//     };
// }, [])

// return {codes, isLoading, error}

// }

// export default usePhoneCodes


import countryData from '../../src/Components/Data/CountryCodes.json'; // Adjust path to your json file

const usePhoneCodes = () => {
  // Static data doesn't need loading states or async fetching anymore!
  return { 
    codes: countryData, 
    loading: false, 
    error: null 
  };
};

export default usePhoneCodes;