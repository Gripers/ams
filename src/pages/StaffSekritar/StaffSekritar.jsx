import React from 'react';
import '../StaffSekritar/StaffSekritar.css';

import Drawer from '../../components/Drawer/Drawer';
import burger_ico from '../../assets/icons/burger.svg';

const StaffSekritar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className='profile__staff profile__staff__sekritar'>
        <div className='profile__staff__head__burger'>
          <button
            onClick={() => setIsOpen(true)}
            style={{ visibility: isOpen ? 'hidden' : 'visible' }}
          >
            <img src={burger_ico} alt='' />
          </button>
        </div>
        <div className='staff__sekritar'>
          <h3>01</h3>
          <form className='staff__sekritar__form'>
            <div className='input__parent'>
              <label className='label__title'>
                Ariza beruvchining F.I.O: <span>*</span>
              </label>
              <input
                className='form__fio'
                type='text'
                placeholder='F.I.O'
                required
              />
            </div>
            <div className='input__parent'>
              <label className='label__title'>
                Pasport seriyasi: <span>*</span>
              </label>
              <input
                required
                className='form__fio'
                type='text'
                placeholder='AA  1234567'
              />
            </div>
            <div className='input__parent'>
              <label className='label__title'>
                Ko'cha nomi: <span>*</span>
              </label>
              <input
                required
                type='text'
                placeholder='Alisher Navoiy'
                className='input__street'
              />
            </div>
            <div className='input__parent'>
              <label className='label__title'>
                Uy raqami: <span>*</span>
              </label>
              <input required type='number' placeholder='128' />
            </div>
            <div className='input__parent'>
              <label className='label__title'>
                Mahalla nomi: <span>*</span>
              </label>
              <input required type='number' placeholder='Bog’dot' />
            </div>
            <div className='input__parent'>
              <label className='label__title'>
                Ariza mavzusi: <span>*</span>
              </label>
              <input
                type='number'
                required
                placeholder='Uy sotib olish uchun kredit.'
              />
            </div>
            <div className='input__parent'>
              <label className='label__title'>
                Izoh: <span>*</span>
              </label>
              <textarea
                required
                placeholder='Lorem ipsum dolor sit amet consectetur.'
              ></textarea>
            </div>
            <div className='btn__parent'>
              <input type='submit' value='Saqlash' />
            </div>
          </form>
        </div>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default StaffSekritar;
