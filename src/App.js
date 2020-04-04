import React from 'react'
import {
  TodoHeader,
  TodoInput,
  TodoList
} from './compoments'

function App() {
  return (
    <div >
      <TodoHeader title="第一种传值" x='d' z={1} y={9}>
      第二种传值
      </TodoHeader>
      <TodoInput  title="第一种传值" x='d' z={1} y={9}>第二种传值</TodoInput>
      <TodoList />
    </div>
  );
}

export default App;
