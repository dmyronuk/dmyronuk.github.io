import LearnpianoDemo from "../images/learnpiano_demo.gif";

export const PROJECTS_STATIC = [
  {
    name: "Kiro",
    description: `Real estate app that leverages Yelp and Google APIs to provide users
      with information about nearby amenities and connects users through a real-time chat
      feature.`,
    githubURL: "https://github.com/dmyronuk/kiro",
    imageURL: "https://raw.githubusercontent.com/dmyronuk/kiro/master/screenshots/kiro_demo.gif",
    tech: "NodeJS | React | Websockets | Postgres | Sass | Google Maps API | Yelp API"
  },
  {
    name: "FoodBar",
    description: `Food ordering service that automates SMS communication between client and
    vendor. Twilio API is used to notify the business when an order has been placed and a
    confirmation message is auto-generated once the business specifies a prep time.`,
    githubURL: "https://github.com/dmyronuk/foodbar",
    imageURL: "https://raw.githubusercontent.com/dmyronuk/foodbar/master/docs/demo.gif",
    tech: "NodeJS | Express | EJS | jQuery | Postgres | Twilio"
  },
  {
    name: "Chatty",
    description: "Real-time chat app allowing users to exchange text and picture messages.",
    githubURL: "https://github.com/dmyronuk/chatty",
    imageURL: "https://raw.githubusercontent.com/dmyronuk/chatty/master/screenshots/demo.gif",
    tech: "NodeJS | Express | ReactJS | Websockets"
  },
  {
    name: "Battleship",
    description: `Single-page implementation of the classic board game. Users can compete
    against a computer opponent for naval dominance.`,
    githubURL: "https://github.com/dmyronuk/battleship",
    imageURL: "https://raw.githubusercontent.com/dmyronuk/battleship/master/screenshots/demo.gif",
    tech: "NodeJS | Express | jQuery"
  },
  {
    name: "BarChart",
    description: `Simple script for rendering HTML bar charts. Supports both stacked and unstacked
    bars as well as additional options for customizing bar colors, labels and legends.`,
    githubURL: "https://github.com/dmyronuk/lhl-bar-chart",
    imageURL: "https://raw.githubusercontent.com/dmyronuk/lhl-bar-chart/master/screenshots/power_sales_graphs.png",
    tech: "Javascript | jQuery"
  },
  {
    name: "KeysWorkshop",
    description: `Repository of sheet music and lessons to help students learn piano. Randomized
    theory exercises supplement the lessons and include tests on note and interval identification.
    Also includes a dictionary of common scales/modes and visually maps them to a virtual keyboard.   `,
    githubURL: null,
    imageURL: LearnpianoDemo,
    tech: "Python | Django | jQuery"
  }
];