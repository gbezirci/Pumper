import {createBrowserRouter} from 'react-router-dom';
import Home from '~/pages/home';
import Layout from '~/pages/layouts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{index: true, element: <Home />}],
  },
]);

export default router;
