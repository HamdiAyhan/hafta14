import { useRef } from 'react';
import { useOnClickOutside } from './hook/useOnClickOutside';
function App() {
  const ref1 = useRef()
  function disarisiTiklandi() {
    alert("Elemanın dışında bir alan tıklandı!")
  }
  useOnClickOutside(ref1, disarisiTiklandi)

  const ref2 = useRef()
  function disarisiTiklandi2() {
    alert("Elemanın dışında bir alan tıklandı! (Kutu 2)")
  }
  useOnClickOutside(ref2, disarisiTiklandi2)

  return (
    <>
      <div ref={ref1} id='kutu1'>
        Kutu 1
      </div>

      <div ref={ref2} id='kutu2'>
        Kutu 2
      </div>
    </>
  );
}

export default App;