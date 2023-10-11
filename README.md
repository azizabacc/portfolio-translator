- [x] ACCUEIL : Traductrice jurée / assermentée 
Combinaison de langues 
VTI 

- [ ] SERVICES :  
TRADUCTIONS VALABLES TTE BELGIQUE 
E-LEGALISATION 
TYPES DE DOC 
* Acte de naissance
* Certificats de mariage 
* Certificats de décès
* Certificat de non-empêchement et Nulla Ostas 
* Casier judiciaire 
* Contrats
* Permis de conduire
* Déclarations IMTI
* Peines de divorce
* Rapports et documents médicaux 
* Informations financières
* Factures
* Document académique

- [ ] COMMENT PROCÉDER : 
1. Prise de contact : CLIENT délivre le document qu’il souhaite voir traduire sous forme de piиce jointe
devis prйliminaire envoyй par e-mail

2. Facture : Dans le cas où le client accepte l’offre de prix, (le traducteur) fournit une facture, comprenant ses coordonnйes et celles du client, qu’il lui fera parvenir dans les plus brefs dйlais

3. Traduction 

4. Remise : Une fois toutes ces йtapes franchies, le traducteur sera enfin en mesure de remettre la traduction au client, par e-mail + EXPLIQUER IMPRESSION VALIDITÉ


- [ ] TARIF :  PRIX AU MOT - Tarif minimum

- [ ] CONTACT


- [ ] DEVIS GRATUIT :




  <ul>
                    <li className='doc-category'> Documents d'État Civil
                        <ul>
                            <li className='doc-title'>Acte de naissance</li>
                            <li className='doc-title'>Certificats de mariage</li>
                            <li className='doc-title'>Certificats de décès</li>
                            <li className='doc-title'>Certificat de non-empêchement et Nulla Ostas</li>
                        </ul>
                    </li>
                    <li className='doc-category'> Documents Légaux
                        <ul>
                            <li className='doc-title'>Casier judiciaire</li>
                            <li className='doc-title'>Contrats</li>
                            <li className='doc-title'>Permis de conduire</li>
                            <li className='doc-title'>Déclarations IMTI</li>
                            <li className='doc-title'>Peines de divorce</li>
                        </ul>
                    </li>
                    <li className='doc-category'> Documents Médicaux
                        <ul>
                            <li className='doc-title'>Rapports et documents médicaux</li>
                        </ul>
                    </li>
                    <li className='doc-category'>Documents Financiers
                        <ul>
                            <li className='doc-title'>Informations financières</li>
                            <li className='doc-title'>Factures</li>
                        </ul>
                    </li>
                    <li className='doc-category'>Documents Éducatifs
                        <ul>
                            <li className='doc-title'>Document académique</li>
                        </ul>
                    </li>

                </ul>




                .select-container {
    position: relative;
    display: inline-block;
    background-color: #333; 
    color: #fff; 
    border: 1px solid #555;
    border-radius: 4px;
    padding: 5px 10px; 
  }
  
  .select-container select {
    background-color: transparent; /* Retire le fond par défaut du select */
    color: inherit; /* Hérite de la couleur du texte parent */
    border: none; /* Retire la bordure par défaut */
    outline: none; /* Supprime la mise en évidence du focus */
    cursor: pointer; /* Curseur en pointeur au survol */
  }
  
  /* Styles pour la flèche déroulante personnalisée */
  .select-container select::after {
    content: '\25BC'; /* Flèche déroulante vers le bas */
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: #fff;
  }
  
  /* Hover Styles */
  .select-container:hover {
    background-color: #444; /* Couleur de fond légèrement plus foncée au survol */
  }
  
  /* Focus Styles */
  .select-container:focus-within {
    border-color: #ff9900; /* Couleur de bordure orange au focus */
    box-shadow: 0 0 5px rgba(255, 153, 0, 0.5); /* Ombre légère au focus */
  }
/* custom-select.css */

/*the container must be positioned relative:*/
.custom-select {
  position: relative;
  font-family: Arial;
}

.custom-select select {
  display: none; /*hide original SELECT element:*/
}

.select-selected {
  background-color: DodgerBlue;
}

/*style the arrow inside the select element:*/


/*point the arrow upwards when the select box is open (active):*/
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}

/*style the items (options), including the selected item:*/
.select-items div,.select-selected {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
  user-select: none;
}

/*style items (options):*/
.select-items {
  position: absolute;
  background-color: DodgerBlue;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
}

/*hide the items when the select box is closed:*/
.select-hide {
  display: none;
}

.select-items div:hover, .same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}


