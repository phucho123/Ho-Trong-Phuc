import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencySwapForm = () => {
  const [currencies, setCurrencies] = useState([]);
  const [mapCurrencies, setMapCurrencies] = useState({});
  const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState('');
  const [selectedCurrencyTo, setSelectedCurrencyTo] = useState('');
  const [amountFrom, setAmountFrom] = useState('');
  const [amountTo, setAmountTo] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(1);

  useEffect(() => {
    axios.get('https://interview.switcheo.com/prices.json')
      .then(response => {
        const tokens = response.data;
        const map = {};
        tokens.forEach((item) => {
          map[item.currency] = item.price;
        })
        setMapCurrencies(map);
        console.log(map);
        const arr = [];
        for (const key in map) {
          arr.push(key);
        }
        setCurrencies(arr);
      })
      .catch(error => console.error('Error fetching token prices:', error));
  }, []);

  const handleCurrencyFromChange = (event) => {
    setSelectedCurrencyFrom(event.target.value);
    const rate = calculateExchangeRate(event.target.value, selectedCurrencyTo);
    setExchangeRate(rate);
    const convertedAmount = amountFrom * rate;
    setAmountTo(convertedAmount);
  };

  const handleCurrencyToChange = (event) => {
    setSelectedCurrencyTo(event.target.value);
    const rate = calculateExchangeRate(selectedCurrencyFrom, event.target.value);
    setExchangeRate(rate);
    const convertedAmount = amountFrom * rate;
    setAmountTo(convertedAmount);
  };

  const handleAmountFromChange = (event) => {
    setAmountFrom(event.target.value);
    const convertedAmount = event.target.value * exchangeRate;
    setAmountTo(convertedAmount);
  };

  const handleAmountToChange = (event) => {
    setAmountTo(event.target.value);
    const convertedAmount = event.target.value / exchangeRate;
    setAmountFrom(convertedAmount);
  };

  const calculateExchangeRate = (currencyFrom, currencyTo) => {
    if (currencyFrom != '' && currencyTo != '') {
      return mapCurrencies[currencyFrom] / mapCurrencies[currencyTo];
    }
    return 0;
  };

  return (

    <div className="app">
      <h1 className='header'>Currency Swap</h1>
      <div className='container'>
        <div className="form-group">
          <label htmlFor="currency-from">From:</label>
          <select id="currency-from" value={selectedCurrencyFrom} onChange={handleCurrencyFromChange}>
            <option value="">Select Currency</option>
            {currencies.map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
          <input type="number" value={amountFrom} onChange={handleAmountFromChange} placeholder='0' />
        </div>
        <div className="form-group">
          <label htmlFor="currency-to">To:</label>
          <select id="currency-to" value={selectedCurrencyTo} onChange={handleCurrencyToChange}>
            <option value="">Select Currency</option>
            {currencies.map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
          <input type="number" value={amountTo} onChange={handleAmountToChange} readOnly />
        </div>

      </div>

    </div>
  );
};

export default CurrencySwapForm;
