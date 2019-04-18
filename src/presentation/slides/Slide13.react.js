import React from 'react';
import {
  Text,
  Image,
  List,
  Heading,
  Appear,
  Link
} from 'spectacle';

const Slide131 = (images) => (
  <List>
    <Appear><Text bold textColor="secondary" textSize="2.0em" style={{ marginTop: "50px" }} >What the f*ck is going on?!</Text></Appear>
    <Appear><Heading textColor="tertionary" textSize="2.8em"  style={{ marginTop: "70px" }} >Solve problems like a boss</Heading></Appear>

  </List>
);

const Slide132 = (images) => (
  <div>
    <Heading textColor="secondary" style={{ marginTop: "-30px" }} >Kubefwd</Heading>

    <Image
      src={images.kubefwd}
      style={{ borderWidth: "30", borderColor: "white", borderStyle: "solid", display: "inline-block", marginTop: "40px", width: "100%" }}
    />

    <Link href="https://github.com/txn2/kubefwd" margin="60px 0 0 0" >github.com/txn2/kubefwd</Link>

  </div>
);


const Slide133 = (images) => (
  <div>
    <Heading textColor="secondary" style={{ marginTop: "-30px" }} >Squash</Heading>

    <Image
      src={images.squash}
      style={{ borderWidth: "30", borderColor: "white", borderStyle: "solid", display: "inline-block", marginTop: "40px", width: "100%" }}
    />

    <Link href="https://github.com/solo-io/squash" margin="60px 0 0 0" >github.com/solo-io/squash</Link>

  </div>
);

{/* Telepresence */}
 

const Slide134 = (images) => (
  <div>
    <Heading textColor="secondary" style={{ marginTop: "-30px" }} >Telepresence</Heading>

    <Image
      src={images.telepresence}
      style={{ borderWidth: "30", borderColor: "white", borderStyle: "solid", display: "inline-block", marginTop: "40px", width: "100%" }}
    />

    <Link href="https://www.telepresence.io" margin="60px 0 0 0" >www.telepresence.io</Link>

  </div>
);

export {
  Slide131,
  Slide132,
  Slide133,
  Slide134
}
