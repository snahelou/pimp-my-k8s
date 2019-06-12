import React from 'react';
import {
  Text,
  Image,
  List,
  Heading,
  Notes,
  Appear,
  Link,
  ListItem
} from 'spectacle';

const Slide111 = (images) => (
  <div>
  <List>
    <Appear><Text bold textColor="secondary" textSize="1.7em" style={{ marginTop: "50px" }} >What's the first thing you do when you discover a new tool?</Text></Appear>
    <Appear><Heading textColor="tertionary" style={{ marginTop: "50px" }}>Pimp your term!</Heading></Appear>
  </List>
    <Notes>
    <br /> Que fait-on quand on découvrir un nouvel outil comme Kubernetes? 
  </Notes>
  </div>
);

const Slide116 = (images) => (
  <div>
    <Heading textColor="secondary">Misc</Heading>

    <div style={{ position: 'relative' ,textAlign: 'left',  marginTop: "10px"}}> 

    <Image
      src={images.pimp}
      style={{float: "left", borderWidth: "10", borderColor: "white", borderStyle: "solid", display: "inline-block",  marginTop:"-30px" ,marginLeft: "20px", marginRight: "40px", width: "30%" }}
    />

    <List>
      <ListItem style={{ marginTop: "95px"}}><Link href="https://github.com/robbyrussell/oh-my-zsh">robbyrussell/oh-my-zsh</Link></ListItem>
      <ListItem style={{ marginTop: "15px"}}><Link href="https://github.com/ahmetb/kubectl-aliases">ahmetb/kubectl-aliases</Link></ListItem>
      <ListItem style={{ marginTop: "15px"}} ><Link href="https://kubernetes.io/docs/tasks/tools/install-kubectl/">Kubectl autocompletion</Link></ListItem>
      <ListItem style={{ marginTop: "15px"}} ><Link href="https://github.com/kubernetes-sigs/krew">Kubernetes Krew</Link></ListItem>
    </List>
  </div>
  </div>
);

const Slide112 = (images) => (
  <div>
    <Heading textColor="secondary">Kubectx</Heading>

    <Image
      src={images.kubectxdemo}
      style={{ borderWidth: "30", borderColor: "white", borderStyle: "solid", display: "inline-block", marginTop: "60px", width: "100%" }}
    />

    <Link href="https://github.com/ahmetb/kubectx" margin="60px 0 0 0" > github.com/ahmetb/kubectx</Link>

    <Notes>
      <br /> Et donc dans la continuité, kubens qui va vous permette de switcher de context/namespace très rapidement
      <br /> 
      <br /> Plus besoin de taper 200 fois dans la journée l'option -n de vos commandes. 
    </Notes>
  </div>
);

const Slide113 = (images) => (
  <div>
    <Heading textColor="secondary"> Kube-PS1 </Heading>

    <Image src={images.gif} style={{ display: "inline-block", marginTop: "20px", width: "90%" }} />

    <Link href="https://github.com/jonmosco/kube-ps1"> github.com/jonmosco/kube-ps1</Link>

    <Notes>
      <br/> Ensuite, classique, on tune son PS1
      <br/>
      <br/> On blague mais c est super important, ça permet d'éviter de se tromper de cluster ou de namespace par exemple :) 
      <br/>
      <br/> On croit être en local, pas de bol on est sur un cluster remote, et hop on a vite fait de delete un namespace... 
    </Notes>
  </div>

);


const Slide118 = (images) => (
  <div>
    <Heading textColor="secondary"> K9S </Heading>

    <Image src={images.gif} style={{ display: "block", marginTop: "40px", width: "110%", maxWidth: "110%" }} />

    <Link href="https://github.com/derailed/k9s">github.com/derailed/k9s</Link>

    <Notes>
      <br/> Pour ceux qui souhaite avoir le swag ultime, c'est K9S qu'il vous faut... De la couleur, une UI dans un terminal, avec ça, vous êtes sur de finir dans la prochaine saison de NCIS 
      <br/> 
      <br/> Plus sérieusement, pour ceux qui galère à retenir les commandes kubectl, c'est super pratique. 
      <br/> 
      <br/> Vous allez pouvoir voir le status de vos pods, logs, lancer un shell, etc. 
    </Notes>
  
  </div>

);

const Slide114 = (images) => (
  <div>
    <Image src={images.png} style={{ display: "inline-block", width: "120%" }} />
    <Notes>
      <p /> La première chose qu'on fait quand on un problème c'est évidement d'aller lire les logs... 
      <p/> Mais sur une application qui auto-scale c'est pas toujours évidement de suivre sur l'ensemble des réplicas...  
    </Notes>
  </div>
);

const Slide115 = (images) => (
  <div>
    <Heading textColor="secondary"> Kubetail </Heading>

    <Image src={images.gif} 
    style={{ borderWidth: "20", borderColor: "white", borderStyle: "solid",display: "inline-block", marginTop: "40px", width: "180%" }} />

    <Link href="https://github.com/johanhaleby/kubetail"> github.com/johanhaleby/kubetail</Link>
    <p/>
    <Link href="https://github.com/wercker/stern"> github.com/wercker/stern</Link>

    <Notes>
      <p/> Kubetail ou Stern permette de suivre les logs des différents containers au seins d'un pod 
      <p/> Mais aussi de suivre les logs des nombreux réplicas d'un déploiement 
      <p/> à l'image d'un dockercompose, vous retrouverez 1 couleur par pods.
    </Notes>
  </div>

);


const Slide117 = (images) => (
  <div>
    <Heading textColor="secondary"> Tubekit </Heading>

    <Image src={images.tubectl} 
    style={{ borderWidth: "30", borderColor: "white", borderStyle: "solid", display: "inline-block", marginTop: "40px", width: "70%", marginBottom: "30px" }} />

    <Link href="https://github.com/reconquest/tubekit" > github.com/reconquest/tubekit</Link>

    <Notes>
      <br /> Un autre outil sympa c'est Tubectl... C'est un kubectl sous stéroid qui va vous permettre de supporter les regex.
      <br /> 
      <br />  Exemple: Supprimer moi tous les pods qui commence par nginx*
      <br />  ca evite de devoir se souvenir de tous les selecters de label a chaque fois.
    </Notes>
  </div>

);

export {
  Slide111,
  Slide112,
  Slide113,
  Slide114,
  Slide115,
  Slide116,
  Slide117,
  Slide118
}
