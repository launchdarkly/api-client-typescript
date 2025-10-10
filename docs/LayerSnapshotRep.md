# LayerSnapshotRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | Key of the layer the experiment was part of | [default to undefined]
**name** | **string** | Layer name at the time this experiment iteration was stopped | [default to undefined]
**reservationPercent** | **number** | Percent of layer traffic that was reserved in the layer for this experiment iteration | [default to undefined]
**otherReservationPercent** | **number** | Percent of layer traffic that was reserved for other experiments in the same environment, when this experiment iteration was stopped | [default to undefined]

## Example

```typescript
import { LayerSnapshotRep } from 'launchdarkly-api-typescript';

const instance: LayerSnapshotRep = {
    key,
    name,
    reservationPercent,
    otherReservationPercent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
