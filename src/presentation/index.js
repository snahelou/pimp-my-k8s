// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Slide,  
} from 'spectacle';

// Import theme

import createTheme from 'spectacle/lib/themes/default';
import "prismjs/themes/prism-okaidia.css";
import "./index.css";

// slides
import TitleSlide from "./slides/TitleSlide.react.js";
import PresentationSlide from "./slides/PresentationSlide.react.js";

import  { Slide111, Slide112, Slide113, Slide114, Slide115 } from "./slides/Slide11.react.js";
import  { Slide101, Slide102, Slide104, Slide105 } from "./slides/Slide10.react.js";


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

  explain: require("../assets/explain.gif"),
  dryrun: require("../assets/dryrun.png"),
  kubescore: require("../assets/kube-score.png"),

  kubeps1gif: require("../assets/kube-ps1.gif"),
  kubectxdemo: require("../assets/kubectx-demo.gif"),
  kubectllogs: require("../assets/kubectllogs.png"),
  kubetail: require("../assets/kubetail.gif")

};

function getImage(img) {
  return images[img].replace("/", "");
}


/*
  Idée: Utiliser l'app Go de Squash pour faire une chaine de bout en bout... 

  J'ai mon code... 
  Je le kubernetise )> Partie YAML  // Explain - Dryrun - Kubescore 
  Je le déploie > Kube capacity / Helm diff / Helm test
  Je check kubetail / tubectl 
  Je troubleshoot / Squash - Kubefwd 
  
*/ 
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

        {/* I love yaml... Or not...  */}
        <Slide transition={["fade"]} bgColor="primary">
          <Slide101/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Slide102            
            explain={images.explain}
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary" >
          <Slide104            
            dryrun={images.dryrun}
          />
        </Slide>


        <Slide transition={['fade']} bgColor="primary" >
          <Slide105          
            kubescore={images.kubescore}
          />
        </Slide>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        {/* It's time to deploy  */}

        {/* https://github.com/robscott/kube-capacity?utm_sq=fzz4jx87q0 kubectl krew install resource-capacity */}
        {/*  Helm diff */}
        {/*  Helm test */}


        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        {/* I see what's happens */}

        <Slide transition={["fade"]} bgColor="primary">
          <Slide111/>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="primary">
          <Slide112
            kubectxdemo={images.kubectxdemo}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Slide113
            gif={images.kubeps1gif}
          />
        </Slide>
        
        <Slide transition={["fade"]} bgColor="primary">
          <Slide114
            png={images.kubectllogs}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Slide115
            gif={images.kubetail}
          />
        </Slide>

        {/* tubectl  / tubectl +syst get po kube% / tubectl logs -f nginx%% / tubectl +def delete po nginx% --force --grace-period 0 / */}
        
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        {/* I troubleshoot like a boss */}

        {/* kubefwd svc */}
        {/* Squash */}

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

      </Deck>
    );
  }
}