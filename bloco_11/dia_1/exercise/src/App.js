import React from 'react';
import './App.css';

const array = ['JavaScript', 'React', 'Jest'];
const task = (value) => {
  return (
    <li>{value}</li>
  );
};

class Tarefas extends React.Component {
  render() {

   const elemento = array.map(tarefa => task(tarefa));
   
    return (
      <div className="lista-tarefas">
        {elemento}
      </div>
      )
    
    
  }
}




export default Tarefas;
