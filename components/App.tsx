import React from "react";

import { AppContainer } from "./styles";
import { Column } from "./Column";
import { Card } from "./Card";
import { AddNewItem } from './AddNewItem'

export default () => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold" />{" "}
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />{" "}
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />{" "}
      </Column>
      <AddNewItem toggleButtonText="+ Add another list test" onAdd={console.log} />
    </AppContainer>
  );
};

// export default App;
