# SeriesListRepFloat


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | **{ [key: string]: any; }** | The location and content type of related resources | [default to undefined]
**metadata** | **Array&lt;{ [key: string]: any; }&gt;** | Metadata about each series | [default to undefined]
**series** | **Array&lt;{ [key: string]: number; }&gt;** | An array of data points with timestamps. Each element of the array is an object with a \&#39;time\&#39; field, whose value is the timestamp, and one or more key fields. If there are multiple key fields, they are labeled \&#39;0\&#39;, \&#39;1\&#39;, and so on, and are explained in the &lt;code&gt;metadata&lt;/code&gt;. | [default to undefined]
**projectedSeries** | **Array&lt;{ [key: string]: number; }&gt;** | Cumulative projected usage by day for the full billing period, when available. Each element matches the structure of &lt;code&gt;series&lt;/code&gt;: an object with a \&#39;time\&#39; field and a \&#39;0\&#39; value field. The projected (non-actual) portion begins where the actual &lt;code&gt;series&lt;/code&gt; ends. | [optional] [default to undefined]

## Example

```typescript
import { SeriesListRepFloat } from 'launchdarkly-api-typescript';

const instance: SeriesListRepFloat = {
    _links,
    metadata,
    series,
    projectedSeries,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
