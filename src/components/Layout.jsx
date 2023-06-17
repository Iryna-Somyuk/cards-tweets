import { Outlet } from 'react-router-dom';
import { Header, Link, Сontainer } from './App.styled';
import { Suspense } from 'react';
import { Footer } from './Footer/Footer';
import { Filter } from '../components/Filter/Filter';

export const Layout = () => {
  return (
    <Сontainer>
    <div className='mx-auto min-h-screen flex flex-col'>
    <Header>
      <nav>
    <Link to="/">Home</Link>
    <Link to="/tweets">Tweets</Link>
      </nav>
        <div>        
    <Filter /></div>
      </Header>
      <main className='container bg-hero-pattern bg-cover bg-center flex md:flex-grow justify-center w-full py-4  md:justify-between items-center'>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      </main>
      <Footer />
      </div>
   
    </Сontainer>
  );
};
