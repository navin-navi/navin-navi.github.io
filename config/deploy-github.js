const ghpages = require("gh-pages");

// replace with your repo url
ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/navin-navi/navin-moorthy.github.io.git"
  },
  () => {
    console.log("Deploy Complete!");
  }
);
