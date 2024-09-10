import {useEffect, useState} from 'react';

const useOnlineStatus = () => {
  const [isonline, setisonline] = useState (navigator.onLine);

  useEffect (() => {
    const handleOnline = () => setisonline (true);
    const handleOfline = () => setisonline (false);

    window.addEventListener ('online', handleOnline);
    window.addEventListener ('offline', handleOfline);
    return () => {
      window.addEventListener ('online', handleOnline);
      window.addEventListener ('offline', handleOfline);
    };
  }, []);
  return isonline
};

export default useOnlineStatus;
