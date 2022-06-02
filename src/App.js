import React, { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";

const App = () => {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const usersColelctionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersColelctionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  const createUser = async () => {
    await addDoc(usersColelctionRef, { name: newName, age: newAge });

  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Age"
        onChange={(e) => {
          setNewAge(e.target.value);
        }}
      />
      <button onClick={createUser}>Create User</button>
      {users.map((user) => {
        return (
          <div>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default App;
