import React from 'react';

import cls from './CancelBookingModal.css';

const cancelBookingModal = (props) => {
  let valueTime = null;
  let valueRode = null;
  if(props.config.map(config => {
    if(config.id === 1){
      valueTime = config.value
    }
    if(config.id === 2){
      valueRode = config.value
    }
  }))
  return (
    <div className={cls.CancelBookingModal}>
      <div>
        <h2>Aviso de penalización</h2>
      </div>
      <div>
        <p>Recuerda que si cancelas el servicio "{valueTime} HORAS" antes del inicio del trabajo se cobrará un valor de {valueRode} USD por cargos administrativos</p>
      </div>
      <div>
        <span className={cls.ButtonWrapper}>
          <button 
            className={cls.ButtonAccept}
            onClick={() => props.cancelled(localStorage.getItem('token'), props.job_id)}>
              De acuerdo, quiero cancelar.
          </button>
        </span>
        <span className={cls.ButtonWrapper}>
          <button className={cls.ButtonCancell} onClick={props.close}>No quiero cancelar.</button>
        </span>
      </div>
    </div>
  );
};

export default cancelBookingModal;