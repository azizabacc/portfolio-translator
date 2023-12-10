import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '20px',
  width: '80vw',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({ open, onClose }) {

  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}  className="custom-modal-content">
        <div className='modal-content'>
        <div className="navbar-logo"></div>
          <h1 className='section-title section-title-rgpd' >RGPD</h1>
          <h2  className='section-subtitle section-subtitle-rgpd'>Déclaration de confidentialité</h2>
          <p className="text">Ci-dessous, vous trouverez des informations sur le traitement de vos données personnelles conformément au RGPD.<br />
            Nous sommes responsables du traitement de vos données personnelles.
            Données personnelles</p>
          <h2 className='section-subtitle section-subtitle-rgpd'>Données personnelles</h2>
          <p className="text">Lors de la prise en charge de vos données personnelles, BK TRAD met un point d’honneur à veiller au caractère confidentiel du traitement de vos données personnelles.<br />
            Ces dernières sont protégées contre tout risque de perte, d’accès non autorisé ou de vol. En outre, nous supprimerons vos données dès que nous n’en aurons plus besoin pour mener à bien nos activités.</p>
       
        <h2 className='section-subtitle section-subtitle-rgpd'>Réception de vos données personnelles</h2>
        <p className="text">Lorsque vous utilisez nos services, vos données personnelles peuvent être traitées.<br/>
        Il est également possible que nous traitions les données personnelles que vous avez partagées avec nous en ligne.<br/>
        Par exemple, vous partagez des données en ligne avec nous lorsque vous demandez ou téléchargez des informations ou lorsque vous remplissez un formulaire de contact.<br/>
        Dans le cadre de cette démarche, nous mettons tout en œuvre pour être en adéquation avec vos intérêts personnels.
        </p>
        <h2 className='section-subtitle section-subtitle-rgpd'>Notre déclaration de confidentialité concerne BK TRAD et le site Internet </h2>
        <p className="text">Notre déclaration de confidentialité s’applique à l’utilisation de données personnelles par BK TRAD et par le site. Cette déclaration de confidentialité fait partie de notre site Internet.
        </p>
        <h2 className='section-subtitle section-subtitle-rgpd'>Utilisation de vos données personnelles </h2>
        <p className="text">Nous sommes amenés à utiliser vos données personnelles lors du traitement des demandes d’informations ou lorsque nous vous fournissons des produits et/ou services.<br/>
        Nous pouvons également utiliser vos données pour nous aider à optimiser nos services. Parfois, nous conservons aussi des informations car nous y sommes tenus en vertu d’exigences financières, fiscales ou légales.
Nous traitons uniquement les données personnelles dans la mesure où elles sont nécessaires au traitement de vos demandes ou susceptibles d’améliorer nos interactions avec vous.<br/>
BK TRAD ne vend pas vos données personnelles à des tiers.
        </p>
        <h2 className='section-subtitle section-subtitle-rgpd'>Nous ne conservons pas vos données personnelles plus longtemps que nécessaire </h2>
        <p className="text">Vos données personnelles ne seront pas conservées plus longtemps que nécessaire.<br/>
        Notre objectif est de détruire les données personnelles de nos relations commerciales dès que ces données ne sont plus nécessaires.
Nous conservons certaines données parce que nous sommes tenus de le faire en raison d’une obligation financière et/ou fiscale. Dans ce cas, vos données seront conservées pendant au moins sept ans. Passé ce délai, nous veillerons à ce que vos données personnelles soient soigneusement effacées.<br/>
        </p>
        <ul  className='section-subtitle section-subtitle-rgpd'>Vous disposez de différents droits en ce qui concerne vos données personnelles :
          <li>Vous avez le droit de demander l’accès à vos données personnelles, leur rectification ou leur suppression.</li>
          <li>Vous avez le droit de vous opposer au traitement de vos données personnelles.</li>
        </ul>
        <p className="text">Lorsque vous soumettez une demande, nous évaluons d’abord si nous sommes en mesure de la traiter. Nous ne pouvons pas traiter votre demande si nous n’avons pas pu établir votre identité.<br/>
        Nous devons refuser votre demande lorsque l’intérêt de protéger les droits de tierces parties l’emporte sur votre intérêt.<br/>
        Cette situation peut se produire lorsque votre demande d’accès implique également les données personnelles d’autres personnes. Si nous rejetons votre demande, nous vous écrirons pour vous expliquer les motifs qui nous empêchent de la satisfaire.<br/>
        Il se peut que vous soyez en désaccord avec notre décision concernant une demande d’accès, de rectification ou de suppression. Dans ce cas, vous avez le droit de déposer plainte auprès de l’Autorité de protection des données.
        </p>
        <h2 className='section-subtitle section-subtitle-rgpd'>Notre site Internet contient des liens vers des sites Internet de tiers</h2>
        <p className="text">Notre site Internet contient divers liens vers des sites Internet de tiers.
