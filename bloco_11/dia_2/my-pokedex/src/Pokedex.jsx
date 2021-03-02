import React from 'react';
import Pokemon from './Pokemon'
import './Pokedex.css'

class Pokedex extends React.Component {  
  render() {
    const { data } = this.props;
    return(
      <main>
        <header className="PokeHeader">
          <h1>Pokedex</h1>
        </header>
        <div className="Pokedex">        
          { data.map((pokemon) => <Pokemon key={ pokemon.name } data={ pokemon } />)}
        </div>
      </main>
      
    )
  }
}

export default Pokedex;