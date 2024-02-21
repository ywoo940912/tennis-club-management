# Total Lawn Tennis Club Management with ELO Match-making: backend


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
       <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
Total Lawn Tennis Club Management is a comprehensive racket club management solution offering membership management, event registration, match-making, and ELO rating viewing services.

## Description

Many local tennis club and team boards face challenges in arranging fair matches due to inconsistent skill levels among members or lack of clear data. 
By integrating the commonly used ELO rating system, Total Lawn Tennis Club Management provides accurate match-making, motivation for skill improvement, and enhances the overall enjoyment of playing tennis.
  
### Features
- Role-based Membership Registration
- Attendance Management for Weekly Events
- Assigned Court View
- Match History Tracking
- ELO Rating Trend Visualization
- Member Search Functionality


### Built With

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Tailwind](https://tailiwindcss.com/)
* [Mongoose](https://mongoosejs.com/)
* [Express](https://expressjs.com/)
* [NodeJs](https://nodejs.org/en/)



<!-- GETTING STARTED -->
## Getting Started

Instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  cd npm install npm@latest -g
  ```
* express.js
  ```sh
  cd npm install express  
  ```

### Installation

1. Get a Mongo URI from [https://cloud.mongodb.com/](https://cloud.mongodb.com/)
   
2. Clone the repo
   ```sh
   git clone https://github.com/ywoo940912/tennis-club-management.git
   ```
3. Install NPM packages
   ```sh
   cd client && npm install
   ```
   ```sh
   cd server && npm install
   ```
4. Enter your Mongo URI and JWT Secret Token in `server/config/default.json`
   ```JSON
   {
		"mongoURI": "mongodb+srv://user:pass@cluster10.uxypi.mongodb.net/test?retryWrites=true&w=majority",
		"jwtSecret": "token"
	}
   ```
### How to start

Run Node.js
   ```sh
   cd npm run dev
   ```


<!-- USAGE EXAMPLES -->
## Usage

Allows individuals to keep in touch with friends and extended family


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues).

- [x] Phase 1
	- Backend Setup
	- Middleware Setup
	- Database Connection
  - API controllers & Router
- [ ] Phase 2
	- .

<!-- CONTRIBUTING
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
-->


<!-- CONTACT -->
## Contact

LinkedIn - [Yeonkuk Woo](https://www.linkedin.com/in/yeonwoo0912/) 

Project Link: [https://github.com/ywoo940912/tennis-club-management](https://github.com/ywoo940912/tennis-club-management.git)



<!-- ACKNOWLEDGEMENTS -->