Nous vous conseillons de lire la déclaration de confidentialité du site Internet que vous visitez via notre site Internet. Nous ne pouvons pas être tenus responsables de la manière dont les sites Internet de tiers traitent vos données personnelles.
        </p>
        <h2 className='section-subtitle section-subtitle-rgpd'>Modifications de la déclaration de confidentialité</h2>
        <p className="text">Nous nous réservons le droit d’apporter des modifications à cette déclaration de confidentialité. Nous vous recommandons donc de vérifier régulièrement notre déclaration de confidentialité afin de prendre connaissance d’éventuels changements.
        </p>
        <h2 className='section-subtitle section-subtitle-rgpd'>Des questions ?</h2>
        <p className="text">Pour toute question ou tout commentaire concernant notre déclaration de confidentialité ou la manière dont BK TRAD traite vos données personnelles, veuillez contacter :  <a href="mailto:kenza.baccouri@gmail.com"><span className='email-link'>kenza.baccouri@gmail.com</span></a>
        </p>
        <h1 className='section-title section-title-rgpd'>Conditions générales de vente : </h1>
        <h2 className='section-subtitle section-subtitle-rgpd'>1. Dispositions générales</h2>
        <p className="text">Les présentes conditions générales définissent les obligations respectives des parties contractuelles dans le cadre de prestation de services de KB TRAD.
        </p>
        <p className="text">Les conditions et accords qui suivent, de même que les éventuelles modifications convenues par écrit, sont d’application aux services prestés en faveur du client et/ou du donneur d’ordre.
        </p>
        <p className="text">Les présentes conditions générales remplacent et annulent toutes les autres conditions générales ou conventions, que celle-ci soient orales ou écrites, conclues postérieurement ou antérieurement. Elles priment sur les conditions générales du client, même si celles-ci spécifient qu’elles sont seules valables. La primauté et l’exclusivité des présentes conditions générales constituent un élément essentiel du contrat.</p>
        <h2 className='section-subtitle section-subtitle-rgpd'>2. Commande</h2>
        <p className="text">Tous les devis et offres de BK TRAD revêtent un caractère purement informatif en n’engagent aucunement BK TRAD tant que celle-ci n’a pas confirmé l’acceptation de l’offre par le client. Les offres et les devis de KB TRAD ne sont valables qu’un mois au maximum.
        </p>
        <p className="text">Un accord n’est parfait qu’à partir du moment où le client accepte l’offre de BK TRAD (soit en renvoyant le devis signé pour accord, soit par retour de courriel) et que BK TRAD confirme que la commande du client peut être exécutée. L’acceptation de l’offre de BK TRAD par le client entraîne l’acceptation expresse des conditions générales et particulières de BK TRAD.
        </p>
        <h2 className='section-subtitle section-subtitle-rgpd'>3. Prix et paiement</h2>
        <p className="text">Les prix sont libellés en euros hors TVA et les factures sont payables au comptant dans un délai de 15 jours suivant la date de la facture.
        </p>
        <p className="text">Pour les traductions écrites, les prix de base peuvent être majorés en fonction du format des documents à traiter, de la spécificité des textes et du délai d’urgence. Des frais administratifs peuvent être imputés en cas de demande de correction d’une facture déjà établie.
        </p>
        <p className="text">Le montant de la facture doit être réglé par virement SEPA sur le numéro de compte mentionné sur la facture. D’autres modes de paiement doivent expressément et préalablement être convenus avec BK TRAD. Les éventuels frais bancaires sont à la charge du client.
        </p>
        <p className="text">Le paiement partiel du montant de la facture ne constitue pas une contestation.  En cas de non-paiement à l’échéance mentionnée sur la facture, un intérêt de retard de 10 % par mois entamé du montant de la facture est dû de plein droit et sans mise en demeure préalable, à partir de l’échéance, ainsi qu’une indemnité forfaitaire de 10 % du montant de la facture (avec un montant minimum de 150 €) de clause, en plus des frais administratifs de 10 €. Le paiement tardif du montant en principal ne constitue pas l’acquittement des frais supplémentaires susmentionnés.
        </p>
        <p className="text">En cas de non-paiement, d’insolvabilité ou de faillite dans le chef du client, toutes les dettes impayées du client sont immédiatement exigibles, même les dettes qui découlent de factures non échues. Le cas échéant, BK TRAD se réserve le droit de suspendre pour une durée indéterminée les prestations en cours et futures, sans préjudice du droit de BK TRAD de réclamer le paiement immédiat des travaux et des livraisons suspendus.
        </p>
        <h2 className='section-subtitle section-subtitle-rgpd'>4. Annulations</h2>
        <p className="text">En cas d’annulation unilatérale de la commande de traduction par le donneur d’ordre, une indemnité est due par celui-ci dont le montant est proportionnel au travail déjà effectué, y compris les recherches terminologiques préalables. Cette base de calcul se réfère aux exemples d’établissement des prix proposés par la CBTI, qui peuvent être obtenus au siège social de cette association. En outre, BK TRAD est en droit d’exiger une indemnité de rupture de contrat égale à 20 % du montant de la facture ou de la note d’honoraires.
      </p>
      <h2 className='section-subtitle section-subtitle-rgpd'>5. Plaintes</h2>
        <p className="text">En aucun cas, BK TRAD ne saurait être tenue responsable des réclamations motivées par des nuances de style ou des choix terminologiques distincts. BK TRAD décline toute responsabilité en cas d’incohérence ou d’ambigüité du texte source, la vérification de la cohérence technique du texte finale relevant de la seule responsabilité du client.
      </p>
      <h2 className='section-subtitle'>6. Responsabilités des parties</h2>
        <p className="text">Si, pour n’importe quelle raison, le client ou donneur d’ordre ne devait pas utiliser les services d’interprétation de BK TRAD les jours et dans les conditions mentionnées dans le contrat/devis, BK TRAD a le droit de percevoir le montant prévu par la clause d’annulation du contrat/devis et au remboursement de toute autre dépense encourue  pour la préparation de la prestation de services dont il convient de déduire toute somme perçue préalablement.
      </p>
      <p className="text">Les prestations écrites sont considérées comme étant fournies dès que BK TRAD envoie les travaux commandés au client par voie électronique ou les envoie par la poste sur un support physique.
      </p >
      <p className="text">Les délais de livraison communiqués par BK TRAD sont purement indicatifs et ne l’engagent nullement. BK TRAD n’est aucunement responsable de dégâts directs ou indirects découlant d’un délai de livraison non respecté.
      </p>
