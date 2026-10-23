# EnvironmentReleaseResolution

How to resolve each phase of the release when you stop it:  - `roll_forward_all_phases`: All phases serve the target variation.   Pending phases stay on the flag and are enabled. - `roll_forward_current_phase_and_remove_pending_phases`: Current and   completed phases serve the target variation. Pending phases are   removed. - `roll_back_all_phases_and_remove_pending_phases`: Current and   completed phases serve the original variation. Pending phases are   removed. - `roll_back_current_phase_and_remove_pending_phases`: The current   phase serves the original variation, and completed phases keep   serving the target variation. Pending phases are removed.  For a single-phase release there are no completed or pending phases, so the two roll-forward values are equivalent, as are the two roll-back values.  The `current_phase` values return `400` if the release is between phases. Use an `all_phases` value instead. A terminal release returns `200` unchanged for every resolution. 

## Enum

* `EnvironmentReleaseResolutionRollForwardAllPhases` (value: `'roll_forward_all_phases'`)

* `EnvironmentReleaseResolutionRollForwardCurrentPhaseAndRemovePendingPhases` (value: `'roll_forward_current_phase_and_remove_pending_phases'`)

* `EnvironmentReleaseResolutionRollBackAllPhasesAndRemovePendingPhases` (value: `'roll_back_all_phases_and_remove_pending_phases'`)

* `EnvironmentReleaseResolutionRollBackCurrentPhaseAndRemovePendingPhases` (value: `'roll_back_current_phase_and_remove_pending_phases'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
