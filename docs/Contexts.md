# Contexts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]
**totalCount** | **number** | The number of contexts | [optional] [default to undefined]
**_environmentId** | **string** | The environment ID where the context was evaluated | [default to undefined]
**continuationToken** | **string** | An obfuscated string that references the last context instance on the previous page of results. You can use this for pagination, however, we recommend using the &lt;code&gt;next&lt;/code&gt; link instead. | [optional] [default to undefined]
**items** | [**Array&lt;ContextRecord&gt;**](ContextRecord.md) | A collection of contexts. Can include multiple versions of contexts that have the same &lt;code&gt;kind&lt;/code&gt; and &lt;code&gt;key&lt;/code&gt;, but different &lt;code&gt;applicationId&lt;/code&gt;s. | [default to undefined]

## Example

```typescript
import { Contexts } from 'launchdarkly-api-typescript';

const instance: Contexts = {
    _links,
    totalCount,
    _environmentId,
    continuationToken,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
