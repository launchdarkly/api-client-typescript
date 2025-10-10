# MemberImportItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | An error message, including CSV line number, if the &lt;code&gt;status&lt;/code&gt; is &lt;code&gt;error&lt;/code&gt; | [optional] [default to undefined]
**status** | **string** | Whether this member can be successfully imported (&lt;code&gt;success&lt;/code&gt;) or not (&lt;code&gt;error&lt;/code&gt;). Even if the status is &lt;code&gt;success&lt;/code&gt;, members are only added to a team on a &lt;code&gt;201&lt;/code&gt; response. | [default to undefined]
**value** | **string** | The email address for the member requested to be added to this team. May be blank or an error, such as \&#39;invalid email format\&#39;, if the email address cannot be found or parsed. | [default to undefined]

## Example

```typescript
import { MemberImportItem } from 'launchdarkly-api-typescript';

const instance: MemberImportItem = {
    message,
    status,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
