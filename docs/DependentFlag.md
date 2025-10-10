# DependentFlag


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The flag name | [optional] [default to undefined]
**key** | **string** | The flag key | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**_site** | [**Link**](Link.md) |  | [default to undefined]

## Example

```typescript
import { DependentFlag } from 'launchdarkly-api-typescript';

const instance: DependentFlag = {
    name,
    key,
    _links,
    _site,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
