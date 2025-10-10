# HunkRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startingLineNumber** | **number** | Line number of beginning of code reference hunk | [default to undefined]
**lines** | **string** | Contextual lines of code that include the referenced feature flag | [optional] [default to undefined]
**projKey** | **string** | The project key | [optional] [default to undefined]
**flagKey** | **string** | The feature flag key | [optional] [default to undefined]
**aliases** | **Array&lt;string&gt;** | An array of flag key aliases | [optional] [default to undefined]

## Example

```typescript
import { HunkRep } from 'launchdarkly-api-typescript';

const instance: HunkRep = {
    startingLineNumber,
    lines,
    projKey,
    flagKey,
    aliases,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
