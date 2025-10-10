# PostDeploymentEventInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectKey** | **string** | The project key | [default to undefined]
**environmentKey** | **string** | The environment key | [default to undefined]
**applicationKey** | **string** | The application key. This defines the granularity at which you want to view your insights metrics. Typically it is the name of one of the GitHub repositories that you use in this project.&lt;br/&gt;&lt;br/&gt;LaunchDarkly automatically creates a new application each time you send a unique application key. | [default to undefined]
**applicationName** | **string** | The application name. This defines how the application is displayed | [optional] [default to undefined]
**applicationKind** | **string** | The kind of application. Default: &lt;code&gt;server&lt;/code&gt; | [optional] [default to undefined]
**version** | **string** | The application version. You can set the application version to any string that includes only letters, numbers, periods (&lt;code&gt;.&lt;/code&gt;), hyphens (&lt;code&gt;-&lt;/code&gt;), or underscores (&lt;code&gt;_&lt;/code&gt;).&lt;br/&gt;&lt;br/&gt;We recommend setting the application version to at least the first seven characters of the SHA or to the tag of the GitHub commit for this deployment. | [default to undefined]
**versionName** | **string** | The version name. This defines how the version is displayed | [optional] [default to undefined]
**eventType** | **string** | The event type | [default to undefined]
**eventTime** | **number** |  | [optional] [default to undefined]
**eventMetadata** | **{ [key: string]: any; }** | A JSON object containing metadata about the event | [optional] [default to undefined]
**deploymentMetadata** | **{ [key: string]: any; }** | A JSON object containing metadata about the deployment | [optional] [default to undefined]

## Example

```typescript
import { PostDeploymentEventInput } from 'launchdarkly-api-typescript';

const instance: PostDeploymentEventInput = {
    projectKey,
    environmentKey,
    applicationKey,
    applicationName,
    applicationKind,
    version,
    versionName,
    eventType,
    eventTime,
    eventMetadata,
    deploymentMetadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
