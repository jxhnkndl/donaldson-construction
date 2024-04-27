import aboutPage from './pages/aboutPage';
import contactPage from './pages/contactPage';
import homePage from './pages/homePage';
import portfolioPage from './pages/portfolioPage';

import contactDetails from './resources/contactDetails'
import projectImage from './resources/projectImage';
import project from './resources/project';
import testimonial from './resources/testimonial';

import help from './components/help';

export const schema = {
  types: [
    aboutPage,
    contactDetails,
    contactPage,
    help,
    homePage,
    portfolioPage,
    project,
    projectImage,
    testimonial,
  ],
};
