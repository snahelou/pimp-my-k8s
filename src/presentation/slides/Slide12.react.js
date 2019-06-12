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

const Slide121 = (images) => (
  <div>
  <List>
    <Appear><Text bold textColor="secondary" textSize="1.9em" style={{ marginTop: "50px" }} >Is your Helm Charts backward compatible?</Text></Appear>
    <Appear><Text bold textColor="secondary" textSize="1.9em" style={{ marginTop: "50px" }} >Will you broke your production deployment?</Text></Appear>
    <Appear><Heading textColor="tertionary" textSize="2.8em"  style={{ marginTop: "70px" }} >There's no magic pill</Heading></Appear>
  </List>
  <Notes>
      <p/>Donc la on a générer du yaml de qualité donc on va enfin pouvoir déployer... 
      <p/> 
      <p/>Et qu'on aime ou non, pour l'instant la façon la plus utilisée pour déployer une app dans un clusger k8s, ça reste Helm :) 
      <p/> 
      <p/>Et donc (un des) problèmes avec Helm c'est ....
      <p/> - Comment être sur de la rétrocompatibilité de ses charts? 
      <p/> - Comment être sur de ne pas tout écraser lors d'une maj d'un values?
  </Notes>
  </div>
);

const Slide122 = (images) => (
  <div>
    <Heading textColor="secondary" style={{ marginTop: "-30px" }} >Helm Unittest</Heading>

    <Image
      src={images.unittests}
      style={{ borderWidth: "30", borderColor: "white", borderStyle: "solid", display: "inline-block", marginTop: "10px", width: "100%" }}
    />

    <Link href="https://github.com/lrills/helm-unittest" margin="60px 0 0 0" > github.com/lrills/helm-unittest</Link>
    <Notes>
      <p/>Pour le premier point, y'a un plugin Helm qui permer d'écrire des tests unitaires en fonction des variables qui vous spécifiez dans vos fichiers de valeurs helm... 
      <p/> Ca permet d'avoir plusieurs scénarios et voir très rapidement si vos changements sont retrocompatibles ou non.
  </Notes>
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
    <Notes>
      <p/>Pour le second problème (comment je m'assure que mon upgrade ne va modifier que les ressources que j'ai ciblé), il y a un autre plugin qui s'appelle helm-diff, et qui va vous permettre de faire un diff entre la release déployée, et la nouvelle.  
      <p/>
  </Notes>
  </div>

);

export {
  Slide121,
  Slide122,
  Slide123
}
