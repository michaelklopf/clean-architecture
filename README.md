## Clean architecture example from Mark Macneil done in TypeScript
Taken from this link  
https://fullstackmark.com/post/11/better-software-design-with-clean-architecture

Another source for a JavaScript example is here  
https://medium.freecodecamp.org/how-to-write-robust-apps-consistently-with-the-clean-architecture-9bdca93e17b

Done with https://www.typescriptlang.org together with https://github.com/facebookincubator/create-react-app

## Setup
Created project with the command `create-react-app cleanarchitecturereact --scripts-version=react-scripts-ts`.

## Clean architecture
Concept is based on Robert C. Martins work Clean Architecture which is released at the end of 2017.

Application is structured in different layers. The innermost layer consists of entities, which are independent of exterior influences. This allows to test them thoroughly with programmatic tests.

Entities are consumed by use cases/interactors that use the business rules to fulfill the application business rules.

Use cases are communicating via messages over gateways with the entities and surrounding system. The author makes use of the mediator pattern.

## Todo
Add Redux and add presentation logic.
