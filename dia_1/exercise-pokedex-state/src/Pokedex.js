import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      numOfPokemons: props.pokemons.length - 1,
    };
    this.NextPokemon = this.NextPokemon.bind(this);
    this.PreviousPokemon = this.PreviousPokemon.bind(this);
  }

  NextPokemon() {
    // this.setState({ user: { username: 'Ivan' }})
    // this.setState((lastState) => ({ ...lastState, username: 'Ivan' }))
    const { value, numOfPokemons } = this.state;
    this.setState((prevState) => ({ value: prevState.value + 1}));    
    if (value >= numOfPokemons){
      this.setState({ value: 0 })
    }
  }

  PreviousPokemon() {
    const { value, numOfPokemons } = this.state;
    this.setState((prevState) => ({ value: prevState.value - 1}));
    if (value === 0){
      this.setState({ value: numOfPokemons })
    }    
  }
  
  render() {
    const { pokemons } = this.props;
    const { value } = this.state;
    return (
      <main>
        <div className="pokedex">
          <Pokemon key={pokemons[value].id} pokemon={pokemons[value]} />
        </div>
        <button onClick={ this.NextPokemon }>Next Pokemon</button>
        <button onClick={ this.PreviousPokemon }>Previous Pokemon</button>
      </main>
    );
  }
}

export default Pokedex;
