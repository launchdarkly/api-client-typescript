# ReleaseStatus

High-level status of an environment release or release phase. - `pending`: The release or phase has not started. - `in_progress`: The release or phase is progressing without requiring action. - `waiting`: The release is partially rolled out, but is paused and waiting for action from the user. - `completed`: The release or phase reached the target variation. - `reverted`: The release or phase returned to the original variation. 

## Enum

* `ReleaseStatusPending` (value: `'pending'`)

* `ReleaseStatusInProgress` (value: `'in_progress'`)

* `ReleaseStatusWaiting` (value: `'waiting'`)

* `ReleaseStatusCompleted` (value: `'completed'`)

* `ReleaseStatusReverted` (value: `'reverted'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
