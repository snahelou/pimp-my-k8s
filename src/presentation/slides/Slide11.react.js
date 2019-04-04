import React from 'react';
import {
    Text,
    Image,
    List,
    ListItem,
    Heading,
    Notes,  
    Appear, 
    Link
  } from 'spectacle';

const Slide111 = (images) => (

  <List>
    <Appear><Text bold textColor="secondary" textSize="1.5em" style={{marginTop: "50px"}} >Playing with multiple clusters?</Text></Appear>
    <Appear><Text bold textColor="secondary" textSize="1.5em" style={{marginTop: "50px"}} >Tired of applying configuration in the wrong namespace?</Text></Appear>
    <Appear><Text bold textColor="secondary" textSize="1.5em" style={{marginTop: "50px"}} >Don't want to modify your kubeconfig manually? </Text></Appear>
  </List>


);

const Slide112 = (images) => (
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

const Slide113 = (images) => (
  <div>
        <Heading textColor="secondary"> Kube-PS1 </Heading>

        <Image src={images.gif} style={{ display: "inline-block", marginTop: "40px" , width: "80%"}} />

        <Link href="https://github.com/jonmosco/kube-ps1"> github.com/jonmosco/kube-ps1</Link>

        <Notes>
            <br/> Kubernetes.
        </Notes>
  </div>

);
export {
  Slide111,
  Slide112,
  Slide113
}
