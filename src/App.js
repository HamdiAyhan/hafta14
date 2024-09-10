import { BaglantıKontrol } from "./componenstt/BaglantıKontrol";
import useOnlineStatus from "./hooks/useOnlineStatus";


function App() {


  const baglanti = useOnlineStatus()

  return (
    <div className="App">
      <BaglantıKontrol/>
  </div>
  );
}

export default App;
