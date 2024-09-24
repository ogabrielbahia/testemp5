import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/header';
import Feed from './components/feed';
import Footer from './components/footer';
import Home from './components/home';
import Menu from './components/menu';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
      <Menu />
      <Feed />
      <Footer />
    </>
  );
}

export default App;



