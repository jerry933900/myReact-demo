import React from 'react';
// import logo from './logo.svg';

// import Third from './components/Third'
import Second from './components/Second'
// import Counter from './components/Counter.jsx'
// import Brother1 from './components/brother/Brother1'
// import Brother2 from './components/brother/Brother2'
// import GrandPa from './components/grandpa/Grandpa'
// import Life from './components/Life'
// import IFFor from './components/IFFor'
// import Controlled from './components/Controlled'
// import UnControlled from './components/UnControlled'
// import Index from './components/router/Index'
// import Index from './components/router-nested/Index'
// import Index from './components/css-modules/Index'
// import Index from './components/render-props-hoc/Index'
// import Index from './components/redux-counter/Index'
// import Index from './components/redux-cart/Index'

import Index from './components/react-redux-cart/Index'



import './App.css';


// const styleObj = {
//   color:'green',
//   fontSize:100,
//   margin:0
// }

function App2() {
  // const obj = {
  //   name: '张三丰',
  //   age: 30
  // }

  // const getChangeValue = newValue => {
  //   console.log('---parent---',newValue)
  // }

  // 这是一个方法
  return (
    <div className="App">
      {/* {obj.name}<br/>
      <Second obj={obj}/> */}

      {/* <Counter initCount={10} callback={getChangeValue}/> */}
      {/* <Brother1 />
      <hr/>
      <Brother2 /> */}
      {/* <GrandPa /> */}
      {/* <Life /> */}
    </div>
  )
}

class App extends React.Component{
  state = {
    age: 30,
    isShow: true
  }

  getChangeValue = newValue => {
      console.log('---parent---',newValue)
  }

  render() {
    return <div>
      {/* <Second /> */}
      {/* <Life age={this.state.age}/> */}

      {/* {this.state.isShow && <Life age={this.state.age}/>} */}

      {/* <button onClick={() => this.setState({isShow:false})}>隐藏</button>  */}
    
      {/* <button onClick={() => this.setState({age:100})}>活到100</button> */}
      {/* <IFFor /> */}

      {/* <Counter initCount={10} callback={this.getChangeValue}/>  */}

      {/* <Controlled /> */}

      {/* <UnControlled /> */}
      <Index />
    </div>
  }
}

export default App;
