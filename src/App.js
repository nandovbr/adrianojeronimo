import React from 'react';
import Home from './screens/home/index'; 

export default function App() {
  return (
    <>
      <div className="txt-bible">
        <h2>Porque, onde estiver o teu tesouro, aí também estará o teu coração. (Mateus 6:22)</h2>
      </div>

      <div className="txt-reflexoes">
        <h3>
          Reflexões para sua vida:
          As frases "Não consigo fazer/Não da pra ser feito"
          ou similares não devem existir antes da tentativa e de um excelente motivo.
          Caso contrário os Nargulês acamparão em suas propriedades.
        </h3>
      </div>

      <div>
        <Home />
      </div>
    </>
  )
}
 
