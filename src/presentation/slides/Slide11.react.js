import React from 'react';
import {
    Text,
    Image,
    Heading,
    Notes,   
    Link
  } from 'spectacle';

const Slide11 = (images) => (
  <div>
        <Heading textColor="secondary">Kubectx</Heading>

        <Image 
          src={images.kubectxdemo} 
          style={{ borderWidth: "30", borderColor: "white", borderStyle: "solid", display: "inline-block", marginTop: "60px" , width: "100%"}} 
        />

        <Link href="https://github.com/ahmetb/kubectx" margin="60px 0 0 0" > github.com/ahmetb/kubectx</Link>

        <Notes>
            <br/> Demo kubens classique avec un watch
        </Notes>
  </div>

);

export default Slide11 ;
