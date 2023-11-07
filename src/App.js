import ContactForm from './ContactForm';
import ContactTable from './ContactTable';
import SearchBar from './SearchBar';
import ContactContextProvider from './ContactContext';
/**
 * Cette methode retourne le jsx du React.
 *
 * @return {jsx} Return le data pour le formulaire.
 */
function App() {
  return (
    <>
      <h1>Filterable React List</h1>
      <ContactContextProvider>
        <SearchBar />
        <ContactTable />
        <ContactForm />
      </ContactContextProvider>
    </>
  );
}
export default App;
