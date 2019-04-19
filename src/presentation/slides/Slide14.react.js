import React from 'react';
import {
  Image,
  List,
  Heading,
  Link,
  ListItem
} from 'spectacle';

const Slide140 = (images) => (
  <div>
    <Heading textColor="secondary" >Go Further</Heading>

    <List>
      <ListItem style={{ marginTop: "95px"}}>
        <Link href="https://github.com/GoogleContainerTools/skaffold" >github.com/GoogleContainerTools</Link>
      </ListItem>
      <ListItem style={{ marginTop: "15px"}}>
        <Link href="https://cloud.google.com/cloud-code/" >cloud.google.com/cloud-code</Link>
      </ListItem>
      <ListItem style={{ marginTop: "15px"}}>
        <Link href="https://github.com/cloudnativelabs/kube-shell">github.com/cloudnativelabs/kube-shell</Link>
      </ListItem>
      <ListItem style={{ marginTop: "15px"}}>
        <Link href="https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#diff">kubectl diff ♥ </Link>
      </ListItem>
      <ListItem style={{ marginTop: "15px"}}>
        <Link href="https://github.com/kubernetes-sigs/krew">krew </Link>
      </ListItem>
      <ListItem style={{ marginTop: "15px"}}>
        <Link href="https://github.com/aylei/kubectl-debug">github.com/aylei/kubectl-debug </Link>
      </ListItem>
    </List>
  </div>
);

const Slide141 = (images) => (
  <div>
    <Heading textColor="secondary" >Thank you!</Heading>

    <Image
      src={images.question}
      style={{  display: "inline-block", marginTop: "100px", width: "50%" }}
    />

  </div>
);

export {
  Slide140,
  Slide141
}
