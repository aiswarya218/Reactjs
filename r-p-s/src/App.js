// import React, { useEffect, useState } from 'react';

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setloading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((data) => {
//       setUsers(data);
//       setloading(false);
//     })
    
//     .catch((error) => {
//       console.error('Error fetching data:', error);
//       setloading(false);
//     });
//   },[]);

//   if (loading) {
//     return <p>Loading users...</p>;
//   }

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {users.map(user => (
//            <li key = {user.id}>
//             <strong>{user.name}</strong>  ({user.email})
//            </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;




// import React, { useState } from 'react';
// import './App.css';

// const dataList = [
//   'Apple',
//   'Banana',
//   'Orange',
//   'Grapes',
//   'Strawberry',
//   'Watermelon',
//   'Pineapple',
//   'Mango',
//   'Kiwi'
// ];

// function App() {
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredList = dataList.filter(item =>
//     item.toLowerCase().includes(searchTerm.toLowerCase())
//   );


//   return (
//     <div className = "container">
//       <h1 className = "title">Fruit Search🍉</h1>
//       <input
//       type = "text"
//       placeholder = "Search fruits..."
//       value = {searchTerm}
//       onChange = {e => setSearchTerm(e.target.value)}
//       className = "search-input"
//       />
//       <ul className = "list">
//         {filteredList.length > 0 ? (
//           filteredList.map((item, index) => (
//             <li key = {index} className = "list-item">
//               {item}
//             </li>
//           ))
//         ) : (
//           <p className = "no-results">No results found 🐱</p>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default App;



import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useReducer
} from 'react';
import FruitContext from './FruitContext';
import FruitList from './FruitList';
import './App.css';

const initialState = { addCount: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, addCount: state.addCount + 1 };
    default:
      return state;
  }
}

const defaultFruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];

function App() {
  const [fruits, setFruits] = useState(defaultFruits);
  const [searchTerm, setSearchTerm] = useState('');
  const [newFruit, setNewFruit] = useState('');
  const inputRef = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  // Debounce search input using useRef
  const debounceRef = useRef(null);
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      console.log('Searching for:', searchTerm);
    }, 500);
  }, [searchTerm]);

  const addFruit = useCallback(() => {
    if (newFruit.trim()) {
      setFruits(prev => [...prev, newFruit.trim()]);
      dispatch({ type: 'INCREMENT' });
      setNewFruit('');
      inputRef.current.focus();
    }
  }, [newFruit]);

  const filteredFruits = useMemo(() => {
    return fruits.filter(f =>
      f.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [fruits, searchTerm]);

  return (
    <FruitContext.Provider value={{ fruits: filteredFruits }}>
      <div className="app">
        <h1>🍉 Fruit Manager</h1>

        <input
          type="text"
          placeholder="Search fruits..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <input
          ref={inputRef}
          type="text"
          placeholder="Add new fruit"
          value={newFruit}
          onChange={e => setNewFruit(e.target.value)}
        />
        <button onClick={addFruit}>Add</button>

        <p>Total fruits: {fruits.length}</p>
        <p>Add button clicked: {state.addCount} times</p>

        <FruitList />
      </div>
    </FruitContext.Provider>
  );
}

export default App;







// import React from 'react';

// function App() {
//   const name = "Sangeetha";

//   return (
//     <div>
//       <h1>Hello, {name} </h1>
//       <p>This is your first JSX-powered React App!</p>
//     </div>
//   );
// }

// export default App;



/*import React from 'react';

function Welcome({ name }) {
  return <h2>Welcome, {name}!</h2>;
}

export default Welcome;*/
