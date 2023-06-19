import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Footer } from './Footer/Footer';
import { AppBar } from './AppBar/AppBar';

const Layout = () => {
  return (
    <div className="mx-auto min-h-screen flex flex-col">
      <header className="container py-5 shadow-md">
        <AppBar />
      </header>
      <main className="flex-grow container">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
