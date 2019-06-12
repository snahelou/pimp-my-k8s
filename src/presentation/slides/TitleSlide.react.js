import React from 'react';
import {
    Heading,
    Notes,
    Text,
    Image
    
  } from 'spectacle';

const TitleSlide = (images) => (
    <div>

        <div style={{ position: 'relative' ,textAlign: 'right', left: '-132px'}}> 
          <Image src={images.k8s} style={{ float: "right", display: "inline-block", width: "65%", marginRight: "-140px",marginLeft: "-40px",marginTop: "-180px"}}/>
          <Heading textSize="2.4em" caps textColor="secondary" >PIMP MY</Heading>
        </div>
        <Text margin="100px 0 0 0" bold textColor="secondary" textSize="1em">Boost your productivity and make your life easier to work with Kubernetes</Text>
        <Text margin="40px 0 0 0" textColor="tertiary">S01E01: Laptop Tips</Text>

        <Notes>
            <br/>L'idée de se talk, c'est de présenter une petite dizaine de projet open-source qui vous serons p/e utile si vous êtes ammené à développer et à maintenir des applications containerisées sous Kubernetes.
            <br/>
            <br/>Theme du cinéma, l'épisode 1 de cette série est basé sur les outils qui servent au quotidien d'un dev ou d'un ops
            <br/>
            <br/>L'écosysteme autour de k8s est énorme, donc j'en ai choisi 10, c'est clairement pas exaustif :) 
        </Notes>
    </div>
);

const DemoSlide = (images) => (
  <div>
    <Heading textColor="secondary"> DEMO </Heading>
  </div>
);

export {
  TitleSlide,
  DemoSlide
}