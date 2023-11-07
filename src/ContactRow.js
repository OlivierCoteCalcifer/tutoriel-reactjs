import {useContext} from 'react';
import {ContactContext} from './ContactContext';

/**
 * Cette methode retourne la rangee de contact.
 * @param {object} data Contenu de la rangee.
 * @return {jsx}
 */
function ContactRow({name, phone, email}) {
  const {setContact} = useContext(ContactContext);
  /**
   * Gestionnaire d'évènement de suppresion.
   * @param {event} e évènement onDelete
   */
  function handleClickDelete() {
    setContact((prev) => prev.filter((elt) => elt.name !== name));
  }
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td><button type="button" onClick={handleClickDelete}>X</button></td>
      </tr>
    </>
  );
}

export default ContactRow;

