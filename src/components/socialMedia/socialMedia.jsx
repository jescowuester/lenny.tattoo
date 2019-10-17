import * as React from "react";
import {
  Number,
  Divider,
  SocialMediaContainer,
  Container,
  CustomIcon
} from "./components";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export const SocialMedia = () => (
  <SocialMediaContainer>
    <Number href="tel:+ 47 939 39 343">+ 47 93939 343</Number>
    <Divider />
    <Container>
      <CustomIcon
        component={<FaInstagram />}
        ariaLabel="Go to Linnard Kristovski's Instagram page"
        link="https://www.instagram.com/lenny.tattoo/"
      />
      <CustomIcon
        component={<FaFacebook />}
        ariaLabel="Go to Linnard Kristovski's Facebook page"
        link="https://www.facebook.com/LennyTattoos/"
      />
    </Container>
  </SocialMediaContainer>
);
