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
  <List>
    <Appear><Text bold textColor="secondary" textSize="1.7em" style={{ marginTop: "50px" }} >Tired of applying configuration in the wrong cluster/namespace?</Text></Appear>
    <Appear><Heading textColor="tertionary" style={{ marginTop: "50px" }}>Pimp your term!</Heading></Appear>

  </List>
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
      <br /> Demo kubens classique avec un watch
    </Notes>
  </div>
);

const Slide113 = (images) => (
  <div>
    <Heading textColor="secondary"> Kube-PS1 </Heading>

    <Image src={images.gif} style={{ display: "inline-block", marginTop: "40px", width: "80%" }} />

    <Link href="https://github.com/jonmosco/kube-ps1"> github.com/jonmosco/kube-ps1</Link>

    <Notes>
      <br> Kubernetes. </br>
    </Notes>
  </div>

);

const Slide114 = (images) => (
  <Image src={images.png} style={{ display: "inline-block", width: "120%" }} />

);
/* 
  k run nginx --image=nginx --replicas=3
  k expose deployment nginx --port 9999 --type LoadBalancer --target-port 80
  kubetail nginx

      require 'net/http'
      require 'uri'

      (0..10000).each { |i|
        if (i%5==0)
          uri = URI.parse("http://localhost:9999/404")
        else
          uri = URI.parse("http://localhost:9999/")
        end
        response = Net::HTTP.get_response(uri)
        sleep 0.7
      }

*/

const Slide115 = (images) => (
  <div>
    <Heading textColor="secondary"> Kubetail </Heading>

    <Image src={images.gif} 
    style={{ borderWidth: "20", borderColor: "white", borderStyle: "solid",display: "inline-block", marginTop: "40px", width: "180%" }} />

    <Link href="https://github.com/johanhaleby/kubetail"> github.com/johanhaleby/kubetail</Link>
    <p/>
    <Link href="https://github.com/wercker/stern"> github.com/wercker/stern</Link>

    <Notes>
      <br /> Demo tail via selecteur multi pod (sur un nginx par exemple?)
      <br /> Demo tail 2 containers 1 pod ?
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
        {/* tubectl  / tubectl +syst get po kube% / tubectl logs -f nginx%% / tubectl +def delete po nginx% --force --grace-period 0 / */}
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
  Slide117
}
