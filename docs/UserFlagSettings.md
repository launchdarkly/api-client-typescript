# UserFlagSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**{ [key: string]: UserFlagSetting; }**](UserFlagSetting.md) | An array of flag settings for the user | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]

## Example

```typescript
import { UserFlagSettings } from 'launchdarkly-api-typescript';

const instance: UserFlagSettings = {
    items,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
