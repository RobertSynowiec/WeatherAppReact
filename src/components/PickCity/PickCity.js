import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './PickCity.module.scss';
import React from 'react';

import { useState } from 'react';

const PickCity = (props) => {

  const handleAction = props.action;
  const [city, setCity] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    handleAction({ city });
    setCity('');
  };



  return (
    <form onSubmit={handleSubmit} className={styles.pickCityForm}>
      <label>
        <TextInput placeholder="Enter city name...." value={city} onChange={e => setCity(e.target.value)} />
      </label>
      <Button>Search</Button>
    </form>
  );
};

export default PickCity;