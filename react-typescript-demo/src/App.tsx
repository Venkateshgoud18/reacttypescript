import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
function App() {
  const personName={
    first:'Bruce',
    last:'Wayne'
  }
  const nameList = [
    { first: 'Bruce', last: 'Wayne' },
    { first: 'Clark', last: 'Kent' },
    { first: 'Diana', last: 'Prince' }
  ];
  return (
    <div className="App">
      <h2>Welcome to React with TypeScript!</h2>
      <Greet name="Venkatesh" messageCount={10} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='loading'/>
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo DiCaprio!</Heading>
      </Oscar>
      <Greet name="venky" messageCount={12} />
      <Button handleClick={(event,id) => console.log('Button clicked!',event,id)} />
      <Input value='' handleChange={(event) => console.log(event)}/>
      <Container>
        <p>This is inside the container component</p>
      </Container>


    </div>
  );
}

export default App;
