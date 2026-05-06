import { createBrowserRouter } from 'react-router-dom'
import { createElement } from 'react'
import MainLayout from '../components/container/landingPage/MainLayout'
import LandingPage from '../pages/LandingPage'
import MissingPage from '../pages/MissingPage'
import StoryPage from '../pages/StoryPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: createElement(MainLayout),
    children: [
      { index: true, element: createElement(LandingPage) },
      { path: 'story', element: createElement(StoryPage) },
      { path: '*', element: createElement(MissingPage) },
    ],
  },
])

export default router
