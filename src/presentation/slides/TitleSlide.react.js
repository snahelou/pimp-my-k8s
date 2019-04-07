import React from 'react';
import {
    Heading,
    Notes,
    Text
    
  } from 'spectacle';

const TitleSlide = () => (
    <div>
        <Heading caps textColor="secondary" >
            PIMP MY K8S
        </Heading>
        <Text textColor="tertiary" textSize="1.5em" margin="60px 0 0 0" bold>
        <p/>Boost your productivity with Kubernetes
        <p/>S01E01: Laptop Tips 
        </Text>
        <Notes>
            <br/>L'idée de se talk, c'est de présenter une petite dizaine de projet open-source qui vous serons utile si vous êtes ammener a développer et a maintenir des applications containerisées sous Kubernetes.
        </Notes>
    </div>
);

export default TitleSlide;
