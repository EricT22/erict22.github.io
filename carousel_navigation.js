let index = 0;

const projects = document.getElementsByClassName('project');

const handleLeftButtonClick = () => {
    const nextInd = (index - 1 >= 0) ? index - 1 : projects.length - 1;

    const currentProject = document.querySelector(`[data-index="${index}"]`),
          nextProject = document.querySelector(`[data-index="${nextInd}"]`);

    currentProject.dataset.status = 'before';

    nextProject.dataset.status = 'becoming-active-from-after';

    setTimeout(() => {
        nextProject.dataset.status = 'active';
        index = nextInd;
    });
}

const handleRightButtonClick = () => {
    const nextInd = (index + 1 <= projects.length - 1) ? index + 1 : 0;

    const currentProject = document.querySelector(`[data-index="${index}"]`),
          nextProject = document.querySelector(`[data-index="${nextInd}"]`);

    currentProject.dataset.status = 'after';

    nextProject.dataset.status = 'becoming-active-from-before';

    setTimeout(() => {
        nextProject.dataset.status = 'active';
        index = nextInd;
    });
}