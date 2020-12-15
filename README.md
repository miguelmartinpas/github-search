# github-search

App in typescript with webpack and jest (UT) to search data in github

I have used

-   clean code: https://softwarecrafters.io/javascript/clean-code-javascript
-   atomic design: https://atomicdesign.bradfrost.com/chapter-2/
-   UT: jest and enzyme

## Requirements.

NodeJS 10.

## How to run in local.

```sh
npm install
npm start
```

### Test.

```sh
npm run test
```

### Coverage.

```sh
npm run test:coverage
```

### Lint.

```sh
npm run lint
```

## Structure.

-   src/
-   src/App.tsx -> main app
-   src/services
-   src/services/GithubApi/GithubApi.ts -> class to connect to github
-   src/components/molecules
-   src/components/molecules/Search
-   src/components/molecules/Search/Search.tsx -> search input component
-   src/components/molecules/Search/Search.test.ts -> UT for this component
-   src/components/molecules/Table
-   src/components/molecules/Table/Search.tsx -> table component
-   src/components/molecules/Table/Search.styles.css -> responsive styles for table
