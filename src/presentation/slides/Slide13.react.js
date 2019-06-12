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
  <div>
    <List>
      <Appear><Text bold textColor="secondary" textSize="2.0em" style={{ marginTop: "50px" }} >What the f*ck is going on?!</Text></Appear>
      <Appear><Heading textColor="tertionary" textSize="2.8em"  style={{ marginTop: "70px" }} >Solve problems like a boss</Heading></Appear>
    </List>
    <Notes>
      <p/> Maintenant qu'on sait comment déployer propremement son application, on va pouvoir regarder comment on peut troubleshoot son application sur un cluster distant.
    </Notes>
  </div>
);

const Slide132 = (images) => (
  <div>
    <Heading textColor="secondary" style={{ marginTop: "-30px" }} >Kubefwd</Heading>

    <Image
      src={images.kubefwd}
      style={{ borderWidth: "30", borderColor: "white", borderStyle: "solid", display: "inline-block", marginTop: "40px", width: "100%" }}
    />

    <Link href="https://github.com/txn2/kubefwd" margin="60px 0 0 0" >github.com/txn2/kubefwd</Link>
    <Notes>
      <p/> Le second outils plutot sympa c'est Kubefwd. 
      <p/> A l'image d'un port-forward qui vous permet de créer un tunnel entre vos applis qui tourne à l'interieur du cluster et votre laptop, Kubefwd permet de rappatrier l'ensemble des services d'un namespace en local.
      <p/> Il va aussi modifier votre etc/hosts pour pouvoir appeler les services avec leurs noms internes
    </Notes>
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
      <p /> Le dernier outil qu'on verra, c'est Squash qui va vous permettre de brancher votre débugger (IntelliJ / vscode) directement sur votre appli à distance.
      <p /> 2 modes: default / secure (dedicated namespace + CRD)
    </Notes>
  </div>
);
 
const Slide1340 = (images) => (
  <div>
    <List>
      <Appear><Text bold textColor="secondary" textSize="1.7em" style={{ marginTop: "50px" }} >Ok but how to reduce time to market?</Text></Appear>
      <Appear><Heading textColor="tertionary" style={{ marginTop: "50px" }}>Inner-loop development workflow</Heading></Appear>
    </List>
    <Notes>
      <p/> Ok bon... Débuguer c'est pas juste lire des logs...
      <p/> Ce que j'aimerai c'est pouvoir brancher facilement mon débugger sur un container... 
      <p/> Ce que j'aimerai aussi c'est pouvoir modifier mon code et avoir cette modif directement accessible  dans mon cluster.
      <p/> Le but c'est vraiment d'accélérer le développement des applis. 
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
      <p/> Si on prend cette boucle de developpement, on s'appercoit qu'on peut facilement la transposer sur kubernetes: 
      <p/> Build mon app, tests, build docker, push, deploy...
      <p/> Et si je pouvais directement aller modifier l'application qui tourne dans le cluster, sans passer par toutes ces étapes ?
      <p/> C'est la qu'intervient l'un de mes produits préférés: Téléprésence

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
      <p/> Téléprésence va vous permettre de faire un proxy entre votre cluster k8s et votre laptop et ainsi pouvoir faire tourner votre applis en local. 
      <p/> Au lancement il va donc lancer un pod "proxy" qui viendra prendre la place de votre application et qui forwardera dans les 2 sens le traffic sur votre application
      <p/> Roadmap: Mode multi user qui permettra de transferer qu'une partie du traffic pour ne pas perturber les autres utilisateurs.
    </Notes>
  </div>
);

export {
  Slide131,
  Slide132,
  Slide133,
  Slide1340,
  Slide1341,
  Slide134
}
