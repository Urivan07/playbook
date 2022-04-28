class repo {
  constructor(name, author, language, issues_open, issues_close) {
    this.name = name;
    this.author = author;
    this.language = language;
    this.issues_open = issues_open;
    this.issues_close = issues_close;
  }
  get getTotalIssues() {
    return this.issues_open + this.issues_close;
  }

  get getGeneralInfo() {
    return `This repository ${this.name} was created by ${this.author}`;
  }
}

const urivan_repo = new repo("LaunchX", "Urivan", "JavaScript", 10, 5);
console.log(urivan_repo);
console.log("getTotalIssues");
console.log(urivan_repo.getTotalIssues);
console.log("getGeneralInfo");
console.log(urivan_repo.getGeneralInfo);

class issue {
  constructor(title, author, repositoryNameAssociated, status, dateCreated) {
    this.title = title;
    this.author = author;
    this.repositoryNameAssociated = repositoryNameAssociated;
    this.status = status;
    this.dateCreated = dateCreated;
  }
  get getTitleAndAuthor() {
    return `Issue ${this.title} was created by ${this.author}`;
  }
  get getGeneralInfo() {
    return `This issue was born in ${this.dateCreated}`;
  }
}

const urivan_issue = new issue(
  "weekly_mission_2 error exercise 1",
  "Urivan",
  "weekly_mission_2",
  "Error",
  "27/4/2022"
);
console.log();
console.log(urivan_issue);
console.log("getTitleAndAuthor");
console.log(urivan_issue.getTitleAndAuthor);
console.log("getGeneralInfo");
console.log(urivan_issue.getGeneralInfo);

class PullRequest {
  constructor(title, author, branchName, dateCreated) {
    this.title = title;
    this.author = author;
    this.branchName = branchName;
    this.dateCreated = dateCreated;
  }
  get getStatus() {
    return `${this.title} modified on ${this.dateCreated}`;
  }
  get getTitleAndAutor() {
    return `Title: ${this.title}, Author: ${this.author}`;
  }
}

const pull = new PullRequest("Exercise 1", "Urivan", "main", "27/04/2022");
console.log();
console.log(pull);
console.log("getStatus");
console.log(pull.getStatus);
console.log("getTitleAndAutor");
console.log(pull.getTitleAndAutor);

class Facebook {
  constructor(
    name,
    age,
    nacionality,
    university,
    professional_degree,
    actual_work
  ) {
    this.user = {
      name: name,
      age: age,
      nacionality: nacionality,
    };
    this.biography = {
      university: university,
      professional_degree: professional_degree,
      actual_work: actual_work,
    };
    this.post_description = "default";
  }

  set newPost(description) {
    this.post_description = description;
    return `${this.user.name} has posted: ${description}`;
  }
  get see_post() {
    return `${this.user.name} has posted: ${this.post_description}`;
  }

  get get_biography_info () {
    return `${this.user.name} study at the university '${this.biography.university}' with professional degree '${this.biography.professional_degree}' and his actual work is in '${this.biography.actual_work}'.`;
  }
}

const social_platform = new Facebook(
  "Urivan",
  "25",
  "Mexican",
  "Instituto Tecnologico Superior de Ciudad Hidalgo",
  "Computer systems engineering",
  "Talento Net"
);
console.log();
console.log(social_platform);
social_platform.newPost = "Hi everyone!.";
console.log("see_post")
console.log(social_platform.see_post)
console.log("get_biography_info")
console.log(social_platform.get_biography_info)