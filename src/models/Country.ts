interface TopLevelDomain {
  name: string;
}

export interface Country {
  name: string;
  capital: string;
  numericCode: string;
  area: number;
  population: number;
  topLevelDomains: TopLevelDomain[];
}
