import React from "react";
import { Input,  } from "../Generic/idex";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Input width={200} placeholder={"test"} />
      {/* <Button>test</Button>  */}
    </Container>
  );
};

export default Home;
