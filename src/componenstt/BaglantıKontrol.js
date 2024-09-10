import React from 'react';
import useOnlineStatus from '../hooks/useOnlineStatus';
import './Baglantıkontrol.css'

export const BaglantıKontrol = () => {
    const baglanti = useOnlineStatus()
  return (
    <div>
      {baglanti === false &&
        <div className="baglantiuyar">
          dikkat internet bağlantınızı kontrol ediniz
        </div>}

    </div>
  );
};
