import React, { useRef } from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        My Name is Michael, I'm a passionate developer but more importantly I'm passionate about technology.
        </SectionText>
        <Button onClick={props.handleclick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);


export default Hero;