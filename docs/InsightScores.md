# InsightScores


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**period** | [**InsightPeriod**](InsightPeriod.md) |  | [default to undefined]
**lastPeriod** | [**InsightPeriod**](InsightPeriod.md) |  | [default to undefined]
**scores** | [**InsightGroupScores**](InsightGroupScores.md) |  | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]

## Example

```typescript
import { InsightScores } from 'launchdarkly-api-typescript';

const instance: InsightScores = {
    period,
    lastPeriod,
    scores,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
