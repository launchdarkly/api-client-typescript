# EnvironmentReleaseClause

One targeting clause of a rule created for the release.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contextKind** | **string** | Context kind the clause applies to. Omit for &#x60;segmentMatch&#x60;. | [optional] [default to undefined]
**attribute** | **string** |  | [default to undefined]
**op** | **string** | One of &#x60;in&#x60;, &#x60;endsWith&#x60;, &#x60;startsWith&#x60;, &#x60;matches&#x60;, &#x60;contains&#x60;, &#x60;lessThan&#x60;, &#x60;lessThanOrEqual&#x60;, &#x60;greaterThan&#x60;, &#x60;greaterThanOrEqual&#x60;, &#x60;before&#x60;, &#x60;after&#x60;, &#x60;segmentMatch&#x60;, &#x60;semVerEqual&#x60;, &#x60;semVerLessThan&#x60;, &#x60;semVerGreaterThan&#x60;.  | [default to undefined]
**values** | **Array&lt;any&gt;** | JSON primitives only (strings, numbers, booleans); objects, arrays, and null are rejected. | [default to undefined]
**negate** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { EnvironmentReleaseClause } from 'launchdarkly-api-typescript';

const instance: EnvironmentReleaseClause = {
    contextKind,
    attribute,
    op,
    values,
    negate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
