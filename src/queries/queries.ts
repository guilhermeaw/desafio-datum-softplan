import { gql } from "@apollo/client";

const GET_COUNTRIES = gql`
  query GetCountries {
    Country {
      name
      area
      population
      capital
      location {
        latitude
        longitude
      }
      numericCode
      topLevelDomains {
        name
      }
      flag {
        svgFile
      }
    }
  }
`;

export { GET_COUNTRIES };
