import './ProfileStaff.css';
import React from 'react';

import Drawer from '../../components/Drawer/Drawer';
import neighborhood_DB from '../../dbs/neighborhood';
import credits_DB from '../../dbs/credits';
import burger_ico from '../../assets/icons/burger.svg';

const ProfileStaff = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const containerStyles = {
    width: '90%',
    margin: '0 auto',
  };

  return (
    <div className='profile__staff' style={containerStyles}>
      <div className='profile__staff__head__burger'>
        <button
          onClick={() => setIsOpen(true)}
          style={{ visibility: isOpen ? 'hidden' : 'visible' }}
        >
          <img src={burger_ico} alt='' />
        </button>
      </div>
      <div className='profile__staff__head__neighborhoods'>
        {neighborhood_DB.map((obj) => (
          <div
            key={obj.id}
            className='profile__staff__head__neighborhoods__item'
          >
            <b>{obj.name}</b>
          </div>
        ))}
      </div>
      <div className='profile__staff__body'>
        {credits_DB.map((obj, index) => (
          <div
            key={obj.id}
            className='profile__staff__body__item'
            style={{ borderRight: `5px solid ${obj.status}` }}
          >
            <div className='profile__staff__body__item__begin'>
              <h1>{index}</h1>
            </div>
            <div className='profile__staff__body__item__end'>
              <h3>{obj.head}</h3>
              <p>{obj.des}</p>
            </div>
          </div>
        ))}
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default ProfileStaff;
