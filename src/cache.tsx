import { InMemoryCache, makeVar } from "@apollo/client";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Country: {
      fields: {
        area: {
          read (value: number) {
            return value;
          }
        },
        population: {
          read (value: number) {
            return value;
          },
        }
      }
    }
  }
});

export const areaVar = makeVar<number>(0);

export const populationVar = makeVar<number>(0);
