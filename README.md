This repository contains a client library for LaunchDarkly's REST API. This client was automatically
generated from our [OpenAPI specification](https://app.launchdarkly.com/api/v2/openapi.json) using a [code generation library](https://github.com/launchdarkly/ld-openapi).

This REST API is for custom integrations, data export, or automating your feature flag workflows. *DO NOT* use this client library to include feature flags in your web or mobile application. To integrate feature flags with your application, read the [SDK documentation](https://docs.launchdarkly.com/sdk).

This client library is only compatible with the latest version of our REST API. Previous versions of this client library are compatible with earlier versions of our REST API. When you create an access token, you can set the REST API version associated with the token. By default, API requests you send using the token will use the specified API version. To learn more, read [Versioning](https://apidocs.launchdarkly.com/#section/Overview/Versioning).
View our [sample code](#sample-code) for example usage.

## launchdarkly-api-typescript@19.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install launchdarkly-api-typescript@19.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://app.launchdarkly.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AIConfigsBetaApi* | [**deleteAIConfig**](docs/AIConfigsBetaApi.md#deleteaiconfig) | **DELETE** /api/v2/projects/{projectKey}/ai-configs/{configKey} | Delete AI Config
*AIConfigsBetaApi* | [**deleteAIConfigVariation**](docs/AIConfigsBetaApi.md#deleteaiconfigvariation) | **DELETE** /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey} | Delete AI Config variation
*AIConfigsBetaApi* | [**deleteAITool**](docs/AIConfigsBetaApi.md#deleteaitool) | **DELETE** /api/v2/projects/{projectKey}/ai-tools/{toolKey} | Delete AI tool
*AIConfigsBetaApi* | [**deleteModelConfig**](docs/AIConfigsBetaApi.md#deletemodelconfig) | **DELETE** /api/v2/projects/{projectKey}/ai-configs/model-configs/{modelConfigKey} | Delete an AI model config
*AIConfigsBetaApi* | [**deleteRestrictedModels**](docs/AIConfigsBetaApi.md#deleterestrictedmodels) | **DELETE** /api/v2/projects/{projectKey}/ai-configs/model-configs/restricted | Remove AI models from the restricted list
*AIConfigsBetaApi* | [**getAIConfig**](docs/AIConfigsBetaApi.md#getaiconfig) | **GET** /api/v2/projects/{projectKey}/ai-configs/{configKey} | Get AI Config
*AIConfigsBetaApi* | [**getAIConfigMetrics**](docs/AIConfigsBetaApi.md#getaiconfigmetrics) | **GET** /api/v2/projects/{projectKey}/ai-configs/{configKey}/metrics | Get AI Config metrics
*AIConfigsBetaApi* | [**getAIConfigMetricsByVariation**](docs/AIConfigsBetaApi.md#getaiconfigmetricsbyvariation) | **GET** /api/v2/projects/{projectKey}/ai-configs/{configKey}/metrics-by-variation | Get AI Config metrics by variation
*AIConfigsBetaApi* | [**getAIConfigTargeting**](docs/AIConfigsBetaApi.md#getaiconfigtargeting) | **GET** /api/v2/projects/{projectKey}/ai-configs/{configKey}/targeting | Show an AI Config\&#39;s targeting
*AIConfigsBetaApi* | [**getAIConfigVariation**](docs/AIConfigsBetaApi.md#getaiconfigvariation) | **GET** /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey} | Get AI Config variation
*AIConfigsBetaApi* | [**getAIConfigs**](docs/AIConfigsBetaApi.md#getaiconfigs) | **GET** /api/v2/projects/{projectKey}/ai-configs | List AI Configs
*AIConfigsBetaApi* | [**getAITool**](docs/AIConfigsBetaApi.md#getaitool) | **GET** /api/v2/projects/{projectKey}/ai-tools/{toolKey} | Get AI tool
*AIConfigsBetaApi* | [**getModelConfig**](docs/AIConfigsBetaApi.md#getmodelconfig) | **GET** /api/v2/projects/{projectKey}/ai-configs/model-configs/{modelConfigKey} | Get AI model config
*AIConfigsBetaApi* | [**listAIToolVersions**](docs/AIConfigsBetaApi.md#listaitoolversions) | **GET** /api/v2/projects/{projectKey}/ai-tools/{toolKey}/versions | List AI tool versions
*AIConfigsBetaApi* | [**listAITools**](docs/AIConfigsBetaApi.md#listaitools) | **GET** /api/v2/projects/{projectKey}/ai-tools | List AI tools
*AIConfigsBetaApi* | [**listModelConfigs**](docs/AIConfigsBetaApi.md#listmodelconfigs) | **GET** /api/v2/projects/{projectKey}/ai-configs/model-configs | List AI model configs
*AIConfigsBetaApi* | [**patchAIConfig**](docs/AIConfigsBetaApi.md#patchaiconfig) | **PATCH** /api/v2/projects/{projectKey}/ai-configs/{configKey} | Update AI Config
*AIConfigsBetaApi* | [**patchAIConfigTargeting**](docs/AIConfigsBetaApi.md#patchaiconfigtargeting) | **PATCH** /api/v2/projects/{projectKey}/ai-configs/{configKey}/targeting | Update AI Config targeting
*AIConfigsBetaApi* | [**patchAIConfigVariation**](docs/AIConfigsBetaApi.md#patchaiconfigvariation) | **PATCH** /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey} | Update AI Config variation
*AIConfigsBetaApi* | [**patchAITool**](docs/AIConfigsBetaApi.md#patchaitool) | **PATCH** /api/v2/projects/{projectKey}/ai-tools/{toolKey} | Update AI tool
*AIConfigsBetaApi* | [**postAIConfig**](docs/AIConfigsBetaApi.md#postaiconfig) | **POST** /api/v2/projects/{projectKey}/ai-configs | Create new AI Config
*AIConfigsBetaApi* | [**postAIConfigVariation**](docs/AIConfigsBetaApi.md#postaiconfigvariation) | **POST** /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations | Create AI Config variation
*AIConfigsBetaApi* | [**postAITool**](docs/AIConfigsBetaApi.md#postaitool) | **POST** /api/v2/projects/{projectKey}/ai-tools | Create an AI tool
*AIConfigsBetaApi* | [**postModelConfig**](docs/AIConfigsBetaApi.md#postmodelconfig) | **POST** /api/v2/projects/{projectKey}/ai-configs/model-configs | Create an AI model config
*AIConfigsBetaApi* | [**postRestrictedModels**](docs/AIConfigsBetaApi.md#postrestrictedmodels) | **POST** /api/v2/projects/{projectKey}/ai-configs/model-configs/restricted | Add AI models to the restricted list
*AccessTokensApi* | [**deleteToken**](docs/AccessTokensApi.md#deletetoken) | **DELETE** /api/v2/tokens/{id} | Delete access token
*AccessTokensApi* | [**getToken**](docs/AccessTokensApi.md#gettoken) | **GET** /api/v2/tokens/{id} | Get access token
*AccessTokensApi* | [**getTokens**](docs/AccessTokensApi.md#gettokens) | **GET** /api/v2/tokens | List access tokens
*AccessTokensApi* | [**patchToken**](docs/AccessTokensApi.md#patchtoken) | **PATCH** /api/v2/tokens/{id} | Patch access token
*AccessTokensApi* | [**postToken**](docs/AccessTokensApi.md#posttoken) | **POST** /api/v2/tokens | Create access token
*AccessTokensApi* | [**resetToken**](docs/AccessTokensApi.md#resettoken) | **POST** /api/v2/tokens/{id}/reset | Reset access token
*AccountMembersApi* | [**deleteMember**](docs/AccountMembersApi.md#deletemember) | **DELETE** /api/v2/members/{id} | Delete account member
*AccountMembersApi* | [**getMember**](docs/AccountMembersApi.md#getmember) | **GET** /api/v2/members/{id} | Get account member
*AccountMembersApi* | [**getMembers**](docs/AccountMembersApi.md#getmembers) | **GET** /api/v2/members | List account members
*AccountMembersApi* | [**patchMember**](docs/AccountMembersApi.md#patchmember) | **PATCH** /api/v2/members/{id} | Modify an account member
*AccountMembersApi* | [**patchMembers**](docs/AccountMembersApi.md#patchmembers) | **PATCH** /api/v2/members | Modify account members
*AccountMembersApi* | [**postMemberTeams**](docs/AccountMembersApi.md#postmemberteams) | **POST** /api/v2/members/{id}/teams | Add a member to teams
*AccountMembersApi* | [**postMembers**](docs/AccountMembersApi.md#postmembers) | **POST** /api/v2/members | Invite new members
*AccountUsageBetaApi* | [**getContextsClientsideUsage**](docs/AccountUsageBetaApi.md#getcontextsclientsideusage) | **GET** /api/v2/usage/clientside-contexts | Get contexts clientside usage
*AccountUsageBetaApi* | [**getContextsServersideUsage**](docs/AccountUsageBetaApi.md#getcontextsserversideusage) | **GET** /api/v2/usage/serverside-contexts | Get contexts serverside usage
*AccountUsageBetaApi* | [**getContextsTotalUsage**](docs/AccountUsageBetaApi.md#getcontextstotalusage) | **GET** /api/v2/usage/total-contexts | Get contexts total usage
*AccountUsageBetaApi* | [**getDataExportEventsUsage**](docs/AccountUsageBetaApi.md#getdataexporteventsusage) | **GET** /api/v2/usage/data-export-events | Get data export events usage
*AccountUsageBetaApi* | [**getEvaluationsUsage**](docs/AccountUsageBetaApi.md#getevaluationsusage) | **GET** /api/v2/usage/evaluations/{projectKey}/{environmentKey}/{featureFlagKey} | Get evaluations usage
*AccountUsageBetaApi* | [**getEventsUsage**](docs/AccountUsageBetaApi.md#geteventsusage) | **GET** /api/v2/usage/events/{type} | Get events usage
*AccountUsageBetaApi* | [**getExperimentationEventsUsage**](docs/AccountUsageBetaApi.md#getexperimentationeventsusage) | **GET** /api/v2/usage/experimentation-events | Get experimentation events usage
*AccountUsageBetaApi* | [**getExperimentationKeysUsage**](docs/AccountUsageBetaApi.md#getexperimentationkeysusage) | **GET** /api/v2/usage/experimentation-keys | Get experimentation keys usage
*AccountUsageBetaApi* | [**getMauSdksByType**](docs/AccountUsageBetaApi.md#getmausdksbytype) | **GET** /api/v2/usage/mau/sdks | Get MAU SDKs by type
*AccountUsageBetaApi* | [**getMauUsage**](docs/AccountUsageBetaApi.md#getmauusage) | **GET** /api/v2/usage/mau | Get MAU usage
*AccountUsageBetaApi* | [**getMauUsageByCategory**](docs/AccountUsageBetaApi.md#getmauusagebycategory) | **GET** /api/v2/usage/mau/bycategory | Get MAU usage by category
*AccountUsageBetaApi* | [**getObservabilityErrorsUsage**](docs/AccountUsageBetaApi.md#getobservabilityerrorsusage) | **GET** /api/v2/usage/observability/errors | Get observability errors usage
*AccountUsageBetaApi* | [**getObservabilityLogsUsage**](docs/AccountUsageBetaApi.md#getobservabilitylogsusage) | **GET** /api/v2/usage/observability/logs | Get observability logs usage
*AccountUsageBetaApi* | [**getObservabilitySessionsUsage**](docs/AccountUsageBetaApi.md#getobservabilitysessionsusage) | **GET** /api/v2/usage/observability/sessions | Get observability sessions usage
*AccountUsageBetaApi* | [**getObservabilityTracesUsage**](docs/AccountUsageBetaApi.md#getobservabilitytracesusage) | **GET** /api/v2/usage/observability/traces | Get observability traces usage
*AccountUsageBetaApi* | [**getServiceConnectionsUsage**](docs/AccountUsageBetaApi.md#getserviceconnectionsusage) | **GET** /api/v2/usage/service-connections | Get service connections usage
*AccountUsageBetaApi* | [**getStreamUsage**](docs/AccountUsageBetaApi.md#getstreamusage) | **GET** /api/v2/usage/streams/{source} | Get stream usage
*AccountUsageBetaApi* | [**getStreamUsageBySdkVersion**](docs/AccountUsageBetaApi.md#getstreamusagebysdkversion) | **GET** /api/v2/usage/streams/{source}/bysdkversion | Get stream usage by SDK version
*AccountUsageBetaApi* | [**getStreamUsageSdkversion**](docs/AccountUsageBetaApi.md#getstreamusagesdkversion) | **GET** /api/v2/usage/streams/{source}/sdkversions | Get stream usage SDK versions
*AnnouncementsApi* | [**createAnnouncementPublic**](docs/AnnouncementsApi.md#createannouncementpublic) | **POST** /api/v2/announcements | Create an announcement
*AnnouncementsApi* | [**deleteAnnouncementPublic**](docs/AnnouncementsApi.md#deleteannouncementpublic) | **DELETE** /api/v2/announcements/{announcementId} | Delete an announcement
*AnnouncementsApi* | [**getAnnouncementsPublic**](docs/AnnouncementsApi.md#getannouncementspublic) | **GET** /api/v2/announcements | Get announcements
*AnnouncementsApi* | [**updateAnnouncementPublic**](docs/AnnouncementsApi.md#updateannouncementpublic) | **PATCH** /api/v2/announcements/{announcementId} | Update an announcement
*ApplicationsBetaApi* | [**deleteApplication**](docs/ApplicationsBetaApi.md#deleteapplication) | **DELETE** /api/v2/applications/{applicationKey} | Delete application
*ApplicationsBetaApi* | [**deleteApplicationVersion**](docs/ApplicationsBetaApi.md#deleteapplicationversion) | **DELETE** /api/v2/applications/{applicationKey}/versions/{versionKey} | Delete application version
*ApplicationsBetaApi* | [**getApplication**](docs/ApplicationsBetaApi.md#getapplication) | **GET** /api/v2/applications/{applicationKey} | Get application by key
*ApplicationsBetaApi* | [**getApplicationVersions**](docs/ApplicationsBetaApi.md#getapplicationversions) | **GET** /api/v2/applications/{applicationKey}/versions | Get application versions by application key
*ApplicationsBetaApi* | [**getApplications**](docs/ApplicationsBetaApi.md#getapplications) | **GET** /api/v2/applications | Get applications
*ApplicationsBetaApi* | [**patchApplication**](docs/ApplicationsBetaApi.md#patchapplication) | **PATCH** /api/v2/applications/{applicationKey} | Update application
*ApplicationsBetaApi* | [**patchApplicationVersion**](docs/ApplicationsBetaApi.md#patchapplicationversion) | **PATCH** /api/v2/applications/{applicationKey}/versions/{versionKey} | Update application version
*ApprovalsApi* | [**deleteApprovalRequest**](docs/ApprovalsApi.md#deleteapprovalrequest) | **DELETE** /api/v2/approval-requests/{id} | Delete approval request
*ApprovalsApi* | [**deleteApprovalRequestForFlag**](docs/ApprovalsApi.md#deleteapprovalrequestforflag) | **DELETE** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id} | Delete approval request for a flag
*ApprovalsApi* | [**getApprovalForFlag**](docs/ApprovalsApi.md#getapprovalforflag) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id} | Get approval request for a flag
*ApprovalsApi* | [**getApprovalRequest**](docs/ApprovalsApi.md#getapprovalrequest) | **GET** /api/v2/approval-requests/{id} | Get approval request
*ApprovalsApi* | [**getApprovalRequests**](docs/ApprovalsApi.md#getapprovalrequests) | **GET** /api/v2/approval-requests | List approval requests
*ApprovalsApi* | [**getApprovalsForFlag**](docs/ApprovalsApi.md#getapprovalsforflag) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests | List approval requests for a flag
*ApprovalsApi* | [**postApprovalRequest**](docs/ApprovalsApi.md#postapprovalrequest) | **POST** /api/v2/approval-requests | Create approval request
*ApprovalsApi* | [**postApprovalRequestApply**](docs/ApprovalsApi.md#postapprovalrequestapply) | **POST** /api/v2/approval-requests/{id}/apply | Apply approval request
*ApprovalsApi* | [**postApprovalRequestApplyForFlag**](docs/ApprovalsApi.md#postapprovalrequestapplyforflag) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/apply | Apply approval request for a flag
*ApprovalsApi* | [**postApprovalRequestForFlag**](docs/ApprovalsApi.md#postapprovalrequestforflag) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests | Create approval request for a flag
*ApprovalsApi* | [**postApprovalRequestReview**](docs/ApprovalsApi.md#postapprovalrequestreview) | **POST** /api/v2/approval-requests/{id}/reviews | Review approval request
*ApprovalsApi* | [**postApprovalRequestReviewForFlag**](docs/ApprovalsApi.md#postapprovalrequestreviewforflag) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/reviews | Review approval request for a flag
*ApprovalsApi* | [**postFlagCopyConfigApprovalRequest**](docs/ApprovalsApi.md#postflagcopyconfigapprovalrequest) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests-flag-copy | Create approval request to copy flag configurations across environments
*ApprovalsBetaApi* | [**getApprovalRequestSettings**](docs/ApprovalsBetaApi.md#getapprovalrequestsettings) | **GET** /api/v2/approval-requests/projects/{projectKey}/settings | Get approval request settings
*ApprovalsBetaApi* | [**patchApprovalRequest**](docs/ApprovalsBetaApi.md#patchapprovalrequest) | **PATCH** /api/v2/approval-requests/{id} | Update approval request
*ApprovalsBetaApi* | [**patchApprovalRequestSettings**](docs/ApprovalsBetaApi.md#patchapprovalrequestsettings) | **PATCH** /api/v2/approval-requests/projects/{projectKey}/settings | Update approval request settings
*ApprovalsBetaApi* | [**patchFlagConfigApprovalRequest**](docs/ApprovalsBetaApi.md#patchflagconfigapprovalrequest) | **PATCH** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id} | Update flag approval request
*AuditLogApi* | [**getAuditLogEntries**](docs/AuditLogApi.md#getauditlogentries) | **GET** /api/v2/auditlog | List audit log entries
*AuditLogApi* | [**getAuditLogEntry**](docs/AuditLogApi.md#getauditlogentry) | **GET** /api/v2/auditlog/{id} | Get audit log entry
*AuditLogApi* | [**postAuditLogEntries**](docs/AuditLogApi.md#postauditlogentries) | **POST** /api/v2/auditlog | Search audit log entries
*CodeReferencesApi* | [**deleteBranches**](docs/CodeReferencesApi.md#deletebranches) | **POST** /api/v2/code-refs/repositories/{repo}/branch-delete-tasks | Delete branches
*CodeReferencesApi* | [**deleteRepository**](docs/CodeReferencesApi.md#deleterepository) | **DELETE** /api/v2/code-refs/repositories/{repo} | Delete repository
*CodeReferencesApi* | [**getBranch**](docs/CodeReferencesApi.md#getbranch) | **GET** /api/v2/code-refs/repositories/{repo}/branches/{branch} | Get branch
*CodeReferencesApi* | [**getBranches**](docs/CodeReferencesApi.md#getbranches) | **GET** /api/v2/code-refs/repositories/{repo}/branches | List branches
*CodeReferencesApi* | [**getExtinctions**](docs/CodeReferencesApi.md#getextinctions) | **GET** /api/v2/code-refs/extinctions | List extinctions
*CodeReferencesApi* | [**getRepositories**](docs/CodeReferencesApi.md#getrepositories) | **GET** /api/v2/code-refs/repositories | List repositories
*CodeReferencesApi* | [**getRepository**](docs/CodeReferencesApi.md#getrepository) | **GET** /api/v2/code-refs/repositories/{repo} | Get repository
*CodeReferencesApi* | [**getRootStatistic**](docs/CodeReferencesApi.md#getrootstatistic) | **GET** /api/v2/code-refs/statistics | Get links to code reference repositories for each project
*CodeReferencesApi* | [**getStatistics**](docs/CodeReferencesApi.md#getstatistics) | **GET** /api/v2/code-refs/statistics/{projectKey} | Get code references statistics for flags
*CodeReferencesApi* | [**patchRepository**](docs/CodeReferencesApi.md#patchrepository) | **PATCH** /api/v2/code-refs/repositories/{repo} | Update repository
*CodeReferencesApi* | [**postExtinction**](docs/CodeReferencesApi.md#postextinction) | **POST** /api/v2/code-refs/repositories/{repo}/branches/{branch}/extinction-events | Create extinction
*CodeReferencesApi* | [**postRepository**](docs/CodeReferencesApi.md#postrepository) | **POST** /api/v2/code-refs/repositories | Create repository
*CodeReferencesApi* | [**putBranch**](docs/CodeReferencesApi.md#putbranch) | **PUT** /api/v2/code-refs/repositories/{repo}/branches/{branch} | Upsert branch
*ContextSettingsApi* | [**putContextFlagSetting**](docs/ContextSettingsApi.md#putcontextflagsetting) | **PUT** /api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/{contextKind}/{contextKey}/flags/{featureFlagKey} | Update flag settings for context
*ContextsApi* | [**deleteContextInstances**](docs/ContextsApi.md#deletecontextinstances) | **DELETE** /api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/{id} | Delete context instances
*ContextsApi* | [**evaluateContextInstance**](docs/ContextsApi.md#evaluatecontextinstance) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/flags/evaluate | Evaluate flags for context instance
*ContextsApi* | [**getContextAttributeNames**](docs/ContextsApi.md#getcontextattributenames) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/context-attributes | Get context attribute names
*ContextsApi* | [**getContextAttributeValues**](docs/ContextsApi.md#getcontextattributevalues) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/context-attributes/{attributeName} | Get context attribute values
*ContextsApi* | [**getContextInstances**](docs/ContextsApi.md#getcontextinstances) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/{id} | Get context instances
*ContextsApi* | [**getContextKindsByProjectKey**](docs/ContextsApi.md#getcontextkindsbyprojectkey) | **GET** /api/v2/projects/{projectKey}/context-kinds | Get context kinds
*ContextsApi* | [**getContexts**](docs/ContextsApi.md#getcontexts) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/{kind}/{key} | Get contexts
*ContextsApi* | [**putContextKind**](docs/ContextsApi.md#putcontextkind) | **PUT** /api/v2/projects/{projectKey}/context-kinds/{key} | Create or update context kind
*ContextsApi* | [**searchContextInstances**](docs/ContextsApi.md#searchcontextinstances) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/search | Search for context instances
*ContextsApi* | [**searchContexts**](docs/ContextsApi.md#searchcontexts) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/search | Search for contexts
*CustomRolesApi* | [**deleteCustomRole**](docs/CustomRolesApi.md#deletecustomrole) | **DELETE** /api/v2/roles/{customRoleKey} | Delete custom role
*CustomRolesApi* | [**getCustomRole**](docs/CustomRolesApi.md#getcustomrole) | **GET** /api/v2/roles/{customRoleKey} | Get custom role
*CustomRolesApi* | [**getCustomRoles**](docs/CustomRolesApi.md#getcustomroles) | **GET** /api/v2/roles | List custom roles
*CustomRolesApi* | [**patchCustomRole**](docs/CustomRolesApi.md#patchcustomrole) | **PATCH** /api/v2/roles/{customRoleKey} | Update custom role
*CustomRolesApi* | [**postCustomRole**](docs/CustomRolesApi.md#postcustomrole) | **POST** /api/v2/roles | Create custom role
*DataExportDestinationsApi* | [**deleteDestination**](docs/DataExportDestinationsApi.md#deletedestination) | **DELETE** /api/v2/destinations/{projectKey}/{environmentKey}/{id} | Delete Data Export destination
*DataExportDestinationsApi* | [**getDestination**](docs/DataExportDestinationsApi.md#getdestination) | **GET** /api/v2/destinations/{projectKey}/{environmentKey}/{id} | Get destination
*DataExportDestinationsApi* | [**getDestinations**](docs/DataExportDestinationsApi.md#getdestinations) | **GET** /api/v2/destinations | List destinations
*DataExportDestinationsApi* | [**patchDestination**](docs/DataExportDestinationsApi.md#patchdestination) | **PATCH** /api/v2/destinations/{projectKey}/{environmentKey}/{id} | Update Data Export destination
*DataExportDestinationsApi* | [**postDestination**](docs/DataExportDestinationsApi.md#postdestination) | **POST** /api/v2/destinations/{projectKey}/{environmentKey} | Create Data Export destination
*DataExportDestinationsApi* | [**postGenerateTrustPolicy**](docs/DataExportDestinationsApi.md#postgeneratetrustpolicy) | **POST** /api/v2/destinations/projects/{projKey}/environments/{envKey}/generate-trust-policy | Generate trust policy
*DataExportDestinationsApi* | [**postGenerateWarehouseDestinationKeyPair**](docs/DataExportDestinationsApi.md#postgeneratewarehousedestinationkeypair) | **POST** /api/v2/destinations/generate-warehouse-destination-key-pair | Generate Snowflake destination key pair
*EnvironmentsApi* | [**deleteEnvironment**](docs/EnvironmentsApi.md#deleteenvironment) | **DELETE** /api/v2/projects/{projectKey}/environments/{environmentKey} | Delete environment
*EnvironmentsApi* | [**getEnvironment**](docs/EnvironmentsApi.md#getenvironment) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey} | Get environment
*EnvironmentsApi* | [**getEnvironmentsByProject**](docs/EnvironmentsApi.md#getenvironmentsbyproject) | **GET** /api/v2/projects/{projectKey}/environments | List environments
*EnvironmentsApi* | [**patchEnvironment**](docs/EnvironmentsApi.md#patchenvironment) | **PATCH** /api/v2/projects/{projectKey}/environments/{environmentKey} | Update environment
*EnvironmentsApi* | [**postEnvironment**](docs/EnvironmentsApi.md#postenvironment) | **POST** /api/v2/projects/{projectKey}/environments | Create environment
*EnvironmentsApi* | [**resetEnvironmentMobileKey**](docs/EnvironmentsApi.md#resetenvironmentmobilekey) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/mobileKey | Reset environment mobile SDK key
*EnvironmentsApi* | [**resetEnvironmentSDKKey**](docs/EnvironmentsApi.md#resetenvironmentsdkkey) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/apiKey | Reset environment SDK key
*ExperimentsApi* | [**createExperiment**](docs/ExperimentsApi.md#createexperiment) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments | Create experiment
*ExperimentsApi* | [**createIteration**](docs/ExperimentsApi.md#createiteration) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}/iterations | Create iteration
*ExperimentsApi* | [**getExperiment**](docs/ExperimentsApi.md#getexperiment) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey} | Get experiment
*ExperimentsApi* | [**getExperimentationSettings**](docs/ExperimentsApi.md#getexperimentationsettings) | **GET** /api/v2/projects/{projectKey}/experimentation-settings | Get experimentation settings
*ExperimentsApi* | [**getExperiments**](docs/ExperimentsApi.md#getexperiments) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments | Get experiments
*ExperimentsApi* | [**patchExperiment**](docs/ExperimentsApi.md#patchexperiment) | **PATCH** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey} | Patch experiment
*ExperimentsApi* | [**putExperimentationSettings**](docs/ExperimentsApi.md#putexperimentationsettings) | **PUT** /api/v2/projects/{projectKey}/experimentation-settings | Update experimentation settings
*FeatureFlagsApi* | [**copyFeatureFlag**](docs/FeatureFlagsApi.md#copyfeatureflag) | **POST** /api/v2/flags/{projectKey}/{featureFlagKey}/copy | Copy feature flag
*FeatureFlagsApi* | [**deleteFeatureFlag**](docs/FeatureFlagsApi.md#deletefeatureflag) | **DELETE** /api/v2/flags/{projectKey}/{featureFlagKey} | Delete feature flag
*FeatureFlagsApi* | [**getExpiringContextTargets**](docs/FeatureFlagsApi.md#getexpiringcontexttargets) | **GET** /api/v2/flags/{projectKey}/{featureFlagKey}/expiring-targets/{environmentKey} | Get expiring context targets for feature flag
*FeatureFlagsApi* | [**getExpiringUserTargets**](docs/FeatureFlagsApi.md#getexpiringusertargets) | **GET** /api/v2/flags/{projectKey}/{featureFlagKey}/expiring-user-targets/{environmentKey} | Get expiring user targets for feature flag
*FeatureFlagsApi* | [**getFeatureFlag**](docs/FeatureFlagsApi.md#getfeatureflag) | **GET** /api/v2/flags/{projectKey}/{featureFlagKey} | Get feature flag
*FeatureFlagsApi* | [**getFeatureFlagStatus**](docs/FeatureFlagsApi.md#getfeatureflagstatus) | **GET** /api/v2/flag-statuses/{projectKey}/{environmentKey}/{featureFlagKey} | Get feature flag status
*FeatureFlagsApi* | [**getFeatureFlagStatusAcrossEnvironments**](docs/FeatureFlagsApi.md#getfeatureflagstatusacrossenvironments) | **GET** /api/v2/flag-status/{projectKey}/{featureFlagKey} | Get flag status across environments
*FeatureFlagsApi* | [**getFeatureFlagStatuses**](docs/FeatureFlagsApi.md#getfeatureflagstatuses) | **GET** /api/v2/flag-statuses/{projectKey}/{environmentKey} | List feature flag statuses
*FeatureFlagsApi* | [**getFeatureFlags**](docs/FeatureFlagsApi.md#getfeatureflags) | **GET** /api/v2/flags/{projectKey} | List feature flags
*FeatureFlagsApi* | [**patchExpiringTargets**](docs/FeatureFlagsApi.md#patchexpiringtargets) | **PATCH** /api/v2/flags/{projectKey}/{featureFlagKey}/expiring-targets/{environmentKey} | Update expiring context targets on feature flag
*FeatureFlagsApi* | [**patchExpiringUserTargets**](docs/FeatureFlagsApi.md#patchexpiringusertargets) | **PATCH** /api/v2/flags/{projectKey}/{featureFlagKey}/expiring-user-targets/{environmentKey} | Update expiring user targets on feature flag
*FeatureFlagsApi* | [**patchFeatureFlag**](docs/FeatureFlagsApi.md#patchfeatureflag) | **PATCH** /api/v2/flags/{projectKey}/{featureFlagKey} | Update feature flag
*FeatureFlagsApi* | [**postFeatureFlag**](docs/FeatureFlagsApi.md#postfeatureflag) | **POST** /api/v2/flags/{projectKey} | Create a feature flag
*FeatureFlagsApi* | [**postMigrationSafetyIssues**](docs/FeatureFlagsApi.md#postmigrationsafetyissues) | **POST** /api/v2/projects/{projectKey}/flags/{flagKey}/environments/{environmentKey}/migration-safety-issues | Get migration safety issues
*FeatureFlagsBetaApi* | [**getDependentFlags**](docs/FeatureFlagsBetaApi.md#getdependentflags) | **GET** /api/v2/flags/{projectKey}/{featureFlagKey}/dependent-flags | List dependent feature flags
*FeatureFlagsBetaApi* | [**getDependentFlagsByEnv**](docs/FeatureFlagsBetaApi.md#getdependentflagsbyenv) | **GET** /api/v2/flags/{projectKey}/{environmentKey}/{featureFlagKey}/dependent-flags | List dependent feature flags by environment
*FlagImportConfigurationsBetaApi* | [**createFlagImportConfiguration**](docs/FlagImportConfigurationsBetaApi.md#createflagimportconfiguration) | **POST** /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey} | Create a flag import configuration
*FlagImportConfigurationsBetaApi* | [**deleteFlagImportConfiguration**](docs/FlagImportConfigurationsBetaApi.md#deleteflagimportconfiguration) | **DELETE** /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId} | Delete a flag import configuration
*FlagImportConfigurationsBetaApi* | [**getFlagImportConfiguration**](docs/FlagImportConfigurationsBetaApi.md#getflagimportconfiguration) | **GET** /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId} | Get a single flag import configuration
*FlagImportConfigurationsBetaApi* | [**getFlagImportConfigurations**](docs/FlagImportConfigurationsBetaApi.md#getflagimportconfigurations) | **GET** /api/v2/integration-capabilities/flag-import | List all flag import configurations
*FlagImportConfigurationsBetaApi* | [**patchFlagImportConfiguration**](docs/FlagImportConfigurationsBetaApi.md#patchflagimportconfiguration) | **PATCH** /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId} | Update a flag import configuration
*FlagImportConfigurationsBetaApi* | [**triggerFlagImportJob**](docs/FlagImportConfigurationsBetaApi.md#triggerflagimportjob) | **POST** /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId}/trigger | Trigger a single flag import run
*FlagLinksBetaApi* | [**createFlagLink**](docs/FlagLinksBetaApi.md#createflaglink) | **POST** /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey} | Create flag link
*FlagLinksBetaApi* | [**deleteFlagLink**](docs/FlagLinksBetaApi.md#deleteflaglink) | **DELETE** /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}/{id} | Delete flag link
*FlagLinksBetaApi* | [**getFlagLinks**](docs/FlagLinksBetaApi.md#getflaglinks) | **GET** /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey} | List flag links
*FlagLinksBetaApi* | [**updateFlagLink**](docs/FlagLinksBetaApi.md#updateflaglink) | **PATCH** /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}/{id} | Update flag link
*FlagTriggersApi* | [**createTriggerWorkflow**](docs/FlagTriggersApi.md#createtriggerworkflow) | **POST** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey} | Create flag trigger
*FlagTriggersApi* | [**deleteTriggerWorkflow**](docs/FlagTriggersApi.md#deletetriggerworkflow) | **DELETE** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id} | Delete flag trigger
*FlagTriggersApi* | [**getTriggerWorkflowById**](docs/FlagTriggersApi.md#gettriggerworkflowbyid) | **GET** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id} | Get flag trigger by ID
*FlagTriggersApi* | [**getTriggerWorkflows**](docs/FlagTriggersApi.md#gettriggerworkflows) | **GET** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey} | List flag triggers
*FlagTriggersApi* | [**patchTriggerWorkflow**](docs/FlagTriggersApi.md#patchtriggerworkflow) | **PATCH** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id} | Update flag trigger
*FollowFlagsApi* | [**deleteFlagFollower**](docs/FollowFlagsApi.md#deleteflagfollower) | **DELETE** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/followers/{memberId} | Remove a member as a follower of a flag in a project and environment
*FollowFlagsApi* | [**getFlagFollowers**](docs/FollowFlagsApi.md#getflagfollowers) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/followers | Get followers of a flag in a project and environment
*FollowFlagsApi* | [**getFollowersByProjEnv**](docs/FollowFlagsApi.md#getfollowersbyprojenv) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/followers | Get followers of all flags in a given project and environment
*FollowFlagsApi* | [**putFlagFollower**](docs/FollowFlagsApi.md#putflagfollower) | **PUT** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/followers/{memberId} | Add a member as a follower of a flag in a project and environment
*HoldoutsBetaApi* | [**getAllHoldouts**](docs/HoldoutsBetaApi.md#getallholdouts) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts | Get all holdouts
*HoldoutsBetaApi* | [**getHoldout**](docs/HoldoutsBetaApi.md#getholdout) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts/{holdoutKey} | Get holdout
*HoldoutsBetaApi* | [**getHoldoutById**](docs/HoldoutsBetaApi.md#getholdoutbyid) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts/id/{holdoutId} | Get Holdout by Id
*HoldoutsBetaApi* | [**patchHoldout**](docs/HoldoutsBetaApi.md#patchholdout) | **PATCH** /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts/{holdoutKey} | Patch holdout
*HoldoutsBetaApi* | [**postHoldout**](docs/HoldoutsBetaApi.md#postholdout) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts | Create holdout
*InsightsChartsBetaApi* | [**getDeploymentFrequencyChart**](docs/InsightsChartsBetaApi.md#getdeploymentfrequencychart) | **GET** /api/v2/engineering-insights/charts/deployments/frequency | Get deployment frequency chart data
*InsightsChartsBetaApi* | [**getFlagStatusChart**](docs/InsightsChartsBetaApi.md#getflagstatuschart) | **GET** /api/v2/engineering-insights/charts/flags/status | Get flag status chart data
*InsightsChartsBetaApi* | [**getLeadTimeChart**](docs/InsightsChartsBetaApi.md#getleadtimechart) | **GET** /api/v2/engineering-insights/charts/lead-time | Get lead time chart data
*InsightsChartsBetaApi* | [**getReleaseFrequencyChart**](docs/InsightsChartsBetaApi.md#getreleasefrequencychart) | **GET** /api/v2/engineering-insights/charts/releases/frequency | Get release frequency chart data
*InsightsChartsBetaApi* | [**getStaleFlagsChart**](docs/InsightsChartsBetaApi.md#getstaleflagschart) | **GET** /api/v2/engineering-insights/charts/flags/stale | Get stale flags chart data
*InsightsDeploymentsBetaApi* | [**createDeploymentEvent**](docs/InsightsDeploymentsBetaApi.md#createdeploymentevent) | **POST** /api/v2/engineering-insights/deployment-events | Create deployment event
*InsightsDeploymentsBetaApi* | [**getDeployment**](docs/InsightsDeploymentsBetaApi.md#getdeployment) | **GET** /api/v2/engineering-insights/deployments/{deploymentID} | Get deployment
*InsightsDeploymentsBetaApi* | [**getDeployments**](docs/InsightsDeploymentsBetaApi.md#getdeployments) | **GET** /api/v2/engineering-insights/deployments | List deployments
*InsightsDeploymentsBetaApi* | [**updateDeployment**](docs/InsightsDeploymentsBetaApi.md#updatedeployment) | **PATCH** /api/v2/engineering-insights/deployments/{deploymentID} | Update deployment
*InsightsFlagEventsBetaApi* | [**getFlagEvents**](docs/InsightsFlagEventsBetaApi.md#getflagevents) | **GET** /api/v2/engineering-insights/flag-events | List flag events
*InsightsPullRequestsBetaApi* | [**getPullRequests**](docs/InsightsPullRequestsBetaApi.md#getpullrequests) | **GET** /api/v2/engineering-insights/pull-requests | List pull requests
*InsightsRepositoriesBetaApi* | [**associateRepositoriesAndProjects**](docs/InsightsRepositoriesBetaApi.md#associaterepositoriesandprojects) | **PUT** /api/v2/engineering-insights/repositories/projects | Associate repositories with projects
*InsightsRepositoriesBetaApi* | [**deleteRepositoryProject**](docs/InsightsRepositoriesBetaApi.md#deleterepositoryproject) | **DELETE** /api/v2/engineering-insights/repositories/{repositoryKey}/projects/{projectKey} | Remove repository project association
*InsightsRepositoriesBetaApi* | [**getInsightsRepositories**](docs/InsightsRepositoriesBetaApi.md#getinsightsrepositories) | **GET** /api/v2/engineering-insights/repositories | List repositories
*InsightsScoresBetaApi* | [**createInsightGroup**](docs/InsightsScoresBetaApi.md#createinsightgroup) | **POST** /api/v2/engineering-insights/insights/group | Create insight group
*InsightsScoresBetaApi* | [**deleteInsightGroup**](docs/InsightsScoresBetaApi.md#deleteinsightgroup) | **DELETE** /api/v2/engineering-insights/insights/groups/{insightGroupKey} | Delete insight group
*InsightsScoresBetaApi* | [**getInsightGroup**](docs/InsightsScoresBetaApi.md#getinsightgroup) | **GET** /api/v2/engineering-insights/insights/groups/{insightGroupKey} | Get insight group
*InsightsScoresBetaApi* | [**getInsightGroups**](docs/InsightsScoresBetaApi.md#getinsightgroups) | **GET** /api/v2/engineering-insights/insights/groups | List insight groups
*InsightsScoresBetaApi* | [**getInsightsScores**](docs/InsightsScoresBetaApi.md#getinsightsscores) | **GET** /api/v2/engineering-insights/insights/scores | Get insight scores
*InsightsScoresBetaApi* | [**patchInsightGroup**](docs/InsightsScoresBetaApi.md#patchinsightgroup) | **PATCH** /api/v2/engineering-insights/insights/groups/{insightGroupKey} | Patch insight group
*IntegrationAuditLogSubscriptionsApi* | [**createSubscription**](docs/IntegrationAuditLogSubscriptionsApi.md#createsubscription) | **POST** /api/v2/integrations/{integrationKey} | Create audit log subscription
*IntegrationAuditLogSubscriptionsApi* | [**deleteSubscription**](docs/IntegrationAuditLogSubscriptionsApi.md#deletesubscription) | **DELETE** /api/v2/integrations/{integrationKey}/{id} | Delete audit log subscription
*IntegrationAuditLogSubscriptionsApi* | [**getSubscriptionByID**](docs/IntegrationAuditLogSubscriptionsApi.md#getsubscriptionbyid) | **GET** /api/v2/integrations/{integrationKey}/{id} | Get audit log subscription by ID
*IntegrationAuditLogSubscriptionsApi* | [**getSubscriptions**](docs/IntegrationAuditLogSubscriptionsApi.md#getsubscriptions) | **GET** /api/v2/integrations/{integrationKey} | Get audit log subscriptions by integration
*IntegrationAuditLogSubscriptionsApi* | [**updateSubscription**](docs/IntegrationAuditLogSubscriptionsApi.md#updatesubscription) | **PATCH** /api/v2/integrations/{integrationKey}/{id} | Update audit log subscription
*IntegrationDeliveryConfigurationsBetaApi* | [**createIntegrationDeliveryConfiguration**](docs/IntegrationDeliveryConfigurationsBetaApi.md#createintegrationdeliveryconfiguration) | **POST** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey} | Create delivery configuration
*IntegrationDeliveryConfigurationsBetaApi* | [**deleteIntegrationDeliveryConfiguration**](docs/IntegrationDeliveryConfigurationsBetaApi.md#deleteintegrationdeliveryconfiguration) | **DELETE** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id} | Delete delivery configuration
*IntegrationDeliveryConfigurationsBetaApi* | [**getIntegrationDeliveryConfigurationByEnvironment**](docs/IntegrationDeliveryConfigurationsBetaApi.md#getintegrationdeliveryconfigurationbyenvironment) | **GET** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey} | Get delivery configurations by environment
*IntegrationDeliveryConfigurationsBetaApi* | [**getIntegrationDeliveryConfigurationById**](docs/IntegrationDeliveryConfigurationsBetaApi.md#getintegrationdeliveryconfigurationbyid) | **GET** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id} | Get delivery configuration by ID
*IntegrationDeliveryConfigurationsBetaApi* | [**getIntegrationDeliveryConfigurations**](docs/IntegrationDeliveryConfigurationsBetaApi.md#getintegrationdeliveryconfigurations) | **GET** /api/v2/integration-capabilities/featureStore | List all delivery configurations
*IntegrationDeliveryConfigurationsBetaApi* | [**patchIntegrationDeliveryConfiguration**](docs/IntegrationDeliveryConfigurationsBetaApi.md#patchintegrationdeliveryconfiguration) | **PATCH** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id} | Update delivery configuration
*IntegrationDeliveryConfigurationsBetaApi* | [**validateIntegrationDeliveryConfiguration**](docs/IntegrationDeliveryConfigurationsBetaApi.md#validateintegrationdeliveryconfiguration) | **POST** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}/validate | Validate delivery configuration
*IntegrationsBetaApi* | [**createIntegrationConfiguration**](docs/IntegrationsBetaApi.md#createintegrationconfiguration) | **POST** /api/v2/integration-configurations/keys/{integrationKey} | Create integration configuration
*IntegrationsBetaApi* | [**deleteIntegrationConfiguration**](docs/IntegrationsBetaApi.md#deleteintegrationconfiguration) | **DELETE** /api/v2/integration-configurations/{integrationConfigurationId} | Delete integration configuration
*IntegrationsBetaApi* | [**getAllIntegrationConfigurations**](docs/IntegrationsBetaApi.md#getallintegrationconfigurations) | **GET** /api/v2/integration-configurations/keys/{integrationKey} | Get all configurations for the integration
*IntegrationsBetaApi* | [**getIntegrationConfiguration**](docs/IntegrationsBetaApi.md#getintegrationconfiguration) | **GET** /api/v2/integration-configurations/{integrationConfigurationId} | Get an integration configuration
*IntegrationsBetaApi* | [**updateIntegrationConfiguration**](docs/IntegrationsBetaApi.md#updateintegrationconfiguration) | **PATCH** /api/v2/integration-configurations/{integrationConfigurationId} | Update integration configuration
*LayersApi* | [**createLayer**](docs/LayersApi.md#createlayer) | **POST** /api/v2/projects/{projectKey}/layers | Create layer
*LayersApi* | [**getLayers**](docs/LayersApi.md#getlayers) | **GET** /api/v2/projects/{projectKey}/layers | Get layers
*LayersApi* | [**updateLayer**](docs/LayersApi.md#updatelayer) | **PATCH** /api/v2/projects/{projectKey}/layers/{layerKey} | Update layer
*MetricsApi* | [**deleteMetric**](docs/MetricsApi.md#deletemetric) | **DELETE** /api/v2/metrics/{projectKey}/{metricKey} | Delete metric
*MetricsApi* | [**getMetric**](docs/MetricsApi.md#getmetric) | **GET** /api/v2/metrics/{projectKey}/{metricKey} | Get metric
*MetricsApi* | [**getMetrics**](docs/MetricsApi.md#getmetrics) | **GET** /api/v2/metrics/{projectKey} | List metrics
*MetricsApi* | [**patchMetric**](docs/MetricsApi.md#patchmetric) | **PATCH** /api/v2/metrics/{projectKey}/{metricKey} | Update metric
*MetricsApi* | [**postMetric**](docs/MetricsApi.md#postmetric) | **POST** /api/v2/metrics/{projectKey} | Create metric
*MetricsBetaApi* | [**createMetricGroup**](docs/MetricsBetaApi.md#createmetricgroup) | **POST** /api/v2/projects/{projectKey}/metric-groups | Create metric group
*MetricsBetaApi* | [**deleteMetricGroup**](docs/MetricsBetaApi.md#deletemetricgroup) | **DELETE** /api/v2/projects/{projectKey}/metric-groups/{metricGroupKey} | Delete metric group
*MetricsBetaApi* | [**getMetricGroup**](docs/MetricsBetaApi.md#getmetricgroup) | **GET** /api/v2/projects/{projectKey}/metric-groups/{metricGroupKey} | Get metric group
*MetricsBetaApi* | [**getMetricGroups**](docs/MetricsBetaApi.md#getmetricgroups) | **GET** /api/v2/projects/{projectKey}/metric-groups | List metric groups
*MetricsBetaApi* | [**patchMetricGroup**](docs/MetricsBetaApi.md#patchmetricgroup) | **PATCH** /api/v2/projects/{projectKey}/metric-groups/{metricGroupKey} | Patch metric group
*OAuth2ClientsApi* | [**createOAuth2Client**](docs/OAuth2ClientsApi.md#createoauth2client) | **POST** /api/v2/oauth/clients | Create a LaunchDarkly OAuth 2.0 client
*OAuth2ClientsApi* | [**deleteOAuthClient**](docs/OAuth2ClientsApi.md#deleteoauthclient) | **DELETE** /api/v2/oauth/clients/{clientId} | Delete OAuth 2.0 client
*OAuth2ClientsApi* | [**getOAuthClientById**](docs/OAuth2ClientsApi.md#getoauthclientbyid) | **GET** /api/v2/oauth/clients/{clientId} | Get client by ID
*OAuth2ClientsApi* | [**getOAuthClients**](docs/OAuth2ClientsApi.md#getoauthclients) | **GET** /api/v2/oauth/clients | Get clients
*OAuth2ClientsApi* | [**patchOAuthClient**](docs/OAuth2ClientsApi.md#patchoauthclient) | **PATCH** /api/v2/oauth/clients/{clientId} | Patch client by ID
*OtherApi* | [**getCallerIdentity**](docs/OtherApi.md#getcalleridentity) | **GET** /api/v2/caller-identity | Identify the caller
*OtherApi* | [**getIps**](docs/OtherApi.md#getips) | **GET** /api/v2/public-ip-list | Gets the public IP list
*OtherApi* | [**getOpenapiSpec**](docs/OtherApi.md#getopenapispec) | **GET** /api/v2/openapi.json | Gets the OpenAPI spec in json
*OtherApi* | [**getRoot**](docs/OtherApi.md#getroot) | **GET** /api/v2 | Root resource
*OtherApi* | [**getVersions**](docs/OtherApi.md#getversions) | **GET** /api/v2/versions | Get version information
*PersistentStoreIntegrationsBetaApi* | [**createBigSegmentStoreIntegration**](docs/PersistentStoreIntegrationsBetaApi.md#createbigsegmentstoreintegration) | **POST** /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey} | Create big segment store integration
*PersistentStoreIntegrationsBetaApi* | [**deleteBigSegmentStoreIntegration**](docs/PersistentStoreIntegrationsBetaApi.md#deletebigsegmentstoreintegration) | **DELETE** /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId} | Delete big segment store integration
*PersistentStoreIntegrationsBetaApi* | [**getBigSegmentStoreIntegration**](docs/PersistentStoreIntegrationsBetaApi.md#getbigsegmentstoreintegration) | **GET** /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId} | Get big segment store integration by ID
*PersistentStoreIntegrationsBetaApi* | [**getBigSegmentStoreIntegrations**](docs/PersistentStoreIntegrationsBetaApi.md#getbigsegmentstoreintegrations) | **GET** /api/v2/integration-capabilities/big-segment-store | List all big segment store integrations
*PersistentStoreIntegrationsBetaApi* | [**patchBigSegmentStoreIntegration**](docs/PersistentStoreIntegrationsBetaApi.md#patchbigsegmentstoreintegration) | **PATCH** /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId} | Update big segment store integration
*ProjectsApi* | [**deleteProject**](docs/ProjectsApi.md#deleteproject) | **DELETE** /api/v2/projects/{projectKey} | Delete project
*ProjectsApi* | [**getFlagDefaultsByProject**](docs/ProjectsApi.md#getflagdefaultsbyproject) | **GET** /api/v2/projects/{projectKey}/flag-defaults | Get flag defaults for project
*ProjectsApi* | [**getProject**](docs/ProjectsApi.md#getproject) | **GET** /api/v2/projects/{projectKey} | Get project
*ProjectsApi* | [**getProjects**](docs/ProjectsApi.md#getprojects) | **GET** /api/v2/projects | List projects
*ProjectsApi* | [**patchFlagDefaultsByProject**](docs/ProjectsApi.md#patchflagdefaultsbyproject) | **PATCH** /api/v2/projects/{projectKey}/flag-defaults | Update flag default for project
*ProjectsApi* | [**patchProject**](docs/ProjectsApi.md#patchproject) | **PATCH** /api/v2/projects/{projectKey} | Update project
*ProjectsApi* | [**postProject**](docs/ProjectsApi.md#postproject) | **POST** /api/v2/projects | Create project
*ProjectsApi* | [**putFlagDefaultsByProject**](docs/ProjectsApi.md#putflagdefaultsbyproject) | **PUT** /api/v2/projects/{projectKey}/flag-defaults | Create or update flag defaults for project
*RelayProxyConfigurationsApi* | [**deleteRelayAutoConfig**](docs/RelayProxyConfigurationsApi.md#deleterelayautoconfig) | **DELETE** /api/v2/account/relay-auto-configs/{id} | Delete Relay Proxy config by ID
*RelayProxyConfigurationsApi* | [**getRelayProxyConfig**](docs/RelayProxyConfigurationsApi.md#getrelayproxyconfig) | **GET** /api/v2/account/relay-auto-configs/{id} | Get Relay Proxy config
*RelayProxyConfigurationsApi* | [**getRelayProxyConfigs**](docs/RelayProxyConfigurationsApi.md#getrelayproxyconfigs) | **GET** /api/v2/account/relay-auto-configs | List Relay Proxy configs
*RelayProxyConfigurationsApi* | [**patchRelayAutoConfig**](docs/RelayProxyConfigurationsApi.md#patchrelayautoconfig) | **PATCH** /api/v2/account/relay-auto-configs/{id} | Update a Relay Proxy config
*RelayProxyConfigurationsApi* | [**postRelayAutoConfig**](docs/RelayProxyConfigurationsApi.md#postrelayautoconfig) | **POST** /api/v2/account/relay-auto-configs | Create a new Relay Proxy config
*RelayProxyConfigurationsApi* | [**resetRelayAutoConfig**](docs/RelayProxyConfigurationsApi.md#resetrelayautoconfig) | **POST** /api/v2/account/relay-auto-configs/{id}/reset | Reset Relay Proxy configuration key
*ReleasePipelinesBetaApi* | [**deleteReleasePipeline**](docs/ReleasePipelinesBetaApi.md#deletereleasepipeline) | **DELETE** /api/v2/projects/{projectKey}/release-pipelines/{pipelineKey} | Delete release pipeline
*ReleasePipelinesBetaApi* | [**getAllReleasePipelines**](docs/ReleasePipelinesBetaApi.md#getallreleasepipelines) | **GET** /api/v2/projects/{projectKey}/release-pipelines | Get all release pipelines
*ReleasePipelinesBetaApi* | [**getAllReleaseProgressionsForReleasePipeline**](docs/ReleasePipelinesBetaApi.md#getallreleaseprogressionsforreleasepipeline) | **GET** /api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}/releases | Get release progressions for release pipeline
*ReleasePipelinesBetaApi* | [**getReleasePipelineByKey**](docs/ReleasePipelinesBetaApi.md#getreleasepipelinebykey) | **GET** /api/v2/projects/{projectKey}/release-pipelines/{pipelineKey} | Get release pipeline by key
*ReleasePipelinesBetaApi* | [**postReleasePipeline**](docs/ReleasePipelinesBetaApi.md#postreleasepipeline) | **POST** /api/v2/projects/{projectKey}/release-pipelines | Create a release pipeline
*ReleasePipelinesBetaApi* | [**putReleasePipeline**](docs/ReleasePipelinesBetaApi.md#putreleasepipeline) | **PUT** /api/v2/projects/{projectKey}/release-pipelines/{pipelineKey} | Update a release pipeline
*ReleasePoliciesBetaApi* | [**deleteReleasePolicy**](docs/ReleasePoliciesBetaApi.md#deletereleasepolicy) | **DELETE** /api/v2/projects/{projectKey}/release-policies/{policyKey} | Delete a release policy
*ReleasePoliciesBetaApi* | [**getReleasePolicies**](docs/ReleasePoliciesBetaApi.md#getreleasepolicies) | **GET** /api/v2/projects/{projectKey}/release-policies | List release policies
*ReleasePoliciesBetaApi* | [**getReleasePolicy**](docs/ReleasePoliciesBetaApi.md#getreleasepolicy) | **GET** /api/v2/projects/{projectKey}/release-policies/{policyKey} | Get a release policy by key
*ReleasePoliciesBetaApi* | [**postReleasePoliciesOrder**](docs/ReleasePoliciesBetaApi.md#postreleasepoliciesorder) | **POST** /api/v2/projects/{projectKey}/release-policies/order | Update the order of existing release policies
*ReleasePoliciesBetaApi* | [**postReleasePolicy**](docs/ReleasePoliciesBetaApi.md#postreleasepolicy) | **POST** /api/v2/projects/{projectKey}/release-policies | Create a release policy
*ReleasePoliciesBetaApi* | [**putReleasePolicy**](docs/ReleasePoliciesBetaApi.md#putreleasepolicy) | **PUT** /api/v2/projects/{projectKey}/release-policies/{policyKey} | Update a release policy
*ReleasesBetaApi* | [**createReleaseForFlag**](docs/ReleasesBetaApi.md#createreleaseforflag) | **PUT** /api/v2/projects/{projectKey}/flags/{flagKey}/release | Create a new release for flag
*ReleasesBetaApi* | [**deleteReleaseByFlagKey**](docs/ReleasesBetaApi.md#deletereleasebyflagkey) | **DELETE** /api/v2/flags/{projectKey}/{flagKey}/release | Delete a release for flag
*ReleasesBetaApi* | [**getReleaseByFlagKey**](docs/ReleasesBetaApi.md#getreleasebyflagkey) | **GET** /api/v2/flags/{projectKey}/{flagKey}/release | Get release for flag
*ReleasesBetaApi* | [**patchReleaseByFlagKey**](docs/ReleasesBetaApi.md#patchreleasebyflagkey) | **PATCH** /api/v2/flags/{projectKey}/{flagKey}/release | Patch release for flag
*ReleasesBetaApi* | [**updatePhaseStatus**](docs/ReleasesBetaApi.md#updatephasestatus) | **PUT** /api/v2/projects/{projectKey}/flags/{flagKey}/release/phases/{phaseId} | Update phase status for release
*ScheduledChangesApi* | [**deleteFlagConfigScheduledChanges**](docs/ScheduledChangesApi.md#deleteflagconfigscheduledchanges) | **DELETE** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id} | Delete scheduled changes workflow
*ScheduledChangesApi* | [**getFeatureFlagScheduledChange**](docs/ScheduledChangesApi.md#getfeatureflagscheduledchange) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id} | Get a scheduled change
*ScheduledChangesApi* | [**getFlagConfigScheduledChanges**](docs/ScheduledChangesApi.md#getflagconfigscheduledchanges) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes | List scheduled changes
*ScheduledChangesApi* | [**patchFlagConfigScheduledChange**](docs/ScheduledChangesApi.md#patchflagconfigscheduledchange) | **PATCH** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id} | Update scheduled changes workflow
*ScheduledChangesApi* | [**postFlagConfigScheduledChanges**](docs/ScheduledChangesApi.md#postflagconfigscheduledchanges) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes | Create scheduled changes workflow
*SegmentsApi* | [**createBigSegmentExport**](docs/SegmentsApi.md#createbigsegmentexport) | **POST** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/exports | Create big segment export
*SegmentsApi* | [**createBigSegmentImport**](docs/SegmentsApi.md#createbigsegmentimport) | **POST** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/imports | Create big segment import
*SegmentsApi* | [**deleteSegment**](docs/SegmentsApi.md#deletesegment) | **DELETE** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey} | Delete segment
*SegmentsApi* | [**getBigSegmentExport**](docs/SegmentsApi.md#getbigsegmentexport) | **GET** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/exports/{exportID} | Get big segment export
*SegmentsApi* | [**getBigSegmentImport**](docs/SegmentsApi.md#getbigsegmentimport) | **GET** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/imports/{importID} | Get big segment import
*SegmentsApi* | [**getContextInstanceSegmentsMembershipByEnv**](docs/SegmentsApi.md#getcontextinstancesegmentsmembershipbyenv) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/segments/evaluate | List segment memberships for context instance
*SegmentsApi* | [**getExpiringTargetsForSegment**](docs/SegmentsApi.md#getexpiringtargetsforsegment) | **GET** /api/v2/segments/{projectKey}/{segmentKey}/expiring-targets/{environmentKey} | Get expiring targets for segment
*SegmentsApi* | [**getExpiringUserTargetsForSegment**](docs/SegmentsApi.md#getexpiringusertargetsforsegment) | **GET** /api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey} | Get expiring user targets for segment
*SegmentsApi* | [**getSegment**](docs/SegmentsApi.md#getsegment) | **GET** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey} | Get segment
*SegmentsApi* | [**getSegmentMembershipForContext**](docs/SegmentsApi.md#getsegmentmembershipforcontext) | **GET** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/contexts/{contextKey} | Get big segment membership for context
*SegmentsApi* | [**getSegmentMembershipForUser**](docs/SegmentsApi.md#getsegmentmembershipforuser) | **GET** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users/{userKey} | Get big segment membership for user
*SegmentsApi* | [**getSegments**](docs/SegmentsApi.md#getsegments) | **GET** /api/v2/segments/{projectKey}/{environmentKey} | List segments
*SegmentsApi* | [**patchExpiringTargetsForSegment**](docs/SegmentsApi.md#patchexpiringtargetsforsegment) | **PATCH** /api/v2/segments/{projectKey}/{segmentKey}/expiring-targets/{environmentKey} | Update expiring targets for segment
*SegmentsApi* | [**patchExpiringUserTargetsForSegment**](docs/SegmentsApi.md#patchexpiringusertargetsforsegment) | **PATCH** /api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey} | Update expiring user targets for segment
*SegmentsApi* | [**patchSegment**](docs/SegmentsApi.md#patchsegment) | **PATCH** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey} | Patch segment
*SegmentsApi* | [**postSegment**](docs/SegmentsApi.md#postsegment) | **POST** /api/v2/segments/{projectKey}/{environmentKey} | Create segment
*SegmentsApi* | [**updateBigSegmentContextTargets**](docs/SegmentsApi.md#updatebigsegmentcontexttargets) | **POST** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/contexts | Update context targets on a big segment
*SegmentsApi* | [**updateBigSegmentTargets**](docs/SegmentsApi.md#updatebigsegmenttargets) | **POST** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users | Update user context targets on a big segment
*TagsApi* | [**getTags**](docs/TagsApi.md#gettags) | **GET** /api/v2/tags | List tags
*TeamsApi* | [**deleteTeam**](docs/TeamsApi.md#deleteteam) | **DELETE** /api/v2/teams/{teamKey} | Delete team
*TeamsApi* | [**getTeam**](docs/TeamsApi.md#getteam) | **GET** /api/v2/teams/{teamKey} | Get team
*TeamsApi* | [**getTeamMaintainers**](docs/TeamsApi.md#getteammaintainers) | **GET** /api/v2/teams/{teamKey}/maintainers | Get team maintainers
*TeamsApi* | [**getTeamRoles**](docs/TeamsApi.md#getteamroles) | **GET** /api/v2/teams/{teamKey}/roles | Get team custom roles
*TeamsApi* | [**getTeams**](docs/TeamsApi.md#getteams) | **GET** /api/v2/teams | List teams
*TeamsApi* | [**patchTeam**](docs/TeamsApi.md#patchteam) | **PATCH** /api/v2/teams/{teamKey} | Update team
*TeamsApi* | [**postTeam**](docs/TeamsApi.md#postteam) | **POST** /api/v2/teams | Create team
*TeamsApi* | [**postTeamMembers**](docs/TeamsApi.md#postteammembers) | **POST** /api/v2/teams/{teamKey}/members | Add multiple members to team
*TeamsBetaApi* | [**patchTeams**](docs/TeamsBetaApi.md#patchteams) | **PATCH** /api/v2/teams | Update teams
*UserSettingsApi* | [**getExpiringFlagsForUser**](docs/UserSettingsApi.md#getexpiringflagsforuser) | **GET** /api/v2/users/{projectKey}/{userKey}/expiring-user-targets/{environmentKey} | Get expiring dates on flags for user
*UserSettingsApi* | [**getUserFlagSetting**](docs/UserSettingsApi.md#getuserflagsetting) | **GET** /api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey} | Get flag setting for user
*UserSettingsApi* | [**getUserFlagSettings**](docs/UserSettingsApi.md#getuserflagsettings) | **GET** /api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags | List flag settings for user
*UserSettingsApi* | [**patchExpiringFlagsForUser**](docs/UserSettingsApi.md#patchexpiringflagsforuser) | **PATCH** /api/v2/users/{projectKey}/{userKey}/expiring-user-targets/{environmentKey} | Update expiring user target for flags
*UserSettingsApi* | [**putFlagSetting**](docs/UserSettingsApi.md#putflagsetting) | **PUT** /api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey} | Update flag settings for user
*UsersApi* | [**deleteUser**](docs/UsersApi.md#deleteuser) | **DELETE** /api/v2/users/{projectKey}/{environmentKey}/{userKey} | Delete user
*UsersApi* | [**getSearchUsers**](docs/UsersApi.md#getsearchusers) | **GET** /api/v2/user-search/{projectKey}/{environmentKey} | Find users
*UsersApi* | [**getUser**](docs/UsersApi.md#getuser) | **GET** /api/v2/users/{projectKey}/{environmentKey}/{userKey} | Get user
*UsersApi* | [**getUsers**](docs/UsersApi.md#getusers) | **GET** /api/v2/users/{projectKey}/{environmentKey} | List users
*UsersBetaApi* | [**getUserAttributeNames**](docs/UsersBetaApi.md#getuserattributenames) | **GET** /api/v2/user-attributes/{projectKey}/{environmentKey} | Get user attribute names
*ViewsBetaApi* | [**createView**](docs/ViewsBetaApi.md#createview) | **POST** /api/v2/projects/{projectKey}/views | Create view
*ViewsBetaApi* | [**deleteView**](docs/ViewsBetaApi.md#deleteview) | **DELETE** /api/v2/projects/{projectKey}/views/{viewKey} | Delete view
*ViewsBetaApi* | [**getLinkedResources**](docs/ViewsBetaApi.md#getlinkedresources) | **GET** /api/v2/projects/{projectKey}/views/{viewKey}/linked/{resourceType} | Get linked resources
*ViewsBetaApi* | [**getLinkedViews**](docs/ViewsBetaApi.md#getlinkedviews) | **GET** /api/v2/projects/{projectKey}/view-associations/{resourceType}/{resourceKey} | Get linked views for a given resource
*ViewsBetaApi* | [**getView**](docs/ViewsBetaApi.md#getview) | **GET** /api/v2/projects/{projectKey}/views/{viewKey} | Get view
*ViewsBetaApi* | [**getViews**](docs/ViewsBetaApi.md#getviews) | **GET** /api/v2/projects/{projectKey}/views | List views
*ViewsBetaApi* | [**linkResource**](docs/ViewsBetaApi.md#linkresource) | **POST** /api/v2/projects/{projectKey}/views/{viewKey}/link/{resourceType} | Link resource
*ViewsBetaApi* | [**unlinkResource**](docs/ViewsBetaApi.md#unlinkresource) | **DELETE** /api/v2/projects/{projectKey}/views/{viewKey}/link/{resourceType} | Unlink resource
*ViewsBetaApi* | [**updateView**](docs/ViewsBetaApi.md#updateview) | **PATCH** /api/v2/projects/{projectKey}/views/{viewKey} | Update view
*WebhooksApi* | [**deleteWebhook**](docs/WebhooksApi.md#deletewebhook) | **DELETE** /api/v2/webhooks/{id} | Delete webhook
*WebhooksApi* | [**getAllWebhooks**](docs/WebhooksApi.md#getallwebhooks) | **GET** /api/v2/webhooks | List webhooks
*WebhooksApi* | [**getWebhook**](docs/WebhooksApi.md#getwebhook) | **GET** /api/v2/webhooks/{id} | Get webhook
*WebhooksApi* | [**patchWebhook**](docs/WebhooksApi.md#patchwebhook) | **PATCH** /api/v2/webhooks/{id} | Update webhook
*WebhooksApi* | [**postWebhook**](docs/WebhooksApi.md#postwebhook) | **POST** /api/v2/webhooks | Creates a webhook
*WorkflowTemplatesApi* | [**createWorkflowTemplate**](docs/WorkflowTemplatesApi.md#createworkflowtemplate) | **POST** /api/v2/templates | Create workflow template
*WorkflowTemplatesApi* | [**deleteWorkflowTemplate**](docs/WorkflowTemplatesApi.md#deleteworkflowtemplate) | **DELETE** /api/v2/templates/{templateKey} | Delete workflow template
*WorkflowTemplatesApi* | [**getWorkflowTemplates**](docs/WorkflowTemplatesApi.md#getworkflowtemplates) | **GET** /api/v2/templates | Get workflow templates
*WorkflowsApi* | [**deleteWorkflow**](docs/WorkflowsApi.md#deleteworkflow) | **DELETE** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows/{workflowId} | Delete workflow
*WorkflowsApi* | [**getCustomWorkflow**](docs/WorkflowsApi.md#getcustomworkflow) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows/{workflowId} | Get custom workflow
*WorkflowsApi* | [**getWorkflows**](docs/WorkflowsApi.md#getworkflows) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows | Get workflows
*WorkflowsApi* | [**postWorkflow**](docs/WorkflowsApi.md#postworkflow) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows | Create workflow


### Documentation For Models

 - [AIConfig](docs/AIConfig.md)
 - [AIConfigMaintainer](docs/AIConfigMaintainer.md)
 - [AIConfigPatch](docs/AIConfigPatch.md)
 - [AIConfigPost](docs/AIConfigPost.md)
 - [AIConfigRep](docs/AIConfigRep.md)
 - [AIConfigTargeting](docs/AIConfigTargeting.md)
 - [AIConfigTargetingDefaults](docs/AIConfigTargetingDefaults.md)
 - [AIConfigTargetingEnvironment](docs/AIConfigTargetingEnvironment.md)
 - [AIConfigTargetingEnvironmentFallthrough](docs/AIConfigTargetingEnvironmentFallthrough.md)
 - [AIConfigTargetingEnvironmentFallthroughRollout](docs/AIConfigTargetingEnvironmentFallthroughRollout.md)
 - [AIConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation](docs/AIConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation.md)
 - [AIConfigTargetingEnvironmentFallthroughRolloutVariation](docs/AIConfigTargetingEnvironmentFallthroughRolloutVariation.md)
 - [AIConfigTargetingEnvironmentRule](docs/AIConfigTargetingEnvironmentRule.md)
 - [AIConfigTargetingEnvironmentRuleClause](docs/AIConfigTargetingEnvironmentRuleClause.md)
 - [AIConfigTargetingEnvironmentTarget](docs/AIConfigTargetingEnvironmentTarget.md)
 - [AIConfigTargetingPatch](docs/AIConfigTargetingPatch.md)
 - [AIConfigTargetingVariation](docs/AIConfigTargetingVariation.md)
 - [AIConfigTargetingVariationValue](docs/AIConfigTargetingVariationValue.md)
 - [AIConfigVariation](docs/AIConfigVariation.md)
 - [AIConfigVariationPatch](docs/AIConfigVariationPatch.md)
 - [AIConfigVariationPost](docs/AIConfigVariationPost.md)
 - [AIConfigVariationsResponse](docs/AIConfigVariationsResponse.md)
 - [AIConfigs](docs/AIConfigs.md)
 - [AIConfigsSummary](docs/AIConfigsSummary.md)
 - [AITool](docs/AITool.md)
 - [AIToolPatch](docs/AIToolPatch.md)
 - [AIToolPost](docs/AIToolPost.md)
 - [AITools](docs/AITools.md)
 - [Access](docs/Access.md)
 - [AccessAllowedReason](docs/AccessAllowedReason.md)
 - [AccessAllowedRep](docs/AccessAllowedRep.md)
 - [AccessDenied](docs/AccessDenied.md)
 - [AccessDeniedReason](docs/AccessDeniedReason.md)
 - [AccessTokenPost](docs/AccessTokenPost.md)
 - [ActionInput](docs/ActionInput.md)
 - [ActionOutput](docs/ActionOutput.md)
 - [AiConfigsAccess](docs/AiConfigsAccess.md)
 - [AiConfigsAccessAllowedReason](docs/AiConfigsAccessAllowedReason.md)
 - [AiConfigsAccessAllowedRep](docs/AiConfigsAccessAllowedRep.md)
 - [AiConfigsAccessDenied](docs/AiConfigsAccessDenied.md)
 - [AiConfigsAccessDeniedReason](docs/AiConfigsAccessDeniedReason.md)
 - [AiConfigsExperimentEnabledPeriodRep](docs/AiConfigsExperimentEnabledPeriodRep.md)
 - [AiConfigsExperimentEnvironmentSettingRep](docs/AiConfigsExperimentEnvironmentSettingRep.md)
 - [AiConfigsExperimentInfoRep](docs/AiConfigsExperimentInfoRep.md)
 - [AiConfigsFilter](docs/AiConfigsFilter.md)
 - [AiConfigsLegacyExperimentRep](docs/AiConfigsLegacyExperimentRep.md)
 - [AiConfigsLink](docs/AiConfigsLink.md)
 - [AiConfigsMaintainerTeam](docs/AiConfigsMaintainerTeam.md)
 - [AiConfigsMemberSummary](docs/AiConfigsMemberSummary.md)
 - [AiConfigsMetricDataSourceRefRep](docs/AiConfigsMetricDataSourceRefRep.md)
 - [AiConfigsMetricEventDefaultRep](docs/AiConfigsMetricEventDefaultRep.md)
 - [AiConfigsMetricListingRep](docs/AiConfigsMetricListingRep.md)
 - [AiConfigsModification](docs/AiConfigsModification.md)
 - [AnnouncementAccess](docs/AnnouncementAccess.md)
 - [AnnouncementAccessAllowedReason](docs/AnnouncementAccessAllowedReason.md)
 - [AnnouncementAccessAllowedRep](docs/AnnouncementAccessAllowedRep.md)
 - [AnnouncementAccessDenied](docs/AnnouncementAccessDenied.md)
 - [AnnouncementAccessDeniedReason](docs/AnnouncementAccessDeniedReason.md)
 - [AnnouncementAccessRep](docs/AnnouncementAccessRep.md)
 - [AnnouncementLink](docs/AnnouncementLink.md)
 - [AnnouncementPaginatedLinks](docs/AnnouncementPaginatedLinks.md)
 - [AnnouncementPatchOperation](docs/AnnouncementPatchOperation.md)
 - [AnnouncementResponse](docs/AnnouncementResponse.md)
 - [AnnouncementResponseLinks](docs/AnnouncementResponseLinks.md)
 - [ApplicationCollectionRep](docs/ApplicationCollectionRep.md)
 - [ApplicationFlagCollectionRep](docs/ApplicationFlagCollectionRep.md)
 - [ApplicationRep](docs/ApplicationRep.md)
 - [ApplicationVersionRep](docs/ApplicationVersionRep.md)
 - [ApplicationVersionsCollectionRep](docs/ApplicationVersionsCollectionRep.md)
 - [ApprovalRequestResponse](docs/ApprovalRequestResponse.md)
 - [ApprovalRequestSetting](docs/ApprovalRequestSetting.md)
 - [ApprovalRequestSettingWithEnvs](docs/ApprovalRequestSettingWithEnvs.md)
 - [ApprovalRequestSettingsPatch](docs/ApprovalRequestSettingsPatch.md)
 - [ApprovalSettings](docs/ApprovalSettings.md)
 - [ApprovalsCapabilityConfig](docs/ApprovalsCapabilityConfig.md)
 - [AssignedToRep](docs/AssignedToRep.md)
 - [Audience](docs/Audience.md)
 - [AudienceConfiguration](docs/AudienceConfiguration.md)
 - [AudiencePost](docs/AudiencePost.md)
 - [AuditLogEntryListingRep](docs/AuditLogEntryListingRep.md)
 - [AuditLogEntryListingRepCollection](docs/AuditLogEntryListingRepCollection.md)
 - [AuditLogEntryRep](docs/AuditLogEntryRep.md)
 - [AuditLogEventsHookCapabilityConfigPost](docs/AuditLogEventsHookCapabilityConfigPost.md)
 - [AuditLogEventsHookCapabilityConfigRep](docs/AuditLogEventsHookCapabilityConfigRep.md)
 - [AuthorizedAppDataRep](docs/AuthorizedAppDataRep.md)
 - [BigSegmentStoreIntegration](docs/BigSegmentStoreIntegration.md)
 - [BigSegmentStoreIntegrationCollection](docs/BigSegmentStoreIntegrationCollection.md)
 - [BigSegmentStoreIntegrationCollectionLinks](docs/BigSegmentStoreIntegrationCollectionLinks.md)
 - [BigSegmentStoreIntegrationLinks](docs/BigSegmentStoreIntegrationLinks.md)
 - [BigSegmentStoreStatus](docs/BigSegmentStoreStatus.md)
 - [BigSegmentTarget](docs/BigSegmentTarget.md)
 - [BooleanDefaults](docs/BooleanDefaults.md)
 - [BooleanFlagDefaults](docs/BooleanFlagDefaults.md)
 - [BranchCollectionRep](docs/BranchCollectionRep.md)
 - [BranchRep](docs/BranchRep.md)
 - [BulkEditMembersRep](docs/BulkEditMembersRep.md)
 - [BulkEditTeamsRep](docs/BulkEditTeamsRep.md)
 - [CallerIdentityRep](docs/CallerIdentityRep.md)
 - [CapabilityConfigPost](docs/CapabilityConfigPost.md)
 - [CapabilityConfigRep](docs/CapabilityConfigRep.md)
 - [Clause](docs/Clause.md)
 - [Client](docs/Client.md)
 - [ClientCollection](docs/ClientCollection.md)
 - [ClientSideAvailability](docs/ClientSideAvailability.md)
 - [ClientSideAvailabilityPost](docs/ClientSideAvailabilityPost.md)
 - [CompletedBy](docs/CompletedBy.md)
 - [ConditionInput](docs/ConditionInput.md)
 - [ConditionOutput](docs/ConditionOutput.md)
 - [Conflict](docs/Conflict.md)
 - [ConflictOutput](docs/ConflictOutput.md)
 - [ContextAttributeName](docs/ContextAttributeName.md)
 - [ContextAttributeNames](docs/ContextAttributeNames.md)
 - [ContextAttributeNamesCollection](docs/ContextAttributeNamesCollection.md)
 - [ContextAttributeValue](docs/ContextAttributeValue.md)
 - [ContextAttributeValues](docs/ContextAttributeValues.md)
 - [ContextAttributeValuesCollection](docs/ContextAttributeValuesCollection.md)
 - [ContextInstanceEvaluation](docs/ContextInstanceEvaluation.md)
 - [ContextInstanceEvaluationReason](docs/ContextInstanceEvaluationReason.md)
 - [ContextInstanceEvaluations](docs/ContextInstanceEvaluations.md)
 - [ContextInstanceRecord](docs/ContextInstanceRecord.md)
 - [ContextInstanceSearch](docs/ContextInstanceSearch.md)
 - [ContextInstanceSegmentMembership](docs/ContextInstanceSegmentMembership.md)
 - [ContextInstanceSegmentMemberships](docs/ContextInstanceSegmentMemberships.md)
 - [ContextInstances](docs/ContextInstances.md)
 - [ContextKindRep](docs/ContextKindRep.md)
 - [ContextKindsCollectionRep](docs/ContextKindsCollectionRep.md)
 - [ContextRecord](docs/ContextRecord.md)
 - [ContextSearch](docs/ContextSearch.md)
 - [Contexts](docs/Contexts.md)
 - [CopiedFromEnv](docs/CopiedFromEnv.md)
 - [CoreLink](docs/CoreLink.md)
 - [CovarianceInfoRep](docs/CovarianceInfoRep.md)
 - [CreateAnnouncementBody](docs/CreateAnnouncementBody.md)
 - [CreateApprovalRequestRequest](docs/CreateApprovalRequestRequest.md)
 - [CreateCopyFlagConfigApprovalRequestRequest](docs/CreateCopyFlagConfigApprovalRequestRequest.md)
 - [CreateFlagConfigApprovalRequestRequest](docs/CreateFlagConfigApprovalRequestRequest.md)
 - [CreatePhaseInput](docs/CreatePhaseInput.md)
 - [CreateReleaseInput](docs/CreateReleaseInput.md)
 - [CreateReleasePipelineInput](docs/CreateReleasePipelineInput.md)
 - [CreateWorkflowTemplateInput](docs/CreateWorkflowTemplateInput.md)
 - [CustomProperty](docs/CustomProperty.md)
 - [CustomRole](docs/CustomRole.md)
 - [CustomRolePost](docs/CustomRolePost.md)
 - [CustomRoles](docs/CustomRoles.md)
 - [CustomWorkflowInput](docs/CustomWorkflowInput.md)
 - [CustomWorkflowMeta](docs/CustomWorkflowMeta.md)
 - [CustomWorkflowOutput](docs/CustomWorkflowOutput.md)
 - [CustomWorkflowStageMeta](docs/CustomWorkflowStageMeta.md)
 - [CustomWorkflowsListingOutput](docs/CustomWorkflowsListingOutput.md)
 - [DefaultClientSideAvailability](docs/DefaultClientSideAvailability.md)
 - [DefaultClientSideAvailabilityPost](docs/DefaultClientSideAvailabilityPost.md)
 - [Defaults](docs/Defaults.md)
 - [DependentExperimentRep](docs/DependentExperimentRep.md)
 - [DependentFlag](docs/DependentFlag.md)
 - [DependentFlagEnvironment](docs/DependentFlagEnvironment.md)
 - [DependentFlagsByEnvironment](docs/DependentFlagsByEnvironment.md)
 - [DependentMeasuredRolloutRep](docs/DependentMeasuredRolloutRep.md)
 - [DependentMetricGroupRep](docs/DependentMetricGroupRep.md)
 - [DependentMetricGroupRepWithMetrics](docs/DependentMetricGroupRepWithMetrics.md)
 - [DependentMetricOrMetricGroupRep](docs/DependentMetricOrMetricGroupRep.md)
 - [DeploymentCollectionRep](docs/DeploymentCollectionRep.md)
 - [DeploymentRep](docs/DeploymentRep.md)
 - [Destination](docs/Destination.md)
 - [DestinationPost](docs/DestinationPost.md)
 - [Destinations](docs/Destinations.md)
 - [DynamicOptions](docs/DynamicOptions.md)
 - [DynamicOptionsParser](docs/DynamicOptionsParser.md)
 - [Endpoint](docs/Endpoint.md)
 - [Environment](docs/Environment.md)
 - [EnvironmentPost](docs/EnvironmentPost.md)
 - [EnvironmentSummary](docs/EnvironmentSummary.md)
 - [Environments](docs/Environments.md)
 - [EvaluationReason](docs/EvaluationReason.md)
 - [EvaluationsSummary](docs/EvaluationsSummary.md)
 - [EventFilter](docs/EventFilter.md)
 - [ExecutionOutput](docs/ExecutionOutput.md)
 - [ExpandableApprovalRequestResponse](docs/ExpandableApprovalRequestResponse.md)
 - [ExpandableApprovalRequestsResponse](docs/ExpandableApprovalRequestsResponse.md)
 - [ExpandedAIConfig](docs/ExpandedAIConfig.md)
 - [ExpandedDirectlyLinkedFlag](docs/ExpandedDirectlyLinkedFlag.md)
 - [ExpandedDirectlyLinkedFlags](docs/ExpandedDirectlyLinkedFlags.md)
 - [ExpandedDirectlyLinkedSegment](docs/ExpandedDirectlyLinkedSegment.md)
 - [ExpandedDirectlyLinkedSegments](docs/ExpandedDirectlyLinkedSegments.md)
 - [ExpandedFlag](docs/ExpandedFlag.md)
 - [ExpandedFlagRep](docs/ExpandedFlagRep.md)
 - [ExpandedLinkedAIConfigs](docs/ExpandedLinkedAIConfigs.md)
 - [ExpandedLinkedFlags](docs/ExpandedLinkedFlags.md)
 - [ExpandedLinkedMetrics](docs/ExpandedLinkedMetrics.md)
 - [ExpandedLinkedResources](docs/ExpandedLinkedResources.md)
 - [ExpandedLinkedResourcesAIConfigs](docs/ExpandedLinkedResourcesAIConfigs.md)
 - [ExpandedLinkedResourcesFlags](docs/ExpandedLinkedResourcesFlags.md)
 - [ExpandedLinkedResourcesItems](docs/ExpandedLinkedResourcesItems.md)
 - [ExpandedLinkedResourcesMetrics](docs/ExpandedLinkedResourcesMetrics.md)
 - [ExpandedLinkedResourcesSegments](docs/ExpandedLinkedResourcesSegments.md)
 - [ExpandedLinkedSegments](docs/ExpandedLinkedSegments.md)
 - [ExpandedMetric](docs/ExpandedMetric.md)
 - [ExpandedResourceRep](docs/ExpandedResourceRep.md)
 - [ExpandedSegment](docs/ExpandedSegment.md)
 - [Experiment](docs/Experiment.md)
 - [ExperimentAllocationRep](docs/ExperimentAllocationRep.md)
 - [ExperimentCollectionRep](docs/ExperimentCollectionRep.md)
 - [ExperimentEnabledPeriodRep](docs/ExperimentEnabledPeriodRep.md)
 - [ExperimentEnvironmentSettingRep](docs/ExperimentEnvironmentSettingRep.md)
 - [ExperimentInfoRep](docs/ExperimentInfoRep.md)
 - [ExperimentPatchInput](docs/ExperimentPatchInput.md)
 - [ExperimentPost](docs/ExperimentPost.md)
 - [ExpiringTarget](docs/ExpiringTarget.md)
 - [ExpiringTargetError](docs/ExpiringTargetError.md)
 - [ExpiringTargetGetResponse](docs/ExpiringTargetGetResponse.md)
 - [ExpiringTargetPatchResponse](docs/ExpiringTargetPatchResponse.md)
 - [ExpiringUserTargetGetResponse](docs/ExpiringUserTargetGetResponse.md)
 - [ExpiringUserTargetItem](docs/ExpiringUserTargetItem.md)
 - [ExpiringUserTargetPatchResponse](docs/ExpiringUserTargetPatchResponse.md)
 - [Export](docs/Export.md)
 - [Extinction](docs/Extinction.md)
 - [ExtinctionCollectionRep](docs/ExtinctionCollectionRep.md)
 - [FailedResourceLink](docs/FailedResourceLink.md)
 - [FailureReasonRep](docs/FailureReasonRep.md)
 - [FeatureFlag](docs/FeatureFlag.md)
 - [FeatureFlagBody](docs/FeatureFlagBody.md)
 - [FeatureFlagConfig](docs/FeatureFlagConfig.md)
 - [FeatureFlagScheduledChange](docs/FeatureFlagScheduledChange.md)
 - [FeatureFlagScheduledChanges](docs/FeatureFlagScheduledChanges.md)
 - [FeatureFlagStatus](docs/FeatureFlagStatus.md)
 - [FeatureFlagStatusAcrossEnvironments](docs/FeatureFlagStatusAcrossEnvironments.md)
 - [FeatureFlagStatuses](docs/FeatureFlagStatuses.md)
 - [FeatureFlags](docs/FeatureFlags.md)
 - [FileRep](docs/FileRep.md)
 - [Filter](docs/Filter.md)
 - [FlagConfigApprovalRequestResponse](docs/FlagConfigApprovalRequestResponse.md)
 - [FlagConfigApprovalRequestsResponse](docs/FlagConfigApprovalRequestsResponse.md)
 - [FlagConfigEvaluation](docs/FlagConfigEvaluation.md)
 - [FlagConfigMigrationSettingsRep](docs/FlagConfigMigrationSettingsRep.md)
 - [FlagCopyConfigEnvironment](docs/FlagCopyConfigEnvironment.md)
 - [FlagCopyConfigPost](docs/FlagCopyConfigPost.md)
 - [FlagDefaultsRep](docs/FlagDefaultsRep.md)
 - [FlagEventCollectionRep](docs/FlagEventCollectionRep.md)
 - [FlagEventExperiment](docs/FlagEventExperiment.md)
 - [FlagEventExperimentCollection](docs/FlagEventExperimentCollection.md)
 - [FlagEventExperimentIteration](docs/FlagEventExperimentIteration.md)
 - [FlagEventImpactRep](docs/FlagEventImpactRep.md)
 - [FlagEventMemberRep](docs/FlagEventMemberRep.md)
 - [FlagEventRep](docs/FlagEventRep.md)
 - [FlagFollowersByProjEnvGetRep](docs/FlagFollowersByProjEnvGetRep.md)
 - [FlagFollowersGetRep](docs/FlagFollowersGetRep.md)
 - [FlagImportConfigurationPost](docs/FlagImportConfigurationPost.md)
 - [FlagImportIntegration](docs/FlagImportIntegration.md)
 - [FlagImportIntegrationCollection](docs/FlagImportIntegrationCollection.md)
 - [FlagImportIntegrationCollectionLinks](docs/FlagImportIntegrationCollectionLinks.md)
 - [FlagImportIntegrationLinks](docs/FlagImportIntegrationLinks.md)
 - [FlagImportStatus](docs/FlagImportStatus.md)
 - [FlagInput](docs/FlagInput.md)
 - [FlagLinkCollectionRep](docs/FlagLinkCollectionRep.md)
 - [FlagLinkMember](docs/FlagLinkMember.md)
 - [FlagLinkPost](docs/FlagLinkPost.md)
 - [FlagLinkRep](docs/FlagLinkRep.md)
 - [FlagListingRep](docs/FlagListingRep.md)
 - [FlagMigrationSettingsRep](docs/FlagMigrationSettingsRep.md)
 - [FlagPrerequisitePost](docs/FlagPrerequisitePost.md)
 - [FlagReferenceCollectionRep](docs/FlagReferenceCollectionRep.md)
 - [FlagReferenceRep](docs/FlagReferenceRep.md)
 - [FlagRep](docs/FlagRep.md)
 - [FlagScheduledChangesInput](docs/FlagScheduledChangesInput.md)
 - [FlagSempatch](docs/FlagSempatch.md)
 - [FlagStatusRep](docs/FlagStatusRep.md)
 - [FlagSummary](docs/FlagSummary.md)
 - [FlagTriggerInput](docs/FlagTriggerInput.md)
 - [FlagsSummary](docs/FlagsSummary.md)
 - [FollowFlagMember](docs/FollowFlagMember.md)
 - [FollowersPerFlag](docs/FollowersPerFlag.md)
 - [ForbiddenErrorRep](docs/ForbiddenErrorRep.md)
 - [FormVariable](docs/FormVariable.md)
 - [GenerateTrustPolicyPostRep](docs/GenerateTrustPolicyPostRep.md)
 - [GenerateWarehouseDestinationKeyPairPostRep](docs/GenerateWarehouseDestinationKeyPairPostRep.md)
 - [GetAnnouncementsPublic200Response](docs/GetAnnouncementsPublic200Response.md)
 - [GuardedReleaseConfig](docs/GuardedReleaseConfig.md)
 - [HMACSignature](docs/HMACSignature.md)
 - [HeaderItems](docs/HeaderItems.md)
 - [HoldoutDetailRep](docs/HoldoutDetailRep.md)
 - [HoldoutPatchInput](docs/HoldoutPatchInput.md)
 - [HoldoutPostRequest](docs/HoldoutPostRequest.md)
 - [HoldoutRep](docs/HoldoutRep.md)
 - [HoldoutsCollectionRep](docs/HoldoutsCollectionRep.md)
 - [HunkRep](docs/HunkRep.md)
 - [Import](docs/Import.md)
 - [InitiatorRep](docs/InitiatorRep.md)
 - [InsightGroup](docs/InsightGroup.md)
 - [InsightGroupCollection](docs/InsightGroupCollection.md)
 - [InsightGroupCollectionMetadata](docs/InsightGroupCollectionMetadata.md)
 - [InsightGroupCollectionScoreMetadata](docs/InsightGroupCollectionScoreMetadata.md)
 - [InsightGroupScores](docs/InsightGroupScores.md)
 - [InsightGroupsCountByIndicator](docs/InsightGroupsCountByIndicator.md)
 - [InsightPeriod](docs/InsightPeriod.md)
 - [InsightScores](docs/InsightScores.md)
 - [InsightsChart](docs/InsightsChart.md)
 - [InsightsChartBounds](docs/InsightsChartBounds.md)
 - [InsightsChartMetadata](docs/InsightsChartMetadata.md)
 - [InsightsChartMetric](docs/InsightsChartMetric.md)
 - [InsightsChartSeries](docs/InsightsChartSeries.md)
 - [InsightsChartSeriesDataPoint](docs/InsightsChartSeriesDataPoint.md)
 - [InsightsChartSeriesMetadata](docs/InsightsChartSeriesMetadata.md)
 - [InsightsChartSeriesMetadataAxis](docs/InsightsChartSeriesMetadataAxis.md)
 - [InsightsMetricIndicatorRange](docs/InsightsMetricIndicatorRange.md)
 - [InsightsMetricScore](docs/InsightsMetricScore.md)
 - [InsightsMetricTierDefinition](docs/InsightsMetricTierDefinition.md)
 - [InsightsRepository](docs/InsightsRepository.md)
 - [InsightsRepositoryCollection](docs/InsightsRepositoryCollection.md)
 - [InsightsRepositoryProject](docs/InsightsRepositoryProject.md)
 - [InsightsRepositoryProjectCollection](docs/InsightsRepositoryProjectCollection.md)
 - [InsightsRepositoryProjectMappings](docs/InsightsRepositoryProjectMappings.md)
 - [InstructionUserRequest](docs/InstructionUserRequest.md)
 - [Integration](docs/Integration.md)
 - [IntegrationConfigurationCollectionRep](docs/IntegrationConfigurationCollectionRep.md)
 - [IntegrationConfigurationPost](docs/IntegrationConfigurationPost.md)
 - [IntegrationConfigurationsRep](docs/IntegrationConfigurationsRep.md)
 - [IntegrationDeliveryConfiguration](docs/IntegrationDeliveryConfiguration.md)
 - [IntegrationDeliveryConfigurationCollection](docs/IntegrationDeliveryConfigurationCollection.md)
 - [IntegrationDeliveryConfigurationCollectionLinks](docs/IntegrationDeliveryConfigurationCollectionLinks.md)
 - [IntegrationDeliveryConfigurationLinks](docs/IntegrationDeliveryConfigurationLinks.md)
 - [IntegrationDeliveryConfigurationPost](docs/IntegrationDeliveryConfigurationPost.md)
 - [IntegrationDeliveryConfigurationResponse](docs/IntegrationDeliveryConfigurationResponse.md)
 - [IntegrationMetadata](docs/IntegrationMetadata.md)
 - [IntegrationStatus](docs/IntegrationStatus.md)
 - [IntegrationStatusRep](docs/IntegrationStatusRep.md)
 - [IntegrationSubscriptionStatusRep](docs/IntegrationSubscriptionStatusRep.md)
 - [Integrations](docs/Integrations.md)
 - [InvalidRequestErrorRep](docs/InvalidRequestErrorRep.md)
 - [IpList](docs/IpList.md)
 - [IterationInput](docs/IterationInput.md)
 - [IterationRep](docs/IterationRep.md)
 - [JudgeAttachment](docs/JudgeAttachment.md)
 - [JudgeConfiguration](docs/JudgeConfiguration.md)
 - [LastSeenMetadata](docs/LastSeenMetadata.md)
 - [LayerCollectionRep](docs/LayerCollectionRep.md)
 - [LayerConfigurationRep](docs/LayerConfigurationRep.md)
 - [LayerPatchInput](docs/LayerPatchInput.md)
 - [LayerPost](docs/LayerPost.md)
 - [LayerRep](docs/LayerRep.md)
 - [LayerReservationRep](docs/LayerReservationRep.md)
 - [LayerSnapshotRep](docs/LayerSnapshotRep.md)
 - [LeadTimeStagesRep](docs/LeadTimeStagesRep.md)
 - [LegacyExperimentRep](docs/LegacyExperimentRep.md)
 - [Link](docs/Link.md)
 - [LinkResourceSuccessResponse](docs/LinkResourceSuccessResponse.md)
 - [Maintainer](docs/Maintainer.md)
 - [MaintainerMember](docs/MaintainerMember.md)
 - [MaintainerRep](docs/MaintainerRep.md)
 - [MaintainerTeam](docs/MaintainerTeam.md)
 - [Member](docs/Member.md)
 - [MemberDataRep](docs/MemberDataRep.md)
 - [MemberImportItem](docs/MemberImportItem.md)
 - [MemberPermissionGrantSummaryRep](docs/MemberPermissionGrantSummaryRep.md)
 - [MemberSummary](docs/MemberSummary.md)
 - [MemberTeamSummaryRep](docs/MemberTeamSummaryRep.md)
 - [MemberTeamsPostInput](docs/MemberTeamsPostInput.md)
 - [Members](docs/Members.md)
 - [MembersPatchInput](docs/MembersPatchInput.md)
 - [Message](docs/Message.md)
 - [MethodNotAllowedErrorRep](docs/MethodNotAllowedErrorRep.md)
 - [MetricByVariation](docs/MetricByVariation.md)
 - [MetricCollectionRep](docs/MetricCollectionRep.md)
 - [MetricDataSourceRefRep](docs/MetricDataSourceRefRep.md)
 - [MetricEventDefaultRep](docs/MetricEventDefaultRep.md)
 - [MetricGroupCollectionRep](docs/MetricGroupCollectionRep.md)
 - [MetricGroupPost](docs/MetricGroupPost.md)
 - [MetricGroupRep](docs/MetricGroupRep.md)
 - [MetricInGroupRep](docs/MetricInGroupRep.md)
 - [MetricInMetricGroupInput](docs/MetricInMetricGroupInput.md)
 - [MetricInput](docs/MetricInput.md)
 - [MetricListingRep](docs/MetricListingRep.md)
 - [MetricPost](docs/MetricPost.md)
 - [MetricRep](docs/MetricRep.md)
 - [MetricV2Rep](docs/MetricV2Rep.md)
 - [Metrics](docs/Metrics.md)
 - [MetricsSummary](docs/MetricsSummary.md)
 - [MigrationSafetyIssueRep](docs/MigrationSafetyIssueRep.md)
 - [MigrationSettingsPost](docs/MigrationSettingsPost.md)
 - [ModelConfig](docs/ModelConfig.md)
 - [ModelConfigPost](docs/ModelConfigPost.md)
 - [ModelError](docs/ModelError.md)
 - [Modification](docs/Modification.md)
 - [MultiEnvironmentDependentFlag](docs/MultiEnvironmentDependentFlag.md)
 - [MultiEnvironmentDependentFlags](docs/MultiEnvironmentDependentFlags.md)
 - [NamingConvention](docs/NamingConvention.md)
 - [NewMemberForm](docs/NewMemberForm.md)
 - [NotFoundErrorRep](docs/NotFoundErrorRep.md)
 - [OauthClientPost](docs/OauthClientPost.md)
 - [OptionsArray](docs/OptionsArray.md)
 - [PaginatedLinks](docs/PaginatedLinks.md)
 - [ParameterDefault](docs/ParameterDefault.md)
 - [ParameterRep](docs/ParameterRep.md)
 - [ParentAndSelfLinks](docs/ParentAndSelfLinks.md)
 - [ParentLink](docs/ParentLink.md)
 - [ParentResourceRep](docs/ParentResourceRep.md)
 - [PatchFailedErrorRep](docs/PatchFailedErrorRep.md)
 - [PatchFlagsRequest](docs/PatchFlagsRequest.md)
 - [PatchOperation](docs/PatchOperation.md)
 - [PatchSegmentExpiringTargetInputRep](docs/PatchSegmentExpiringTargetInputRep.md)
 - [PatchSegmentExpiringTargetInstruction](docs/PatchSegmentExpiringTargetInstruction.md)
 - [PatchSegmentInstruction](docs/PatchSegmentInstruction.md)
 - [PatchSegmentRequest](docs/PatchSegmentRequest.md)
 - [PatchUsersRequest](docs/PatchUsersRequest.md)
 - [PatchWithComment](docs/PatchWithComment.md)
 - [PermissionGrantInput](docs/PermissionGrantInput.md)
 - [Phase](docs/Phase.md)
 - [PhaseInfo](docs/PhaseInfo.md)
 - [PostApprovalRequestApplyRequest](docs/PostApprovalRequestApplyRequest.md)
 - [PostApprovalRequestReviewRequest](docs/PostApprovalRequestReviewRequest.md)
 - [PostDeploymentEventInput](docs/PostDeploymentEventInput.md)
 - [PostFlagScheduledChangesInput](docs/PostFlagScheduledChangesInput.md)
 - [PostInsightGroupParams](docs/PostInsightGroupParams.md)
 - [PostReleasePolicyRequest](docs/PostReleasePolicyRequest.md)
 - [Prerequisite](docs/Prerequisite.md)
 - [Project](docs/Project.md)
 - [ProjectPost](docs/ProjectPost.md)
 - [ProjectRep](docs/ProjectRep.md)
 - [ProjectSummary](docs/ProjectSummary.md)
 - [ProjectSummaryCollection](docs/ProjectSummaryCollection.md)
 - [Projects](docs/Projects.md)
 - [PullRequestCollectionRep](docs/PullRequestCollectionRep.md)
 - [PullRequestLeadTimeRep](docs/PullRequestLeadTimeRep.md)
 - [PullRequestRep](docs/PullRequestRep.md)
 - [PutBranch](docs/PutBranch.md)
 - [PutReleasePolicyRequest](docs/PutReleasePolicyRequest.md)
 - [RandomizationSettingsPut](docs/RandomizationSettingsPut.md)
 - [RandomizationSettingsRep](docs/RandomizationSettingsRep.md)
 - [RandomizationUnitInput](docs/RandomizationUnitInput.md)
 - [RandomizationUnitRep](docs/RandomizationUnitRep.md)
 - [RateLimitedErrorRep](docs/RateLimitedErrorRep.md)
 - [RecentTriggerBody](docs/RecentTriggerBody.md)
 - [ReferenceRep](docs/ReferenceRep.md)
 - [RelatedExperimentRep](docs/RelatedExperimentRep.md)
 - [RelayAutoConfigCollectionRep](docs/RelayAutoConfigCollectionRep.md)
 - [RelayAutoConfigPost](docs/RelayAutoConfigPost.md)
 - [RelayAutoConfigRep](docs/RelayAutoConfigRep.md)
 - [Release](docs/Release.md)
 - [ReleaseAudience](docs/ReleaseAudience.md)
 - [ReleaseGuardianConfiguration](docs/ReleaseGuardianConfiguration.md)
 - [ReleaseGuardianConfigurationInput](docs/ReleaseGuardianConfigurationInput.md)
 - [ReleaseMethod](docs/ReleaseMethod.md)
 - [ReleasePhase](docs/ReleasePhase.md)
 - [ReleasePipeline](docs/ReleasePipeline.md)
 - [ReleasePipelineCollection](docs/ReleasePipelineCollection.md)
 - [ReleasePoliciesAccess](docs/ReleasePoliciesAccess.md)
 - [ReleasePoliciesAccessAllowedReason](docs/ReleasePoliciesAccessAllowedReason.md)
 - [ReleasePoliciesAccessAllowedRep](docs/ReleasePoliciesAccessAllowedRep.md)
 - [ReleasePoliciesAccessDenied](docs/ReleasePoliciesAccessDenied.md)
 - [ReleasePoliciesAccessDeniedReason](docs/ReleasePoliciesAccessDeniedReason.md)
 - [ReleasePoliciesAccessRep](docs/ReleasePoliciesAccessRep.md)
 - [ReleasePoliciesResponse](docs/ReleasePoliciesResponse.md)
 - [ReleasePolicy](docs/ReleasePolicy.md)
 - [ReleasePolicyScope](docs/ReleasePolicyScope.md)
 - [ReleaseProgression](docs/ReleaseProgression.md)
 - [ReleaseProgressionCollection](docs/ReleaseProgressionCollection.md)
 - [ReleaserAudienceConfigInput](docs/ReleaserAudienceConfigInput.md)
 - [RepositoryCollectionRep](docs/RepositoryCollectionRep.md)
 - [RepositoryPost](docs/RepositoryPost.md)
 - [RepositoryRep](docs/RepositoryRep.md)
 - [ResourceAccess](docs/ResourceAccess.md)
 - [ResourceIDResponse](docs/ResourceIDResponse.md)
 - [ResourceId](docs/ResourceId.md)
 - [ResourceSummary](docs/ResourceSummary.md)
 - [RestrictedModelError](docs/RestrictedModelError.md)
 - [RestrictedModelsRequest](docs/RestrictedModelsRequest.md)
 - [RestrictedModelsResponse](docs/RestrictedModelsResponse.md)
 - [ReviewOutput](docs/ReviewOutput.md)
 - [ReviewResponse](docs/ReviewResponse.md)
 - [Rollout](docs/Rollout.md)
 - [RootResponse](docs/RootResponse.md)
 - [Rule](docs/Rule.md)
 - [RuleClause](docs/RuleClause.md)
 - [SdkListRep](docs/SdkListRep.md)
 - [SdkVersionListRep](docs/SdkVersionListRep.md)
 - [SdkVersionRep](docs/SdkVersionRep.md)
 - [SegmentBody](docs/SegmentBody.md)
 - [SegmentMetadata](docs/SegmentMetadata.md)
 - [SegmentTarget](docs/SegmentTarget.md)
 - [SegmentUserList](docs/SegmentUserList.md)
 - [SegmentUserState](docs/SegmentUserState.md)
 - [SegmentsSummary](docs/SegmentsSummary.md)
 - [SeriesListRep](docs/SeriesListRep.md)
 - [SeriesListRepFloat](docs/SeriesListRepFloat.md)
 - [SimpleHoldoutRep](docs/SimpleHoldoutRep.md)
 - [SourceEnv](docs/SourceEnv.md)
 - [SourceFlag](docs/SourceFlag.md)
 - [StageInput](docs/StageInput.md)
 - [StageOutput](docs/StageOutput.md)
 - [Statement](docs/Statement.md)
 - [StatementPost](docs/StatementPost.md)
 - [StatisticCollectionRep](docs/StatisticCollectionRep.md)
 - [StatisticRep](docs/StatisticRep.md)
 - [StatisticsRoot](docs/StatisticsRoot.md)
 - [StatusConflictErrorRep](docs/StatusConflictErrorRep.md)
 - [StatusResponse](docs/StatusResponse.md)
 - [StatusServiceUnavailable](docs/StatusServiceUnavailable.md)
 - [StoreIntegrationError](docs/StoreIntegrationError.md)
 - [SubjectDataRep](docs/SubjectDataRep.md)
 - [SubscriptionPost](docs/SubscriptionPost.md)
 - [TagsCollection](docs/TagsCollection.md)
 - [TagsLink](docs/TagsLink.md)
 - [Target](docs/Target.md)
 - [TargetResourceRep](docs/TargetResourceRep.md)
 - [Team](docs/Team.md)
 - [TeamCustomRole](docs/TeamCustomRole.md)
 - [TeamCustomRoles](docs/TeamCustomRoles.md)
 - [TeamImportsRep](docs/TeamImportsRep.md)
 - [TeamMaintainers](docs/TeamMaintainers.md)
 - [TeamMembers](docs/TeamMembers.md)
 - [TeamPatchInput](docs/TeamPatchInput.md)
 - [TeamPostInput](docs/TeamPostInput.md)
 - [TeamProjects](docs/TeamProjects.md)
 - [Teams](docs/Teams.md)
 - [TeamsPatchInput](docs/TeamsPatchInput.md)
 - [TimestampRep](docs/TimestampRep.md)
 - [Token](docs/Token.md)
 - [TokenSummary](docs/TokenSummary.md)
 - [Tokens](docs/Tokens.md)
 - [TreatmentInput](docs/TreatmentInput.md)
 - [TreatmentParameterInput](docs/TreatmentParameterInput.md)
 - [TreatmentRep](docs/TreatmentRep.md)
 - [TriggerPost](docs/TriggerPost.md)
 - [TriggerWorkflowCollectionRep](docs/TriggerWorkflowCollectionRep.md)
 - [TriggerWorkflowRep](docs/TriggerWorkflowRep.md)
 - [TrustPolicyDetails](docs/TrustPolicyDetails.md)
 - [TrustPolicyStatement](docs/TrustPolicyStatement.md)
 - [UnauthorizedErrorRep](docs/UnauthorizedErrorRep.md)
 - [UnlinkResourceSuccessResponse](docs/UnlinkResourceSuccessResponse.md)
 - [UpdatePhaseStatusInput](docs/UpdatePhaseStatusInput.md)
 - [UpdateReleasePipelineInput](docs/UpdateReleasePipelineInput.md)
 - [UpsertContextKindPayload](docs/UpsertContextKindPayload.md)
 - [UpsertFlagDefaultsPayload](docs/UpsertFlagDefaultsPayload.md)
 - [UpsertPayloadRep](docs/UpsertPayloadRep.md)
 - [UpsertResponseRep](docs/UpsertResponseRep.md)
 - [UrlPost](docs/UrlPost.md)
 - [User](docs/User.md)
 - [UserAttributeNamesRep](docs/UserAttributeNamesRep.md)
 - [UserFlagSetting](docs/UserFlagSetting.md)
 - [UserFlagSettings](docs/UserFlagSettings.md)
 - [UserRecord](docs/UserRecord.md)
 - [UserSegment](docs/UserSegment.md)
 - [UserSegmentRule](docs/UserSegmentRule.md)
 - [UserSegments](docs/UserSegments.md)
 - [Users](docs/Users.md)
 - [UsersRep](docs/UsersRep.md)
 - [ValidationFailedErrorRep](docs/ValidationFailedErrorRep.md)
 - [ValuePut](docs/ValuePut.md)
 - [Variation](docs/Variation.md)
 - [VariationEvalSummary](docs/VariationEvalSummary.md)
 - [VariationOrRolloutRep](docs/VariationOrRolloutRep.md)
 - [VariationSummary](docs/VariationSummary.md)
 - [VariationTool](docs/VariationTool.md)
 - [VariationToolPost](docs/VariationToolPost.md)
 - [VersionsRep](docs/VersionsRep.md)
 - [View](docs/View.md)
 - [ViewLinkRequest](docs/ViewLinkRequest.md)
 - [ViewLinkRequestKeys](docs/ViewLinkRequestKeys.md)
 - [ViewLinkRequestSegmentIdentifier](docs/ViewLinkRequestSegmentIdentifier.md)
 - [ViewLinkRequestSegmentIdentifiers](docs/ViewLinkRequestSegmentIdentifiers.md)
 - [ViewLinkedResource](docs/ViewLinkedResource.md)
 - [ViewLinkedResourceDetails](docs/ViewLinkedResourceDetails.md)
 - [ViewLinkedResources](docs/ViewLinkedResources.md)
 - [ViewPatch](docs/ViewPatch.md)
 - [ViewPost](docs/ViewPost.md)
 - [Views](docs/Views.md)
 - [ViewsAccess](docs/ViewsAccess.md)
 - [ViewsAccessAllowedReason](docs/ViewsAccessAllowedReason.md)
 - [ViewsAccessAllowedRep](docs/ViewsAccessAllowedRep.md)
 - [ViewsAccessDenied](docs/ViewsAccessDenied.md)
 - [ViewsAccessDeniedReason](docs/ViewsAccessDeniedReason.md)
 - [ViewsAccessRep](docs/ViewsAccessRep.md)
 - [ViewsLink](docs/ViewsLink.md)
 - [ViewsMaintainerMember](docs/ViewsMaintainerMember.md)
 - [ViewsMaintainerTeam](docs/ViewsMaintainerTeam.md)
 - [ViewsPaginatedLinks](docs/ViewsPaginatedLinks.md)
 - [ViewsSelfLink](docs/ViewsSelfLink.md)
 - [Webhook](docs/Webhook.md)
 - [WebhookPost](docs/WebhookPost.md)
 - [Webhooks](docs/Webhooks.md)
 - [WeightedVariation](docs/WeightedVariation.md)
 - [WorkflowTemplateMetadata](docs/WorkflowTemplateMetadata.md)
 - [WorkflowTemplateOutput](docs/WorkflowTemplateOutput.md)
 - [WorkflowTemplateParameter](docs/WorkflowTemplateParameter.md)
 - [WorkflowTemplatesListingOutputRep](docs/WorkflowTemplatesListingOutputRep.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="ApiKey"></a>
### ApiKey

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

## Sample Code

```ts
import { FeatureFlagsApi, Configuration, FeatureFlagBody } from "launchdarkly-api-typescript";

const apiToken = process.env.LD_API_KEY;
const config = new Configuration({apiKey: apiToken});
let apiInstance = new FeatureFlagsApi(config);

const successCallback = function(res){
    console.log('API called successfully. Returned data: ' + JSON.stringify(res.data));
};
const errorCallback = function(error) {
    console.error('Error!', error);
    process.exit(1);
};

const createSuccessCallback = function(res){
    successCallback(res);

    // Clean up
    apiInstance.deleteFeatureFlag(projectName, keyName).then(successCallback, errorCallback);
};

const projectName = "openapi";
const keyName = "test-typescript";
const flagBody: FeatureFlagBody = {
    name: "Test Flag Typescript",
    key: keyName,
    variations: [{value: [1, 2]}, {value: [3, 4]}, {value: [5]}]
};

apiInstance.deleteFeatureFlag(projectName, keyName)
    .then(() => {
        console.log("flag deleted")
        apiInstance.postFeatureFlag(projectName, flagBody).then(createSuccessCallback, errorCallback);
    })
    .catch((err) => {
        if (err?.response?.status == 404) {
            console.log("No flag to cleanup")
        } else {
            errorCallback(err)
        }
        apiInstance.postFeatureFlag(projectName, flagBody).then(createSuccessCallback, errorCallback);
    })
```
