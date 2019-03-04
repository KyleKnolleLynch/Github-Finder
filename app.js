//  init GitHub class
const github = new Github();

// init UI class
const ui = new UI();

const searchUser = document
  .getElementById("searchUser")
  .addEventListener("keyup", e => {
    //  get input text
    const userText = e.target.value;
    if (userText !== "") {
      //  make http call
      github.getUser(userText).then(data => {
        if (data.profile.message === "Not Found") {
          //  show alert
          ui.showAlert();
        } else {
          // show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
    } else {
      // clear profile
      ui.clearProfile();
    }
  });
