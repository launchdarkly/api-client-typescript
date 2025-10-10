# SubscriptionPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | A human-friendly name for your audit log subscription. | [default to undefined]
**statements** | [**Array&lt;StatementPost&gt;**](StatementPost.md) |  | [optional] [default to undefined]
**on** | **boolean** | Whether or not you want your subscription to actively send events. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | An array of tags for this subscription. | [optional] [default to undefined]
**config** | **{ [key: string]: any; }** | The unique set of fields required to configure an audit log subscription integration of this type. Refer to the &lt;code&gt;formVariables&lt;/code&gt; field in the corresponding &lt;code&gt;manifest.json&lt;/code&gt; at https://github.com/launchdarkly/integration-framework/tree/main/integrations for a full list of fields for the integration you wish to configure. | [default to undefined]
**url** | **string** | Slack webhook receiver URL. Only necessary for legacy Slack webhook integrations. | [optional] [default to undefined]
**apiKey** | **string** | Datadog API key. Only necessary for legacy Datadog webhook integrations. | [optional] [default to undefined]

## Example

```typescript
import { SubscriptionPost } from 'launchdarkly-api-typescript';

const instance: SubscriptionPost = {
    name,
    statements,
    on,
    tags,
    config,
    url,
    apiKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
