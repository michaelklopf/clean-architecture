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

The application is structured in different layers. The innermost layer consists of entities, which are independent of exterior influences. This allows to test them thoroughly with programmatic tests.

Entities are consumed by use cases/interactors that use the business rules to fulfill the application business rules.

Interfaces are communicating via messages with the use cases and surrounding system. The author makes use of the mediator pattern.

The use case makes use of gateways that describe how external services and repositories should be consumed. The gateways are injected into the use case. Use cases only know what behavior the gateways offer but not how it is implemented.

App.tsx in this example is the interface adapter. All necessary components are connected here. The interface sets up the repositories and calls the use case via communication with messages. The response message is handed to the presenter which generates a presentation or model of the data. The interface presents that to the user.

## Todo
Submit form data and present result to user.
