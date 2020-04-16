import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

const uri = 'http://localhost:3000/graphql'; // <-- add the URL of the GraphQL server here

export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {
}


// /**Used for general error handling on qraphQL, graphQL Syntax Errors and network connections**/
// export const errorHandler = onError(({graphQLErrors, networkError}) => {
//   if (graphQLErrors)
//     graphQLErrors.map(({message, locations, path}) => {
//       console.error('[GraphQL error]: Message: ' + message + ' Path: ' + path);
//       console.error('[GraphQL error location]:', locations);
//       this.errorHandlerService.navigateToErrorComponent();
//     });
//   if (networkError) {
//     let networkErrors: any = networkError;
//     networkErrors.error.errors.forEach(error => console.error(`[Network error]:`, error))
//   }
// });
