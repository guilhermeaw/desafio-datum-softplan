import { gql } from "@apollo/client";

const GET_COUNTRIES = gql`
  query GetCountries($searchQuery: String!) {
    Country(filter: {
      name_contains: $searchQuery
    }) {
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
