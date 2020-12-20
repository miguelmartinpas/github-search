# github-search

App in typescript with webpack and jest (UT) to search data in github

I have used

-   clean code: https://softwarecrafters.io/javascript/clean-code-javascript
-   atomic design: https://atomicdesign.bradfrost.com/chapter-2/
-   UT: jest and enzyme
-   prettier and eslint
-   github actions to CI/CD
-   github pages (https://miguelmartinpas.github.io/github-search/)
-   Webpack + babel
-   Coveralls: to check coverage (https://coveralls.io/github/miguelmartinpas/github-search)
-   Responsive with flex

## Requirements.

NodeJS 10.

## How to run in local.

```sh
npm install
npm start
```

App will run in localhost:8080

You can check app in https://miguelmartinpas.github.io/github-search/

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

## Mixin

check file src/components/molecules/DynamicTable/DynamicTable.styles.less

## Structure.

-   src/
-   src/App.tsx -> main app
-   src/services
-   src/services/Api/Github.ts -> class to connect to github
-   src/components/molecules
-   src/components/molecules/Search
-   src/components/molecules/Search/Search.tsx -> search input component
-   src/components/molecules/Search/Search.test.ts -> UT for this component
-   src/components/molecules/DynamicTable
-   src/components/molecules/DynamicTable/DynamicTable.tsx -> table component
-   src/components/molecules/DynamicTable/DynamicTable.test.tsx -> table component
-   src/components/molecules/DynamicTable/DynamicTable.styles.less -> responsive styles for table
-   src/components/oraganisms/Dashboard/Dashboard.tsx -> table component
-   src/components/oraganisms/Dashboard/Dashboard.test.tsx -> table component
-   src/components/oraganisms/Dashboard/Dashboard.styles.less -> responsive styles for table
