import ContactRow from './ContactRow';

/**
 * Cette methode retourne la table de contact.
 * @return {jsx}
 */
function ContactTable() {
  const dataList = [

    {
      Name: 'Tom Jackson',
      Phone: '555-444-3333',
      Email: 'tom@gmail.com',
    },
    {
      Name: 'Milly James',
      Phone: '555-444-7777',
      Email: 'milly@gmail.com',
    }];
  const jsxData = dataList.map((elt) => (
    <ContactRow
      Name={elt.Name}
      Phone={elt.Phone}
      Email={elt.Email}
    />
  ));
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
      {jsxData}
    </table>
  );
}

export default ContactTable;
