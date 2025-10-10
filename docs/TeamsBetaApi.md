# TeamsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**patchTeams**](#patchteams) | **PATCH** /api/v2/teams | Update teams|

# **patchTeams**
> BulkEditTeamsRep patchTeams(teamsPatchInput)

Perform a partial update to multiple teams. Updating teams uses the semantic patch format.  To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).  ### Instructions  Semantic patch requests support the following `kind` instructions for updating teams.  <details> <summary>Click to expand instructions for <strong>updating teams</strong></summary>  #### addMembersToTeams  Add the members to teams.  ##### Parameters  - `memberIDs`: List of member IDs to add. - `teamKeys`: List of teams to update.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"addMembersToTeams\",     \"memberIDs\": [       \"1234a56b7c89d012345e678f\"     ],     \"teamKeys\": [       \"example-team-1\",       \"example-team-2\"     ]   }] } ```  #### addAllMembersToTeams  Add all members to the team. Members that match any of the filters are **excluded** from the update.  ##### Parameters  - `teamKeys`: List of teams to update. - `filterLastSeen`: (Optional) A JSON object with one of the following formats:   - `{\"never\": true}` - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.   - `{\"noData\": true}` - Members that have not been active since LaunchDarkly began recording last seen timestamps.   - `{\"before\": 1608672063611}` - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds. - `filterQuery`: (Optional) A string that matches against the members\' emails and names. It is not case sensitive. - `filterRoles`: (Optional) A `|` separated list of roles and custom roles. For the purposes of this filtering, `Owner` counts as `Admin`. - `filterTeamKey`: (Optional) A string that matches against the key of the team the members belong to. It is not case sensitive. - `ignoredMemberIDs`: (Optional) A list of member IDs.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"addAllMembersToTeams\",     \"teamKeys\": [       \"example-team-1\",       \"example-team-2\"     ],     \"filterLastSeen\": { \"never\": true }   }] } ```  </details> 

### Example

```typescript
import {
    TeamsBetaApi,
    Configuration,
    TeamsPatchInput
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new TeamsBetaApi(configuration);

let teamsPatchInput: TeamsPatchInput; //

const { status, data } = await apiInstance.patchTeams(
    teamsPatchInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **teamsPatchInput** | **TeamsPatchInput**|  | |


### Return type

**BulkEditTeamsRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Teams response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

