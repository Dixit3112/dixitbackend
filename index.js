require("dotenv").config();

const express = require("express"); // = import express from "express"
const app = express();

const port = 9030;

const githubData = {
  login: "Dixit3112",
  id: 139951435,
  node_id: "U_kgDOCFd9Sw",
  avatar_url: "https://avatars.githubusercontent.com/u/139951435?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Dixit3112",
  html_url: "https://github.com/Dixit3112",
  followers_url: "https://api.github.com/users/Dixit3112/followers",
  following_url:
    "https://api.github.com/users/Dixit3112/following{/other_user}",
  gists_url: "https://api.github.com/users/Dixit3112/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Dixit3112/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Dixit3112/subscriptions",
  organizations_url: "https://api.github.com/users/Dixit3112/orgs",
  repos_url: "https://api.github.com/users/Dixit3112/repos",
  events_url: "https://api.github.com/users/Dixit3112/events{/privacy}",
  received_events_url: "https://api.github.com/users/Dixit3112/received_events",
  type: "User",
  site_admin: false,
  name: "DixitRakholiya",
  company: null,
  blog: "https://dixit-atlantis-landing-page.netlify.app",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 7,
  public_gists: 0,
  followers: 1,
  following: 9,
  created_at: "2023-07-19T06:53:50Z",
  updated_at: "2024-06-26T12:17:42Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("dixit.com");
});

app.get("/login", (req, res) => {
  res.send("<h1> Please login at Dixit.com</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2> Please go on the Chai aur Code</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/github', (req, res) => {
    res.json(githubData)
})
