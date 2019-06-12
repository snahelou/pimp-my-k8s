import React from 'react';
import {
  Image,
  Text, 
  Notes,
  Link
} from 'spectacle';

const Slide91 = (images) => (
  <div>
    <Image src={images.k8s}/>
    <Notes>
    <br/> - Qui a déjà joué avec k8s?
    <br/>
    <br/> - Je sais pas pour vous, mais la 1er fois que j'ai joué avec k8s y'a bientot 2 ans, c'était plutot ça... 
    </Notes>

  </div>
);


const Slide92 = (images) => (
  <div>
    <Image src={images.curve}/>
    <Link href="https://www.reddit.com/r/kubernetes/comments/aexv09/learning_curves_of_some_docker_orchestration/"><Text textColor="secondary" textSize="0.5em">source</Text></Link>
    <Notes>
      <br/> Je pense qu'il m'a bien fallu 1 semaine pour avoir un cluster, et 1 autre semaine pour démarrer ma 1er app avec un volume
      <br/>
      <br/> On est en 2019, et depuis ça a bien changé. 
      <br/>
      <br/> La magie de l'opensource a fait naitre un nombre incalculable de projet autour de k8s. 
      <br/>
      <br/> L'idée de ce talk c'est pas de dire "celui la est bien, celui la non...". Le but c'est a chaque fois de trouver le bon outils pour le bon problème au travers d'un use case.
    </Notes>

  </div>
);

const Slide93 = (images) => (
  <div>
    <Image src={images.mcgyver}/>
    <Notes>
      <br/> J'espère qu'a la fin de la présentation, demain au bureau, en théorie vous devriez ressembler à ça :) 
    </Notes>

  </div>
);

export {
  Slide91,
  Slide92,
  Slide93
}
