/* tslint:disable */
/* eslint-disable */
/**
 * LaunchDarkly REST API
 * # Authentication  All REST API resources are authenticated with either [personal or service access tokens](https://docs.launchdarkly.com/home/account-security/api-access-tokens), or session cookies. Other authentication mechanisms are not supported. You can manage personal access tokens on your [Account settings](https://app.launchdarkly.com/settings/tokens) page.  LaunchDarkly also has SDK keys, mobile keys, and client-side IDs that are used by our server-side SDKs, mobile SDKs, and client-side SDKs, respectively. **These keys cannot be used to access our REST API**. These keys are environment-specific, and can only perform read-only operations (fetching feature flag settings).  | Auth mechanism                                                                                  | Allowed resources                                                                                     | Use cases                                          | | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------- | | [Personal access tokens](https://docs.launchdarkly.com/home/account-security/api-access-tokens) | Can be customized on a per-token basis                                                                | Building scripts, custom integrations, data export | | SDK keys                                                                                        | Can only access read-only SDK-specific resources and the firehose, restricted to a single environment | Server-side SDKs, Firehose API                     | | Mobile keys                                                                                     | Can only access read-only mobile SDK-specific resources, restricted to a single environment           | Mobile SDKs                                        | | Client-side ID                                                                                  | Single environment, only flags marked available to client-side                                        | Client-side JavaScript                             |  > ### Keep your access tokens and SDK keys private > > Access tokens should _never_ be exposed in untrusted contexts. Never put an access token in client-side JavaScript, or embed it in a mobile application. LaunchDarkly has special mobile keys that you can embed in mobile apps. If you accidentally expose an access token or SDK key, you can reset it from your [Account Settings](https://app.launchdarkly.com/settings#/tokens) page. > > The client-side ID is safe to embed in untrusted contexts. It\'s designed for use in client-side JavaScript.  ## Via request header  The preferred way to authenticate with the API is by adding an `Authorization` header containing your access token to your requests. The value of the `Authorization` header must be your access token.  Manage personal access tokens from the [Account Settings](https://app.launchdarkly.com/settings/tokens) page.  ## Via session cookie  For testing purposes, you can make API calls directly from your web browser. If you\'re logged in to the application, the API will use your existing session to authenticate calls.  If you have a [role](https://docs.launchdarkly.com/home/team/built-in-roles) other than Admin, or have a [custom role](https://docs.launchdarkly.com/home/team/custom-roles) defined, you may not have permission to perform some API calls. You will receive a `401` response code in that case.  > ### Modifying the Origin header causes an error > > LaunchDarkly validates that the Origin header for any API request authenticated by a session cookie matches the expected Origin header. The expected Origin header is `https://app.launchdarkly.com`. > > If the Origin header does not match what\'s expected, LaunchDarkly returns an error. This error can prevent the LaunchDarkly app from working correctly. > > Any browser extension that intentionally changes the Origin header can cause this problem. For example, the `Allow-Control-Allow-Origin: *` Chrome extension changes the Origin header to `http://evil.com` and causes the app to fail. > > To prevent this error, do not modify your Origin header. > > LaunchDarkly does not require origin matching when authenticating with an access token, so this issue does not affect normal API usage.  # Representations  All resources expect and return JSON response bodies. Error responses will also send a JSON body. Read [Errors](#section/Errors) for a more detailed description of the error format used by the API.  In practice this means that you always get a response with a `Content-Type` header set to `application/json`.  In addition, request bodies for `PUT`, `POST`, `REPORT` and `PATCH` requests must be encoded as JSON with a `Content-Type` header set to `application/json`.  ## Summary and detailed representations  When you fetch a list of resources, the response includes only the most important attributes of each resource. This is a _summary representation_ of the resource. When you fetch an individual resource (for example, a single feature flag), you receive a _detailed representation_ containing all of the attributes of the resource.  The best way to find a detailed representation is to follow links. Every summary representation includes a link to its detailed representation.  ## Links and addressability  The best way to navigate the API is by following links. These are attributes in representations that link to other resources. The API always uses the same format for links:  - Links to other resources within the API are encapsulated in a `_links` object. - If the resource has a corresponding link to HTML content on the site, it is stored in a special `_site` link.  Each link has two attributes: an href (the URL) and a type (the content type). For example, a feature resource might return the following:  ```json {   \"_links\": {     \"parent\": {       \"href\": \"/api/features\",       \"type\": \"application/json\"     },     \"self\": {       \"href\": \"/api/features/sort.order\",       \"type\": \"application/json\"     }   },   \"_site\": {     \"href\": \"/features/sort.order\",     \"type\": \"text/html\"   } } ```  From this, you can navigate to the parent collection of features by following the `parent` link, or navigate to the site page for the feature by following the `_site` link.  Collections are always represented as a JSON object with an `items` attribute containing an array of representations. Like all other representations, collections have `_links` defined at the top level.  Paginated collections include `first`, `last`, `next`, and `prev` links containing a URL with the respective set of elements in the collection.  # Updates  Resources that accept partial updates use the `PATCH` verb, and support the [JSON Patch](http://tools.ietf.org/html/rfc6902) format. Some resources also support the [JSON Merge Patch](https://tools.ietf.org/html/rfc7386) format. In addition, some resources support optional comments that can be submitted with updates. Comments appear in outgoing webhooks, the audit log, and other integrations.  ## Updates via JSON Patch  [JSON Patch](http://tools.ietf.org/html/rfc6902) is a way to specify the modifications to perform on a resource. For example, in this feature flag representation:  ```json {     \"name\": \"New recommendations engine\",     \"key\": \"engine.enable\",     \"description\": \"This is the description\",     ... } ```  You can change the feature flag\'s description with the following patch document:  ```json [{ \"op\": \"replace\", \"path\": \"/description\", \"value\": \"This is the new description\" }] ```  JSON Patch documents are always arrays. You can specify multiple modifications to perform in a single request. You can also test that certain preconditions are met before applying the patch:  ```json [   { \"op\": \"test\", \"path\": \"/version\", \"value\": 10 },   { \"op\": \"replace\", \"path\": \"/description\", \"value\": \"The new description\" } ] ```  The above patch request tests whether the feature flag\'s `version` is `10`, and if so, changes the feature flag\'s description.  Attributes that aren\'t editable, like a resource\'s `_links`, have names that start with an underscore.  ## Updates via JSON Merge Patch  The API also supports the [JSON Merge Patch](https://tools.ietf.org/html/rfc7386) format, as well as the [Update feature flag](/tag/Feature-flags#operation/patchFeatureFlag) resource.  JSON Merge Patch is less expressive than JSON Patch but in many cases, it is simpler to construct a merge patch document. For example, you can change a feature flag\'s description with the following merge patch document:  ```json {   \"description\": \"New flag description\" } ```  ## Updates with comments  You can submit optional comments with `PATCH` changes. The [Update feature flag](/tag/Feature-flags#operation/patchFeatureFlag) resource supports comments.  To submit a comment along with a JSON Patch document, use the following format:  ```json {   \"comment\": \"This is a comment string\",   \"patch\": [{ \"op\": \"replace\", \"path\": \"/description\", \"value\": \"The new description\" }] } ```  To submit a comment along with a JSON Merge Patch document, use the following format:  ```json {   \"comment\": \"This is a comment string\",   \"merge\": { \"description\": \"New flag description\" } } ```  ## Updates via semantic patches  The API also supports the Semantic patch format. A semantic `PATCH` is a way to specify the modifications to perform on a resource as a set of executable instructions.  JSON Patch uses paths and a limited set of operations to describe how to transform the current state of the resource into a new state. Semantic patch allows you to be explicit about intent using precise, custom instructions. In many cases, semantic patch instructions can also be defined independently of the current state of the resource. This can be useful when defining a change that may be applied at a future date.  For example, in this feature flag configuration in environment Production:  ```json {     \"name\": \"Alternate sort order\",     \"kind\": \"boolean\",     \"key\": \"sort.order\",    ...     \"environments\": {         \"production\": {             \"on\": true,             \"archived\": false,             \"salt\": \"c29ydC5vcmRlcg==\",             \"sel\": \"8de1085cb7354b0ab41c0e778376dfd3\",             \"lastModified\": 1469131558260,             \"version\": 81,             \"targets\": [                 {                     \"values\": [                         \"Gerhard.Little@yahoo.com\"                     ],                     \"variation\": 0                 },                 {                     \"values\": [                         \"1461797806429-33-861961230\",                         \"438580d8-02ee-418d-9eec-0085cab2bdf0\"                     ],                     \"variation\": 1                 }             ],             \"rules\": [],             \"fallthrough\": {                 \"variation\": 0             },             \"offVariation\": 1,             \"prerequisites\": [],             \"_site\": {                 \"href\": \"/default/production/features/sort.order\",                 \"type\": \"text/html\"             }        }     } } ```  You can add a date you want a user to be removed from the feature flag\'s user targets. For example, “remove user 1461797806429-33-861961230 from the user target for variation 0 on the Alternate sort order flag in the production environment on Wed Jul 08 2020 at 15:27:41 pm”. This is done using the following:  ```json {   \"comment\": \"update expiring user targets\",   \"instructions\": [     {       \"kind\": \"removeExpireUserTargetDate\",       \"userKey\": \"userKey\",       \"variationId\": \"978d53f9-7fe3-4a63-992d-97bcb4535dc8\"     },     {       \"kind\": \"updateExpireUserTargetDate\",       \"userKey\": \"userKey2\",       \"variationId\": \"978d53f9-7fe3-4a63-992d-97bcb4535dc8\",       \"value\": 1587582000000     },     {       \"kind\": \"addExpireUserTargetDate\",       \"userKey\": \"userKey3\",       \"variationId\": \"978d53f9-7fe3-4a63-992d-97bcb4535dc8\",       \"value\": 1594247266386     }   ] } ```  Here is another example. In this feature flag configuration:  ```json {   \"name\": \"New recommendations engine\",   \"key\": \"engine.enable\",   \"environments\": {     \"test\": {       \"on\": true     }   } } ```  You can change the feature flag\'s description with the following patch document as a set of executable instructions. For example, “add user X to targets for variation Y and remove user A from targets for variation B for test flag”:  ```json {   \"comment\": \"\",   \"instructions\": [     {       \"kind\": \"removeUserTargets\",       \"values\": [\"438580d8-02ee-418d-9eec-0085cab2bdf0\"],       \"variationId\": \"852cb784-54ff-46b9-8c35-5498d2e4f270\"     },     {       \"kind\": \"addUserTargets\",       \"values\": [\"438580d8-02ee-418d-9eec-0085cab2bdf0\"],       \"variationId\": \"1bb18465-33b6-49aa-a3bd-eeb6650b33ad\"     }   ] } ```  > ### Supported semantic patch API endpoints > > - [Update feature flag](/tag/Feature-flags#operation/patchFeatureFlag) > - [Update expiring user targets on feature flag](/tag/Feature-flags#operation/patchExpiringUserTargets) > - [Update expiring user target for flags](/tag/User-Settings#operation/patchExpiringFlagsForUser) > - [Update expiring user targets on segment](/tag/Segments#operation/patchExpiringUserTargetsOnSegment)  # Errors  The API always returns errors in a common format. Here\'s an example:  ```json {   \"code\": \"invalid_request\",   \"message\": \"A feature with that key already exists\",   \"id\": \"30ce6058-87da-11e4-b116-123b93f75cba\" } ```  The general class of error is indicated by the `code`. The `message` is a human-readable explanation of what went wrong. The `id` is a unique identifier. Use it when you\'re working with LaunchDarkly support to debug a problem with a specific API call.  ## HTTP Status - Error Response Codes  | Code | Definition        | Desc.                                                                                       | Possible Solution                                                | | ---- | ----------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | | 400  | Bad Request       | A request that fails may return this HTTP response code.                                    | Ensure JSON syntax in request body is correct.                   | | 401  | Unauthorized      | User doesn\'t have permission to an API call.                                                | Ensure your SDK key is good.                                     | | 403  | Forbidden         | User does not have permission for operation.                                                | Ensure that the user or access token has proper permissions set. | | 409  | Conflict          | The API request could not be completed because it conflicted with a concurrent API request. | Retry your request.                                              | | 429  | Too many requests | See [Rate limiting](/#section/Rate-limiting).                                               | Wait and try again later.                                        |  # CORS  The LaunchDarkly API supports Cross Origin Resource Sharing (CORS) for AJAX requests from any origin. If an `Origin` header is given in a request, it will be echoed as an explicitly allowed origin. Otherwise, a wildcard is returned: `Access-Control-Allow-Origin: *`. For more information on CORS, see the [CORS W3C Recommendation](http://www.w3.org/TR/cors). Example CORS headers might look like:  ```http Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, Authorization Access-Control-Allow-Methods: OPTIONS, GET, DELETE, PATCH Access-Control-Allow-Origin: * Access-Control-Max-Age: 300 ```  You can make authenticated CORS calls just as you would make same-origin calls, using either [token or session-based authentication](#section/Authentication). If you’re using session auth, you should set the `withCredentials` property for your `xhr` request to `true`. You should never expose your access tokens to untrusted users.  # Rate limiting  We use several rate limiting strategies to ensure the availability of our APIs. Rate-limited calls to our APIs will return a `429` status code. Calls to our APIs will include headers indicating the current rate limit status. The specific headers returned depend on the API route being called. The limits differ based on the route, authentication mechanism, and other factors. Routes that are not rate limited may not contain any of the headers described below.  > ### Rate limiting and SDKs > > LaunchDarkly SDKs are never rate limited and do not use the API endpoints defined here. LaunchDarkly uses a different set of approaches, including streaming/server-sent events and a global CDN, to ensure availability to the routes used by LaunchDarkly SDKs. > > The client-side ID is safe to embed in untrusted contexts. It\'s designed for use in client-side JavaScript.  ## Global rate limits  Authenticated requests are subject to a global limit. This is the maximum number of calls that can be made to the API per ten seconds. All personal access tokens on the account share this limit, so exceeding the limit with one access token will impact other tokens. Calls that are subject to global rate limits will return the headers below:  | Header name                    | Description                                                                      | | ------------------------------ | -------------------------------------------------------------------------------- | | `X-Ratelimit-Global-Remaining` | The maximum number of requests the account is permitted to make per ten seconds. | | `X-Ratelimit-Reset`            | The time at which the current rate limit window resets in epoch milliseconds.    |  We do not publicly document the specific number of calls that can be made globally. This limit may change, and we encourage clients to program against the specification, relying on the two headers defined above, rather than hardcoding to the current limit.  ## Route-level rate limits  Some authenticated routes have custom rate limits. These also reset every ten seconds. Any access tokens hitting the same route share this limit, so exceeding the limit with one access token may impact other tokens. Calls that are subject to route-level rate limits will return the headers below:  | Header name                   | Description                                                                                           | | ----------------------------- | ----------------------------------------------------------------------------------------------------- | | `X-Ratelimit-Route-Remaining` | The maximum number of requests to the current route the account is permitted to make per ten seconds. | | `X-Ratelimit-Reset`           | The time at which the current rate limit window resets in epoch milliseconds.                         |  A _route_ represents a specific URL pattern and verb. For example, the [Delete environment](/tag/Environments#operation/deleteEnvironment) endpoint is considered a single route, and each call to delete an environment counts against your route-level rate limit for that route.  We do not publicly document the specific number of calls that can be made to each endpoint per ten seconds. These limits may change, and we encourage clients to program against the specification, relying on the two headers defined above, rather than hardcoding to the current limits.  ## IP-based rate limiting  We also employ IP-based rate limiting on some API routes. If you hit an IP-based rate limit, your API response will include a `Retry-After` header indicating how long to wait before re-trying the call. Clients must wait at least `Retry-After` seconds before making additional calls to our API, and should employ jitter and backoff strategies to avoid triggering rate limits again.  # OpenAPI (Swagger)  We have a [complete OpenAPI (Swagger) specification](https://app.launchdarkly.com/api/v2/openapi.json) for our API.  You can use this specification to generate client libraries to interact with our REST API in your language of choice.  This specification is supported by several API-based tools such as Postman and Insomnia. In many cases, you can directly import our specification to ease use in navigating the APIs in the tooling.  # Client libraries  We auto-generate multiple client libraries based on our OpenAPI specification. To learn more, visit [GitHub](https://github.com/search?q=topic%3Alaunchdarkly-api+org%3Alaunchdarkly&type=Repositories).  # Method Overriding  Some firewalls and HTTP clients restrict the use of verbs other than `GET` and `POST`. In those environments, our API endpoints that use `PUT`, `PATCH`, and `DELETE` verbs will be inaccessible.  To avoid this issue, our API supports the `X-HTTP-Method-Override` header, allowing clients to \"tunnel\" `PUT`, `PATCH`, and `DELETE` requests via a `POST` request.  For example, if you wish to call one of our `PATCH` resources via a `POST` request, you can include `X-HTTP-Method-Override:PATCH` as a header.  # Beta resources  We sometimes release new API resources in **beta** status before we release them with general availability.  Resources that are in beta are still undergoing testing and development. They may change without notice, including becoming backwards incompatible.  We try to promote resources into general availability as quickly as possible. This happens after sufficient testing and when we\'re satisfied that we no longer need to make backwards-incompatible changes.  We mark beta resources with a \"Beta\" callout in our documentation, pictured below:  > ### This feature is in beta > > To use this feature, pass in a header including the `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more, read [Beta resources](/#section/Beta-resources).  ## Using beta resources  To use a beta resource, you must include a header in the request. If you call a beta resource without this header, you\'ll receive a `403` response.  Use this header:  ``` LD-API-Version: beta ```  # Versioning  We try hard to keep our REST API backwards compatible, but we occasionally have to make backwards-incompatible changes in the process of shipping new features. These breaking changes can cause unexpected behavior if you don\'t prepare for them accordingly.  Updates to our REST API include support for the latest features in LaunchDarkly. We also release a new version of our REST API every time we make a breaking change. We provide simultaneous support for multiple API versions so you can migrate from your current API version to a new version at your own pace.  ## Setting the API version per request  You can set the API version on a specific request by sending an `LD-API-Version` header, as shown in the example below:  ``` LD-API-Version: 20191212 ```  The header value is the version number of the API version you\'d like to request. The number for each version corresponds to the date the version was released. In the example above the version `20191212` corresponds to December 12, 2019.  ## Setting the API version per access token  When creating an access token, you must specify a specific version of the API to use. This ensures that integrations using this token cannot be broken by version changes.  Tokens created before versioning was released have their version set to `20160426` (the version of the API that existed before versioning) so that they continue working the same way they did before versioning.  If you would like to upgrade your integration to use a new API version, you can explicitly set the header described above.  > ### Best practice: Set the header for every client or integration > > We recommend that you set the API version header explicitly in any client or integration you build. > > Only rely on the access token API version during manual testing. 
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@launchdarkly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface AccessDeniedReasonRep
 */
export interface AccessDeniedReasonRep {
    /**
     * 
     * @type {Array<object>}
     * @memberof AccessDeniedReasonRep
     */
    resources?: Array<object>;
    /**
     * 
     * @type {Array<object>}
     * @memberof AccessDeniedReasonRep
     */
    notResources?: Array<object>;
    /**
     * 
     * @type {Array<string>}
     * @memberof AccessDeniedReasonRep
     */
    actions?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof AccessDeniedReasonRep
     */
    notActions?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof AccessDeniedReasonRep
     */
    effect: string;
    /**
     * 
     * @type {string}
     * @memberof AccessDeniedReasonRep
     */
    role_name?: string;
}
/**
 * 
 * @export
 * @interface AccessDeniedRep
 */
export interface AccessDeniedRep {
    /**
     * 
     * @type {string}
     * @memberof AccessDeniedRep
     */
    action: string;
    /**
     * 
     * @type {AccessDeniedReasonRep}
     * @memberof AccessDeniedRep
     */
    reason: AccessDeniedReasonRep;
}
/**
 * 
 * @export
 * @interface AccessRep
 */
export interface AccessRep {
    /**
     * 
     * @type {Array<AccessDeniedRep>}
     * @memberof AccessRep
     */
    denied: Array<AccessDeniedRep>;
}
/**
 * 
 * @export
 * @interface AccessTokenPost
 */
export interface AccessTokenPost {
    /**
     * A human-friendly name for the access token
     * @type {string}
     * @memberof AccessTokenPost
     */
    name?: string;
    /**
     * A description for the access token
     * @type {string}
     * @memberof AccessTokenPost
     */
    description?: string;
    /**
     * Built-in role for the token
     * @type {string}
     * @memberof AccessTokenPost
     */
    role?: AccessTokenPostRoleEnum;
    /**
     * A list of custom role IDs to use as access limits for the access token
     * @type {Array<string>}
     * @memberof AccessTokenPost
     */
    customRoleIds?: Array<string>;
    /**
     * A JSON array of statements represented as JSON objects with three attributes: effect, resources, actions. May be used in place of a built-in or custom role.
     * @type {Array<StatementPost>}
     * @memberof AccessTokenPost
     */
    inlineRole?: Array<StatementPost>;
    /**
     * Whether the token is a service token https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens
     * @type {boolean}
     * @memberof AccessTokenPost
     */
    serviceToken?: boolean;
    /**
     * The default API version for this token
     * @type {number}
     * @memberof AccessTokenPost
     */
    defaultApiVersion?: number;
}

/**
    * @export
    * @enum {string}
    */
export enum AccessTokenPostRoleEnum {
    Reader = 'reader',
    Writer = 'writer',
    Admin = 'admin'
}

/**
 * 
 * @export
 * @interface ApprovalSettings
 */
export interface ApprovalSettings {
    /**
     * If approvals are required for this environment.
     * @type {boolean}
     * @memberof ApprovalSettings
     */
    Required: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ApprovalSettings
     */
    bypassApprovalsForPendingChanges: boolean;
    /**
     * Sets the amount of approvals required before a member can apply a change. The minimum is one and the maximum is five.
     * @type {number}
     * @memberof ApprovalSettings
     */
    minNumApprovals: number;
    /**
     * Allow someone who makes an approval request to apply their own change.
     * @type {boolean}
     * @memberof ApprovalSettings
     */
    canReviewOwnRequest: boolean;
    /**
     * Allow applying the change as long as at least one person has approved.
     * @type {boolean}
     * @memberof ApprovalSettings
     */
    canApplyDeclinedChanges: boolean;
    /**
     * Which service to use for managing approvals.
     * @type {string}
     * @memberof ApprovalSettings
     */
    serviceKind: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ApprovalSettings
     */
    serviceConfig: { [key: string]: any; };
    /**
     * Require approval only on flags with the provided tags. Otherwise all flags will require approval.
     * @type {Array<string>}
     * @memberof ApprovalSettings
     */
    requiredApprovalTags: Array<string>;
}
/**
 * 
 * @export
 * @interface AuditLogEntryListingRep
 */
export interface AuditLogEntryListingRep {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof AuditLogEntryListingRep
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {string}
     * @memberof AuditLogEntryListingRep
     */
    _id: string;
    /**
     * 
     * @type {string}
     * @memberof AuditLogEntryListingRep
     */
    _accountId: string;
    /**
     * 
     * @type {number}
     * @memberof AuditLogEntryListingRep
     */
    date: number;
    /**
     * 
     * @type {Array<ResourceAccess>}
     * @memberof AuditLogEntryListingRep
     */
    accesses: Array<ResourceAccess>;
    /**
     * 
     * @type {string}
     * @memberof AuditLogEntryListingRep
     */
    kind: string;
    /**
     * 
     * @type {string}
     * @memberof AuditLogEntryListingRep
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AuditLogEntryListingRep
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof AuditLogEntryListingRep
     */
    shortDescription: string;
    /**
     * 
     * @type {string}
     * @memberof AuditLogEntryListingRep
     */
    comment?: string;
    /**
     * 
     * @type {SubjectDataRep}
     * @memberof AuditLogEntryListingRep
     */
    subject?: SubjectDataRep;
    /**
     * 
     * @type {MemberDataRep}
     * @memberof AuditLogEntryListingRep
     */
    member?: MemberDataRep;
    /**
     * 
     * @type {TokenDataRep}
     * @memberof AuditLogEntryListingRep
     */
    token?: TokenDataRep;
    /**
     * 
     * @type {AuthorizedAppDataRep}
     * @memberof AuditLogEntryListingRep
     */
    app?: AuthorizedAppDataRep;
    /**
     * 
     * @type {string}
     * @memberof AuditLogEntryListingRep
     */
    titleVerb?: string;
    /**
     * 
     * @type {string}
     * @memberof AuditLogEntryListingRep
     */
    title?: string;
    /**
     * 
     * @type {TargetResourceRep}
     * @memberof AuditLogEntryListingRep
     */
    target?: TargetResourceRep;
    /**
     * 
     * @type {ParentResourceRep}
     * @memberof AuditLogEntryListingRep
     */
    parent?: ParentResourceRep;
}
/**
 * 
 * @export
 * @interface AuditLogEntryListingRepCollection
 */
export interface AuditLogEntryListingRepCollection {
    /**
     * 
     * @type {Array<AuditLogEntryListingRep>}
     * @memberof AuditLogEntryListingRepCollection
     */
    items: Array<AuditLogEntryListingRep>;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof AuditLogEntryListingRepCollection
     */
    _links: { [key: string]: Link; };
}
/**
 * 
 * @export
 * @interface AuditLogEntryRep
 */
export interface AuditLogEntryRep {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof AuditLogEntryRep
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {string}
     * @memberof AuditLogEntryRep
     */
    _id: string;
    /**
     * 
     * @type {string}
     * @memberof AuditLogEntryRep
     */
    _accountId: string;
    /**
     * 
     * @type {number}
     * @memberof AuditLogEntryRep
     */
    date: number;
    /**
     * 
     * @type {Array<ResourceAccess>}
     * @memberof AuditLogEntryRep
     */
    accesses: Array<ResourceAccess>;
    /**
     * 
     * @type {string}
     * @memberof AuditLogEntryRep
     */
    kind: string;
    /**
     * 
     * @type {string}
     * @memberof AuditLogEntryRep
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AuditLogEntryRep
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof AuditLogEntryRep
     */
    shortDescription: string;
    /**
     * 
     * @type {string}
     * @memberof AuditLogEntryRep
     */
    comment?: string;
    /**
     * 
     * @type {SubjectDataRep}
     * @memberof AuditLogEntryRep
     */
    subject?: SubjectDataRep;
    /**
     * 
     * @type {MemberDataRep}
     * @memberof AuditLogEntryRep
     */
    member?: MemberDataRep;
    /**
     * 
     * @type {TokenDataRep}
     * @memberof AuditLogEntryRep
     */
    token?: TokenDataRep;
    /**
     * 
     * @type {AuthorizedAppDataRep}
     * @memberof AuditLogEntryRep
     */
    app?: AuthorizedAppDataRep;
    /**
     * 
     * @type {string}
     * @memberof AuditLogEntryRep
     */
    titleVerb?: string;
    /**
     * 
     * @type {string}
     * @memberof AuditLogEntryRep
     */
    title?: string;
    /**
     * 
     * @type {TargetResourceRep}
     * @memberof AuditLogEntryRep
     */
    target?: TargetResourceRep;
    /**
     * 
     * @type {ParentResourceRep}
     * @memberof AuditLogEntryRep
     */
    parent?: ParentResourceRep;
    /**
     * 
     * @type {any}
     * @memberof AuditLogEntryRep
     */
    delta?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AuditLogEntryRep
     */
    triggerBody?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AuditLogEntryRep
     */
    merge?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AuditLogEntryRep
     */
    previousVersion?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AuditLogEntryRep
     */
    currentVersion?: any | null;
    /**
     * 
     * @type {Array<AuditLogEntryListingRep>}
     * @memberof AuditLogEntryRep
     */
    subentries?: Array<AuditLogEntryListingRep>;
}
/**
 * 
 * @export
 * @interface AuthorizedAppDataRep
 */
export interface AuthorizedAppDataRep {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof AuthorizedAppDataRep
     */
    _links?: { [key: string]: Link; };
    /**
     * 
     * @type {string}
     * @memberof AuthorizedAppDataRep
     */
    _id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AuthorizedAppDataRep
     */
    isScim?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AuthorizedAppDataRep
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthorizedAppDataRep
     */
    maintainerName?: string;
}
/**
 * 
 * @export
 * @interface BigSegmentTarget
 */
export interface BigSegmentTarget {
    /**
     * The user key
     * @type {string}
     * @memberof BigSegmentTarget
     */
    userKey: string;
    /**
     * Indicates whether the user is included.<br />Included users are always segment members, regardless of segment rules.
     * @type {boolean}
     * @memberof BigSegmentTarget
     */
    included: boolean;
    /**
     * Indicates whether the user is excluded.<br />Segment rules bypass excluded users, so they will never be included based on rules. Excluded users may still be included explicitly.
     * @type {boolean}
     * @memberof BigSegmentTarget
     */
    excluded: boolean;
}
/**
 * 
 * @export
 * @interface BranchCollectionRep
 */
export interface BranchCollectionRep {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof BranchCollectionRep
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {Array<BranchRep>}
     * @memberof BranchCollectionRep
     */
    items: Array<BranchRep>;
}
/**
 * 
 * @export
 * @interface BranchRep
 */
export interface BranchRep {
    /**
     * 
     * @type {string}
     * @memberof BranchRep
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BranchRep
     */
    head?: string;
    /**
     * 
     * @type {number}
     * @memberof BranchRep
     */
    updateSequenceId?: number;
    /**
     * 
     * @type {number}
     * @memberof BranchRep
     */
    syncTime?: number;
    /**
     * 
     * @type {Array<ReferenceRep>}
     * @memberof BranchRep
     */
    references?: Array<ReferenceRep>;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BranchRep
     */
    _links?: { [key: string]: any; };
}
/**
 * 
 * @export
 * @interface Clause
 */
export interface Clause {
    /**
     * 
     * @type {string}
     * @memberof Clause
     */
    _id?: string;
    /**
     * 
     * @type {string}
     * @memberof Clause
     */
    attribute: string;
    /**
     * 
     * @type {string}
     * @memberof Clause
     */
    op: string;
    /**
     * 
     * @type {Array<any>}
     * @memberof Clause
     */
    values: Array<any>;
    /**
     * 
     * @type {boolean}
     * @memberof Clause
     */
    negate: boolean;
}
/**
 * 
 * @export
 * @interface ClientSideAvailability
 */
export interface ClientSideAvailability {
    /**
     * 
     * @type {boolean}
     * @memberof ClientSideAvailability
     */
    usingMobileKey?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientSideAvailability
     */
    usingEnvironmentId?: boolean;
}
/**
 * 
 * @export
 * @interface ClientSideAvailabilityPost
 */
export interface ClientSideAvailabilityPost {
    /**
     * 
     * @type {boolean}
     * @memberof ClientSideAvailabilityPost
     */
    usingEnvironmentId: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientSideAvailabilityPost
     */
    usingMobileKey: boolean;
}
/**
 * 
 * @export
 * @interface ConfidenceIntervalRep
 */
export interface ConfidenceIntervalRep {
    /**
     * 
     * @type {number}
     * @memberof ConfidenceIntervalRep
     */
    upper?: number;
    /**
     * 
     * @type {number}
     * @memberof ConfidenceIntervalRep
     */
    lower?: number;
}
/**
 * 
 * @export
 * @interface Conflict
 */
export interface Conflict {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Conflict
     */
    instruction?: { [key: string]: any; };
    /**
     * Reason why the conflict exists
     * @type {string}
     * @memberof Conflict
     */
    reason?: string;
}
/**
 * 
 * @export
 * @interface CopiedFromEnv
 */
export interface CopiedFromEnv {
    /**
     * Key of feature flag copied
     * @type {string}
     * @memberof CopiedFromEnv
     */
    key: string;
    /**
     * 
     * @type {number}
     * @memberof CopiedFromEnv
     */
    version?: number;
}
/**
 * 
 * @export
 * @interface CreateCopyFlagConfigApprovalRequestRequest
 */
export interface CreateCopyFlagConfigApprovalRequestRequest {
    /**
     * A comment describing the approval request
     * @type {string}
     * @memberof CreateCopyFlagConfigApprovalRequestRequest
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCopyFlagConfigApprovalRequestRequest
     */
    description?: string;
    /**
     * An array of member IDs. These members are notified to review the approval request.
     * @type {Array<string>}
     * @memberof CreateCopyFlagConfigApprovalRequestRequest
     */
    notifyMemberIds: Array<string>;
    /**
     * 
     * @type {SourceFlag}
     * @memberof CreateCopyFlagConfigApprovalRequestRequest
     */
    source: SourceFlag;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateCopyFlagConfigApprovalRequestRequest
     */
    includedActions?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateCopyFlagConfigApprovalRequestRequest
     */
    excludedActions?: Array<string>;
}
/**
 * 
 * @export
 * @interface CreateFlagConfigApprovalRequestRequest
 */
export interface CreateFlagConfigApprovalRequestRequest {
    /**
     * A comment describing the approval request
     * @type {string}
     * @memberof CreateFlagConfigApprovalRequestRequest
     */
    comment?: string;
    /**
     * A human-friendly name for the approval request
     * @type {string}
     * @memberof CreateFlagConfigApprovalRequestRequest
     */
    description: string;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof CreateFlagConfigApprovalRequestRequest
     */
    instructions: Array<{ [key: string]: any; }>;
    /**
     * An array of member IDs. These members are notified to review the approval request
     * @type {Array<string>}
     * @memberof CreateFlagConfigApprovalRequestRequest
     */
    notifyMemberIds: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof CreateFlagConfigApprovalRequestRequest
     */
    executionDate?: number;
    /**
     * ID of scheduled change to edit or delete
     * @type {string}
     * @memberof CreateFlagConfigApprovalRequestRequest
     */
    operatingOnId?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CreateFlagConfigApprovalRequestRequest
     */
    integrationConfig?: { [key: string]: any; };
}
/**
 * 
 * @export
 * @interface CustomProperty
 */
export interface CustomProperty {
    /**
     * 
     * @type {string}
     * @memberof CustomProperty
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CustomProperty
     */
    value: Array<string>;
}
/**
 * 
 * @export
 * @interface CustomRole
 */
export interface CustomRole {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof CustomRole
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {string}
     * @memberof CustomRole
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CustomRole
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof CustomRole
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomRole
     */
    _id: string;
    /**
     * 
     * @type {Array<Statement>}
     * @memberof CustomRole
     */
    policy: Array<Statement>;
    /**
     * 
     * @type {AccessRep}
     * @memberof CustomRole
     */
    _access?: AccessRep;
}
/**
 * 
 * @export
 * @interface CustomRolePost
 */
export interface CustomRolePost {
    /**
     * A human-friendly name for the custom role
     * @type {string}
     * @memberof CustomRolePost
     */
    name: string;
    /**
     * The custom role key
     * @type {string}
     * @memberof CustomRolePost
     */
    key: string;
    /**
     * Description of custom role
     * @type {string}
     * @memberof CustomRolePost
     */
    description?: string;
    /**
     * 
     * @type {Array<StatementPost>}
     * @memberof CustomRolePost
     */
    policy: Array<StatementPost>;
}
/**
 * 
 * @export
 * @interface CustomRolePostData
 */
export interface CustomRolePostData {
    /**
     * A human-friendly name for the custom role
     * @type {string}
     * @memberof CustomRolePostData
     */
    name: string;
    /**
     * The custom role key
     * @type {string}
     * @memberof CustomRolePostData
     */
    key: string;
    /**
     * Description of custom role
     * @type {string}
     * @memberof CustomRolePostData
     */
    description?: string;
    /**
     * 
     * @type {Array<StatementPost>}
     * @memberof CustomRolePostData
     */
    policy: Array<StatementPost>;
}
/**
 * 
 * @export
 * @interface CustomRoles
 */
export interface CustomRoles {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof CustomRoles
     */
    _links?: { [key: string]: Link; };
    /**
     * 
     * @type {Array<CustomRole>}
     * @memberof CustomRoles
     */
    items?: Array<CustomRole>;
}
/**
 * 
 * @export
 * @interface DefaultClientSideAvailabilityPost
 */
export interface DefaultClientSideAvailabilityPost {
    /**
     * 
     * @type {boolean}
     * @memberof DefaultClientSideAvailabilityPost
     */
    usingEnvironmentId: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DefaultClientSideAvailabilityPost
     */
    usingMobileKey: boolean;
}
/**
 * 
 * @export
 * @interface Defaults
 */
export interface Defaults {
    /**
     * 
     * @type {number}
     * @memberof Defaults
     */
    onVariation: number;
    /**
     * 
     * @type {number}
     * @memberof Defaults
     */
    offVariation: number;
}
/**
 * 
 * @export
 * @interface DependentFlag
 */
export interface DependentFlag {
    /**
     * 
     * @type {string}
     * @memberof DependentFlag
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof DependentFlag
     */
    key: string;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof DependentFlag
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {Link}
     * @memberof DependentFlag
     */
    _site: Link;
}
/**
 * 
 * @export
 * @interface DependentFlagEnvironment
 */
export interface DependentFlagEnvironment {
    /**
     * 
     * @type {string}
     * @memberof DependentFlagEnvironment
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof DependentFlagEnvironment
     */
    key: string;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof DependentFlagEnvironment
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {Link}
     * @memberof DependentFlagEnvironment
     */
    _site: Link;
}
/**
 * 
 * @export
 * @interface DependentFlagsByEnvironment
 */
export interface DependentFlagsByEnvironment {
    /**
     * 
     * @type {Array<DependentFlag>}
     * @memberof DependentFlagsByEnvironment
     */
    items: Array<DependentFlag>;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof DependentFlagsByEnvironment
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {Link}
     * @memberof DependentFlagsByEnvironment
     */
    _site: Link;
}
/**
 * 
 * @export
 * @interface Destination
 */
export interface Destination {
    /**
     * 
     * @type {string}
     * @memberof Destination
     */
    _id?: string;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof Destination
     */
    _links?: { [key: string]: Link; };
    /**
     * 
     * @type {string}
     * @memberof Destination
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Destination
     */
    kind?: DestinationKindEnum;
    /**
     * 
     * @type {number}
     * @memberof Destination
     */
    version?: number;
    /**
     * 
     * @type {any}
     * @memberof Destination
     */
    config?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof Destination
     */
    on?: boolean;
    /**
     * 
     * @type {AccessRep}
     * @memberof Destination
     */
    _access?: AccessRep;
}

/**
    * @export
    * @enum {string}
    */
export enum DestinationKindEnum {
    GooglePubsub = 'google-pubsub',
    Kinesis = 'kinesis',
    Mparticle = 'mparticle',
    Segment = 'segment',
    AzureEventHubs = 'azure-event-hubs'
}

/**
 * 
 * @export
 * @interface DestinationPost
 */
export interface DestinationPost {
    /**
     * A human-readable name for your data export destination.
     * @type {string}
     * @memberof DestinationPost
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof DestinationPost
     */
    kind?: DestinationPostKindEnum;
    /**
     * 
     * @type {any}
     * @memberof DestinationPost
     */
    config?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof DestinationPost
     */
    on?: boolean;
}

/**
    * @export
    * @enum {string}
    */
export enum DestinationPostKindEnum {
    GooglePubsub = 'google-pubsub',
    Kinesis = 'kinesis',
    Mparticle = 'mparticle',
    Segment = 'segment',
    AzureEventHubs = 'azure-event-hubs'
}

/**
 * 
 * @export
 * @interface Destinations
 */
export interface Destinations {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof Destinations
     */
    _links?: { [key: string]: Link; };
    /**
     * 
     * @type {Array<Destination>}
     * @memberof Destinations
     */
    items?: Array<Destination>;
}
/**
 * 
 * @export
 * @interface Environment
 */
export interface Environment {
    /**
     * Links to related resources.
     * @type {{ [key: string]: Link; }}
     * @memberof Environment
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {string}
     * @memberof Environment
     */
    _id: string;
    /**
     * A project-unique key for the new environment.
     * @type {string}
     * @memberof Environment
     */
    key: string;
    /**
     * A human-friendly name for the new environment.
     * @type {string}
     * @memberof Environment
     */
    name: string;
    /**
     * API key to use with client-side SDKs.
     * @type {string}
     * @memberof Environment
     */
    apiKey: string;
    /**
     * API key to use with mobile SDKs.
     * @type {string}
     * @memberof Environment
     */
    mobileKey: string;
    /**
     * The color used to indicate this environment in the UI.
     * @type {string}
     * @memberof Environment
     */
    color: string;
    /**
     * The default time (in minutes) that the PHP SDK can cache feature flag rules locally.
     * @type {number}
     * @memberof Environment
     */
    defaultTtl: number;
    /**
     * Secure mode ensures that a user of the client-side SDK cannot impersonate another user.
     * @type {boolean}
     * @memberof Environment
     */
    secureMode: boolean;
    /**
     * Enables tracking detailed information for new flags by default.
     * @type {boolean}
     * @memberof Environment
     */
    defaultTrackEvents: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof Environment
     */
    tags: Array<string>;
    /**
     * 
     * @type {ApprovalSettings}
     * @memberof Environment
     */
    approvalSettings?: ApprovalSettings;
}
/**
 * 
 * @export
 * @interface EnvironmentPost
 */
export interface EnvironmentPost {
    /**
     * A human-friendly name for the new environment.
     * @type {string}
     * @memberof EnvironmentPost
     */
    name: string;
    /**
     * A project-unique key for the new environment.
     * @type {string}
     * @memberof EnvironmentPost
     */
    key: string;
    /**
     * A color to indicate this environment in the UI.
     * @type {string}
     * @memberof EnvironmentPost
     */
    color: string;
    /**
     * The default time (in minutes) that the PHP SDK can cache feature flag rules locally.
     * @type {number}
     * @memberof EnvironmentPost
     */
    defaultTtl?: number;
    /**
     * Secure mode ensures that a user of the client-side SDK cannot impersonate another user.
     * @type {boolean}
     * @memberof EnvironmentPost
     */
    secureMode?: boolean;
    /**
     * Enables tracking detailed information for new flags by default.
     * @type {boolean}
     * @memberof EnvironmentPost
     */
    defaultTrackEvents?: boolean;
    /**
     * Require confirmation for all flag and segment changes via the UI in this environment.
     * @type {boolean}
     * @memberof EnvironmentPost
     */
    confirmChanges?: boolean;
    /**
     * Require comments for all flag and segment changes via the UI in this environment.
     * @type {boolean}
     * @memberof EnvironmentPost
     */
    requireComments?: boolean;
    /**
     * Tags to apply to the new environment.
     * @type {Array<string>}
     * @memberof EnvironmentPost
     */
    tags?: Array<string>;
}
/**
 * 
 * @export
 * @interface ExperimentAllocationRep
 */
export interface ExperimentAllocationRep {
    /**
     * 
     * @type {number}
     * @memberof ExperimentAllocationRep
     */
    defaultVariation: number;
    /**
     * 
     * @type {boolean}
     * @memberof ExperimentAllocationRep
     */
    canReshuffle: boolean;
}
/**
 * 
 * @export
 * @interface ExperimentEnabledPeriodRep
 */
export interface ExperimentEnabledPeriodRep {
    /**
     * 
     * @type {number}
     * @memberof ExperimentEnabledPeriodRep
     */
    startDate?: number;
    /**
     * 
     * @type {number}
     * @memberof ExperimentEnabledPeriodRep
     */
    stopDate?: number;
}
/**
 * 
 * @export
 * @interface ExperimentEnvironmentSettingRep
 */
export interface ExperimentEnvironmentSettingRep {
    /**
     * 
     * @type {number}
     * @memberof ExperimentEnvironmentSettingRep
     */
    startDate?: number;
    /**
     * 
     * @type {number}
     * @memberof ExperimentEnvironmentSettingRep
     */
    stopDate?: number;
    /**
     * 
     * @type {Array<ExperimentEnabledPeriodRep>}
     * @memberof ExperimentEnvironmentSettingRep
     */
    enabledPeriods?: Array<ExperimentEnabledPeriodRep>;
}
/**
 * 
 * @export
 * @interface ExperimentInfoRep
 */
export interface ExperimentInfoRep {
    /**
     * 
     * @type {number}
     * @memberof ExperimentInfoRep
     */
    baselineIdx: number;
    /**
     * 
     * @type {Array<ExperimentRep>}
     * @memberof ExperimentInfoRep
     */
    items: Array<ExperimentRep>;
}
/**
 * 
 * @export
 * @interface ExperimentMetadataRep
 */
export interface ExperimentMetadataRep {
    /**
     * 
     * @type {any}
     * @memberof ExperimentMetadataRep
     */
    key?: any | null;
}
/**
 * 
 * @export
 * @interface ExperimentRep
 */
export interface ExperimentRep {
    /**
     * 
     * @type {string}
     * @memberof ExperimentRep
     */
    metricKey?: string;
    /**
     * 
     * @type {MetricListingRep}
     * @memberof ExperimentRep
     */
    _metric?: MetricListingRep;
    /**
     * 
     * @type {Array<string>}
     * @memberof ExperimentRep
     */
    environments?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: ExperimentEnvironmentSettingRep; }}
     * @memberof ExperimentRep
     */
    _environmentSettings?: { [key: string]: ExperimentEnvironmentSettingRep; };
}
/**
 * 
 * @export
 * @interface ExperimentResultsRep
 */
export interface ExperimentResultsRep {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof ExperimentResultsRep
     */
    _links?: { [key: string]: Link; };
    /**
     * 
     * @type {Array<ExperimentMetadataRep>}
     * @memberof ExperimentResultsRep
     */
    metadata?: Array<ExperimentMetadataRep>;
    /**
     * 
     * @type {Array<ExperimentTotalsRep>}
     * @memberof ExperimentResultsRep
     */
    totals?: Array<ExperimentTotalsRep>;
    /**
     * 
     * @type {Array<ExperimentTimeSeriesSlice>}
     * @memberof ExperimentResultsRep
     */
    series?: Array<ExperimentTimeSeriesSlice>;
    /**
     * 
     * @type {ExperimentStatsRep}
     * @memberof ExperimentResultsRep
     */
    stats?: ExperimentStatsRep;
    /**
     * 
     * @type {string}
     * @memberof ExperimentResultsRep
     */
    granularity?: string;
}
/**
 * 
 * @export
 * @interface ExperimentStatsRep
 */
export interface ExperimentStatsRep {
    /**
     * 
     * @type {number}
     * @memberof ExperimentStatsRep
     */
    pValue?: number;
    /**
     * 
     * @type {number}
     * @memberof ExperimentStatsRep
     */
    chi2?: number;
    /**
     * 
     * @type {number}
     * @memberof ExperimentStatsRep
     */
    winningVariationIdx?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ExperimentStatsRep
     */
    minSampleSizeMet?: boolean;
}
/**
 * 
 * @export
 * @interface ExperimentTimeSeriesSlice
 */
export interface ExperimentTimeSeriesSlice {
    /**
     * 
     * @type {number}
     * @memberof ExperimentTimeSeriesSlice
     */
    Time?: number;
    /**
     * 
     * @type {Array<ExperimentTimeSeriesVariationSlice>}
     * @memberof ExperimentTimeSeriesSlice
     */
    VariationData?: Array<ExperimentTimeSeriesVariationSlice>;
}
/**
 * 
 * @export
 * @interface ExperimentTimeSeriesVariationSlice
 */
export interface ExperimentTimeSeriesVariationSlice {
    /**
     * 
     * @type {number}
     * @memberof ExperimentTimeSeriesVariationSlice
     */
    value?: number;
    /**
     * 
     * @type {number}
     * @memberof ExperimentTimeSeriesVariationSlice
     */
    count?: number;
    /**
     * 
     * @type {number}
     * @memberof ExperimentTimeSeriesVariationSlice
     */
    cumulativeValue?: number;
    /**
     * 
     * @type {number}
     * @memberof ExperimentTimeSeriesVariationSlice
     */
    cumulativeCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ExperimentTimeSeriesVariationSlice
     */
    conversionRate?: number;
    /**
     * 
     * @type {number}
     * @memberof ExperimentTimeSeriesVariationSlice
     */
    cumulativeConversionRate?: number;
    /**
     * 
     * @type {ConfidenceIntervalRep}
     * @memberof ExperimentTimeSeriesVariationSlice
     */
    confidenceInterval?: ConfidenceIntervalRep;
    /**
     * 
     * @type {ConfidenceIntervalRep}
     * @memberof ExperimentTimeSeriesVariationSlice
     */
    cumulativeConfidenceInterval?: ConfidenceIntervalRep;
}
/**
 * 
 * @export
 * @interface ExperimentTotalsRep
 */
export interface ExperimentTotalsRep {
    /**
     * 
     * @type {number}
     * @memberof ExperimentTotalsRep
     */
    cumulativeValue?: number;
    /**
     * 
     * @type {number}
     * @memberof ExperimentTotalsRep
     */
    cumulativeCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ExperimentTotalsRep
     */
    cumulativeImpressionCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ExperimentTotalsRep
     */
    cumulativeConversionRate?: number;
    /**
     * 
     * @type {ConfidenceIntervalRep}
     * @memberof ExperimentTotalsRep
     */
    cumulativeConfidenceInterval?: ConfidenceIntervalRep;
    /**
     * 
     * @type {number}
     * @memberof ExperimentTotalsRep
     */
    pValue?: number;
    /**
     * 
     * @type {number}
     * @memberof ExperimentTotalsRep
     */
    improvement?: number;
    /**
     * 
     * @type {number}
     * @memberof ExperimentTotalsRep
     */
    minSampleSize?: number;
}
/**
 * 
 * @export
 * @interface ExpiringUserTargetError
 */
export interface ExpiringUserTargetError {
    /**
     * 
     * @type {number}
     * @memberof ExpiringUserTargetError
     */
    instructionIndex: number;
    /**
     * 
     * @type {string}
     * @memberof ExpiringUserTargetError
     */
    message: string;
}
/**
 * 
 * @export
 * @interface ExpiringUserTargetGetResponse
 */
export interface ExpiringUserTargetGetResponse {
    /**
     * 
     * @type {Array<ExpiringUserTargetItem>}
     * @memberof ExpiringUserTargetGetResponse
     */
    items: Array<ExpiringUserTargetItem>;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof ExpiringUserTargetGetResponse
     */
    _links?: { [key: string]: Link; };
}
/**
 * 
 * @export
 * @interface ExpiringUserTargetItem
 */
export interface ExpiringUserTargetItem {
    /**
     * 
     * @type {string}
     * @memberof ExpiringUserTargetItem
     */
    _id: string;
    /**
     * 
     * @type {number}
     * @memberof ExpiringUserTargetItem
     */
    _version: number;
    /**
     * 
     * @type {number}
     * @memberof ExpiringUserTargetItem
     */
    expirationDate: number;
    /**
     * A unique key used to represent the user
     * @type {string}
     * @memberof ExpiringUserTargetItem
     */
    userKey: string;
    /**
     * A segment\'s target type. Included when expiring user targets are updated on a user segment.
     * @type {string}
     * @memberof ExpiringUserTargetItem
     */
    targetType?: string;
    /**
     * A unique key used to represent the flag variation. Included when expiring user targets are updated on a feature flag.
     * @type {string}
     * @memberof ExpiringUserTargetItem
     */
    variationId?: string;
    /**
     * 
     * @type {ResourceIDResponse}
     * @memberof ExpiringUserTargetItem
     */
    _resourceId: ResourceIDResponse;
}
/**
 * 
 * @export
 * @interface ExpiringUserTargetPatchResponse
 */
export interface ExpiringUserTargetPatchResponse {
    /**
     * 
     * @type {Array<ExpiringUserTargetItem>}
     * @memberof ExpiringUserTargetPatchResponse
     */
    items: Array<ExpiringUserTargetItem>;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof ExpiringUserTargetPatchResponse
     */
    _links?: { [key: string]: Link; };
    /**
     * 
     * @type {number}
     * @memberof ExpiringUserTargetPatchResponse
     */
    totalInstructions?: number;
    /**
     * 
     * @type {number}
     * @memberof ExpiringUserTargetPatchResponse
     */
    successfulInstructions?: number;
    /**
     * 
     * @type {number}
     * @memberof ExpiringUserTargetPatchResponse
     */
    failedInstructions?: number;
    /**
     * 
     * @type {Array<ExpiringUserTargetError>}
     * @memberof ExpiringUserTargetPatchResponse
     */
    errors?: Array<ExpiringUserTargetError>;
}
/**
 * 
 * @export
 * @interface Extinction
 */
export interface Extinction {
    /**
     * 
     * @type {string}
     * @memberof Extinction
     */
    revision: string;
    /**
     * 
     * @type {string}
     * @memberof Extinction
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof Extinction
     */
    time: number;
    /**
     * 
     * @type {string}
     * @memberof Extinction
     */
    flag_key: string;
    /**
     * 
     * @type {string}
     * @memberof Extinction
     */
    project_key: string;
}
/**
 * 
 * @export
 * @interface ExtinctionCollectionRep
 */
export interface ExtinctionCollectionRep {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof ExtinctionCollectionRep
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {{ [key: string]: Array<ExtinctionRep>; }}
     * @memberof ExtinctionCollectionRep
     */
    items: { [key: string]: Array<ExtinctionRep>; };
}
/**
 * 
 * @export
 * @interface ExtinctionRep
 */
export interface ExtinctionRep {
    /**
     * 
     * @type {string}
     * @memberof ExtinctionRep
     */
    revision: string;
    /**
     * 
     * @type {string}
     * @memberof ExtinctionRep
     */
    message: string;
    /**
     * 
     * @type {number}
     * @memberof ExtinctionRep
     */
    time: number;
    /**
     * 
     * @type {string}
     * @memberof ExtinctionRep
     */
    flagKey: string;
    /**
     * 
     * @type {string}
     * @memberof ExtinctionRep
     */
    projKey: string;
}
/**
 * 
 * @export
 * @interface FeatureFlag
 */
export interface FeatureFlag {
    /**
     * A human-friendly name for the feature flag
     * @type {string}
     * @memberof FeatureFlag
     */
    name: string;
    /**
     * Kind of feature flag
     * @type {string}
     * @memberof FeatureFlag
     */
    kind: FeatureFlagKindEnum;
    /**
     * Description of the feature flag
     * @type {string}
     * @memberof FeatureFlag
     */
    description?: string;
    /**
     * A unique key used to reference the flag in your code
     * @type {string}
     * @memberof FeatureFlag
     */
    key: string;
    /**
     * Version of the feature flag
     * @type {number}
     * @memberof FeatureFlag
     */
    _version: number;
    /**
     * 
     * @type {number}
     * @memberof FeatureFlag
     */
    creationDate: number;
    /**
     * Deprecated, use clientSideAvailability. Whether or not this flag should be made available to the client-side JavaScript SDK
     * @type {boolean}
     * @memberof FeatureFlag
     */
    includeInSnippet?: boolean;
    /**
     * 
     * @type {ClientSideAvailability}
     * @memberof FeatureFlag
     */
    clientSideAvailability?: ClientSideAvailability;
    /**
     * An array of possible variations for the flag
     * @type {Array<Variation>}
     * @memberof FeatureFlag
     */
    variations: Array<Variation>;
    /**
     * 
     * @type {any}
     * @memberof FeatureFlag
     */
    variationJsonSchema?: any | null;
    /**
     * Whether or not the flag is a temporary flag
     * @type {boolean}
     * @memberof FeatureFlag
     */
    temporary: boolean;
    /**
     * Tags for the feature flag
     * @type {Array<string>}
     * @memberof FeatureFlag
     */
    tags: Array<string>;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof FeatureFlag
     */
    _links: { [key: string]: Link; };
    /**
     * Associated maintainerId for the feature flag
     * @type {string}
     * @memberof FeatureFlag
     */
    maintainerId?: string;
    /**
     * 
     * @type {MemberSummaryRep}
     * @memberof FeatureFlag
     */
    _maintainer?: MemberSummaryRep;
    /**
     * 
     * @type {Array<string>}
     * @memberof FeatureFlag
     */
    goalIds?: Array<string>;
    /**
     * 
     * @type {ExperimentInfoRep}
     * @memberof FeatureFlag
     */
    experiments: ExperimentInfoRep;
    /**
     * 
     * @type {{ [key: string]: CustomProperty; }}
     * @memberof FeatureFlag
     */
    customProperties: { [key: string]: CustomProperty; };
    /**
     * Boolean indicating if the feature flag is archived
     * @type {boolean}
     * @memberof FeatureFlag
     */
    archived: boolean;
    /**
     * 
     * @type {number}
     * @memberof FeatureFlag
     */
    archivedDate?: number;
    /**
     * 
     * @type {Defaults}
     * @memberof FeatureFlag
     */
    defaults?: Defaults;
    /**
     * 
     * @type {{ [key: string]: FeatureFlagConfig; }}
     * @memberof FeatureFlag
     */
    environments: { [key: string]: FeatureFlagConfig; };
}

/**
    * @export
    * @enum {string}
    */
export enum FeatureFlagKindEnum {
    Boolean = 'boolean',
    Multivariate = 'multivariate'
}

/**
 * 
 * @export
 * @interface FeatureFlagBody
 */
export interface FeatureFlagBody {
    /**
     * A human-friendly name for the feature flag
     * @type {string}
     * @memberof FeatureFlagBody
     */
    name: string;
    /**
     * A unique key to reference the flag in your code
     * @type {string}
     * @memberof FeatureFlagBody
     */
    key: string;
    /**
     * Description of the feature flag
     * @type {string}
     * @memberof FeatureFlagBody
     */
    description?: string;
    /**
     * Deprecated, use clientSideAvailability. Whether or not this flag should be made available to the client-side JavaScript SDK
     * @type {boolean}
     * @memberof FeatureFlagBody
     */
    includeInSnippet?: boolean;
    /**
     * 
     * @type {ClientSideAvailabilityPost}
     * @memberof FeatureFlagBody
     */
    clientSideAvailability?: ClientSideAvailabilityPost;
    /**
     * An array of possible variations for the flag
     * @type {Array<Variate>}
     * @memberof FeatureFlagBody
     */
    variations?: Array<Variate>;
    /**
     * 
     * @type {any}
     * @memberof FeatureFlagBody
     */
    variationJsonSchema?: any | null;
    /**
     * Whether or not the flag is a temporary flag
     * @type {boolean}
     * @memberof FeatureFlagBody
     */
    temporary?: boolean;
    /**
     * Tags for the feature flag
     * @type {Array<string>}
     * @memberof FeatureFlagBody
     */
    tags?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: CustomProperty; }}
     * @memberof FeatureFlagBody
     */
    customProperties?: { [key: string]: CustomProperty; };
    /**
     * 
     * @type {Defaults}
     * @memberof FeatureFlagBody
     */
    defaults?: Defaults;
}
/**
 * 
 * @export
 * @interface FeatureFlagConfig
 */
export interface FeatureFlagConfig {
    /**
     * 
     * @type {boolean}
     * @memberof FeatureFlagConfig
     */
    on: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FeatureFlagConfig
     */
    archived: boolean;
    /**
     * 
     * @type {string}
     * @memberof FeatureFlagConfig
     */
    salt: string;
    /**
     * 
     * @type {string}
     * @memberof FeatureFlagConfig
     */
    sel: string;
    /**
     * 
     * @type {number}
     * @memberof FeatureFlagConfig
     */
    lastModified: number;
    /**
     * 
     * @type {number}
     * @memberof FeatureFlagConfig
     */
    version: number;
    /**
     * 
     * @type {Array<Target>}
     * @memberof FeatureFlagConfig
     */
    targets: Array<Target>;
    /**
     * 
     * @type {Array<Rule>}
     * @memberof FeatureFlagConfig
     */
    rules: Array<Rule>;
    /**
     * 
     * @type {VariationOrRolloutRep}
     * @memberof FeatureFlagConfig
     */
    fallthrough: VariationOrRolloutRep;
    /**
     * 
     * @type {number}
     * @memberof FeatureFlagConfig
     */
    offVariation?: number;
    /**
     * 
     * @type {Array<Prerequisite>}
     * @memberof FeatureFlagConfig
     */
    prerequisites: Array<Prerequisite>;
    /**
     * 
     * @type {Link}
     * @memberof FeatureFlagConfig
     */
    _site: Link;
    /**
     * 
     * @type {AccessRep}
     * @memberof FeatureFlagConfig
     */
    _access?: AccessRep;
    /**
     * 
     * @type {string}
     * @memberof FeatureFlagConfig
     */
    _environmentName: string;
    /**
     * 
     * @type {boolean}
     * @memberof FeatureFlagConfig
     */
    trackEvents: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FeatureFlagConfig
     */
    trackEventsFallthrough: boolean;
    /**
     * 
     * @type {number}
     * @memberof FeatureFlagConfig
     */
    _debugEventsUntilDate?: number;
    /**
     * 
     * @type {FlagSummary}
     * @memberof FeatureFlagConfig
     */
    _summary?: FlagSummary;
}
/**
 * 
 * @export
 * @interface FeatureFlagScheduledChange
 */
export interface FeatureFlagScheduledChange {
    /**
     * 
     * @type {string}
     * @memberof FeatureFlagScheduledChange
     */
    _id: string;
    /**
     * 
     * @type {number}
     * @memberof FeatureFlagScheduledChange
     */
    _creationDate: number;
    /**
     * 
     * @type {string}
     * @memberof FeatureFlagScheduledChange
     */
    _maintainerId: string;
    /**
     * 
     * @type {number}
     * @memberof FeatureFlagScheduledChange
     */
    _version: number;
    /**
     * 
     * @type {number}
     * @memberof FeatureFlagScheduledChange
     */
    executionDate: number;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof FeatureFlagScheduledChange
     */
    instructions: Array<{ [key: string]: any; }>;
    /**
     * 
     * @type {any}
     * @memberof FeatureFlagScheduledChange
     */
    conflicts?: any | null;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof FeatureFlagScheduledChange
     */
    _links?: { [key: string]: Link; };
}
/**
 * 
 * @export
 * @interface FeatureFlagScheduledChanges
 */
export interface FeatureFlagScheduledChanges {
    /**
     * 
     * @type {Array<FeatureFlagScheduledChange>}
     * @memberof FeatureFlagScheduledChanges
     */
    items: Array<FeatureFlagScheduledChange>;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof FeatureFlagScheduledChanges
     */
    _links?: { [key: string]: Link; };
}
/**
 * 
 * @export
 * @interface FeatureFlagStatus
 */
export interface FeatureFlagStatus {
    /**
     * Status of the flag
     * @type {string}
     * @memberof FeatureFlagStatus
     */
    name: string;
    /**
     * Timestamp of last time flag was requested
     * @type {string}
     * @memberof FeatureFlagStatus
     */
    lastRequested?: string;
    /**
     * Default value seen from code
     * @type {any}
     * @memberof FeatureFlagStatus
     */
    _default?: any | null;
}
/**
 * 
 * @export
 * @interface FeatureFlagStatusAcrossEnvironments
 */
export interface FeatureFlagStatusAcrossEnvironments {
    /**
     * Flag status for environment.
     * @type {{ [key: string]: FeatureFlagStatus; }}
     * @memberof FeatureFlagStatusAcrossEnvironments
     */
    environments?: { [key: string]: FeatureFlagStatus; };
    /**
     * feature flag key
     * @type {string}
     * @memberof FeatureFlagStatusAcrossEnvironments
     */
    key?: string;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof FeatureFlagStatusAcrossEnvironments
     */
    _links?: { [key: string]: Link; };
}
/**
 * 
 * @export
 * @interface FeatureFlagStatuses
 */
export interface FeatureFlagStatuses {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof FeatureFlagStatuses
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {Array<FlagStatusRep>}
     * @memberof FeatureFlagStatuses
     */
    items?: Array<FlagStatusRep>;
}
/**
 * 
 * @export
 * @interface FeatureFlags
 */
export interface FeatureFlags {
    /**
     * 
     * @type {Array<FeatureFlag>}
     * @memberof FeatureFlags
     */
    items: Array<FeatureFlag>;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof FeatureFlags
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {number}
     * @memberof FeatureFlags
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface FlagConfigApprovalRequestResponse
 */
export interface FlagConfigApprovalRequestResponse {
    /**
     * 
     * @type {string}
     * @memberof FlagConfigApprovalRequestResponse
     */
    _id: string;
    /**
     * 
     * @type {number}
     * @memberof FlagConfigApprovalRequestResponse
     */
    _version: number;
    /**
     * 
     * @type {number}
     * @memberof FlagConfigApprovalRequestResponse
     */
    creationDate: number;
    /**
     * 
     * @type {string}
     * @memberof FlagConfigApprovalRequestResponse
     */
    serviceKind: string;
    /**
     * 
     * @type {string}
     * @memberof FlagConfigApprovalRequestResponse
     */
    requestorId?: string;
    /**
     * A human-friendly name for the approval request
     * @type {string}
     * @memberof FlagConfigApprovalRequestResponse
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof FlagConfigApprovalRequestResponse
     */
    reviewStatus: string;
    /**
     * 
     * @type {Array<ReviewResponse>}
     * @memberof FlagConfigApprovalRequestResponse
     */
    allReviews: Array<ReviewResponse>;
    /**
     * An array of member IDs. These members are notified to review the approval request.
     * @type {Array<string>}
     * @memberof FlagConfigApprovalRequestResponse
     */
    notifyMemberIds: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof FlagConfigApprovalRequestResponse
     */
    appliedDate?: number;
    /**
     * 
     * @type {string}
     * @memberof FlagConfigApprovalRequestResponse
     */
    appliedByMemberId?: string;
    /**
     * 
     * @type {string}
     * @memberof FlagConfigApprovalRequestResponse
     */
    status: string;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof FlagConfigApprovalRequestResponse
     */
    instructions: Array<{ [key: string]: any; }>;
    /**
     * 
     * @type {Array<Conflict>}
     * @memberof FlagConfigApprovalRequestResponse
     */
    conflicts: Array<Conflict>;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof FlagConfigApprovalRequestResponse
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {number}
     * @memberof FlagConfigApprovalRequestResponse
     */
    executionDate?: number;
    /**
     * ID of scheduled change to edit or delete
     * @type {string}
     * @memberof FlagConfigApprovalRequestResponse
     */
    operatingOnId?: string;
    /**
     * 
     * @type {IntegrationMetadata}
     * @memberof FlagConfigApprovalRequestResponse
     */
    integrationMetadata?: IntegrationMetadata;
    /**
     * 
     * @type {CopiedFromEnv}
     * @memberof FlagConfigApprovalRequestResponse
     */
    source?: CopiedFromEnv;
}
/**
 * 
 * @export
 * @interface FlagConfigApprovalRequestsResponse
 */
export interface FlagConfigApprovalRequestsResponse {
    /**
     * An array of approval requests
     * @type {Array<FlagConfigApprovalRequestResponse>}
     * @memberof FlagConfigApprovalRequestsResponse
     */
    items: Array<FlagConfigApprovalRequestResponse>;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof FlagConfigApprovalRequestsResponse
     */
    _links: { [key: string]: Link; };
}
/**
 * 
 * @export
 * @interface FlagCopyConfigEnvironment
 */
export interface FlagCopyConfigEnvironment {
    /**
     * 
     * @type {string}
     * @memberof FlagCopyConfigEnvironment
     */
    key: string;
    /**
     * 
     * @type {number}
     * @memberof FlagCopyConfigEnvironment
     */
    currentVersion?: number;
}
/**
 * 
 * @export
 * @interface FlagCopyConfigPost
 */
export interface FlagCopyConfigPost {
    /**
     * 
     * @type {FlagCopyConfigEnvironment}
     * @memberof FlagCopyConfigPost
     */
    source: FlagCopyConfigEnvironment;
    /**
     * 
     * @type {FlagCopyConfigEnvironment}
     * @memberof FlagCopyConfigPost
     */
    target: FlagCopyConfigEnvironment;
    /**
     * 
     * @type {string}
     * @memberof FlagCopyConfigPost
     */
    comment?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FlagCopyConfigPost
     */
    includedActions?: Array<FlagCopyConfigPostIncludedActionsEnum>;
    /**
     * 
     * @type {Array<string>}
     * @memberof FlagCopyConfigPost
     */
    excludedActions?: Array<FlagCopyConfigPostExcludedActionsEnum>;
}

/**
    * @export
    * @enum {string}
    */
export enum FlagCopyConfigPostIncludedActionsEnum {
    UpdateOn = 'updateOn',
    UpdateRules = 'updateRules',
    UpdateFallthrough = 'updateFallthrough',
    UpdateOffVariation = 'updateOffVariation',
    UpdatePrerequisites = 'updatePrerequisites',
    UpdateTargets = 'updateTargets'
}
/**
    * @export
    * @enum {string}
    */
export enum FlagCopyConfigPostExcludedActionsEnum {
    UpdateOn = 'updateOn',
    UpdateRules = 'updateRules',
    UpdateFallthrough = 'updateFallthrough',
    UpdateOffVariation = 'updateOffVariation',
    UpdatePrerequisites = 'updatePrerequisites',
    UpdateTargets = 'updateTargets'
}

/**
 * 
 * @export
 * @interface FlagGlobalAttributesRep
 */
export interface FlagGlobalAttributesRep {
    /**
     * A human-friendly name for the feature flag
     * @type {string}
     * @memberof FlagGlobalAttributesRep
     */
    name: string;
    /**
     * Kind of feature flag
     * @type {string}
     * @memberof FlagGlobalAttributesRep
     */
    kind: FlagGlobalAttributesRepKindEnum;
    /**
     * Description of the feature flag
     * @type {string}
     * @memberof FlagGlobalAttributesRep
     */
    description?: string;
    /**
     * A unique key used to reference the flag in your code
     * @type {string}
     * @memberof FlagGlobalAttributesRep
     */
    key: string;
    /**
     * Version of the feature flag
     * @type {number}
     * @memberof FlagGlobalAttributesRep
     */
    _version: number;
    /**
     * 
     * @type {number}
     * @memberof FlagGlobalAttributesRep
     */
    creationDate: number;
    /**
     * Deprecated, use clientSideAvailability. Whether or not this flag should be made available to the client-side JavaScript SDK
     * @type {boolean}
     * @memberof FlagGlobalAttributesRep
     */
    includeInSnippet?: boolean;
    /**
     * 
     * @type {ClientSideAvailability}
     * @memberof FlagGlobalAttributesRep
     */
    clientSideAvailability?: ClientSideAvailability;
    /**
     * An array of possible variations for the flag
     * @type {Array<Variation>}
     * @memberof FlagGlobalAttributesRep
     */
    variations: Array<Variation>;
    /**
     * 
     * @type {any}
     * @memberof FlagGlobalAttributesRep
     */
    variationJsonSchema?: any | null;
    /**
     * Whether or not the flag is a temporary flag
     * @type {boolean}
     * @memberof FlagGlobalAttributesRep
     */
    temporary: boolean;
    /**
     * Tags for the feature flag
     * @type {Array<string>}
     * @memberof FlagGlobalAttributesRep
     */
    tags: Array<string>;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof FlagGlobalAttributesRep
     */
    _links: { [key: string]: Link; };
    /**
     * Associated maintainerId for the feature flag
     * @type {string}
     * @memberof FlagGlobalAttributesRep
     */
    maintainerId?: string;
    /**
     * 
     * @type {MemberSummaryRep}
     * @memberof FlagGlobalAttributesRep
     */
    _maintainer?: MemberSummaryRep;
    /**
     * 
     * @type {Array<string>}
     * @memberof FlagGlobalAttributesRep
     */
    goalIds?: Array<string>;
    /**
     * 
     * @type {ExperimentInfoRep}
     * @memberof FlagGlobalAttributesRep
     */
    experiments: ExperimentInfoRep;
    /**
     * 
     * @type {{ [key: string]: CustomProperty; }}
     * @memberof FlagGlobalAttributesRep
     */
    customProperties: { [key: string]: CustomProperty; };
    /**
     * Boolean indicating if the feature flag is archived
     * @type {boolean}
     * @memberof FlagGlobalAttributesRep
     */
    archived: boolean;
    /**
     * 
     * @type {number}
     * @memberof FlagGlobalAttributesRep
     */
    archivedDate?: number;
    /**
     * 
     * @type {Defaults}
     * @memberof FlagGlobalAttributesRep
     */
    defaults?: Defaults;
}

/**
    * @export
    * @enum {string}
    */
export enum FlagGlobalAttributesRepKindEnum {
    Boolean = 'boolean',
    Multivariate = 'multivariate'
}

/**
 * 
 * @export
 * @interface FlagListingRep
 */
export interface FlagListingRep {
    /**
     * 
     * @type {string}
     * @memberof FlagListingRep
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof FlagListingRep
     */
    key: string;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof FlagListingRep
     */
    _links?: { [key: string]: Link; };
    /**
     * 
     * @type {Link}
     * @memberof FlagListingRep
     */
    _site?: Link;
}
/**
 * 
 * @export
 * @interface FlagScheduledChangesInput
 */
export interface FlagScheduledChangesInput {
    /**
     * 
     * @type {string}
     * @memberof FlagScheduledChangesInput
     */
    comment?: string;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof FlagScheduledChangesInput
     */
    instructions: Array<{ [key: string]: any; }>;
}
/**
 * 
 * @export
 * @interface FlagStatusRep
 */
export interface FlagStatusRep {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof FlagStatusRep
     */
    _links: { [key: string]: Link; };
    /**
     * Status of the flag
     * @type {string}
     * @memberof FlagStatusRep
     */
    name?: string;
    /**
     * Timestamp of last time flag was requested
     * @type {string}
     * @memberof FlagStatusRep
     */
    lastRequested?: string;
    /**
     * Default value seen from code
     * @type {any}
     * @memberof FlagStatusRep
     */
    _default?: any | null;
}
/**
 * 
 * @export
 * @interface FlagSummary
 */
export interface FlagSummary {
    /**
     * 
     * @type {number}
     * @memberof FlagSummary
     */
    prerequisites: number;
}
/**
 * 
 * @export
 * @interface HunkRep
 */
export interface HunkRep {
    /**
     * 
     * @type {number}
     * @memberof HunkRep
     */
    startingLineNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof HunkRep
     */
    lines?: string;
    /**
     * 
     * @type {string}
     * @memberof HunkRep
     */
    projKey?: string;
    /**
     * 
     * @type {string}
     * @memberof HunkRep
     */
    flagKey?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof HunkRep
     */
    aliases?: Array<string>;
}
/**
 * 
 * @export
 * @interface InlineObject
 */
export interface InlineObject {
    /**
     * 
     * @type {string}
     * @memberof InlineObject
     */
    revision: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineObject
     */
    time: number;
    /**
     * 
     * @type {string}
     * @memberof InlineObject
     */
    flag_key: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject
     */
    project_key: string;
}
/**
 * 
 * @export
 * @interface InlineObject1
 */
export interface InlineObject1 {
    /**
     * The member\'s email
     * @type {string}
     * @memberof InlineObject1
     */
    email: string;
    /**
     * The member\'s password
     * @type {string}
     * @memberof InlineObject1
     */
    password?: string;
    /**
     * The member\'s first name
     * @type {string}
     * @memberof InlineObject1
     */
    firstName?: string;
    /**
     * The member\'s last name
     * @type {string}
     * @memberof InlineObject1
     */
    lastName?: string;
    /**
     * The member\'s built-in role
     * @type {string}
     * @memberof InlineObject1
     */
    role?: string;
    /**
     * The member\'s custom role
     * @type {Array<string>}
     * @memberof InlineObject1
     */
    customRoles?: Array<string>;
}
/**
 * 
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200
     */
    href?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200
     */
    type?: string;
}
/**
 * 
 * @export
 * @interface IntegrationMetadata
 */
export interface IntegrationMetadata {
    /**
     * 
     * @type {string}
     * @memberof IntegrationMetadata
     */
    externalId: string;
    /**
     * 
     * @type {IntegrationStatus}
     * @memberof IntegrationMetadata
     */
    externalStatus: IntegrationStatus;
    /**
     * 
     * @type {string}
     * @memberof IntegrationMetadata
     */
    externalUrl: string;
    /**
     * 
     * @type {number}
     * @memberof IntegrationMetadata
     */
    lastChecked: number;
}
/**
 * 
 * @export
 * @interface IntegrationStatus
 */
export interface IntegrationStatus {
    /**
     * 
     * @type {string}
     * @memberof IntegrationStatus
     */
    display: string;
    /**
     * 
     * @type {string}
     * @memberof IntegrationStatus
     */
    value: string;
}
/**
 * 
 * @export
 * @interface IpList
 */
export interface IpList {
    /**
     * 
     * @type {Array<string>}
     * @memberof IpList
     */
    addresses: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof IpList
     */
    outboundAddresses: Array<string>;
}
/**
 * 
 * @export
 * @interface LastSeenMetadata
 */
export interface LastSeenMetadata {
    /**
     * The ID of the token used in the member\'s last session
     * @type {string}
     * @memberof LastSeenMetadata
     */
    tokenId?: string;
}
/**
 * 
 * @export
 * @interface Link
 */
export interface Link {
    /**
     * 
     * @type {string}
     * @memberof Link
     */
    href?: string;
    /**
     * 
     * @type {string}
     * @memberof Link
     */
    type?: string;
}
/**
 * 
 * @export
 * @interface Member
 */
export interface Member {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof Member
     */
    _links: { [key: string]: Link; };
    /**
     * The member\'s ID
     * @type {string}
     * @memberof Member
     */
    _id: string;
    /**
     * The member\'s first name
     * @type {string}
     * @memberof Member
     */
    firstName?: string;
    /**
     * The member\'s last name
     * @type {string}
     * @memberof Member
     */
    lastName?: string;
    /**
     * The member\'s built-in role. If the member has no custom roles, this role will be in effect.
     * @type {string}
     * @memberof Member
     */
    role: string;
    /**
     * The member\'s email address
     * @type {string}
     * @memberof Member
     */
    email: string;
    /**
     * Whether or not the member has a pending invitation
     * @type {boolean}
     * @memberof Member
     */
    _pendingInvite: boolean;
    /**
     * Whether or not the member\'s email address has been verified
     * @type {boolean}
     * @memberof Member
     */
    _verified: boolean;
    /**
     * 
     * @type {string}
     * @memberof Member
     */
    _pendingEmail?: string;
    /**
     * The set of custom roles (as keys) assigned to the member
     * @type {Array<string>}
     * @memberof Member
     */
    customRoles: Array<string>;
    /**
     * Whether or not multi-factor authentication is enabled for this member
     * @type {string}
     * @memberof Member
     */
    mfa: string;
    /**
     * Default dashboards that the member has chosen to ignore
     * @type {Array<string>}
     * @memberof Member
     */
    excludedDashboards: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof Member
     */
    _lastSeen: number;
    /**
     * 
     * @type {LastSeenMetadata}
     * @memberof Member
     */
    _lastSeenMetadata?: LastSeenMetadata;
    /**
     * 
     * @type {IntegrationMetadata}
     * @memberof Member
     */
    _integrationMetadata?: IntegrationMetadata;
    /**
     * 
     * @type {Array<MemberTeamSummaryRep>}
     * @memberof Member
     */
    teams?: Array<MemberTeamSummaryRep>;
    /**
     * 
     * @type {Array<MemberPermissionGrantSummaryRep>}
     * @memberof Member
     */
    permissionGrants?: Array<MemberPermissionGrantSummaryRep>;
}
/**
 * 
 * @export
 * @interface MemberDataRep
 */
export interface MemberDataRep {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof MemberDataRep
     */
    _links?: { [key: string]: Link; };
    /**
     * 
     * @type {string}
     * @memberof MemberDataRep
     */
    _id?: string;
    /**
     * 
     * @type {string}
     * @memberof MemberDataRep
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof MemberDataRep
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof MemberDataRep
     */
    lastName?: string;
}
/**
 * 
 * @export
 * @interface MemberPermissionGrantSummaryRep
 */
export interface MemberPermissionGrantSummaryRep {
    /**
     * 
     * @type {string}
     * @memberof MemberPermissionGrantSummaryRep
     */
    actionSet: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof MemberPermissionGrantSummaryRep
     */
    actions: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof MemberPermissionGrantSummaryRep
     */
    resource: string;
}
/**
 * 
 * @export
 * @interface MemberSummaryRep
 */
export interface MemberSummaryRep {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof MemberSummaryRep
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {string}
     * @memberof MemberSummaryRep
     */
    _id: string;
    /**
     * 
     * @type {string}
     * @memberof MemberSummaryRep
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof MemberSummaryRep
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof MemberSummaryRep
     */
    role: string;
    /**
     * 
     * @type {string}
     * @memberof MemberSummaryRep
     */
    email: string;
}
/**
 * 
 * @export
 * @interface MemberTeamSummaryRep
 */
export interface MemberTeamSummaryRep {
    /**
     * 
     * @type {Array<string>}
     * @memberof MemberTeamSummaryRep
     */
    customRoleKeys: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof MemberTeamSummaryRep
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof MemberTeamSummaryRep
     */
    name: string;
}
/**
 * 
 * @export
 * @interface Members
 */
export interface Members {
    /**
     * 
     * @type {Array<Member>}
     * @memberof Members
     */
    items: Array<Member>;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof Members
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {number}
     * @memberof Members
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface MetricCollectionRep
 */
export interface MetricCollectionRep {
    /**
     * 
     * @type {Array<MetricListingRep>}
     * @memberof MetricCollectionRep
     */
    items?: Array<MetricListingRep>;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof MetricCollectionRep
     */
    _links?: { [key: string]: Link; };
}
/**
 * 
 * @export
 * @interface MetricListingRep
 */
export interface MetricListingRep {
    /**
     * 
     * @type {string}
     * @memberof MetricListingRep
     */
    _id: string;
    /**
     * 
     * @type {string}
     * @memberof MetricListingRep
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof MetricListingRep
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof MetricListingRep
     */
    kind: MetricListingRepKindEnum;
    /**
     * 
     * @type {number}
     * @memberof MetricListingRep
     */
    _attachedFlagCount?: number;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof MetricListingRep
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {Link}
     * @memberof MetricListingRep
     */
    _site?: Link;
    /**
     * 
     * @type {AccessRep}
     * @memberof MetricListingRep
     */
    _access?: AccessRep;
    /**
     * 
     * @type {Array<string>}
     * @memberof MetricListingRep
     */
    tags: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof MetricListingRep
     */
    _creationDate: number;
    /**
     * 
     * @type {Modification}
     * @memberof MetricListingRep
     */
    lastModified?: Modification;
    /**
     * 
     * @type {string}
     * @memberof MetricListingRep
     */
    maintainerId?: string;
    /**
     * 
     * @type {MemberSummaryRep}
     * @memberof MetricListingRep
     */
    _maintainer?: MemberSummaryRep;
    /**
     * 
     * @type {string}
     * @memberof MetricListingRep
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MetricListingRep
     */
    isNumeric?: boolean;
    /**
     * 
     * @type {number}
     * @memberof MetricListingRep
     */
    successCriteria?: number;
    /**
     * 
     * @type {string}
     * @memberof MetricListingRep
     */
    unit?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricListingRep
     */
    eventKey?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum MetricListingRepKindEnum {
    Pageview = 'pageview',
    Click = 'click',
    Custom = 'custom'
}

/**
 * 
 * @export
 * @interface MetricPost
 */
export interface MetricPost {
    /**
     * 
     * @type {string}
     * @memberof MetricPost
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof MetricPost
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricPost
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricPost
     */
    kind: MetricPostKindEnum;
    /**
     * Required for click metrics
     * @type {string}
     * @memberof MetricPost
     */
    selector?: string;
    /**
     * Required for click and pageview metrics
     * @type {Array<UrlPost>}
     * @memberof MetricPost
     */
    urls?: Array<UrlPost>;
    /**
     * 
     * @type {boolean}
     * @memberof MetricPost
     */
    isActive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MetricPost
     */
    isNumeric?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MetricPost
     */
    unit?: string;
    /**
     * Required for custom metrics
     * @type {string}
     * @memberof MetricPost
     */
    eventKey?: string;
    /**
     * 
     * @type {number}
     * @memberof MetricPost
     */
    successCriteria?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof MetricPost
     */
    tags?: Array<string>;
}

/**
    * @export
    * @enum {string}
    */
export enum MetricPostKindEnum {
    Pageview = 'pageview',
    Click = 'click',
    Custom = 'custom'
}

/**
 * 
 * @export
 * @interface MetricRep
 */
export interface MetricRep {
    /**
     * 
     * @type {string}
     * @memberof MetricRep
     */
    _id: string;
    /**
     * 
     * @type {string}
     * @memberof MetricRep
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof MetricRep
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof MetricRep
     */
    kind: MetricRepKindEnum;
    /**
     * 
     * @type {number}
     * @memberof MetricRep
     */
    _attachedFlagCount?: number;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof MetricRep
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {Link}
     * @memberof MetricRep
     */
    _site?: Link;
    /**
     * 
     * @type {AccessRep}
     * @memberof MetricRep
     */
    _access?: AccessRep;
    /**
     * 
     * @type {Array<string>}
     * @memberof MetricRep
     */
    tags: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof MetricRep
     */
    _creationDate: number;
    /**
     * 
     * @type {Modification}
     * @memberof MetricRep
     */
    lastModified?: Modification;
    /**
     * 
     * @type {string}
     * @memberof MetricRep
     */
    maintainerId?: string;
    /**
     * 
     * @type {MemberSummaryRep}
     * @memberof MetricRep
     */
    _maintainer?: MemberSummaryRep;
    /**
     * 
     * @type {string}
     * @memberof MetricRep
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MetricRep
     */
    isNumeric?: boolean;
    /**
     * 
     * @type {number}
     * @memberof MetricRep
     */
    successCriteria?: number;
    /**
     * 
     * @type {string}
     * @memberof MetricRep
     */
    unit?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricRep
     */
    eventKey?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MetricRep
     */
    isActive?: boolean;
    /**
     * 
     * @type {Array<FlagListingRep>}
     * @memberof MetricRep
     */
    _attachedFeatures?: Array<FlagListingRep>;
    /**
     * 
     * @type {number}
     * @memberof MetricRep
     */
    _version?: number;
    /**
     * 
     * @type {string}
     * @memberof MetricRep
     */
    selector?: string;
    /**
     * 
     * @type {Array<any>}
     * @memberof MetricRep
     */
    urls?: Array<any>;
}

/**
    * @export
    * @enum {string}
    */
export enum MetricRepKindEnum {
    Pageview = 'pageview',
    Click = 'click',
    Custom = 'custom'
}

/**
 * 
 * @export
 * @interface Modification
 */
export interface Modification {
    /**
     * 
     * @type {string}
     * @memberof Modification
     */
    date?: string;
}
/**
 * 
 * @export
 * @interface MultiEnvironmentDependentFlag
 */
export interface MultiEnvironmentDependentFlag {
    /**
     * 
     * @type {string}
     * @memberof MultiEnvironmentDependentFlag
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof MultiEnvironmentDependentFlag
     */
    key: string;
    /**
     * 
     * @type {Array<DependentFlagEnvironment>}
     * @memberof MultiEnvironmentDependentFlag
     */
    environments: Array<DependentFlagEnvironment>;
}
/**
 * 
 * @export
 * @interface MultiEnvironmentDependentFlags
 */
export interface MultiEnvironmentDependentFlags {
    /**
     * 
     * @type {Array<MultiEnvironmentDependentFlag>}
     * @memberof MultiEnvironmentDependentFlags
     */
    items: Array<MultiEnvironmentDependentFlag>;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof MultiEnvironmentDependentFlags
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {Link}
     * @memberof MultiEnvironmentDependentFlags
     */
    _site: Link;
}
/**
 * 
 * @export
 * @interface NewMemberForm
 */
export interface NewMemberForm {
    /**
     * The member\'s email
     * @type {string}
     * @memberof NewMemberForm
     */
    email: string;
    /**
     * The member\'s password
     * @type {string}
     * @memberof NewMemberForm
     */
    password?: string;
    /**
     * The member\'s first name
     * @type {string}
     * @memberof NewMemberForm
     */
    firstName?: string;
    /**
     * The member\'s last name
     * @type {string}
     * @memberof NewMemberForm
     */
    lastName?: string;
    /**
     * The member\'s built-in role
     * @type {string}
     * @memberof NewMemberForm
     */
    role?: string;
    /**
     * The member\'s custom role
     * @type {Array<string>}
     * @memberof NewMemberForm
     */
    customRoles?: Array<string>;
}
/**
 * 
 * @export
 * @interface ParentResourceRep
 */
export interface ParentResourceRep {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof ParentResourceRep
     */
    _links?: { [key: string]: Link; };
    /**
     * 
     * @type {string}
     * @memberof ParentResourceRep
     */
    name?: string;
    /**
     * 
     * @type {any}
     * @memberof ParentResourceRep
     */
    resource?: any | null;
}
/**
 * 
 * @export
 * @interface PatchOperation
 */
export interface PatchOperation {
    /**
     * The type of operation to perform
     * @type {string}
     * @memberof PatchOperation
     */
    op: string;
    /**
     * A JSON Pointer string specifying the part of the document to operate on
     * @type {string}
     * @memberof PatchOperation
     */
    path: string;
    /**
     * A JSON value used in \"add\", \"replace\", and \"test\" operations
     * @type {any}
     * @memberof PatchOperation
     */
    value: any | null;
}
/**
 * 
 * @export
 * @interface PatchSegmentInstruction
 */
export interface PatchSegmentInstruction {
    /**
     * 
     * @type {string}
     * @memberof PatchSegmentInstruction
     */
    kind: string;
    /**
     * A unique key used to represent the user
     * @type {string}
     * @memberof PatchSegmentInstruction
     */
    userKey: string;
    /**
     * A segment\'s target type. Must be either <code>included</code> or <code>excluded</code>
     * @type {string}
     * @memberof PatchSegmentInstruction
     */
    targetType: string;
    /**
     * Schedule user target expiration on a segment by including a timestamp
     * @type {number}
     * @memberof PatchSegmentInstruction
     */
    value?: number;
    /**
     * Required if <code>kind</code> is <code>updateExpireUserTargetDate</code>
     * @type {number}
     * @memberof PatchSegmentInstruction
     */
    version?: number;
}
/**
 * 
 * @export
 * @interface PatchSegmentRequest
 */
export interface PatchSegmentRequest {
    /**
     * Optional description of changes
     * @type {string}
     * @memberof PatchSegmentRequest
     */
    comment?: string;
    /**
     * Semantic patch instructions for the desired changes to the resource
     * @type {Array<PatchSegmentInstruction>}
     * @memberof PatchSegmentRequest
     */
    instructions: Array<PatchSegmentInstruction>;
}
/**
 * 
 * @export
 * @interface PatchWithComment
 */
export interface PatchWithComment {
    /**
     * 
     * @type {Array<PatchOperation>}
     * @memberof PatchWithComment
     */
    patch: Array<PatchOperation>;
    /**
     * 
     * @type {string}
     * @memberof PatchWithComment
     */
    comment?: string;
}
/**
 * 
 * @export
 * @interface PostApprovalRequestApplyRequest
 */
export interface PostApprovalRequestApplyRequest {
    /**
     * 
     * @type {string}
     * @memberof PostApprovalRequestApplyRequest
     */
    comment?: string;
}
/**
 * 
 * @export
 * @interface PostApprovalRequestReviewRequest
 */
export interface PostApprovalRequestReviewRequest {
    /**
     * 
     * @type {string}
     * @memberof PostApprovalRequestReviewRequest
     */
    kind?: string;
    /**
     * 
     * @type {string}
     * @memberof PostApprovalRequestReviewRequest
     */
    comment?: string;
}
/**
 * 
 * @export
 * @interface PostFlagScheduledChangesInput
 */
export interface PostFlagScheduledChangesInput {
    /**
     * 
     * @type {string}
     * @memberof PostFlagScheduledChangesInput
     */
    comment?: string;
    /**
     * 
     * @type {number}
     * @memberof PostFlagScheduledChangesInput
     */
    executionDate: number;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof PostFlagScheduledChangesInput
     */
    instructions: Array<{ [key: string]: any; }>;
}
/**
 * 
 * @export
 * @interface Prerequisite
 */
export interface Prerequisite {
    /**
     * 
     * @type {string}
     * @memberof Prerequisite
     */
    key: string;
    /**
     * 
     * @type {number}
     * @memberof Prerequisite
     */
    variation: number;
}
/**
 * 
 * @export
 * @interface Project
 */
export interface Project {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof Project
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    _id: string;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    key: string;
    /**
     * 
     * @type {boolean}
     * @memberof Project
     */
    includeInSnippetByDefault: boolean;
    /**
     * 
     * @type {ClientSideAvailability}
     * @memberof Project
     */
    defaultClientSideAvailability?: ClientSideAvailability;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Project
     */
    tags: Array<string>;
    /**
     * 
     * @type {Array<Environment>}
     * @memberof Project
     */
    environments: Array<Environment>;
}
/**
 * 
 * @export
 * @interface ProjectListingRep
 */
export interface ProjectListingRep {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof ProjectListingRep
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {string}
     * @memberof ProjectListingRep
     */
    _id: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectListingRep
     */
    key: string;
    /**
     * 
     * @type {boolean}
     * @memberof ProjectListingRep
     */
    includeInSnippetByDefault: boolean;
    /**
     * 
     * @type {ClientSideAvailability}
     * @memberof ProjectListingRep
     */
    defaultClientSideAvailability?: ClientSideAvailability;
    /**
     * 
     * @type {string}
     * @memberof ProjectListingRep
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProjectListingRep
     */
    tags: Array<string>;
}
/**
 * 
 * @export
 * @interface ProjectPost
 */
export interface ProjectPost {
    /**
     * A human-friendly name for the project.
     * @type {string}
     * @memberof ProjectPost
     */
    name: string;
    /**
     * A unique key used to reference the project in your code.
     * @type {string}
     * @memberof ProjectPost
     */
    key: string;
    /**
     * Whether or not flags created in this project are made available to the client-side JavaScript SDK by default.
     * @type {boolean}
     * @memberof ProjectPost
     */
    includeInSnippetByDefault?: boolean;
    /**
     * 
     * @type {DefaultClientSideAvailabilityPost}
     * @memberof ProjectPost
     */
    defaultClientSideAvailability?: DefaultClientSideAvailabilityPost;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProjectPost
     */
    tags?: Array<string>;
    /**
     * Creates the provided environments for this project. If omitted default environments will be created instead.
     * @type {Array<object>}
     * @memberof ProjectPost
     */
    environments?: Array<object>;
}
/**
 * 
 * @export
 * @interface Projects
 */
export interface Projects {
    /**
     * A link to this resource.
     * @type {{ [key: string]: Link; }}
     * @memberof Projects
     */
    _links: { [key: string]: Link; };
    /**
     * List of projects.
     * @type {Array<Project>}
     * @memberof Projects
     */
    items: Array<Project>;
}
/**
 * 
 * @export
 * @interface PubNubDetailRep
 */
export interface PubNubDetailRep {
    /**
     * 
     * @type {string}
     * @memberof PubNubDetailRep
     */
    channel?: string;
    /**
     * 
     * @type {string}
     * @memberof PubNubDetailRep
     */
    cipherKey?: string;
}
/**
 * 
 * @export
 * @interface ReferenceRep
 */
export interface ReferenceRep {
    /**
     * 
     * @type {string}
     * @memberof ReferenceRep
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof ReferenceRep
     */
    hint?: string;
    /**
     * 
     * @type {Array<HunkRep>}
     * @memberof ReferenceRep
     */
    hunks?: Array<HunkRep>;
}
/**
 * 
 * @export
 * @interface RelayAutoConfigCollectionRep
 */
export interface RelayAutoConfigCollectionRep {
    /**
     * 
     * @type {Array<RelayAutoConfigRep>}
     * @memberof RelayAutoConfigCollectionRep
     */
    items: Array<RelayAutoConfigRep>;
}
/**
 * 
 * @export
 * @interface RelayAutoConfigPost
 */
export interface RelayAutoConfigPost {
    /**
     * A human-friendly name for the Relay Proxy configuration
     * @type {string}
     * @memberof RelayAutoConfigPost
     */
    name: string;
    /**
     * 
     * @type {Array<StatementRep>}
     * @memberof RelayAutoConfigPost
     */
    policy: Array<StatementRep>;
}
/**
 * 
 * @export
 * @interface RelayAutoConfigRep
 */
export interface RelayAutoConfigRep {
    /**
     * 
     * @type {string}
     * @memberof RelayAutoConfigRep
     */
    _id: string;
    /**
     * 
     * @type {MemberSummaryRep}
     * @memberof RelayAutoConfigRep
     */
    _creator?: MemberSummaryRep;
    /**
     * 
     * @type {AccessRep}
     * @memberof RelayAutoConfigRep
     */
    _access?: AccessRep;
    /**
     * 
     * @type {string}
     * @memberof RelayAutoConfigRep
     */
    name: string;
    /**
     * 
     * @type {Array<StatementRep>}
     * @memberof RelayAutoConfigRep
     */
    policy: Array<StatementRep>;
    /**
     * 
     * @type {string}
     * @memberof RelayAutoConfigRep
     */
    fullKey: string;
    /**
     * 
     * @type {string}
     * @memberof RelayAutoConfigRep
     */
    displayKey: string;
    /**
     * 
     * @type {number}
     * @memberof RelayAutoConfigRep
     */
    creationDate: number;
    /**
     * 
     * @type {number}
     * @memberof RelayAutoConfigRep
     */
    lastModified: number;
}
/**
 * 
 * @export
 * @interface RepositoryCollectionRep
 */
export interface RepositoryCollectionRep {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof RepositoryCollectionRep
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {Array<RepositoryRep>}
     * @memberof RepositoryCollectionRep
     */
    items: Array<RepositoryRep>;
}
/**
 * 
 * @export
 * @interface RepositoryPost
 */
export interface RepositoryPost {
    /**
     * 
     * @type {string}
     * @memberof RepositoryPost
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RepositoryPost
     */
    sourceLink?: string;
    /**
     * 
     * @type {string}
     * @memberof RepositoryPost
     */
    commitUrlTemplate?: string;
    /**
     * 
     * @type {string}
     * @memberof RepositoryPost
     */
    hunkUrlTemplate?: string;
    /**
     * Optionally specify a repository type. The default value is <code>custom</code>
     * @type {string}
     * @memberof RepositoryPost
     */
    type?: RepositoryPostTypeEnum;
    /**
     * The default branch, if not specified, is <code>master</code>
     * @type {string}
     * @memberof RepositoryPost
     */
    defaultBranch?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum RepositoryPostTypeEnum {
    Github = 'github',
    Bitbucket = 'bitbucket',
    Custom = 'custom'
}

/**
 * 
 * @export
 * @interface RepositoryRep
 */
export interface RepositoryRep {
    /**
     * 
     * @type {string}
     * @memberof RepositoryRep
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RepositoryRep
     */
    sourceLink?: string;
    /**
     * 
     * @type {string}
     * @memberof RepositoryRep
     */
    commitUrlTemplate?: string;
    /**
     * 
     * @type {string}
     * @memberof RepositoryRep
     */
    hunkUrlTemplate?: string;
    /**
     * 
     * @type {string}
     * @memberof RepositoryRep
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof RepositoryRep
     */
    defaultBranch: string;
    /**
     * 
     * @type {boolean}
     * @memberof RepositoryRep
     */
    enabled: boolean;
    /**
     * 
     * @type {number}
     * @memberof RepositoryRep
     */
    version: number;
    /**
     * 
     * @type {Array<BranchRep>}
     * @memberof RepositoryRep
     */
    branches?: Array<BranchRep>;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof RepositoryRep
     */
    _links: { [key: string]: any; };
    /**
     * 
     * @type {AccessRep}
     * @memberof RepositoryRep
     */
    _access?: AccessRep;
}
/**
 * 
 * @export
 * @interface ResourceAccess
 */
export interface ResourceAccess {
    /**
     * 
     * @type {string}
     * @memberof ResourceAccess
     */
    action?: string;
    /**
     * 
     * @type {any}
     * @memberof ResourceAccess
     */
    resource?: any | null;
}
/**
 * 
 * @export
 * @interface ResourceIDResponse
 */
export interface ResourceIDResponse {
    /**
     * 
     * @type {string}
     * @memberof ResourceIDResponse
     */
    kind?: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceIDResponse
     */
    projectKey?: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceIDResponse
     */
    environmentKey?: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceIDResponse
     */
    flagKey?: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceIDResponse
     */
    key?: string;
}
/**
 * 
 * @export
 * @interface ReviewResponse
 */
export interface ReviewResponse {
    /**
     * The approval request id
     * @type {string}
     * @memberof ReviewResponse
     */
    _id: string;
    /**
     * The type of review action to take. Either \"approve\", \"decline\" or \"comment\"
     * @type {string}
     * @memberof ReviewResponse
     */
    kind: ReviewResponseKindEnum;
    /**
     * 
     * @type {number}
     * @memberof ReviewResponse
     */
    creationDate?: number;
    /**
     * A comment describing the approval response
     * @type {string}
     * @memberof ReviewResponse
     */
    comment?: string;
    /**
     * ID of account member that reviewed request
     * @type {string}
     * @memberof ReviewResponse
     */
    memberId?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum ReviewResponseKindEnum {
    Approve = 'approve',
    Decline = 'decline',
    Comment = 'comment'
}

/**
 * 
 * @export
 * @interface Rollout
 */
export interface Rollout {
    /**
     * 
     * @type {Array<WeightedVariation>}
     * @memberof Rollout
     */
    variations: Array<WeightedVariation>;
    /**
     * 
     * @type {ExperimentAllocationRep}
     * @memberof Rollout
     */
    experimentAllocation?: ExperimentAllocationRep;
    /**
     * 
     * @type {number}
     * @memberof Rollout
     */
    seed?: number;
    /**
     * 
     * @type {string}
     * @memberof Rollout
     */
    bucketBy?: string;
}
/**
 * 
 * @export
 * @interface Rule
 */
export interface Rule {
    /**
     * 
     * @type {string}
     * @memberof Rule
     */
    _id?: string;
    /**
     * 
     * @type {number}
     * @memberof Rule
     */
    variation?: number;
    /**
     * 
     * @type {Rollout}
     * @memberof Rule
     */
    rollout?: Rollout;
    /**
     * 
     * @type {Array<Clause>}
     * @memberof Rule
     */
    clauses: Array<Clause>;
    /**
     * 
     * @type {boolean}
     * @memberof Rule
     */
    trackEvents: boolean;
    /**
     * 
     * @type {string}
     * @memberof Rule
     */
    description?: string;
}
/**
 * 
 * @export
 * @interface SdkListRep
 */
export interface SdkListRep {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof SdkListRep
     */
    _links: { [key: string]: any; };
    /**
     * 
     * @type {Array<string>}
     * @memberof SdkListRep
     */
    sdks: Array<string>;
}
/**
 * 
 * @export
 * @interface SdkVersionListRep
 */
export interface SdkVersionListRep {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof SdkVersionListRep
     */
    _links: { [key: string]: any; };
    /**
     * 
     * @type {Array<SdkVersionRep>}
     * @memberof SdkVersionListRep
     */
    sdkVersions: Array<SdkVersionRep>;
}
/**
 * 
 * @export
 * @interface SdkVersionRep
 */
export interface SdkVersionRep {
    /**
     * 
     * @type {string}
     * @memberof SdkVersionRep
     */
    sdk: string;
    /**
     * 
     * @type {string}
     * @memberof SdkVersionRep
     */
    version: string;
}
/**
 * 
 * @export
 * @interface SegmentBody
 */
export interface SegmentBody {
    /**
     * A human-friendly name for the segment
     * @type {string}
     * @memberof SegmentBody
     */
    name: string;
    /**
     * A unique key used to reference the segment
     * @type {string}
     * @memberof SegmentBody
     */
    key: string;
    /**
     * A description of the segment\'s purpose
     * @type {string}
     * @memberof SegmentBody
     */
    description?: string;
    /**
     * Tags for the segment
     * @type {Array<string>}
     * @memberof SegmentBody
     */
    tags?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof SegmentBody
     */
    unbounded?: boolean;
}
/**
 * 
 * @export
 * @interface SegmentMetadata
 */
export interface SegmentMetadata {
    /**
     * 
     * @type {string}
     * @memberof SegmentMetadata
     */
    envId?: string;
    /**
     * 
     * @type {string}
     * @memberof SegmentMetadata
     */
    segmentId?: string;
    /**
     * 
     * @type {number}
     * @memberof SegmentMetadata
     */
    version?: number;
    /**
     * 
     * @type {number}
     * @memberof SegmentMetadata
     */
    includedCount?: number;
    /**
     * 
     * @type {number}
     * @memberof SegmentMetadata
     */
    excludedCount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SegmentMetadata
     */
    deleted?: boolean;
}
/**
 * 
 * @export
 * @interface SegmentUserList
 */
export interface SegmentUserList {
    /**
     * 
     * @type {Array<string>}
     * @memberof SegmentUserList
     */
    add?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof SegmentUserList
     */
    remove?: Array<string>;
}
/**
 * 
 * @export
 * @interface SegmentUserState
 */
export interface SegmentUserState {
    /**
     * 
     * @type {SegmentUserList}
     * @memberof SegmentUserState
     */
    included?: SegmentUserList;
    /**
     * 
     * @type {SegmentUserList}
     * @memberof SegmentUserState
     */
    excluded?: SegmentUserList;
}
/**
 * 
 * @export
 * @interface SeriesListRep
 */
export interface SeriesListRep {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof SeriesListRep
     */
    _links: { [key: string]: any; };
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof SeriesListRep
     */
    metadata: Array<{ [key: string]: any; }>;
    /**
     * 
     * @type {Array<{ [key: string]: number; }>}
     * @memberof SeriesListRep
     */
    series: Array<{ [key: string]: number; }>;
}
/**
 * 
 * @export
 * @interface SourceFlag
 */
export interface SourceFlag {
    /**
     * Flag key to copy
     * @type {string}
     * @memberof SourceFlag
     */
    key: string;
    /**
     * 
     * @type {number}
     * @memberof SourceFlag
     */
    version?: number;
}
/**
 * 
 * @export
 * @interface Statement
 */
export interface Statement {
    /**
     * 
     * @type {Array<object>}
     * @memberof Statement
     */
    resources?: Array<object>;
    /**
     * 
     * @type {Array<object>}
     * @memberof Statement
     */
    notResources?: Array<object>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Statement
     */
    actions?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Statement
     */
    notActions?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Statement
     */
    effect: string;
}
/**
 * 
 * @export
 * @interface StatementPost
 */
export interface StatementPost {
    /**
     * Resource specifier strings
     * @type {Array<string>}
     * @memberof StatementPost
     */
    resources?: Array<string>;
    /**
     * Targeted resources are the resources NOT in this list. The \"resources\" field must be empty to use this field.
     * @type {Array<string>}
     * @memberof StatementPost
     */
    notResources?: Array<string>;
    /**
     * Actions to perform on a resource
     * @type {Array<string>}
     * @memberof StatementPost
     */
    actions?: Array<string>;
    /**
     * Targeted actions are the actions NOT in this list. The \"actions\" field must be empty to use this field.
     * @type {Array<string>}
     * @memberof StatementPost
     */
    notActions?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof StatementPost
     */
    effect: string;
}
/**
 * 
 * @export
 * @interface StatementPostData
 */
export interface StatementPostData {
    /**
     * Resource specifier strings
     * @type {Array<string>}
     * @memberof StatementPostData
     */
    resources?: Array<string>;
    /**
     * Targeted resources are the resources NOT in this list. The \"resources\" field must be empty to use this field.
     * @type {Array<string>}
     * @memberof StatementPostData
     */
    notResources?: Array<string>;
    /**
     * Actions to perform on a resource
     * @type {Array<string>}
     * @memberof StatementPostData
     */
    actions?: Array<string>;
    /**
     * Targeted actions are the actions NOT in this list. The \"actions\" field must be empty to use this field.
     * @type {Array<string>}
     * @memberof StatementPostData
     */
    notActions?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof StatementPostData
     */
    effect: string;
}
/**
 * 
 * @export
 * @interface StatementRep
 */
export interface StatementRep {
    /**
     * Resource specifier strings
     * @type {Array<object>}
     * @memberof StatementRep
     */
    resources?: Array<object>;
    /**
     * Targeted resources are the resources NOT in this list. The \"resources\" field must be empty to use this field.
     * @type {Array<object>}
     * @memberof StatementRep
     */
    notResources?: Array<object>;
    /**
     * Actions to perform on a resource
     * @type {Array<string>}
     * @memberof StatementRep
     */
    actions?: Array<string>;
    /**
     * Targeted actions are the actions NOT in this list. The \"actions\" field must be empty to use this field.
     * @type {Array<string>}
     * @memberof StatementRep
     */
    notActions?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof StatementRep
     */
    effect?: string;
}
/**
 * 
 * @export
 * @interface StatisticCollectionRep
 */
export interface StatisticCollectionRep {
    /**
     * 
     * @type {{ [key: string]: Array<StatisticRep>; }}
     * @memberof StatisticCollectionRep
     */
    flags: { [key: string]: Array<StatisticRep>; };
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof StatisticCollectionRep
     */
    _links: { [key: string]: Link; };
}
/**
 * 
 * @export
 * @interface StatisticRep
 */
export interface StatisticRep {
    /**
     * 
     * @type {string}
     * @memberof StatisticRep
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StatisticRep
     */
    sourceLink: string;
    /**
     * 
     * @type {string}
     * @memberof StatisticRep
     */
    defaultBranch: string;
    /**
     * 
     * @type {boolean}
     * @memberof StatisticRep
     */
    enabled: boolean;
    /**
     * 
     * @type {number}
     * @memberof StatisticRep
     */
    version: number;
    /**
     * 
     * @type {number}
     * @memberof StatisticRep
     */
    hunkCount: number;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof StatisticRep
     */
    _links: { [key: string]: Link; };
}
/**
 * 
 * @export
 * @interface StatisticsRoot
 */
export interface StatisticsRoot {
    /**
     * 
     * @type {Array<Link>}
     * @memberof StatisticsRoot
     */
    projects?: Array<Link>;
    /**
     * 
     * @type {Link}
     * @memberof StatisticsRoot
     */
    self?: Link;
}
/**
 * 
 * @export
 * @interface SubjectDataRep
 */
export interface SubjectDataRep {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof SubjectDataRep
     */
    _links?: { [key: string]: Link; };
    /**
     * 
     * @type {string}
     * @memberof SubjectDataRep
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SubjectDataRep
     */
    avatarUrl?: string;
}
/**
 * 
 * @export
 * @interface Target
 */
export interface Target {
    /**
     * 
     * @type {Array<string>}
     * @memberof Target
     */
    values: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof Target
     */
    variation: number;
}
/**
 * 
 * @export
 * @interface TargetResourceRep
 */
export interface TargetResourceRep {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof TargetResourceRep
     */
    _links?: { [key: string]: Link; };
    /**
     * 
     * @type {string}
     * @memberof TargetResourceRep
     */
    name?: string;
    /**
     * 
     * @type {Array<any>}
     * @memberof TargetResourceRep
     */
    resources?: Array<any>;
}
/**
 * 
 * @export
 * @interface TitleRep
 */
export interface TitleRep {
    /**
     * 
     * @type {SubjectDataRep}
     * @memberof TitleRep
     */
    subject?: SubjectDataRep;
    /**
     * 
     * @type {MemberDataRep}
     * @memberof TitleRep
     */
    member?: MemberDataRep;
    /**
     * 
     * @type {TokenDataRep}
     * @memberof TitleRep
     */
    token?: TokenDataRep;
    /**
     * 
     * @type {AuthorizedAppDataRep}
     * @memberof TitleRep
     */
    app?: AuthorizedAppDataRep;
    /**
     * 
     * @type {string}
     * @memberof TitleRep
     */
    titleVerb?: string;
    /**
     * 
     * @type {string}
     * @memberof TitleRep
     */
    title?: string;
    /**
     * 
     * @type {TargetResourceRep}
     * @memberof TitleRep
     */
    target?: TargetResourceRep;
    /**
     * 
     * @type {ParentResourceRep}
     * @memberof TitleRep
     */
    parent?: ParentResourceRep;
}
/**
 * 
 * @export
 * @interface Token
 */
export interface Token {
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    _id: string;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    ownerId: string;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    memberId: string;
    /**
     * 
     * @type {MemberSummaryRep}
     * @memberof Token
     */
    _member?: MemberSummaryRep;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof Token
     */
    creationDate: number;
    /**
     * 
     * @type {number}
     * @memberof Token
     */
    lastModified: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof Token
     */
    customRoleIds?: Array<string>;
    /**
     * 
     * @type {Array<StatementRep>}
     * @memberof Token
     */
    inlineRole?: Array<StatementRep>;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    role?: string;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    token?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Token
     */
    serviceToken?: boolean;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof Token
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {number}
     * @memberof Token
     */
    defaultApiVersion?: number;
    /**
     * 
     * @type {number}
     * @memberof Token
     */
    lastUsed?: number;
}
/**
 * 
 * @export
 * @interface TokenDataRep
 */
export interface TokenDataRep {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof TokenDataRep
     */
    _links?: { [key: string]: Link; };
    /**
     * 
     * @type {string}
     * @memberof TokenDataRep
     */
    _id?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenDataRep
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenDataRep
     */
    ending?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TokenDataRep
     */
    serviceToken?: boolean;
}
/**
 * 
 * @export
 * @interface Tokens
 */
export interface Tokens {
    /**
     * 
     * @type {Array<Token>}
     * @memberof Tokens
     */
    items?: Array<Token>;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof Tokens
     */
    _links?: { [key: string]: Link; };
}
/**
 * 
 * @export
 * @interface UrlPost
 */
export interface UrlPost {
    /**
     * 
     * @type {string}
     * @memberof UrlPost
     */
    kind?: UrlPostKindEnum;
    /**
     * 
     * @type {string}
     * @memberof UrlPost
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof UrlPost
     */
    substring?: string;
    /**
     * 
     * @type {string}
     * @memberof UrlPost
     */
    pattern?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum UrlPostKindEnum {
    Exact = 'exact',
    Canonical = 'canonical',
    Substring = 'substring',
    Regex = 'regex'
}

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    lastPing?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    environmentId?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    ownerId?: string;
    /**
     * 
     * @type {User}
     * @memberof User
     */
    user?: User;
    /**
     * 
     * @type {any}
     * @memberof User
     */
    sortValue?: any | null;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof User
     */
    _links?: { [key: string]: Link; };
    /**
     * 
     * @type {AccessRep}
     * @memberof User
     */
    _access?: AccessRep;
}
/**
 * 
 * @export
 * @interface UserAttributeNamesRep
 */
export interface UserAttributeNamesRep {
    /**
     * private attributes
     * @type {Array<string>}
     * @memberof UserAttributeNamesRep
     */
    _private?: Array<string>;
    /**
     * custom attributes
     * @type {Array<string>}
     * @memberof UserAttributeNamesRep
     */
    custom?: Array<string>;
    /**
     * standard attributes
     * @type {Array<string>}
     * @memberof UserAttributeNamesRep
     */
    standard?: Array<string>;
}
/**
 * 
 * @export
 * @interface UserFlagSetting
 */
export interface UserFlagSetting {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof UserFlagSetting
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {any}
     * @memberof UserFlagSetting
     */
    _value: any | null;
    /**
     * 
     * @type {any}
     * @memberof UserFlagSetting
     */
    setting: any | null;
}
/**
 * 
 * @export
 * @interface UserFlagSettings
 */
export interface UserFlagSettings {
    /**
     * 
     * @type {{ [key: string]: UserFlagSetting; }}
     * @memberof UserFlagSettings
     */
    items: { [key: string]: UserFlagSetting; };
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof UserFlagSettings
     */
    _links: { [key: string]: Link; };
}
/**
 * 
 * @export
 * @interface UserRecord
 */
export interface UserRecord {
    /**
     * 
     * @type {string}
     * @memberof UserRecord
     */
    lastPing?: string;
    /**
     * 
     * @type {string}
     * @memberof UserRecord
     */
    environmentId?: string;
    /**
     * 
     * @type {string}
     * @memberof UserRecord
     */
    ownerId?: string;
    /**
     * 
     * @type {User}
     * @memberof UserRecord
     */
    user?: User;
    /**
     * 
     * @type {any}
     * @memberof UserRecord
     */
    sortValue?: any | null;
}
/**
 * 
 * @export
 * @interface UserSegment
 */
export interface UserSegment {
    /**
     * A human-friendly name for the segment
     * @type {string}
     * @memberof UserSegment
     */
    name: string;
    /**
     * A description of the segment\'s purpose
     * @type {string}
     * @memberof UserSegment
     */
    description?: string;
    /**
     * Tags for the segment
     * @type {Array<string>}
     * @memberof UserSegment
     */
    tags: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof UserSegment
     */
    creationDate: number;
    /**
     * A unique key used to reference the segment
     * @type {string}
     * @memberof UserSegment
     */
    key: string;
    /**
     * Included users are always segment members, regardless of segment rules. For Big Segments this array is either empty or omitted entirely.
     * @type {Array<string>}
     * @memberof UserSegment
     */
    included?: Array<string>;
    /**
     * Segment rules bypass excluded users, so they will never be included based on rules. Excluded users may still be included explicitly. This value is omitted for Big Segments.
     * @type {Array<string>}
     * @memberof UserSegment
     */
    excluded?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof UserSegment
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {Array<UserSegmentRule>}
     * @memberof UserSegment
     */
    rules: Array<UserSegmentRule>;
    /**
     * 
     * @type {number}
     * @memberof UserSegment
     */
    version: number;
    /**
     * 
     * @type {boolean}
     * @memberof UserSegment
     */
    deleted: boolean;
    /**
     * 
     * @type {AccessRep}
     * @memberof UserSegment
     */
    _access?: AccessRep;
    /**
     * 
     * @type {Array<FlagListingRep>}
     * @memberof UserSegment
     */
    _flags?: Array<FlagListingRep>;
    /**
     * 
     * @type {boolean}
     * @memberof UserSegment
     */
    unbounded?: boolean;
    /**
     * 
     * @type {number}
     * @memberof UserSegment
     */
    generation: number;
    /**
     * 
     * @type {SegmentMetadata}
     * @memberof UserSegment
     */
    _unboundedMetadata?: SegmentMetadata;
    /**
     * 
     * @type {string}
     * @memberof UserSegment
     */
    _external?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSegment
     */
    _externalLink?: string;
}
/**
 * 
 * @export
 * @interface UserSegmentRule
 */
export interface UserSegmentRule {
    /**
     * 
     * @type {string}
     * @memberof UserSegmentRule
     */
    _id?: string;
    /**
     * 
     * @type {Array<Clause>}
     * @memberof UserSegmentRule
     */
    clauses: Array<Clause>;
    /**
     * 
     * @type {number}
     * @memberof UserSegmentRule
     */
    weight?: number;
    /**
     * 
     * @type {string}
     * @memberof UserSegmentRule
     */
    bucketBy?: string;
}
/**
 * 
 * @export
 * @interface UserSegments
 */
export interface UserSegments {
    /**
     * 
     * @type {Array<UserSegment>}
     * @memberof UserSegments
     */
    items: Array<UserSegment>;
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof UserSegments
     */
    _links: { [key: string]: Link; };
}
/**
 * 
 * @export
 * @interface Users
 */
export interface Users {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof Users
     */
    _links?: { [key: string]: Link; };
    /**
     * 
     * @type {number}
     * @memberof Users
     */
    totalCount: number;
    /**
     * 
     * @type {Array<User>}
     * @memberof Users
     */
    items: Array<User>;
}
/**
 * 
 * @export
 * @interface ValuePut
 */
export interface ValuePut {
    /**
     * The variation value to set for the user
     * @type {any}
     * @memberof ValuePut
     */
    setting?: any | null;
    /**
     * 
     * @type {string}
     * @memberof ValuePut
     */
    comment?: string;
}
/**
 * 
 * @export
 * @interface Variate
 */
export interface Variate {
    /**
     * 
     * @type {string}
     * @memberof Variate
     */
    id?: string;
    /**
     * 
     * @type {any}
     * @memberof Variate
     */
    value: any | null;
    /**
     * 
     * @type {string}
     * @memberof Variate
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Variate
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface Variation
 */
export interface Variation {
    /**
     * 
     * @type {string}
     * @memberof Variation
     */
    _id?: string;
    /**
     * 
     * @type {any}
     * @memberof Variation
     */
    value: any | null;
    /**
     * Description of the variation
     * @type {string}
     * @memberof Variation
     */
    description?: string;
    /**
     * A human-friendly name for the variation
     * @type {string}
     * @memberof Variation
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface VariationOrRolloutRep
 */
export interface VariationOrRolloutRep {
    /**
     * 
     * @type {number}
     * @memberof VariationOrRolloutRep
     */
    variation?: number;
    /**
     * 
     * @type {Rollout}
     * @memberof VariationOrRolloutRep
     */
    rollout?: Rollout;
}
/**
 * 
 * @export
 * @interface VariationSummary
 */
export interface VariationSummary {
    /**
     * 
     * @type {number}
     * @memberof VariationSummary
     */
    rules: number;
    /**
     * 
     * @type {number}
     * @memberof VariationSummary
     */
    nullRules: number;
    /**
     * 
     * @type {number}
     * @memberof VariationSummary
     */
    targets: number;
    /**
     * 
     * @type {boolean}
     * @memberof VariationSummary
     */
    isFallthrough?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof VariationSummary
     */
    isOff?: boolean;
    /**
     * 
     * @type {number}
     * @memberof VariationSummary
     */
    rollout?: number;
    /**
     * 
     * @type {string}
     * @memberof VariationSummary
     */
    bucketBy?: string;
}
/**
 * 
 * @export
 * @interface VersionsRep
 */
export interface VersionsRep {
    /**
     * 
     * @type {Array<number>}
     * @memberof VersionsRep
     */
    validVersions: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof VersionsRep
     */
    latestVersion: number;
    /**
     * 
     * @type {number}
     * @memberof VersionsRep
     */
    currentVersion: number;
    /**
     * 
     * @type {boolean}
     * @memberof VersionsRep
     */
    beta?: boolean;
}
/**
 * 
 * @export
 * @interface Webhook
 */
export interface Webhook {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof Webhook
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {string}
     * @memberof Webhook
     */
    _id: string;
    /**
     * 
     * @type {string}
     * @memberof Webhook
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Webhook
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof Webhook
     */
    secret?: string;
    /**
     * 
     * @type {Array<StatementRep>}
     * @memberof Webhook
     */
    statements?: Array<StatementRep>;
    /**
     * 
     * @type {boolean}
     * @memberof Webhook
     */
    on: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof Webhook
     */
    tags: Array<string>;
    /**
     * 
     * @type {AccessRep}
     * @memberof Webhook
     */
    _access?: AccessRep;
}
/**
 * 
 * @export
 * @interface WebhookPost
 */
export interface WebhookPost {
    /**
     * A human-readable name for your webhook
     * @type {string}
     * @memberof WebhookPost
     */
    name?: string;
    /**
     * The URL of the remote webhook
     * @type {string}
     * @memberof WebhookPost
     */
    url: string;
    /**
     * If sign is true, and the secret attribute is omitted, LaunchDarkly automatically generates a secret for you.
     * @type {string}
     * @memberof WebhookPost
     */
    secret?: string;
    /**
     * 
     * @type {Array<StatementPost>}
     * @memberof WebhookPost
     */
    statements?: Array<StatementPost>;
    /**
     * If sign is false, the webhook does not include a signature header, and the secret can be omitted.
     * @type {boolean}
     * @memberof WebhookPost
     */
    sign: boolean;
    /**
     * Whether or not this webhook is enabled.
     * @type {boolean}
     * @memberof WebhookPost
     */
    on: boolean;
    /**
     * List of tags for this webhook
     * @type {Array<string>}
     * @memberof WebhookPost
     */
    tags?: Array<string>;
}
/**
 * 
 * @export
 * @interface Webhooks
 */
export interface Webhooks {
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof Webhooks
     */
    _links: { [key: string]: Link; };
    /**
     * 
     * @type {Array<Webhook>}
     * @memberof Webhooks
     */
    items: Array<Webhook>;
}
/**
 * 
 * @export
 * @interface WeightedVariation
 */
export interface WeightedVariation {
    /**
     * 
     * @type {number}
     * @memberof WeightedVariation
     */
    variation: number;
    /**
     * 
     * @type {number}
     * @memberof WeightedVariation
     */
    weight: number;
    /**
     * 
     * @type {boolean}
     * @memberof WeightedVariation
     */
    _untracked?: boolean;
}

/**
 * AccessTokensApi - axios parameter creator
 * @export
 */
export const AccessTokensApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete an access token by ID.
         * @summary Delete access token
         * @param {string} id The ID of the access token to update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteToken: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteToken', 'id', id)
            const localVarPath = `/api/v2/tokens/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a single access token by ID.
         * @summary Get access token
         * @param {string} id The ID of the access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getToken: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getToken', 'id', id)
            const localVarPath = `/api/v2/tokens/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetch a list of all access tokens.
         * @summary List access tokens
         * @param {boolean} [showAll] If set to true, and the authentication access token has the \&#39;Admin\&#39; role, personal access tokens for all members will be retrieved.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTokens: async (showAll?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/tokens`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (showAll !== undefined) {
                localVarQueryParameter['showAll'] = showAll;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update an access token\'s settings. The request should be a valid JSON Patch document describing the changes to be made to the access token.
         * @summary Patch access token
         * @param {string} id The ID of the access token to update
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchToken: async (id: string, patchOperation: Array<PatchOperation>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('patchToken', 'id', id)
            // verify required parameter 'patchOperation' is not null or undefined
            assertParamExists('patchToken', 'patchOperation', patchOperation)
            const localVarPath = `/api/v2/tokens/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchOperation, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new access token.
         * @summary Create access token
         * @param {AccessTokenPost} accessTokenPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postToken: async (accessTokenPost: AccessTokenPost, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'accessTokenPost' is not null or undefined
            assertParamExists('postToken', 'accessTokenPost', accessTokenPost)
            const localVarPath = `/api/v2/tokens`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(accessTokenPost, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Reset an access token\'s secret key with an optional expiry time for the old key.
         * @summary Reset access token
         * @param {string} id The ID of the access token to update
         * @param {number} [expiry] An expiration time for the old token key, expressed as a Unix epoch time in milliseconds. By default, the token will expire immediately.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetToken: async (id: string, expiry?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('resetToken', 'id', id)
            const localVarPath = `/api/v2/tokens/{id}/reset`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (expiry !== undefined) {
                localVarQueryParameter['expiry'] = expiry;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AccessTokensApi - functional programming interface
 * @export
 */
export const AccessTokensApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AccessTokensApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete an access token by ID.
         * @summary Delete access token
         * @param {string} id The ID of the access token to update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteToken(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteToken(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a single access token by ID.
         * @summary Get access token
         * @param {string} id The ID of the access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getToken(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Token>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getToken(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Fetch a list of all access tokens.
         * @summary List access tokens
         * @param {boolean} [showAll] If set to true, and the authentication access token has the \&#39;Admin\&#39; role, personal access tokens for all members will be retrieved.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTokens(showAll?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Tokens>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTokens(showAll, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update an access token\'s settings. The request should be a valid JSON Patch document describing the changes to be made to the access token.
         * @summary Patch access token
         * @param {string} id The ID of the access token to update
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchToken(id: string, patchOperation: Array<PatchOperation>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Token>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchToken(id, patchOperation, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a new access token.
         * @summary Create access token
         * @param {AccessTokenPost} accessTokenPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postToken(accessTokenPost: AccessTokenPost, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Token>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postToken(accessTokenPost, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Reset an access token\'s secret key with an optional expiry time for the old key.
         * @summary Reset access token
         * @param {string} id The ID of the access token to update
         * @param {number} [expiry] An expiration time for the old token key, expressed as a Unix epoch time in milliseconds. By default, the token will expire immediately.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resetToken(id: string, expiry?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Token>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetToken(id, expiry, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AccessTokensApi - factory interface
 * @export
 */
export const AccessTokensApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AccessTokensApiFp(configuration)
    return {
        /**
         * Delete an access token by ID.
         * @summary Delete access token
         * @param {string} id The ID of the access token to update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteToken(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteToken(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a single access token by ID.
         * @summary Get access token
         * @param {string} id The ID of the access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getToken(id: string, options?: any): AxiosPromise<Token> {
            return localVarFp.getToken(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch a list of all access tokens.
         * @summary List access tokens
         * @param {boolean} [showAll] If set to true, and the authentication access token has the \&#39;Admin\&#39; role, personal access tokens for all members will be retrieved.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTokens(showAll?: boolean, options?: any): AxiosPromise<Tokens> {
            return localVarFp.getTokens(showAll, options).then((request) => request(axios, basePath));
        },
        /**
         * Update an access token\'s settings. The request should be a valid JSON Patch document describing the changes to be made to the access token.
         * @summary Patch access token
         * @param {string} id The ID of the access token to update
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchToken(id: string, patchOperation: Array<PatchOperation>, options?: any): AxiosPromise<Token> {
            return localVarFp.patchToken(id, patchOperation, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new access token.
         * @summary Create access token
         * @param {AccessTokenPost} accessTokenPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postToken(accessTokenPost: AccessTokenPost, options?: any): AxiosPromise<Token> {
            return localVarFp.postToken(accessTokenPost, options).then((request) => request(axios, basePath));
        },
        /**
         * Reset an access token\'s secret key with an optional expiry time for the old key.
         * @summary Reset access token
         * @param {string} id The ID of the access token to update
         * @param {number} [expiry] An expiration time for the old token key, expressed as a Unix epoch time in milliseconds. By default, the token will expire immediately.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetToken(id: string, expiry?: number, options?: any): AxiosPromise<Token> {
            return localVarFp.resetToken(id, expiry, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AccessTokensApi - object-oriented interface
 * @export
 * @class AccessTokensApi
 * @extends {BaseAPI}
 */
export class AccessTokensApi extends BaseAPI {
    /**
     * Delete an access token by ID.
     * @summary Delete access token
     * @param {string} id The ID of the access token to update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessTokensApi
     */
    public deleteToken(id: string, options?: any) {
        return AccessTokensApiFp(this.configuration).deleteToken(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a single access token by ID.
     * @summary Get access token
     * @param {string} id The ID of the access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessTokensApi
     */
    public getToken(id: string, options?: any) {
        return AccessTokensApiFp(this.configuration).getToken(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch a list of all access tokens.
     * @summary List access tokens
     * @param {boolean} [showAll] If set to true, and the authentication access token has the \&#39;Admin\&#39; role, personal access tokens for all members will be retrieved.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessTokensApi
     */
    public getTokens(showAll?: boolean, options?: any) {
        return AccessTokensApiFp(this.configuration).getTokens(showAll, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update an access token\'s settings. The request should be a valid JSON Patch document describing the changes to be made to the access token.
     * @summary Patch access token
     * @param {string} id The ID of the access token to update
     * @param {Array<PatchOperation>} patchOperation 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessTokensApi
     */
    public patchToken(id: string, patchOperation: Array<PatchOperation>, options?: any) {
        return AccessTokensApiFp(this.configuration).patchToken(id, patchOperation, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new access token.
     * @summary Create access token
     * @param {AccessTokenPost} accessTokenPost 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessTokensApi
     */
    public postToken(accessTokenPost: AccessTokenPost, options?: any) {
        return AccessTokensApiFp(this.configuration).postToken(accessTokenPost, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reset an access token\'s secret key with an optional expiry time for the old key.
     * @summary Reset access token
     * @param {string} id The ID of the access token to update
     * @param {number} [expiry] An expiration time for the old token key, expressed as a Unix epoch time in milliseconds. By default, the token will expire immediately.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessTokensApi
     */
    public resetToken(id: string, expiry?: number, options?: any) {
        return AccessTokensApiFp(this.configuration).resetToken(id, expiry, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * AccountMembersApi - axios parameter creator
 * @export
 */
export const AccountMembersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a single account member by ID
         * @summary Delete account member
         * @param {string} id The member ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMember: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteMember', 'id', id)
            const localVarPath = `/api/v2/members/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a single account member by ID
         * @summary Get account member
         * @param {string} id The member ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMember: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getMember', 'id', id)
            const localVarPath = `/api/v2/members/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Return a list of account members.  By default, this returns the first 20 members. Page through this list with the `limit` parameter and by following the `first`, `prev`, `next`, and `last` links in the returned `_links` field. These links are not present if the pages they refer to don\'t exist. For example, the `first` and `prev` links will be missing from the response on the first page.  ### Filtering members  LaunchDarkly supports three fields for filters: `query`, `role`, and `lastSeen`:  - `query` is a string that matches against the members\' emails and names. It is not case sensitive. - `role` is a `|` separated list of roles and custom roles. It filters the list to members who have any of the roles in the list. For the purposes of this filtering, `Owner` counts as `Admin`. - `lastSeen` is a JSON object in one of the following formats:   - `{\"never\": true}` - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.   - `{\"noData\": true}` - Members that have not been active since LaunchDarkly began recording last seen timestamps.   - `{\"before\": 1608672063611}` - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds.  For example, the filter `query:abc,role:admin|customrole` matches members with the string `abc` in their email or name, ignoring case, who also are either an an `Owner` or `Admin` or have the custom role `customrole`.  ### Sorting members  LaunchDarkly supports two fields for sorting: `displayName` and `lastSeen`:  - `displayName` sorts by first + last name, using the member\'s email if no name is set. - `lastSeen` sorts by the `_lastSeen` property. LaunchDarkly considers members that have never been seen or have no data the oldest. 
         * @summary List account members
         * @param {number} [limit] The number of members to return in the response. Defaults to 20.
         * @param {number} [offset] Where to start in the list. This is for use with pagination. For example, an offset of 10 would skip the first ten items and then return the next &#x60;limit&#x60; items.
         * @param {string} [filter] A comma-separated list of filters. Each filter is of the form &#x60;field:value&#x60;. Supported fields are explained below.
         * @param {string} [sort] A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMembers: async (limit?: number, offset?: number, filter?: string, sort?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/members`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a single account member. The request should be a valid JSON Patch document describing the changes to be made to the member.
         * @summary Modify an account member
         * @param {string} id The member ID
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchMember: async (id: string, patchOperation: Array<PatchOperation>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('patchMember', 'id', id)
            // verify required parameter 'patchOperation' is not null or undefined
            assertParamExists('patchMember', 'patchOperation', patchOperation)
            const localVarPath = `/api/v2/members/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchOperation, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * > ### Full use of this API resource is only available to accounts with paid subscriptions > > The ability to bulk invite members is a paid feature. Single members may be invited if not on a paid plan.  Invite one or more new members to join an account. Each member is sent an invitation. Members with \"admin\" or \"owner\" roles may create new members, as well as anyone with a \"createMember\" permission for \"member/\\*\". If a member cannot be invited, the entire request is rejected and no members are invited from that request.  Each member _must_ have an `email` field and either a `role` or a `customRoles` field. If any of the fields are not populated correctly, the request is rejected with the reason specified in the \"message\" field of the response.  _No more than 50 members may be created per request._  A request may also fail because of conflicts with existing members. These conflicts are reported using the additional `code` and `invalid_emails` response fields with the following possible values for `code`:  - **email_already_exists_in_account**: A member with this email address already exists in this account. - **email_taken_in_different_account**: A member with this email address exists in another account. - **duplicate_email**s: This request contains two or more members with the same email address.  A request that fails for one of the above reasons returns an HTTP response code of 400 (Bad Request). 
         * @summary Invite new members
         * @param {Array<InlineObject1>} inlineObject1 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postMembers: async (inlineObject1: Array<InlineObject1>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'inlineObject1' is not null or undefined
            assertParamExists('postMembers', 'inlineObject1', inlineObject1)
            const localVarPath = `/api/v2/members`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject1, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AccountMembersApi - functional programming interface
 * @export
 */
export const AccountMembersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AccountMembersApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete a single account member by ID
         * @summary Delete account member
         * @param {string} id The member ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteMember(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteMember(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a single account member by ID
         * @summary Get account member
         * @param {string} id The member ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMember(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Member>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMember(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Return a list of account members.  By default, this returns the first 20 members. Page through this list with the `limit` parameter and by following the `first`, `prev`, `next`, and `last` links in the returned `_links` field. These links are not present if the pages they refer to don\'t exist. For example, the `first` and `prev` links will be missing from the response on the first page.  ### Filtering members  LaunchDarkly supports three fields for filters: `query`, `role`, and `lastSeen`:  - `query` is a string that matches against the members\' emails and names. It is not case sensitive. - `role` is a `|` separated list of roles and custom roles. It filters the list to members who have any of the roles in the list. For the purposes of this filtering, `Owner` counts as `Admin`. - `lastSeen` is a JSON object in one of the following formats:   - `{\"never\": true}` - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.   - `{\"noData\": true}` - Members that have not been active since LaunchDarkly began recording last seen timestamps.   - `{\"before\": 1608672063611}` - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds.  For example, the filter `query:abc,role:admin|customrole` matches members with the string `abc` in their email or name, ignoring case, who also are either an an `Owner` or `Admin` or have the custom role `customrole`.  ### Sorting members  LaunchDarkly supports two fields for sorting: `displayName` and `lastSeen`:  - `displayName` sorts by first + last name, using the member\'s email if no name is set. - `lastSeen` sorts by the `_lastSeen` property. LaunchDarkly considers members that have never been seen or have no data the oldest. 
         * @summary List account members
         * @param {number} [limit] The number of members to return in the response. Defaults to 20.
         * @param {number} [offset] Where to start in the list. This is for use with pagination. For example, an offset of 10 would skip the first ten items and then return the next &#x60;limit&#x60; items.
         * @param {string} [filter] A comma-separated list of filters. Each filter is of the form &#x60;field:value&#x60;. Supported fields are explained below.
         * @param {string} [sort] A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMembers(limit?: number, offset?: number, filter?: string, sort?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Members>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMembers(limit, offset, filter, sort, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a single account member. The request should be a valid JSON Patch document describing the changes to be made to the member.
         * @summary Modify an account member
         * @param {string} id The member ID
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchMember(id: string, patchOperation: Array<PatchOperation>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Member>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchMember(id, patchOperation, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * > ### Full use of this API resource is only available to accounts with paid subscriptions > > The ability to bulk invite members is a paid feature. Single members may be invited if not on a paid plan.  Invite one or more new members to join an account. Each member is sent an invitation. Members with \"admin\" or \"owner\" roles may create new members, as well as anyone with a \"createMember\" permission for \"member/\\*\". If a member cannot be invited, the entire request is rejected and no members are invited from that request.  Each member _must_ have an `email` field and either a `role` or a `customRoles` field. If any of the fields are not populated correctly, the request is rejected with the reason specified in the \"message\" field of the response.  _No more than 50 members may be created per request._  A request may also fail because of conflicts with existing members. These conflicts are reported using the additional `code` and `invalid_emails` response fields with the following possible values for `code`:  - **email_already_exists_in_account**: A member with this email address already exists in this account. - **email_taken_in_different_account**: A member with this email address exists in another account. - **duplicate_email**s: This request contains two or more members with the same email address.  A request that fails for one of the above reasons returns an HTTP response code of 400 (Bad Request). 
         * @summary Invite new members
         * @param {Array<InlineObject1>} inlineObject1 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postMembers(inlineObject1: Array<InlineObject1>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Members>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postMembers(inlineObject1, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AccountMembersApi - factory interface
 * @export
 */
export const AccountMembersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AccountMembersApiFp(configuration)
    return {
        /**
         * Delete a single account member by ID
         * @summary Delete account member
         * @param {string} id The member ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMember(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteMember(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a single account member by ID
         * @summary Get account member
         * @param {string} id The member ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMember(id: string, options?: any): AxiosPromise<Member> {
            return localVarFp.getMember(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Return a list of account members.  By default, this returns the first 20 members. Page through this list with the `limit` parameter and by following the `first`, `prev`, `next`, and `last` links in the returned `_links` field. These links are not present if the pages they refer to don\'t exist. For example, the `first` and `prev` links will be missing from the response on the first page.  ### Filtering members  LaunchDarkly supports three fields for filters: `query`, `role`, and `lastSeen`:  - `query` is a string that matches against the members\' emails and names. It is not case sensitive. - `role` is a `|` separated list of roles and custom roles. It filters the list to members who have any of the roles in the list. For the purposes of this filtering, `Owner` counts as `Admin`. - `lastSeen` is a JSON object in one of the following formats:   - `{\"never\": true}` - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.   - `{\"noData\": true}` - Members that have not been active since LaunchDarkly began recording last seen timestamps.   - `{\"before\": 1608672063611}` - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds.  For example, the filter `query:abc,role:admin|customrole` matches members with the string `abc` in their email or name, ignoring case, who also are either an an `Owner` or `Admin` or have the custom role `customrole`.  ### Sorting members  LaunchDarkly supports two fields for sorting: `displayName` and `lastSeen`:  - `displayName` sorts by first + last name, using the member\'s email if no name is set. - `lastSeen` sorts by the `_lastSeen` property. LaunchDarkly considers members that have never been seen or have no data the oldest. 
         * @summary List account members
         * @param {number} [limit] The number of members to return in the response. Defaults to 20.
         * @param {number} [offset] Where to start in the list. This is for use with pagination. For example, an offset of 10 would skip the first ten items and then return the next &#x60;limit&#x60; items.
         * @param {string} [filter] A comma-separated list of filters. Each filter is of the form &#x60;field:value&#x60;. Supported fields are explained below.
         * @param {string} [sort] A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMembers(limit?: number, offset?: number, filter?: string, sort?: string, options?: any): AxiosPromise<Members> {
            return localVarFp.getMembers(limit, offset, filter, sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a single account member. The request should be a valid JSON Patch document describing the changes to be made to the member.
         * @summary Modify an account member
         * @param {string} id The member ID
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchMember(id: string, patchOperation: Array<PatchOperation>, options?: any): AxiosPromise<Member> {
            return localVarFp.patchMember(id, patchOperation, options).then((request) => request(axios, basePath));
        },
        /**
         * > ### Full use of this API resource is only available to accounts with paid subscriptions > > The ability to bulk invite members is a paid feature. Single members may be invited if not on a paid plan.  Invite one or more new members to join an account. Each member is sent an invitation. Members with \"admin\" or \"owner\" roles may create new members, as well as anyone with a \"createMember\" permission for \"member/\\*\". If a member cannot be invited, the entire request is rejected and no members are invited from that request.  Each member _must_ have an `email` field and either a `role` or a `customRoles` field. If any of the fields are not populated correctly, the request is rejected with the reason specified in the \"message\" field of the response.  _No more than 50 members may be created per request._  A request may also fail because of conflicts with existing members. These conflicts are reported using the additional `code` and `invalid_emails` response fields with the following possible values for `code`:  - **email_already_exists_in_account**: A member with this email address already exists in this account. - **email_taken_in_different_account**: A member with this email address exists in another account. - **duplicate_email**s: This request contains two or more members with the same email address.  A request that fails for one of the above reasons returns an HTTP response code of 400 (Bad Request). 
         * @summary Invite new members
         * @param {Array<InlineObject1>} inlineObject1 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postMembers(inlineObject1: Array<InlineObject1>, options?: any): AxiosPromise<Members> {
            return localVarFp.postMembers(inlineObject1, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AccountMembersApi - object-oriented interface
 * @export
 * @class AccountMembersApi
 * @extends {BaseAPI}
 */
export class AccountMembersApi extends BaseAPI {
    /**
     * Delete a single account member by ID
     * @summary Delete account member
     * @param {string} id The member ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountMembersApi
     */
    public deleteMember(id: string, options?: any) {
        return AccountMembersApiFp(this.configuration).deleteMember(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a single account member by ID
     * @summary Get account member
     * @param {string} id The member ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountMembersApi
     */
    public getMember(id: string, options?: any) {
        return AccountMembersApiFp(this.configuration).getMember(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Return a list of account members.  By default, this returns the first 20 members. Page through this list with the `limit` parameter and by following the `first`, `prev`, `next`, and `last` links in the returned `_links` field. These links are not present if the pages they refer to don\'t exist. For example, the `first` and `prev` links will be missing from the response on the first page.  ### Filtering members  LaunchDarkly supports three fields for filters: `query`, `role`, and `lastSeen`:  - `query` is a string that matches against the members\' emails and names. It is not case sensitive. - `role` is a `|` separated list of roles and custom roles. It filters the list to members who have any of the roles in the list. For the purposes of this filtering, `Owner` counts as `Admin`. - `lastSeen` is a JSON object in one of the following formats:   - `{\"never\": true}` - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.   - `{\"noData\": true}` - Members that have not been active since LaunchDarkly began recording last seen timestamps.   - `{\"before\": 1608672063611}` - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds.  For example, the filter `query:abc,role:admin|customrole` matches members with the string `abc` in their email or name, ignoring case, who also are either an an `Owner` or `Admin` or have the custom role `customrole`.  ### Sorting members  LaunchDarkly supports two fields for sorting: `displayName` and `lastSeen`:  - `displayName` sorts by first + last name, using the member\'s email if no name is set. - `lastSeen` sorts by the `_lastSeen` property. LaunchDarkly considers members that have never been seen or have no data the oldest. 
     * @summary List account members
     * @param {number} [limit] The number of members to return in the response. Defaults to 20.
     * @param {number} [offset] Where to start in the list. This is for use with pagination. For example, an offset of 10 would skip the first ten items and then return the next &#x60;limit&#x60; items.
     * @param {string} [filter] A comma-separated list of filters. Each filter is of the form &#x60;field:value&#x60;. Supported fields are explained below.
     * @param {string} [sort] A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountMembersApi
     */
    public getMembers(limit?: number, offset?: number, filter?: string, sort?: string, options?: any) {
        return AccountMembersApiFp(this.configuration).getMembers(limit, offset, filter, sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a single account member. The request should be a valid JSON Patch document describing the changes to be made to the member.
     * @summary Modify an account member
     * @param {string} id The member ID
     * @param {Array<PatchOperation>} patchOperation 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountMembersApi
     */
    public patchMember(id: string, patchOperation: Array<PatchOperation>, options?: any) {
        return AccountMembersApiFp(this.configuration).patchMember(id, patchOperation, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * > ### Full use of this API resource is only available to accounts with paid subscriptions > > The ability to bulk invite members is a paid feature. Single members may be invited if not on a paid plan.  Invite one or more new members to join an account. Each member is sent an invitation. Members with \"admin\" or \"owner\" roles may create new members, as well as anyone with a \"createMember\" permission for \"member/\\*\". If a member cannot be invited, the entire request is rejected and no members are invited from that request.  Each member _must_ have an `email` field and either a `role` or a `customRoles` field. If any of the fields are not populated correctly, the request is rejected with the reason specified in the \"message\" field of the response.  _No more than 50 members may be created per request._  A request may also fail because of conflicts with existing members. These conflicts are reported using the additional `code` and `invalid_emails` response fields with the following possible values for `code`:  - **email_already_exists_in_account**: A member with this email address already exists in this account. - **email_taken_in_different_account**: A member with this email address exists in another account. - **duplicate_email**s: This request contains two or more members with the same email address.  A request that fails for one of the above reasons returns an HTTP response code of 400 (Bad Request). 
     * @summary Invite new members
     * @param {Array<InlineObject1>} inlineObject1 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountMembersApi
     */
    public postMembers(inlineObject1: Array<InlineObject1>, options?: any) {
        return AccountMembersApiFp(this.configuration).postMembers(inlineObject1, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * AccountUsageBetaApi - axios parameter creator
 * @export
 */
export const AccountUsageBetaApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get time-series arrays of the number of times a flag is evaluated, broken down by the variation that resulted from that evaluation. The granularity of the data depends on the age of the data requested. If the requested range is within the past two hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.
         * @summary Get evaluations usage
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} flagKey The feature flag\&#39;s key.
         * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 30 days ago.
         * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
         * @param {string} [tz] The timezone to use for breaks between days when returning daily data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEvaluationsUsage: async (projKey: string, envKey: string, flagKey: string, from?: string, to?: string, tz?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('getEvaluationsUsage', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('getEvaluationsUsage', 'envKey', envKey)
            // verify required parameter 'flagKey' is not null or undefined
            assertParamExists('getEvaluationsUsage', 'flagKey', flagKey)
            const localVarPath = `/api/v2/usage/evaluations/{projKey}/{envKey}/{flagKey}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)))
                .replace(`{${"flagKey"}}`, encodeURIComponent(String(flagKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = to;
            }

            if (tz !== undefined) {
                localVarQueryParameter['tz'] = tz;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get time-series arrays of the number of times a flag is evaluated, broken down by the variation that resulted from that evaluation. The granularity of the data depends on the age of the data requested. If the requested range is within the past two hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.
         * @summary Get events usage
         * @param {string} type The type of event to retrieve. Must be either &#x60;received&#x60; or &#x60;published&#x60;.
         * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 24 hours ago.
         * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEventsUsage: async (type: string, from?: string, to?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'type' is not null or undefined
            assertParamExists('getEventsUsage', 'type', type)
            const localVarPath = `/api/v2/usage/events/{type}`
                .replace(`{${"type"}}`, encodeURIComponent(String(type)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = to;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of SDKs. These are all of the SDKs that have connected to LaunchDarkly by monthly active users (MAU) in the requested time period.
         * @summary Get MAU SDKs by type
         * @param {string} [from] The series of data returned starts from this timestamp. Defaults to seven days ago.
         * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
         * @param {string} [sdktype] The type of SDK with monthly active users (MAU) to list. Must be either &#x60;client&#x60; or &#x60;server&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMauSdksByType: async (from?: string, to?: string, sdktype?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/usage/mau/sdks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = to;
            }

            if (sdktype !== undefined) {
                localVarQueryParameter['sdktype'] = sdktype;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a time-series array of the number of monthly active users (MAU) seen by LaunchDarkly from your account. The granularity is always daily.
         * @summary Get MAU usage
         * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 30 days ago.
         * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
         * @param {string} [project] A project key to filter results to. Can be specified multiple times, one query parameter per project key, to view data for multiple projects.
         * @param {string} [environment] An environment key to filter results to. When using this parameter, exactly one project key must also be set. Can be specified multiple times as separate query parameters to view data for multiple environments within a single project.
         * @param {string} [sdktype] An SDK type to filter results to. Can be specified multiple times, one query parameter per SDK type. Valid values: client, server
         * @param {string} [sdk] An SDK name to filter results to. Can be specified multiple times, one query parameter per SDK.
         * @param {string} [anonymous] If specified, filters results to either anonymous or nonanonymous users.
         * @param {string} [groupby] If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions (for example, to group by both project and SDK). Valid values: project, environment, sdktype, sdk, anonymous
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMauUsage: async (from?: string, to?: string, project?: string, environment?: string, sdktype?: string, sdk?: string, anonymous?: string, groupby?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/usage/mau`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = to;
            }

            if (project !== undefined) {
                localVarQueryParameter['project'] = project;
            }

            if (environment !== undefined) {
                localVarQueryParameter['environment'] = environment;
            }

            if (sdktype !== undefined) {
                localVarQueryParameter['sdktype'] = sdktype;
            }

            if (sdk !== undefined) {
                localVarQueryParameter['sdk'] = sdk;
            }

            if (anonymous !== undefined) {
                localVarQueryParameter['anonymous'] = anonymous;
            }

            if (groupby !== undefined) {
                localVarQueryParameter['groupby'] = groupby;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get time-series arrays of the number of monthly active users (MAU) seen by LaunchDarkly from your account, broken down by the category of users. The category is either `browser`, `mobile`, or `backend`.
         * @summary Get MAU usage by category
         * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 30 days ago.
         * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMauUsageByCategory: async (from?: string, to?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/usage/mau/bycategory`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = to;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a time-series array of the number of streaming connections to LaunchDarkly in each time period. The granularity of the data depends on the age of the data requested. If the requested range is within the past two hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.
         * @summary Get stream usage
         * @param {string} source The source of streaming connections to describe. Must be either &#x60;client&#x60; or &#x60;server&#x60;.
         * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 30 days ago.
         * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
         * @param {string} [tz] The timezone to use for breaks between days when returning daily data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStreamUsage: async (source: string, from?: string, to?: string, tz?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'source' is not null or undefined
            assertParamExists('getStreamUsage', 'source', source)
            const localVarPath = `/api/v2/usage/streams/{source}`
                .replace(`{${"source"}}`, encodeURIComponent(String(source)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = to;
            }

            if (tz !== undefined) {
                localVarQueryParameter['tz'] = tz;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get multiple series of the number of streaming connections to LaunchDarkly in each time period, separated by SDK type and version. Information about each series is in the metadata array. The granularity of the data depends on the age of the data requested. If the requested range is within the past 2 hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.
         * @summary Get stream usage by SDK version
         * @param {string} source The source of streaming connections to describe. Must be either &#x60;client&#x60; or &#x60;server&#x60;.
         * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 24 hours ago.
         * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
         * @param {string} [tz] The timezone to use for breaks between days when returning daily data.
         * @param {string} [sdk] If included, this filters the returned series to only those that match this SDK name.
         * @param {string} [version] If included, this filters the returned series to only those that match this SDK version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStreamUsageBySdkVersion: async (source: string, from?: string, to?: string, tz?: string, sdk?: string, version?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'source' is not null or undefined
            assertParamExists('getStreamUsageBySdkVersion', 'source', source)
            const localVarPath = `/api/v2/usage/streams/{source}/bysdkversion`
                .replace(`{${"source"}}`, encodeURIComponent(String(source)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = to;
            }

            if (tz !== undefined) {
                localVarQueryParameter['tz'] = tz;
            }

            if (sdk !== undefined) {
                localVarQueryParameter['sdk'] = sdk;
            }

            if (version !== undefined) {
                localVarQueryParameter['version'] = version;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of SDK version objects, which contain an SDK name and version. These are all of the SDKs that have connected to LaunchDarkly from your account in the past 60 days.
         * @summary Get stream usage SDK versions
         * @param {string} source The source of streaming connections to describe. Must be either &#x60;client&#x60; or &#x60;server&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStreamUsageSdkversion: async (source: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'source' is not null or undefined
            assertParamExists('getStreamUsageSdkversion', 'source', source)
            const localVarPath = `/api/v2/usage/streams/{source}/sdkversions`
                .replace(`{${"source"}}`, encodeURIComponent(String(source)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AccountUsageBetaApi - functional programming interface
 * @export
 */
export const AccountUsageBetaApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AccountUsageBetaApiAxiosParamCreator(configuration)
    return {
        /**
         * Get time-series arrays of the number of times a flag is evaluated, broken down by the variation that resulted from that evaluation. The granularity of the data depends on the age of the data requested. If the requested range is within the past two hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.
         * @summary Get evaluations usage
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} flagKey The feature flag\&#39;s key.
         * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 30 days ago.
         * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
         * @param {string} [tz] The timezone to use for breaks between days when returning daily data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEvaluationsUsage(projKey: string, envKey: string, flagKey: string, from?: string, to?: string, tz?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SeriesListRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEvaluationsUsage(projKey, envKey, flagKey, from, to, tz, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get time-series arrays of the number of times a flag is evaluated, broken down by the variation that resulted from that evaluation. The granularity of the data depends on the age of the data requested. If the requested range is within the past two hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.
         * @summary Get events usage
         * @param {string} type The type of event to retrieve. Must be either &#x60;received&#x60; or &#x60;published&#x60;.
         * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 24 hours ago.
         * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEventsUsage(type: string, from?: string, to?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SeriesListRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEventsUsage(type, from, to, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of SDKs. These are all of the SDKs that have connected to LaunchDarkly by monthly active users (MAU) in the requested time period.
         * @summary Get MAU SDKs by type
         * @param {string} [from] The series of data returned starts from this timestamp. Defaults to seven days ago.
         * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
         * @param {string} [sdktype] The type of SDK with monthly active users (MAU) to list. Must be either &#x60;client&#x60; or &#x60;server&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMauSdksByType(from?: string, to?: string, sdktype?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SdkListRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMauSdksByType(from, to, sdktype, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a time-series array of the number of monthly active users (MAU) seen by LaunchDarkly from your account. The granularity is always daily.
         * @summary Get MAU usage
         * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 30 days ago.
         * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
         * @param {string} [project] A project key to filter results to. Can be specified multiple times, one query parameter per project key, to view data for multiple projects.
         * @param {string} [environment] An environment key to filter results to. When using this parameter, exactly one project key must also be set. Can be specified multiple times as separate query parameters to view data for multiple environments within a single project.
         * @param {string} [sdktype] An SDK type to filter results to. Can be specified multiple times, one query parameter per SDK type. Valid values: client, server
         * @param {string} [sdk] An SDK name to filter results to. Can be specified multiple times, one query parameter per SDK.
         * @param {string} [anonymous] If specified, filters results to either anonymous or nonanonymous users.
         * @param {string} [groupby] If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions (for example, to group by both project and SDK). Valid values: project, environment, sdktype, sdk, anonymous
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMauUsage(from?: string, to?: string, project?: string, environment?: string, sdktype?: string, sdk?: string, anonymous?: string, groupby?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SeriesListRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMauUsage(from, to, project, environment, sdktype, sdk, anonymous, groupby, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get time-series arrays of the number of monthly active users (MAU) seen by LaunchDarkly from your account, broken down by the category of users. The category is either `browser`, `mobile`, or `backend`.
         * @summary Get MAU usage by category
         * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 30 days ago.
         * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMauUsageByCategory(from?: string, to?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SeriesListRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMauUsageByCategory(from, to, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a time-series array of the number of streaming connections to LaunchDarkly in each time period. The granularity of the data depends on the age of the data requested. If the requested range is within the past two hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.
         * @summary Get stream usage
         * @param {string} source The source of streaming connections to describe. Must be either &#x60;client&#x60; or &#x60;server&#x60;.
         * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 30 days ago.
         * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
         * @param {string} [tz] The timezone to use for breaks between days when returning daily data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStreamUsage(source: string, from?: string, to?: string, tz?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SeriesListRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStreamUsage(source, from, to, tz, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get multiple series of the number of streaming connections to LaunchDarkly in each time period, separated by SDK type and version. Information about each series is in the metadata array. The granularity of the data depends on the age of the data requested. If the requested range is within the past 2 hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.
         * @summary Get stream usage by SDK version
         * @param {string} source The source of streaming connections to describe. Must be either &#x60;client&#x60; or &#x60;server&#x60;.
         * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 24 hours ago.
         * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
         * @param {string} [tz] The timezone to use for breaks between days when returning daily data.
         * @param {string} [sdk] If included, this filters the returned series to only those that match this SDK name.
         * @param {string} [version] If included, this filters the returned series to only those that match this SDK version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStreamUsageBySdkVersion(source: string, from?: string, to?: string, tz?: string, sdk?: string, version?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SeriesListRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStreamUsageBySdkVersion(source, from, to, tz, sdk, version, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of SDK version objects, which contain an SDK name and version. These are all of the SDKs that have connected to LaunchDarkly from your account in the past 60 days.
         * @summary Get stream usage SDK versions
         * @param {string} source The source of streaming connections to describe. Must be either &#x60;client&#x60; or &#x60;server&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStreamUsageSdkversion(source: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SdkVersionListRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStreamUsageSdkversion(source, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AccountUsageBetaApi - factory interface
 * @export
 */
export const AccountUsageBetaApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AccountUsageBetaApiFp(configuration)
    return {
        /**
         * Get time-series arrays of the number of times a flag is evaluated, broken down by the variation that resulted from that evaluation. The granularity of the data depends on the age of the data requested. If the requested range is within the past two hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.
         * @summary Get evaluations usage
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} flagKey The feature flag\&#39;s key.
         * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 30 days ago.
         * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
         * @param {string} [tz] The timezone to use for breaks between days when returning daily data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEvaluationsUsage(projKey: string, envKey: string, flagKey: string, from?: string, to?: string, tz?: string, options?: any): AxiosPromise<SeriesListRep> {
            return localVarFp.getEvaluationsUsage(projKey, envKey, flagKey, from, to, tz, options).then((request) => request(axios, basePath));
        },
        /**
         * Get time-series arrays of the number of times a flag is evaluated, broken down by the variation that resulted from that evaluation. The granularity of the data depends on the age of the data requested. If the requested range is within the past two hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.
         * @summary Get events usage
         * @param {string} type The type of event to retrieve. Must be either &#x60;received&#x60; or &#x60;published&#x60;.
         * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 24 hours ago.
         * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEventsUsage(type: string, from?: string, to?: string, options?: any): AxiosPromise<SeriesListRep> {
            return localVarFp.getEventsUsage(type, from, to, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of SDKs. These are all of the SDKs that have connected to LaunchDarkly by monthly active users (MAU) in the requested time period.
         * @summary Get MAU SDKs by type
         * @param {string} [from] The series of data returned starts from this timestamp. Defaults to seven days ago.
         * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
         * @param {string} [sdktype] The type of SDK with monthly active users (MAU) to list. Must be either &#x60;client&#x60; or &#x60;server&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMauSdksByType(from?: string, to?: string, sdktype?: string, options?: any): AxiosPromise<SdkListRep> {
            return localVarFp.getMauSdksByType(from, to, sdktype, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a time-series array of the number of monthly active users (MAU) seen by LaunchDarkly from your account. The granularity is always daily.
         * @summary Get MAU usage
         * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 30 days ago.
         * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
         * @param {string} [project] A project key to filter results to. Can be specified multiple times, one query parameter per project key, to view data for multiple projects.
         * @param {string} [environment] An environment key to filter results to. When using this parameter, exactly one project key must also be set. Can be specified multiple times as separate query parameters to view data for multiple environments within a single project.
         * @param {string} [sdktype] An SDK type to filter results to. Can be specified multiple times, one query parameter per SDK type. Valid values: client, server
         * @param {string} [sdk] An SDK name to filter results to. Can be specified multiple times, one query parameter per SDK.
         * @param {string} [anonymous] If specified, filters results to either anonymous or nonanonymous users.
         * @param {string} [groupby] If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions (for example, to group by both project and SDK). Valid values: project, environment, sdktype, sdk, anonymous
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMauUsage(from?: string, to?: string, project?: string, environment?: string, sdktype?: string, sdk?: string, anonymous?: string, groupby?: string, options?: any): AxiosPromise<SeriesListRep> {
            return localVarFp.getMauUsage(from, to, project, environment, sdktype, sdk, anonymous, groupby, options).then((request) => request(axios, basePath));
        },
        /**
         * Get time-series arrays of the number of monthly active users (MAU) seen by LaunchDarkly from your account, broken down by the category of users. The category is either `browser`, `mobile`, or `backend`.
         * @summary Get MAU usage by category
         * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 30 days ago.
         * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMauUsageByCategory(from?: string, to?: string, options?: any): AxiosPromise<SeriesListRep> {
            return localVarFp.getMauUsageByCategory(from, to, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a time-series array of the number of streaming connections to LaunchDarkly in each time period. The granularity of the data depends on the age of the data requested. If the requested range is within the past two hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.
         * @summary Get stream usage
         * @param {string} source The source of streaming connections to describe. Must be either &#x60;client&#x60; or &#x60;server&#x60;.
         * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 30 days ago.
         * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
         * @param {string} [tz] The timezone to use for breaks between days when returning daily data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStreamUsage(source: string, from?: string, to?: string, tz?: string, options?: any): AxiosPromise<SeriesListRep> {
            return localVarFp.getStreamUsage(source, from, to, tz, options).then((request) => request(axios, basePath));
        },
        /**
         * Get multiple series of the number of streaming connections to LaunchDarkly in each time period, separated by SDK type and version. Information about each series is in the metadata array. The granularity of the data depends on the age of the data requested. If the requested range is within the past 2 hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.
         * @summary Get stream usage by SDK version
         * @param {string} source The source of streaming connections to describe. Must be either &#x60;client&#x60; or &#x60;server&#x60;.
         * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 24 hours ago.
         * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
         * @param {string} [tz] The timezone to use for breaks between days when returning daily data.
         * @param {string} [sdk] If included, this filters the returned series to only those that match this SDK name.
         * @param {string} [version] If included, this filters the returned series to only those that match this SDK version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStreamUsageBySdkVersion(source: string, from?: string, to?: string, tz?: string, sdk?: string, version?: string, options?: any): AxiosPromise<SeriesListRep> {
            return localVarFp.getStreamUsageBySdkVersion(source, from, to, tz, sdk, version, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of SDK version objects, which contain an SDK name and version. These are all of the SDKs that have connected to LaunchDarkly from your account in the past 60 days.
         * @summary Get stream usage SDK versions
         * @param {string} source The source of streaming connections to describe. Must be either &#x60;client&#x60; or &#x60;server&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStreamUsageSdkversion(source: string, options?: any): AxiosPromise<SdkVersionListRep> {
            return localVarFp.getStreamUsageSdkversion(source, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AccountUsageBetaApi - object-oriented interface
 * @export
 * @class AccountUsageBetaApi
 * @extends {BaseAPI}
 */
export class AccountUsageBetaApi extends BaseAPI {
    /**
     * Get time-series arrays of the number of times a flag is evaluated, broken down by the variation that resulted from that evaluation. The granularity of the data depends on the age of the data requested. If the requested range is within the past two hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.
     * @summary Get evaluations usage
     * @param {string} projKey The project key.
     * @param {string} envKey The environment key.
     * @param {string} flagKey The feature flag\&#39;s key.
     * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 30 days ago.
     * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
     * @param {string} [tz] The timezone to use for breaks between days when returning daily data.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsageBetaApi
     */
    public getEvaluationsUsage(projKey: string, envKey: string, flagKey: string, from?: string, to?: string, tz?: string, options?: any) {
        return AccountUsageBetaApiFp(this.configuration).getEvaluationsUsage(projKey, envKey, flagKey, from, to, tz, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get time-series arrays of the number of times a flag is evaluated, broken down by the variation that resulted from that evaluation. The granularity of the data depends on the age of the data requested. If the requested range is within the past two hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.
     * @summary Get events usage
     * @param {string} type The type of event to retrieve. Must be either &#x60;received&#x60; or &#x60;published&#x60;.
     * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 24 hours ago.
     * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsageBetaApi
     */
    public getEventsUsage(type: string, from?: string, to?: string, options?: any) {
        return AccountUsageBetaApiFp(this.configuration).getEventsUsage(type, from, to, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of SDKs. These are all of the SDKs that have connected to LaunchDarkly by monthly active users (MAU) in the requested time period.
     * @summary Get MAU SDKs by type
     * @param {string} [from] The series of data returned starts from this timestamp. Defaults to seven days ago.
     * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
     * @param {string} [sdktype] The type of SDK with monthly active users (MAU) to list. Must be either &#x60;client&#x60; or &#x60;server&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsageBetaApi
     */
    public getMauSdksByType(from?: string, to?: string, sdktype?: string, options?: any) {
        return AccountUsageBetaApiFp(this.configuration).getMauSdksByType(from, to, sdktype, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a time-series array of the number of monthly active users (MAU) seen by LaunchDarkly from your account. The granularity is always daily.
     * @summary Get MAU usage
     * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 30 days ago.
     * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
     * @param {string} [project] A project key to filter results to. Can be specified multiple times, one query parameter per project key, to view data for multiple projects.
     * @param {string} [environment] An environment key to filter results to. When using this parameter, exactly one project key must also be set. Can be specified multiple times as separate query parameters to view data for multiple environments within a single project.
     * @param {string} [sdktype] An SDK type to filter results to. Can be specified multiple times, one query parameter per SDK type. Valid values: client, server
     * @param {string} [sdk] An SDK name to filter results to. Can be specified multiple times, one query parameter per SDK.
     * @param {string} [anonymous] If specified, filters results to either anonymous or nonanonymous users.
     * @param {string} [groupby] If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions (for example, to group by both project and SDK). Valid values: project, environment, sdktype, sdk, anonymous
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsageBetaApi
     */
    public getMauUsage(from?: string, to?: string, project?: string, environment?: string, sdktype?: string, sdk?: string, anonymous?: string, groupby?: string, options?: any) {
        return AccountUsageBetaApiFp(this.configuration).getMauUsage(from, to, project, environment, sdktype, sdk, anonymous, groupby, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get time-series arrays of the number of monthly active users (MAU) seen by LaunchDarkly from your account, broken down by the category of users. The category is either `browser`, `mobile`, or `backend`.
     * @summary Get MAU usage by category
     * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 30 days ago.
     * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsageBetaApi
     */
    public getMauUsageByCategory(from?: string, to?: string, options?: any) {
        return AccountUsageBetaApiFp(this.configuration).getMauUsageByCategory(from, to, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a time-series array of the number of streaming connections to LaunchDarkly in each time period. The granularity of the data depends on the age of the data requested. If the requested range is within the past two hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.
     * @summary Get stream usage
     * @param {string} source The source of streaming connections to describe. Must be either &#x60;client&#x60; or &#x60;server&#x60;.
     * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 30 days ago.
     * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
     * @param {string} [tz] The timezone to use for breaks between days when returning daily data.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsageBetaApi
     */
    public getStreamUsage(source: string, from?: string, to?: string, tz?: string, options?: any) {
        return AccountUsageBetaApiFp(this.configuration).getStreamUsage(source, from, to, tz, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get multiple series of the number of streaming connections to LaunchDarkly in each time period, separated by SDK type and version. Information about each series is in the metadata array. The granularity of the data depends on the age of the data requested. If the requested range is within the past 2 hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.
     * @summary Get stream usage by SDK version
     * @param {string} source The source of streaming connections to describe. Must be either &#x60;client&#x60; or &#x60;server&#x60;.
     * @param {string} [from] The series of data returned starts from this timestamp. Defaults to 24 hours ago.
     * @param {string} [to] The series of data returned ends at this timestamp. Defaults to the current time.
     * @param {string} [tz] The timezone to use for breaks between days when returning daily data.
     * @param {string} [sdk] If included, this filters the returned series to only those that match this SDK name.
     * @param {string} [version] If included, this filters the returned series to only those that match this SDK version.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsageBetaApi
     */
    public getStreamUsageBySdkVersion(source: string, from?: string, to?: string, tz?: string, sdk?: string, version?: string, options?: any) {
        return AccountUsageBetaApiFp(this.configuration).getStreamUsageBySdkVersion(source, from, to, tz, sdk, version, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of SDK version objects, which contain an SDK name and version. These are all of the SDKs that have connected to LaunchDarkly from your account in the past 60 days.
     * @summary Get stream usage SDK versions
     * @param {string} source The source of streaming connections to describe. Must be either &#x60;client&#x60; or &#x60;server&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsageBetaApi
     */
    public getStreamUsageSdkversion(source: string, options?: any) {
        return AccountUsageBetaApiFp(this.configuration).getStreamUsageSdkversion(source, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * ApprovalsApi - axios parameter creator
 * @export
 */
export const ApprovalsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete an approval request for a feature flag
         * @summary Delete approval request
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {string} id The feature flag approval request ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteApprovalRequest: async (projectKey: string, featureFlagKey: string, environmentKey: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('deleteApprovalRequest', 'projectKey', projectKey)
            // verify required parameter 'featureFlagKey' is not null or undefined
            assertParamExists('deleteApprovalRequest', 'featureFlagKey', featureFlagKey)
            // verify required parameter 'environmentKey' is not null or undefined
            assertParamExists('deleteApprovalRequest', 'environmentKey', environmentKey)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteApprovalRequest', 'id', id)
            const localVarPath = `/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)))
                .replace(`{${"featureFlagKey"}}`, encodeURIComponent(String(featureFlagKey)))
                .replace(`{${"environmentKey"}}`, encodeURIComponent(String(environmentKey)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a single approval request for a feature flag
         * @summary Get approval request
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {string} id The feature flag approval request ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApproval: async (projectKey: string, featureFlagKey: string, environmentKey: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('getApproval', 'projectKey', projectKey)
            // verify required parameter 'featureFlagKey' is not null or undefined
            assertParamExists('getApproval', 'featureFlagKey', featureFlagKey)
            // verify required parameter 'environmentKey' is not null or undefined
            assertParamExists('getApproval', 'environmentKey', environmentKey)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getApproval', 'id', id)
            const localVarPath = `/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)))
                .replace(`{${"featureFlagKey"}}`, encodeURIComponent(String(featureFlagKey)))
                .replace(`{${"environmentKey"}}`, encodeURIComponent(String(environmentKey)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all approval requests for a feature flag
         * @summary List all approval requests
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApprovals: async (projectKey: string, featureFlagKey: string, environmentKey: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('getApprovals', 'projectKey', projectKey)
            // verify required parameter 'featureFlagKey' is not null or undefined
            assertParamExists('getApprovals', 'featureFlagKey', featureFlagKey)
            // verify required parameter 'environmentKey' is not null or undefined
            assertParamExists('getApprovals', 'environmentKey', environmentKey)
            const localVarPath = `/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)))
                .replace(`{${"featureFlagKey"}}`, encodeURIComponent(String(featureFlagKey)))
                .replace(`{${"environmentKey"}}`, encodeURIComponent(String(environmentKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create an approval request for a feature flag
         * @summary Create approval request
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {CreateFlagConfigApprovalRequestRequest} createFlagConfigApprovalRequestRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postApprovalRequest: async (projectKey: string, featureFlagKey: string, environmentKey: string, createFlagConfigApprovalRequestRequest: CreateFlagConfigApprovalRequestRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('postApprovalRequest', 'projectKey', projectKey)
            // verify required parameter 'featureFlagKey' is not null or undefined
            assertParamExists('postApprovalRequest', 'featureFlagKey', featureFlagKey)
            // verify required parameter 'environmentKey' is not null or undefined
            assertParamExists('postApprovalRequest', 'environmentKey', environmentKey)
            // verify required parameter 'createFlagConfigApprovalRequestRequest' is not null or undefined
            assertParamExists('postApprovalRequest', 'createFlagConfigApprovalRequestRequest', createFlagConfigApprovalRequestRequest)
            const localVarPath = `/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)))
                .replace(`{${"featureFlagKey"}}`, encodeURIComponent(String(featureFlagKey)))
                .replace(`{${"environmentKey"}}`, encodeURIComponent(String(environmentKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createFlagConfigApprovalRequestRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Apply approval request by either approving or declining changes.
         * @summary Apply approval request
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {string} id The feature flag approval request ID
         * @param {PostApprovalRequestApplyRequest} postApprovalRequestApplyRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postApprovalRequestApplyRequest: async (projectKey: string, featureFlagKey: string, environmentKey: string, id: string, postApprovalRequestApplyRequest: PostApprovalRequestApplyRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('postApprovalRequestApplyRequest', 'projectKey', projectKey)
            // verify required parameter 'featureFlagKey' is not null or undefined
            assertParamExists('postApprovalRequestApplyRequest', 'featureFlagKey', featureFlagKey)
            // verify required parameter 'environmentKey' is not null or undefined
            assertParamExists('postApprovalRequestApplyRequest', 'environmentKey', environmentKey)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('postApprovalRequestApplyRequest', 'id', id)
            // verify required parameter 'postApprovalRequestApplyRequest' is not null or undefined
            assertParamExists('postApprovalRequestApplyRequest', 'postApprovalRequestApplyRequest', postApprovalRequestApplyRequest)
            const localVarPath = `/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/apply`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)))
                .replace(`{${"featureFlagKey"}}`, encodeURIComponent(String(featureFlagKey)))
                .replace(`{${"environmentKey"}}`, encodeURIComponent(String(environmentKey)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(postApprovalRequestApplyRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Review approval request by either approving or declining changes.
         * @summary Review approval request
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {string} id The feature flag approval request ID
         * @param {PostApprovalRequestReviewRequest} postApprovalRequestReviewRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postApprovalRequestReview: async (projectKey: string, featureFlagKey: string, environmentKey: string, id: string, postApprovalRequestReviewRequest: PostApprovalRequestReviewRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('postApprovalRequestReview', 'projectKey', projectKey)
            // verify required parameter 'featureFlagKey' is not null or undefined
            assertParamExists('postApprovalRequestReview', 'featureFlagKey', featureFlagKey)
            // verify required parameter 'environmentKey' is not null or undefined
            assertParamExists('postApprovalRequestReview', 'environmentKey', environmentKey)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('postApprovalRequestReview', 'id', id)
            // verify required parameter 'postApprovalRequestReviewRequest' is not null or undefined
            assertParamExists('postApprovalRequestReview', 'postApprovalRequestReviewRequest', postApprovalRequestReviewRequest)
            const localVarPath = `/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/reviews`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)))
                .replace(`{${"featureFlagKey"}}`, encodeURIComponent(String(featureFlagKey)))
                .replace(`{${"environmentKey"}}`, encodeURIComponent(String(environmentKey)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(postApprovalRequestReviewRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create an approval request to copy a feature flag\'s configuration across environments.
         * @summary Create approval request to copy flag configurations across environments
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {CreateCopyFlagConfigApprovalRequestRequest} createCopyFlagConfigApprovalRequestRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postFlagCopyConfigApprovalRequest: async (projectKey: string, featureFlagKey: string, environmentKey: string, createCopyFlagConfigApprovalRequestRequest: CreateCopyFlagConfigApprovalRequestRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('postFlagCopyConfigApprovalRequest', 'projectKey', projectKey)
            // verify required parameter 'featureFlagKey' is not null or undefined
            assertParamExists('postFlagCopyConfigApprovalRequest', 'featureFlagKey', featureFlagKey)
            // verify required parameter 'environmentKey' is not null or undefined
            assertParamExists('postFlagCopyConfigApprovalRequest', 'environmentKey', environmentKey)
            // verify required parameter 'createCopyFlagConfigApprovalRequestRequest' is not null or undefined
            assertParamExists('postFlagCopyConfigApprovalRequest', 'createCopyFlagConfigApprovalRequestRequest', createCopyFlagConfigApprovalRequestRequest)
            const localVarPath = `/api/v2/projects/{projectKey}/flags/{featureFlagKey}/copy/environments/{environmentKey}/approval-requests-flag-copy`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)))
                .replace(`{${"featureFlagKey"}}`, encodeURIComponent(String(featureFlagKey)))
                .replace(`{${"environmentKey"}}`, encodeURIComponent(String(environmentKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createCopyFlagConfigApprovalRequestRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ApprovalsApi - functional programming interface
 * @export
 */
export const ApprovalsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ApprovalsApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete an approval request for a feature flag
         * @summary Delete approval request
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {string} id The feature flag approval request ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteApprovalRequest(projectKey: string, featureFlagKey: string, environmentKey: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteApprovalRequest(projectKey, featureFlagKey, environmentKey, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a single approval request for a feature flag
         * @summary Get approval request
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {string} id The feature flag approval request ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getApproval(projectKey: string, featureFlagKey: string, environmentKey: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FlagConfigApprovalRequestResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getApproval(projectKey, featureFlagKey, environmentKey, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all approval requests for a feature flag
         * @summary List all approval requests
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getApprovals(projectKey: string, featureFlagKey: string, environmentKey: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FlagConfigApprovalRequestsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getApprovals(projectKey, featureFlagKey, environmentKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create an approval request for a feature flag
         * @summary Create approval request
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {CreateFlagConfigApprovalRequestRequest} createFlagConfigApprovalRequestRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postApprovalRequest(projectKey: string, featureFlagKey: string, environmentKey: string, createFlagConfigApprovalRequestRequest: CreateFlagConfigApprovalRequestRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FlagConfigApprovalRequestResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postApprovalRequest(projectKey, featureFlagKey, environmentKey, createFlagConfigApprovalRequestRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Apply approval request by either approving or declining changes.
         * @summary Apply approval request
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {string} id The feature flag approval request ID
         * @param {PostApprovalRequestApplyRequest} postApprovalRequestApplyRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postApprovalRequestApplyRequest(projectKey: string, featureFlagKey: string, environmentKey: string, id: string, postApprovalRequestApplyRequest: PostApprovalRequestApplyRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FlagConfigApprovalRequestResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postApprovalRequestApplyRequest(projectKey, featureFlagKey, environmentKey, id, postApprovalRequestApplyRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Review approval request by either approving or declining changes.
         * @summary Review approval request
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {string} id The feature flag approval request ID
         * @param {PostApprovalRequestReviewRequest} postApprovalRequestReviewRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postApprovalRequestReview(projectKey: string, featureFlagKey: string, environmentKey: string, id: string, postApprovalRequestReviewRequest: PostApprovalRequestReviewRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FlagConfigApprovalRequestResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postApprovalRequestReview(projectKey, featureFlagKey, environmentKey, id, postApprovalRequestReviewRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create an approval request to copy a feature flag\'s configuration across environments.
         * @summary Create approval request to copy flag configurations across environments
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {CreateCopyFlagConfigApprovalRequestRequest} createCopyFlagConfigApprovalRequestRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postFlagCopyConfigApprovalRequest(projectKey: string, featureFlagKey: string, environmentKey: string, createCopyFlagConfigApprovalRequestRequest: CreateCopyFlagConfigApprovalRequestRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FlagConfigApprovalRequestResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postFlagCopyConfigApprovalRequest(projectKey, featureFlagKey, environmentKey, createCopyFlagConfigApprovalRequestRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ApprovalsApi - factory interface
 * @export
 */
export const ApprovalsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ApprovalsApiFp(configuration)
    return {
        /**
         * Delete an approval request for a feature flag
         * @summary Delete approval request
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {string} id The feature flag approval request ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteApprovalRequest(projectKey: string, featureFlagKey: string, environmentKey: string, id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteApprovalRequest(projectKey, featureFlagKey, environmentKey, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a single approval request for a feature flag
         * @summary Get approval request
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {string} id The feature flag approval request ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApproval(projectKey: string, featureFlagKey: string, environmentKey: string, id: string, options?: any): AxiosPromise<FlagConfigApprovalRequestResponse> {
            return localVarFp.getApproval(projectKey, featureFlagKey, environmentKey, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all approval requests for a feature flag
         * @summary List all approval requests
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApprovals(projectKey: string, featureFlagKey: string, environmentKey: string, options?: any): AxiosPromise<FlagConfigApprovalRequestsResponse> {
            return localVarFp.getApprovals(projectKey, featureFlagKey, environmentKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Create an approval request for a feature flag
         * @summary Create approval request
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {CreateFlagConfigApprovalRequestRequest} createFlagConfigApprovalRequestRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postApprovalRequest(projectKey: string, featureFlagKey: string, environmentKey: string, createFlagConfigApprovalRequestRequest: CreateFlagConfigApprovalRequestRequest, options?: any): AxiosPromise<FlagConfigApprovalRequestResponse> {
            return localVarFp.postApprovalRequest(projectKey, featureFlagKey, environmentKey, createFlagConfigApprovalRequestRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Apply approval request by either approving or declining changes.
         * @summary Apply approval request
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {string} id The feature flag approval request ID
         * @param {PostApprovalRequestApplyRequest} postApprovalRequestApplyRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postApprovalRequestApplyRequest(projectKey: string, featureFlagKey: string, environmentKey: string, id: string, postApprovalRequestApplyRequest: PostApprovalRequestApplyRequest, options?: any): AxiosPromise<FlagConfigApprovalRequestResponse> {
            return localVarFp.postApprovalRequestApplyRequest(projectKey, featureFlagKey, environmentKey, id, postApprovalRequestApplyRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Review approval request by either approving or declining changes.
         * @summary Review approval request
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {string} id The feature flag approval request ID
         * @param {PostApprovalRequestReviewRequest} postApprovalRequestReviewRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postApprovalRequestReview(projectKey: string, featureFlagKey: string, environmentKey: string, id: string, postApprovalRequestReviewRequest: PostApprovalRequestReviewRequest, options?: any): AxiosPromise<FlagConfigApprovalRequestResponse> {
            return localVarFp.postApprovalRequestReview(projectKey, featureFlagKey, environmentKey, id, postApprovalRequestReviewRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Create an approval request to copy a feature flag\'s configuration across environments.
         * @summary Create approval request to copy flag configurations across environments
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {CreateCopyFlagConfigApprovalRequestRequest} createCopyFlagConfigApprovalRequestRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postFlagCopyConfigApprovalRequest(projectKey: string, featureFlagKey: string, environmentKey: string, createCopyFlagConfigApprovalRequestRequest: CreateCopyFlagConfigApprovalRequestRequest, options?: any): AxiosPromise<FlagConfigApprovalRequestResponse> {
            return localVarFp.postFlagCopyConfigApprovalRequest(projectKey, featureFlagKey, environmentKey, createCopyFlagConfigApprovalRequestRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ApprovalsApi - object-oriented interface
 * @export
 * @class ApprovalsApi
 * @extends {BaseAPI}
 */
export class ApprovalsApi extends BaseAPI {
    /**
     * Delete an approval request for a feature flag
     * @summary Delete approval request
     * @param {string} projectKey The project key
     * @param {string} featureFlagKey The feature flag\&#39;s key
     * @param {string} environmentKey The environment key
     * @param {string} id The feature flag approval request ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApprovalsApi
     */
    public deleteApprovalRequest(projectKey: string, featureFlagKey: string, environmentKey: string, id: string, options?: any) {
        return ApprovalsApiFp(this.configuration).deleteApprovalRequest(projectKey, featureFlagKey, environmentKey, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a single approval request for a feature flag
     * @summary Get approval request
     * @param {string} projectKey The project key
     * @param {string} featureFlagKey The feature flag\&#39;s key
     * @param {string} environmentKey The environment key
     * @param {string} id The feature flag approval request ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApprovalsApi
     */
    public getApproval(projectKey: string, featureFlagKey: string, environmentKey: string, id: string, options?: any) {
        return ApprovalsApiFp(this.configuration).getApproval(projectKey, featureFlagKey, environmentKey, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all approval requests for a feature flag
     * @summary List all approval requests
     * @param {string} projectKey The project key
     * @param {string} featureFlagKey The feature flag\&#39;s key
     * @param {string} environmentKey The environment key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApprovalsApi
     */
    public getApprovals(projectKey: string, featureFlagKey: string, environmentKey: string, options?: any) {
        return ApprovalsApiFp(this.configuration).getApprovals(projectKey, featureFlagKey, environmentKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create an approval request for a feature flag
     * @summary Create approval request
     * @param {string} projectKey The project key
     * @param {string} featureFlagKey The feature flag\&#39;s key
     * @param {string} environmentKey The environment key
     * @param {CreateFlagConfigApprovalRequestRequest} createFlagConfigApprovalRequestRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApprovalsApi
     */
    public postApprovalRequest(projectKey: string, featureFlagKey: string, environmentKey: string, createFlagConfigApprovalRequestRequest: CreateFlagConfigApprovalRequestRequest, options?: any) {
        return ApprovalsApiFp(this.configuration).postApprovalRequest(projectKey, featureFlagKey, environmentKey, createFlagConfigApprovalRequestRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Apply approval request by either approving or declining changes.
     * @summary Apply approval request
     * @param {string} projectKey The project key
     * @param {string} featureFlagKey The feature flag\&#39;s key
     * @param {string} environmentKey The environment key
     * @param {string} id The feature flag approval request ID
     * @param {PostApprovalRequestApplyRequest} postApprovalRequestApplyRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApprovalsApi
     */
    public postApprovalRequestApplyRequest(projectKey: string, featureFlagKey: string, environmentKey: string, id: string, postApprovalRequestApplyRequest: PostApprovalRequestApplyRequest, options?: any) {
        return ApprovalsApiFp(this.configuration).postApprovalRequestApplyRequest(projectKey, featureFlagKey, environmentKey, id, postApprovalRequestApplyRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Review approval request by either approving or declining changes.
     * @summary Review approval request
     * @param {string} projectKey The project key
     * @param {string} featureFlagKey The feature flag\&#39;s key
     * @param {string} environmentKey The environment key
     * @param {string} id The feature flag approval request ID
     * @param {PostApprovalRequestReviewRequest} postApprovalRequestReviewRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApprovalsApi
     */
    public postApprovalRequestReview(projectKey: string, featureFlagKey: string, environmentKey: string, id: string, postApprovalRequestReviewRequest: PostApprovalRequestReviewRequest, options?: any) {
        return ApprovalsApiFp(this.configuration).postApprovalRequestReview(projectKey, featureFlagKey, environmentKey, id, postApprovalRequestReviewRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create an approval request to copy a feature flag\'s configuration across environments.
     * @summary Create approval request to copy flag configurations across environments
     * @param {string} projectKey The project key
     * @param {string} featureFlagKey The feature flag\&#39;s key
     * @param {string} environmentKey The environment key
     * @param {CreateCopyFlagConfigApprovalRequestRequest} createCopyFlagConfigApprovalRequestRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApprovalsApi
     */
    public postFlagCopyConfigApprovalRequest(projectKey: string, featureFlagKey: string, environmentKey: string, createCopyFlagConfigApprovalRequestRequest: CreateCopyFlagConfigApprovalRequestRequest, options?: any) {
        return ApprovalsApiFp(this.configuration).postFlagCopyConfigApprovalRequest(projectKey, featureFlagKey, environmentKey, createCopyFlagConfigApprovalRequestRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * AuditLogApi - axios parameter creator
 * @export
 */
export const AuditLogApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get a list of all audit log entries. The query parameters let you restrict the results that return by date ranges, resource specifiers, or a full-text search query.
         * @summary List audit log feature flag entries
         * @param {number} [before] A timestamp filter, expressed as a Unix epoch time in milliseconds.  All entries this returns occurred before the timestamp.
         * @param {number} [after] A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries this returns occurred after the timestamp.
         * @param {string} [q] Text to search for. You can search for the full or partial name of the resource, or full or partial email address of the member who made a change.
         * @param {number} [limit] A limit on the number of audit log entries that return. Set between 1 and 20.
         * @param {string} [spec] A resource specifier that lets you filter audit log listings by resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuditLogEntries: async (before?: number, after?: number, q?: string, limit?: number, spec?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/auditlog`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (before !== undefined) {
                localVarQueryParameter['before'] = before;
            }

            if (after !== undefined) {
                localVarQueryParameter['after'] = after;
            }

            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (spec !== undefined) {
                localVarQueryParameter['spec'] = spec;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetch a detailed audit log entry representation. The detailed representation includes several fields that are not present in the summary representation:  - `delta`: the JSON patch body that was used in the request to update the entity - `previousVersion`: a JSON representation of the previous version of the entity - `currentVersion`: a JSON representation of the current version of the entity 
         * @summary Get audit log entry
         * @param {string} id The ID of the audit log entry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuditLogEntry: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getAuditLogEntry', 'id', id)
            const localVarPath = `/api/v2/auditlog/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuditLogApi - functional programming interface
 * @export
 */
export const AuditLogApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuditLogApiAxiosParamCreator(configuration)
    return {
        /**
         * Get a list of all audit log entries. The query parameters let you restrict the results that return by date ranges, resource specifiers, or a full-text search query.
         * @summary List audit log feature flag entries
         * @param {number} [before] A timestamp filter, expressed as a Unix epoch time in milliseconds.  All entries this returns occurred before the timestamp.
         * @param {number} [after] A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries this returns occurred after the timestamp.
         * @param {string} [q] Text to search for. You can search for the full or partial name of the resource, or full or partial email address of the member who made a change.
         * @param {number} [limit] A limit on the number of audit log entries that return. Set between 1 and 20.
         * @param {string} [spec] A resource specifier that lets you filter audit log listings by resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAuditLogEntries(before?: number, after?: number, q?: string, limit?: number, spec?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuditLogEntryListingRepCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuditLogEntries(before, after, q, limit, spec, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Fetch a detailed audit log entry representation. The detailed representation includes several fields that are not present in the summary representation:  - `delta`: the JSON patch body that was used in the request to update the entity - `previousVersion`: a JSON representation of the previous version of the entity - `currentVersion`: a JSON representation of the current version of the entity 
         * @summary Get audit log entry
         * @param {string} id The ID of the audit log entry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAuditLogEntry(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuditLogEntryRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuditLogEntry(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuditLogApi - factory interface
 * @export
 */
export const AuditLogApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuditLogApiFp(configuration)
    return {
        /**
         * Get a list of all audit log entries. The query parameters let you restrict the results that return by date ranges, resource specifiers, or a full-text search query.
         * @summary List audit log feature flag entries
         * @param {number} [before] A timestamp filter, expressed as a Unix epoch time in milliseconds.  All entries this returns occurred before the timestamp.
         * @param {number} [after] A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries this returns occurred after the timestamp.
         * @param {string} [q] Text to search for. You can search for the full or partial name of the resource, or full or partial email address of the member who made a change.
         * @param {number} [limit] A limit on the number of audit log entries that return. Set between 1 and 20.
         * @param {string} [spec] A resource specifier that lets you filter audit log listings by resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuditLogEntries(before?: number, after?: number, q?: string, limit?: number, spec?: string, options?: any): AxiosPromise<AuditLogEntryListingRepCollection> {
            return localVarFp.getAuditLogEntries(before, after, q, limit, spec, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch a detailed audit log entry representation. The detailed representation includes several fields that are not present in the summary representation:  - `delta`: the JSON patch body that was used in the request to update the entity - `previousVersion`: a JSON representation of the previous version of the entity - `currentVersion`: a JSON representation of the current version of the entity 
         * @summary Get audit log entry
         * @param {string} id The ID of the audit log entry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuditLogEntry(id: string, options?: any): AxiosPromise<AuditLogEntryRep> {
            return localVarFp.getAuditLogEntry(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuditLogApi - object-oriented interface
 * @export
 * @class AuditLogApi
 * @extends {BaseAPI}
 */
export class AuditLogApi extends BaseAPI {
    /**
     * Get a list of all audit log entries. The query parameters let you restrict the results that return by date ranges, resource specifiers, or a full-text search query.
     * @summary List audit log feature flag entries
     * @param {number} [before] A timestamp filter, expressed as a Unix epoch time in milliseconds.  All entries this returns occurred before the timestamp.
     * @param {number} [after] A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries this returns occurred after the timestamp.
     * @param {string} [q] Text to search for. You can search for the full or partial name of the resource, or full or partial email address of the member who made a change.
     * @param {number} [limit] A limit on the number of audit log entries that return. Set between 1 and 20.
     * @param {string} [spec] A resource specifier that lets you filter audit log listings by resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditLogApi
     */
    public getAuditLogEntries(before?: number, after?: number, q?: string, limit?: number, spec?: string, options?: any) {
        return AuditLogApiFp(this.configuration).getAuditLogEntries(before, after, q, limit, spec, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch a detailed audit log entry representation. The detailed representation includes several fields that are not present in the summary representation:  - `delta`: the JSON patch body that was used in the request to update the entity - `previousVersion`: a JSON representation of the previous version of the entity - `currentVersion`: a JSON representation of the current version of the entity 
     * @summary Get audit log entry
     * @param {string} id The ID of the audit log entry
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditLogApi
     */
    public getAuditLogEntry(id: string, options?: any) {
        return AuditLogApiFp(this.configuration).getAuditLogEntry(id, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * CodeReferencesApi - axios parameter creator
 * @export
 */
export const CodeReferencesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Asynchronously delete a number of branches.
         * @summary Delete branches
         * @param {string} repo The repository name to delete branches for.
         * @param {Array<string>} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBranches: async (repo: string, requestBody: Array<string>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'repo' is not null or undefined
            assertParamExists('deleteBranches', 'repo', repo)
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('deleteBranches', 'requestBody', requestBody)
            const localVarPath = `/api/v2/code-refs/repositories/{repo}/branch-delete-tasks`
                .replace(`{${"repo"}}`, encodeURIComponent(String(repo)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a repository with the specified name
         * @summary Delete repository
         * @param {string} repo The repository name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRepository: async (repo: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'repo' is not null or undefined
            assertParamExists('deleteRepository', 'repo', repo)
            const localVarPath = `/api/v2/code-refs/repositories/{repo}`
                .replace(`{${"repo"}}`, encodeURIComponent(String(repo)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a specific branch in a repository
         * @summary Get branch
         * @param {string} repo The repository name
         * @param {string} branch The url-encoded branch name
         * @param {string} [projKey] Filter results to a specific project
         * @param {string} [flagKey] Filter results to a specific flag key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBranch: async (repo: string, branch: string, projKey?: string, flagKey?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'repo' is not null or undefined
            assertParamExists('getBranch', 'repo', repo)
            // verify required parameter 'branch' is not null or undefined
            assertParamExists('getBranch', 'branch', branch)
            const localVarPath = `/api/v2/code-refs/repositories/{repo}/branches/{branch}`
                .replace(`{${"repo"}}`, encodeURIComponent(String(repo)))
                .replace(`{${"branch"}}`, encodeURIComponent(String(branch)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (projKey !== undefined) {
                localVarQueryParameter['projKey'] = projKey;
            }

            if (flagKey !== undefined) {
                localVarQueryParameter['flagKey'] = flagKey;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of branches.
         * @summary List branches
         * @param {string} repo The repository name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBranches: async (repo: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'repo' is not null or undefined
            assertParamExists('getBranches', 'repo', repo)
            const localVarPath = `/api/v2/code-refs/repositories/{repo}/branches`
                .replace(`{${"repo"}}`, encodeURIComponent(String(repo)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of all extinctions.
         * @summary List extinctions
         * @param {string} [repoName] Filter results to a specific repository
         * @param {string} [branchName] Filter results to a specific branch
         * @param {string} [projKey] Filter results to a specific project
         * @param {string} [flagKey] Filter results to a specific flag key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExtinctions: async (repoName?: string, branchName?: string, projKey?: string, flagKey?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/code-refs/extinctions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (repoName !== undefined) {
                localVarQueryParameter['repoName'] = repoName;
            }

            if (branchName !== undefined) {
                localVarQueryParameter['branchName'] = branchName;
            }

            if (projKey !== undefined) {
                localVarQueryParameter['projKey'] = projKey;
            }

            if (flagKey !== undefined) {
                localVarQueryParameter['flagKey'] = flagKey;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of connected repositories. Optionally, you can include branch metadata with the `withBranches` query parameter. Embed references for the default branch with `ReferencesForDefaultBranch`. You can also filter the list of code references by project key and flag key.
         * @summary List repositories
         * @param {string} [withBranches] If set to any value, the endpoint returns repositories with associated branch data
         * @param {string} [withReferencesForDefaultBranch] If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch
         * @param {string} [projKey] A LaunchDarkly project key. If provided, this filters code reference results to the specified project.
         * @param {string} [flagKey] If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRepositories: async (withBranches?: string, withReferencesForDefaultBranch?: string, projKey?: string, flagKey?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/code-refs/repositories`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (withBranches !== undefined) {
                localVarQueryParameter['withBranches'] = withBranches;
            }

            if (withReferencesForDefaultBranch !== undefined) {
                localVarQueryParameter['withReferencesForDefaultBranch'] = withReferencesForDefaultBranch;
            }

            if (projKey !== undefined) {
                localVarQueryParameter['projKey'] = projKey;
            }

            if (flagKey !== undefined) {
                localVarQueryParameter['flagKey'] = flagKey;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a single repository by name.
         * @summary Get repository
         * @param {string} repo The repository name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRepository: async (repo: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'repo' is not null or undefined
            assertParamExists('getRepository', 'repo', repo)
            const localVarPath = `/api/v2/code-refs/repositories/{repo}`
                .replace(`{${"repo"}}`, encodeURIComponent(String(repo)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get links for all projects that have Code References.
         * @summary Get number of code references for flags
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRootStatistic: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/code-refs/statistics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the number of code references across repositories for all flags in your project that have code references in the default branch (for example: master). You can optionally include the `flagKey` query parameter to get the number of code references across repositories for a single flag. This endpoint returns the number of times your flag keys are referenced in your repositories. You can filter to a single flag with by passing in a flag key.
         * @summary Get number of code references for flags
         * @param {string} projKey The project key
         * @param {string} [flagKey] Filter results to a specific flag key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStatistics: async (projKey: string, flagKey?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('getStatistics', 'projKey', projKey)
            const localVarPath = `/api/v2/code-refs/statistics/{projKey}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (flagKey !== undefined) {
                localVarQueryParameter['flagKey'] = flagKey;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a repository\'s settings. The request must be a valid JSON Patch document describing the changes to be made to the repository.
         * @summary Update repository
         * @param {string} repo The repository name
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchRepository: async (repo: string, patchOperation: Array<PatchOperation>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'repo' is not null or undefined
            assertParamExists('patchRepository', 'repo', repo)
            // verify required parameter 'patchOperation' is not null or undefined
            assertParamExists('patchRepository', 'patchOperation', patchOperation)
            const localVarPath = `/api/v2/code-refs/repositories/{repo}`
                .replace(`{${"repo"}}`, encodeURIComponent(String(repo)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchOperation, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new extinction
         * @summary Create extinction
         * @param {string} repo The repository name
         * @param {string} branch The url-encoded branch name
         * @param {Array<InlineObject>} inlineObject 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postExtinction: async (repo: string, branch: string, inlineObject: Array<InlineObject>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'repo' is not null or undefined
            assertParamExists('postExtinction', 'repo', repo)
            // verify required parameter 'branch' is not null or undefined
            assertParamExists('postExtinction', 'branch', branch)
            // verify required parameter 'inlineObject' is not null or undefined
            assertParamExists('postExtinction', 'inlineObject', inlineObject)
            const localVarPath = `/api/v2/code-refs/repositories/{repo}/branches/{branch}`
                .replace(`{${"repo"}}`, encodeURIComponent(String(repo)))
                .replace(`{${"branch"}}`, encodeURIComponent(String(branch)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a repository with the specified name.
         * @summary Create repository
         * @param {RepositoryPost} repositoryPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postRepository: async (repositoryPost: RepositoryPost, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'repositoryPost' is not null or undefined
            assertParamExists('postRepository', 'repositoryPost', repositoryPost)
            const localVarPath = `/api/v2/code-refs/repositories`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(repositoryPost, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new branch if it doesn\'t exist, or updates the branch if it already exists.
         * @summary Upsert branch
         * @param {string} repo The repository name
         * @param {string} branch The url-encoded branch name
         * @param {BranchRep} branchRep 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putBranch: async (repo: string, branch: string, branchRep: BranchRep, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'repo' is not null or undefined
            assertParamExists('putBranch', 'repo', repo)
            // verify required parameter 'branch' is not null or undefined
            assertParamExists('putBranch', 'branch', branch)
            // verify required parameter 'branchRep' is not null or undefined
            assertParamExists('putBranch', 'branchRep', branchRep)
            const localVarPath = `/api/v2/code-refs/repositories/{repo}/branches/{branch}`
                .replace(`{${"repo"}}`, encodeURIComponent(String(repo)))
                .replace(`{${"branch"}}`, encodeURIComponent(String(branch)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(branchRep, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CodeReferencesApi - functional programming interface
 * @export
 */
export const CodeReferencesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CodeReferencesApiAxiosParamCreator(configuration)
    return {
        /**
         * Asynchronously delete a number of branches.
         * @summary Delete branches
         * @param {string} repo The repository name to delete branches for.
         * @param {Array<string>} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteBranches(repo: string, requestBody: Array<string>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteBranches(repo, requestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a repository with the specified name
         * @summary Delete repository
         * @param {string} repo The repository name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteRepository(repo: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRepository(repo, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a specific branch in a repository
         * @summary Get branch
         * @param {string} repo The repository name
         * @param {string} branch The url-encoded branch name
         * @param {string} [projKey] Filter results to a specific project
         * @param {string} [flagKey] Filter results to a specific flag key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBranch(repo: string, branch: string, projKey?: string, flagKey?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BranchRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBranch(repo, branch, projKey, flagKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of branches.
         * @summary List branches
         * @param {string} repo The repository name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBranches(repo: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BranchCollectionRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBranches(repo, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of all extinctions.
         * @summary List extinctions
         * @param {string} [repoName] Filter results to a specific repository
         * @param {string} [branchName] Filter results to a specific branch
         * @param {string} [projKey] Filter results to a specific project
         * @param {string} [flagKey] Filter results to a specific flag key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExtinctions(repoName?: string, branchName?: string, projKey?: string, flagKey?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExtinctionCollectionRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getExtinctions(repoName, branchName, projKey, flagKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of connected repositories. Optionally, you can include branch metadata with the `withBranches` query parameter. Embed references for the default branch with `ReferencesForDefaultBranch`. You can also filter the list of code references by project key and flag key.
         * @summary List repositories
         * @param {string} [withBranches] If set to any value, the endpoint returns repositories with associated branch data
         * @param {string} [withReferencesForDefaultBranch] If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch
         * @param {string} [projKey] A LaunchDarkly project key. If provided, this filters code reference results to the specified project.
         * @param {string} [flagKey] If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRepositories(withBranches?: string, withReferencesForDefaultBranch?: string, projKey?: string, flagKey?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RepositoryCollectionRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRepositories(withBranches, withReferencesForDefaultBranch, projKey, flagKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a single repository by name.
         * @summary Get repository
         * @param {string} repo The repository name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRepository(repo: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RepositoryRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRepository(repo, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get links for all projects that have Code References.
         * @summary Get number of code references for flags
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRootStatistic(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StatisticsRoot>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRootStatistic(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get the number of code references across repositories for all flags in your project that have code references in the default branch (for example: master). You can optionally include the `flagKey` query parameter to get the number of code references across repositories for a single flag. This endpoint returns the number of times your flag keys are referenced in your repositories. You can filter to a single flag with by passing in a flag key.
         * @summary Get number of code references for flags
         * @param {string} projKey The project key
         * @param {string} [flagKey] Filter results to a specific flag key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStatistics(projKey: string, flagKey?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StatisticCollectionRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStatistics(projKey, flagKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a repository\'s settings. The request must be a valid JSON Patch document describing the changes to be made to the repository.
         * @summary Update repository
         * @param {string} repo The repository name
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchRepository(repo: string, patchOperation: Array<PatchOperation>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RepositoryRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchRepository(repo, patchOperation, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a new extinction
         * @summary Create extinction
         * @param {string} repo The repository name
         * @param {string} branch The url-encoded branch name
         * @param {Array<InlineObject>} inlineObject 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postExtinction(repo: string, branch: string, inlineObject: Array<InlineObject>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postExtinction(repo, branch, inlineObject, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a repository with the specified name.
         * @summary Create repository
         * @param {RepositoryPost} repositoryPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postRepository(repositoryPost: RepositoryPost, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postRepository(repositoryPost, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a new branch if it doesn\'t exist, or updates the branch if it already exists.
         * @summary Upsert branch
         * @param {string} repo The repository name
         * @param {string} branch The url-encoded branch name
         * @param {BranchRep} branchRep 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putBranch(repo: string, branch: string, branchRep: BranchRep, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.putBranch(repo, branch, branchRep, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CodeReferencesApi - factory interface
 * @export
 */
export const CodeReferencesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CodeReferencesApiFp(configuration)
    return {
        /**
         * Asynchronously delete a number of branches.
         * @summary Delete branches
         * @param {string} repo The repository name to delete branches for.
         * @param {Array<string>} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBranches(repo: string, requestBody: Array<string>, options?: any): AxiosPromise<void> {
            return localVarFp.deleteBranches(repo, requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a repository with the specified name
         * @summary Delete repository
         * @param {string} repo The repository name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRepository(repo: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteRepository(repo, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a specific branch in a repository
         * @summary Get branch
         * @param {string} repo The repository name
         * @param {string} branch The url-encoded branch name
         * @param {string} [projKey] Filter results to a specific project
         * @param {string} [flagKey] Filter results to a specific flag key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBranch(repo: string, branch: string, projKey?: string, flagKey?: string, options?: any): AxiosPromise<BranchRep> {
            return localVarFp.getBranch(repo, branch, projKey, flagKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of branches.
         * @summary List branches
         * @param {string} repo The repository name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBranches(repo: string, options?: any): AxiosPromise<BranchCollectionRep> {
            return localVarFp.getBranches(repo, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of all extinctions.
         * @summary List extinctions
         * @param {string} [repoName] Filter results to a specific repository
         * @param {string} [branchName] Filter results to a specific branch
         * @param {string} [projKey] Filter results to a specific project
         * @param {string} [flagKey] Filter results to a specific flag key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExtinctions(repoName?: string, branchName?: string, projKey?: string, flagKey?: string, options?: any): AxiosPromise<ExtinctionCollectionRep> {
            return localVarFp.getExtinctions(repoName, branchName, projKey, flagKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of connected repositories. Optionally, you can include branch metadata with the `withBranches` query parameter. Embed references for the default branch with `ReferencesForDefaultBranch`. You can also filter the list of code references by project key and flag key.
         * @summary List repositories
         * @param {string} [withBranches] If set to any value, the endpoint returns repositories with associated branch data
         * @param {string} [withReferencesForDefaultBranch] If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch
         * @param {string} [projKey] A LaunchDarkly project key. If provided, this filters code reference results to the specified project.
         * @param {string} [flagKey] If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRepositories(withBranches?: string, withReferencesForDefaultBranch?: string, projKey?: string, flagKey?: string, options?: any): AxiosPromise<RepositoryCollectionRep> {
            return localVarFp.getRepositories(withBranches, withReferencesForDefaultBranch, projKey, flagKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a single repository by name.
         * @summary Get repository
         * @param {string} repo The repository name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRepository(repo: string, options?: any): AxiosPromise<RepositoryRep> {
            return localVarFp.getRepository(repo, options).then((request) => request(axios, basePath));
        },
        /**
         * Get links for all projects that have Code References.
         * @summary Get number of code references for flags
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRootStatistic(options?: any): AxiosPromise<StatisticsRoot> {
            return localVarFp.getRootStatistic(options).then((request) => request(axios, basePath));
        },
        /**
         * Get the number of code references across repositories for all flags in your project that have code references in the default branch (for example: master). You can optionally include the `flagKey` query parameter to get the number of code references across repositories for a single flag. This endpoint returns the number of times your flag keys are referenced in your repositories. You can filter to a single flag with by passing in a flag key.
         * @summary Get number of code references for flags
         * @param {string} projKey The project key
         * @param {string} [flagKey] Filter results to a specific flag key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStatistics(projKey: string, flagKey?: string, options?: any): AxiosPromise<StatisticCollectionRep> {
            return localVarFp.getStatistics(projKey, flagKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a repository\'s settings. The request must be a valid JSON Patch document describing the changes to be made to the repository.
         * @summary Update repository
         * @param {string} repo The repository name
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchRepository(repo: string, patchOperation: Array<PatchOperation>, options?: any): AxiosPromise<RepositoryRep> {
            return localVarFp.patchRepository(repo, patchOperation, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new extinction
         * @summary Create extinction
         * @param {string} repo The repository name
         * @param {string} branch The url-encoded branch name
         * @param {Array<InlineObject>} inlineObject 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postExtinction(repo: string, branch: string, inlineObject: Array<InlineObject>, options?: any): AxiosPromise<void> {
            return localVarFp.postExtinction(repo, branch, inlineObject, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a repository with the specified name.
         * @summary Create repository
         * @param {RepositoryPost} repositoryPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postRepository(repositoryPost: RepositoryPost, options?: any): AxiosPromise<void> {
            return localVarFp.postRepository(repositoryPost, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new branch if it doesn\'t exist, or updates the branch if it already exists.
         * @summary Upsert branch
         * @param {string} repo The repository name
         * @param {string} branch The url-encoded branch name
         * @param {BranchRep} branchRep 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putBranch(repo: string, branch: string, branchRep: BranchRep, options?: any): AxiosPromise<void> {
            return localVarFp.putBranch(repo, branch, branchRep, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CodeReferencesApi - object-oriented interface
 * @export
 * @class CodeReferencesApi
 * @extends {BaseAPI}
 */
export class CodeReferencesApi extends BaseAPI {
    /**
     * Asynchronously delete a number of branches.
     * @summary Delete branches
     * @param {string} repo The repository name to delete branches for.
     * @param {Array<string>} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeReferencesApi
     */
    public deleteBranches(repo: string, requestBody: Array<string>, options?: any) {
        return CodeReferencesApiFp(this.configuration).deleteBranches(repo, requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a repository with the specified name
     * @summary Delete repository
     * @param {string} repo The repository name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeReferencesApi
     */
    public deleteRepository(repo: string, options?: any) {
        return CodeReferencesApiFp(this.configuration).deleteRepository(repo, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a specific branch in a repository
     * @summary Get branch
     * @param {string} repo The repository name
     * @param {string} branch The url-encoded branch name
     * @param {string} [projKey] Filter results to a specific project
     * @param {string} [flagKey] Filter results to a specific flag key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeReferencesApi
     */
    public getBranch(repo: string, branch: string, projKey?: string, flagKey?: string, options?: any) {
        return CodeReferencesApiFp(this.configuration).getBranch(repo, branch, projKey, flagKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of branches.
     * @summary List branches
     * @param {string} repo The repository name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeReferencesApi
     */
    public getBranches(repo: string, options?: any) {
        return CodeReferencesApiFp(this.configuration).getBranches(repo, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of all extinctions.
     * @summary List extinctions
     * @param {string} [repoName] Filter results to a specific repository
     * @param {string} [branchName] Filter results to a specific branch
     * @param {string} [projKey] Filter results to a specific project
     * @param {string} [flagKey] Filter results to a specific flag key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeReferencesApi
     */
    public getExtinctions(repoName?: string, branchName?: string, projKey?: string, flagKey?: string, options?: any) {
        return CodeReferencesApiFp(this.configuration).getExtinctions(repoName, branchName, projKey, flagKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of connected repositories. Optionally, you can include branch metadata with the `withBranches` query parameter. Embed references for the default branch with `ReferencesForDefaultBranch`. You can also filter the list of code references by project key and flag key.
     * @summary List repositories
     * @param {string} [withBranches] If set to any value, the endpoint returns repositories with associated branch data
     * @param {string} [withReferencesForDefaultBranch] If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch
     * @param {string} [projKey] A LaunchDarkly project key. If provided, this filters code reference results to the specified project.
     * @param {string} [flagKey] If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeReferencesApi
     */
    public getRepositories(withBranches?: string, withReferencesForDefaultBranch?: string, projKey?: string, flagKey?: string, options?: any) {
        return CodeReferencesApiFp(this.configuration).getRepositories(withBranches, withReferencesForDefaultBranch, projKey, flagKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a single repository by name.
     * @summary Get repository
     * @param {string} repo The repository name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeReferencesApi
     */
    public getRepository(repo: string, options?: any) {
        return CodeReferencesApiFp(this.configuration).getRepository(repo, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get links for all projects that have Code References.
     * @summary Get number of code references for flags
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeReferencesApi
     */
    public getRootStatistic(options?: any) {
        return CodeReferencesApiFp(this.configuration).getRootStatistic(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get the number of code references across repositories for all flags in your project that have code references in the default branch (for example: master). You can optionally include the `flagKey` query parameter to get the number of code references across repositories for a single flag. This endpoint returns the number of times your flag keys are referenced in your repositories. You can filter to a single flag with by passing in a flag key.
     * @summary Get number of code references for flags
     * @param {string} projKey The project key
     * @param {string} [flagKey] Filter results to a specific flag key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeReferencesApi
     */
    public getStatistics(projKey: string, flagKey?: string, options?: any) {
        return CodeReferencesApiFp(this.configuration).getStatistics(projKey, flagKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a repository\'s settings. The request must be a valid JSON Patch document describing the changes to be made to the repository.
     * @summary Update repository
     * @param {string} repo The repository name
     * @param {Array<PatchOperation>} patchOperation 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeReferencesApi
     */
    public patchRepository(repo: string, patchOperation: Array<PatchOperation>, options?: any) {
        return CodeReferencesApiFp(this.configuration).patchRepository(repo, patchOperation, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new extinction
     * @summary Create extinction
     * @param {string} repo The repository name
     * @param {string} branch The url-encoded branch name
     * @param {Array<InlineObject>} inlineObject 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeReferencesApi
     */
    public postExtinction(repo: string, branch: string, inlineObject: Array<InlineObject>, options?: any) {
        return CodeReferencesApiFp(this.configuration).postExtinction(repo, branch, inlineObject, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a repository with the specified name.
     * @summary Create repository
     * @param {RepositoryPost} repositoryPost 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeReferencesApi
     */
    public postRepository(repositoryPost: RepositoryPost, options?: any) {
        return CodeReferencesApiFp(this.configuration).postRepository(repositoryPost, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new branch if it doesn\'t exist, or updates the branch if it already exists.
     * @summary Upsert branch
     * @param {string} repo The repository name
     * @param {string} branch The url-encoded branch name
     * @param {BranchRep} branchRep 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeReferencesApi
     */
    public putBranch(repo: string, branch: string, branchRep: BranchRep, options?: any) {
        return CodeReferencesApiFp(this.configuration).putBranch(repo, branch, branchRep, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * CustomRolesApi - axios parameter creator
 * @export
 */
export const CustomRolesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a custom role by key
         * @summary Delete custom role
         * @param {string} key The key of the custom role to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomRole: async (key: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('deleteCustomRole', 'key', key)
            const localVarPath = `/api/v2/roles/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a single custom role by key or ID
         * @summary Get custom role
         * @param {string} key The custom role\&#39;s key or ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomRole: async (key: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('getCustomRole', 'key', key)
            const localVarPath = `/api/v2/roles/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a complete list of custom roles. Custom roles let you create flexible policies providing fine-grained access control to everything in LaunchDarkly, from feature flags to goals, environments, and teams. With custom roles, it\'s possible to enforce access policies that meet your exact workflow needs. Custom roles are available to customers on our enterprise plans. If you\'re interested in learning more about our enterprise plans, contact sales@launchdarkly.com.
         * @summary List custom roles
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomRoles: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/roles`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a single custom role. The request must be a valid JSON Patch document describing the changes to be made to the custom role.
         * @summary Update custom role
         * @param {string} key The key of the custom role to update
         * @param {PatchWithComment} patchWithComment 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchCustomRole: async (key: string, patchWithComment: PatchWithComment, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('patchCustomRole', 'key', key)
            // verify required parameter 'patchWithComment' is not null or undefined
            assertParamExists('patchCustomRole', 'patchWithComment', patchWithComment)
            const localVarPath = `/api/v2/roles/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchWithComment, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new custom role
         * @summary Create custom role
         * @param {Array<StatementPost>} statementPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCustomRole: async (statementPost: Array<StatementPost>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'statementPost' is not null or undefined
            assertParamExists('postCustomRole', 'statementPost', statementPost)
            const localVarPath = `/api/v2/roles`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(statementPost, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CustomRolesApi - functional programming interface
 * @export
 */
export const CustomRolesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CustomRolesApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete a custom role by key
         * @summary Delete custom role
         * @param {string} key The key of the custom role to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCustomRole(key: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteCustomRole(key, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a single custom role by key or ID
         * @summary Get custom role
         * @param {string} key The custom role\&#39;s key or ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCustomRole(key: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomRolePost>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomRole(key, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a complete list of custom roles. Custom roles let you create flexible policies providing fine-grained access control to everything in LaunchDarkly, from feature flags to goals, environments, and teams. With custom roles, it\'s possible to enforce access policies that meet your exact workflow needs. Custom roles are available to customers on our enterprise plans. If you\'re interested in learning more about our enterprise plans, contact sales@launchdarkly.com.
         * @summary List custom roles
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCustomRoles(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomRoles>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomRoles(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a single custom role. The request must be a valid JSON Patch document describing the changes to be made to the custom role.
         * @summary Update custom role
         * @param {string} key The key of the custom role to update
         * @param {PatchWithComment} patchWithComment 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchCustomRole(key: string, patchWithComment: PatchWithComment, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomRole>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchCustomRole(key, patchWithComment, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a new custom role
         * @summary Create custom role
         * @param {Array<StatementPost>} statementPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postCustomRole(statementPost: Array<StatementPost>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomRole>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postCustomRole(statementPost, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CustomRolesApi - factory interface
 * @export
 */
export const CustomRolesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CustomRolesApiFp(configuration)
    return {
        /**
         * Delete a custom role by key
         * @summary Delete custom role
         * @param {string} key The key of the custom role to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomRole(key: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteCustomRole(key, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a single custom role by key or ID
         * @summary Get custom role
         * @param {string} key The custom role\&#39;s key or ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomRole(key: string, options?: any): AxiosPromise<CustomRolePost> {
            return localVarFp.getCustomRole(key, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a complete list of custom roles. Custom roles let you create flexible policies providing fine-grained access control to everything in LaunchDarkly, from feature flags to goals, environments, and teams. With custom roles, it\'s possible to enforce access policies that meet your exact workflow needs. Custom roles are available to customers on our enterprise plans. If you\'re interested in learning more about our enterprise plans, contact sales@launchdarkly.com.
         * @summary List custom roles
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomRoles(options?: any): AxiosPromise<CustomRoles> {
            return localVarFp.getCustomRoles(options).then((request) => request(axios, basePath));
        },
        /**
         * Update a single custom role. The request must be a valid JSON Patch document describing the changes to be made to the custom role.
         * @summary Update custom role
         * @param {string} key The key of the custom role to update
         * @param {PatchWithComment} patchWithComment 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchCustomRole(key: string, patchWithComment: PatchWithComment, options?: any): AxiosPromise<CustomRole> {
            return localVarFp.patchCustomRole(key, patchWithComment, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new custom role
         * @summary Create custom role
         * @param {Array<StatementPost>} statementPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCustomRole(statementPost: Array<StatementPost>, options?: any): AxiosPromise<CustomRole> {
            return localVarFp.postCustomRole(statementPost, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CustomRolesApi - object-oriented interface
 * @export
 * @class CustomRolesApi
 * @extends {BaseAPI}
 */
export class CustomRolesApi extends BaseAPI {
    /**
     * Delete a custom role by key
     * @summary Delete custom role
     * @param {string} key The key of the custom role to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomRolesApi
     */
    public deleteCustomRole(key: string, options?: any) {
        return CustomRolesApiFp(this.configuration).deleteCustomRole(key, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a single custom role by key or ID
     * @summary Get custom role
     * @param {string} key The custom role\&#39;s key or ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomRolesApi
     */
    public getCustomRole(key: string, options?: any) {
        return CustomRolesApiFp(this.configuration).getCustomRole(key, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a complete list of custom roles. Custom roles let you create flexible policies providing fine-grained access control to everything in LaunchDarkly, from feature flags to goals, environments, and teams. With custom roles, it\'s possible to enforce access policies that meet your exact workflow needs. Custom roles are available to customers on our enterprise plans. If you\'re interested in learning more about our enterprise plans, contact sales@launchdarkly.com.
     * @summary List custom roles
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomRolesApi
     */
    public getCustomRoles(options?: any) {
        return CustomRolesApiFp(this.configuration).getCustomRoles(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a single custom role. The request must be a valid JSON Patch document describing the changes to be made to the custom role.
     * @summary Update custom role
     * @param {string} key The key of the custom role to update
     * @param {PatchWithComment} patchWithComment 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomRolesApi
     */
    public patchCustomRole(key: string, patchWithComment: PatchWithComment, options?: any) {
        return CustomRolesApiFp(this.configuration).patchCustomRole(key, patchWithComment, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new custom role
     * @summary Create custom role
     * @param {Array<StatementPost>} statementPost 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomRolesApi
     */
    public postCustomRole(statementPost: Array<StatementPost>, options?: any) {
        return CustomRolesApiFp(this.configuration).postCustomRole(statementPost, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * DataExportDestinationsApi - axios parameter creator
 * @export
 */
export const DataExportDestinationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete Data Export destination by ID
         * @summary Delete Data Export destination
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} id The Data Export destination ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDestination: async (projKey: string, envKey: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('deleteDestination', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('deleteDestination', 'envKey', envKey)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteDestination', 'id', id)
            const localVarPath = `/api/v2/destinations/{projKey}/{envKey}/{id}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a single Data Export destination by ID
         * @summary Get destination
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} id The Data Export destination ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDestination: async (projKey: string, envKey: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('getDestination', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('getDestination', 'envKey', envKey)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getDestination', 'id', id)
            const localVarPath = `/api/v2/destinations/{projKey}/{envKey}/{id}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of Data Export destinations configured across all projects and environments.
         * @summary List destinations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDestinations: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/destinations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a Data Export destination. This requires a JSON Patch representation of the modified destination.
         * @summary Update Data Export destination
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} id The Data Export destination ID
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchDestination: async (projKey: string, envKey: string, id: string, patchOperation: Array<PatchOperation>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('patchDestination', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('patchDestination', 'envKey', envKey)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('patchDestination', 'id', id)
            // verify required parameter 'patchOperation' is not null or undefined
            assertParamExists('patchDestination', 'patchOperation', patchOperation)
            const localVarPath = `/api/v2/destinations/{projKey}/{envKey}/{id}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchOperation, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new destination. The `config` body parameter represents the configuration parameters required for a destination type.
         * @summary Create data export destination
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {DestinationPost} destinationPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postDestination: async (projKey: string, envKey: string, destinationPost: DestinationPost, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('postDestination', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('postDestination', 'envKey', envKey)
            // verify required parameter 'destinationPost' is not null or undefined
            assertParamExists('postDestination', 'destinationPost', destinationPost)
            const localVarPath = `/api/v2/destinations/{projKey}/{envKey}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(destinationPost, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DataExportDestinationsApi - functional programming interface
 * @export
 */
export const DataExportDestinationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DataExportDestinationsApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete Data Export destination by ID
         * @summary Delete Data Export destination
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} id The Data Export destination ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteDestination(projKey: string, envKey: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteDestination(projKey, envKey, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a single Data Export destination by ID
         * @summary Get destination
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} id The Data Export destination ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDestination(projKey: string, envKey: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Destination>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDestination(projKey, envKey, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of Data Export destinations configured across all projects and environments.
         * @summary List destinations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDestinations(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Destinations>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDestinations(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a Data Export destination. This requires a JSON Patch representation of the modified destination.
         * @summary Update Data Export destination
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} id The Data Export destination ID
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchDestination(projKey: string, envKey: string, id: string, patchOperation: Array<PatchOperation>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Destination>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchDestination(projKey, envKey, id, patchOperation, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a new destination. The `config` body parameter represents the configuration parameters required for a destination type.
         * @summary Create data export destination
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {DestinationPost} destinationPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postDestination(projKey: string, envKey: string, destinationPost: DestinationPost, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Destination>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postDestination(projKey, envKey, destinationPost, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DataExportDestinationsApi - factory interface
 * @export
 */
export const DataExportDestinationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DataExportDestinationsApiFp(configuration)
    return {
        /**
         * Delete Data Export destination by ID
         * @summary Delete Data Export destination
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} id The Data Export destination ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDestination(projKey: string, envKey: string, id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteDestination(projKey, envKey, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a single Data Export destination by ID
         * @summary Get destination
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} id The Data Export destination ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDestination(projKey: string, envKey: string, id: string, options?: any): AxiosPromise<Destination> {
            return localVarFp.getDestination(projKey, envKey, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of Data Export destinations configured across all projects and environments.
         * @summary List destinations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDestinations(options?: any): AxiosPromise<Destinations> {
            return localVarFp.getDestinations(options).then((request) => request(axios, basePath));
        },
        /**
         * Update a Data Export destination. This requires a JSON Patch representation of the modified destination.
         * @summary Update Data Export destination
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} id The Data Export destination ID
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchDestination(projKey: string, envKey: string, id: string, patchOperation: Array<PatchOperation>, options?: any): AxiosPromise<Destination> {
            return localVarFp.patchDestination(projKey, envKey, id, patchOperation, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new destination. The `config` body parameter represents the configuration parameters required for a destination type.
         * @summary Create data export destination
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {DestinationPost} destinationPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postDestination(projKey: string, envKey: string, destinationPost: DestinationPost, options?: any): AxiosPromise<Destination> {
            return localVarFp.postDestination(projKey, envKey, destinationPost, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DataExportDestinationsApi - object-oriented interface
 * @export
 * @class DataExportDestinationsApi
 * @extends {BaseAPI}
 */
export class DataExportDestinationsApi extends BaseAPI {
    /**
     * Delete Data Export destination by ID
     * @summary Delete Data Export destination
     * @param {string} projKey The project key
     * @param {string} envKey The environment key
     * @param {string} id The Data Export destination ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataExportDestinationsApi
     */
    public deleteDestination(projKey: string, envKey: string, id: string, options?: any) {
        return DataExportDestinationsApiFp(this.configuration).deleteDestination(projKey, envKey, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a single Data Export destination by ID
     * @summary Get destination
     * @param {string} projKey The project key
     * @param {string} envKey The environment key
     * @param {string} id The Data Export destination ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataExportDestinationsApi
     */
    public getDestination(projKey: string, envKey: string, id: string, options?: any) {
        return DataExportDestinationsApiFp(this.configuration).getDestination(projKey, envKey, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of Data Export destinations configured across all projects and environments.
     * @summary List destinations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataExportDestinationsApi
     */
    public getDestinations(options?: any) {
        return DataExportDestinationsApiFp(this.configuration).getDestinations(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a Data Export destination. This requires a JSON Patch representation of the modified destination.
     * @summary Update Data Export destination
     * @param {string} projKey The project key
     * @param {string} envKey The environment key
     * @param {string} id The Data Export destination ID
     * @param {Array<PatchOperation>} patchOperation 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataExportDestinationsApi
     */
    public patchDestination(projKey: string, envKey: string, id: string, patchOperation: Array<PatchOperation>, options?: any) {
        return DataExportDestinationsApiFp(this.configuration).patchDestination(projKey, envKey, id, patchOperation, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new destination. The `config` body parameter represents the configuration parameters required for a destination type.
     * @summary Create data export destination
     * @param {string} projKey The project key
     * @param {string} envKey The environment key
     * @param {DestinationPost} destinationPost 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataExportDestinationsApi
     */
    public postDestination(projKey: string, envKey: string, destinationPost: DestinationPost, options?: any) {
        return DataExportDestinationsApiFp(this.configuration).postDestination(projKey, envKey, destinationPost, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * EnvironmentsApi - axios parameter creator
 * @export
 */
export const EnvironmentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a environment by key.
         * @summary Delete environment
         * @param {string} projectKey The project key
         * @param {string} environmentKey The environment key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteEnvironment: async (projectKey: string, environmentKey: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('deleteEnvironment', 'projectKey', projectKey)
            // verify required parameter 'environmentKey' is not null or undefined
            assertParamExists('deleteEnvironment', 'environmentKey', environmentKey)
            const localVarPath = `/api/v2/projects/{projectKey}/environments/{environmentKey}`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)))
                .replace(`{${"environmentKey"}}`, encodeURIComponent(String(environmentKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * > ### Approval settings > > The `approvalSettings` key is only returned when the Flag Approvals feature is enabled.  Get an environment given a project and key. 
         * @summary Get environment
         * @param {string} projectKey The project key
         * @param {string} environmentKey The environment key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEnvironment: async (projectKey: string, environmentKey: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('getEnvironment', 'projectKey', projectKey)
            // verify required parameter 'environmentKey' is not null or undefined
            assertParamExists('getEnvironment', 'environmentKey', environmentKey)
            const localVarPath = `/api/v2/projects/{projectKey}/environments/{environmentKey}`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)))
                .replace(`{${"environmentKey"}}`, encodeURIComponent(String(environmentKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * > ### Approval settings > > The `approvalSettings` key is only returned when the Flag Approvals feature is enabled. > > Only the `canReviewOwnRequest`, `canApplyDeclinedChanges`, `minNumApprovals`, `required` and `requiredApprovalTagsfields` are editable. > > If you try to patch the environment by setting both `required` and `requiredApprovalTags`, it fails and an error appears. Users can specify either required approvals for all flags in an environment or those with specific tags, but not both. Only customers on an Enterprise plan can require approval for flag updates by either mechanism. 
         * @summary Update environment
         * @param {string} projectKey The project key
         * @param {string} environmentKey The environment key
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchEnvironment: async (projectKey: string, environmentKey: string, patchOperation: Array<PatchOperation>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('patchEnvironment', 'projectKey', projectKey)
            // verify required parameter 'environmentKey' is not null or undefined
            assertParamExists('patchEnvironment', 'environmentKey', environmentKey)
            // verify required parameter 'patchOperation' is not null or undefined
            assertParamExists('patchEnvironment', 'patchOperation', patchOperation)
            const localVarPath = `/api/v2/projects/{projectKey}/environments/{environmentKey}`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)))
                .replace(`{${"environmentKey"}}`, encodeURIComponent(String(environmentKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchOperation, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * > ### Approval settings > > The `approvalSettings` key is only returned when the Flag Approvals feature is enabled.  Create a new environment in a specified project with a given name, key, swatch color, and default TTL. 
         * @summary Create environment
         * @param {string} projectKey The project key
         * @param {EnvironmentPost} environmentPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postEnvironment: async (projectKey: string, environmentPost: EnvironmentPost, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('postEnvironment', 'projectKey', projectKey)
            // verify required parameter 'environmentPost' is not null or undefined
            assertParamExists('postEnvironment', 'environmentPost', environmentPost)
            const localVarPath = `/api/v2/projects/{projectKey}/environments`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(environmentPost, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Reset an environment\'s mobile key. The optional expiry for the old key is deprecated for this endpoint, so the old key will always expire immediately.
         * @summary Reset environment mobile SDK key
         * @param {string} projectKey The project key
         * @param {string} envKey The environment key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetEnvironmentMobileKey: async (projectKey: string, envKey: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('resetEnvironmentMobileKey', 'projectKey', projectKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('resetEnvironmentMobileKey', 'envKey', envKey)
            const localVarPath = `/api/v2/projects/{projectKey}/environments/{envKey}/mobileKey`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Reset an environment\'s SDK key with an optional expiry time for the old key.
         * @summary Reset environment SDK key
         * @param {string} projectKey The project key
         * @param {string} envKey The environment key
         * @param {number} [expiry] The time at which you want the old SDK key to expire, in UNIX milliseconds. By default, the key expires immediately.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetEnvironmentSDKKey: async (projectKey: string, envKey: string, expiry?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('resetEnvironmentSDKKey', 'projectKey', projectKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('resetEnvironmentSDKKey', 'envKey', envKey)
            const localVarPath = `/api/v2/projects/{projectKey}/environments/{envKey}/apiKey`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (expiry !== undefined) {
                localVarQueryParameter['expiry'] = expiry;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EnvironmentsApi - functional programming interface
 * @export
 */
export const EnvironmentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EnvironmentsApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete a environment by key.
         * @summary Delete environment
         * @param {string} projectKey The project key
         * @param {string} environmentKey The environment key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteEnvironment(projectKey: string, environmentKey: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteEnvironment(projectKey, environmentKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * > ### Approval settings > > The `approvalSettings` key is only returned when the Flag Approvals feature is enabled.  Get an environment given a project and key. 
         * @summary Get environment
         * @param {string} projectKey The project key
         * @param {string} environmentKey The environment key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEnvironment(projectKey: string, environmentKey: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Environment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEnvironment(projectKey, environmentKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * > ### Approval settings > > The `approvalSettings` key is only returned when the Flag Approvals feature is enabled. > > Only the `canReviewOwnRequest`, `canApplyDeclinedChanges`, `minNumApprovals`, `required` and `requiredApprovalTagsfields` are editable. > > If you try to patch the environment by setting both `required` and `requiredApprovalTags`, it fails and an error appears. Users can specify either required approvals for all flags in an environment or those with specific tags, but not both. Only customers on an Enterprise plan can require approval for flag updates by either mechanism. 
         * @summary Update environment
         * @param {string} projectKey The project key
         * @param {string} environmentKey The environment key
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchEnvironment(projectKey: string, environmentKey: string, patchOperation: Array<PatchOperation>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Environment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchEnvironment(projectKey, environmentKey, patchOperation, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * > ### Approval settings > > The `approvalSettings` key is only returned when the Flag Approvals feature is enabled.  Create a new environment in a specified project with a given name, key, swatch color, and default TTL. 
         * @summary Create environment
         * @param {string} projectKey The project key
         * @param {EnvironmentPost} environmentPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postEnvironment(projectKey: string, environmentPost: EnvironmentPost, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Environment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postEnvironment(projectKey, environmentPost, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Reset an environment\'s mobile key. The optional expiry for the old key is deprecated for this endpoint, so the old key will always expire immediately.
         * @summary Reset environment mobile SDK key
         * @param {string} projectKey The project key
         * @param {string} envKey The environment key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resetEnvironmentMobileKey(projectKey: string, envKey: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Environment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetEnvironmentMobileKey(projectKey, envKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Reset an environment\'s SDK key with an optional expiry time for the old key.
         * @summary Reset environment SDK key
         * @param {string} projectKey The project key
         * @param {string} envKey The environment key
         * @param {number} [expiry] The time at which you want the old SDK key to expire, in UNIX milliseconds. By default, the key expires immediately.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resetEnvironmentSDKKey(projectKey: string, envKey: string, expiry?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Environment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetEnvironmentSDKKey(projectKey, envKey, expiry, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EnvironmentsApi - factory interface
 * @export
 */
export const EnvironmentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EnvironmentsApiFp(configuration)
    return {
        /**
         * Delete a environment by key.
         * @summary Delete environment
         * @param {string} projectKey The project key
         * @param {string} environmentKey The environment key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteEnvironment(projectKey: string, environmentKey: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteEnvironment(projectKey, environmentKey, options).then((request) => request(axios, basePath));
        },
        /**
         * > ### Approval settings > > The `approvalSettings` key is only returned when the Flag Approvals feature is enabled.  Get an environment given a project and key. 
         * @summary Get environment
         * @param {string} projectKey The project key
         * @param {string} environmentKey The environment key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEnvironment(projectKey: string, environmentKey: string, options?: any): AxiosPromise<Environment> {
            return localVarFp.getEnvironment(projectKey, environmentKey, options).then((request) => request(axios, basePath));
        },
        /**
         * > ### Approval settings > > The `approvalSettings` key is only returned when the Flag Approvals feature is enabled. > > Only the `canReviewOwnRequest`, `canApplyDeclinedChanges`, `minNumApprovals`, `required` and `requiredApprovalTagsfields` are editable. > > If you try to patch the environment by setting both `required` and `requiredApprovalTags`, it fails and an error appears. Users can specify either required approvals for all flags in an environment or those with specific tags, but not both. Only customers on an Enterprise plan can require approval for flag updates by either mechanism. 
         * @summary Update environment
         * @param {string} projectKey The project key
         * @param {string} environmentKey The environment key
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchEnvironment(projectKey: string, environmentKey: string, patchOperation: Array<PatchOperation>, options?: any): AxiosPromise<Environment> {
            return localVarFp.patchEnvironment(projectKey, environmentKey, patchOperation, options).then((request) => request(axios, basePath));
        },
        /**
         * > ### Approval settings > > The `approvalSettings` key is only returned when the Flag Approvals feature is enabled.  Create a new environment in a specified project with a given name, key, swatch color, and default TTL. 
         * @summary Create environment
         * @param {string} projectKey The project key
         * @param {EnvironmentPost} environmentPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postEnvironment(projectKey: string, environmentPost: EnvironmentPost, options?: any): AxiosPromise<Environment> {
            return localVarFp.postEnvironment(projectKey, environmentPost, options).then((request) => request(axios, basePath));
        },
        /**
         * Reset an environment\'s mobile key. The optional expiry for the old key is deprecated for this endpoint, so the old key will always expire immediately.
         * @summary Reset environment mobile SDK key
         * @param {string} projectKey The project key
         * @param {string} envKey The environment key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetEnvironmentMobileKey(projectKey: string, envKey: string, options?: any): AxiosPromise<Environment> {
            return localVarFp.resetEnvironmentMobileKey(projectKey, envKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Reset an environment\'s SDK key with an optional expiry time for the old key.
         * @summary Reset environment SDK key
         * @param {string} projectKey The project key
         * @param {string} envKey The environment key
         * @param {number} [expiry] The time at which you want the old SDK key to expire, in UNIX milliseconds. By default, the key expires immediately.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetEnvironmentSDKKey(projectKey: string, envKey: string, expiry?: number, options?: any): AxiosPromise<Environment> {
            return localVarFp.resetEnvironmentSDKKey(projectKey, envKey, expiry, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EnvironmentsApi - object-oriented interface
 * @export
 * @class EnvironmentsApi
 * @extends {BaseAPI}
 */
export class EnvironmentsApi extends BaseAPI {
    /**
     * Delete a environment by key.
     * @summary Delete environment
     * @param {string} projectKey The project key
     * @param {string} environmentKey The environment key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnvironmentsApi
     */
    public deleteEnvironment(projectKey: string, environmentKey: string, options?: any) {
        return EnvironmentsApiFp(this.configuration).deleteEnvironment(projectKey, environmentKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * > ### Approval settings > > The `approvalSettings` key is only returned when the Flag Approvals feature is enabled.  Get an environment given a project and key. 
     * @summary Get environment
     * @param {string} projectKey The project key
     * @param {string} environmentKey The environment key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnvironmentsApi
     */
    public getEnvironment(projectKey: string, environmentKey: string, options?: any) {
        return EnvironmentsApiFp(this.configuration).getEnvironment(projectKey, environmentKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * > ### Approval settings > > The `approvalSettings` key is only returned when the Flag Approvals feature is enabled. > > Only the `canReviewOwnRequest`, `canApplyDeclinedChanges`, `minNumApprovals`, `required` and `requiredApprovalTagsfields` are editable. > > If you try to patch the environment by setting both `required` and `requiredApprovalTags`, it fails and an error appears. Users can specify either required approvals for all flags in an environment or those with specific tags, but not both. Only customers on an Enterprise plan can require approval for flag updates by either mechanism. 
     * @summary Update environment
     * @param {string} projectKey The project key
     * @param {string} environmentKey The environment key
     * @param {Array<PatchOperation>} patchOperation 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnvironmentsApi
     */
    public patchEnvironment(projectKey: string, environmentKey: string, patchOperation: Array<PatchOperation>, options?: any) {
        return EnvironmentsApiFp(this.configuration).patchEnvironment(projectKey, environmentKey, patchOperation, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * > ### Approval settings > > The `approvalSettings` key is only returned when the Flag Approvals feature is enabled.  Create a new environment in a specified project with a given name, key, swatch color, and default TTL. 
     * @summary Create environment
     * @param {string} projectKey The project key
     * @param {EnvironmentPost} environmentPost 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnvironmentsApi
     */
    public postEnvironment(projectKey: string, environmentPost: EnvironmentPost, options?: any) {
        return EnvironmentsApiFp(this.configuration).postEnvironment(projectKey, environmentPost, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reset an environment\'s mobile key. The optional expiry for the old key is deprecated for this endpoint, so the old key will always expire immediately.
     * @summary Reset environment mobile SDK key
     * @param {string} projectKey The project key
     * @param {string} envKey The environment key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnvironmentsApi
     */
    public resetEnvironmentMobileKey(projectKey: string, envKey: string, options?: any) {
        return EnvironmentsApiFp(this.configuration).resetEnvironmentMobileKey(projectKey, envKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reset an environment\'s SDK key with an optional expiry time for the old key.
     * @summary Reset environment SDK key
     * @param {string} projectKey The project key
     * @param {string} envKey The environment key
     * @param {number} [expiry] The time at which you want the old SDK key to expire, in UNIX milliseconds. By default, the key expires immediately.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnvironmentsApi
     */
    public resetEnvironmentSDKKey(projectKey: string, envKey: string, expiry?: number, options?: any) {
        return EnvironmentsApiFp(this.configuration).resetEnvironmentSDKKey(projectKey, envKey, expiry, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * ExperimentsBetaApi - axios parameter creator
 * @export
 */
export const ExperimentsBetaApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get detailed experiment result data
         * @summary Get experiment results
         * @param {string} projKey The project key
         * @param {string} flagKey The flag key
         * @param {string} envKey The environment key
         * @param {string} metricKey The metric key
         * @param {number} [from] A timestamp denoting the start of the data collection period, expressed as a Unix epoch time in milliseconds.
         * @param {number} [to] A timestamp denoting the end of the data collection period, expressed as a Unix epoch time in milliseconds.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExperiment: async (projKey: string, flagKey: string, envKey: string, metricKey: string, from?: number, to?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('getExperiment', 'projKey', projKey)
            // verify required parameter 'flagKey' is not null or undefined
            assertParamExists('getExperiment', 'flagKey', flagKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('getExperiment', 'envKey', envKey)
            // verify required parameter 'metricKey' is not null or undefined
            assertParamExists('getExperiment', 'metricKey', metricKey)
            const localVarPath = `/api/v2/flags/{projKey}/{flagKey}/experiments/{envKey}/{metricKey}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"flagKey"}}`, encodeURIComponent(String(flagKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)))
                .replace(`{${"metricKey"}}`, encodeURIComponent(String(metricKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = to;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Reset all experiment results by deleting all existing data for an experiment
         * @summary Reset experiment results
         * @param {string} projKey The project key
         * @param {string} flagKey The feature flag\&#39;s key
         * @param {string} envKey The environment key
         * @param {string} metricKey The metric\&#39;s key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetExperiment: async (projKey: string, flagKey: string, envKey: string, metricKey: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('resetExperiment', 'projKey', projKey)
            // verify required parameter 'flagKey' is not null or undefined
            assertParamExists('resetExperiment', 'flagKey', flagKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('resetExperiment', 'envKey', envKey)
            // verify required parameter 'metricKey' is not null or undefined
            assertParamExists('resetExperiment', 'metricKey', metricKey)
            const localVarPath = `/api/v2/flags/{projKey}/{flagKey}/experiments/{envKey}/{metricKey}/results`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"flagKey"}}`, encodeURIComponent(String(flagKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)))
                .replace(`{${"metricKey"}}`, encodeURIComponent(String(metricKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ExperimentsBetaApi - functional programming interface
 * @export
 */
export const ExperimentsBetaApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ExperimentsBetaApiAxiosParamCreator(configuration)
    return {
        /**
         * Get detailed experiment result data
         * @summary Get experiment results
         * @param {string} projKey The project key
         * @param {string} flagKey The flag key
         * @param {string} envKey The environment key
         * @param {string} metricKey The metric key
         * @param {number} [from] A timestamp denoting the start of the data collection period, expressed as a Unix epoch time in milliseconds.
         * @param {number} [to] A timestamp denoting the end of the data collection period, expressed as a Unix epoch time in milliseconds.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExperiment(projKey: string, flagKey: string, envKey: string, metricKey: string, from?: number, to?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExperimentResultsRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getExperiment(projKey, flagKey, envKey, metricKey, from, to, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Reset all experiment results by deleting all existing data for an experiment
         * @summary Reset experiment results
         * @param {string} projKey The project key
         * @param {string} flagKey The feature flag\&#39;s key
         * @param {string} envKey The environment key
         * @param {string} metricKey The metric\&#39;s key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resetExperiment(projKey: string, flagKey: string, envKey: string, metricKey: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetExperiment(projKey, flagKey, envKey, metricKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ExperimentsBetaApi - factory interface
 * @export
 */
export const ExperimentsBetaApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ExperimentsBetaApiFp(configuration)
    return {
        /**
         * Get detailed experiment result data
         * @summary Get experiment results
         * @param {string} projKey The project key
         * @param {string} flagKey The flag key
         * @param {string} envKey The environment key
         * @param {string} metricKey The metric key
         * @param {number} [from] A timestamp denoting the start of the data collection period, expressed as a Unix epoch time in milliseconds.
         * @param {number} [to] A timestamp denoting the end of the data collection period, expressed as a Unix epoch time in milliseconds.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExperiment(projKey: string, flagKey: string, envKey: string, metricKey: string, from?: number, to?: number, options?: any): AxiosPromise<ExperimentResultsRep> {
            return localVarFp.getExperiment(projKey, flagKey, envKey, metricKey, from, to, options).then((request) => request(axios, basePath));
        },
        /**
         * Reset all experiment results by deleting all existing data for an experiment
         * @summary Reset experiment results
         * @param {string} projKey The project key
         * @param {string} flagKey The feature flag\&#39;s key
         * @param {string} envKey The environment key
         * @param {string} metricKey The metric\&#39;s key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetExperiment(projKey: string, flagKey: string, envKey: string, metricKey: string, options?: any): AxiosPromise<void> {
            return localVarFp.resetExperiment(projKey, flagKey, envKey, metricKey, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ExperimentsBetaApi - object-oriented interface
 * @export
 * @class ExperimentsBetaApi
 * @extends {BaseAPI}
 */
export class ExperimentsBetaApi extends BaseAPI {
    /**
     * Get detailed experiment result data
     * @summary Get experiment results
     * @param {string} projKey The project key
     * @param {string} flagKey The flag key
     * @param {string} envKey The environment key
     * @param {string} metricKey The metric key
     * @param {number} [from] A timestamp denoting the start of the data collection period, expressed as a Unix epoch time in milliseconds.
     * @param {number} [to] A timestamp denoting the end of the data collection period, expressed as a Unix epoch time in milliseconds.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExperimentsBetaApi
     */
    public getExperiment(projKey: string, flagKey: string, envKey: string, metricKey: string, from?: number, to?: number, options?: any) {
        return ExperimentsBetaApiFp(this.configuration).getExperiment(projKey, flagKey, envKey, metricKey, from, to, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reset all experiment results by deleting all existing data for an experiment
     * @summary Reset experiment results
     * @param {string} projKey The project key
     * @param {string} flagKey The feature flag\&#39;s key
     * @param {string} envKey The environment key
     * @param {string} metricKey The metric\&#39;s key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExperimentsBetaApi
     */
    public resetExperiment(projKey: string, flagKey: string, envKey: string, metricKey: string, options?: any) {
        return ExperimentsBetaApiFp(this.configuration).resetExperiment(projKey, flagKey, envKey, metricKey, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * FeatureFlagsApi - axios parameter creator
 * @export
 */
export const FeatureFlagsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * The includedActions and excludedActions define the parts of the flag configuration that are copied or not copied. By default, the entire flag configuration is copied.  You can have either `includedActions` or `excludedActions` but not both.  Valid `includedActions` and `excludedActions` include:  - `updateOn` - `updatePrerequisites` - `updateTargets` - `updateRules` - `updateFallthrough` - `updateOffVariation`    The `source` and `target` must be JSON objects if using curl, specifying the environment key and (optional) current flag configuration version in that environment. For example:  ```json {   \"key\": \"production\",   \"currentVersion\": 3 } ```  If target is specified as above, the API will test to ensure that the current flag version in the `production` environment is `3`, and reject attempts to copy settings to `production` otherwise. You can use this to enforce optimistic locking on copy attempts. 
         * @summary Copy feature flag
         * @param {string} projKey The project key.
         * @param {string} featureFlagKey The feature flag\&#39;s key. The key identifies the flag in your code.
         * @param {FlagCopyConfigPost} flagCopyConfigPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        copyFeatureFlag: async (projKey: string, featureFlagKey: string, flagCopyConfigPost: FlagCopyConfigPost, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('copyFeatureFlag', 'projKey', projKey)
            // verify required parameter 'featureFlagKey' is not null or undefined
            assertParamExists('copyFeatureFlag', 'featureFlagKey', featureFlagKey)
            // verify required parameter 'flagCopyConfigPost' is not null or undefined
            assertParamExists('copyFeatureFlag', 'flagCopyConfigPost', flagCopyConfigPost)
            const localVarPath = `/api/v2/flags/{projKey}/{featureFlagKey}/copy`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"featureFlagKey"}}`, encodeURIComponent(String(featureFlagKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(flagCopyConfigPost, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a feature flag in all environments. Use with caution: only delete feature flags your application no longer uses.
         * @summary Delete feature flag
         * @param {string} projKey The project key.
         * @param {string} key The feature flag\&#39;s key. The key identifies the flag in your code.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFeatureFlag: async (projKey: string, key: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('deleteFeatureFlag', 'projKey', projKey)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('deleteFeatureFlag', 'key', key)
            const localVarPath = `/api/v2/flags/{projKey}/{key}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of user targets on a feature flag that are scheduled for removal.
         * @summary Get expiring user targets for feature flag
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} flagKey The feature flag key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExpiringUserTargets: async (projKey: string, envKey: string, flagKey: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('getExpiringUserTargets', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('getExpiringUserTargets', 'envKey', envKey)
            // verify required parameter 'flagKey' is not null or undefined
            assertParamExists('getExpiringUserTargets', 'flagKey', flagKey)
            const localVarPath = `/api/v2/flags/{projKey}/{flagKey}/expiring-user-targets/{envKey}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)))
                .replace(`{${"flagKey"}}`, encodeURIComponent(String(flagKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a single feature flag by key. By default, this returns the configurations for all environments. You can filter environments with the `env` query parameter. For example, setting `env=production` restricts the returned configurations to just the `production` environment.
         * @summary Get feature flag
         * @param {string} projKey The project key
         * @param {string} key The feature flag key
         * @param {string} [env] Filter configurations by environment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeatureFlag: async (projKey: string, key: string, env?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('getFeatureFlag', 'projKey', projKey)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('getFeatureFlag', 'key', key)
            const localVarPath = `/api/v2/flags/{projKey}/{key}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (env !== undefined) {
                localVarQueryParameter['env'] = env;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the status for a particular feature flag.
         * @summary Get feature flag status
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} key The feature flag key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeatureFlagStatus: async (projKey: string, envKey: string, key: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('getFeatureFlagStatus', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('getFeatureFlagStatus', 'envKey', envKey)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('getFeatureFlagStatus', 'key', key)
            const localVarPath = `/api/v2/flag-statuses/{projKey}/{envKey}/{key}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)))
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the status for a particular feature flag across environments.
         * @summary Get flag status across environments
         * @param {string} projKey The project key
         * @param {string} key The feature flag key
         * @param {string} [env] Optional environment filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeatureFlagStatusAcrossEnvironments: async (projKey: string, key: string, env?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('getFeatureFlagStatusAcrossEnvironments', 'projKey', projKey)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('getFeatureFlagStatusAcrossEnvironments', 'key', key)
            const localVarPath = `/api/v2/flag-status/{projKey}/{key}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (env !== undefined) {
                localVarQueryParameter['env'] = env;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of statuses for all feature flags. The status includes the last time the feature flag was requested, as well as a state, which is one of the following:  - `new`: the feature flag was created within the last seven days, and has not been requested yet - `active`: the feature flag was requested by your servers or clients within the last seven days - `inactive`: the feature flag was created more than seven days ago, and hasn\'t been requested by your servers or clients within the past seven days - `launched`: one variation of the feature flag has been rolled out to all your users for at least 7 days 
         * @summary List feature flag statuses
         * @param {string} projKey The project key
         * @param {string} envKey Filter configurations by environment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeatureFlagStatuses: async (projKey: string, envKey: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('getFeatureFlagStatuses', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('getFeatureFlagStatuses', 'envKey', envKey)
            const localVarPath = `/api/v2/flag-statuses/{projKey}/{envKey}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of all features in the given project. By default, each feature includes configurations for each environment. You can filter environments with the env query parameter. For example, setting `env=production` restricts the returned configurations to just your production environment. You can also filter feature flags by tag with the tag query parameter.  We support the following fields for filters:  - `query` is a string that matches against the flags\' keys and names. It is not case sensitive. - `archived` is a boolean to filter the list to archived flags. When this is absent, only unarchived flags are returned. - `type` is a string allowing filtering to `temporary` or `permanent` flags. - `status` is a string allowing filtering to `new`, `inactive`, `active`, or `launched` flags in the specified environment. This filter also requires a `filterEnv` field to be set to a valid environment. For example: `filter=status:active,filterEnv:production`. - `tags` is a + separated list of tags. It filters the list to members who have all of the tags in the list. - `hasExperiment` is a boolean with values of true or false and returns any flags that have an attached metric. - `hasDataExport` is a boolean with values of true or false and returns any flags that are currently exporting data in the specified environment. This includes flags that are exporting data via Experimentation. This filter also requires a `filterEnv` field to be set to a valid environment key. e.g. `filter=hasExperiment:true,filterEnv:production` - `evaluated` is an object that contains a key of `after` and a value in Unix time in milliseconds. This returns all flags that have been evaluated since the time you specify in the environment provided. This filter also requires a `filterEnv` field to be set to a valid environment. For example: `filter=evaluated:{\"after\": 1590768455282},filterEnv:production`. - `filterEnv` is a string with the key of a valid environment. The filterEnv field is used for filters that are environment specific. If there are multiple environment specific filters you should only declare this parameter once. For example: `filter=evaluated:{\"after\": 1590768455282},filterEnv:production,status:active`.  An example filter is `query:abc,tags:foo+bar`. This matches flags with the string `abc` in their key or name, ignoring case, which also have the tags `foo` and `bar`.  By default, this returns all flags. You can page through the list with the `limit` parameter and by following the `first`, `prev`, `next`, and `last` links in the returned `_links` field. These links will not be present if the pages they refer to don\'t exist. For example, the `first` and `prev` links will be missing from the response on the first page. 
         * @summary List feature flags
         * @param {string} projKey The project key
         * @param {string} [env] Filter configurations by environment
         * @param {string} [tag] Filter feature flags by tag
         * @param {number} [limit] The number of feature flags to return. Defaults to -1, which returns all flags
         * @param {number} [offset] Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next limit items
         * @param {string} [query] A string that matches against the flags\&#39; keys and names. It is not case sensitive
         * @param {boolean} [archived] A boolean to filter the list to archived flags. When this is absent, only unarchived flags will be returned
         * @param {boolean} [summary] By default in API version &gt;&#x3D; 1, flags will _not_ include their list of prerequisites, targets or rules.  Set summary&#x3D;0 to include these fields for each flag returned
         * @param {string} [filter] A comma-separated list of filters. Each filter is of the form field:value
         * @param {string} [sort] A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeatureFlags: async (projKey: string, env?: string, tag?: string, limit?: number, offset?: number, query?: string, archived?: boolean, summary?: boolean, filter?: string, sort?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('getFeatureFlags', 'projKey', projKey)
            const localVarPath = `/api/v2/flags/{projKey}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (env !== undefined) {
                localVarQueryParameter['env'] = env;
            }

            if (tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (query !== undefined) {
                localVarQueryParameter['query'] = query;
            }

            if (archived !== undefined) {
                localVarQueryParameter['archived'] = archived;
            }

            if (summary !== undefined) {
                localVarQueryParameter['summary'] = summary;
            }

            if (filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update the list of user targets on a feature flag that are scheduled for removal.
         * @summary Update expiring user targets on feature flag
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} flagKey The feature flag key.
         * @param {PatchWithComment} patchWithComment 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchExpiringUserTargets: async (projKey: string, envKey: string, flagKey: string, patchWithComment: PatchWithComment, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('patchExpiringUserTargets', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('patchExpiringUserTargets', 'envKey', envKey)
            // verify required parameter 'flagKey' is not null or undefined
            assertParamExists('patchExpiringUserTargets', 'flagKey', flagKey)
            // verify required parameter 'patchWithComment' is not null or undefined
            assertParamExists('patchExpiringUserTargets', 'patchWithComment', patchWithComment)
            const localVarPath = `/api/v2/flags/{projKey}/{flagKey}/expiring-user-targets/{envKey}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)))
                .replace(`{${"flagKey"}}`, encodeURIComponent(String(flagKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchWithComment, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Perform a partial update to a feature
         * @summary Update feature flag
         * @param {string} projKey The project key.
         * @param {string} key The feature flag\&#39;s key. The key identifies the flag in your code.
         * @param {PatchWithComment} patchWithComment 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchFeatureFlag: async (projKey: string, key: string, patchWithComment: PatchWithComment, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('patchFeatureFlag', 'projKey', projKey)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('patchFeatureFlag', 'key', key)
            // verify required parameter 'patchWithComment' is not null or undefined
            assertParamExists('patchFeatureFlag', 'patchWithComment', patchWithComment)
            const localVarPath = `/api/v2/flags/{projKey}/{key}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchWithComment, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a feature flag with the given name, key, and variations
         * @summary Create a feature flag
         * @param {string} projKey The project key.
         * @param {FeatureFlagBody} featureFlagBody 
         * @param {string} [clone] The key of the feature flag to be cloned. The key identifies the flag in your code. For example, setting &#x60;clone&#x3D;flagKey&#x60; copies the full targeting configuration for all environments, including &#x60;on/off&#x60; state, from the original flag to the new flag.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postFeatureFlag: async (projKey: string, featureFlagBody: FeatureFlagBody, clone?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('postFeatureFlag', 'projKey', projKey)
            // verify required parameter 'featureFlagBody' is not null or undefined
            assertParamExists('postFeatureFlag', 'featureFlagBody', featureFlagBody)
            const localVarPath = `/api/v2/flags/{projKey}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (clone !== undefined) {
                localVarQueryParameter['clone'] = clone;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(featureFlagBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FeatureFlagsApi - functional programming interface
 * @export
 */
export const FeatureFlagsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FeatureFlagsApiAxiosParamCreator(configuration)
    return {
        /**
         * The includedActions and excludedActions define the parts of the flag configuration that are copied or not copied. By default, the entire flag configuration is copied.  You can have either `includedActions` or `excludedActions` but not both.  Valid `includedActions` and `excludedActions` include:  - `updateOn` - `updatePrerequisites` - `updateTargets` - `updateRules` - `updateFallthrough` - `updateOffVariation`    The `source` and `target` must be JSON objects if using curl, specifying the environment key and (optional) current flag configuration version in that environment. For example:  ```json {   \"key\": \"production\",   \"currentVersion\": 3 } ```  If target is specified as above, the API will test to ensure that the current flag version in the `production` environment is `3`, and reject attempts to copy settings to `production` otherwise. You can use this to enforce optimistic locking on copy attempts. 
         * @summary Copy feature flag
         * @param {string} projKey The project key.
         * @param {string} featureFlagKey The feature flag\&#39;s key. The key identifies the flag in your code.
         * @param {FlagCopyConfigPost} flagCopyConfigPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async copyFeatureFlag(projKey: string, featureFlagKey: string, flagCopyConfigPost: FlagCopyConfigPost, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FeatureFlag>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.copyFeatureFlag(projKey, featureFlagKey, flagCopyConfigPost, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a feature flag in all environments. Use with caution: only delete feature flags your application no longer uses.
         * @summary Delete feature flag
         * @param {string} projKey The project key.
         * @param {string} key The feature flag\&#39;s key. The key identifies the flag in your code.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteFeatureFlag(projKey: string, key: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFeatureFlag(projKey, key, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of user targets on a feature flag that are scheduled for removal.
         * @summary Get expiring user targets for feature flag
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} flagKey The feature flag key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExpiringUserTargets(projKey: string, envKey: string, flagKey: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExpiringUserTargetGetResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getExpiringUserTargets(projKey, envKey, flagKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a single feature flag by key. By default, this returns the configurations for all environments. You can filter environments with the `env` query parameter. For example, setting `env=production` restricts the returned configurations to just the `production` environment.
         * @summary Get feature flag
         * @param {string} projKey The project key
         * @param {string} key The feature flag key
         * @param {string} [env] Filter configurations by environment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFeatureFlag(projKey: string, key: string, env?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FeatureFlag>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFeatureFlag(projKey, key, env, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get the status for a particular feature flag.
         * @summary Get feature flag status
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} key The feature flag key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFeatureFlagStatus(projKey: string, envKey: string, key: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FlagStatusRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFeatureFlagStatus(projKey, envKey, key, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get the status for a particular feature flag across environments.
         * @summary Get flag status across environments
         * @param {string} projKey The project key
         * @param {string} key The feature flag key
         * @param {string} [env] Optional environment filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFeatureFlagStatusAcrossEnvironments(projKey: string, key: string, env?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FeatureFlagStatusAcrossEnvironments>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFeatureFlagStatusAcrossEnvironments(projKey, key, env, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of statuses for all feature flags. The status includes the last time the feature flag was requested, as well as a state, which is one of the following:  - `new`: the feature flag was created within the last seven days, and has not been requested yet - `active`: the feature flag was requested by your servers or clients within the last seven days - `inactive`: the feature flag was created more than seven days ago, and hasn\'t been requested by your servers or clients within the past seven days - `launched`: one variation of the feature flag has been rolled out to all your users for at least 7 days 
         * @summary List feature flag statuses
         * @param {string} projKey The project key
         * @param {string} envKey Filter configurations by environment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFeatureFlagStatuses(projKey: string, envKey: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FeatureFlagStatuses>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFeatureFlagStatuses(projKey, envKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of all features in the given project. By default, each feature includes configurations for each environment. You can filter environments with the env query parameter. For example, setting `env=production` restricts the returned configurations to just your production environment. You can also filter feature flags by tag with the tag query parameter.  We support the following fields for filters:  - `query` is a string that matches against the flags\' keys and names. It is not case sensitive. - `archived` is a boolean to filter the list to archived flags. When this is absent, only unarchived flags are returned. - `type` is a string allowing filtering to `temporary` or `permanent` flags. - `status` is a string allowing filtering to `new`, `inactive`, `active`, or `launched` flags in the specified environment. This filter also requires a `filterEnv` field to be set to a valid environment. For example: `filter=status:active,filterEnv:production`. - `tags` is a + separated list of tags. It filters the list to members who have all of the tags in the list. - `hasExperiment` is a boolean with values of true or false and returns any flags that have an attached metric. - `hasDataExport` is a boolean with values of true or false and returns any flags that are currently exporting data in the specified environment. This includes flags that are exporting data via Experimentation. This filter also requires a `filterEnv` field to be set to a valid environment key. e.g. `filter=hasExperiment:true,filterEnv:production` - `evaluated` is an object that contains a key of `after` and a value in Unix time in milliseconds. This returns all flags that have been evaluated since the time you specify in the environment provided. This filter also requires a `filterEnv` field to be set to a valid environment. For example: `filter=evaluated:{\"after\": 1590768455282},filterEnv:production`. - `filterEnv` is a string with the key of a valid environment. The filterEnv field is used for filters that are environment specific. If there are multiple environment specific filters you should only declare this parameter once. For example: `filter=evaluated:{\"after\": 1590768455282},filterEnv:production,status:active`.  An example filter is `query:abc,tags:foo+bar`. This matches flags with the string `abc` in their key or name, ignoring case, which also have the tags `foo` and `bar`.  By default, this returns all flags. You can page through the list with the `limit` parameter and by following the `first`, `prev`, `next`, and `last` links in the returned `_links` field. These links will not be present if the pages they refer to don\'t exist. For example, the `first` and `prev` links will be missing from the response on the first page. 
         * @summary List feature flags
         * @param {string} projKey The project key
         * @param {string} [env] Filter configurations by environment
         * @param {string} [tag] Filter feature flags by tag
         * @param {number} [limit] The number of feature flags to return. Defaults to -1, which returns all flags
         * @param {number} [offset] Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next limit items
         * @param {string} [query] A string that matches against the flags\&#39; keys and names. It is not case sensitive
         * @param {boolean} [archived] A boolean to filter the list to archived flags. When this is absent, only unarchived flags will be returned
         * @param {boolean} [summary] By default in API version &gt;&#x3D; 1, flags will _not_ include their list of prerequisites, targets or rules.  Set summary&#x3D;0 to include these fields for each flag returned
         * @param {string} [filter] A comma-separated list of filters. Each filter is of the form field:value
         * @param {string} [sort] A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFeatureFlags(projKey: string, env?: string, tag?: string, limit?: number, offset?: number, query?: string, archived?: boolean, summary?: boolean, filter?: string, sort?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FeatureFlags>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFeatureFlags(projKey, env, tag, limit, offset, query, archived, summary, filter, sort, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update the list of user targets on a feature flag that are scheduled for removal.
         * @summary Update expiring user targets on feature flag
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} flagKey The feature flag key.
         * @param {PatchWithComment} patchWithComment 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchExpiringUserTargets(projKey: string, envKey: string, flagKey: string, patchWithComment: PatchWithComment, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExpiringUserTargetPatchResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchExpiringUserTargets(projKey, envKey, flagKey, patchWithComment, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Perform a partial update to a feature
         * @summary Update feature flag
         * @param {string} projKey The project key.
         * @param {string} key The feature flag\&#39;s key. The key identifies the flag in your code.
         * @param {PatchWithComment} patchWithComment 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchFeatureFlag(projKey: string, key: string, patchWithComment: PatchWithComment, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FeatureFlag>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchFeatureFlag(projKey, key, patchWithComment, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a feature flag with the given name, key, and variations
         * @summary Create a feature flag
         * @param {string} projKey The project key.
         * @param {FeatureFlagBody} featureFlagBody 
         * @param {string} [clone] The key of the feature flag to be cloned. The key identifies the flag in your code. For example, setting &#x60;clone&#x3D;flagKey&#x60; copies the full targeting configuration for all environments, including &#x60;on/off&#x60; state, from the original flag to the new flag.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postFeatureFlag(projKey: string, featureFlagBody: FeatureFlagBody, clone?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FeatureFlag>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postFeatureFlag(projKey, featureFlagBody, clone, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FeatureFlagsApi - factory interface
 * @export
 */
export const FeatureFlagsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FeatureFlagsApiFp(configuration)
    return {
        /**
         * The includedActions and excludedActions define the parts of the flag configuration that are copied or not copied. By default, the entire flag configuration is copied.  You can have either `includedActions` or `excludedActions` but not both.  Valid `includedActions` and `excludedActions` include:  - `updateOn` - `updatePrerequisites` - `updateTargets` - `updateRules` - `updateFallthrough` - `updateOffVariation`    The `source` and `target` must be JSON objects if using curl, specifying the environment key and (optional) current flag configuration version in that environment. For example:  ```json {   \"key\": \"production\",   \"currentVersion\": 3 } ```  If target is specified as above, the API will test to ensure that the current flag version in the `production` environment is `3`, and reject attempts to copy settings to `production` otherwise. You can use this to enforce optimistic locking on copy attempts. 
         * @summary Copy feature flag
         * @param {string} projKey The project key.
         * @param {string} featureFlagKey The feature flag\&#39;s key. The key identifies the flag in your code.
         * @param {FlagCopyConfigPost} flagCopyConfigPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        copyFeatureFlag(projKey: string, featureFlagKey: string, flagCopyConfigPost: FlagCopyConfigPost, options?: any): AxiosPromise<FeatureFlag> {
            return localVarFp.copyFeatureFlag(projKey, featureFlagKey, flagCopyConfigPost, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a feature flag in all environments. Use with caution: only delete feature flags your application no longer uses.
         * @summary Delete feature flag
         * @param {string} projKey The project key.
         * @param {string} key The feature flag\&#39;s key. The key identifies the flag in your code.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFeatureFlag(projKey: string, key: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteFeatureFlag(projKey, key, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of user targets on a feature flag that are scheduled for removal.
         * @summary Get expiring user targets for feature flag
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} flagKey The feature flag key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExpiringUserTargets(projKey: string, envKey: string, flagKey: string, options?: any): AxiosPromise<ExpiringUserTargetGetResponse> {
            return localVarFp.getExpiringUserTargets(projKey, envKey, flagKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a single feature flag by key. By default, this returns the configurations for all environments. You can filter environments with the `env` query parameter. For example, setting `env=production` restricts the returned configurations to just the `production` environment.
         * @summary Get feature flag
         * @param {string} projKey The project key
         * @param {string} key The feature flag key
         * @param {string} [env] Filter configurations by environment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeatureFlag(projKey: string, key: string, env?: string, options?: any): AxiosPromise<FeatureFlag> {
            return localVarFp.getFeatureFlag(projKey, key, env, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the status for a particular feature flag.
         * @summary Get feature flag status
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} key The feature flag key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeatureFlagStatus(projKey: string, envKey: string, key: string, options?: any): AxiosPromise<FlagStatusRep> {
            return localVarFp.getFeatureFlagStatus(projKey, envKey, key, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the status for a particular feature flag across environments.
         * @summary Get flag status across environments
         * @param {string} projKey The project key
         * @param {string} key The feature flag key
         * @param {string} [env] Optional environment filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeatureFlagStatusAcrossEnvironments(projKey: string, key: string, env?: string, options?: any): AxiosPromise<FeatureFlagStatusAcrossEnvironments> {
            return localVarFp.getFeatureFlagStatusAcrossEnvironments(projKey, key, env, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of statuses for all feature flags. The status includes the last time the feature flag was requested, as well as a state, which is one of the following:  - `new`: the feature flag was created within the last seven days, and has not been requested yet - `active`: the feature flag was requested by your servers or clients within the last seven days - `inactive`: the feature flag was created more than seven days ago, and hasn\'t been requested by your servers or clients within the past seven days - `launched`: one variation of the feature flag has been rolled out to all your users for at least 7 days 
         * @summary List feature flag statuses
         * @param {string} projKey The project key
         * @param {string} envKey Filter configurations by environment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeatureFlagStatuses(projKey: string, envKey: string, options?: any): AxiosPromise<FeatureFlagStatuses> {
            return localVarFp.getFeatureFlagStatuses(projKey, envKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of all features in the given project. By default, each feature includes configurations for each environment. You can filter environments with the env query parameter. For example, setting `env=production` restricts the returned configurations to just your production environment. You can also filter feature flags by tag with the tag query parameter.  We support the following fields for filters:  - `query` is a string that matches against the flags\' keys and names. It is not case sensitive. - `archived` is a boolean to filter the list to archived flags. When this is absent, only unarchived flags are returned. - `type` is a string allowing filtering to `temporary` or `permanent` flags. - `status` is a string allowing filtering to `new`, `inactive`, `active`, or `launched` flags in the specified environment. This filter also requires a `filterEnv` field to be set to a valid environment. For example: `filter=status:active,filterEnv:production`. - `tags` is a + separated list of tags. It filters the list to members who have all of the tags in the list. - `hasExperiment` is a boolean with values of true or false and returns any flags that have an attached metric. - `hasDataExport` is a boolean with values of true or false and returns any flags that are currently exporting data in the specified environment. This includes flags that are exporting data via Experimentation. This filter also requires a `filterEnv` field to be set to a valid environment key. e.g. `filter=hasExperiment:true,filterEnv:production` - `evaluated` is an object that contains a key of `after` and a value in Unix time in milliseconds. This returns all flags that have been evaluated since the time you specify in the environment provided. This filter also requires a `filterEnv` field to be set to a valid environment. For example: `filter=evaluated:{\"after\": 1590768455282},filterEnv:production`. - `filterEnv` is a string with the key of a valid environment. The filterEnv field is used for filters that are environment specific. If there are multiple environment specific filters you should only declare this parameter once. For example: `filter=evaluated:{\"after\": 1590768455282},filterEnv:production,status:active`.  An example filter is `query:abc,tags:foo+bar`. This matches flags with the string `abc` in their key or name, ignoring case, which also have the tags `foo` and `bar`.  By default, this returns all flags. You can page through the list with the `limit` parameter and by following the `first`, `prev`, `next`, and `last` links in the returned `_links` field. These links will not be present if the pages they refer to don\'t exist. For example, the `first` and `prev` links will be missing from the response on the first page. 
         * @summary List feature flags
         * @param {string} projKey The project key
         * @param {string} [env] Filter configurations by environment
         * @param {string} [tag] Filter feature flags by tag
         * @param {number} [limit] The number of feature flags to return. Defaults to -1, which returns all flags
         * @param {number} [offset] Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next limit items
         * @param {string} [query] A string that matches against the flags\&#39; keys and names. It is not case sensitive
         * @param {boolean} [archived] A boolean to filter the list to archived flags. When this is absent, only unarchived flags will be returned
         * @param {boolean} [summary] By default in API version &gt;&#x3D; 1, flags will _not_ include their list of prerequisites, targets or rules.  Set summary&#x3D;0 to include these fields for each flag returned
         * @param {string} [filter] A comma-separated list of filters. Each filter is of the form field:value
         * @param {string} [sort] A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeatureFlags(projKey: string, env?: string, tag?: string, limit?: number, offset?: number, query?: string, archived?: boolean, summary?: boolean, filter?: string, sort?: string, options?: any): AxiosPromise<FeatureFlags> {
            return localVarFp.getFeatureFlags(projKey, env, tag, limit, offset, query, archived, summary, filter, sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Update the list of user targets on a feature flag that are scheduled for removal.
         * @summary Update expiring user targets on feature flag
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} flagKey The feature flag key.
         * @param {PatchWithComment} patchWithComment 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchExpiringUserTargets(projKey: string, envKey: string, flagKey: string, patchWithComment: PatchWithComment, options?: any): AxiosPromise<ExpiringUserTargetPatchResponse> {
            return localVarFp.patchExpiringUserTargets(projKey, envKey, flagKey, patchWithComment, options).then((request) => request(axios, basePath));
        },
        /**
         * Perform a partial update to a feature
         * @summary Update feature flag
         * @param {string} projKey The project key.
         * @param {string} key The feature flag\&#39;s key. The key identifies the flag in your code.
         * @param {PatchWithComment} patchWithComment 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchFeatureFlag(projKey: string, key: string, patchWithComment: PatchWithComment, options?: any): AxiosPromise<FeatureFlag> {
            return localVarFp.patchFeatureFlag(projKey, key, patchWithComment, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a feature flag with the given name, key, and variations
         * @summary Create a feature flag
         * @param {string} projKey The project key.
         * @param {FeatureFlagBody} featureFlagBody 
         * @param {string} [clone] The key of the feature flag to be cloned. The key identifies the flag in your code. For example, setting &#x60;clone&#x3D;flagKey&#x60; copies the full targeting configuration for all environments, including &#x60;on/off&#x60; state, from the original flag to the new flag.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postFeatureFlag(projKey: string, featureFlagBody: FeatureFlagBody, clone?: string, options?: any): AxiosPromise<FeatureFlag> {
            return localVarFp.postFeatureFlag(projKey, featureFlagBody, clone, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FeatureFlagsApi - object-oriented interface
 * @export
 * @class FeatureFlagsApi
 * @extends {BaseAPI}
 */
export class FeatureFlagsApi extends BaseAPI {
    /**
     * The includedActions and excludedActions define the parts of the flag configuration that are copied or not copied. By default, the entire flag configuration is copied.  You can have either `includedActions` or `excludedActions` but not both.  Valid `includedActions` and `excludedActions` include:  - `updateOn` - `updatePrerequisites` - `updateTargets` - `updateRules` - `updateFallthrough` - `updateOffVariation`    The `source` and `target` must be JSON objects if using curl, specifying the environment key and (optional) current flag configuration version in that environment. For example:  ```json {   \"key\": \"production\",   \"currentVersion\": 3 } ```  If target is specified as above, the API will test to ensure that the current flag version in the `production` environment is `3`, and reject attempts to copy settings to `production` otherwise. You can use this to enforce optimistic locking on copy attempts. 
     * @summary Copy feature flag
     * @param {string} projKey The project key.
     * @param {string} featureFlagKey The feature flag\&#39;s key. The key identifies the flag in your code.
     * @param {FlagCopyConfigPost} flagCopyConfigPost 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeatureFlagsApi
     */
    public copyFeatureFlag(projKey: string, featureFlagKey: string, flagCopyConfigPost: FlagCopyConfigPost, options?: any) {
        return FeatureFlagsApiFp(this.configuration).copyFeatureFlag(projKey, featureFlagKey, flagCopyConfigPost, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a feature flag in all environments. Use with caution: only delete feature flags your application no longer uses.
     * @summary Delete feature flag
     * @param {string} projKey The project key.
     * @param {string} key The feature flag\&#39;s key. The key identifies the flag in your code.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeatureFlagsApi
     */
    public deleteFeatureFlag(projKey: string, key: string, options?: any) {
        return FeatureFlagsApiFp(this.configuration).deleteFeatureFlag(projKey, key, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of user targets on a feature flag that are scheduled for removal.
     * @summary Get expiring user targets for feature flag
     * @param {string} projKey The project key.
     * @param {string} envKey The environment key.
     * @param {string} flagKey The feature flag key.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeatureFlagsApi
     */
    public getExpiringUserTargets(projKey: string, envKey: string, flagKey: string, options?: any) {
        return FeatureFlagsApiFp(this.configuration).getExpiringUserTargets(projKey, envKey, flagKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a single feature flag by key. By default, this returns the configurations for all environments. You can filter environments with the `env` query parameter. For example, setting `env=production` restricts the returned configurations to just the `production` environment.
     * @summary Get feature flag
     * @param {string} projKey The project key
     * @param {string} key The feature flag key
     * @param {string} [env] Filter configurations by environment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeatureFlagsApi
     */
    public getFeatureFlag(projKey: string, key: string, env?: string, options?: any) {
        return FeatureFlagsApiFp(this.configuration).getFeatureFlag(projKey, key, env, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get the status for a particular feature flag.
     * @summary Get feature flag status
     * @param {string} projKey The project key
     * @param {string} envKey The environment key
     * @param {string} key The feature flag key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeatureFlagsApi
     */
    public getFeatureFlagStatus(projKey: string, envKey: string, key: string, options?: any) {
        return FeatureFlagsApiFp(this.configuration).getFeatureFlagStatus(projKey, envKey, key, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get the status for a particular feature flag across environments.
     * @summary Get flag status across environments
     * @param {string} projKey The project key
     * @param {string} key The feature flag key
     * @param {string} [env] Optional environment filter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeatureFlagsApi
     */
    public getFeatureFlagStatusAcrossEnvironments(projKey: string, key: string, env?: string, options?: any) {
        return FeatureFlagsApiFp(this.configuration).getFeatureFlagStatusAcrossEnvironments(projKey, key, env, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of statuses for all feature flags. The status includes the last time the feature flag was requested, as well as a state, which is one of the following:  - `new`: the feature flag was created within the last seven days, and has not been requested yet - `active`: the feature flag was requested by your servers or clients within the last seven days - `inactive`: the feature flag was created more than seven days ago, and hasn\'t been requested by your servers or clients within the past seven days - `launched`: one variation of the feature flag has been rolled out to all your users for at least 7 days 
     * @summary List feature flag statuses
     * @param {string} projKey The project key
     * @param {string} envKey Filter configurations by environment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeatureFlagsApi
     */
    public getFeatureFlagStatuses(projKey: string, envKey: string, options?: any) {
        return FeatureFlagsApiFp(this.configuration).getFeatureFlagStatuses(projKey, envKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of all features in the given project. By default, each feature includes configurations for each environment. You can filter environments with the env query parameter. For example, setting `env=production` restricts the returned configurations to just your production environment. You can also filter feature flags by tag with the tag query parameter.  We support the following fields for filters:  - `query` is a string that matches against the flags\' keys and names. It is not case sensitive. - `archived` is a boolean to filter the list to archived flags. When this is absent, only unarchived flags are returned. - `type` is a string allowing filtering to `temporary` or `permanent` flags. - `status` is a string allowing filtering to `new`, `inactive`, `active`, or `launched` flags in the specified environment. This filter also requires a `filterEnv` field to be set to a valid environment. For example: `filter=status:active,filterEnv:production`. - `tags` is a + separated list of tags. It filters the list to members who have all of the tags in the list. - `hasExperiment` is a boolean with values of true or false and returns any flags that have an attached metric. - `hasDataExport` is a boolean with values of true or false and returns any flags that are currently exporting data in the specified environment. This includes flags that are exporting data via Experimentation. This filter also requires a `filterEnv` field to be set to a valid environment key. e.g. `filter=hasExperiment:true,filterEnv:production` - `evaluated` is an object that contains a key of `after` and a value in Unix time in milliseconds. This returns all flags that have been evaluated since the time you specify in the environment provided. This filter also requires a `filterEnv` field to be set to a valid environment. For example: `filter=evaluated:{\"after\": 1590768455282},filterEnv:production`. - `filterEnv` is a string with the key of a valid environment. The filterEnv field is used for filters that are environment specific. If there are multiple environment specific filters you should only declare this parameter once. For example: `filter=evaluated:{\"after\": 1590768455282},filterEnv:production,status:active`.  An example filter is `query:abc,tags:foo+bar`. This matches flags with the string `abc` in their key or name, ignoring case, which also have the tags `foo` and `bar`.  By default, this returns all flags. You can page through the list with the `limit` parameter and by following the `first`, `prev`, `next`, and `last` links in the returned `_links` field. These links will not be present if the pages they refer to don\'t exist. For example, the `first` and `prev` links will be missing from the response on the first page. 
     * @summary List feature flags
     * @param {string} projKey The project key
     * @param {string} [env] Filter configurations by environment
     * @param {string} [tag] Filter feature flags by tag
     * @param {number} [limit] The number of feature flags to return. Defaults to -1, which returns all flags
     * @param {number} [offset] Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next limit items
     * @param {string} [query] A string that matches against the flags\&#39; keys and names. It is not case sensitive
     * @param {boolean} [archived] A boolean to filter the list to archived flags. When this is absent, only unarchived flags will be returned
     * @param {boolean} [summary] By default in API version &gt;&#x3D; 1, flags will _not_ include their list of prerequisites, targets or rules.  Set summary&#x3D;0 to include these fields for each flag returned
     * @param {string} [filter] A comma-separated list of filters. Each filter is of the form field:value
     * @param {string} [sort] A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeatureFlagsApi
     */
    public getFeatureFlags(projKey: string, env?: string, tag?: string, limit?: number, offset?: number, query?: string, archived?: boolean, summary?: boolean, filter?: string, sort?: string, options?: any) {
        return FeatureFlagsApiFp(this.configuration).getFeatureFlags(projKey, env, tag, limit, offset, query, archived, summary, filter, sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update the list of user targets on a feature flag that are scheduled for removal.
     * @summary Update expiring user targets on feature flag
     * @param {string} projKey The project key.
     * @param {string} envKey The environment key.
     * @param {string} flagKey The feature flag key.
     * @param {PatchWithComment} patchWithComment 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeatureFlagsApi
     */
    public patchExpiringUserTargets(projKey: string, envKey: string, flagKey: string, patchWithComment: PatchWithComment, options?: any) {
        return FeatureFlagsApiFp(this.configuration).patchExpiringUserTargets(projKey, envKey, flagKey, patchWithComment, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Perform a partial update to a feature
     * @summary Update feature flag
     * @param {string} projKey The project key.
     * @param {string} key The feature flag\&#39;s key. The key identifies the flag in your code.
     * @param {PatchWithComment} patchWithComment 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeatureFlagsApi
     */
    public patchFeatureFlag(projKey: string, key: string, patchWithComment: PatchWithComment, options?: any) {
        return FeatureFlagsApiFp(this.configuration).patchFeatureFlag(projKey, key, patchWithComment, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a feature flag with the given name, key, and variations
     * @summary Create a feature flag
     * @param {string} projKey The project key.
     * @param {FeatureFlagBody} featureFlagBody 
     * @param {string} [clone] The key of the feature flag to be cloned. The key identifies the flag in your code. For example, setting &#x60;clone&#x3D;flagKey&#x60; copies the full targeting configuration for all environments, including &#x60;on/off&#x60; state, from the original flag to the new flag.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeatureFlagsApi
     */
    public postFeatureFlag(projKey: string, featureFlagBody: FeatureFlagBody, clone?: string, options?: any) {
        return FeatureFlagsApiFp(this.configuration).postFeatureFlag(projKey, featureFlagBody, clone, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * FeatureFlagsBetaApi - axios parameter creator
 * @export
 */
export const FeatureFlagsBetaApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * List dependent flags across all environments for the flag specified in the path parameters. A dependent flag is a flag that uses another flag as a prerequisite.
         * @summary List dependent feature flags
         * @param {string} projKey The project key
         * @param {string} flagKey The flag key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDependentFlags: async (projKey: string, flagKey: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('getDependentFlags', 'projKey', projKey)
            // verify required parameter 'flagKey' is not null or undefined
            assertParamExists('getDependentFlags', 'flagKey', flagKey)
            const localVarPath = `/api/v2/flags/{projKey}/{flagKey}/dependent-flags`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"flagKey"}}`, encodeURIComponent(String(flagKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List dependent flags across all environments for the flag specified in the path parameters. A dependent flag is a flag that uses another flag as a prerequisite.
         * @summary List dependent feature flags by environment
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} flagKey The flag key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDependentFlagsByEnv: async (projKey: string, envKey: string, flagKey: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('getDependentFlagsByEnv', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('getDependentFlagsByEnv', 'envKey', envKey)
            // verify required parameter 'flagKey' is not null or undefined
            assertParamExists('getDependentFlagsByEnv', 'flagKey', flagKey)
            const localVarPath = `/api/v2/flags/{projKey}/{envKey}/{flagKey}/dependent-flags`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)))
                .replace(`{${"flagKey"}}`, encodeURIComponent(String(flagKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FeatureFlagsBetaApi - functional programming interface
 * @export
 */
export const FeatureFlagsBetaApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FeatureFlagsBetaApiAxiosParamCreator(configuration)
    return {
        /**
         * List dependent flags across all environments for the flag specified in the path parameters. A dependent flag is a flag that uses another flag as a prerequisite.
         * @summary List dependent feature flags
         * @param {string} projKey The project key
         * @param {string} flagKey The flag key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDependentFlags(projKey: string, flagKey: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MultiEnvironmentDependentFlags>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDependentFlags(projKey, flagKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List dependent flags across all environments for the flag specified in the path parameters. A dependent flag is a flag that uses another flag as a prerequisite.
         * @summary List dependent feature flags by environment
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} flagKey The flag key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDependentFlagsByEnv(projKey: string, envKey: string, flagKey: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DependentFlagsByEnvironment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDependentFlagsByEnv(projKey, envKey, flagKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FeatureFlagsBetaApi - factory interface
 * @export
 */
export const FeatureFlagsBetaApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FeatureFlagsBetaApiFp(configuration)
    return {
        /**
         * List dependent flags across all environments for the flag specified in the path parameters. A dependent flag is a flag that uses another flag as a prerequisite.
         * @summary List dependent feature flags
         * @param {string} projKey The project key
         * @param {string} flagKey The flag key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDependentFlags(projKey: string, flagKey: string, options?: any): AxiosPromise<MultiEnvironmentDependentFlags> {
            return localVarFp.getDependentFlags(projKey, flagKey, options).then((request) => request(axios, basePath));
        },
        /**
         * List dependent flags across all environments for the flag specified in the path parameters. A dependent flag is a flag that uses another flag as a prerequisite.
         * @summary List dependent feature flags by environment
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} flagKey The flag key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDependentFlagsByEnv(projKey: string, envKey: string, flagKey: string, options?: any): AxiosPromise<DependentFlagsByEnvironment> {
            return localVarFp.getDependentFlagsByEnv(projKey, envKey, flagKey, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FeatureFlagsBetaApi - object-oriented interface
 * @export
 * @class FeatureFlagsBetaApi
 * @extends {BaseAPI}
 */
export class FeatureFlagsBetaApi extends BaseAPI {
    /**
     * List dependent flags across all environments for the flag specified in the path parameters. A dependent flag is a flag that uses another flag as a prerequisite.
     * @summary List dependent feature flags
     * @param {string} projKey The project key
     * @param {string} flagKey The flag key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeatureFlagsBetaApi
     */
    public getDependentFlags(projKey: string, flagKey: string, options?: any) {
        return FeatureFlagsBetaApiFp(this.configuration).getDependentFlags(projKey, flagKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List dependent flags across all environments for the flag specified in the path parameters. A dependent flag is a flag that uses another flag as a prerequisite.
     * @summary List dependent feature flags by environment
     * @param {string} projKey The project key
     * @param {string} envKey The environment key
     * @param {string} flagKey The flag key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeatureFlagsBetaApi
     */
    public getDependentFlagsByEnv(projKey: string, envKey: string, flagKey: string, options?: any) {
        return FeatureFlagsBetaApiFp(this.configuration).getDependentFlagsByEnv(projKey, envKey, flagKey, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * MetricsApi - axios parameter creator
 * @export
 */
export const MetricsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a metric by key.
         * @summary Delete metric
         * @param {string} projectKey The project key
         * @param {string} key The metric key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMetric: async (projectKey: string, key: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('deleteMetric', 'projectKey', projectKey)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('deleteMetric', 'key', key)
            const localVarPath = `/api/v2/metrics/{projectKey}/{key}`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)))
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get information for a single metric from the specific project.
         * @summary Get metric
         * @param {string} projectKey The project key
         * @param {string} key The metric key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMetric: async (projectKey: string, key: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('getMetric', 'projectKey', projectKey)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('getMetric', 'key', key)
            const localVarPath = `/api/v2/metrics/{projectKey}/{key}`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)))
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of all metrics for the specified project.
         * @summary List metrics
         * @param {string} projectKey The project key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMetrics: async (projectKey: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('getMetrics', 'projectKey', projectKey)
            const localVarPath = `/api/v2/metrics/{projectKey}`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Patch a environment by key.
         * @summary Update metric
         * @param {string} projectKey The project key
         * @param {string} key The metric key
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchMetric: async (projectKey: string, key: string, patchOperation: Array<PatchOperation>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('patchMetric', 'projectKey', projectKey)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('patchMetric', 'key', key)
            // verify required parameter 'patchOperation' is not null or undefined
            assertParamExists('patchMetric', 'patchOperation', patchOperation)
            const localVarPath = `/api/v2/metrics/{projectKey}/{key}`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)))
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchOperation, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new metric in the specified project. Note that the expected POST body differs depending on the specified kind property.
         * @summary Create metric
         * @param {string} projectKey The project key
         * @param {MetricPost} metricPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postMetric: async (projectKey: string, metricPost: MetricPost, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('postMetric', 'projectKey', projectKey)
            // verify required parameter 'metricPost' is not null or undefined
            assertParamExists('postMetric', 'metricPost', metricPost)
            const localVarPath = `/api/v2/metrics/{projectKey}`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(metricPost, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MetricsApi - functional programming interface
 * @export
 */
export const MetricsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MetricsApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete a metric by key.
         * @summary Delete metric
         * @param {string} projectKey The project key
         * @param {string} key The metric key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteMetric(projectKey: string, key: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteMetric(projectKey, key, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get information for a single metric from the specific project.
         * @summary Get metric
         * @param {string} projectKey The project key
         * @param {string} key The metric key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMetric(projectKey: string, key: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetricRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMetric(projectKey, key, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of all metrics for the specified project.
         * @summary List metrics
         * @param {string} projectKey The project key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMetrics(projectKey: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetricCollectionRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMetrics(projectKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Patch a environment by key.
         * @summary Update metric
         * @param {string} projectKey The project key
         * @param {string} key The metric key
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchMetric(projectKey: string, key: string, patchOperation: Array<PatchOperation>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetricRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchMetric(projectKey, key, patchOperation, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a new metric in the specified project. Note that the expected POST body differs depending on the specified kind property.
         * @summary Create metric
         * @param {string} projectKey The project key
         * @param {MetricPost} metricPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postMetric(projectKey: string, metricPost: MetricPost, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetricRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postMetric(projectKey, metricPost, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MetricsApi - factory interface
 * @export
 */
export const MetricsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MetricsApiFp(configuration)
    return {
        /**
         * Delete a metric by key.
         * @summary Delete metric
         * @param {string} projectKey The project key
         * @param {string} key The metric key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMetric(projectKey: string, key: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteMetric(projectKey, key, options).then((request) => request(axios, basePath));
        },
        /**
         * Get information for a single metric from the specific project.
         * @summary Get metric
         * @param {string} projectKey The project key
         * @param {string} key The metric key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMetric(projectKey: string, key: string, options?: any): AxiosPromise<MetricRep> {
            return localVarFp.getMetric(projectKey, key, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of all metrics for the specified project.
         * @summary List metrics
         * @param {string} projectKey The project key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMetrics(projectKey: string, options?: any): AxiosPromise<MetricCollectionRep> {
            return localVarFp.getMetrics(projectKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch a environment by key.
         * @summary Update metric
         * @param {string} projectKey The project key
         * @param {string} key The metric key
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchMetric(projectKey: string, key: string, patchOperation: Array<PatchOperation>, options?: any): AxiosPromise<MetricRep> {
            return localVarFp.patchMetric(projectKey, key, patchOperation, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new metric in the specified project. Note that the expected POST body differs depending on the specified kind property.
         * @summary Create metric
         * @param {string} projectKey The project key
         * @param {MetricPost} metricPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postMetric(projectKey: string, metricPost: MetricPost, options?: any): AxiosPromise<MetricRep> {
            return localVarFp.postMetric(projectKey, metricPost, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MetricsApi - object-oriented interface
 * @export
 * @class MetricsApi
 * @extends {BaseAPI}
 */
export class MetricsApi extends BaseAPI {
    /**
     * Delete a metric by key.
     * @summary Delete metric
     * @param {string} projectKey The project key
     * @param {string} key The metric key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetricsApi
     */
    public deleteMetric(projectKey: string, key: string, options?: any) {
        return MetricsApiFp(this.configuration).deleteMetric(projectKey, key, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get information for a single metric from the specific project.
     * @summary Get metric
     * @param {string} projectKey The project key
     * @param {string} key The metric key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetricsApi
     */
    public getMetric(projectKey: string, key: string, options?: any) {
        return MetricsApiFp(this.configuration).getMetric(projectKey, key, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of all metrics for the specified project.
     * @summary List metrics
     * @param {string} projectKey The project key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetricsApi
     */
    public getMetrics(projectKey: string, options?: any) {
        return MetricsApiFp(this.configuration).getMetrics(projectKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch a environment by key.
     * @summary Update metric
     * @param {string} projectKey The project key
     * @param {string} key The metric key
     * @param {Array<PatchOperation>} patchOperation 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetricsApi
     */
    public patchMetric(projectKey: string, key: string, patchOperation: Array<PatchOperation>, options?: any) {
        return MetricsApiFp(this.configuration).patchMetric(projectKey, key, patchOperation, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new metric in the specified project. Note that the expected POST body differs depending on the specified kind property.
     * @summary Create metric
     * @param {string} projectKey The project key
     * @param {MetricPost} metricPost 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetricsApi
     */
    public postMetric(projectKey: string, metricPost: MetricPost, options?: any) {
        return MetricsApiFp(this.configuration).postMetric(projectKey, metricPost, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * OtherApi - axios parameter creator
 * @export
 */
export const OtherApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get a list of IP ranges the LaunchDarkly service uses. You can use this list to allow LaunchDarkly through your firewall.<br /><br />This endpoint returns a JSON object with two attributes: `addresses` and `outboundAddresses`. The `addresses` element contains the IP addresses LaunchDarkly\'s service uses. The `outboundAddresses` element contains the IP addresses outgoing webhook notifications use.<br /><br />We post upcoming changes to this list in advance on our [status page](https://status.launchdarkly.com/).
         * @summary Gets the public IP list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getIps: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/public-ip-list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * The OpenAPI spec endpoint serves the latest version of the OpenAPI specification for LaunchDarkly\'s API in json format.
         * @summary Gets the OpenAPI spec in json
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOpenapiSpec: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/openapi.json`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Issue a `GET` request to the root resource to find all of the resource categories supported by the API
         * @summary Root resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoot: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the latest API version, the list of valid API versions in ascending order, and the version being used for this request. These are all in the external, date-based format.
         * @summary Get version information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVersions: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/versions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OtherApi - functional programming interface
 * @export
 */
export const OtherApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OtherApiAxiosParamCreator(configuration)
    return {
        /**
         * Get a list of IP ranges the LaunchDarkly service uses. You can use this list to allow LaunchDarkly through your firewall.<br /><br />This endpoint returns a JSON object with two attributes: `addresses` and `outboundAddresses`. The `addresses` element contains the IP addresses LaunchDarkly\'s service uses. The `outboundAddresses` element contains the IP addresses outgoing webhook notifications use.<br /><br />We post upcoming changes to this list in advance on our [status page](https://status.launchdarkly.com/).
         * @summary Gets the public IP list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getIps(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IpList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getIps(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * The OpenAPI spec endpoint serves the latest version of the OpenAPI specification for LaunchDarkly\'s API in json format.
         * @summary Gets the OpenAPI spec in json
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOpenapiSpec(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOpenapiSpec(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Issue a `GET` request to the root resource to find all of the resource categories supported by the API
         * @summary Root resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRoot(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: InlineResponse200; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoot(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get the latest API version, the list of valid API versions in ascending order, and the version being used for this request. These are all in the external, date-based format.
         * @summary Get version information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVersions(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VersionsRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVersions(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OtherApi - factory interface
 * @export
 */
export const OtherApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OtherApiFp(configuration)
    return {
        /**
         * Get a list of IP ranges the LaunchDarkly service uses. You can use this list to allow LaunchDarkly through your firewall.<br /><br />This endpoint returns a JSON object with two attributes: `addresses` and `outboundAddresses`. The `addresses` element contains the IP addresses LaunchDarkly\'s service uses. The `outboundAddresses` element contains the IP addresses outgoing webhook notifications use.<br /><br />We post upcoming changes to this list in advance on our [status page](https://status.launchdarkly.com/).
         * @summary Gets the public IP list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getIps(options?: any): AxiosPromise<IpList> {
            return localVarFp.getIps(options).then((request) => request(axios, basePath));
        },
        /**
         * The OpenAPI spec endpoint serves the latest version of the OpenAPI specification for LaunchDarkly\'s API in json format.
         * @summary Gets the OpenAPI spec in json
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOpenapiSpec(options?: any): AxiosPromise<void> {
            return localVarFp.getOpenapiSpec(options).then((request) => request(axios, basePath));
        },
        /**
         * Issue a `GET` request to the root resource to find all of the resource categories supported by the API
         * @summary Root resource
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoot(options?: any): AxiosPromise<{ [key: string]: InlineResponse200; }> {
            return localVarFp.getRoot(options).then((request) => request(axios, basePath));
        },
        /**
         * Get the latest API version, the list of valid API versions in ascending order, and the version being used for this request. These are all in the external, date-based format.
         * @summary Get version information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVersions(options?: any): AxiosPromise<VersionsRep> {
            return localVarFp.getVersions(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OtherApi - object-oriented interface
 * @export
 * @class OtherApi
 * @extends {BaseAPI}
 */
export class OtherApi extends BaseAPI {
    /**
     * Get a list of IP ranges the LaunchDarkly service uses. You can use this list to allow LaunchDarkly through your firewall.<br /><br />This endpoint returns a JSON object with two attributes: `addresses` and `outboundAddresses`. The `addresses` element contains the IP addresses LaunchDarkly\'s service uses. The `outboundAddresses` element contains the IP addresses outgoing webhook notifications use.<br /><br />We post upcoming changes to this list in advance on our [status page](https://status.launchdarkly.com/).
     * @summary Gets the public IP list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OtherApi
     */
    public getIps(options?: any) {
        return OtherApiFp(this.configuration).getIps(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * The OpenAPI spec endpoint serves the latest version of the OpenAPI specification for LaunchDarkly\'s API in json format.
     * @summary Gets the OpenAPI spec in json
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OtherApi
     */
    public getOpenapiSpec(options?: any) {
        return OtherApiFp(this.configuration).getOpenapiSpec(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Issue a `GET` request to the root resource to find all of the resource categories supported by the API
     * @summary Root resource
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OtherApi
     */
    public getRoot(options?: any) {
        return OtherApiFp(this.configuration).getRoot(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get the latest API version, the list of valid API versions in ascending order, and the version being used for this request. These are all in the external, date-based format.
     * @summary Get version information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OtherApi
     */
    public getVersions(options?: any) {
        return OtherApiFp(this.configuration).getVersions(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * ProjectsApi - axios parameter creator
 * @export
 */
export const ProjectsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a project by key. Caution: deleting a project will delete all associated environments and feature flags. You cannot delete the last project in an account.
         * @summary Delete project
         * @param {string} projectKey The project key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProject: async (projectKey: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('deleteProject', 'projectKey', projectKey)
            const localVarPath = `/api/v2/projects/{projectKey}`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a single project by key.
         * @summary Get project
         * @param {string} projectKey The project key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProject: async (projectKey: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('getProject', 'projectKey', projectKey)
            const localVarPath = `/api/v2/projects/{projectKey}`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of all projects in the account.
         * @summary List projects
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjects: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/projects`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a project. Requires a [JSON Patch](http://tools.ietf.org/html/rfc6902) representation of the desired changes to the project.
         * @summary Update project
         * @param {string} projectKey The project key
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchProject: async (projectKey: string, patchOperation: Array<PatchOperation>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('patchProject', 'projectKey', projectKey)
            // verify required parameter 'patchOperation' is not null or undefined
            assertParamExists('patchProject', 'patchOperation', patchOperation)
            const localVarPath = `/api/v2/projects/{projectKey}`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchOperation, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new project with the given key and name. Project keys must be unique within an account.
         * @summary Create project
         * @param {ProjectPost} projectPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postProject: async (projectPost: ProjectPost, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectPost' is not null or undefined
            assertParamExists('postProject', 'projectPost', projectPost)
            const localVarPath = `/api/v2/projects`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(projectPost, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProjectsApi - functional programming interface
 * @export
 */
export const ProjectsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProjectsApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete a project by key. Caution: deleting a project will delete all associated environments and feature flags. You cannot delete the last project in an account.
         * @summary Delete project
         * @param {string} projectKey The project key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteProject(projectKey: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteProject(projectKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a single project by key.
         * @summary Get project
         * @param {string} projectKey The project key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProject(projectKey: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Project>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProject(projectKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of all projects in the account.
         * @summary List projects
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjects(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Projects>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjects(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a project. Requires a [JSON Patch](http://tools.ietf.org/html/rfc6902) representation of the desired changes to the project.
         * @summary Update project
         * @param {string} projectKey The project key
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchProject(projectKey: string, patchOperation: Array<PatchOperation>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Project>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchProject(projectKey, patchOperation, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a new project with the given key and name. Project keys must be unique within an account.
         * @summary Create project
         * @param {ProjectPost} projectPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postProject(projectPost: ProjectPost, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Project>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postProject(projectPost, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ProjectsApi - factory interface
 * @export
 */
export const ProjectsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProjectsApiFp(configuration)
    return {
        /**
         * Delete a project by key. Caution: deleting a project will delete all associated environments and feature flags. You cannot delete the last project in an account.
         * @summary Delete project
         * @param {string} projectKey The project key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProject(projectKey: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteProject(projectKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a single project by key.
         * @summary Get project
         * @param {string} projectKey The project key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProject(projectKey: string, options?: any): AxiosPromise<Project> {
            return localVarFp.getProject(projectKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of all projects in the account.
         * @summary List projects
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjects(options?: any): AxiosPromise<Projects> {
            return localVarFp.getProjects(options).then((request) => request(axios, basePath));
        },
        /**
         * Update a project. Requires a [JSON Patch](http://tools.ietf.org/html/rfc6902) representation of the desired changes to the project.
         * @summary Update project
         * @param {string} projectKey The project key
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchProject(projectKey: string, patchOperation: Array<PatchOperation>, options?: any): AxiosPromise<Project> {
            return localVarFp.patchProject(projectKey, patchOperation, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new project with the given key and name. Project keys must be unique within an account.
         * @summary Create project
         * @param {ProjectPost} projectPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postProject(projectPost: ProjectPost, options?: any): AxiosPromise<Project> {
            return localVarFp.postProject(projectPost, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProjectsApi - object-oriented interface
 * @export
 * @class ProjectsApi
 * @extends {BaseAPI}
 */
export class ProjectsApi extends BaseAPI {
    /**
     * Delete a project by key. Caution: deleting a project will delete all associated environments and feature flags. You cannot delete the last project in an account.
     * @summary Delete project
     * @param {string} projectKey The project key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public deleteProject(projectKey: string, options?: any) {
        return ProjectsApiFp(this.configuration).deleteProject(projectKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a single project by key.
     * @summary Get project
     * @param {string} projectKey The project key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public getProject(projectKey: string, options?: any) {
        return ProjectsApiFp(this.configuration).getProject(projectKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of all projects in the account.
     * @summary List projects
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public getProjects(options?: any) {
        return ProjectsApiFp(this.configuration).getProjects(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a project. Requires a [JSON Patch](http://tools.ietf.org/html/rfc6902) representation of the desired changes to the project.
     * @summary Update project
     * @param {string} projectKey The project key
     * @param {Array<PatchOperation>} patchOperation 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public patchProject(projectKey: string, patchOperation: Array<PatchOperation>, options?: any) {
        return ProjectsApiFp(this.configuration).patchProject(projectKey, patchOperation, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new project with the given key and name. Project keys must be unique within an account.
     * @summary Create project
     * @param {ProjectPost} projectPost 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public postProject(projectPost: ProjectPost, options?: any) {
        return ProjectsApiFp(this.configuration).postProject(projectPost, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * RelayProxyConfigurationsApi - axios parameter creator
 * @export
 */
export const RelayProxyConfigurationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a Relay Proxy config
         * @summary Delete Relay Proxy config by ID
         * @param {string} id The relay auto config id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRelayAutoConfig: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteRelayAutoConfig', 'id', id)
            const localVarPath = `/api/v2/account/relay-auto-configs/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a single Relay Proxy Auto Config by ID
         * @summary Get Relay Proxy config
         * @param {string} id The relay auto config id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRelayProxyConfig: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getRelayProxyConfig', 'id', id)
            const localVarPath = `/api/v2/account/relay-auto-configs/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of Relay Proxy configurations in the account.
         * @summary List Relay Proxy configs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRelayProxyConfigs: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/account/relay-auto-configs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a Relay Proxy config.
         * @summary Update a Relay Proxy config
         * @param {string} id The relay auto config id
         * @param {PatchWithComment} patchWithComment 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchRelayAutoConfig: async (id: string, patchWithComment: PatchWithComment, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('patchRelayAutoConfig', 'id', id)
            // verify required parameter 'patchWithComment' is not null or undefined
            assertParamExists('patchRelayAutoConfig', 'patchWithComment', patchWithComment)
            const localVarPath = `/api/v2/account/relay-auto-configs/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchWithComment, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a Relay Proxy config
         * @summary Create a new Relay Proxy config
         * @param {RelayAutoConfigPost} relayAutoConfigPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postRelayAutoConfig: async (relayAutoConfigPost: RelayAutoConfigPost, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'relayAutoConfigPost' is not null or undefined
            assertParamExists('postRelayAutoConfig', 'relayAutoConfigPost', relayAutoConfigPost)
            const localVarPath = `/api/v2/account/relay-auto-configs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(relayAutoConfigPost, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Reset a Relay Proxy configuration\'s secret key with an optional expiry time for the old key.
         * @summary Reset Relay Proxy configuration key
         * @param {string} id The Relay Proxy configuration ID
         * @param {number} [expiry] An expiration time for the old Relay Proxy configuration key, expressed as a Unix epoch time in milliseconds. By default, the Relay Proxy configuration will expire immediately.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetRelayAutoConfig: async (id: string, expiry?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('resetRelayAutoConfig', 'id', id)
            const localVarPath = `/api/v2/account/relay-auto-configs/{id}/reset`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (expiry !== undefined) {
                localVarQueryParameter['expiry'] = expiry;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RelayProxyConfigurationsApi - functional programming interface
 * @export
 */
export const RelayProxyConfigurationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RelayProxyConfigurationsApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete a Relay Proxy config
         * @summary Delete Relay Proxy config by ID
         * @param {string} id The relay auto config id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteRelayAutoConfig(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRelayAutoConfig(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a single Relay Proxy Auto Config by ID
         * @summary Get Relay Proxy config
         * @param {string} id The relay auto config id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRelayProxyConfig(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RelayAutoConfigRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRelayProxyConfig(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of Relay Proxy configurations in the account.
         * @summary List Relay Proxy configs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRelayProxyConfigs(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RelayAutoConfigCollectionRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRelayProxyConfigs(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a Relay Proxy config.
         * @summary Update a Relay Proxy config
         * @param {string} id The relay auto config id
         * @param {PatchWithComment} patchWithComment 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchRelayAutoConfig(id: string, patchWithComment: PatchWithComment, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RelayAutoConfigRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchRelayAutoConfig(id, patchWithComment, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a Relay Proxy config
         * @summary Create a new Relay Proxy config
         * @param {RelayAutoConfigPost} relayAutoConfigPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postRelayAutoConfig(relayAutoConfigPost: RelayAutoConfigPost, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RelayAutoConfigRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postRelayAutoConfig(relayAutoConfigPost, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Reset a Relay Proxy configuration\'s secret key with an optional expiry time for the old key.
         * @summary Reset Relay Proxy configuration key
         * @param {string} id The Relay Proxy configuration ID
         * @param {number} [expiry] An expiration time for the old Relay Proxy configuration key, expressed as a Unix epoch time in milliseconds. By default, the Relay Proxy configuration will expire immediately.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resetRelayAutoConfig(id: string, expiry?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RelayAutoConfigRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetRelayAutoConfig(id, expiry, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RelayProxyConfigurationsApi - factory interface
 * @export
 */
export const RelayProxyConfigurationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RelayProxyConfigurationsApiFp(configuration)
    return {
        /**
         * Delete a Relay Proxy config
         * @summary Delete Relay Proxy config by ID
         * @param {string} id The relay auto config id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRelayAutoConfig(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteRelayAutoConfig(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a single Relay Proxy Auto Config by ID
         * @summary Get Relay Proxy config
         * @param {string} id The relay auto config id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRelayProxyConfig(id: string, options?: any): AxiosPromise<RelayAutoConfigRep> {
            return localVarFp.getRelayProxyConfig(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of Relay Proxy configurations in the account.
         * @summary List Relay Proxy configs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRelayProxyConfigs(options?: any): AxiosPromise<RelayAutoConfigCollectionRep> {
            return localVarFp.getRelayProxyConfigs(options).then((request) => request(axios, basePath));
        },
        /**
         * Update a Relay Proxy config.
         * @summary Update a Relay Proxy config
         * @param {string} id The relay auto config id
         * @param {PatchWithComment} patchWithComment 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchRelayAutoConfig(id: string, patchWithComment: PatchWithComment, options?: any): AxiosPromise<RelayAutoConfigRep> {
            return localVarFp.patchRelayAutoConfig(id, patchWithComment, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a Relay Proxy config
         * @summary Create a new Relay Proxy config
         * @param {RelayAutoConfigPost} relayAutoConfigPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postRelayAutoConfig(relayAutoConfigPost: RelayAutoConfigPost, options?: any): AxiosPromise<RelayAutoConfigRep> {
            return localVarFp.postRelayAutoConfig(relayAutoConfigPost, options).then((request) => request(axios, basePath));
        },
        /**
         * Reset a Relay Proxy configuration\'s secret key with an optional expiry time for the old key.
         * @summary Reset Relay Proxy configuration key
         * @param {string} id The Relay Proxy configuration ID
         * @param {number} [expiry] An expiration time for the old Relay Proxy configuration key, expressed as a Unix epoch time in milliseconds. By default, the Relay Proxy configuration will expire immediately.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetRelayAutoConfig(id: string, expiry?: number, options?: any): AxiosPromise<RelayAutoConfigRep> {
            return localVarFp.resetRelayAutoConfig(id, expiry, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RelayProxyConfigurationsApi - object-oriented interface
 * @export
 * @class RelayProxyConfigurationsApi
 * @extends {BaseAPI}
 */
export class RelayProxyConfigurationsApi extends BaseAPI {
    /**
     * Delete a Relay Proxy config
     * @summary Delete Relay Proxy config by ID
     * @param {string} id The relay auto config id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RelayProxyConfigurationsApi
     */
    public deleteRelayAutoConfig(id: string, options?: any) {
        return RelayProxyConfigurationsApiFp(this.configuration).deleteRelayAutoConfig(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a single Relay Proxy Auto Config by ID
     * @summary Get Relay Proxy config
     * @param {string} id The relay auto config id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RelayProxyConfigurationsApi
     */
    public getRelayProxyConfig(id: string, options?: any) {
        return RelayProxyConfigurationsApiFp(this.configuration).getRelayProxyConfig(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of Relay Proxy configurations in the account.
     * @summary List Relay Proxy configs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RelayProxyConfigurationsApi
     */
    public getRelayProxyConfigs(options?: any) {
        return RelayProxyConfigurationsApiFp(this.configuration).getRelayProxyConfigs(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a Relay Proxy config.
     * @summary Update a Relay Proxy config
     * @param {string} id The relay auto config id
     * @param {PatchWithComment} patchWithComment 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RelayProxyConfigurationsApi
     */
    public patchRelayAutoConfig(id: string, patchWithComment: PatchWithComment, options?: any) {
        return RelayProxyConfigurationsApiFp(this.configuration).patchRelayAutoConfig(id, patchWithComment, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a Relay Proxy config
     * @summary Create a new Relay Proxy config
     * @param {RelayAutoConfigPost} relayAutoConfigPost 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RelayProxyConfigurationsApi
     */
    public postRelayAutoConfig(relayAutoConfigPost: RelayAutoConfigPost, options?: any) {
        return RelayProxyConfigurationsApiFp(this.configuration).postRelayAutoConfig(relayAutoConfigPost, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reset a Relay Proxy configuration\'s secret key with an optional expiry time for the old key.
     * @summary Reset Relay Proxy configuration key
     * @param {string} id The Relay Proxy configuration ID
     * @param {number} [expiry] An expiration time for the old Relay Proxy configuration key, expressed as a Unix epoch time in milliseconds. By default, the Relay Proxy configuration will expire immediately.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RelayProxyConfigurationsApi
     */
    public resetRelayAutoConfig(id: string, expiry?: number, options?: any) {
        return RelayProxyConfigurationsApiFp(this.configuration).resetRelayAutoConfig(id, expiry, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * ScheduledChangesApi - axios parameter creator
 * @export
 */
export const ScheduledChangesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a scheduled changes workflow
         * @summary Delete scheduled changes workflow
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {string} id The scheduled change id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFlagConfigScheduledChanges: async (projectKey: string, featureFlagKey: string, environmentKey: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('deleteFlagConfigScheduledChanges', 'projectKey', projectKey)
            // verify required parameter 'featureFlagKey' is not null or undefined
            assertParamExists('deleteFlagConfigScheduledChanges', 'featureFlagKey', featureFlagKey)
            // verify required parameter 'environmentKey' is not null or undefined
            assertParamExists('deleteFlagConfigScheduledChanges', 'environmentKey', environmentKey)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteFlagConfigScheduledChanges', 'id', id)
            const localVarPath = `/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id}`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)))
                .replace(`{${"featureFlagKey"}}`, encodeURIComponent(String(featureFlagKey)))
                .replace(`{${"environmentKey"}}`, encodeURIComponent(String(environmentKey)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a scheduled change that will be applied to the feature flag by ID
         * @summary Get a scheduled change
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {string} id The scheduled change id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeatureFlagScheduledChange: async (projectKey: string, featureFlagKey: string, environmentKey: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('getFeatureFlagScheduledChange', 'projectKey', projectKey)
            // verify required parameter 'featureFlagKey' is not null or undefined
            assertParamExists('getFeatureFlagScheduledChange', 'featureFlagKey', featureFlagKey)
            // verify required parameter 'environmentKey' is not null or undefined
            assertParamExists('getFeatureFlagScheduledChange', 'environmentKey', environmentKey)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getFeatureFlagScheduledChange', 'id', id)
            const localVarPath = `/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id}`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)))
                .replace(`{${"featureFlagKey"}}`, encodeURIComponent(String(featureFlagKey)))
                .replace(`{${"environmentKey"}}`, encodeURIComponent(String(environmentKey)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of scheduled changes that will be applied to the feature flag.
         * @summary List scheduled changes
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFlagConfigScheduledChanges: async (projectKey: string, featureFlagKey: string, environmentKey: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('getFlagConfigScheduledChanges', 'projectKey', projectKey)
            // verify required parameter 'featureFlagKey' is not null or undefined
            assertParamExists('getFlagConfigScheduledChanges', 'featureFlagKey', featureFlagKey)
            // verify required parameter 'environmentKey' is not null or undefined
            assertParamExists('getFlagConfigScheduledChanges', 'environmentKey', environmentKey)
            const localVarPath = `/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)))
                .replace(`{${"featureFlagKey"}}`, encodeURIComponent(String(featureFlagKey)))
                .replace(`{${"environmentKey"}}`, encodeURIComponent(String(environmentKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a scheduled change, overriding existing instructions with the new ones.<br /><br />Requires a semantic patch representation of the desired changes to the resource. To learn more about semantic patches, read [Updates](/#section/Updates/Updates-via-semantic-patches)
         * @summary Update scheduled changes workflow
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {string} id The scheduled change ID
         * @param {FlagScheduledChangesInput} flagScheduledChangesInput 
         * @param {boolean} [ignoreConflicts] Whether or not to succeed or fail when the new instructions conflict with existing scheduled changes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchFlagConfigScheduledChange: async (projectKey: string, featureFlagKey: string, environmentKey: string, id: string, flagScheduledChangesInput: FlagScheduledChangesInput, ignoreConflicts?: boolean, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('patchFlagConfigScheduledChange', 'projectKey', projectKey)
            // verify required parameter 'featureFlagKey' is not null or undefined
            assertParamExists('patchFlagConfigScheduledChange', 'featureFlagKey', featureFlagKey)
            // verify required parameter 'environmentKey' is not null or undefined
            assertParamExists('patchFlagConfigScheduledChange', 'environmentKey', environmentKey)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('patchFlagConfigScheduledChange', 'id', id)
            // verify required parameter 'flagScheduledChangesInput' is not null or undefined
            assertParamExists('patchFlagConfigScheduledChange', 'flagScheduledChangesInput', flagScheduledChangesInput)
            const localVarPath = `/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id}`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)))
                .replace(`{${"featureFlagKey"}}`, encodeURIComponent(String(featureFlagKey)))
                .replace(`{${"environmentKey"}}`, encodeURIComponent(String(environmentKey)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (ignoreConflicts !== undefined) {
                localVarQueryParameter['ignoreConflicts'] = ignoreConflicts;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(flagScheduledChangesInput, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create scheduled changes for a feature flag. If the ignoreConficts query parameter is false and the new instructions would conflict with the current state of the feature flag or any existing scheduled changes, the request will fail. If the parameter is true and there are conflicts, the request will succeed as normal.
         * @summary Create scheduled changes workflow
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {PostFlagScheduledChangesInput} postFlagScheduledChangesInput 
         * @param {boolean} [ignoreConflicts] Whether or not to succeed or fail when the new instructions conflict with existing scheduled changes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postFlagConfigScheduledChanges: async (projectKey: string, featureFlagKey: string, environmentKey: string, postFlagScheduledChangesInput: PostFlagScheduledChangesInput, ignoreConflicts?: boolean, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('postFlagConfigScheduledChanges', 'projectKey', projectKey)
            // verify required parameter 'featureFlagKey' is not null or undefined
            assertParamExists('postFlagConfigScheduledChanges', 'featureFlagKey', featureFlagKey)
            // verify required parameter 'environmentKey' is not null or undefined
            assertParamExists('postFlagConfigScheduledChanges', 'environmentKey', environmentKey)
            // verify required parameter 'postFlagScheduledChangesInput' is not null or undefined
            assertParamExists('postFlagConfigScheduledChanges', 'postFlagScheduledChangesInput', postFlagScheduledChangesInput)
            const localVarPath = `/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)))
                .replace(`{${"featureFlagKey"}}`, encodeURIComponent(String(featureFlagKey)))
                .replace(`{${"environmentKey"}}`, encodeURIComponent(String(environmentKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (ignoreConflicts !== undefined) {
                localVarQueryParameter['ignoreConflicts'] = ignoreConflicts;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(postFlagScheduledChangesInput, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ScheduledChangesApi - functional programming interface
 * @export
 */
export const ScheduledChangesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ScheduledChangesApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete a scheduled changes workflow
         * @summary Delete scheduled changes workflow
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {string} id The scheduled change id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteFlagConfigScheduledChanges(projectKey: string, featureFlagKey: string, environmentKey: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFlagConfigScheduledChanges(projectKey, featureFlagKey, environmentKey, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a scheduled change that will be applied to the feature flag by ID
         * @summary Get a scheduled change
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {string} id The scheduled change id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFeatureFlagScheduledChange(projectKey: string, featureFlagKey: string, environmentKey: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FeatureFlagScheduledChange>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFeatureFlagScheduledChange(projectKey, featureFlagKey, environmentKey, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of scheduled changes that will be applied to the feature flag.
         * @summary List scheduled changes
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFlagConfigScheduledChanges(projectKey: string, featureFlagKey: string, environmentKey: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FeatureFlagScheduledChanges>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFlagConfigScheduledChanges(projectKey, featureFlagKey, environmentKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a scheduled change, overriding existing instructions with the new ones.<br /><br />Requires a semantic patch representation of the desired changes to the resource. To learn more about semantic patches, read [Updates](/#section/Updates/Updates-via-semantic-patches)
         * @summary Update scheduled changes workflow
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {string} id The scheduled change ID
         * @param {FlagScheduledChangesInput} flagScheduledChangesInput 
         * @param {boolean} [ignoreConflicts] Whether or not to succeed or fail when the new instructions conflict with existing scheduled changes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchFlagConfigScheduledChange(projectKey: string, featureFlagKey: string, environmentKey: string, id: string, flagScheduledChangesInput: FlagScheduledChangesInput, ignoreConflicts?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FeatureFlagScheduledChange>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchFlagConfigScheduledChange(projectKey, featureFlagKey, environmentKey, id, flagScheduledChangesInput, ignoreConflicts, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create scheduled changes for a feature flag. If the ignoreConficts query parameter is false and the new instructions would conflict with the current state of the feature flag or any existing scheduled changes, the request will fail. If the parameter is true and there are conflicts, the request will succeed as normal.
         * @summary Create scheduled changes workflow
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {PostFlagScheduledChangesInput} postFlagScheduledChangesInput 
         * @param {boolean} [ignoreConflicts] Whether or not to succeed or fail when the new instructions conflict with existing scheduled changes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postFlagConfigScheduledChanges(projectKey: string, featureFlagKey: string, environmentKey: string, postFlagScheduledChangesInput: PostFlagScheduledChangesInput, ignoreConflicts?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FeatureFlagScheduledChange>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postFlagConfigScheduledChanges(projectKey, featureFlagKey, environmentKey, postFlagScheduledChangesInput, ignoreConflicts, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ScheduledChangesApi - factory interface
 * @export
 */
export const ScheduledChangesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ScheduledChangesApiFp(configuration)
    return {
        /**
         * Delete a scheduled changes workflow
         * @summary Delete scheduled changes workflow
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {string} id The scheduled change id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFlagConfigScheduledChanges(projectKey: string, featureFlagKey: string, environmentKey: string, id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteFlagConfigScheduledChanges(projectKey, featureFlagKey, environmentKey, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a scheduled change that will be applied to the feature flag by ID
         * @summary Get a scheduled change
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {string} id The scheduled change id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeatureFlagScheduledChange(projectKey: string, featureFlagKey: string, environmentKey: string, id: string, options?: any): AxiosPromise<FeatureFlagScheduledChange> {
            return localVarFp.getFeatureFlagScheduledChange(projectKey, featureFlagKey, environmentKey, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of scheduled changes that will be applied to the feature flag.
         * @summary List scheduled changes
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFlagConfigScheduledChanges(projectKey: string, featureFlagKey: string, environmentKey: string, options?: any): AxiosPromise<FeatureFlagScheduledChanges> {
            return localVarFp.getFlagConfigScheduledChanges(projectKey, featureFlagKey, environmentKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a scheduled change, overriding existing instructions with the new ones.<br /><br />Requires a semantic patch representation of the desired changes to the resource. To learn more about semantic patches, read [Updates](/#section/Updates/Updates-via-semantic-patches)
         * @summary Update scheduled changes workflow
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {string} id The scheduled change ID
         * @param {FlagScheduledChangesInput} flagScheduledChangesInput 
         * @param {boolean} [ignoreConflicts] Whether or not to succeed or fail when the new instructions conflict with existing scheduled changes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchFlagConfigScheduledChange(projectKey: string, featureFlagKey: string, environmentKey: string, id: string, flagScheduledChangesInput: FlagScheduledChangesInput, ignoreConflicts?: boolean, options?: any): AxiosPromise<FeatureFlagScheduledChange> {
            return localVarFp.patchFlagConfigScheduledChange(projectKey, featureFlagKey, environmentKey, id, flagScheduledChangesInput, ignoreConflicts, options).then((request) => request(axios, basePath));
        },
        /**
         * Create scheduled changes for a feature flag. If the ignoreConficts query parameter is false and the new instructions would conflict with the current state of the feature flag or any existing scheduled changes, the request will fail. If the parameter is true and there are conflicts, the request will succeed as normal.
         * @summary Create scheduled changes workflow
         * @param {string} projectKey The project key
         * @param {string} featureFlagKey The feature flag\&#39;s key
         * @param {string} environmentKey The environment key
         * @param {PostFlagScheduledChangesInput} postFlagScheduledChangesInput 
         * @param {boolean} [ignoreConflicts] Whether or not to succeed or fail when the new instructions conflict with existing scheduled changes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postFlagConfigScheduledChanges(projectKey: string, featureFlagKey: string, environmentKey: string, postFlagScheduledChangesInput: PostFlagScheduledChangesInput, ignoreConflicts?: boolean, options?: any): AxiosPromise<FeatureFlagScheduledChange> {
            return localVarFp.postFlagConfigScheduledChanges(projectKey, featureFlagKey, environmentKey, postFlagScheduledChangesInput, ignoreConflicts, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ScheduledChangesApi - object-oriented interface
 * @export
 * @class ScheduledChangesApi
 * @extends {BaseAPI}
 */
export class ScheduledChangesApi extends BaseAPI {
    /**
     * Delete a scheduled changes workflow
     * @summary Delete scheduled changes workflow
     * @param {string} projectKey The project key
     * @param {string} featureFlagKey The feature flag\&#39;s key
     * @param {string} environmentKey The environment key
     * @param {string} id The scheduled change id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledChangesApi
     */
    public deleteFlagConfigScheduledChanges(projectKey: string, featureFlagKey: string, environmentKey: string, id: string, options?: any) {
        return ScheduledChangesApiFp(this.configuration).deleteFlagConfigScheduledChanges(projectKey, featureFlagKey, environmentKey, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a scheduled change that will be applied to the feature flag by ID
     * @summary Get a scheduled change
     * @param {string} projectKey The project key
     * @param {string} featureFlagKey The feature flag\&#39;s key
     * @param {string} environmentKey The environment key
     * @param {string} id The scheduled change id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledChangesApi
     */
    public getFeatureFlagScheduledChange(projectKey: string, featureFlagKey: string, environmentKey: string, id: string, options?: any) {
        return ScheduledChangesApiFp(this.configuration).getFeatureFlagScheduledChange(projectKey, featureFlagKey, environmentKey, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of scheduled changes that will be applied to the feature flag.
     * @summary List scheduled changes
     * @param {string} projectKey The project key
     * @param {string} featureFlagKey The feature flag\&#39;s key
     * @param {string} environmentKey The environment key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledChangesApi
     */
    public getFlagConfigScheduledChanges(projectKey: string, featureFlagKey: string, environmentKey: string, options?: any) {
        return ScheduledChangesApiFp(this.configuration).getFlagConfigScheduledChanges(projectKey, featureFlagKey, environmentKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a scheduled change, overriding existing instructions with the new ones.<br /><br />Requires a semantic patch representation of the desired changes to the resource. To learn more about semantic patches, read [Updates](/#section/Updates/Updates-via-semantic-patches)
     * @summary Update scheduled changes workflow
     * @param {string} projectKey The project key
     * @param {string} featureFlagKey The feature flag\&#39;s key
     * @param {string} environmentKey The environment key
     * @param {string} id The scheduled change ID
     * @param {FlagScheduledChangesInput} flagScheduledChangesInput 
     * @param {boolean} [ignoreConflicts] Whether or not to succeed or fail when the new instructions conflict with existing scheduled changes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledChangesApi
     */
    public patchFlagConfigScheduledChange(projectKey: string, featureFlagKey: string, environmentKey: string, id: string, flagScheduledChangesInput: FlagScheduledChangesInput, ignoreConflicts?: boolean, options?: any) {
        return ScheduledChangesApiFp(this.configuration).patchFlagConfigScheduledChange(projectKey, featureFlagKey, environmentKey, id, flagScheduledChangesInput, ignoreConflicts, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create scheduled changes for a feature flag. If the ignoreConficts query parameter is false and the new instructions would conflict with the current state of the feature flag or any existing scheduled changes, the request will fail. If the parameter is true and there are conflicts, the request will succeed as normal.
     * @summary Create scheduled changes workflow
     * @param {string} projectKey The project key
     * @param {string} featureFlagKey The feature flag\&#39;s key
     * @param {string} environmentKey The environment key
     * @param {PostFlagScheduledChangesInput} postFlagScheduledChangesInput 
     * @param {boolean} [ignoreConflicts] Whether or not to succeed or fail when the new instructions conflict with existing scheduled changes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledChangesApi
     */
    public postFlagConfigScheduledChanges(projectKey: string, featureFlagKey: string, environmentKey: string, postFlagScheduledChangesInput: PostFlagScheduledChangesInput, ignoreConflicts?: boolean, options?: any) {
        return ScheduledChangesApiFp(this.configuration).postFlagConfigScheduledChanges(projectKey, featureFlagKey, environmentKey, postFlagScheduledChangesInput, ignoreConflicts, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * SegmentsApi - axios parameter creator
 * @export
 */
export const SegmentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a user segment.
         * @summary Delete segment
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} key The user segment key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSegment: async (projKey: string, envKey: string, key: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('deleteSegment', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('deleteSegment', 'envKey', envKey)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('deleteSegment', 'key', key)
            const localVarPath = `/api/v2/segments/{projKey}/{envKey}/{key}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)))
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of a segment\'s user targets that are scheduled for removal
         * @summary Get expiring user targets for segment
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} segmentKey The segment key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExpiringUserTargetsForSegment: async (projKey: string, envKey: string, segmentKey: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('getExpiringUserTargetsForSegment', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('getExpiringUserTargetsForSegment', 'envKey', envKey)
            // verify required parameter 'segmentKey' is not null or undefined
            assertParamExists('getExpiringUserTargetsForSegment', 'segmentKey', segmentKey)
            const localVarPath = `/api/v2/segments/{projKey}/{segmentKey}/expiring-user-targets/{envKey}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)))
                .replace(`{${"segmentKey"}}`, encodeURIComponent(String(segmentKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a single user segment by key
         * @summary Get segment
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} key The segment key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSegment: async (projKey: string, envKey: string, key: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('getSegment', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('getSegment', 'envKey', envKey)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('getSegment', 'key', key)
            const localVarPath = `/api/v2/segments/{projKey}/{envKey}/{key}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)))
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the membership status (included/excluded) for a given user in this segment. Note this operation
         * @summary Get Big Segment membership for user
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} key The segment key.
         * @param {string} userKey The user key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSegmentMembershipForUser: async (projKey: string, envKey: string, key: string, userKey: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('getSegmentMembershipForUser', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('getSegmentMembershipForUser', 'envKey', envKey)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('getSegmentMembershipForUser', 'key', key)
            // verify required parameter 'userKey' is not null or undefined
            assertParamExists('getSegmentMembershipForUser', 'userKey', userKey)
            const localVarPath = `/api/v2/segments/{projKey}/{envKey}/{key}/users/{userKey}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)))
                .replace(`{${"key"}}`, encodeURIComponent(String(key)))
                .replace(`{${"userKey"}}`, encodeURIComponent(String(userKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of all user segments in the given project
         * @summary List segments
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSegments: async (projKey: string, envKey: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('getSegments', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('getSegments', 'envKey', envKey)
            const localVarPath = `/api/v2/segments/{projKey}/{envKey}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update the list of a segment\'s user targets that are scheduled for removal<br /><br />Requires a semantic patch representation of the desired changes to the resource. To learn more about semantic patches, read [Updates](/#section/Updates/Updates-via-semantic-patches).<br /><br />If the request is well-formed but any of its instructions failed to process, this operation returns status code `200`. In this case, the response `errors` array will be non-empty.
         * @summary Update expiring user targets for segment
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} segmentKey The user segment key.
         * @param {PatchSegmentRequest} patchSegmentRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchExpiringUserTargetsForSegment: async (projKey: string, envKey: string, segmentKey: string, patchSegmentRequest: PatchSegmentRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('patchExpiringUserTargetsForSegment', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('patchExpiringUserTargetsForSegment', 'envKey', envKey)
            // verify required parameter 'segmentKey' is not null or undefined
            assertParamExists('patchExpiringUserTargetsForSegment', 'segmentKey', segmentKey)
            // verify required parameter 'patchSegmentRequest' is not null or undefined
            assertParamExists('patchExpiringUserTargetsForSegment', 'patchSegmentRequest', patchSegmentRequest)
            const localVarPath = `/api/v2/segments/{projKey}/{segmentKey}/expiring-user-targets/{envKey}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)))
                .replace(`{${"segmentKey"}}`, encodeURIComponent(String(segmentKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchSegmentRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a user segment. The request body must be a valid JSON patch or JSON merge patch document. To learn more about semantic patches, read [Updates](/#section/Updates).
         * @summary Patch segment
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} key The user segment key.
         * @param {PatchWithComment} patchWithComment 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchSegment: async (projKey: string, envKey: string, key: string, patchWithComment: PatchWithComment, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('patchSegment', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('patchSegment', 'envKey', envKey)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('patchSegment', 'key', key)
            // verify required parameter 'patchWithComment' is not null or undefined
            assertParamExists('patchSegment', 'patchWithComment', patchWithComment)
            const localVarPath = `/api/v2/segments/{projKey}/{envKey}/{key}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)))
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchWithComment, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new user segment
         * @summary Create segment
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {SegmentBody} segmentBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postSegment: async (projKey: string, envKey: string, segmentBody: SegmentBody, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('postSegment', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('postSegment', 'envKey', envKey)
            // verify required parameter 'segmentBody' is not null or undefined
            assertParamExists('postSegment', 'segmentBody', segmentBody)
            const localVarPath = `/api/v2/segments/{projKey}/{envKey}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(segmentBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update targets included or excluded in a Big Segment
         * @summary Update targets on a Big Segment
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} key The segment key.
         * @param {SegmentUserState} segmentUserState 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateBigSegmentTargets: async (projKey: string, envKey: string, key: string, segmentUserState: SegmentUserState, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('updateBigSegmentTargets', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('updateBigSegmentTargets', 'envKey', envKey)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('updateBigSegmentTargets', 'key', key)
            // verify required parameter 'segmentUserState' is not null or undefined
            assertParamExists('updateBigSegmentTargets', 'segmentUserState', segmentUserState)
            const localVarPath = `/api/v2/segments/{projKey}/{envKey}/{key}/users`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)))
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(segmentUserState, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SegmentsApi - functional programming interface
 * @export
 */
export const SegmentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SegmentsApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete a user segment.
         * @summary Delete segment
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} key The user segment key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSegment(projKey: string, envKey: string, key: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSegment(projKey, envKey, key, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of a segment\'s user targets that are scheduled for removal
         * @summary Get expiring user targets for segment
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} segmentKey The segment key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExpiringUserTargetsForSegment(projKey: string, envKey: string, segmentKey: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExpiringUserTargetGetResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getExpiringUserTargetsForSegment(projKey, envKey, segmentKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a single user segment by key
         * @summary Get segment
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} key The segment key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSegment(projKey: string, envKey: string, key: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserSegment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSegment(projKey, envKey, key, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the membership status (included/excluded) for a given user in this segment. Note this operation
         * @summary Get Big Segment membership for user
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} key The segment key.
         * @param {string} userKey The user key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSegmentMembershipForUser(projKey: string, envKey: string, key: string, userKey: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BigSegmentTarget>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSegmentMembershipForUser(projKey, envKey, key, userKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of all user segments in the given project
         * @summary List segments
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSegments(projKey: string, envKey: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserSegments>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSegments(projKey, envKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update the list of a segment\'s user targets that are scheduled for removal<br /><br />Requires a semantic patch representation of the desired changes to the resource. To learn more about semantic patches, read [Updates](/#section/Updates/Updates-via-semantic-patches).<br /><br />If the request is well-formed but any of its instructions failed to process, this operation returns status code `200`. In this case, the response `errors` array will be non-empty.
         * @summary Update expiring user targets for segment
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} segmentKey The user segment key.
         * @param {PatchSegmentRequest} patchSegmentRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchExpiringUserTargetsForSegment(projKey: string, envKey: string, segmentKey: string, patchSegmentRequest: PatchSegmentRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExpiringUserTargetPatchResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchExpiringUserTargetsForSegment(projKey, envKey, segmentKey, patchSegmentRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a user segment. The request body must be a valid JSON patch or JSON merge patch document. To learn more about semantic patches, read [Updates](/#section/Updates).
         * @summary Patch segment
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} key The user segment key.
         * @param {PatchWithComment} patchWithComment 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchSegment(projKey: string, envKey: string, key: string, patchWithComment: PatchWithComment, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserSegment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchSegment(projKey, envKey, key, patchWithComment, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a new user segment
         * @summary Create segment
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {SegmentBody} segmentBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postSegment(projKey: string, envKey: string, segmentBody: SegmentBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserSegment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postSegment(projKey, envKey, segmentBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update targets included or excluded in a Big Segment
         * @summary Update targets on a Big Segment
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} key The segment key.
         * @param {SegmentUserState} segmentUserState 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateBigSegmentTargets(projKey: string, envKey: string, key: string, segmentUserState: SegmentUserState, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateBigSegmentTargets(projKey, envKey, key, segmentUserState, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SegmentsApi - factory interface
 * @export
 */
export const SegmentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SegmentsApiFp(configuration)
    return {
        /**
         * Delete a user segment.
         * @summary Delete segment
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} key The user segment key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSegment(projKey: string, envKey: string, key: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteSegment(projKey, envKey, key, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of a segment\'s user targets that are scheduled for removal
         * @summary Get expiring user targets for segment
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} segmentKey The segment key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExpiringUserTargetsForSegment(projKey: string, envKey: string, segmentKey: string, options?: any): AxiosPromise<ExpiringUserTargetGetResponse> {
            return localVarFp.getExpiringUserTargetsForSegment(projKey, envKey, segmentKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a single user segment by key
         * @summary Get segment
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} key The segment key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSegment(projKey: string, envKey: string, key: string, options?: any): AxiosPromise<UserSegment> {
            return localVarFp.getSegment(projKey, envKey, key, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the membership status (included/excluded) for a given user in this segment. Note this operation
         * @summary Get Big Segment membership for user
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} key The segment key.
         * @param {string} userKey The user key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSegmentMembershipForUser(projKey: string, envKey: string, key: string, userKey: string, options?: any): AxiosPromise<BigSegmentTarget> {
            return localVarFp.getSegmentMembershipForUser(projKey, envKey, key, userKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of all user segments in the given project
         * @summary List segments
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSegments(projKey: string, envKey: string, options?: any): AxiosPromise<UserSegments> {
            return localVarFp.getSegments(projKey, envKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Update the list of a segment\'s user targets that are scheduled for removal<br /><br />Requires a semantic patch representation of the desired changes to the resource. To learn more about semantic patches, read [Updates](/#section/Updates/Updates-via-semantic-patches).<br /><br />If the request is well-formed but any of its instructions failed to process, this operation returns status code `200`. In this case, the response `errors` array will be non-empty.
         * @summary Update expiring user targets for segment
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} segmentKey The user segment key.
         * @param {PatchSegmentRequest} patchSegmentRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchExpiringUserTargetsForSegment(projKey: string, envKey: string, segmentKey: string, patchSegmentRequest: PatchSegmentRequest, options?: any): AxiosPromise<ExpiringUserTargetPatchResponse> {
            return localVarFp.patchExpiringUserTargetsForSegment(projKey, envKey, segmentKey, patchSegmentRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a user segment. The request body must be a valid JSON patch or JSON merge patch document. To learn more about semantic patches, read [Updates](/#section/Updates).
         * @summary Patch segment
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} key The user segment key.
         * @param {PatchWithComment} patchWithComment 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchSegment(projKey: string, envKey: string, key: string, patchWithComment: PatchWithComment, options?: any): AxiosPromise<UserSegment> {
            return localVarFp.patchSegment(projKey, envKey, key, patchWithComment, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new user segment
         * @summary Create segment
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {SegmentBody} segmentBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postSegment(projKey: string, envKey: string, segmentBody: SegmentBody, options?: any): AxiosPromise<UserSegment> {
            return localVarFp.postSegment(projKey, envKey, segmentBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Update targets included or excluded in a Big Segment
         * @summary Update targets on a Big Segment
         * @param {string} projKey The project key.
         * @param {string} envKey The environment key.
         * @param {string} key The segment key.
         * @param {SegmentUserState} segmentUserState 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateBigSegmentTargets(projKey: string, envKey: string, key: string, segmentUserState: SegmentUserState, options?: any): AxiosPromise<void> {
            return localVarFp.updateBigSegmentTargets(projKey, envKey, key, segmentUserState, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SegmentsApi - object-oriented interface
 * @export
 * @class SegmentsApi
 * @extends {BaseAPI}
 */
export class SegmentsApi extends BaseAPI {
    /**
     * Delete a user segment.
     * @summary Delete segment
     * @param {string} projKey The project key.
     * @param {string} envKey The environment key.
     * @param {string} key The user segment key.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentsApi
     */
    public deleteSegment(projKey: string, envKey: string, key: string, options?: any) {
        return SegmentsApiFp(this.configuration).deleteSegment(projKey, envKey, key, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of a segment\'s user targets that are scheduled for removal
     * @summary Get expiring user targets for segment
     * @param {string} projKey The project key.
     * @param {string} envKey The environment key.
     * @param {string} segmentKey The segment key.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentsApi
     */
    public getExpiringUserTargetsForSegment(projKey: string, envKey: string, segmentKey: string, options?: any) {
        return SegmentsApiFp(this.configuration).getExpiringUserTargetsForSegment(projKey, envKey, segmentKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a single user segment by key
     * @summary Get segment
     * @param {string} projKey The project key.
     * @param {string} envKey The environment key.
     * @param {string} key The segment key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentsApi
     */
    public getSegment(projKey: string, envKey: string, key: string, options?: any) {
        return SegmentsApiFp(this.configuration).getSegment(projKey, envKey, key, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the membership status (included/excluded) for a given user in this segment. Note this operation
     * @summary Get Big Segment membership for user
     * @param {string} projKey The project key.
     * @param {string} envKey The environment key.
     * @param {string} key The segment key.
     * @param {string} userKey The user key.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentsApi
     */
    public getSegmentMembershipForUser(projKey: string, envKey: string, key: string, userKey: string, options?: any) {
        return SegmentsApiFp(this.configuration).getSegmentMembershipForUser(projKey, envKey, key, userKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of all user segments in the given project
     * @summary List segments
     * @param {string} projKey The project key.
     * @param {string} envKey The environment key.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentsApi
     */
    public getSegments(projKey: string, envKey: string, options?: any) {
        return SegmentsApiFp(this.configuration).getSegments(projKey, envKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update the list of a segment\'s user targets that are scheduled for removal<br /><br />Requires a semantic patch representation of the desired changes to the resource. To learn more about semantic patches, read [Updates](/#section/Updates/Updates-via-semantic-patches).<br /><br />If the request is well-formed but any of its instructions failed to process, this operation returns status code `200`. In this case, the response `errors` array will be non-empty.
     * @summary Update expiring user targets for segment
     * @param {string} projKey The project key.
     * @param {string} envKey The environment key.
     * @param {string} segmentKey The user segment key.
     * @param {PatchSegmentRequest} patchSegmentRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentsApi
     */
    public patchExpiringUserTargetsForSegment(projKey: string, envKey: string, segmentKey: string, patchSegmentRequest: PatchSegmentRequest, options?: any) {
        return SegmentsApiFp(this.configuration).patchExpiringUserTargetsForSegment(projKey, envKey, segmentKey, patchSegmentRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a user segment. The request body must be a valid JSON patch or JSON merge patch document. To learn more about semantic patches, read [Updates](/#section/Updates).
     * @summary Patch segment
     * @param {string} projKey The project key.
     * @param {string} envKey The environment key.
     * @param {string} key The user segment key.
     * @param {PatchWithComment} patchWithComment 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentsApi
     */
    public patchSegment(projKey: string, envKey: string, key: string, patchWithComment: PatchWithComment, options?: any) {
        return SegmentsApiFp(this.configuration).patchSegment(projKey, envKey, key, patchWithComment, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new user segment
     * @summary Create segment
     * @param {string} projKey The project key.
     * @param {string} envKey The environment key.
     * @param {SegmentBody} segmentBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentsApi
     */
    public postSegment(projKey: string, envKey: string, segmentBody: SegmentBody, options?: any) {
        return SegmentsApiFp(this.configuration).postSegment(projKey, envKey, segmentBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update targets included or excluded in a Big Segment
     * @summary Update targets on a Big Segment
     * @param {string} projKey The project key.
     * @param {string} envKey The environment key.
     * @param {string} key The segment key.
     * @param {SegmentUserState} segmentUserState 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentsApi
     */
    public updateBigSegmentTargets(projKey: string, envKey: string, key: string, segmentUserState: SegmentUserState, options?: any) {
        return SegmentsApiFp(this.configuration).updateBigSegmentTargets(projKey, envKey, key, segmentUserState, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UserSettingsApi - axios parameter creator
 * @export
 */
export const UserSettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get a list of flags for which the given user is scheduled for removal.
         * @summary Get expiring dates on flags for user
         * @param {string} projKey The project key.
         * @param {string} userKey The user key.
         * @param {string} envKey The environment key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExpiringFlagsForUser: async (projKey: string, userKey: string, envKey: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('getExpiringFlagsForUser', 'projKey', projKey)
            // verify required parameter 'userKey' is not null or undefined
            assertParamExists('getExpiringFlagsForUser', 'userKey', userKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('getExpiringFlagsForUser', 'envKey', envKey)
            const localVarPath = `/api/v2/users/{projKey}/{userKey}/expiring-user-targets/{envKey}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"userKey"}}`, encodeURIComponent(String(userKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a single flag setting for a user by key. The most important attribute in the response is the `_value`. The `_value` is the current setting that the user sees. For a boolean feature toggle, this is `true`, `false`, or `null`. `null` returns if there is no defined fallback value. The example response indicates that the user `Abbie_Braun` has the `sort.order` flag enabled.<br /><br />The setting attribute indicates whether you\'ve explicitly targeted a user to receive a particular variation. For example, if you have turned off a feature flag for a user, this setting will be `false`. A setting of `null` means that you haven\'t assigned that user to a specific variation.
         * @summary Get flag setting for user
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} key The user key
         * @param {string} featureKey The feature flag key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserFlagSetting: async (projKey: string, envKey: string, key: string, featureKey: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('getUserFlagSetting', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('getUserFlagSetting', 'envKey', envKey)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('getUserFlagSetting', 'key', key)
            // verify required parameter 'featureKey' is not null or undefined
            assertParamExists('getUserFlagSetting', 'featureKey', featureKey)
            const localVarPath = `/api/v2/users/{projKey}/{envKey}/{key}/flags/{featureKey}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)))
                .replace(`{${"key"}}`, encodeURIComponent(String(key)))
                .replace(`{${"featureKey"}}`, encodeURIComponent(String(featureKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the current flag settings for a given user. The most important attribute in the response is the `_value`. The `_value` is the setting that the user sees. For a boolean feature toggle, this is `true`, `false`, or `null`. `null` returns if there is no defined fallthrough value. The example response indicates that the user `Abbie_Braun` has the `sort.order` flag enabled and the `alternate.page` flag disabled.<br /><br />The setting attribute indicates whether you\'ve explicitly targeted a user to receive a particular variation. For example, if you have turned off a feature flag for a user, this setting will be `false`. A setting of `null` means that you haven\'t assigned that user to a specific variation.
         * @summary List flag settings for user
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} key The user key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserFlagSettings: async (projKey: string, envKey: string, key: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('getUserFlagSettings', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('getUserFlagSettings', 'envKey', envKey)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('getUserFlagSettings', 'key', key)
            const localVarPath = `/api/v2/users/{projKey}/{envKey}/{key}/flags`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)))
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Schedule the specified user for removal from individual user targeting on one or more flags. You can only schedule a user for removal on a single variation per flag.  To learn more about semantic patches, read [Updates](/#section/Updates).  If you previously patched the flag, and the patch included the user\'s data, LaunchDarkly continues to use that data. If LaunchDarkly has never encountered the user\'s key before, it calculates the flag values based on the user key alone. 
         * @summary Update expiring user target for flags
         * @param {string} projKey The project key.
         * @param {string} userKey The user key.
         * @param {string} envKey The environment key.
         * @param {PatchWithComment} patchWithComment 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchExpiringFlagsForUser: async (projKey: string, userKey: string, envKey: string, patchWithComment: PatchWithComment, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('patchExpiringFlagsForUser', 'projKey', projKey)
            // verify required parameter 'userKey' is not null or undefined
            assertParamExists('patchExpiringFlagsForUser', 'userKey', userKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('patchExpiringFlagsForUser', 'envKey', envKey)
            // verify required parameter 'patchWithComment' is not null or undefined
            assertParamExists('patchExpiringFlagsForUser', 'patchWithComment', patchWithComment)
            const localVarPath = `/api/v2/users/{projKey}/{userKey}/expiring-user-targets/{envKey}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"userKey"}}`, encodeURIComponent(String(userKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchWithComment, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Enable or disable a feature flag for a user based on their key.  To change the setting, send a `PUT` request to this URL with a request body containing the flag value. For example, to disable the sort.order flag for the user `test@test.com`, send a `PUT` to `https://app.launchdarkly.com/api/v2/users/default/production/test@test.com/flags/sort.order` with the following body:  ```json {   \"setting\": false } ```  Omitting the setting attribute, or a setting of null, in your `PUT` \"clears\" the current setting for a user.  If you previously patched the flag, and the patch included the user\'s data, LaunchDarkly continues to use that data. If LaunchDarkly has never encountered the user\'s key before, it calculates the flag values based on the user key alone. 
         * @summary Update flag settings for user
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} key The user key
         * @param {string} featureKey The feature flag key
         * @param {ValuePut} valuePut 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putFlagSetting: async (projKey: string, envKey: string, key: string, featureKey: string, valuePut: ValuePut, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('putFlagSetting', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('putFlagSetting', 'envKey', envKey)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('putFlagSetting', 'key', key)
            // verify required parameter 'featureKey' is not null or undefined
            assertParamExists('putFlagSetting', 'featureKey', featureKey)
            // verify required parameter 'valuePut' is not null or undefined
            assertParamExists('putFlagSetting', 'valuePut', valuePut)
            const localVarPath = `/api/v2/users/{projKey}/{envKey}/{key}/flags/{featureKey}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)))
                .replace(`{${"key"}}`, encodeURIComponent(String(key)))
                .replace(`{${"featureKey"}}`, encodeURIComponent(String(featureKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(valuePut, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserSettingsApi - functional programming interface
 * @export
 */
export const UserSettingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserSettingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get a list of flags for which the given user is scheduled for removal.
         * @summary Get expiring dates on flags for user
         * @param {string} projKey The project key.
         * @param {string} userKey The user key.
         * @param {string} envKey The environment key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExpiringFlagsForUser(projKey: string, userKey: string, envKey: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExpiringUserTargetGetResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getExpiringFlagsForUser(projKey, userKey, envKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a single flag setting for a user by key. The most important attribute in the response is the `_value`. The `_value` is the current setting that the user sees. For a boolean feature toggle, this is `true`, `false`, or `null`. `null` returns if there is no defined fallback value. The example response indicates that the user `Abbie_Braun` has the `sort.order` flag enabled.<br /><br />The setting attribute indicates whether you\'ve explicitly targeted a user to receive a particular variation. For example, if you have turned off a feature flag for a user, this setting will be `false`. A setting of `null` means that you haven\'t assigned that user to a specific variation.
         * @summary Get flag setting for user
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} key The user key
         * @param {string} featureKey The feature flag key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserFlagSetting(projKey: string, envKey: string, key: string, featureKey: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserFlagSetting>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserFlagSetting(projKey, envKey, key, featureKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get the current flag settings for a given user. The most important attribute in the response is the `_value`. The `_value` is the setting that the user sees. For a boolean feature toggle, this is `true`, `false`, or `null`. `null` returns if there is no defined fallthrough value. The example response indicates that the user `Abbie_Braun` has the `sort.order` flag enabled and the `alternate.page` flag disabled.<br /><br />The setting attribute indicates whether you\'ve explicitly targeted a user to receive a particular variation. For example, if you have turned off a feature flag for a user, this setting will be `false`. A setting of `null` means that you haven\'t assigned that user to a specific variation.
         * @summary List flag settings for user
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} key The user key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserFlagSettings(projKey: string, envKey: string, key: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserFlagSettings>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserFlagSettings(projKey, envKey, key, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Schedule the specified user for removal from individual user targeting on one or more flags. You can only schedule a user for removal on a single variation per flag.  To learn more about semantic patches, read [Updates](/#section/Updates).  If you previously patched the flag, and the patch included the user\'s data, LaunchDarkly continues to use that data. If LaunchDarkly has never encountered the user\'s key before, it calculates the flag values based on the user key alone. 
         * @summary Update expiring user target for flags
         * @param {string} projKey The project key.
         * @param {string} userKey The user key.
         * @param {string} envKey The environment key.
         * @param {PatchWithComment} patchWithComment 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchExpiringFlagsForUser(projKey: string, userKey: string, envKey: string, patchWithComment: PatchWithComment, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExpiringUserTargetPatchResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchExpiringFlagsForUser(projKey, userKey, envKey, patchWithComment, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Enable or disable a feature flag for a user based on their key.  To change the setting, send a `PUT` request to this URL with a request body containing the flag value. For example, to disable the sort.order flag for the user `test@test.com`, send a `PUT` to `https://app.launchdarkly.com/api/v2/users/default/production/test@test.com/flags/sort.order` with the following body:  ```json {   \"setting\": false } ```  Omitting the setting attribute, or a setting of null, in your `PUT` \"clears\" the current setting for a user.  If you previously patched the flag, and the patch included the user\'s data, LaunchDarkly continues to use that data. If LaunchDarkly has never encountered the user\'s key before, it calculates the flag values based on the user key alone. 
         * @summary Update flag settings for user
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} key The user key
         * @param {string} featureKey The feature flag key
         * @param {ValuePut} valuePut 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putFlagSetting(projKey: string, envKey: string, key: string, featureKey: string, valuePut: ValuePut, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.putFlagSetting(projKey, envKey, key, featureKey, valuePut, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserSettingsApi - factory interface
 * @export
 */
export const UserSettingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserSettingsApiFp(configuration)
    return {
        /**
         * Get a list of flags for which the given user is scheduled for removal.
         * @summary Get expiring dates on flags for user
         * @param {string} projKey The project key.
         * @param {string} userKey The user key.
         * @param {string} envKey The environment key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExpiringFlagsForUser(projKey: string, userKey: string, envKey: string, options?: any): AxiosPromise<ExpiringUserTargetGetResponse> {
            return localVarFp.getExpiringFlagsForUser(projKey, userKey, envKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a single flag setting for a user by key. The most important attribute in the response is the `_value`. The `_value` is the current setting that the user sees. For a boolean feature toggle, this is `true`, `false`, or `null`. `null` returns if there is no defined fallback value. The example response indicates that the user `Abbie_Braun` has the `sort.order` flag enabled.<br /><br />The setting attribute indicates whether you\'ve explicitly targeted a user to receive a particular variation. For example, if you have turned off a feature flag for a user, this setting will be `false`. A setting of `null` means that you haven\'t assigned that user to a specific variation.
         * @summary Get flag setting for user
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} key The user key
         * @param {string} featureKey The feature flag key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserFlagSetting(projKey: string, envKey: string, key: string, featureKey: string, options?: any): AxiosPromise<UserFlagSetting> {
            return localVarFp.getUserFlagSetting(projKey, envKey, key, featureKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the current flag settings for a given user. The most important attribute in the response is the `_value`. The `_value` is the setting that the user sees. For a boolean feature toggle, this is `true`, `false`, or `null`. `null` returns if there is no defined fallthrough value. The example response indicates that the user `Abbie_Braun` has the `sort.order` flag enabled and the `alternate.page` flag disabled.<br /><br />The setting attribute indicates whether you\'ve explicitly targeted a user to receive a particular variation. For example, if you have turned off a feature flag for a user, this setting will be `false`. A setting of `null` means that you haven\'t assigned that user to a specific variation.
         * @summary List flag settings for user
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} key The user key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserFlagSettings(projKey: string, envKey: string, key: string, options?: any): AxiosPromise<UserFlagSettings> {
            return localVarFp.getUserFlagSettings(projKey, envKey, key, options).then((request) => request(axios, basePath));
        },
        /**
         * Schedule the specified user for removal from individual user targeting on one or more flags. You can only schedule a user for removal on a single variation per flag.  To learn more about semantic patches, read [Updates](/#section/Updates).  If you previously patched the flag, and the patch included the user\'s data, LaunchDarkly continues to use that data. If LaunchDarkly has never encountered the user\'s key before, it calculates the flag values based on the user key alone. 
         * @summary Update expiring user target for flags
         * @param {string} projKey The project key.
         * @param {string} userKey The user key.
         * @param {string} envKey The environment key.
         * @param {PatchWithComment} patchWithComment 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchExpiringFlagsForUser(projKey: string, userKey: string, envKey: string, patchWithComment: PatchWithComment, options?: any): AxiosPromise<ExpiringUserTargetPatchResponse> {
            return localVarFp.patchExpiringFlagsForUser(projKey, userKey, envKey, patchWithComment, options).then((request) => request(axios, basePath));
        },
        /**
         * Enable or disable a feature flag for a user based on their key.  To change the setting, send a `PUT` request to this URL with a request body containing the flag value. For example, to disable the sort.order flag for the user `test@test.com`, send a `PUT` to `https://app.launchdarkly.com/api/v2/users/default/production/test@test.com/flags/sort.order` with the following body:  ```json {   \"setting\": false } ```  Omitting the setting attribute, or a setting of null, in your `PUT` \"clears\" the current setting for a user.  If you previously patched the flag, and the patch included the user\'s data, LaunchDarkly continues to use that data. If LaunchDarkly has never encountered the user\'s key before, it calculates the flag values based on the user key alone. 
         * @summary Update flag settings for user
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} key The user key
         * @param {string} featureKey The feature flag key
         * @param {ValuePut} valuePut 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putFlagSetting(projKey: string, envKey: string, key: string, featureKey: string, valuePut: ValuePut, options?: any): AxiosPromise<void> {
            return localVarFp.putFlagSetting(projKey, envKey, key, featureKey, valuePut, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserSettingsApi - object-oriented interface
 * @export
 * @class UserSettingsApi
 * @extends {BaseAPI}
 */
export class UserSettingsApi extends BaseAPI {
    /**
     * Get a list of flags for which the given user is scheduled for removal.
     * @summary Get expiring dates on flags for user
     * @param {string} projKey The project key.
     * @param {string} userKey The user key.
     * @param {string} envKey The environment key.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserSettingsApi
     */
    public getExpiringFlagsForUser(projKey: string, userKey: string, envKey: string, options?: any) {
        return UserSettingsApiFp(this.configuration).getExpiringFlagsForUser(projKey, userKey, envKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a single flag setting for a user by key. The most important attribute in the response is the `_value`. The `_value` is the current setting that the user sees. For a boolean feature toggle, this is `true`, `false`, or `null`. `null` returns if there is no defined fallback value. The example response indicates that the user `Abbie_Braun` has the `sort.order` flag enabled.<br /><br />The setting attribute indicates whether you\'ve explicitly targeted a user to receive a particular variation. For example, if you have turned off a feature flag for a user, this setting will be `false`. A setting of `null` means that you haven\'t assigned that user to a specific variation.
     * @summary Get flag setting for user
     * @param {string} projKey The project key
     * @param {string} envKey The environment key
     * @param {string} key The user key
     * @param {string} featureKey The feature flag key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserSettingsApi
     */
    public getUserFlagSetting(projKey: string, envKey: string, key: string, featureKey: string, options?: any) {
        return UserSettingsApiFp(this.configuration).getUserFlagSetting(projKey, envKey, key, featureKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get the current flag settings for a given user. The most important attribute in the response is the `_value`. The `_value` is the setting that the user sees. For a boolean feature toggle, this is `true`, `false`, or `null`. `null` returns if there is no defined fallthrough value. The example response indicates that the user `Abbie_Braun` has the `sort.order` flag enabled and the `alternate.page` flag disabled.<br /><br />The setting attribute indicates whether you\'ve explicitly targeted a user to receive a particular variation. For example, if you have turned off a feature flag for a user, this setting will be `false`. A setting of `null` means that you haven\'t assigned that user to a specific variation.
     * @summary List flag settings for user
     * @param {string} projKey The project key
     * @param {string} envKey The environment key
     * @param {string} key The user key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserSettingsApi
     */
    public getUserFlagSettings(projKey: string, envKey: string, key: string, options?: any) {
        return UserSettingsApiFp(this.configuration).getUserFlagSettings(projKey, envKey, key, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Schedule the specified user for removal from individual user targeting on one or more flags. You can only schedule a user for removal on a single variation per flag.  To learn more about semantic patches, read [Updates](/#section/Updates).  If you previously patched the flag, and the patch included the user\'s data, LaunchDarkly continues to use that data. If LaunchDarkly has never encountered the user\'s key before, it calculates the flag values based on the user key alone. 
     * @summary Update expiring user target for flags
     * @param {string} projKey The project key.
     * @param {string} userKey The user key.
     * @param {string} envKey The environment key.
     * @param {PatchWithComment} patchWithComment 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserSettingsApi
     */
    public patchExpiringFlagsForUser(projKey: string, userKey: string, envKey: string, patchWithComment: PatchWithComment, options?: any) {
        return UserSettingsApiFp(this.configuration).patchExpiringFlagsForUser(projKey, userKey, envKey, patchWithComment, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Enable or disable a feature flag for a user based on their key.  To change the setting, send a `PUT` request to this URL with a request body containing the flag value. For example, to disable the sort.order flag for the user `test@test.com`, send a `PUT` to `https://app.launchdarkly.com/api/v2/users/default/production/test@test.com/flags/sort.order` with the following body:  ```json {   \"setting\": false } ```  Omitting the setting attribute, or a setting of null, in your `PUT` \"clears\" the current setting for a user.  If you previously patched the flag, and the patch included the user\'s data, LaunchDarkly continues to use that data. If LaunchDarkly has never encountered the user\'s key before, it calculates the flag values based on the user key alone. 
     * @summary Update flag settings for user
     * @param {string} projKey The project key
     * @param {string} envKey The environment key
     * @param {string} key The user key
     * @param {string} featureKey The feature flag key
     * @param {ValuePut} valuePut 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserSettingsApi
     */
    public putFlagSetting(projKey: string, envKey: string, key: string, featureKey: string, valuePut: ValuePut, options?: any) {
        return UserSettingsApiFp(this.configuration).putFlagSetting(projKey, envKey, key, featureKey, valuePut, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a user by key
         * @summary Delete user
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} key The user key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUser: async (projKey: string, envKey: string, key: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('deleteUser', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('deleteUser', 'envKey', envKey)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('deleteUser', 'key', key)
            const localVarPath = `/api/v2/users/{projKey}/{envKey}/{key}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)))
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search users in LaunchDarkly based on their last active date, or a search query. Do not use to enumerate all users in LaunchDarkly. Instead use the [List users](getUsers) API resource.  > ### `offset` is deprecated > > `offset` is deprecated and will be removed in a future API version. You can still use `offset` and `limit` for pagination, but we recommend you use `sort` and `searchAfter` instead. `searchAfter` allows you to page through more than 10,000 users, but `offset` and `limit` do not. 
         * @summary Find users
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} [q] Full-text search for users based on name, first name, last name, e-mail address, or key
         * @param {number} [limit] Specifies the maximum number of items in the collection to return (max: 50, default: 20)
         * @param {number} [offset] Specifies the first item to return in the collection
         * @param {number} [after] A unix epoch time in milliseconds specifying the maximum last time a user requested a feature flag from LaunchDarkly
         * @param {string} [searchAfter] Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the &#x60;next&#x60; link we provide instead.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSearchUsers: async (projKey: string, envKey: string, q?: string, limit?: number, offset?: number, after?: number, searchAfter?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('getSearchUsers', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('getSearchUsers', 'envKey', envKey)
            const localVarPath = `/api/v2/user-search/{projKey}/{envKey}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (after !== undefined) {
                localVarQueryParameter['after'] = after;
            }

            if (searchAfter !== undefined) {
                localVarQueryParameter['searchAfter'] = searchAfter;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a user by key. The `user` object contains all attributes sent in `variation` calls for that key.
         * @summary Get user
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} key The user key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser: async (projKey: string, envKey: string, key: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('getUser', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('getUser', 'envKey', envKey)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('getUser', 'key', key)
            const localVarPath = `/api/v2/users/{projKey}/{envKey}/{key}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)))
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all users in the environment. Includes the total count of users. In each page, there is up to `limit` users returned. The default is 20. This is useful for exporting all users in the system for further analysis. To paginate through, follow the `next` link in the `_links` object, as [described in Representations](/#section/Representations). 
         * @summary List users
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {number} [limit] The number of elements to return per page
         * @param {string} [searchAfter] Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the &#x60;next&#x60; link we provide instead.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers: async (projKey: string, envKey: string, limit?: number, searchAfter?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projKey' is not null or undefined
            assertParamExists('getUsers', 'projKey', projKey)
            // verify required parameter 'envKey' is not null or undefined
            assertParamExists('getUsers', 'envKey', envKey)
            const localVarPath = `/api/v2/users/{projKey}/{envKey}`
                .replace(`{${"projKey"}}`, encodeURIComponent(String(projKey)))
                .replace(`{${"envKey"}}`, encodeURIComponent(String(envKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (searchAfter !== undefined) {
                localVarQueryParameter['searchAfter'] = searchAfter;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete a user by key
         * @summary Delete user
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} key The user key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteUser(projKey: string, envKey: string, key: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUser(projKey, envKey, key, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Search users in LaunchDarkly based on their last active date, or a search query. Do not use to enumerate all users in LaunchDarkly. Instead use the [List users](getUsers) API resource.  > ### `offset` is deprecated > > `offset` is deprecated and will be removed in a future API version. You can still use `offset` and `limit` for pagination, but we recommend you use `sort` and `searchAfter` instead. `searchAfter` allows you to page through more than 10,000 users, but `offset` and `limit` do not. 
         * @summary Find users
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} [q] Full-text search for users based on name, first name, last name, e-mail address, or key
         * @param {number} [limit] Specifies the maximum number of items in the collection to return (max: 50, default: 20)
         * @param {number} [offset] Specifies the first item to return in the collection
         * @param {number} [after] A unix epoch time in milliseconds specifying the maximum last time a user requested a feature flag from LaunchDarkly
         * @param {string} [searchAfter] Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the &#x60;next&#x60; link we provide instead.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSearchUsers(projKey: string, envKey: string, q?: string, limit?: number, offset?: number, after?: number, searchAfter?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Users>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSearchUsers(projKey, envKey, q, limit, offset, after, searchAfter, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a user by key. The `user` object contains all attributes sent in `variation` calls for that key.
         * @summary Get user
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} key The user key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUser(projKey: string, envKey: string, key: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUser(projKey, envKey, key, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all users in the environment. Includes the total count of users. In each page, there is up to `limit` users returned. The default is 20. This is useful for exporting all users in the system for further analysis. To paginate through, follow the `next` link in the `_links` object, as [described in Representations](/#section/Representations). 
         * @summary List users
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {number} [limit] The number of elements to return per page
         * @param {string} [searchAfter] Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the &#x60;next&#x60; link we provide instead.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUsers(projKey: string, envKey: string, limit?: number, searchAfter?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Users>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUsers(projKey, envKey, limit, searchAfter, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * Delete a user by key
         * @summary Delete user
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} key The user key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUser(projKey: string, envKey: string, key: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteUser(projKey, envKey, key, options).then((request) => request(axios, basePath));
        },
        /**
         * Search users in LaunchDarkly based on their last active date, or a search query. Do not use to enumerate all users in LaunchDarkly. Instead use the [List users](getUsers) API resource.  > ### `offset` is deprecated > > `offset` is deprecated and will be removed in a future API version. You can still use `offset` and `limit` for pagination, but we recommend you use `sort` and `searchAfter` instead. `searchAfter` allows you to page through more than 10,000 users, but `offset` and `limit` do not. 
         * @summary Find users
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} [q] Full-text search for users based on name, first name, last name, e-mail address, or key
         * @param {number} [limit] Specifies the maximum number of items in the collection to return (max: 50, default: 20)
         * @param {number} [offset] Specifies the first item to return in the collection
         * @param {number} [after] A unix epoch time in milliseconds specifying the maximum last time a user requested a feature flag from LaunchDarkly
         * @param {string} [searchAfter] Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the &#x60;next&#x60; link we provide instead.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSearchUsers(projKey: string, envKey: string, q?: string, limit?: number, offset?: number, after?: number, searchAfter?: string, options?: any): AxiosPromise<Users> {
            return localVarFp.getSearchUsers(projKey, envKey, q, limit, offset, after, searchAfter, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a user by key. The `user` object contains all attributes sent in `variation` calls for that key.
         * @summary Get user
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {string} key The user key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser(projKey: string, envKey: string, key: string, options?: any): AxiosPromise<User> {
            return localVarFp.getUser(projKey, envKey, key, options).then((request) => request(axios, basePath));
        },
        /**
         * List all users in the environment. Includes the total count of users. In each page, there is up to `limit` users returned. The default is 20. This is useful for exporting all users in the system for further analysis. To paginate through, follow the `next` link in the `_links` object, as [described in Representations](/#section/Representations). 
         * @summary List users
         * @param {string} projKey The project key
         * @param {string} envKey The environment key
         * @param {number} [limit] The number of elements to return per page
         * @param {string} [searchAfter] Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the &#x60;next&#x60; link we provide instead.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers(projKey: string, envKey: string, limit?: number, searchAfter?: string, options?: any): AxiosPromise<Users> {
            return localVarFp.getUsers(projKey, envKey, limit, searchAfter, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * Delete a user by key
     * @summary Delete user
     * @param {string} projKey The project key
     * @param {string} envKey The environment key
     * @param {string} key The user key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public deleteUser(projKey: string, envKey: string, key: string, options?: any) {
        return UsersApiFp(this.configuration).deleteUser(projKey, envKey, key, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Search users in LaunchDarkly based on their last active date, or a search query. Do not use to enumerate all users in LaunchDarkly. Instead use the [List users](getUsers) API resource.  > ### `offset` is deprecated > > `offset` is deprecated and will be removed in a future API version. You can still use `offset` and `limit` for pagination, but we recommend you use `sort` and `searchAfter` instead. `searchAfter` allows you to page through more than 10,000 users, but `offset` and `limit` do not. 
     * @summary Find users
     * @param {string} projKey The project key
     * @param {string} envKey The environment key
     * @param {string} [q] Full-text search for users based on name, first name, last name, e-mail address, or key
     * @param {number} [limit] Specifies the maximum number of items in the collection to return (max: 50, default: 20)
     * @param {number} [offset] Specifies the first item to return in the collection
     * @param {number} [after] A unix epoch time in milliseconds specifying the maximum last time a user requested a feature flag from LaunchDarkly
     * @param {string} [searchAfter] Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the &#x60;next&#x60; link we provide instead.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getSearchUsers(projKey: string, envKey: string, q?: string, limit?: number, offset?: number, after?: number, searchAfter?: string, options?: any) {
        return UsersApiFp(this.configuration).getSearchUsers(projKey, envKey, q, limit, offset, after, searchAfter, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a user by key. The `user` object contains all attributes sent in `variation` calls for that key.
     * @summary Get user
     * @param {string} projKey The project key
     * @param {string} envKey The environment key
     * @param {string} key The user key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getUser(projKey: string, envKey: string, key: string, options?: any) {
        return UsersApiFp(this.configuration).getUser(projKey, envKey, key, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all users in the environment. Includes the total count of users. In each page, there is up to `limit` users returned. The default is 20. This is useful for exporting all users in the system for further analysis. To paginate through, follow the `next` link in the `_links` object, as [described in Representations](/#section/Representations). 
     * @summary List users
     * @param {string} projKey The project key
     * @param {string} envKey The environment key
     * @param {number} [limit] The number of elements to return per page
     * @param {string} [searchAfter] Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the &#x60;next&#x60; link we provide instead.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getUsers(projKey: string, envKey: string, limit?: number, searchAfter?: string, options?: any) {
        return UsersApiFp(this.configuration).getUsers(projKey, envKey, limit, searchAfter, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UsersBetaApi - axios parameter creator
 * @export
 */
export const UsersBetaApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get all in-use user attributes in the specified environment. The set of in-use attributes typically consists of all attributes seen within the past 30 days.
         * @summary Get user attribute names
         * @param {string} projectKey The project key
         * @param {string} environmentKey The environment key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserAttributeNames: async (projectKey: string, environmentKey: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectKey' is not null or undefined
            assertParamExists('getUserAttributeNames', 'projectKey', projectKey)
            // verify required parameter 'environmentKey' is not null or undefined
            assertParamExists('getUserAttributeNames', 'environmentKey', environmentKey)
            const localVarPath = `/api/v2/user-attributes/{projectKey}/{environmentKey}`
                .replace(`{${"projectKey"}}`, encodeURIComponent(String(projectKey)))
                .replace(`{${"environmentKey"}}`, encodeURIComponent(String(environmentKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersBetaApi - functional programming interface
 * @export
 */
export const UsersBetaApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersBetaApiAxiosParamCreator(configuration)
    return {
        /**
         * Get all in-use user attributes in the specified environment. The set of in-use attributes typically consists of all attributes seen within the past 30 days.
         * @summary Get user attribute names
         * @param {string} projectKey The project key
         * @param {string} environmentKey The environment key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserAttributeNames(projectKey: string, environmentKey: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserAttributeNamesRep>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserAttributeNames(projectKey, environmentKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersBetaApi - factory interface
 * @export
 */
export const UsersBetaApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersBetaApiFp(configuration)
    return {
        /**
         * Get all in-use user attributes in the specified environment. The set of in-use attributes typically consists of all attributes seen within the past 30 days.
         * @summary Get user attribute names
         * @param {string} projectKey The project key
         * @param {string} environmentKey The environment key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserAttributeNames(projectKey: string, environmentKey: string, options?: any): AxiosPromise<UserAttributeNamesRep> {
            return localVarFp.getUserAttributeNames(projectKey, environmentKey, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersBetaApi - object-oriented interface
 * @export
 * @class UsersBetaApi
 * @extends {BaseAPI}
 */
export class UsersBetaApi extends BaseAPI {
    /**
     * Get all in-use user attributes in the specified environment. The set of in-use attributes typically consists of all attributes seen within the past 30 days.
     * @summary Get user attribute names
     * @param {string} projectKey The project key
     * @param {string} environmentKey The environment key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersBetaApi
     */
    public getUserAttributeNames(projectKey: string, environmentKey: string, options?: any) {
        return UsersBetaApiFp(this.configuration).getUserAttributeNames(projectKey, environmentKey, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * WebhooksApi - axios parameter creator
 * @export
 */
export const WebhooksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a webhook by ID.
         * @summary Delete webhook
         * @param {string} id The ID of the webhook to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWebhook: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteWebhook', 'id', id)
            const localVarPath = `/api/v2/webhooks/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetch a list of all webhooks.
         * @summary List webhooks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllWebhooks: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/webhooks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a single webhook by ID.
         * @summary Get webhook
         * @param {string} id The ID of the webhook
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWebhook: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getWebhook', 'id', id)
            const localVarPath = `/api/v2/webhooks/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a webhook\'s settings. The request should be a valid JSON Patch document describing the changes to be made to the webhook.
         * @summary Update webhook
         * @param {string} id The ID of the webhook to update
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchWebhook: async (id: string, patchOperation: Array<PatchOperation>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('patchWebhook', 'id', id)
            // verify required parameter 'patchOperation' is not null or undefined
            assertParamExists('patchWebhook', 'patchOperation', patchOperation)
            const localVarPath = `/api/v2/webhooks/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchOperation, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new webhook
         * @summary Creates a webhook
         * @param {WebhookPost} webhookPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postWebhook: async (webhookPost: WebhookPost, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'webhookPost' is not null or undefined
            assertParamExists('postWebhook', 'webhookPost', webhookPost)
            const localVarPath = `/api/v2/webhooks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(webhookPost, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WebhooksApi - functional programming interface
 * @export
 */
export const WebhooksApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WebhooksApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete a webhook by ID.
         * @summary Delete webhook
         * @param {string} id The ID of the webhook to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteWebhook(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteWebhook(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Fetch a list of all webhooks.
         * @summary List webhooks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllWebhooks(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Webhooks>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllWebhooks(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a single webhook by ID.
         * @summary Get webhook
         * @param {string} id The ID of the webhook
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWebhook(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Webhook>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWebhook(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a webhook\'s settings. The request should be a valid JSON Patch document describing the changes to be made to the webhook.
         * @summary Update webhook
         * @param {string} id The ID of the webhook to update
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchWebhook(id: string, patchOperation: Array<PatchOperation>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Webhook>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchWebhook(id, patchOperation, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a new webhook
         * @summary Creates a webhook
         * @param {WebhookPost} webhookPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postWebhook(webhookPost: WebhookPost, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Webhook>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postWebhook(webhookPost, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WebhooksApi - factory interface
 * @export
 */
export const WebhooksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WebhooksApiFp(configuration)
    return {
        /**
         * Delete a webhook by ID.
         * @summary Delete webhook
         * @param {string} id The ID of the webhook to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWebhook(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteWebhook(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch a list of all webhooks.
         * @summary List webhooks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllWebhooks(options?: any): AxiosPromise<Webhooks> {
            return localVarFp.getAllWebhooks(options).then((request) => request(axios, basePath));
        },
        /**
         * Get a single webhook by ID.
         * @summary Get webhook
         * @param {string} id The ID of the webhook
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWebhook(id: string, options?: any): AxiosPromise<Webhook> {
            return localVarFp.getWebhook(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a webhook\'s settings. The request should be a valid JSON Patch document describing the changes to be made to the webhook.
         * @summary Update webhook
         * @param {string} id The ID of the webhook to update
         * @param {Array<PatchOperation>} patchOperation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchWebhook(id: string, patchOperation: Array<PatchOperation>, options?: any): AxiosPromise<Webhook> {
            return localVarFp.patchWebhook(id, patchOperation, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new webhook
         * @summary Creates a webhook
         * @param {WebhookPost} webhookPost 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postWebhook(webhookPost: WebhookPost, options?: any): AxiosPromise<Webhook> {
            return localVarFp.postWebhook(webhookPost, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WebhooksApi - object-oriented interface
 * @export
 * @class WebhooksApi
 * @extends {BaseAPI}
 */
export class WebhooksApi extends BaseAPI {
    /**
     * Delete a webhook by ID.
     * @summary Delete webhook
     * @param {string} id The ID of the webhook to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public deleteWebhook(id: string, options?: any) {
        return WebhooksApiFp(this.configuration).deleteWebhook(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch a list of all webhooks.
     * @summary List webhooks
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public getAllWebhooks(options?: any) {
        return WebhooksApiFp(this.configuration).getAllWebhooks(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a single webhook by ID.
     * @summary Get webhook
     * @param {string} id The ID of the webhook
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public getWebhook(id: string, options?: any) {
        return WebhooksApiFp(this.configuration).getWebhook(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a webhook\'s settings. The request should be a valid JSON Patch document describing the changes to be made to the webhook.
     * @summary Update webhook
     * @param {string} id The ID of the webhook to update
     * @param {Array<PatchOperation>} patchOperation 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public patchWebhook(id: string, patchOperation: Array<PatchOperation>, options?: any) {
        return WebhooksApiFp(this.configuration).patchWebhook(id, patchOperation, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new webhook
     * @summary Creates a webhook
     * @param {WebhookPost} webhookPost 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public postWebhook(webhookPost: WebhookPost, options?: any) {
        return WebhooksApiFp(this.configuration).postWebhook(webhookPost, options).then((request) => request(this.axios, this.basePath));
    }
}


