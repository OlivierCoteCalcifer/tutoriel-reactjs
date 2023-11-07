import {useContext, useState} from 'react';
import {data} from './data.js';
import {ContactContext} from './ContactContext.js';
/**
 * bl
 * @param {*} setContacts df
 * @return {HTMLElement}df
 */
function SearchBar() {
  const [input, setInput] = useState(' ');
  const {setContact} = useContext(ContactContext);
  /**
   * handleChange
   * @param {Event} event
   */
  function handleChange(event) {
    setInput(event.target.value);
  }

  /**
   * handleClick
   */
  function handleClickFilter() {
    const filteredList = data.filter((elt) => elt.name.includes(input));
    setContact(filteredList);
  }

  return (
    <form>
      <input type="text" placeholder="Search..." value={input} onChange={handleChange}/>
      <button type="button" onClick={handleClickFilter}>Filter</button>
    </form>
  );
}

export default SearchBar;
