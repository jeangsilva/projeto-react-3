import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName'
function App(){
  const name = 'Jean Silva'
  const NewName = name.toUpperCase()


function sum(a,b){
  return a + b
}

return (
  <div className='App'>
      <h2>Alterando o React / JSX</h2>
      <p>Olá, {NewName}</p>
      <p>Soma: {sum(3,2)}</p>
      <HelloWorld/>
      <SayMyName nome ="Jean Gabriel"/>
      <SayMyName nome = {name}/>

  </div>
)
}
export default App;