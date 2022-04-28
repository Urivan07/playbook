const repo = {
  name: "LaunchX",
  author: "Urivan",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close;
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`;
  },
};

console.log("Nombre del repo:" + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());

const issue = {
  title: "weekly_mission_2 error exercise 1",
  repositoryNameAssociated: "weekly_mission_2",
  status: "Error",
  numberOfComments: 3,
  labels: 2,
  author: "Urivan",
  dateCreated: "27/4/2022",
  lastUpdated: "27/4/2022",
  getTitleAndAuthor: function () {
    return `Issue ${this.title} was created by ${this.author}`;
  },
  getGeneralInfo: function () {
    return `This issue was born in ${this.dateCreated}`;
  },
};

console.log();
console.log(`Error name: ${issue.title}`);
console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());

const PullRequest = {
  title: "Exercise 1",
  branchName: "main",
  dateCreated: "27/04/2022",
  status: "Open",
  author: "Urivan",
  repositoryNameAssociated: "playbook",
  getStatus: function () {
    return `${this.title} modified on ${this.dateCreated}`;
  },
  getTitleAndAutor: function () {
    return `Title: ${this.title}, Author: ${this.author}`;
  },
};

console.log();
console.log(`Pull request: ${PullRequest.title}`);
console.log(PullRequest.getTitleAndAutor());
console.log(PullRequest.getStatus());

const Facebook = {
  user: {
    name: "Urivan",
    age: "25",
    nacionality: "Mexican",
  },
  biography: {
    university: "Instituto Tecnologico Superior de Ciudad Hidalgo",
    professional_degree: "Computer systems engineering",
    actual_work: "Talento Net",
  },
  newPost: function (description) {
    return `${this.user.name} has posted: ${description}`;
  },
  get_biography_info: function () {
    return `${this.user.name} study at the university '${this.biography.university}' with professional degree '${this.biography.professional_degree}' and his actual work is in '${this.biography.actual_work}'.`;
  },
};

console.log();
console.log("Facebook platform");
console.log(Facebook.get_biography_info());
console.log(Facebook.newPost("Hi everyone!."));
