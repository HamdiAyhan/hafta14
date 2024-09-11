import useWindowSize from './hooks/useWindowSize';

export function Kutu() {
    const pencere = useWindowSize()

    return (
      <>        
        <div>
          Genişlik: {pencere.width} <br /> 
          Yükseklik: {pencere.height} 
        </div>
  
        <div className={pencere.width<=600 ? 'gizle' : ''}>
          REKLAM REKLAM REKLAM REKLAM REKLAM REKLAM REKLAM REKLAM 
          REKLAM REKLAM REKLAM REKLAM REKLAM REKLAM REKLAM REKLAM 
        </div>
  
        {
          pencere.width > 600 &&
            <div>
              REKLAM2 REKLAM2 REKLAM2 REKLAM2 REKLAM2 REKLAM2 REKLAM2 REKLAM2 REKLAM2
              REKLAM2 REKLAM2 REKLAM2 REKLAM2 REKLAM2 REKLAM2 REKLAM2 REKLAM2 REKLAM2
            </div>
        }     
      </>
    );
}