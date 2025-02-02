const projectsData = [
    {
        title: "Project title",
        githubLink: "https://www.github.com",
        description: "blah blah",
        imageSrc: ""
    },
    {
        title: "Project title",
        githubLink: "https://www.github.com",
        description: "blah blah",
        imageSrc: ""
    },
    {
        title: "Project title",
        githubLink: "https://www.github.com",
        description: "blah blah",
        imageSrc: ""
    },
    {
        title: "Testing",
        githubLink: "https://www.google.com",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis natus quaerat quam earum obcaecati odit error necessitatibus numquam veniam amet? Nostrum sunt exercitationem quod aperiam magnam facilis laboriosam, delectus ea soluta molestias sint quam quae, ratione veritatis unde eaque molestiae fuga doloremque? Reprehenderit eligendi culpa accusantium inventore quam ullam ut?",
        imageSrc: ""
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