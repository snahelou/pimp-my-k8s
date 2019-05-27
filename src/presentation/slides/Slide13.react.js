import React from 'react';
import {
  Text,
  Image,
  List,
  Heading,
  Appear,
  Notes,
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
    <br/>
    <Link href="https://www.youtube.com/watch?v=jkcFFr8lLTA" margin="60px 0 0 0" >youtube.com/watch?v=jkcFFr8lLTA</Link>

    <Notes>
      <br /> 2 modes: default / secure (dedicated namespace + CRD)
      <br /> Loop (new product) 
    </Notes>
  </div>
);
 
const Slide1341 = (images) => (
  <div>

    <Image
      src={images.inner}
      style={{ marginTop: "-40px", width: "70%" }}
    />

    <Link href="https://mitchdenny.com/the-inner-loop/" margin="60px 0 0 0" >mitchdenny.com/the-inner-loop/</Link>

    <Notes>
      <br /> A l'image de kubernetes: Build mon app, tests, build docker, push, deploy...
    </Notes>
  </div>
);

const Slide134 = (images) => (
  <div>
    <Heading textColor="secondary" style={{ marginTop: "-30px" }} >Telepresence</Heading>

    <Image
      src={images.telepresence}
      style={{ borderWidth: "30", borderColor: "white", borderStyle: "solid", display: "inline-block", marginTop: "40px", width: "100%" }}
    />

    <Link href="https://www.telepresence.io" margin="60px 0 0 0" >www.telepresence.io</Link>
    <br/>
    <Link href="https://www.youtube.com/watch?v=txVzvat3_To" margin="60px 0 0 0" >youtube.com/watch?v=txVzvat3_To</Link>

    <Notes>
      <br /> Multi user mode
      <br /> 
    </Notes>
  </div>
);

export {
  Slide131,
  Slide132,
  Slide133,
  Slide1341,
  Slide134
}
