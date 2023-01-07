import React from 'react';
import styles from './Drawer.module.css';

import EZDrawer from 'react-modern-drawer';

import back_ico from '../../assets/icons/back_ico.svg';

const Drawer = (props) => {
  const [avatar, setAvatar] = React.useState('https://shorturl.at/BFRST');
  const [fio, setFio] = React.useState('riot');
  const [phoneNumber, setPhoneNumber] = React.useState('+998(90)-000-00-00');
  const [sector, setSector] = React.useState('Sektor nomi');
  const [gender, setGender] = React.useState('Erkak');
  const [screenSize, setScreenSize] = React.useState(window.innerWidth);

  window.addEventListener('resize', () => setScreenSize(window.innerWidth));

  const drawerStyles = {
    background: 'white',
    padding: '3vh',
  };

  const drawerSettings = {
    open: props.isOpen,
    direction: 'left',
    style: drawerStyles,
    enableOverlay: true,
    size: screenSize > 1100 ? '30%' : '100%',
  };

  const user = {
    avatar: avatar,
    fio: fio,
    phone_number: phoneNumber,
    sector: sector,
    gender: gender,
  };

  const handleChange = (value, state) => {
    state(value);
  };

  return (
    <EZDrawer {...drawerSettings}>
      <div className={styles.drawer__head}>
        <button onClick={() => props.setIsOpen(false)}>
          <img src={back_ico} alt='' />
        </button>
      </div>
      <div className={styles.drawer__body}>
        <div className={styles.drawer__head__avatar}>
          <img src={user.avatar} alt='' />
        </div>
        <form>
          <div>
            <label htmlFor='fio'>F.I.O</label>
            <input
              id='fio'
              type='text'
              value={user.fio}
              onChange={(event) => handleChange(event.target.value, setFio)}
            />
          </div>
          <div>
            <label htmlFor='phone_number'>Telefon raqami</label>
            <input
              id='phone_number'
              type='number'
              value={user.phone_number}
              onChange={(event) =>
                handleChange(event.target.value, setPhoneNumber)
              }
            />
          </div>
          <div>
            <label htmlFor='sector'>Sektor nomi</label>
            <input
              id='sector'
              type='text'
              value={user.sector}
              onChange={(event) => handleChange(event.target.value, setSector)}
            />
          </div>
          <div>
            <label htmlFor='gender'>Jinsi</label>
            <input
              id='gender'
              type='text'
              value={user.gender}
              onChange={(event) => handleChange(event.target.value, setGender)}
            />
          </div>
        </form>
      </div>
    </EZDrawer>
  );
};

export default Drawer;
