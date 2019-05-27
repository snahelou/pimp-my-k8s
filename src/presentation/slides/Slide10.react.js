import React from 'react';
import {
  Image,
  List,
  Heading,
  Appear,
  Notes,
  Link
} from 'spectacle';

const Slide101 = (images) => (
  <div>
    <List>
      <Appear><Heading textColor="secondary">Do you know all resources?</Heading></Appear>
      <Appear><Heading textColor="tertionary">Because you don't need!</Heading></Appear>
    </List>
    <Notes>
      <p/>Donc on va commencé par le commencement... Le YAML des ressources... 
      <p/>Y'a des gens qui aiment ça dans la salle ?  
    </Notes>
  </div>

);

const Slide102 = (images) => (
  <div>
    <Heading textColor="secondary">Kubectl explain</Heading>

    <Image
      src={images.explain}
      style={{ borderWidth: "30", borderColor: "white", borderStyle: "solid", display: "inline-block", marginTop: "60px", width: "100%" }}
    />
    <Notes>
      <p/>Commande native
      <p/>pas besoin d'ouvrir la doc,  en plus vous pouvez chercher en profondeur chacun des champs.
    </Notes>

  </div>
);

const Slide104 = (images) => (
  <div>
    <Heading textColor="secondary" style={{ marginBottom: "10px" }} >Kubectl dry-run</Heading>

    <Image 
      src={images.dryrun} 
      style={{ borderWidth: "30", borderColor: "white", borderStyle: "solid", display: "inline-block", marginTop: "10px", width: "100%" }}
    />
    <Notes>
      <p/>Idem que pour le explain, le dry-run est natif
      <p/>Bootstrap rapidement les ressources basiques
    </Notes>
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
    <br/>
    <Link href="https://kubesec.io/">kubesec.io</Link>
    <Notes>
      <p/>Une fois que vous avez écrit du yaml, ça peut etre cool de vérifier que rien n'a été oublié. 
      <p/>Kube-score ça peut etre utile quand vous démarrez dans k8s. 
    </Notes>
  </div>

);


export {
  Slide101,
  Slide102,
  Slide104,
  Slide105
}
