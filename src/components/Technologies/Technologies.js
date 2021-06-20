import React from "react";
import { DiFirebase, DiReact, DiZend, DiRasberryPi } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of front end technologies like JavaScript,Reactjs
      and Bootstrap, I'm also learning Backend development and also have
      knowledge of Data-Structures and Algorithm.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and DataBases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiRasberryPi size="3rem" />
        <ListContainer>
          <ListTitle>Electronics</ListTitle>
          <ListParagraph>
            Experience with <br />
            Arduino
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
