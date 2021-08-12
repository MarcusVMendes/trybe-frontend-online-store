import React, { Component } from 'react';

class Ratings extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: '',
  //     stars: 0,
  //     message: '',
  //   };
  // }

  render() {
    return (
      <div>
        <h3>Avaliações</h3>
        <form>
          <label htmlFor="email">
            <input type="text" id="email" placeholder="Email" />
          </label>
          <label htmlFor="mensagem">
            <textarea
              data-testid="product-detail-evaluation"
              name=""
              id="mensagem"
              cols="30"
              rows="10"
              placegolder="Mensagem ()"
            />
          </label>
          <button type="submit">Avaliar</button>
        </form>
      </div>
    );
  }
}

export default Ratings;
