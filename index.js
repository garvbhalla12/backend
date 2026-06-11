const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "garvbhalla",
  "id": 75862762,
  "node_id": "MDQ6VXNlcjc1ODYyNzYy",
  "avatar_url": "https://avatars.githubusercontent.com/u/75862762?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/garvbhalla",
  "html_url": "https://github.com/garvbhalla",
  "followers_url": "https://api.github.com/users/garvbhalla/followers",
  "following_url": "https://api.github.com/users/garvbhalla/following{/other_user}",
  "gists_url": "https://api.github.com/users/garvbhalla/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/garvbhalla/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/garvbhalla/subscriptions",
  "organizations_url": "https://api.github.com/users/garvbhalla/orgs",
  "repos_url": "https://api.github.com/users/garvbhalla/repos",
  "events_url": "https://api.github.com/users/garvbhalla/events{/privacy}",
  "received_events_url": "https://api.github.com/users/garvbhalla/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 0,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2020-12-11T21:22:34Z",
  "updated_at": "2020-12-11T21:22:35Z"
}

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) =>{
    res.send('this is twitter')
})

app.get('/login', (req, res) => {
    res.send('<h1>this is the login page</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>this is youtube</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
