import projects from '../data/projects';

function Projects() {
    return (
        <section>
            <h2>My Projects</h2>
            {projects.map((project, index) => (
                <div key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p>Tech Stack: {project.techStack.join(', ')}</p>
                    <a href={project.link}>View on GitHub</a>
                </div>
            ))}
        </section>
    );
}

export default Projects;
