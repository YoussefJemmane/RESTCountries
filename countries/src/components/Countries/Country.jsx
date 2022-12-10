/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
const Country = () => {
  const [Countries, setCountries] = useState([]);

  const fetchData1 = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    return setCountries(data);
  };
  useEffect(() => {
    fetchData1();
  }, []);
  return (
    <div>
      <h1 className='text-3xl mb-5'>All the countries of the world</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
        {Countries.map((country) =>
          <div className='flex justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl" data-theme='light'>
              <figure className="px-10 pt-10">
                <img src={country.flags.png} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{country.name.common}</h2>
                <h2 className="card-title">{country.name.official}</h2>
                <div className="card-actions">
                  <a href={country.maps.googleMaps} className="btn btn-primary">{country.cca2}</a>
                </div>
              </div>
            </div>
          </div>,
        )}
      </div>
    </div>
  );
};

export default Country;
