interface Bug {
  userId: string;
  id: string;
  resolved: boolean;
}

interface Bugs {
  list: Bug[];
  loading: boolean;
  loaded: boolean;
  lastFetch: number;
}
