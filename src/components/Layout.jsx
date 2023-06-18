import { NavLink, Outlet } from 'react-router-dom';
// import { Header, Link, Сontainer } from './App.styled';
import { Suspense } from 'react';
import { Footer } from './Footer/Footer';


 const Layout = () => {
  return (
    <>
    <div className="mx-auto min-h-screen flex flex-col py-5 px-2">
    <header className='flex flex-row gap-3 items-start py-2 px-5 mb-4 border-b-2 border-slate-500'>
      <nav className="flex space-x-8">
    <NavLink  className="curcor-pointer text-gray-dark text-lg font-bold  hover:text-purple-800  active:text-violet-700 hover:underline" to="/">Home</NavLink>
    <NavLink  className="curcor-pointer text-gray-dark text-lg font-bold  hover:text-purple-800  active:text-violet-700 hover:underline" to="/tweets">Tweets</NavLink>
      </nav>
      </header>
      <main className='flex items-center justify-center'>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      </main>
      <Footer />

   
    </div>
    </>
  );
};
export default Layout;