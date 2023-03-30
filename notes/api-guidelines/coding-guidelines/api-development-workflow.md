# API Development Workflow

1-Design 
2-Develop 
3-Code Review 
4-QA on Staging 
5-Production Deployment 
6-QA on Production

1. **Draft Design the API First (ideally during Grooming, but can also be during starting working on the US/bug)**
   1. Analyze business requirements
   2.  Identify affordances

       > e.g.: Create user, Submit payment, Search for a deck
   3.  Identify resources

       > e.g.: User, Card, Deck
   4.  Identify relations

       > e.g.: User has many Decks via curation relation, all of the required affordances should be mapped to relations.
   5. Formalize the design in the [Open API Specification](http://swagger.io/specification/) (OAS, formerly known as "Swagger") version 2.x or 3.0.x format.
      1. Use [Stoplight](https://earth.stoplight.io/) for the whole design process to the publication of the API specification.
      2. Create a new version from the `main` version of the API on stoplight:
   6. Follow the API Guidelines
      1. See **Principles** & **Conventions** sections.
      2. Make sure to provide enough description about:
         1. **What** is the endpoint about?
         2. **Why** is the endpoint created?
         3. **How** in general would the endpoint accomplish that?
      3. If there are parameters, make sure have them described.
      4. Make sure to provide list of possible errors.
   7. Review the Endpoint Design
   8. Comment the link to the finalized Design to US/bug on Target Process.
   9. Publish the finalized Draft Design to Slack channel #api-design-first.
      1. The slack message should notify everyone so that everyone has a chance to feedback on the design.
      2. There is a link to the Feature/US/bug.
      3. This is a link to the finalized Draft Design on Stoplight.
      4. A brief description of what changes was made to the Endpoint or if this is a new Endpoint.
2. **Develop the API**
   1. Check out finalized Draft Design from Stoplight.
   2. Set up Integration Test Cases to make sure all cases mentioned in the Design are covered (error responses, status codes...).
   3. Set up Integration Test Cases for the Endpoint as normal development.
   4. Implement the Endpoint.
   5. Properly add decorators for the Endpoint.
      1. **The decorators is the single source of truth of API Documentation**. Everything else (Swagger file, API Documentation deployed on Redoc, Stoplight...) are just deprived versions from the decorators.
3. **Code Review**
   1. See [here](./review-code-api-doc.md) for API Doc Code Review process.
   2. Code Reviewer(s) compare the implementation with the original Draft Design.
   3. Code Reviewer(s) continue evaluating the Endpoint and discuss to ensure the end result is satisfying.
4. **QA Verification on Staging**
   1. QA(s) verify the outputted endpoint and API Doc.
   2. QA(s) compare the implementation with the original Draft Design.
   3. QA(s) continue evaluating the Endpoint and discuss to ensure the end result is satisfying.
   4. QA(s) get final confirmation of the finalized implement Endpoint with Product if needed.
5. **Production Deployment**
   1. The endpoint and API Doc is automatically deployed to Production through the Production Development Pipeline.
   2. Pipeline auto push latest swagger file to Stoplight to used for next round of API Design First.
6. **QA Verification on Production**
