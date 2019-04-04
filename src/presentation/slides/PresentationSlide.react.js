import React from 'react';
import {
    Text,
    Image    
  } from 'spectacle';

const PresentationSlide = (images,photo) => (
  <div>
      <Image src={images.photo} style={{ display: "inline-block", verticalAlign: "top", width: "30%"}} />
      <Text margin="10px 0 0" bold textColor="tertiary"  >
        Nahelou Sébastien
      </Text>
      <Text margin="5px 0 0" textColor="secondary" textSize=".8em"  >
        @snahelouz
      </Text>

      <div style={{ position: 'relative' ,textAlign: 'right', left: '-182px', marginTop: "100px"}}> 
          <Image src={images.zenika} style={{ float: "right", display: "inline-block",verticalAlign: "top", width: "10%", marginTop:"-1px" ,marginLeft: "20px"}}/>
          <Text textColor="secondary" >Zenika Lille familly</Text>
          <Text textSize=".8em" textColor="#b51432" style={{ marginTop: "10px"}} > We are hiring ;) </Text>
      </div>
  </div>

);

export default PresentationSlide;
