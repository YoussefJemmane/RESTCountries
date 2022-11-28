/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
const Personne = () => {
  const [user1, setUser1] = useState([]);

  const fetchData1 = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    return setUser1(data);
  };
  useEffect(() => {
    fetchData1();
  }, []);
  return (
    <div>
      <h1 className='text-3xl mb-5'>All the countries of the world</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
        {user1.map((user) =>
          <div className='flex justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl" data-theme='light'>
              <figure className="px-10 pt-10">
                <img src={user.flags.png} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{user.name.common}</h2>
                <h2 className="card-title">{user.name.official}</h2>
                <div className="card-actions">
                  <a href={user.maps.googleMaps} className="btn btn-primary">{user.cca2}</a>
                </div>
              </div>
            </div>
          </div>,
        )}
      </div>
    </div>
  );
};

export default Personne;
