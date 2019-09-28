import * as React from "react";
import { Scroll } from "react-scroll";
import { Image, PageContainerAbout, SectionContainer } from "./components";
import { Text } from "../../components";

export const About = () => (
  <Scroll.Element name="about-section">
    <SectionContainer>
      <PageContainerAbout>
        <Image />
        <Text>
          Hey, I'm Lenny - a special kind of artist 😂, a travelling tattoo
          artist. I love my work, challenges and fun.
        </Text>
      </PageContainerAbout>
    </SectionContainer>
  </Scroll.Element>
);
