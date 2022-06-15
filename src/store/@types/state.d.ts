type Entities = {
  address: Address;
};

type UI = {
  bugs: Bugs;
};

type StateInstance = {
  entities: Entities;
  ui: UI;
};

type getState = () => StateInstance;
