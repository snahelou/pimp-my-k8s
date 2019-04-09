import React from 'react';
import {
  Text,
  Image,
  List,
  Heading,
  Appear,
  Link
} from 'spectacle';

const Slide121 = (images) => (
  <List>
    <Appear><Text bold textColor="secondary" textSize="1.9em" style={{ marginTop: "50px" }} >Is your Helm Charts backward compatible?</Text></Appear>
    <Appear><Text bold textColor="secondary" textSize="1.9em" style={{ marginTop: "50px" }} >Will you broke your production deployment?</Text></Appear>
    <Appear><Heading textColor="tertionary" textSize="2.8em"  style={{ marginTop: "70px" }} >There's no magic pill</Heading></Appear>

  </List>
);

const Slide122 = (images) => (
  <div>
    <Heading textColor="secondary" style={{ marginTop: "-30px" }} >Helm Unittest</Heading>

    <Image
      src={images.unittests}
      style={{ borderWidth: "30", borderColor: "white", borderStyle: "solid", display: "inline-block", marginTop: "10px", width: "100%" }}
    />

    <Link href="https://github.com/lrills/helm-unittest" margin="60px 0 0 0" > github.com/lrills/helm-unittest</Link>

  </div>
);

const Slide123 = (images) => (
  <div>
    <Heading textColor="secondary" style={{ marginTop: "-30px" }}> Helm diff </Heading>

    <Image
      src={images.helmdiff}   
      style={{ borderWidth: "30", borderColor: "white", borderStyle: "solid", display: "inline-block", marginTop: "10px" }}
    />

    <Link href="https://github.com/databus23/helm-diff" >github.com/databus23/helm-diff</Link>

  </div>

);

export {
  Slide121,
  Slide122,
  Slide123
}
