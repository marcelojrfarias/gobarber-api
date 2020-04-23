<h1 align="center">
    <img alt="GoStack Bootcamp" src="https://res.cloudinary.com/marcelojrfarias/image/upload/v1587323057/gostack_gy3h7u.png" />
    <br>
    GoBarber API
</h1>

<h4 align="center">
  A barber scheduling app that allows users to schedule an appointment with his favorite barber and shows to the barber his agenda for the day.
</h4>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/marcelojrfarias/gobarber-api.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/marcelojrfarias/gobarber-api.svg">

  <a href="https://www.codacy.com/manual/marcelojrfarias/gobarber-backend?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=marcelojrfarias/gobarber-backend&amp;utm_campaign=Badge_Grade">
    <img src="https://api.codacy.com/project/badge/Grade/61f1a27cb171486984d95de413e50355"/>
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/marcelojrfarias/gobarber-api.svg">
  <a href="https://github.com/marcelojrfarias/gobarber-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/marcelojrfarias/gobarber-api.svg">
  </a>

  <a href="https://github.com/marcelojrfarias/gobarber-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/marcelojrfarias/gobarber-api.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/marcelojrfarias/gobarber-api.svg">
</p>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#link-routes">Routes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: Technologies

This project was developed at the [RocketSeat GoStack Bootcamp][gostack] with the following technologies:

- [NodeJS][nodejs]
- [Express][express]
- [Typescript][typescript]
- [Docker][docker]
- [PostgreSQL][postgres]
- [TypeORM][typeorm]
- [Eslint][eslint]
- [Prettier][prettier]
- [Editor Config][editor-config]
- [Visual Studio Code][vscode]
- And some other packages...

## :gear: How To Use

To clone and run this application, you'll need [Git][git], [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/marcelojrfarias/gobarber-api

# Go into the repository
$ cd gobarber-api

# Install dependencies
$ yarn install

# Run the app
$ yarn dev:server
```

## :link: Routes
<p align="center">
  <a href="#list-the-appointments">List</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#create-a-appointment">Create</a>
</p>

<h1 align="center">
<a href="https://insomnia.rest/run/?label=NodejsConcepts&uri=https://raw.githubusercontent.com/marcelojrfarias/gobarber-api/master/insomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</h1>

### List the appointments
#### Request
- **Method:**
  ```
  GET
  ```
- **Endpoint:**
  ```
  /appointments
  ```
- **Route Parameters:**
  ```
  None.
  ```
- **Query Parameter:**
  ```
  None.
  ```
- **Headers:**
  ```
  None.
  ```
- **Body:**
  ```
  None.
  ```
#### Response
##### Success
- **Code:**
  ```
  200
  ```
- **Content:**
  ```json
  [{
    "id": "73d72f83-8421-47d7-85a9-a34995b6b048",
    "provider": "Marcelo Farias",
    "date": "2020-04-22T23:00:00.000Z"
  },
  ]
  ```

### Create a appointment
#### Request
- **Method:**
  ```
  POST
  ```
- **Endpoint:**
  ```
  /repositories
  ```
- **Route Parameters:**
  ```
  None.
  ```
- **Query Parameter:**
  ```
  None.
  ```
- **Headers:**
  ```
  None.
  ```
- **Body:**
  ```json
  {
    "provider": "Marcelo Farias",
    "date": "2020-04-22T23:00:00.000Z"
  }
  ```
#### Response
##### Success
- **Code:**
  ```
  200
  ```
- **Content:**
  ```json
  {
    "id": "73d72f83-8421-47d7-85a9-a34995b6b048",
    "provider": "Marcelo Farias",
    "date": "2020-04-22T23:00:00.000Z"
  }
  ```
##### Error
- **Code:**
  ```
  400
  ```
- **Content:**
  ```json
  {
    "error": "This appointment is already booked!"
  }
  ```

## :memo: License
This project is under the MIT license. See the [LICENSE](https://github.com/marcelojrfarias/gobarber-api/blob/master/LICENSE) for more information.

---

Made with 💗 by Marcelo Farias 👋 [Get in touch!](https://www.linkedin.com/in/marcelojrfarias/)

[nodejs]: https://nodejs.org/
[gostack]: https://rocketseat.com.br/bootcamp
[express]: https://expressjs.com/
[git]: https://git-scm.com
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[axios]: https://github.com/axios/axios
[reactjs]: https://reactjs.org/
[react-native]: https://reactnative.dev/
[editor-config]: https://editorconfig.org/
[typescript]: https://www.typescriptlang.org/
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/
[typeorm]: https://typeorm.io/
[docker]: https://www.docker.com/
[postgresql]: https://www.postgresql.org/
