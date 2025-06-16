let user = {
  id: 26993056,
  node_id: "MDQ6VXNlcjI2OTkzMDU2",
  login: "krahets",
  avatar_url: "https://avatars.githubusercontent.com/u/26993056?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/krahets",
  html_url: "https://github.com/krahets",
  followers_url: "https://api.github.com/users/krahets/followers",
  following_url: "https://api.github.com/users/krahets/following",
  gists_url: "https://api.github.com/users/krahets/gists",
  starred_url: "https://api.github.com/users/krahets/starred",
  subscriptions_url: "https://api.github.com/users/krahets/subscriptions",
  organizations_url: "https://api.github.com/users/krahets/orgs",
  repos_url: "https://api.github.com/users/krahets/repos",
  events_url: "https://api.github.com/users/krahets/events",
  received_events_url: "https://api.github.com/users/krahets/received_events",
  type: "User",
  site_admin: false,
  score: 1
};

function getUserData(){
  return {
    login:user.login,
    image:user.avatar_url
  }
}