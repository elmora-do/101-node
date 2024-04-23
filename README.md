npm init
// add .nvmrc
// add .npmrc

// these may not be required, gts uses a specific version of TS
npm add -D typescript
npx tsc --init

npm add -D gts // style, lint and code corrector altogether
npx gts init