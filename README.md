This repository contains a client library for LaunchDarkly's REST API. This client was automatically
generated from our [OpenAPI specification](https://app.launchdarkly.com/api/v2/openapi.json) using a [code generation library](https://github.com/launchdarkly/ld-openapi). View our [sample code](#getting-started) for example usage.

This REST API is for custom integrations, data export, or automating your feature flag workflows. *DO NOT* use this client library to include feature flags in your web or mobile application. To integrate feature flags with your application, read the [SDK documentation](https://docs.launchdarkly.com/sdk).

This client library is only compatible with the latest version of our REST API, version `20220603`. Previous versions of this client library, prior to version 10.0.0, are only compatible with earlier versions of our REST API. When you create an access token, you can set the REST API version associated with the token. By default, API requests you send using the token will use the specified API version. To learn more, read [Versioning](https://apidocs.launchdarkly.com/#section/Overview/Versioning).
## launchdarkly-api-typescript@10.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run ```npm publish```

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install launchdarkly-api-typescript@10.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```
## Sample Code

```ts
import { FeatureFlagsApi, Configuration, FeatureFlagBody } from "launchdarkly-api-typescript";

const apiToken = process.env.LD_API_KEY;
const config = new Configuration({apiKey: apiToken});
let apiInstance = new FeatureFlagsApi(config);

const successCallback = function(res){
    console.log('API called successfully. Returned data: ' + JSON.stringify(res.data));
};
const errorCallback = function(error) {
    console.error('Error!', error);
    process.exit(1);
};

const createSuccessCallback = function(res){
    successCallback(res);

    // Clean up
    apiInstance.deleteFeatureFlag(projectName, keyName).then(successCallback, errorCallback);
};

const projectName = "openapi";
const keyName = "test-typescript";
const flagBody: FeatureFlagBody = {
    name: "Test Flag Typescript",
    key: keyName,
    variations: [{value: [1, 2]}, {value: [3, 4]}, {value: [5]}]
};

apiInstance.deleteFeatureFlag(projectName, keyName)
    .then(() => {
        console.log("flag deleted")
        apiInstance.postFeatureFlag(projectName, flagBody).then(createSuccessCallback, errorCallback);
    })
    .catch((err) => {
        if (err?.response?.status == 404) {
            console.log("No flag to cleanup")
        } else {
            errorCallback(err)
        }
        apiInstance.postFeatureFlag(projectName, flagBody).then(createSuccessCallback, errorCallback);
    })
```
