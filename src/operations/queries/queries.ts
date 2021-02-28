import { gql } from "@apollo/client";

const GET_COUNTRIES = gql`
  query GetCountries($searchQuery: String!) {
    Country(filter: {
      name_contains: $searchQuery
    }) {
      _id
      name
      area
      population
      capital
      location {
        latitude
        longitude
      }
      topLevelDomains {
        name
      }
      flag {
        svgFile
      }
    }
  }
`;

const GET_COUNTRY = gql`
  query GetCountry($id: String!) {
    Country(_id: $id) {
      _id
      name
      area
      population
      capital
      location {
        latitude
        longitude
      }
      topLevelDomains {
        name
      }
      flag {
        svgFile
      }
    }
  }
`;

export { GET_COUNTRIES, GET_COUNTRY };
