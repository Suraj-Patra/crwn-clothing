import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home/Home.jsx'
import Navigation from './routes/Navigation/Navigation.jsx';
import SignIn from './routes/Sign-in/Sign-in.jsx';

const Shop = () => {
  return (
    <h1>I am shop page</h1>
  )
}

const App = () => { 
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='sign-in' element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
