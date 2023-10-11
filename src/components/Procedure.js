import '../css/procedure.css';
function Procedure() {
    return ( 
        <div className="timeline">
            <h2 className='title-service'>COMMENT PROCÉDER ?</h2>
        <Step
          stepNumber={1}
          title="Prise de contact"
          description="CLIENT délivre le document qu’il souhaite voir traduire sous forme de pièce jointe, devis préliminaire envoyé par e-mail"
        />
        <Step
          stepNumber={2}
          title="Facture"
          description="Dans le cas où le client accepte l’offre de prix, (le traducteur) fournit une facture, comprenant ses coordonnées et celles du client, qu’il lui fera parvenir dans les plus brefs délais"
        />
        <Step
          stepNumber={3}
          title="Traduction"
          description="Le traducteur effectue la traduction du document selon les spécifications convenues"
        />
        <Step
          stepNumber={4}
          title="Remise"
          description="Une fois toutes ces étapes franchies, le traducteur sera enfin en mesure de remettre la traduction au client, par e-mail. Expliquer l'impression et la validité si nécessaire."
        />
      </div>
    );
  };
  
  const Step = ({ stepNumber, title, description }) => {
    return (
      <div className="step">
        <div className="step-number">{stepNumber}</div>
        <div className="step-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  };
  

export default Procedure;