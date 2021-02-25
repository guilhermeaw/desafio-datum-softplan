interface TopLevelDomain {
  name: string;
}

interface Location {
  latitude: number;
  longitude: number;
}

interface Flag {
  svgFile: string;
}

export interface Country {
  name: string;
  area: number;
  population: number;
  capital: string;
  location: Location;
  numericCode: string;
  topLevelDomains: TopLevelDomain[];
  flag: Flag;
}
