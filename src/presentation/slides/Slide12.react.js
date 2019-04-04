import React from 'react';
import {
    Text,
    Image,
    Heading,
    Notes,   
    Link
  } from 'spectacle';

const Slide12 = (images) => (
  <div>
        <Heading textColor="secondary"> Kube-PS1 </Heading>

        <Image src={images.gif} style={{ display: "inline-block", marginTop: "40px" , width: "80%"}} />

        <Link href="https://github.com/jonmosco/kube-ps1"> github.com/jonmosco/kube-ps1</Link>

        <Notes>
            <br/> Kubernetes.
        </Notes>
  </div>

);

export default Slide12 ;
