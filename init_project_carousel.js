const projectsData = [
    {
        title: "Machine Learning in Tetris",
        githubLink: "https://www.github.com", // TODO: ADD ACTUAL LINK
        description: "Created a Deep-Q Learning (DQN) agent which was able to play the game of Tetris in real time and reach a score of over 5 billion points. Research was presented at the 2024 Southern California Conference for Undergraduate Research.",
        imageSrc: "/imgs/ML Tetris Image.png"
    },
    {
        title: "Client-Server Architecture",
        githubLink: "https://github.com/EricT22/Client-Server-Architecture",
        description: "Worked in a team to develop a generic client-server architecture using Java and MySQL with user registration and authentication, email recovery, and data storage. Relevant documentation was produced in the form of UML state, class, and use case diagrams.",
        imageSrc: "/imgs/Client Server Image.png"
    },
    {
        title: "Tetris in Java",
        githubLink: "https://github.com/EricT22/Tetris",
        description: "blah blah",
        imageSrc: "/imgs/Tetris in Java Image.png"
    },
    {
        title: "Conway's Game of Life",
        githubLink: "https://github.com/EricT22/Game-of-Life",
        description: "blah",
        imageSrc: "/imgs/Game of Life Image.png"
    }
];

const createProjectElement = (project, index) => {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';
    projectDiv.setAttribute('data-index', index);
    projectDiv.setAttribute('data-status', (index == 0) ? 'active' : 'unknown');

    const projectImgDiv = document.createElement('div');
    projectImgDiv.className = 'project-image details';
    
    const imgElem = document.createElement('img');
    imgElem.src = project.imageSrc;
    imgElem.alt = project.title;
    
    const projectInfoDiv = document.createElement('div');
    projectInfoDiv.className = 'project-info details';
    
    const title = document.createElement('h2');
    title.className = 'project-title text';

    const titleLink = document.createElement('a');
    titleLink.className = 'text';
    titleLink.href = project.githubLink;
    titleLink.target = "_blank";
    titleLink.textContent = project.title;
    title.appendChild(titleLink);

    const description = document.createElement('p');
    description.className = 'project-description text';
    description.textContent = project.description;

    projectImgDiv.appendChild(imgElem);

    projectInfoDiv.appendChild(title);
    projectInfoDiv.appendChild(description);

    projectDiv.appendChild(projectImgDiv);
    projectDiv.appendChild(projectInfoDiv);

    return projectDiv;
}


const initProjects = () => {
    const projectsContainer = document.getElementsByClassName('projects-container')[0];

    projectsData.forEach((project, index) => {
        const projectElement = createProjectElement(project, index);
        projectsContainer.appendChild(projectElement);
    });
}


initProjects();