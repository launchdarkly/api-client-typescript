# SegmentScheduledChangeStatus

Where the scheduled change is in its lifecycle. `pending` means the execution date is still in the future; `inFlight` means the change is being applied; `failed` means the change could not be applied on its execution date. More values may be added, so treat an unrecognized value as a change that has not been applied yet. 

## Enum

* `SegmentScheduledChangeStatusPending` (value: `'pending'`)

* `SegmentScheduledChangeStatusInFlight` (value: `'inFlight'`)

* `SegmentScheduledChangeStatusFailed` (value: `'failed'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
