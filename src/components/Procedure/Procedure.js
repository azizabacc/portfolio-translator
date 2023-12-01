import './procedure.css';
function Procedure() {
    return ( 
        <div className="timeline">
            <h2 className='section-title'>COMMENT PROCÉDER ?</h2>
        <Step
          stepNumber={1}
          title={<div className="div-title">Prise de contact</div>}
          description="CLIENT délivre le document qu’il souhaite voir traduire sous forme de pièce jointe, devis préliminaire envoyé par e-mail"

        />
        <Step
          stepNumber={2}
          title={<div className="div-title">Facture</div>}
          description="Dans le cas où le client accepte l’offre de prix, (le traducteur) fournit une facture, comprenant ses coordonnées et celles du client, qu’il lui fera parvenir dans les plus brefs délais"

        />
        <Step
          stepNumber={3}
          title={<div className="div-title">Traduction</div>}
          description="Le traducteur effectue la traduction du document selon les spécifications convenues"

        />
        <Step
          stepNumber={4}
          title={<div className="div-title">Remise</div>}
          description="Une fois toutes ces étapes franchies, le traducteur sera enfin en mesure de remettre la traduction au client, par e-mail. Expliquer l'impression et la validité si nécessaire"

        />
      </div>
    );
  };
  
  const Step = ({ stepNumber, title, description }) => {
    return (
      <div className="step">
        <div className="step-number">{stepNumber}</div>
        <div className="step-content">
          <h3 className="div-title" >{title}</h3>
          <p className='text'>{description}</p>
        </div>
      </div>
    );
  };
  

export default Procedure;