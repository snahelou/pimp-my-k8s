import React from 'react';
import {
    Text,
    Image,
    Heading,
    Notes,   
    Link
  } from 'spectacle';

const Slide13 = (images) => (
  <div>
        <Heading textColor="secondary"> Kubetail </Heading>

        <Image src={images.gif} style={{ display: "inline-block", marginTop: "40px" , width: "80%"}} />

        <Link href="https://github.com/johanhaleby/kubetail"> github.com/johanhaleby/kubetail</Link>

        <Notes>
            <br/> Demo tail via selecteur multi pod (sur un nginx par exemple?)
            <br/> Demo tail 2 containers 1 pod ? 
        </Notes>
  </div>

);

export default Slide13 ;
