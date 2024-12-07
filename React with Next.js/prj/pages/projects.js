import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projectData = [
    {
      title: 'My Awesome Project',
      description: 'A cool project built with Next.js and React.',
      image: '/images/project1.jpg'
    },
    {
      title: 'My Second Project',
      description: 'Another interesting project with great features.',
      image: '/images/project1.jpg' // Replace with a different image if you have one
    }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem' }}>
      <h1>My Projects</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {projectData.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}
