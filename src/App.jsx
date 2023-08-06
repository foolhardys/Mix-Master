import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  HomeLayout,
  About,
  Landing,
  Error,
  NewsLetter,
  Cocktail,
  SinglePageError
} from './pages'

import { loader as landingLoader } from './pages/Landing.jsx';
import { loader as singleCocktailLoader } from './pages/Cocktail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <SinglePageError />,
      },
      {
        path: 'cocktail/:id',
        loader: singleCocktailLoader,
        element: <Cocktail />,
        errorElement: <SinglePageError />,
      },
      {
        path: 'newsletter',
        element: <NewsLetter />,
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
])


const App = () => {
  return <RouterProvider router={router} />
};
export default App;
