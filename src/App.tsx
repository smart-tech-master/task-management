import React from 'react';
import './App.css';

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

// let printName: Function;

function printName(name:string) {
  console.log(name);
}

printName("TSK");
// type Person = {
//   name: string,
//   age?: number
// };

// let person: Person = {
//   name: "SongGil",
// }

// let lotsOfPeople: Person[];


function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
