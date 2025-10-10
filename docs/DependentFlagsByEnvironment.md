# DependentFlagsByEnvironment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;DependentFlag&gt;**](DependentFlag.md) | A list of dependent flags, which are flags that use the requested flag as a prerequisite | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**_site** | [**Link**](Link.md) |  | [default to undefined]

## Example

```typescript
import { DependentFlagsByEnvironment } from 'launchdarkly-api-typescript';

const instance: DependentFlagsByEnvironment = {
    items,
    _links,
    _site,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
