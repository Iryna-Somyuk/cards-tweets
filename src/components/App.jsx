import { Routes, Route } from 'react-router-dom';
import Tweets from '../pages/Tweets';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import NotFoundPage from 'pages/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
