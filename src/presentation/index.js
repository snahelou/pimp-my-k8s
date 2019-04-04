// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Appear,
  Link,
  S,
  Text
  
} from 'spectacle';

// Import theme

import createTheme from 'spectacle/lib/themes/default';
import "prismjs/themes/prism-okaidia.css";
import "./index.css";

// slides
import TitleSlide from "./slides/TitleSlide.react.js";
import PresentationSlide from "./slides/PresentationSlide.react.js";
import Slide11 from "./slides/Slide11.react.js";
import Slide12 from "./slides/Slide12.react.js";
import Slide13 from "./slides/Slide13.react.js";

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#f2f2f2',
    secondary: '#4c4c4c',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const images = {
  zenika_logo: require("../assets/zenika-logo.png"),
  photo: require("../assets/photo.png"),
  kubeps1gif: require("../assets/kube-ps1.gif"),
  kubectxdemo: require("../assets/kubectx-demo.gif"),
  kubetail: require("../assets/kubetail.png")

};

function getImage(img) {
  return images[img].replace("/", "");
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

        <Slide transition={["zoom"]} bgColor="primary">
          <TitleSlide />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <PresentationSlide 
            zenika={images.zenika_logo}
            photo ={images.photo} 
          />
        </Slide>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

        <Slide transition={["fade"]} bgColor="primary">
          <Slide11 
            kubectxdemo={images.kubectxdemo}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Slide12 
            gif={images.kubeps1gif}
          />
        </Slide>
        
        <Slide transition={["fade"]} bgColor="primary">
          <Slide13
            gif={images.kubetail}
          />
        </Slide>
        
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}


        <Slide transition={["fade"]}>
          <Heading caps textFont="primary" textColor="secondary">♥️ pipelines</Heading>
          <List>
            <Appear><ListItem>Time To Market</ListItem></Appear>
            <Appear><ListItem>Teamwork and Collaboration</ListItem></Appear>
            <Appear><ListItem>Reduced risks and development costs </ListItem></Appear>
            <Appear><ListItem>Rapid feedback</ListItem></Appear>
            <Appear><ListItem>Fail-fast</ListItem></Appear>
            <Appear><ListItem>End-to-end security</ListItem></Appear>
          </List>
          <Notes>
          <List>
            <ListItem>Time To Market</ListItem>
            <ListItem>Teamwork and Collaboration</ListItem>
            <ListItem>Reduced risks and costs of development</ListItem>
            <ListItem>Rapid feedback</ListItem>
            <ListItem>Fail-fast</ListItem>
            <ListItem>End-to-end security</ListItem>
          </List>
          </Notes>
        </Slide>

      </Deck>
    );
  }
}