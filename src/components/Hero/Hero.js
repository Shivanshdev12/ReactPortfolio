import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi. I'm Shivansh Mehrotra. B.Tech student of Final Year from
        JSSATE,Noida. Currently Working on Reactjs,Nextjs and learning Nodejs.
      </SectionText>
      <Button onClick={() => (window.location = "https://gmail.com")}>
        Contact me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
