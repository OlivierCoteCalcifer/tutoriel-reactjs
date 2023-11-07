import ContactRow from './ContactRow';
import {useContext} from 'react';
import {ContactContext} from './ContactContext';

/**
 * s
 * @param {*} contact
 * @return {HTMLElement}
 */
function ContactTable() {
  const {contact} = useContext(ContactContext);
  const jsxData = contact.map((elt, index) => (
    <ContactRow
      key={index}
      name={elt.name}
      phone={elt.phone}
      email={elt.email}
    />
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {jsxData}
      </tbody>
    </table>
  );
}

export default ContactTable;
