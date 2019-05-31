// Import React
import React from 'react';
import CodeSlide from "spectacle-code-slide";

/* eslint import/no-webpack-loader-syntax: off */

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
import {TitleSlide, DemoSlide} from "./slides/TitleSlide.react.js";
import PresentationSlide from "./slides/PresentationSlide.react.js";

import  { Slide121, Slide122, Slide123 } from "./slides/Slide12.react.js";
import  { Slide111, Slide112, Slide113, Slide114, Slide115, Slide116, Slide117, Slide118 } from "./slides/Slide11.react.js";
import  { Slide101, Slide102, Slide104, Slide105, Slide106 } from "./slides/Slide10.react.js";
import  { Slide131, Slide132, Slide133, Slide134, Slide1340, Slide1341 } from "./slides/Slide13.react.js";
import  { Slide91, Slide92, Slide93 } from "./slides/Slide09.react.js";
import  { Slide140, Slide141 } from "./slides/Slide14.react.js";

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

const code = {
  kubesec: require("!raw-loader!../assets/kubesec.yaml")
};

const images = {
  k8s: require("../assets/k8spimped.png"),
  zenika_logo: require("../assets/zenika-logo.png"),
  photo: require("../assets/photo.png"),

  k8s2: require("../assets/k8s2.png"),
  curve: require("../assets/curve.png"),
  mcgyver: require("../assets/mcgyver.jpg"),


  explain: require("../assets/explain.gif"),
  dryrun: require("../assets/dryrun.png"),
  kubescore: require("../assets/kube-score.png"),
  kubesec: require("../assets/kubesec.png"),

  pimp: require("../assets/pimp.gif"),
  kubeps1gif: require("../assets/kube-ps1.gif"),
  k9s: require("../assets/k9s.png"),
  kubectxdemo: require("../assets/kubectx-demo.gif"),
  kubectllogs: require("../assets/kubectllogs.png"),
  kubetail: require("../assets/kubetail.gif"),
  tubectl: require("../assets/tubekit.png"),

  unittests: require("../assets/unittests.png"),
  helmdiff: require("../assets/helmdiff.png"),

  kubefwd: require("../assets/kubefwd.gif"),
  squash: require("../assets/squash.png"),
  telepresence: require("../assets/bird-on-bricks.svg"),
  inner: require("../assets/innerloop.png"),
  question: require("../assets/question.png")
};

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
          <TitleSlide 
            k8s={images.k8s}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <PresentationSlide 
            zenika={images.zenika_logo}
            photo ={images.photo} 
          />
        </Slide>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

        <Slide transition={["fade"]} bgColor="primary">
          <Slide91
            k8s={images.k8s2}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Slide92
            curve={images.curve}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Slide93
            mcgyver={images.mcgyver}
          />
        </Slide>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        {/* I see what's happens */}

        <Slide transition={["fade"]} bgColor="primary">
          <Slide111/>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="primary">
          <Slide116
            pimp={images.pimp}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Slide113
            gif={images.kubeps1gif}
          />
        </Slide>
        

        <Slide transition={["fade"]} bgColor="primary">
          <Slide118
            gif={images.k9s}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Slide112
            kubectxdemo={images.kubectxdemo}
          />
        </Slide>



        <Slide transition={["fade"]} bgColor="primary">
          <Slide117
            tubectl={images.tubectl}
          />
        </Slide>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

        {/* I love yaml... Or not...  */}
        <Slide transition={["fade"]} bgColor="primary">
          <Slide101/>
        </Slide>
        
        <Slide transition={['fade']} bgColor="primary" >
          <Slide104            
            dryrun={images.dryrun}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Slide102            
            explain={images.explain}
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary" >
          <Slide105          
            kubescore={images.kubescore}
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary" >
          <Slide106         
            kubesec={images.kubesec}
          />
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="yaml"
          bgColor="black"
          textSize=".98em"
          code={code.kubesec}
          ranges={[
            {
              loc: [1, 2],
            },
            {
              loc: [3, 5],
            },
            {
              loc: [11, 15],
            },
            {
              loc: [43 , 47],
            }

          ]}
        />
        
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        {/* It's time to deploy  */}

        <Slide transition={['fade']} bgColor="primary" >
          <Slide121          
          />
        </Slide>
        
        <Slide transition={['fade']} bgColor="primary" >
          <Slide122         
            unittests={images.unittests}
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary" >
          <Slide123          
            helmdiff={images.helmdiff}
          />
        </Slide>


        
        <Slide transition={['fade']} bgColor="primary" >
          <DemoSlide />
        </Slide>


        
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        {/* I troubleshoot like a boss */}

        <Slide transition={["fade"]} bgColor="primary">
          <Slide131
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

        <Slide transition={["fade"]} bgColor="primary">
          <Slide132
            kubefwd={images.kubefwd}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Slide1340
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Slide1341
            inner={images.inner}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Slide134
            telepresence={images.telepresence}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Slide133
            squash={images.squash}
          />
        </Slide>


        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

        {/* Go further */}
        {/* VS Cloud code */}

        <Slide transition={["fade"]} bgColor="primary">
          <Slide140
          />
        </Slide>

        {/* Questions */}
        <Slide transition={["fade"]} bgColor="primary">
          <Slide141
            question={images.zenika_logo}
          />
        </Slide>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

      </Deck>
    );
  }
}