import React from 'react';
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
    
    const { data } = this.props;
    const { name, type, averageWeight: { value, measurementUnit }, image } = data;

    return (
      <section className="Pokemon">
        <div>
          <h2>{ name }</h2>
          <h3>{ type }</h3>
          <p>Average weight: { value }{ measurementUnit }</p>
        </div>
        <div>
          <img src={ image } alt={`${name}-pokemon`} />
        </div>
      </section>
    )
  }
}

export default Pokemon;