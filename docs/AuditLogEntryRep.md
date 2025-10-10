# AuditLogEntryRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**_id** | **string** | The ID of the audit log entry | [default to undefined]
**_accountId** | **string** | The ID of the account to which this audit log entry belongs | [default to undefined]
**date** | **number** |  | [default to undefined]
**accesses** | [**Array&lt;ResourceAccess&gt;**](ResourceAccess.md) | Details on the actions performed and resources acted on in this audit log entry | [default to undefined]
**kind** | **string** |  | [default to undefined]
**name** | **string** | The name of the resource this audit log entry refers to | [default to undefined]
**description** | **string** | Description of the change recorded in the audit log entry | [default to undefined]
**shortDescription** | **string** | Shorter version of the change recorded in the audit log entry | [default to undefined]
**comment** | **string** | Optional comment for the audit log entry | [optional] [default to undefined]
**subject** | [**SubjectDataRep**](SubjectDataRep.md) |  | [optional] [default to undefined]
**member** | [**MemberDataRep**](MemberDataRep.md) |  | [optional] [default to undefined]
**token** | [**TokenSummary**](TokenSummary.md) |  | [optional] [default to undefined]
**app** | [**AuthorizedAppDataRep**](AuthorizedAppDataRep.md) |  | [optional] [default to undefined]
**titleVerb** | **string** | The action and resource recorded in this audit log entry | [optional] [default to undefined]
**title** | **string** | A description of what occurred, in the format &lt;code&gt;member&lt;/code&gt; &lt;code&gt;titleVerb&lt;/code&gt; &lt;code&gt;target&lt;/code&gt; | [optional] [default to undefined]
**target** | [**TargetResourceRep**](TargetResourceRep.md) |  | [optional] [default to undefined]
**parent** | [**ParentResourceRep**](ParentResourceRep.md) |  | [optional] [default to undefined]
**delta** | **any** | If the audit log entry has been updated, this is the JSON patch body that was used in the request to update the entity | [optional] [default to undefined]
**triggerBody** | **any** | A JSON representation of the external trigger for this audit log entry, if any | [optional] [default to undefined]
**merge** | **any** | A JSON representation of the merge information for this audit log entry, if any | [optional] [default to undefined]
**previousVersion** | **any** | If the audit log entry has been updated, this is a JSON representation of the previous version of the entity | [optional] [default to undefined]
**currentVersion** | **any** | If the audit log entry has been updated, this is a JSON representation of the current version of the entity | [optional] [default to undefined]
**subentries** | [**Array&lt;AuditLogEntryListingRep&gt;**](AuditLogEntryListingRep.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AuditLogEntryRep } from 'launchdarkly-api-typescript';

const instance: AuditLogEntryRep = {
    _links,
    _id,
    _accountId,
    date,
    accesses,
    kind,
    name,
    description,
    shortDescription,
    comment,
    subject,
    member,
    token,
    app,
    titleVerb,
    title,
    target,
    parent,
    delta,
    triggerBody,
    merge,
    previousVersion,
    currentVersion,
    subentries,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
