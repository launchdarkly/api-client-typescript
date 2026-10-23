# CleanupBehavior

What happens to the release rules when the final phase completes, either on its own or because a stop rolls it forward while it\'s running:  - `remove_rules_and_update_default_rule`: The release rules are   removed and the default rule serves the target variation. - `leave_rules_in_place`: The release rules stay and serve the   target variation.  In every other case, including a revert, it has no effect: release rules left on the flag keep serving the variation the release ended on, ahead of rules added later without `beforeRuleId`. 

## Enum

* `CleanupBehaviorRemoveRulesAndUpdateDefaultRule` (value: `'remove_rules_and_update_default_rule'`)

* `CleanupBehaviorLeaveRulesInPlace` (value: `'leave_rules_in_place'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
