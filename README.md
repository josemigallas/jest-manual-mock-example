# jest-manual-mock-example

A very simplistic example of how to mock our own modules in React and React Native using Jest.

Inspired by https://stackoverflow.com/q/54213418/5466997.

### Run the Example

```
$ npm i && npm test
```

### Steps by Step

1. Add a folder named **__mocks__** at the same level as the module you want to mock:
```
src
├── config
│   ├── __mocks__
│   │   └── MyModule.js
│   └── MyModule.js
```

2. In your test file, call `jest#mock` with the correct path to your module (the original one!):
```
import React from "react";
import Enzyme from "enzyme";

jest.mock("path/to/MyModule")

// your tests down here
// ...
```
And require your component in the test block, not on top:
```
it("should pass", () => {
  const Comp = require("./Comp").default;
  
  // your actual test here
```
Otherwise your mock won't be injected.

3. Alternatively, you may define your own mocks directly in the test!
```
jest.mock("./config/i18n", () => { /* your mock implementation here! */});
```



