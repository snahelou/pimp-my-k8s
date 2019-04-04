import React from 'react';
import {
    List,
    Appear,
    Image,
    Link
  } from 'spectacle';

const Slide13 = (images) => (
  <List>
    <Appear>
        <Image src={images.png} style={{ display: "inline-block", width: "120%"}} />

    </Appear>

  </List>

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