import contactPage from './pages/contactPage';
import homePage from './pages/homePage';
import portfolioPage from './pages/portfolioPage';

import help from './components/help';

import contactDetails from './resources/contactDetails'
import galleryImages from './resources/galleryImages';
import project from './resources/project';
import testimonial from './resources/testimonial';

export const schema = {
  types: [
    contactDetails,
    contactPage,
    galleryImages,
    help,
    homePage,
    portfolioPage,
    project,
    testimonial,
  ],
};
