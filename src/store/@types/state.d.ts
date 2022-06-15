interface Entities {
  address: Address;
}

interface UI {
  bugs: Bugs;
}

interface StateInstance {
  entities: Entities;
  ui: UI;
}

type getState = () => StateInstance;
