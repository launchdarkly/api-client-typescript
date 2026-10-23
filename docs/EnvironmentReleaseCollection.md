# EnvironmentReleaseCollection

One page of environment releases for one flag in one environment, newest first.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;EnvironmentRelease&gt;**](EnvironmentRelease.md) | The releases on this page. | [default to undefined]
**totalCount** | **number** | The total number of releases that match the request, before &#x60;limit&#x60; and &#x60;offset&#x60; are applied. | [default to undefined]
**_links** | [**{ [key: string]: EnvironmentReleaseLink; }**](EnvironmentReleaseLink.md) | Links to this page (&#x60;self&#x60;), the flag (&#x60;parent&#x60;), and, where they apply, the &#x60;first&#x60;, &#x60;prev&#x60;, &#x60;next&#x60;, and &#x60;last&#x60; pages. | [optional] [default to undefined]

## Example

```typescript
import { EnvironmentReleaseCollection } from 'launchdarkly-api-typescript';

const instance: EnvironmentReleaseCollection = {
    items,
    totalCount,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
