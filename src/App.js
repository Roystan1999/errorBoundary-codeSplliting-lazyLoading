import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import PersonList from './components/PersonList';
import PersonDetails from './components/PersonDetails';
import ClaculatorComp from './components/ClaculatorComp';
import React, { useState } from 'react';
import { Suspense } from 'react/cjs/react.production.min';
import Err1 from './components/error-boundary/Err1';



// react Component  lazy loading

const LazyComp= React.lazy(()=>{
  return import('./components/ComponentA')
})

  
function App() {

  const[showComponent ,setshowComponent]=useState(false)

  return (
    <div className=  "App">
      <ErrorBoundary>
       <PersonList/>
     </ErrorBoundary>

     <Err1>
      <PersonDetails/>
     </Err1>

      <ClaculatorComp /> 
       
     <button onClick={()=>{
       setshowComponent(!showComponent)
     }}>{showComponent ? "hide" : "show"}</button>
     

     {showComponent && <Suspense fallback={<div> Loading...</div>}>
       <LazyComp/>
     </Suspense>} 
    </div>
  );
}

export default App; 