<p className="text" > BK TRAD est responsable de la qualité de la traduction ou de la révision effectuée, pour autant que celle-ci soit utilisée dans sa forme intégrale et sans modification. BK TRAD n’accepte aucune responsabilité quant aux traductions ou aux textes modifiés en dehors de sa volonté et/ou sans son approbation. En toute hypothèse, la responsabilité de BK TRAD se limite uniquement au montant de la facture concernée.</p>
<p className="text">BK TRAD n’est pas responsable en cas de non-livraison d’un service, ou de livraison tardive pour cause de force majeure. Par force majeure, il est notamment entendu : l’absence de livraison ou une livraison tardive par un fournisseur de BK TRAD, les pannes d’électricité, les inondations, les grèves, le hardship, l’accès limité ou impossible à internet ou au réseau de télécommunications, les attentats ou menaces d’attentat, et le matériel roulant défectueux. En outre, BK TRAD n’est pas responsable de dégâts directs ou indirects qui découlent d’instructions incorrectes du client.</p>
<p className="text">Si, pour quelle raison que ce soit, BK TRAD est considérée responsable de dégâts quelconques, cette responsabilité se limite au montant de la facture, du devis ou, à défaut, du montant prévu de la facture.</p>
<p className="text">Le client accepte que BK TRAD sous-traite la mission sans concertation préalable à un ou plusieurs tiers prestataires de services.</p>
     <p className="text">Le vol, la perte ou l’endommagement du matériel livré, à partir du moment où le matériel est transmis au client ou livré à l’endroit des travaux, jusqu’à ce que le matériel soit à nouveau remis à BK TRAD ou au tiers prestataire de services qui est propriétaire du matériel, sont entièrement à la charge du client.</p>
     <h2 className='section-subtitle'>7. Nullité d’une clause</h2>
        <p className="text">La nullité d’une ou de plusieurs dispositions des présentes conditions générales ne porte pas préjudice à la validité des autres dispositions.
      </p>
      <h2 className='section-subtitle'>8. Droit applicable et tribunaux compétents</h2>
        <p className="text">Le droit belge s’applique à toutes les commandes et tous les services fournis. En cas de litige, seuls les tribunaux de l’arrondissement de Bruxelles sont compétents. Seule la version française des présentes conditions générales servira à l’interprétation du présent document.
      </p>
      <button className='close-btn' onClick={onClose}>
        Close
      </button>
      </div>
    </div >
    </>,
    document.getElementById('portal')
  )
}