# ReleaseStatusReason

Additional detail for a `waiting`, `completed`, or `reverted` status. The field may be absent for a `waiting` status when there is no specific reason. `waiting_phase_ended` appears only on the release, never on a phase. It means a phase of a multi-phase release with `advancementMode` `manual` ended and the release must be advanced to the next phase. `reverted_discarded` means the phase ended without a regression or a member rolling it back. A running phase is discarded when the flag changes underneath it, for example when the flag is turned off, archived, or deleted. A pending phase is discarded when the release ends before it starts, either because an earlier phase reverted or because the release was stopped with a resolution that removes pending phases. A release reports `reverted_discarded` only when the last phase that started was discarded. 

## Enum

* `ReleaseStatusReasonWaitingRegressionDetected` (value: `'waiting_regression_detected'`)

* `ReleaseStatusReasonWaitingPhaseEnded` (value: `'waiting_phase_ended'`)

* `ReleaseStatusReasonCompletedAutomatic` (value: `'completed_automatic'`)

* `ReleaseStatusReasonCompletedManual` (value: `'completed_manual'`)

* `ReleaseStatusReasonRevertedRegressionDetected` (value: `'reverted_regression_detected'`)

* `ReleaseStatusReasonRevertedManual` (value: `'reverted_manual'`)

* `ReleaseStatusReasonRevertedDiscarded` (value: `'reverted_discarded'`)

* `ReleaseStatusReasonRevertedInsufficientData` (value: `'reverted_insufficient_data'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
