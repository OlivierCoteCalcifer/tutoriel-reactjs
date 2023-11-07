import {useContext, useState} from 'react';
import {ContactContext} from './ContactContext';

/**
 * Composant ContactForm
 * @return {jsx} Formulaire d'ajout de contact.
 */
function ContactForm() {
  const {setContact} = useContext(ContactContext);
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  /**
   * @param {Event} evenement on change
   */
  function handleChange({name, value}) {
    setData((prev) => ({...prev, [name]: value}));
  }
  /**
   * Gestionnaire d'évènement submit du formulaire.
   * @param {*} event onsubmit
   */
  function handleSubmit(event) {
    event.preventDefault();
    setContact((prev) => [...prev, data]);
  }
  return (
    <form>
      <input type="text"
        placeholder="Name"
        name="name"
        value={data.name}
        onChange={(e) => handleChange(e.target)}></input>
      <input type="email"
        placeholder="Email"
        name="email"
        value={data.email}
        onChange={(e) => handleChange(e.target)}></input>
      <input type="phone"
        placeholder="Phone"
        name="phone"
        value={data.phone}
        onChange={(e) => handleChange(e.target)}></input>
      <button type="submit" onClick={handleSubmit}>Ajouter</button>
    </form>
  );
}

export default ContactForm;
