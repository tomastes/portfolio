import React from "react";
import { useRouter } from "next/router";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import Link from "next/link";

const Hero = (props) => {
  const router = useRouter();

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to <br /> my personal Portfolio
        </SectionTitle>
        <SectionText>my name is Tomas. and i build some dope shit.</SectionText>
        <Button>
          <Link href="#about">Lets Talk</Link>
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
