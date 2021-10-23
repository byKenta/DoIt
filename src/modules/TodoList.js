import Project from "./Project";
import Task from "./Task";

// Main Todo-List Module

export default class TodoList {
    constructor() {
        this.projects = [];
        this.projects.push(new Project("Home"));
        this.projects.push(new Project("Today"));
        this.projects.push(new Project("This week"));
    }

    addProject(newProject) {
        // Check if Project already exists
        if (this.projects.find((project) => project.getName() === newProject.getName())) {
            return;
        }

        // Check if a name has been given
        if (newProject.getName() === undefined) {
            newProject.setName(this.getDefaultProjectName());
        }

        this.projects.push(newProject);
    }
    removeProject() {}

    setProjects(newProjects) {
        this.projects = newProjects;
    }
    getProjects() {
        return this.projects;
    }

    getProject(x) {
        if (typeof x === "string") {
            console.log("getting project by string");
            return this.projects.find((prject) => project.getName() === x);
        } else if (typeof x === "number") {
            console.log("getting project by number");
            if (x > -1) {
                return this.projects[x];
            }
        } else if (typeof x === "object") {
            if (x instanceof Project) {
                return this.projects.find((project) => project === x);
            }
        }

        return;
    }

    getDefaultProjectName() {
        let count = 1;
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i].getName() === `Project${count}`) {
                count++;
                i = -1;
            }
        }
        return `Project${count}`;
    }
}
