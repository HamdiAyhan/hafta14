

import { useState } from 'react';

import { Kutu } from './Kutu';


function App() {
  const [acik, acikGuncelle] = useState(true)

  return (
    <>
      <button onClick={()=>acikGuncelle(eskiDeger=>!eskiDeger)}>{acik ? "Kapat" : "Aç"}</button>
      { acik && <Kutu />}
    </>
  )
}

export default App;