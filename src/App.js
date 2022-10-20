import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Counter from './components/Counter'
import { counterState, addCounter } from './Slices/Todoslices'

const App = () => {

  const counters = useSelector(counterState);
  const dispatch = useDispatch();

  return (
<>
    <button onClick={() => dispatch(addCounter())}>Add</button>
    {
      counters.map((item) => {
        return <Counter count={item.count} id={item.id} key={item.id} />;
      })
    }
</>  )
}

export default App