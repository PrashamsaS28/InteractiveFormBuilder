import React from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import Formbuilder from './components/Formbuilder'


import './App.css'

function App() {
  
  return (
    <DndProvider backend={HTML5Backend}>
      <Formbuilder/>
    </DndProvider>
  )
}

export default App