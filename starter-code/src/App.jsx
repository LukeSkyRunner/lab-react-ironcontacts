import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
     contactArray: contacts.slice(0, 5)
    };
   // this.addActor = this.addActor.bind(this)
  }


addActor(){

  let randomActor = contacts[Math.floor(Math.random() * contacts.length)]
  const item = {
    id: randomActor.id,
    name: randomActor.name,
    pictureUrl: randomActor.pictureUrl,
    popularity: randomActor.popularity
  }

  
  this.setState(previousState => ({
    contactArray: [...previousState.contactArray, item]
  }));
}


removeActor(id) {
  this.setState(previousState => ({
    contactArray: previousState.contactArray.filter(item => item.id !== id)
  }));
}

sortByName(){
  this.setState(previousState => ({
    contactArray: previousState.contactArray.sort((a, b) => a.name > b.name ?  1 : a.name < b.name? -1 : 0 )
  }))
}

sortByPopularity(){
  this.setState(previousState => ({
    contactArray: previousState.contactArray.sort((a, b) => a.popularity > b.popularity ?  -1 : a.popularity < b.popularity? 1 : 0 )
  }))
}

render() {
    
    return (
      <div className="App">


      <h1>IronContacts</h1>

      <button className="button" onClick={() => this.addActor()}>Add Random Contact</button>
      <button className="button" onClick={() => this.sortByName()}>Sort by Name</button>
      <button className="button" onClick={() => this.sortByPopularity()}>Sort by Popularity</button>
      
        <table>
          <tbody>
          <tr>
            
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            
          </tr>
        {this.state.contactArray.map(item => {
          return (          
            <tr key={item.id}>
              
              <td><img className="App-actor-picture" src={item.pictureUrl} alt=''/></td>
              <td>{item.name}</td>
              <td>{item.popularity}</td>
              <td><button className="button-d" onClick={() => this.removeActor(item.id)}>Delete</button></td>
              
          </tr>
        );
      })}
      </tbody>
</table>
     
      </div>
    );
  }
}

export default App;
