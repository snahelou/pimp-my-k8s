import React from 'react';
import {
    Text,
    Image,
    Heading,
    Notes,   
    Link
  } from 'spectacle';

const Slide13 = (images) => (
  <div>
        <Heading textColor="secondary"> Kubetail </Heading>

        <Image src={images.gif} style={{ display: "inline-block", marginTop: "40px" , width: "180%"}} />

        <Link href="https://github.com/johanhaleby/kubetail"> github.com/johanhaleby/kubetail</Link>
        <Notes>
            <br/> Demo tail via selecteur multi pod (sur un nginx par exemple?)
            <br/> Demo tail 2 containers 1 pod ? 
        </Notes>
  </div>

);

export default Slide13 ;

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