import Project from './Project';

const ProjectGrid = ({ projects }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8'>
      {projects.map((project) => (
        <Project key={project._id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
