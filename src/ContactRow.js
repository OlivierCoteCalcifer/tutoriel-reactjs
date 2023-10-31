/**
 * Cette methode retourne la rangee de contact.
 * @param {object} data Contenu de la rangee.
 * @return {jsx}
 */
function ContactRow({Name, Phone, Email}) {
  return (
    <>
      <tr>
        <th>{Name}</th>
        <th>{Phone}</th>
        <th>{Email}</th>
      </tr>
    </>
  );
}

export default ContactRow;

