# MutableFieldsByStatusRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**not_started** | **{ [key: string]: Array&lt;string&gt;; }** |  | [optional] [default to undefined]
**running** | **{ [key: string]: Array&lt;string&gt;; }** |  | [optional] [default to undefined]
**stopped** | **{ [key: string]: Array&lt;string&gt;; }** |  | [optional] [default to undefined]

## Example

```typescript
import { MutableFieldsByStatusRep } from 'launchdarkly-api-typescript';

const instance: MutableFieldsByStatusRep = {
    not_started,
    running,
    stopped,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
