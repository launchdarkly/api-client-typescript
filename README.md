This repository contains a client library for LaunchDarkly's REST API. This client was automatically
generated from our [OpenAPI specification](https://github.com/launchdarkly/ld-openapi).

This REST API is for custom integrations, data export, or automating your feature flag workflows. *DO NOT* use this client library to include feature flags in your web or mobile application. To integrate feature flags with your application, please see the [SDK documentation](https://docs.launchdarkly.com/v2.0/docs)

## Sample Code

```ts
import { FeatureFlagsApi, FeatureFlagsApiApiKeys, FeatureFlagBody } from "launchdarkly-api-typescript";

let apiInstance = new FeatureFlagsApi();
const apiKey = process.env.LD_API_KEY || '';
apiInstance.setApiKey(FeatureFlagsApiApiKeys.Token, apiKey);

const successCallback = function(data){
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
};
const errorCallback = function(error) {
    console.error('Error!', error);
    process.exit(1);
};

const createSuccessCallback = function(data){
    successCallback(data);

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

apiInstance.postFeatureFlag(projectName, flagBody).then(createSuccessCallback, errorCallback);
```
