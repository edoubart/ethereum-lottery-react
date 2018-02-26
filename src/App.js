// React
import React, { Component } from 'react';

// Custom Web3
import web3 from './web3';

// Contract
import lottery from './lottery';

class App extends Component {
  // Local state
  state = {
    amount: '',
    balance: '',
    manager: '',
    message: '',
    players: []
  };

  // Lifecycle hooks
  async componentDidMount() {
    const balance = await web3.eth.getBalance(lottery.options.address);
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();

    this.setState({ balance, manager, players });
  }

  // Handlers
  changeAmount = (event) => {
    this.setState({ amount: event.target.value });
  };

  enterLottery = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'Waiting on transaction success...' });

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.amount, 'ether')
    });

    this.setState({ message: 'You have been entered!' });
  };

  pickWinner = async (event) => {
    const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'Waiting on transaction success...' });

    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });

    this.setState({ message: 'A winner has been picked!' });
  };

  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>
          This contract is managed by {this.state.manager}.
          There are currently {this.state.players.length} people entered,
          competing to win {web3.utils.fromWei(this.state.balance, 'ether')} ether!
        </p>
        <hr />
        <form onSubmit={this.enterLottery}>
          <h4>Want to try your luck?</h4>
          <div>
            <label>Amount of ether to enter</label>
            <input
              onChange={this.changeAmount}
              value={this.state.value}
            />
          </div>
          <button>Enter</button>
        </form>
        <hr />
        <h4>Ready to pick a winner?</h4>
        <button onClick={this.pickWinner}>Pick a winner!</button>
        <hr />
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
