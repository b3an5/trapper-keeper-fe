import React, {Component} from 'react';
import ListContainer from '../../Components/ListContainer/ListContainer'

class App extends Component {
  constructor() {
    super()

    this.state = {
      lists: []
    }
  }

  setList = (list) => {
    console.log('list', list)
    this.setState([...this.state.lists, list])
    
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Trapper Keeper</h1>
          <button>Add new Idea</button>
        </header>
        <container>  
          <ListContainer setList={this.setList}/>
        </container>
      </div>
    );
  }    
}

export default App;
