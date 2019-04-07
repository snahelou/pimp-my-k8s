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

const Slide101 = (images) => (
  <List>
    <Appear><Heading textColor="secondary">Do you know all resources?</Heading></Appear>
    <Appear><Heading textColor="tertionary">Because you don't need!</Heading></Appear>
  </List>
);

const Slide102 = (images) => (
  <div>
    <Heading textColor="secondary">Kubectl explain</Heading>

    <Image
      src={images.explain}
      style={{ borderWidth: "30", borderColor: "white", borderStyle: "solid", display: "inline-block", marginTop: "60px", width: "100%" }}
    />

  </div>
);

const Slide104 = (images) => (
  <div>
    <Heading textColor="secondary" style={{ marginBottom: "10px" }} >Dry-Run</Heading>

    <Image 
      src={images.dryrun} 
      style={{ borderWidth: "30", borderColor: "white", borderStyle: "solid", display: "inline-block", marginTop: "10px", width: "100%" }}
    />
  </div>

);

const Slide105 = (images) => (
  <div>
    <Heading textColor="secondary" style={{ marginBottom: "10px" }} >Kube-Score</Heading>

    <Image 
      src={images.kubescore} 
      style={{ borderWidth: "30", borderColor: "white", borderStyle: "solid", display: "inline-block", marginTop: "10px", width: "100%" }}
    />

    <Link href="https://github.com/zegl/kube-score" margin="60px 0 0 0" > github.com/zegl/kube-score</Link>

  </div>

);


export {
  Slide101,
  Slide102,
  Slide104,
  Slide105
}
