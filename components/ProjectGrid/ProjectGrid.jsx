import Project from '../Project/Project';

import styles from './ProjectGrid.module.css';

const ProjectGrid = ({ projects }) => {
  return (
    <div className={`${styles.grid}`}>
      {projects.map((project) => (
        <Project key={project._id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
