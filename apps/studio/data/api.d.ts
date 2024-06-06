/**
 * Avoid importing this file and import the types directly from api-types
 */
<<<<<<< HEAD

/** OneOf type helpers */
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }
type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U
type OneOf<T extends any[]> = T extends [infer Only]
  ? Only
  : T extends [infer A, infer B, ...infer Rest]
    ? OneOf<[XOR<A, B>, ...Rest]>
    : never

export interface paths {
  '/platform/notifications': {
    /** Get notifications */
    get: operations['NotificationsController_getNotificationsV2']
    /** Delete notifications */
    delete: operations['NotificationsController_deleteNotifications']
    /** Update notifications */
    patch: operations['NotificationsController_updateNotificationsV2']
  }
  '/platform/notifications/summary': {
    /** Get an aggregated data of interest across all notifications for the user */
    get: operations['NotificationsController_getNotificationsSummary']
  }
  '/platform/notifications/archive-all': {
    /** Archives all notifications */
    patch: operations['NotificationsController_archiveAllNotifications']
  }
  '/platform/reset-password': {
    /** Reset password for email */
    post: operations['ResetPasswordController_resetPassword']
  }
  '/platform/feedback/send': {
    /** Send feedback */
    post: operations['SendFeedbackController_sendFeedback']
  }
  '/platform/feedback/downgrade': {
    /** Send exit survey to HubSpot */
    post: operations['SendExitSurveyController_sendExitSurvey']
  }
  '/platform/feedback/upgrade': {
    /** Send upgrade survey to survey_responses table */
    post: operations['SendUpgradeSurveyController_sendUpgradeSurvey']
  }
  '/platform/feedback/docs': {
    /** Send feedback on docs */
    post: operations['SendDocsFeedbackController_sendDocsFeedback']
  }
  '/platform/signup': {
    /** Sign up with email and password */
    post: operations['SignUpController_signUp']
  }
  '/platform/status': {
    /** Get infrastructure status */
    get: operations['StatusController_getStatus']
  }
  '/platform/projects-resource-warnings': {
    /**
     * Gets resource warnings for all projects accessible by the user
     * @description Only returns the minimal project info
     */
    get: operations['ProjectsResourceWarningsController_getProjectsResourceWarnings']
  }
  '/platform/tos/fly': {
    /** Redirects to Fly sso flow */
    get: operations['TermsOfServiceController_flyTosAccepted']
  }
  '/platform/auth/{ref}/config': {
    /** Gets GoTrue config */
    get: operations['GoTrueConfigController_getGoTrueConfig']
    /** Updates GoTrue config */
    patch: operations['GoTrueConfigController_updateGoTrueConfig']
  }
  '/platform/auth/{ref}/invite': {
    /** Sends an invite to the given email */
    post: operations['InviteController_sendInvite']
  }
  '/platform/auth/{ref}/magiclink': {
    /** Sends a magic link to the given email */
    post: operations['MagicLinkController_sendMagicLink']
  }
  '/platform/auth/{ref}/otp': {
    /** Sends an OTP to the given phone number */
    post: operations['OtpController_sendOtp']
  }
  '/platform/auth/{ref}/recover': {
    /** Sends a recovery email to the given email */
    post: operations['RecoverController_sendRecover']
  }
  '/platform/auth/{ref}/templates/{template}': {
    /** Gets GoTrue template */
    get: operations['TemplateController_getTemplate']
  }
  '/platform/auth/{ref}/users': {
    /** Gets users */
    get: operations['UsersController_getUsers']
    /** Delete user with given ID */
    delete: operations['UsersController_deleteUser']
  }
  '/platform/auth/{ref}/users/{id}/factors': {
    /** Delete all factors associated to a user */
    delete: operations['FactorsController_deleteFactors']
  }
  '/platform/database/{ref}/backups': {
    /** Gets project backups */
    get: operations['BackupsController_getBackups']
  }
  '/platform/database/{ref}/backups/enable-physical-backups': {
    /** Enable usage of physical backups */
    post: operations['BackupsController_enablePhysicalBackup']
  }
  '/platform/database/{ref}/backups/download': {
    /** Download project backup */
    post: operations['BackupsController_downloadBackup']
  }
  '/platform/database/{ref}/backups/restore': {
    /** Restore project backup */
    post: operations['BackupsController_restoreBackup']
  }
  '/platform/database/{ref}/backups/restore-physical': {
    /** Restore project with a physical backup */
    post: operations['BackupsController_restorePhysicalBackup']
  }
  '/platform/database/{ref}/backups/pitr': {
    /** Restore project to a previous point in time */
    post: operations['BackupsController_restorePointInTimeBackup']
  }
  '/platform/database/{ref}/hook-logs': {
    /** Gets hook logs with the given ID */
    get: operations['HooksController_getHookLogs']
  }
  '/platform/database/{ref}/hook-enable': {
    /** Enables Database Webhooks on the project */
    post: operations['HooksController_enableHooks']
  }
  '/platform/database/{ref}/owner-reassign': {
    /** Gets the status of owner reassignment */
    get: operations['OwnerController_getOwnerReassignStatus']
    /** Reassigns object owner from supabase_admin to temp */
    post: operations['OwnerController_applyOwnerReassign']
    /** Rollback object owner from temp to supabase_admin */
    delete: operations['OwnerController_rollbackOwnerReassign']
    /** Reassigns object owner from temp to postgres */
    patch: operations['OwnerController_finaliseOwnerReassign']
  }
  '/platform/organizations': {
    /** Gets user's organizations */
    get: operations['OrganizationsController_getOrganizations']
    /** Creates an organization */
    post: operations['OrganizationsController_createOrganizationWithTier']
  }
  '/platform/organizations/fly/{fly_organization_id}': {
    /** Gets organization linked to fly organization id */
    get: operations['OrganizationsController_getOrganizationByFlyOrganizationId']
  }
  '/platform/organizations/{slug}': {
    /** Deletes organization */
    delete: operations['OrganizationSlugController_deleteOrganization']
    /** Updates organization */
    patch: operations['OrganizationSlugController_updateOrganization']
  }
  '/platform/organizations/{slug}/customer': {
    /** Gets the Stripe customer */
    get: operations['CustomerController_getCustomer']
    /** Updates the Stripe customer */
    patch: operations['CustomerController_updateCustomer']
  }
  '/platform/organizations/{slug}/roles': {
    /** Gets the given organization's roles */
    get: operations['RolesController_getAllRolesV2']
  }
  '/platform/organizations/{slug}/tax-ids': {
    /** Gets the given organization's tax IDs */
    get: operations['TaxIdsController_getTaxIds']
    /** Creates a tax ID for the given organization */
    post: operations['TaxIdsController_createTaxId']
    /** Delete the tax ID with the given ID */
    delete: operations['TaxIdsController_deleteTaxId']
  }
  '/platform/organizations/{slug}/transfer': {
    /** Transfers the organization to the given member */
    post: operations['TransferController_transferOrganization']
  }
  '/platform/organizations/{slug}/daily-stats': {
    /** Gets daily organization stats */
    get: operations['OrgDailyStatsController_getDailyStats']
  }
  '/platform/organizations/{slug}/daily-stats/compute': {
    /** Gets daily organization stats for compute */
    get: operations['OrgDailyStatsController_getDailyStatsCompute']
  }
  '/platform/organizations/{slug}/usage': {
    /** Gets usage stats */
    get: operations['OrgUsageController_getOrgUsage']
  }
  '/platform/organizations/{slug}/documents/standard-security-questionnaire': {
    /** Get standard security questionnaire URL */
    get: operations['OrgDocumentsController_getStandardSecurityQuestionnaireUrl']
  }
  '/platform/organizations/{slug}/documents/soc2-type-2-report': {
    /** Get SOC2 Type 2 report URL */
    get: operations['OrgDocumentsController_getSoc2Type2ReportUrl']
  }
  '/platform/organizations/{slug}/audit': {
    /** Gets an organization's audit logs */
    get: operations['OrgAuditLogsController_getAuditLogs']
  }
  '/platform/organizations/{slug}/members/invite': {
    /** Gets invited users */
    get: operations['InviteController_getInvitedUsers']
    /** Invites user */
    post: operations['InviteController_inviteUser']
    /** Delete invited user */
    delete: operations['InviteController_deleteInvitedUser']
  }
  '/platform/organizations/{slug}/members/join': {
    /** Gets invite */
    get: operations['JoinController_getInvite']
    /** Joins organization */
    post: operations['JoinController_joinOrganization']
  }
  '/platform/organizations/{slug}/members': {
    /** Gets organization's members */
    get: operations['MembersController_getMembers']
  }
  '/platform/organizations/{slug}/members/{gotrue_id}': {
    /** Removes organization member */
    delete: operations['MembersController_deleteMember']
    /** Updates organization member role */
    patch: operations['MembersController_updateMemberRoleV2']
  }
  '/platform/organizations/{slug}/members/reached-free-project-limit': {
    /** Gets organization members who have reached their free project limit */
    get: operations['ReachedFreeProjectLimitController_getMembersWhoReachedFreeProjectLimit']
  }
  '/platform/organizations/{slug}/members/invitations': {
    /** Gets organization invitations */
    get: operations['InvitationsController_getAllInvitations']
    /** Creates organization invitation */
    post: operations['InvitationsController_createInvitation']
  }
  '/platform/organizations/{slug}/members/invitations/{token}': {
    /** Gets organization invitation by token */
    get: operations['InvitationsController_getInvitationByToken']
    /** Accepts organization invitation by token */
    post: operations['InvitationsController_acceptInvitationByToken']
  }
  '/platform/organizations/{slug}/members/invitations/{id}': {
    /** Deletes organization invitation with given id */
    delete: operations['InvitationsController_deleteInvitation']
  }
  '/platform/organizations/{slug}/payments': {
    /** Gets Stripe payment methods for the given organization */
    get: operations['PaymentsController_getPaymentMethods']
    /** Detach Stripe payment method with the given card ID */
    delete: operations['PaymentsController_detachPaymentMethod']
  }
  '/platform/organizations/{slug}/payments/setup-intent': {
    /** Sets up a payment method */
    post: operations['SetupIntentOrgController_setUpPaymentMethod']
  }
  '/platform/organizations/{slug}/billing/subscription': {
    /** Gets the current subscription */
    get: operations['SubscriptionController_getSubscription']
    /** Updates subscription */
    put: operations['SubscriptionController_updateSubscription']
  }
  '/platform/organizations/{slug}/billing/subscription/preview': {
    /** Preview subscription changes */
    post: operations['SubscriptionController_previewSubscriptionChange']
  }
  '/platform/organizations/{slug}/billing/subscription/schedule': {
    /** Deletes any upcoming subscription schedule */
    delete: operations['SubscriptionController_deleteSubscriptionSchedule']
  }
  '/platform/organizations/{slug}/billing/plans': {
    /** Gets subscription plans */
    get: operations['OrgPlansController_getAvailablePlans']
  }
  '/platform/organizations/{slug}/billing/invoices/upcoming': {
    /** Gets the upcoming invoice */
    get: operations['OrgInvoicesController_getUpcomingInvoice']
  }
  '/platform/pg-meta/{ref}/column-privileges': {
    /** Retrieve column privileges */
    get: operations['ColumnPrivilegesController_getColumnPrivileges']
    /** Grant column privileges */
    post: operations['ColumnPrivilegesController_grantColumnPrivileges']
    /** Revoke column privileges */
    delete: operations['ColumnPrivilegesController_revokeColumnPrivileges']
  }
  '/platform/pg-meta/{ref}/columns': {
    /** Gets project pg.columns */
    get: operations['ColumnsController_getColumns']
    /** Creates project pg.column */
    post: operations['ColumnsController_createColumn']
    /** Deletes project pg.column with the given ID */
    delete: operations['ColumnsController_deleteColumn']
    /** Updates project pg.column with the given ID */
    patch: operations['ColumnsController_updateColumn']
  }
  '/platform/pg-meta/{ref}/extensions': {
    /** Gets project pg.extensions */
    get: operations['ExtensionsController_getExtensions']
    /** Creates project pg.extension */
    post: operations['ExtensionsController_createExtension']
    /** Deletes project pg.extension with the given ID */
    delete: operations['ExtensionsController_deleteExtension']
  }
  '/platform/pg-meta/{ref}/foreign-tables': {
    /** Retrieve database foreign tables */
    get: operations['ForeignTablesController_getForeignTables']
  }
  '/platform/pg-meta/{ref}/functions': {
    /** Gets project pg.functions */
    get: operations['FunctionsController_getFunctions']
    /** Creates project pg.function */
    post: operations['FunctionsController_createFunction']
    /** Deletes project pg.function with the given ID */
    delete: operations['FunctionsController_deleteFunction']
    /** Updates project pg.function with the given ID */
    patch: operations['FunctionsController_updateFunction']
  }
  '/platform/pg-meta/{ref}/materialized-views': {
    /** Retrieve database materialized views */
    get: operations['MaterializedViewsController_getMaterializedViews']
  }
  '/platform/pg-meta/{ref}/policies': {
    /** Gets project pg.policies */
    get: operations['PoliciesController_getPolicies']
    /** Creates project pg.policy */
    post: operations['PoliciesController_createPolicy']
    /** Deletes project pg.policy with the given ID */
    delete: operations['PoliciesController_deletePolicy']
    /** Updates project pg.policy with the given ID */
    patch: operations['PoliciesController_updatePolicy']
  }
  '/platform/pg-meta/{ref}/publications': {
    /** Gets project pg.publications */
    get: operations['PublicationsController_getPublications']
    /** Gets project pg.publications */
    post: operations['PublicationsController_createPublication']
    /** Deletes project pg.publication with the given ID */
    delete: operations['PublicationsController_deletePublication']
    /** Updates project pg.publication with the given ID */
    patch: operations['PublicationsController_updatePublication']
  }
  '/platform/pg-meta/{ref}/query': {
    /** Run sql query */
    post: operations['QueryController_runQuery']
  }
  '/platform/pg-meta/{ref}/query/format': {
    /** Format sql query */
    post: operations['QueryController_formatQuery']
  }
  '/platform/pg-meta/{ref}/query/validate': {
    /** Validate sql query */
    post: operations['QueryController_validateQuery']
  }
  '/platform/pg-meta/{ref}/roles': {
    /** Gets project pg.roles */
    get: operations['RolesController_getRoles']
    /** Creates project pg.role */
    post: operations['RolesController_createRole']
    /** Deletes project pg.role with the given ID */
    delete: operations['RolesController_deleteRole']
    /** Updates project pg.role with the given ID */
    patch: operations['RolesController_updateRole']
  }
  '/platform/pg-meta/{ref}/schemas': {
    /** Gets project pg.schemas */
    get: operations['SchemasController_getSchemas']
    /** Creates project pg.schema */
    post: operations['SchemasController_createSchema']
    /** Deletes project pg.schema with the given ID */
    delete: operations['SchemasController_deleteSchema']
    /** Updates project pg.schema with the given ID */
    patch: operations['SchemasController_updateSchema']
  }
  '/platform/pg-meta/{ref}/search/tables': {
    /** Searches project pg.tables. Return maximum 50 results. */
    post: operations['SearchController_searchTables']
  }
  '/platform/pg-meta/{ref}/search/columns': {
    /** Searches project pg.columns. Return maximum 50 results. */
    post: operations['SearchController_searchColumns']
  }
  '/platform/pg-meta/{ref}/table-privileges': {
    /** Retrieve table privileges */
    get: operations['TablePrivilegesController_getTablePrivileges']
    /** Grant table privileges */
    post: operations['TablePrivilegesController_grantTablePrivileges']
    /** Revoke table privileges */
    delete: operations['TablePrivilegesController_revokeTablePrivileges']
  }
  '/platform/pg-meta/{ref}/tables': {
    /** Gets project pg.tables or pg.table with the given ID */
    get: operations['TablesController_getTables']
    /** Creates project pg.table */
    post: operations['TablesController_createTable']
    /** Deletes project pg.table with the given ID */
    delete: operations['TablesController_deleteTable']
    /** Updates project pg.table with the given ID */
    patch: operations['TablesController_updateTable']
  }
  '/platform/pg-meta/{ref}/triggers': {
    /** Gets project pg.triggers */
    get: operations['TriggersController_getTriggers']
    /** Creates project pg.trigger */
    post: operations['TriggersController_createTrigger']
    /** Deletes project pg.trigger with the given ID */
    delete: operations['TriggersController_deleteTrigger']
    /** Updates project pg.trigger with the given ID */
    patch: operations['TriggersController_updateTrigger']
  }
  '/platform/pg-meta/{ref}/types': {
    /** Gets project pg.types */
    get: operations['TypesController_getTypes']
  }
  '/platform/pg-meta/{ref}/views': {
    /** Retrieve database views */
    get: operations['ViewsController_getViews']
  }
  '/platform/profile/access-tokens': {
    /** Gets the user's access tokens */
    get: operations['AccessTokensController_getAccessTokens']
    /** Creates a new access token */
    post: operations['AccessTokensController_createAccessToken']
  }
  '/platform/profile/access-tokens/{id}': {
    /** Gets the access token with the given ID */
    get: operations['AccessTokensController_getAccessToken']
    /** Deletes the access token with the given ID */
    delete: operations['AccessTokensController_deleteAccessToken']
  }
  '/platform/profile/audit': {
    /** Gets a user's audit logs */
    get: operations['UserAuditLogsController_getAuditLogs']
  }
  '/platform/profile/search': {
    /** Search profiles by username, email with the given keywords */
    post: operations['SearchProfileController_searchProfile']
  }
  '/platform/profile/subscriptions': {
    /** Gets the user's subscription statistics */
    get: operations['SubscriptionsController_getSubscriptionsStatistics']
  }
  '/platform/profile/password-check': {
    /** Check password strength */
    post: operations['PasswordCheckController_checkPassword']
  }
  '/platform/profile/permissions': {
    /** Gets all the user's permissions */
    get: operations['PermissionsController_getPermissions']
  }
  '/platform/profile': {
    /** Gets the user's profile */
    get: operations['ProfileController_getProfile']
    /** Creates user's profile */
    post: operations['ProfileController_createProfile']
    /** Deletes user's profile */
    delete: operations['ProfileController_deleteProfile']
    /** Updates user's profile */
    patch: operations['ProfileController_updateProfile']
  }
  '/platform/projects': {
    /**
     * Gets all projects that belong to the authenticated user
     * @description Only returns the minimal project info
     */
    get: operations['ProjectsController_getProjects']
    /** Creates a project */
    post: operations['ProjectsController_createProject']
  }
  '/platform/projects/fly/{fly_extension_id}': {
    /** Gets project linked to fly extension id */
    get: operations['ProjectsController_getProjectByFlyExtensionId']
  }
  '/platform/projects/{ref}/content': {
    /** Gets project's content */
    get: operations['ContentController_getContent']
    /** Updates project's content */
    put: operations['ContentController_updateWholeContent']
    /** Creates project's content */
    post: operations['ContentController_createContent']
    /** Deletes project's contents */
    delete: operations['ContentController_deleteContents']
    /** Updates project's content */
    patch: operations['ContentController_updateContent']
  }
  '/platform/projects/{ref}/daily-stats': {
    /** Gets daily project stats */
    get: operations['DailyStatsController_getDailyStats']
  }
  '/platform/projects/{ref}/databases': {
    /** Gets non-removed databases of a specified project */
    get: operations['DatabasesController_getDatabases']
  }
  '/platform/projects/{ref}/databases-statuses': {
    /** Gets statuses of databases within a project */
    get: operations['DatabasesStatusesController_getStatus']
  }
  '/platform/projects/{ref}/db-password': {
    /** Updates the database password */
    patch: operations['DbPasswordController_updatePassword']
  }
  '/platform/projects/{ref}/live': {
    /** Gets project health check */
    get: operations['HealthCheckController_projectHealthCheck']
  }
  '/platform/projects/{ref}/load-balancers': {
    /** Gets non-removed databases of a specified project */
    get: operations['LoadBalancersController_getLoadBalancers']
  }
  '/platform/projects/{ref}/api/rest': {
    /** Gets project OpenApi */
    get: operations['ApiController_projectOpenApi']
  }
  '/platform/projects/{ref}/api/graphql': {
    /** Queries project Graphql */
    post: operations['ApiController_projectGraphql']
  }
  '/platform/projects/{ref}/infra-monitoring': {
    /** Gets project's usage metrics */
    get: operations['InfraMonitoringController_getUsageMetrics']
  }
  '/platform/projects/{ref}/pause': {
    /** Pauses the project */
    post: operations['PauseController_pauseProject']
  }
  '/platform/projects/{ref}/resize': {
    /** Resize database disk */
    post: operations['ResizeController_resizeDatabase']
  }
  '/platform/projects/{ref}/restart': {
    /** Restarts project */
    post: operations['RestartController_restartProject']
  }
  '/platform/projects/{ref}': {
    /** Gets a specific project that belongs to the authenticated user */
    get: operations['ProjectsRefController_getProject']
    /** Deletes the given project */
    delete: operations['ProjectsRefController_deleteProject']
    /** Updates the given project */
    patch: operations['ProjectsRefController_updateProject']
  }
  '/platform/projects/{ref}/restore': {
    /** Restores project */
    post: operations['RestoreController_restoreProject']
  }
  '/platform/projects/{ref}/restart-services': {
    /** Restarts given services */
    post: operations['RestartServicesController_restartServices']
  }
  '/platform/projects/{ref}/settings': {
    /** Gets project's settings */
    get: operations['SettingsController_getProjectApi']
  }
  '/platform/projects/{ref}/status': {
    /** Gets project's status */
    get: operations['StatusController_getStatus']
  }
  '/platform/projects/{ref}/update': {
    /**
     * Updates the project
     * @deprecated
     * @description Replaced by PATCH /platform/projects/:ref
     */
    post: operations['UpdateController_updateProject']
  }
  '/platform/projects/{ref}/transfer/preview': {
    /** Previews transfering a project to a different organizations, shows eligibility and impact. */
    post: operations['ProjectTransferController_previewTransfer']
  }
  '/platform/projects/{ref}/transfer': {
    /** Transfers a project to a different organization. */
    post: operations['ProjectTransferController_transferProject']
  }
  '/platform/projects/{ref}/analytics/endpoints/functions.inv-stats': {
    /** Gets a project's function invocation statistics */
    get: operations['FunctionInvocationLogsController_getStatus']
  }
  '/platform/projects/{ref}/analytics/endpoints/functions.req-stats': {
    /** Gets a project's function request statistics */
    get: operations['FunctionRequestLogsController_getStatus']
  }
  '/platform/projects/{ref}/analytics/endpoints/functions.resource-usage': {
    /** Gets a project's function resource usage */
    get: operations['FunctionResourceLogsController_getStatus']
  }
  '/platform/projects/{ref}/analytics/endpoints/logs.all': {
    /** Gets project's logs */
    get: operations['LogsController_getApiPaths']
  }
  '/platform/projects/{ref}/analytics/endpoints/usage.api-counts': {
    /** Gets project's usage api counts */
    get: operations['UsageApiController_getApiCounts']
  }
  '/platform/projects/{ref}/analytics/endpoints/usage.api-requests-count': {
    /** Gets project's usage api requests count */
    get: operations['UsageApiController_getApiRequestsCount']
  }
  '/platform/projects/{ref}/analytics/warehouse/tenant': {
    /** Gets project's warehouse tenant from logflare */
    get: operations['TenantController_getTenant']
  }
  '/platform/projects/{ref}/analytics/warehouse/collections': {
    /** Lists project's warehouse collections from logflare */
    get: operations['CollectionController_listCollections']
    /** Create a warehouse collection */
    post: operations['CollectionController_createCollection']
  }
  '/platform/projects/{ref}/analytics/warehouse/collections/{token}': {
    /** Get a warehouse collection */
    get: operations['CollectionController_getCollection']
    /** Delete a warehouse collection */
    delete: operations['CollectionController_deleteCollection']
    /** Update a warehouse collection */
    patch: operations['CollectionController_updateCollection']
  }
  '/platform/projects/{ref}/analytics/warehouse/access-tokens': {
    /** Lists project's warehouse access tokens from logflare */
    get: operations['AccessTokenController_listAccessTokens']
    /** Create a warehouse access token */
    post: operations['AccessTokenController_createAccessToken']
  }
  '/platform/projects/{ref}/analytics/warehouse/access-tokens/{token}': {
    /** Delete a warehouse access token */
    delete: operations['AccessTokenController_deleteAccessToken']
  }
  '/platform/projects/{ref}/analytics/warehouse/endpoints': {
    /** Lists project's warehouse endpoints from logflare */
    get: operations['EndpointController_listEndpoints']
    /** Create a warehouse endpoint */
    post: operations['EndpointController_createEndpoint']
  }
  '/platform/projects/{ref}/analytics/warehouse/endpoints/{token}': {
    /** Update a warehouse endpoint */
    put: operations['EndpointController_updateEndpoint']
    /** Delete a warehouse endpoint */
    delete: operations['EndpointController_deleteEndpoint']
  }
  '/platform/projects/{ref}/analytics/warehouse/query': {
    /** Lists project's warehouse queries from logflare */
    get: operations['QueryController_runQuery']
  }
  '/platform/projects/{ref}/config/pgbouncer': {
    /** Gets project's pgbouncer config */
    get: operations['PgbouncerConfigController_getPgbouncerConfig']
    /** Updates project's pgbouncer config */
    patch: operations['PgbouncerConfigController_updatePgbouncerConfig']
  }
  '/platform/projects/{ref}/config/pgbouncer/status': {
    /** Gets project's pgbouncer status */
    get: operations['PgbouncerConfigController_getPgbouncerStatus']
  }
  '/platform/projects/{ref}/config/postgrest': {
    /** Gets project's postgrest config */
    get: operations['PostgrestConfigController_getPostgRESTConfig']
    /** Updates project's postgrest config */
    patch: operations['PostgrestConfigController_updatePostgRESTConfig']
  }
  '/platform/projects/{ref}/config/postgres': {
    /** Gets project's Postgres config */
    get: operations['PostgresConfigController_getConfig']
    /** Updates project's Postgres config */
    put: operations['PostgresConfigController_updateConfig']
  }
  '/platform/projects/{ref}/config/secrets': {
    /** Updates project's secrets config */
    patch: operations['SecretsConfigController_updateConfig']
  }
  '/platform/projects/{ref}/config/storage': {
    /** Gets project's storage config */
    get: operations['StorageConfigController_getConfig']
    /** Updates project's storage config */
    patch: operations['StorageConfigController_updateConfig']
  }
  '/platform/projects/{ref}/config/supavisor': {
    /** Gets project's supavisor config */
    get: operations['SupavisorConfigController_getSupavisorConfig']
    /** Updates project's supavisor config */
    patch: operations['SupavisorConfigController_updateSupavisorConfig']
  }
  '/platform/projects/{ref}/billing/addons': {
    /** Gets project addons */
    get: operations['ProjectAddonController_getProjectAddons']
    /** Updates project addon */
    post: operations['ProjectAddonController_updateAddon']
  }
  '/platform/projects/{ref}/billing/addons/{addon_variant}': {
    /** Removes project addon */
    delete: operations['ProjectAddonController_removeAddon']
  }
  '/platform/props/project/{ref}/api': {
    /**
     * Gets project's api info
     * @deprecated
     */
    get: operations['ApiController_getProjectApi']
  }
  '/platform/props/project/{ref}/jwt-secret-update-status': {
    /** Gets the last JWT secret update status */
    get: operations['JwtSecretUpdateStatusController_getJwtSecretUpdateStatus']
  }
  '/platform/props/project/{ref}/settings': {
    /**
     * Gets project's settings
     * @deprecated
     */
    get: operations['SettingsController_getProjectApi']
  }
  '/platform/storage/{ref}/buckets/{id}': {
    /** Gets bucket */
    get: operations['StorageBucketIdController_getBucket']
    /** Deletes bucket */
    delete: operations['StorageBucketIdController_deleteBucket']
    /** Updates bucket */
    patch: operations['StorageBucketIdController_updateBucket']
  }
  '/platform/storage/{ref}/buckets/{id}/empty': {
    /** Removes all objects inside a single bucket. */
    post: operations['StorageBucketIdController_emptyBucket']
  }
  '/platform/storage/{ref}/buckets': {
    /** Gets list of buckets */
    get: operations['StorageBucketsController_getBuckets']
    /** Create bucket */
    post: operations['StorageBucketsController_createBucket']
  }
  '/platform/storage/{ref}/buckets/{id}/objects/list': {
    /** Gets list of objects with the given bucket */
    post: operations['StorageObjectsController_getObjects']
  }
  '/platform/storage/{ref}/buckets/{id}/objects/public-url': {
    /** Creates URL for an asset in a public bucket */
    post: operations['StorageObjectsController_createPublicUrl']
  }
  '/platform/storage/{ref}/buckets/{id}/objects/download': {
    /** Downloads a file from a private bucket */
    post: operations['StorageObjectsController_download']
  }
  '/platform/storage/{ref}/buckets/{id}/objects/sign': {
    /** Creates a signed URL */
    post: operations['StorageObjectsController_createSignedUrl']
  }
  '/platform/storage/{ref}/buckets/{id}/objects/sign-multi': {
    /** Gets multiple signed URLs */
    post: operations['StorageObjectsController_createSignedUrls']
  }
  '/platform/storage/{ref}/buckets/{id}/objects/copy': {
    /** Copys object */
    post: operations['StorageObjectsController_copyObject']
  }
  '/platform/storage/{ref}/buckets/{id}/objects/move': {
    /** Move object */
    post: operations['StorageObjectsController_moveObject']
  }
  '/platform/storage/{ref}/buckets/{id}/objects': {
    /** Deletes objects */
    delete: operations['StorageObjectsController_deleteObjects']
  }
  '/platform/storage/{ref}/credentials': {
    /** Gets project storage credentials */
    get: operations['StorageS3CredentialsController_getAllCredentials']
    /** Creates project storage credential */
    post: operations['StorageS3CredentialsController_createCredential']
  }
  '/platform/storage/{ref}/credentials/{id}': {
    /** Deletes project storage credential */
    delete: operations['StorageS3CredentialsController_deleteCredential']
  }
  '/platform/stripe/invoices': {
    /** Gets invoices for the given customer */
    get: operations['InvoicesController_getInvoices']
    /** Gets the total count of invoices for the given customer */
    head: operations['InvoicesController_countInvoices']
  }
  '/platform/stripe/invoices/overdue': {
    /** Gets information about overdue invoices that relate to the authenticated user */
    get: operations['InvoicesController_getOverdueInvoices']
  }
  '/platform/stripe/invoices/{id}': {
    /** Gets invoice with the given invoice ID */
    get: operations['InvoicesController_getInvoice']
  }
  '/platform/stripe/setup-intent': {
    /** Sets up a payment method */
    post: operations['SetupIntentController_setUpPaymentMethod']
  }
  '/platform/telemetry/event': {
    /** Sends analytics server event */
    post: operations['TelemetryEventController_sendServerEvent']
  }
  '/platform/telemetry/identify': {
    /** Send analytics identify event */
    post: operations['TelemetryIdentifyController_identify']
  }
  '/platform/telemetry/page': {
    /** Send server page event */
    post: operations['TelemetryPageController_sendServerPage']
  }
  '/platform/telemetry/activity': {
    /** Sends mixpanel server activity */
    post: operations['TelemetryActivityController_sendServerActivity']
  }
  '/platform/telemetry/pageview': {
    /** Send mixpanel page event */
    post: operations['TelemetryPageviewController_sendServerPageViewed']
  }
  '/platform/vercel/token': {
    /** Gets the Vercel access token for the given code */
    get: operations['VercelAccessTokenController_getAccessToken']
  }
  '/platform/vercel/projects': {
    /** Gets the list of Vercel projects */
    get: operations['VercelProjectsController_getVercelProjects']
  }
  '/platform/vercel/projects/{id}': {
    /** Gets the Vercel project with the given ID */
    get: operations['VercelProjectsController_getVercelProject']
  }
  '/platform/vercel/projects/envs': {
    /** Gets the environment variables for the given project ID on behalf of the given team ID */
    get: operations['VercelEnvironmentVariablesController_getEnvironmentVariables']
    /** Creates the environment variable for the given project ID on behalf of the given team ID */
    post: operations['VercelEnvironmentVariablesController_createEnvironmentVariable']
  }
  '/platform/integrations': {
    /** Gets user's integrations */
    get: operations['IntegrationsController_getProjectConnections']
  }
  '/platform/integrations/{slug}': {
    /** Gets integration with the given organization slug */
    get: operations['IntegrationsController_getProjectConnectionsForOrg']
  }
  '/platform/integrations/vercel': {
    /**
     * Create vercel integration
     * @description Exchanges a vercel code for an access token and saves the access token to the new integration record
     */
    post: operations['VercelIntegrationController_createVercelIntegration']
  }
  '/platform/integrations/vercel/{organization_integration_id}': {
    /** Removes Vercel organization integration with the given id */
    delete: operations['VercelIntegrationController_removeVercelIntegration']
  }
  '/platform/integrations/vercel/projects/{organization_integration_id}': {
    /** Gets vercel projects with the given organization integration id */
    get: operations['VercelProjectController_getVercelProjects']
  }
  '/platform/integrations/vercel/connections/{organization_integration_id}': {
    /** Gets installed vercel project connections for the given organization integration */
    get: operations['VercelConnectionsController_getVercelConnections']
  }
  '/platform/integrations/vercel/connections': {
    /** Connects a Vercel project to a supabase project */
    post: operations['VercelConnectionsController_createVercelConnection']
  }
  '/platform/integrations/vercel/connections/{connection_id}/sync-envs': {
    /** Syncs supabase project envs with given connection id */
    post: operations['VercelConnectionsController_syncVercelConnectionEnvironments']
  }
  '/platform/integrations/vercel/connections/{connection_id}': {
    /** Deletes vercel project connection */
    delete: operations['VercelConnectionsController_deleteVercelConnection']
    /** Updates a Vercel connection for a supabase project */
    patch: operations['VercelConnectionsController_updateVercelConnection']
  }
  '/platform/integrations/github/authorization': {
    /** Get GitHub authorization */
    get: operations['GitHubAuthorizationsController_getGitHubAuthorization']
    /** Create GitHub authorization */
    post: operations['GitHubAuthorizationsController_createGitHubAuthorization']
  }
  '/platform/integrations/github/connections': {
    /** List organization GitHub connections */
    get: operations['GitHubConnectionsController_listOrganizationGitHubConnections']
    /** Connects a GitHub project to a supabase project */
    post: operations['GitHubConnectionsController_createGitHubConnection']
  }
  '/platform/integrations/github/connections/{connection_id}': {
    /** Deletes github project connection */
    delete: operations['GitHubConnectionsController_deleteGitHubConnection']
    /** Updates a GitHub connection for a supabase project */
    patch: operations['GitHubConnectionsController_updateGitHubConnection']
  }
  '/platform/integrations/github/branches/{connectionId}': {
    /** List GitHub connection branches */
    get: operations['GitHubBranchesController_listConnectionBranches']
  }
  '/platform/integrations/github/branches/{connectionId}/{branchName}': {
    /** Get GitHub connection branch */
    get: operations['GitHubBranchesController_getConnectionBranch']
  }
  '/platform/integrations/github/repositories': {
    /** Gets GitHub repositories for user */
    get: operations['GitHubRepositoriesController_listRepositories']
  }
  '/platform/cli/login': {
    /** Create CLI login session */
    post: operations['CliLoginController_createCliLoginSession']
  }
  '/platform/cli/login/{session_id}': {
    /** Retrieve CLI login session */
    get: operations['CliLoginController_getCliLoginSession']
  }
  '/system/auth/{ref}/templates/{template}': {
    /** Gets GoTrue template */
    get: operations['AuthTemplateController_getTemplate']
  }
  '/system/database/{ref}/owner/owner-reassign': {
    /** Gets the status of owner reassignment */
    get: operations['DatabaseOwnerController_getOwnerReassignStatus']
    /** Reassigns object owner from supabase_admin to temp */
    post: operations['DatabaseOwnerController_applyOwnerReassign']
    /** Rollback object owner from temp to supabase_admin */
    delete: operations['DatabaseOwnerController_rollbackOwnerReassign']
    /** Reassigns object owner from temp to postgres */
    patch: operations['DatabaseOwnerController_finaliseOwnerReassign']
  }
  '/system/database/{ref}/password': {
    /** Updates the database password */
    patch: operations['DatabasePasswordController_updatePassword']
  }
  '/system/github-secret-alert': {
    /** Reset JWT if leaked keys found by GitHub secret scanning */
    post: operations['GithubSecretAlertController_resetJwt']
  }
  '/system/projects/{ref}/functions/{function_slug}': {
    /**
     * Update a function
     * @description Updates a function with the specified slug and project.
     */
    patch: operations['SystemFunctionSlugController_updateFunction']
  }
  '/system/projects/{ref}/functions': {
    /**
     * List all functions
     * @description Returns all functions you've previously added to the specified project.
     */
    get: operations['SystemFunctionsController_getFunctions']
    /**
     * Create a function
     * @description Creates a function and adds it to the specified project.
     */
    post: operations['SystemFunctionsController_createFunction']
    /** Deletes all Edge Functions from a project */
    delete: operations['SystemFunctionsController_systemDeleteAllFunctions']
  }
  '/system/projects/{ref}/secrets': {
    /**
     * List all secrets
     * @description Returns all secrets you've previously added to the specified project.
     */
    get: operations['SystemSecretsController_getSecrets']
    /**
     * Bulk create secrets
     * @description Creates multiple secrets and adds them to the specified project.
     */
    post: operations['SystemSecretsController_createSecrets']
    /**
     * Bulk delete secrets
     * @description Deletes all secrets with the given names from the specified project
     */
    delete: operations['SystemSecretsController_deleteSecrets']
  }
  '/system/projects/{ref}/secrets/refresh': {
    /** Refreshes secrets */
    post: operations['SecretsRefreshController_refreshSecrets']
  }
  '/system/health': {
    /** Get API health status */
    get: operations['HealthController_getStatus']
  }
  '/system/projects/{ref}/health-reporting': {
    /** Updates a project's health status. */
    put: operations['HealthReportingController_updateStatus']
  }
  '/system/projects/{ref}/ha-events': {
    /** Records an HA event */
    put: operations['HaEventsController_updateStatus']
  }
  '/system/projects/{ref}/credentials/aws': {
    /** Allows a project to obtain temporary credentials. */
    post: operations['AwsCredentialsController_getTemporaryCredentials']
  }
  '/system/projects/{ref}/billing/addons': {
    /** Updates project addon */
    post: operations['AddonsController_updateAddon']
  }
  '/system/projects/{ref}/billing/addons/{addon_variant}': {
    /** Removes project addon */
    delete: operations['AddonsController_removeAddon']
  }
  '/system/projects/{ref}/config/update-jwt/complete': {
    /** Handle update project jwt on completion */
    post: operations['ProjectUpdateJwtController_completeUpdateJwt']
  }
  '/system/projects': {
    /** Create a project */
    post: operations['ProjectsController_createProject']
  }
  '/system/organizations/{slug}/usage': {
    /** Gets usage stats */
    get: operations['OrgUsageSystemController_getOrgUsage']
  }
  '/system/organizations/{slug}/billing/partner/usage-and-costs': {
    /** Gets the partner usage and costs */
    get: operations['PartnerBillingSystemController_getPartnerUsageAndCosts']
  }
  '/system/organizations/{slug}/billing/subscription': {
    /** Gets the current subscription */
    get: operations['OrgSubscriptionSystemController_getSubscription']
    /** Updates subscription */
    put: operations['OrgSubscriptionSystemController_updateSubscription']
  }
  '/system/organizations/{slug}/restrictions': {
    /** Updates restriction status of an org */
    put: operations['OrgRestrictionsSystemController_updateRestriction']
  }
  '/system/partner-organizations': {
    /** Creates a partner organization */
    post: operations['AwsPartnerOrganizationsSystemController_createPartnerOrganization']
  }
  '/system/integrations/vercel/webhooks': {
    /** Processes Vercel event */
    post: operations['VercelWebhooksController_processEvent']
  }
  '/system/integrations/github/webhooks': {
    /** Processes GitHub event */
    post: operations['GitHubWebhooksController_processEvent']
  }
  '/system/stripe/webhooks-v2': {
    /** Processes Stripe event */
    post: operations['StripeWebhooksController_processEvent']
  }
  '/system/stripe/webhooks': {
    /** Processes Stripe event */
    post: operations['StripeWebhooksController_processEvent']
  }
  '/v0/notifications': {
    /** Get notifications */
    get: operations['NotificationsController_getNotificationsV2']
    /** Delete notifications */
    delete: operations['NotificationsController_deleteNotifications']
    /** Update notifications */
    patch: operations['NotificationsController_updateNotificationsV2']
  }
  '/v0/notifications/summary': {
    /** Get an aggregated data of interest across all notifications for the user */
    get: operations['NotificationsController_getNotificationsSummary']
  }
  '/v0/notifications/archive-all': {
    /** Archives all notifications */
    patch: operations['NotificationsController_archiveAllNotifications']
  }
  '/v0/status': {
    /** Get infrastructure status */
    get: operations['StatusController_getStatus']
  }
  '/v0/auth/{ref}/config': {
    /** Gets GoTrue config */
    get: operations['GoTrueConfigController_getGoTrueConfig']
    /** Updates GoTrue config */
    patch: operations['GoTrueConfigController_updateGoTrueConfig']
  }
  '/v0/auth/{ref}/invite': {
    /** Sends an invite to the given email */
    post: operations['InviteController_sendInvite']
  }
  '/v0/auth/{ref}/magiclink': {
    /** Sends a magic link to the given email */
    post: operations['MagicLinkController_sendMagicLink']
  }
  '/v0/auth/{ref}/otp': {
    /** Sends an OTP to the given phone number */
    post: operations['OtpController_sendOtp']
  }
  '/v0/auth/{ref}/recover': {
    /** Sends a recovery email to the given email */
    post: operations['RecoverController_sendRecover']
  }
  '/v0/auth/{ref}/templates/{template}': {
    /** Gets GoTrue template */
    get: operations['TemplateController_getTemplate']
  }
  '/v0/auth/{ref}/users': {
    /** Gets users */
    get: operations['UsersController_getUsers']
    /** Delete user with given ID */
    delete: operations['UsersController_deleteUser']
  }
  '/v0/auth/{ref}/users/{id}/factors': {
    /** Delete all factors associated to a user */
    delete: operations['FactorsController_deleteFactors']
  }
  '/v0/database/{ref}/backups': {
    /** Gets project backups */
    get: operations['BackupsController_getBackups']
  }
  '/v0/database/{ref}/backups/enable-physical-backups': {
    /** Enable usage of physical backups */
    post: operations['BackupsController_enablePhysicalBackup']
  }
  '/v0/database/{ref}/backups/download': {
    /** Download project backup */
    post: operations['BackupsController_downloadBackup']
  }
  '/v0/database/{ref}/backups/restore': {
    /** Restore project backup */
    post: operations['BackupsController_restoreBackup']
  }
  '/v0/database/{ref}/backups/restore-physical': {
    /** Restore project with a physical backup */
    post: operations['BackupsController_restorePhysicalBackup']
  }
  '/v0/database/{ref}/backups/pitr': {
    /** Restore project to a previous point in time */
    post: operations['BackupsController_restorePointInTimeBackup']
  }
  '/v0/database/{ref}/hook-logs': {
    /** Gets hook logs with the given ID */
    get: operations['HooksController_getHookLogs']
  }
  '/v0/database/{ref}/hook-enable': {
    /** Enables Database Webhooks on the project */
    post: operations['HooksController_enableHooks']
  }
  '/v0/organizations': {
    /** Gets user's organizations */
    get: operations['OrganizationsController_getOrganizations']
    /** Creates an organization */
    post: operations['OrganizationsController_createOrganizationWithTier']
  }
  '/v0/organizations/fly/{fly_organization_id}': {
    /** Gets organization linked to fly organization id */
    get: operations['OrganizationsController_getOrganizationByFlyOrganizationId']
  }
  '/v0/organizations/{slug}': {
    /** Deletes organization */
    delete: operations['OrganizationSlugController_deleteOrganization']
    /** Updates organization */
    patch: operations['OrganizationSlugController_updateOrganization']
  }
  '/v0/organizations/{slug}/roles': {
    /** Gets the given organization's roles */
    get: operations['RolesController_getAllRolesV2']
  }
  '/v0/organizations/{slug}/members/invite': {
    /** Gets invited users */
    get: operations['InviteController_getInvitedUsers']
    /** Invites user */
    post: operations['InviteController_inviteUser']
    /** Delete invited user */
    delete: operations['InviteController_deleteInvitedUser']
  }
  '/v0/organizations/{slug}/members/join': {
    /** Gets invite */
    get: operations['JoinController_getInvite']
    /** Joins organization */
    post: operations['JoinController_joinOrganization']
  }
  '/v0/organizations/{slug}/members': {
    /** Gets organization's members */
    get: operations['MembersController_getMembers']
  }
  '/v0/organizations/{slug}/members/{gotrue_id}': {
    /** Removes organization member */
    delete: operations['MembersController_deleteMember']
    /** Updates organization member role */
    patch: operations['MembersController_updateMemberRoleV2']
  }
  '/v0/pg-meta/{ref}/column-privileges': {
    /** Retrieve column privileges */
    get: operations['ColumnPrivilegesController_getColumnPrivileges']
    /** Grant column privileges */
    post: operations['ColumnPrivilegesController_grantColumnPrivileges']
    /** Revoke column privileges */
    delete: operations['ColumnPrivilegesController_revokeColumnPrivileges']
  }
  '/v0/pg-meta/{ref}/columns': {
    /** Gets project pg.columns */
    get: operations['ColumnsController_getColumns']
    /** Creates project pg.column */
    post: operations['ColumnsController_createColumn']
    /** Deletes project pg.column with the given ID */
    delete: operations['ColumnsController_deleteColumn']
    /** Updates project pg.column with the given ID */
    patch: operations['ColumnsController_updateColumn']
  }
  '/v0/pg-meta/{ref}/extensions': {
    /** Gets project pg.extensions */
    get: operations['ExtensionsController_getExtensions']
    /** Creates project pg.extension */
    post: operations['ExtensionsController_createExtension']
    /** Deletes project pg.extension with the given ID */
    delete: operations['ExtensionsController_deleteExtension']
  }
  '/v0/pg-meta/{ref}/foreign-tables': {
    /** Retrieve database foreign tables */
    get: operations['ForeignTablesController_getForeignTables']
  }
  '/v0/pg-meta/{ref}/functions': {
    /** Gets project pg.functions */
    get: operations['FunctionsController_getFunctions']
    /** Creates project pg.function */
    post: operations['FunctionsController_createFunction']
    /** Deletes project pg.function with the given ID */
    delete: operations['FunctionsController_deleteFunction']
    /** Updates project pg.function with the given ID */
    patch: operations['FunctionsController_updateFunction']
  }
  '/v0/pg-meta/{ref}/materialized-views': {
    /** Retrieve database materialized views */
    get: operations['MaterializedViewsController_getMaterializedViews']
  }
  '/v0/pg-meta/{ref}/policies': {
    /** Gets project pg.policies */
    get: operations['PoliciesController_getPolicies']
    /** Creates project pg.policy */
    post: operations['PoliciesController_createPolicy']
    /** Deletes project pg.policy with the given ID */
    delete: operations['PoliciesController_deletePolicy']
    /** Updates project pg.policy with the given ID */
    patch: operations['PoliciesController_updatePolicy']
  }
  '/v0/pg-meta/{ref}/publications': {
    /** Gets project pg.publications */
    get: operations['PublicationsController_getPublications']
    /** Gets project pg.publications */
    post: operations['PublicationsController_createPublication']
    /** Deletes project pg.publication with the given ID */
    delete: operations['PublicationsController_deletePublication']
    /** Updates project pg.publication with the given ID */
    patch: operations['PublicationsController_updatePublication']
  }
  '/v0/pg-meta/{ref}/query': {
    /** Run sql query */
    post: operations['QueryController_runQuery']
  }
  '/v0/pg-meta/{ref}/query/format': {
    /** Format sql query */
    post: operations['QueryController_formatQuery']
  }
  '/v0/pg-meta/{ref}/query/validate': {
    /** Validate sql query */
    post: operations['QueryController_validateQuery']
  }
  '/v0/pg-meta/{ref}/roles': {
    /** Gets project pg.roles */
    get: operations['RolesController_getRoles']
    /** Creates project pg.role */
    post: operations['RolesController_createRole']
    /** Deletes project pg.role with the given ID */
    delete: operations['RolesController_deleteRole']
    /** Updates project pg.role with the given ID */
    patch: operations['RolesController_updateRole']
  }
  '/v0/pg-meta/{ref}/schemas': {
    /** Gets project pg.schemas */
    get: operations['SchemasController_getSchemas']
    /** Creates project pg.schema */
    post: operations['SchemasController_createSchema']
    /** Deletes project pg.schema with the given ID */
    delete: operations['SchemasController_deleteSchema']
    /** Updates project pg.schema with the given ID */
    patch: operations['SchemasController_updateSchema']
  }
  '/v0/pg-meta/{ref}/search/tables': {
    /** Searches project pg.tables. Return maximum 50 results. */
    post: operations['SearchController_searchTables']
  }
  '/v0/pg-meta/{ref}/search/columns': {
    /** Searches project pg.columns. Return maximum 50 results. */
    post: operations['SearchController_searchColumns']
  }
  '/v0/pg-meta/{ref}/table-privileges': {
    /** Retrieve table privileges */
    get: operations['TablePrivilegesController_getTablePrivileges']
    /** Grant table privileges */
    post: operations['TablePrivilegesController_grantTablePrivileges']
    /** Revoke table privileges */
    delete: operations['TablePrivilegesController_revokeTablePrivileges']
  }
  '/v0/pg-meta/{ref}/tables': {
    /** Gets project pg.tables or pg.table with the given ID */
    get: operations['TablesController_getTables']
    /** Creates project pg.table */
    post: operations['TablesController_createTable']
    /** Deletes project pg.table with the given ID */
    delete: operations['TablesController_deleteTable']
    /** Updates project pg.table with the given ID */
    patch: operations['TablesController_updateTable']
  }
  '/v0/pg-meta/{ref}/triggers': {
    /** Gets project pg.triggers */
    get: operations['TriggersController_getTriggers']
    /** Creates project pg.trigger */
    post: operations['TriggersController_createTrigger']
    /** Deletes project pg.trigger with the given ID */
    delete: operations['TriggersController_deleteTrigger']
    /** Updates project pg.trigger with the given ID */
    patch: operations['TriggersController_updateTrigger']
  }
  '/v0/pg-meta/{ref}/types': {
    /** Gets project pg.types */
    get: operations['TypesController_getTypes']
  }
  '/v0/pg-meta/{ref}/views': {
    /** Retrieve database views */
    get: operations['ViewsController_getViews']
  }
  '/v0/projects': {
    /**
     * Gets all projects that belong to the authenticated user
     * @description Only returns the minimal project info
     */
    get: operations['ProjectsController_getProjects']
    /** Creates a project */
    post: operations['ProjectsController_createProject']
  }
  '/v0/projects/fly/{fly_extension_id}': {
    /** Gets project linked to fly extension id */
    get: operations['ProjectsController_getProjectByFlyExtensionId']
  }
  '/v0/projects/metrics': {
    /**
     * Get metrics
     * @description At most 50 projects can be queried at a time.
     * Currently supports '1d', '3d', and '7d' intervals.
     */
    get: operations['V0ProjectsMetricsController_getProjectsMetrics']
  }
  '/v0/projects/{ref}/content': {
    /** Gets project's content */
    get: operations['ContentController_getContent']
    /** Updates project's content */
    put: operations['ContentController_updateWholeContent']
    /** Creates project's content */
    post: operations['ContentController_createContent']
    /** Deletes project's contents */
    delete: operations['ContentController_deleteContents']
    /** Updates project's content */
    patch: operations['ContentController_updateContent']
  }
  '/v0/projects/{ref}/databases': {
    /** Gets non-removed databases of a specified project */
    get: operations['DatabasesController_getDatabases']
  }
  '/v0/projects/{ref}/databases-statuses': {
    /** Gets statuses of databases within a project */
    get: operations['DatabasesStatusesController_getStatus']
  }
  '/v0/projects/{ref}/db-password': {
    /** Updates the database password */
    patch: operations['DbPasswordController_updatePassword']
  }
  '/v0/projects/{ref}/live': {
    /** Gets project health check */
    get: operations['HealthCheckController_projectHealthCheck']
  }
  '/v0/projects/{ref}/load-balancers': {
    /** Gets non-removed databases of a specified project */
    get: operations['LoadBalancersController_getLoadBalancers']
  }
  '/v0/projects/{ref}/api/rest': {
    /** Gets project OpenApi */
    get: operations['ApiController_projectOpenApi']
  }
  '/v0/projects/{ref}/api/graphql': {
    /** Queries project Graphql */
    post: operations['ApiController_projectGraphql']
  }
  '/v0/projects/{ref}/infra-monitoring': {
    /** Gets project's usage metrics */
    get: operations['InfraMonitoringController_getUsageMetrics']
  }
  '/v0/projects/{ref}/pause': {
    /** Pauses the project */
    post: operations['PauseController_pauseProject']
  }
  '/v0/projects/{ref}/resize': {
    /** Resize database disk */
    post: operations['ResizeController_resizeDatabase']
  }
  '/v0/projects/{ref}/restart': {
    /** Restarts project */
    post: operations['RestartController_restartProject']
  }
  '/v0/projects/{ref}': {
    /** Gets a specific project that belongs to the authenticated user */
    get: operations['ProjectsRefController_getProject']
    /** Deletes the given project */
    delete: operations['ProjectsRefController_deleteProject']
    /** Updates the given project */
    patch: operations['ProjectsRefController_updateProject']
  }
  '/v0/projects/{ref}/restore': {
    /** Restores project */
    post: operations['RestoreController_restoreProject']
  }
  '/v0/projects/{ref}/restart-services': {
    /** Restarts given services */
    post: operations['RestartServicesController_restartServices']
  }
  '/v0/projects/{ref}/settings': {
    /** Gets project's settings */
    get: operations['SettingsController_getProjectApi']
  }
  '/v0/projects/{ref}/status': {
    /** Gets project's status */
    get: operations['StatusController_getStatus']
  }
  '/v0/projects/{ref}/analytics/endpoints/functions.inv-stats': {
    /** Gets a project's function invocation statistics */
    get: operations['FunctionInvocationLogsController_getStatus']
  }
  '/v0/projects/{ref}/analytics/endpoints/functions.req-stats': {
    /** Gets a project's function request statistics */
    get: operations['FunctionRequestLogsController_getStatus']
  }
  '/v0/projects/{ref}/analytics/endpoints/functions.resource-usage': {
    /** Gets a project's function resource usage */
    get: operations['FunctionResourceLogsController_getStatus']
  }
  '/v0/projects/{ref}/analytics/endpoints/logs.all': {
    /** Gets project's logs */
    get: operations['LogsController_getApiPaths']
  }
  '/v0/projects/{ref}/analytics/endpoints/usage.api-counts': {
    /** Gets project's usage api counts */
    get: operations['UsageApiController_getApiCounts']
  }
  '/v0/projects/{ref}/analytics/endpoints/usage.api-requests-count': {
    /** Gets project's usage api requests count */
    get: operations['UsageApiController_getApiRequestsCount']
  }
  '/v0/projects/{ref}/analytics/warehouse/tenant': {
    /** Gets project's warehouse tenant from logflare */
    get: operations['TenantController_getTenant']
  }
  '/v0/projects/{ref}/analytics/warehouse/collections': {
    /** Lists project's warehouse collections from logflare */
    get: operations['CollectionController_listCollections']
    /** Create a warehouse collection */
    post: operations['CollectionController_createCollection']
  }
  '/v0/projects/{ref}/analytics/warehouse/collections/{token}': {
    /** Get a warehouse collection */
    get: operations['CollectionController_getCollection']
    /** Delete a warehouse collection */
    delete: operations['CollectionController_deleteCollection']
    /** Update a warehouse collection */
    patch: operations['CollectionController_updateCollection']
  }
  '/v0/projects/{ref}/analytics/warehouse/access-tokens': {
    /** Lists project's warehouse access tokens from logflare */
    get: operations['AccessTokenController_listAccessTokens']
    /** Create a warehouse access token */
    post: operations['AccessTokenController_createAccessToken']
  }
  '/v0/projects/{ref}/analytics/warehouse/access-tokens/{token}': {
    /** Delete a warehouse access token */
    delete: operations['AccessTokenController_deleteAccessToken']
  }
  '/v0/projects/{ref}/analytics/warehouse/endpoints': {
    /** Lists project's warehouse endpoints from logflare */
    get: operations['EndpointController_listEndpoints']
    /** Create a warehouse endpoint */
    post: operations['EndpointController_createEndpoint']
  }
  '/v0/projects/{ref}/analytics/warehouse/endpoints/{token}': {
    /** Update a warehouse endpoint */
    put: operations['EndpointController_updateEndpoint']
    /** Delete a warehouse endpoint */
    delete: operations['EndpointController_deleteEndpoint']
  }
  '/v0/projects/{ref}/analytics/warehouse/query': {
    /** Lists project's warehouse queries from logflare */
    get: operations['QueryController_runQuery']
  }
  '/v0/projects/{ref}/config/pgbouncer': {
    /** Gets project's pgbouncer config */
    get: operations['PgbouncerConfigController_getPgbouncerConfig']
    /** Updates project's pgbouncer config */
    patch: operations['PgbouncerConfigController_updatePgbouncerConfig']
  }
  '/v0/projects/{ref}/config/pgbouncer/status': {
    /** Gets project's pgbouncer status */
    get: operations['PgbouncerConfigController_getPgbouncerStatus']
  }
  '/v0/projects/{ref}/config/postgrest': {
    /** Gets project's postgrest config */
    get: operations['PostgrestConfigController_getPostgRESTConfig']
    /** Updates project's postgrest config */
    patch: operations['PostgrestConfigController_updatePostgRESTConfig']
  }
  '/v0/projects/{ref}/config/postgres': {
    /** Gets project's Postgres config */
    get: operations['PostgresConfigController_getConfig']
    /** Updates project's Postgres config */
    put: operations['PostgresConfigController_updateConfig']
  }
  '/v0/projects/{ref}/config/secrets': {
    /** Updates project's secrets config */
    patch: operations['SecretsConfigController_updateConfig']
  }
  '/v0/projects/{ref}/config/storage': {
    /** Gets project's storage config */
    get: operations['StorageConfigController_getConfig']
    /** Updates project's storage config */
    patch: operations['StorageConfigController_updateConfig']
  }
  '/v0/projects/{ref}/config/supavisor': {
    /** Gets project's supavisor config */
    get: operations['SupavisorConfigController_getSupavisorConfig']
    /** Updates project's supavisor config */
    patch: operations['SupavisorConfigController_updateSupavisorConfig']
  }
  '/v0/projects/{ref}/billing/addons': {
    /** Gets project addons */
    get: operations['ProjectAddonController_getProjectAddons']
    /** Updates project addon */
    post: operations['ProjectAddonController_updateAddon']
  }
  '/v0/projects/{ref}/billing/addons/{addon_variant}': {
    /** Removes project addon */
    delete: operations['ProjectAddonController_removeAddon']
  }
  '/v0/storage/{ref}/buckets/{id}': {
    /** Gets bucket */
    get: operations['StorageBucketIdController_getBucket']
    /** Deletes bucket */
    delete: operations['StorageBucketIdController_deleteBucket']
    /** Updates bucket */
    patch: operations['StorageBucketIdController_updateBucket']
  }
  '/v0/storage/{ref}/buckets/{id}/empty': {
    /** Removes all objects inside a single bucket. */
    post: operations['StorageBucketIdController_emptyBucket']
  }
  '/v0/storage/{ref}/buckets': {
    /** Gets list of buckets */
    get: operations['StorageBucketsController_getBuckets']
    /** Create bucket */
    post: operations['StorageBucketsController_createBucket']
  }
  '/v0/storage/{ref}/buckets/{id}/objects/list': {
    /** Gets list of objects with the given bucket */
    post: operations['StorageObjectsController_getObjects']
  }
  '/v0/storage/{ref}/buckets/{id}/objects/public-url': {
    /** Creates URL for an asset in a public bucket */
    post: operations['StorageObjectsController_createPublicUrl']
  }
  '/v0/storage/{ref}/buckets/{id}/objects/download': {
    /** Downloads a file from a private bucket */
    post: operations['StorageObjectsController_download']
  }
  '/v0/storage/{ref}/buckets/{id}/objects/sign': {
    /** Creates a signed URL */
    post: operations['StorageObjectsController_createSignedUrl']
  }
  '/v0/storage/{ref}/buckets/{id}/objects/sign-multi': {
    /** Gets multiple signed URLs */
    post: operations['StorageObjectsController_createSignedUrls']
  }
  '/v0/storage/{ref}/buckets/{id}/objects/copy': {
    /** Copys object */
    post: operations['StorageObjectsController_copyObject']
  }
  '/v0/storage/{ref}/buckets/{id}/objects/move': {
    /** Move object */
    post: operations['StorageObjectsController_moveObject']
  }
  '/v0/storage/{ref}/buckets/{id}/objects': {
    /** Deletes objects */
    delete: operations['StorageObjectsController_deleteObjects']
  }
  '/v0/storage/{ref}/credentials': {
    /** Gets project storage credentials */
    get: operations['StorageS3CredentialsController_getAllCredentials']
    /** Creates project storage credential */
    post: operations['StorageS3CredentialsController_createCredential']
  }
  '/v0/storage/{ref}/credentials/{id}': {
    /** Deletes project storage credential */
    delete: operations['StorageS3CredentialsController_deleteCredential']
  }
  '/v1/branches/{branch_id}': {
    /**
     * Get database branch config
     * @description Fetches configurations of the specified database branch
     */
    get: operations['BranchController_getBranchDetails']
    /**
     * Delete a database branch
     * @description Deletes the specified database branch
     */
    delete: operations['BranchController_deleteBranch']
    /**
     * Update database branch config
     * @description Updates the configuration of the specified database branch
     */
    patch: operations['BranchController_updateBranch']
  }
  '/v1/branches/{branch_id}/reset': {
    /**
     * Resets a database branch
     * @description Resets the specified database branch
     */
    post: operations['BranchController_resetBranch']
  }
  '/v1/projects': {
    /**
     * List all projects
     * @description Returns a list of all projects you've previously created.
     */
    get: operations['V1ProjectsController_getProjects']
    /** Create a project */
    post: operations['V1ProjectsController_createProject']
  }
  '/v1/projects/{ref}/api-keys': {
    /** Get project api keys */
    get: operations['ApiKeysController_getProjectApiKeys']
  }
  '/v1/projects/{ref}/branches': {
    /**
     * List all database branches
     * @description Returns all database branches of the specified project.
     */
    get: operations['BranchesController_getBranches']
    /**
     * Create a database branch
     * @description Creates a database branch from the specified project.
     */
    post: operations['BranchesController_createBranch']
    /**
     * Disables preview branching
     * @description Disables preview branching for the specified project
     */
    delete: operations['BranchesController_disableBranch']
  }
  '/v1/projects/{ref}/custom-hostname': {
    /** Gets project's custom hostname config */
    get: operations['CustomHostnamesController_getCustomHostnameConfig']
    /** Deletes a project's custom hostname configuration */
    delete: operations['CustomHostnamesController_removeCustomHostnameConfig']
  }
  '/v1/projects/{ref}/custom-hostname/initialize': {
    /** Updates project's custom hostname configuration */
    post: operations['CustomHostnamesController_createCustomHostnameConfig']
  }
  '/v1/projects/{ref}/custom-hostname/reverify': {
    /** Attempts to verify the DNS configuration for project's custom hostname configuration */
    post: operations['CustomHostnamesController_reverify']
  }
  '/v1/projects/{ref}/custom-hostname/activate': {
    /** Activates a custom hostname for a project. */
    post: operations['CustomHostnamesController_activate']
  }
  '/v1/projects/{ref}/network-bans/retrieve': {
    /** Gets project's network bans */
    post: operations['NetworkBansController_getNetworkBans']
  }
  '/v1/projects/{ref}/network-bans': {
    /** Remove network bans. */
    delete: operations['NetworkBansController_removeNetworkBan']
  }
  '/v1/projects/{ref}/network-restrictions': {
    /** Gets project's network restrictions */
    get: operations['NetworkRestrictionsController_getNetworkRestrictions']
  }
  '/v1/projects/{ref}/network-restrictions/apply': {
    /** Updates project's network restrictions */
    post: operations['NetworkRestrictionsController_applyNetworkRestrictions']
  }
  '/v1/projects/{ref}/pgsodium': {
    /** Gets project's pgsodium config */
    get: operations['PgsodiumConfigController_getPgsodiumConfig']
    /** Updates project's pgsodium config. Updating the root_key can cause all data encrypted with the older key to become inaccessible. */
    put: operations['PgsodiumConfigController_updatePgsodiumConfig']
  }
  '/v1/projects/{ref}/postgrest': {
    /** Gets project's postgrest config */
    get: operations['PostgrestConfigController_getPostgRESTConfig']
    /** Updates project's postgrest config */
    patch: operations['PostgrestConfigController_updatePostgRESTConfig']
  }
  '/v1/projects/{ref}': {
    /** Deletes the given project */
    delete: operations['ProjectsRefController_deleteProject']
  }
  '/v1/projects/{ref}/secrets': {
    /**
     * List all secrets
     * @description Returns all secrets you've previously added to the specified project.
     */
    get: operations['SecretsController_getSecrets']
    /**
     * Bulk create secrets
     * @description Creates multiple secrets and adds them to the specified project.
     */
    post: operations['SecretsController_createSecrets']
    /**
     * Bulk delete secrets
     * @description Deletes all secrets with the given names from the specified project
     */
    delete: operations['SecretsController_deleteSecrets']
  }
  '/v1/projects/{ref}/ssl-enforcement': {
    /** Get project's SSL enforcement configuration. */
    get: operations['SslEnforcementController_getSslEnforcementConfig']
    /** Update project's SSL enforcement configuration. */
    put: operations['SslEnforcementController_updateSslEnforcementConfig']
  }
  '/v1/projects/{ref}/types/typescript': {
    /**
     * Generate TypeScript types
     * @description Returns the TypeScript types of your schema for use with supabase-js.
     */
    get: operations['TypesController_getTypescriptTypes']
  }
  '/v1/projects/{ref}/vanity-subdomain': {
    /** Gets current vanity subdomain config */
    get: operations['VanitySubdomainsController_getVanitySubdomainConfig']
    /** Deletes a project's vanity subdomain configuration */
    delete: operations['VanitySubdomainsController_removeVanitySubdomainConfig']
  }
  '/v1/projects/{ref}/vanity-subdomain/check-availability': {
    /** Checks vanity subdomain availability */
    post: operations['VanitySubdomainsController_checkVanitySubdomainAvailability']
  }
  '/v1/projects/{ref}/vanity-subdomain/activate': {
    /** Activates a vanity subdomain for a project. */
    post: operations['VanitySubdomainsController_activateVanitySubdomainPlease']
  }
  '/v1/projects/{ref}/upgrade': {
    /** Upgrades the project's Postgres version */
    post: operations['UpgradeController_upgradeProject']
  }
  '/v1/projects/{ref}/upgrade/eligibility': {
    /** Returns the project's eligibility for upgrades */
    get: operations['UpgradeController_upgradeEligibilityInformation']
  }
  '/v1/projects/{ref}/upgrade/status': {
    /** Gets the latest status of the project's upgrade */
    get: operations['UpgradeController_getUpgradeStatus']
  }
  '/v1/projects/{ref}/readonly': {
    /** Returns project's readonly mode status */
    get: operations['ReadOnlyController_getReadOnlyModeStatus']
  }
  '/v1/projects/{ref}/readonly/temporary-disable': {
    /** Disables project's readonly mode for the next 15 minutes */
    post: operations['ReadOnlyController_temporarilyDisableReadonlyMode']
  }
  '/v1/projects/{ref}/read-replicas/setup': {
    /** Set up a read replica */
    post: operations['ReadReplicaController_setUpReadReplica']
  }
  '/v1/projects/{ref}/read-replicas/remove': {
    /** Remove a read replica */
    post: operations['ReadReplicaController_removeReadReplica']
  }
  '/v1/projects/{ref}/health': {
    /** Gets project's service health status */
    get: operations['ServiceHealthController_checkServiceHealth']
  }
  '/v1/projects/{ref}/config/database/postgres': {
    /** Gets project's Postgres config */
    get: operations['AuthPostgresConfigController_getConfig']
    /** Updates project's Postgres config */
    put: operations['AuthPostgresConfigController_updateConfig']
  }
  '/v1/projects/{ref}/config/database/pgbouncer': {
    /** Get project's pgbouncer config */
    get: operations['V1PgbouncerConfigController_v1GetPgbouncerConfig']
  }
  '/v1/projects/{ref}/config/auth': {
    /** Gets project's auth config */
    get: operations['V1AuthConfigController_getV1AuthConfig']
    /** Updates a project's auth config */
    patch: operations['V1AuthConfigController_updateV1AuthConfig']
  }
  '/v1/projects/{ref}/config/auth/third-party-auth': {
    /** Lists all third-party auth integrations */
    get: operations['ThirdPartyAuthController_listTPAForProject']
    /** Creates a new third-party auth integration */
    post: operations['ThirdPartyAuthController_createTPAForProject']
  }
  '/v1/projects/{ref}/config/auth/third-party-auth/{tpa_id}': {
    /** Get a third-party integration */
    get: operations['ThirdPartyAuthController_getTPAForProject']
    /** Removes a third-party auth integration */
    delete: operations['ThirdPartyAuthController_deleteTPAForProject']
  }
  '/v1/projects/{ref}/config/auth/sso/providers': {
    /** Lists all SSO providers */
    get: operations['ProvidersController_listAllProviders']
    /** Creates a new SSO provider */
    post: operations['ProvidersController_createProviderForProject']
  }
  '/v1/projects/{ref}/config/auth/sso/providers/{provider_id}': {
    /** Gets a SSO provider by its UUID */
    get: operations['ProvidersController_getProviderById']
    /** Updates a SSO provider by its UUID */
    put: operations['ProvidersController_updateProviderById']
    /** Removes a SSO provider by its UUID */
    delete: operations['ProvidersController_removeProviderById']
  }
  '/v1/projects/{ref}/database/query': {
    /** Run sql query */
    post: operations['V1QueryController_v1RunQuery']
  }
  '/v1/projects/{ref}/database/webhooks/enable': {
    /** Enables Database Webhooks on the project */
    post: operations['V1DatabaseWebhooksController_v1EnableDatabaseWebhooks']
  }
  '/v1/projects/{ref}/database/backups': {
    /** Lists all backups */
    get: operations['V1BackupsController_getBackups']
  }
  '/v1/projects/{ref}/database/backups/restore-pitr': {
    /** Restores a PITR backup for a database */
    post: operations['V1RestorePitrController_v1RestorePitr']
  }
  '/v1/projects/{ref}/functions': {
    /**
     * List all functions
     * @description Returns all functions you've previously added to the specified project.
     */
    get: operations['FunctionsController_getFunctions']
    /**
     * Create a function
     * @description Creates a function and adds it to the specified project.
     */
    post: operations['FunctionsController_createFunction']
  }
  '/v1/projects/{ref}/functions/{function_slug}': {
    /**
     * Retrieve a function
     * @description Retrieves a function with the specified slug and project.
     */
    get: operations['FunctionSlugController_getFunction']
    /**
     * Delete a function
     * @description Deletes a function with the specified slug from the specified project.
     */
    delete: operations['FunctionSlugController_deleteFunction']
    /**
     * Update a function
     * @description Updates a function with the specified slug and project.
     */
    patch: operations['FunctionSlugController_updateFunction']
  }
  '/v1/projects/{ref}/functions/{function_slug}/body': {
    /**
     * Retrieve a function body
     * @description Retrieves a function body for the specified slug and project.
     */
    get: operations['FunctionSlugController_getFunctionBody']
  }
  '/v1/projects/{ref}/storage/buckets': {
    /** Lists all buckets */
    get: operations['V1StorageBucketsController_getBuckets']
  }
  '/v1/organizations': {
    /**
     * List all organizations
     * @description Returns a list of organizations that you currently belong to.
     */
    get: operations['OrganizationsController_getOrganizations']
    /** Create an organization */
    post: operations['OrganizationsController_createOrganization']
  }
  '/v1/organizations/{slug}/members': {
    /** List members of an organization */
    get: operations['V1OrganizationMembersController_v1ListOrganizationMembers']
  }
  '/v1/organizations/{slug}': {
    /** Gets information about the organization */
    get: operations['V1OrganizationSlugController_getOrganization']
  }
  '/v1/oauth/authorize': {
    /** Authorize user through oauth */
    get: operations['OAuthController_authorize']
  }
  '/v1/oauth/token': {
    /** Exchange auth code for user's access and refresh token */
    post: operations['OAuthController_token']
  }
  '/v1/snippets': {
    /** Lists SQL snippets for the logged in user */
    get: operations['SnippetsController_listSnippets']
  }
  '/v1/snippets/{id}': {
    /** Gets a specific SQL snippet */
    get: operations['SnippetsController_getSnippet']
  }
  '/partners/flyio/callback': {
    /** Redirects to Supabase dashboard after completing Fly sso */
    get: operations['CallbackController_redirectToDashboardFlyioExtensionScreen']
  }
  '/partners/flyio/extensions/{extension_id}': {
    /** Gets database status */
    get: operations['ExtensionController_getResourceStatus']
    /** Deletes a database */
    delete: operations['ExtensionController_deleteResource']
  }
  '/partners/flyio/extensions/{extension_id}/sso': {
    /** Starts Fly single sign on */
    get: operations['ExtensionController_startFlyioSSO']
  }
  '/partners/flyio/extensions': {
    /** Creates a database */
    post: operations['ExtensionsController_provisionResource']
  }
  '/partners/flyio/organizations/{organization_id}': {
    /** Gets information about the organization */
    get: operations['OrganizationsController_getOrganization']
  }
  '/partners/flyio/organizations/{organization_id}/extensions': {
    /** Gets all databases that belong to the Fly organization */
    get: operations['OrganizationsController_getOrgExtensions']
  }
  '/partners/flyio/organizations/{organization_id}/sso': {
    /** Starts Fly single sign on */
    get: operations['OrganizationsController_startFlyioSSO']
  }
  '/partners/flyio/organizations/{organization_id}/billing': {
    /** Gets the organizations current unbilled charges */
    get: operations['FlyBillingController_getResourceBilling']
  }
}

export type webhooks = Record<string, never>

export interface components {
  schemas: {
    NotificationResponseV1: {
      id: string
      inserted_at: string
      project_id: number
      notification_name: string
      notification_status: string
      data: Record<string, never>
      meta: Record<string, never>
    }
    UpdateNotificationsBodyV1: {
      ids: string[]
    }
    NotificationAction: {
      label: string
      url?: string
      action_type?: string
    }
    NotificationData: {
      org_slug?: string
      project_ref?: string
      title: string
      message?: string
      actions?: components['schemas']['NotificationAction'][]
    }
    NotificationResponseV2: {
      /** @enum {string} */
      status: 'new' | 'seen' | 'archived'
      /** @enum {string} */
      priority: 'Critical' | 'Warning' | 'Info'
      data: components['schemas']['NotificationData']
      id: string
      inserted_at: string
      name: string
      meta: Record<string, never>
    }
    NotificationsSummary: {
      unread_count: number
      has_warning: boolean
      has_critical: boolean
    }
    UpdateNotificationBodyV2: {
      id: string
      /** @enum {string} */
      status: 'new' | 'seen' | 'archived'
    }
    ResetPasswordBody: {
      email: string
      redirectTo?: string
    }
    SendFeedbackBody: {
      message: string
      affectedServices?: string
      library?: string
      category: string
      subject?: string
      tags: string[]
      additionalRedirectUrls?: string
      pathname?: string
      projectRef?: string
      organizationSlug?: string
      severity?: string
      siteUrl?: string
      urlToAirTable?: string
      allowSupportAccess?: boolean
      verified?: boolean
      browserInformation?: string
    }
    SendFeedbackResponse: {
      result: string
    }
    SendExitSurveyBody: {
      projectRef?: string
      orgSlug?: string
      reasons: string
      additionalFeedback?: string
      exitAction?: string
    }
    SendUpgradeSurveyBody: {
      orgSlug?: string
      prevPlan?: string
      currentPlan?: string
      reasons: string[]
      additionalFeedback?: string
    }
    SendDocsFeedbackBody: {
      page: string
      isHelpful: boolean
      title: string
      feedback: string
    }
    SignUpBody: {
      email: string
      password: string
      redirectTo?: string
    }
    ProjectResourceWarningsResponse: {
      /** @enum {string|null} */
      need_pitr: 'critical' | 'warning' | null
      /** @enum {string|null} */
      disk_io_exhaustion: 'critical' | 'warning' | null
      /** @enum {string|null} */
      disk_space_exhaustion: 'critical' | 'warning' | null
      /** @enum {string|null} */
      cpu_exhaustion: 'critical' | 'warning' | null
      /** @enum {string|null} */
      memory_and_swap_exhaustion: 'critical' | 'warning' | null
      /** @enum {string|null} */
      auth_rate_limit_exhaustion: 'critical' | 'warning' | null
      project: string
      is_readonly_mode_enabled: boolean
    }
    GoTrueConfigResponse: {
      SITE_URL: string
      DISABLE_SIGNUP: boolean
      JWT_EXP: number
      SMTP_ADMIN_EMAIL: string
      SMTP_HOST: string
      SMTP_PORT: string
      SMTP_USER: string
      SMTP_PASS: string
      SMTP_MAX_FREQUENCY: number
      SMTP_SENDER_NAME: string
      MAILER_AUTOCONFIRM: boolean
      MAILER_ALLOW_UNVERIFIED_EMAIL_SIGN_INS: boolean
      MAILER_SUBJECTS_INVITE: string
      MAILER_SUBJECTS_CONFIRMATION: string
      MAILER_SUBJECTS_RECOVERY: string
      MAILER_SUBJECTS_EMAIL_CHANGE: string
      MAILER_SUBJECTS_MAGIC_LINK: string
      MAILER_SUBJECTS_REAUTHENTICATION: string
      MAILER_TEMPLATES_INVITE_CONTENT: string
      MAILER_TEMPLATES_CONFIRMATION_CONTENT: string
      MAILER_TEMPLATES_RECOVERY_CONTENT: string
      MAILER_TEMPLATES_EMAIL_CHANGE_CONTENT: string
      MAILER_TEMPLATES_MAGIC_LINK_CONTENT: string
      MAILER_TEMPLATES_REAUTHENTICATION_CONTENT: string
      MFA_MAX_ENROLLED_FACTORS: number
      URI_ALLOW_LIST: string
      EXTERNAL_ANONYMOUS_USERS_ENABLED: boolean
      EXTERNAL_EMAIL_ENABLED: boolean
      EXTERNAL_PHONE_ENABLED: boolean
      SAML_ENABLED: boolean
      SECURITY_CAPTCHA_ENABLED: boolean
      SECURITY_CAPTCHA_PROVIDER: string
      SECURITY_CAPTCHA_SECRET: string
      SESSIONS_TIMEBOX: number
      SESSIONS_INACTIVITY_TIMEOUT: number
      SESSIONS_SINGLE_PER_USER: boolean
      SESSIONS_TAGS: string
      RATE_LIMIT_ANONYMOUS_USERS: number
      RATE_LIMIT_EMAIL_SENT: number
      RATE_LIMIT_SMS_SENT: number
      RATE_LIMIT_VERIFY: number
      RATE_LIMIT_TOKEN_REFRESH: number
      MAILER_SECURE_EMAIL_CHANGE_ENABLED: boolean
      REFRESH_TOKEN_ROTATION_ENABLED: boolean
      PASSWORD_HIBP_ENABLED: boolean
      PASSWORD_MIN_LENGTH: number
      PASSWORD_REQUIRED_CHARACTERS: string
      SECURITY_MANUAL_LINKING_ENABLED: boolean
      SECURITY_UPDATE_PASSWORD_REQUIRE_REAUTHENTICATION: boolean
      SECURITY_REFRESH_TOKEN_REUSE_INTERVAL: number
      MAILER_OTP_EXP: number
      SMS_AUTOCONFIRM: boolean
      SMS_MAX_FREQUENCY: number
      SMS_OTP_EXP: number
      SMS_OTP_LENGTH: number
      SMS_PROVIDER: string
      SMS_MESSAGEBIRD_ACCESS_KEY: string
      SMS_MESSAGEBIRD_ORIGINATOR: string
      SMS_TEXTLOCAL_API_KEY: string
      SMS_TEXTLOCAL_SENDER: string
      SMS_TWILIO_ACCOUNT_SID: string
      SMS_TWILIO_AUTH_TOKEN: string
      SMS_TWILIO_CONTENT_SID: string
      SMS_TWILIO_MESSAGE_SERVICE_SID: string
      SMS_TWILIO_VERIFY_ACCOUNT_SID: string
      SMS_TWILIO_VERIFY_AUTH_TOKEN: string
      SMS_TWILIO_VERIFY_MESSAGE_SERVICE_SID: string
      SMS_VONAGE_API_KEY: string
      SMS_VONAGE_API_SECRET: string
      SMS_VONAGE_FROM: string
      SMS_TEMPLATE: string
      SMS_TEST_OTP: string
      SMS_TEST_OTP_VALID_UNTIL: string
      HOOK_MFA_VERIFICATION_ATTEMPT_ENABLED: boolean
      HOOK_MFA_VERIFICATION_ATTEMPT_URI: string
      HOOK_PASSWORD_VERIFICATION_ATTEMPT_ENABLED: boolean
      HOOK_PASSWORD_VERIFICATION_ATTEMPT_URI: string
      HOOK_CUSTOM_ACCESS_TOKEN_ENABLED: boolean
      HOOK_CUSTOM_ACCESS_TOKEN_URI: string
      HOOK_SEND_SMS_ENABLED: boolean
      HOOK_SEND_SMS_URI: string
      HOOK_SEND_EMAIL_ENABLED: boolean
      HOOK_SEND_EMAIL_URI: string
      EXTERNAL_APPLE_ENABLED: boolean
      EXTERNAL_APPLE_CLIENT_ID: string
      EXTERNAL_APPLE_SECRET: string
      EXTERNAL_APPLE_ADDITIONAL_CLIENT_IDS: string
      EXTERNAL_AZURE_ENABLED: boolean
      EXTERNAL_AZURE_CLIENT_ID: string
      EXTERNAL_AZURE_SECRET: string
      EXTERNAL_AZURE_URL: string
      EXTERNAL_BITBUCKET_ENABLED: boolean
      EXTERNAL_BITBUCKET_CLIENT_ID: string
      EXTERNAL_BITBUCKET_SECRET: string
      EXTERNAL_DISCORD_ENABLED: boolean
      EXTERNAL_DISCORD_CLIENT_ID: string
      EXTERNAL_DISCORD_SECRET: string
      EXTERNAL_FACEBOOK_ENABLED: boolean
      EXTERNAL_FACEBOOK_CLIENT_ID: string
      EXTERNAL_FACEBOOK_SECRET: string
      EXTERNAL_FIGMA_ENABLED: boolean
      EXTERNAL_FIGMA_CLIENT_ID: string
      EXTERNAL_FIGMA_SECRET: string
      EXTERNAL_GITHUB_ENABLED: boolean
      EXTERNAL_GITHUB_CLIENT_ID: string
      EXTERNAL_GITHUB_SECRET: string
      EXTERNAL_GITLAB_ENABLED: boolean
      EXTERNAL_GITLAB_CLIENT_ID: string
      EXTERNAL_GITLAB_SECRET: string
      EXTERNAL_GITLAB_URL: string
      EXTERNAL_GOOGLE_ENABLED: boolean
      EXTERNAL_GOOGLE_CLIENT_ID: string
      EXTERNAL_GOOGLE_SECRET: string
      EXTERNAL_GOOGLE_ADDITIONAL_CLIENT_IDS: string
      EXTERNAL_GOOGLE_SKIP_NONCE_CHECK: boolean
      EXTERNAL_KAKAO_ENABLED: boolean
      EXTERNAL_KAKAO_CLIENT_ID: string
      EXTERNAL_KAKAO_SECRET: string
      EXTERNAL_KEYCLOAK_ENABLED: boolean
      EXTERNAL_KEYCLOAK_CLIENT_ID: string
      EXTERNAL_KEYCLOAK_SECRET: string
      EXTERNAL_KEYCLOAK_URL: string
      EXTERNAL_LINKEDIN_OIDC_ENABLED: boolean
      EXTERNAL_LINKEDIN_OIDC_CLIENT_ID: string
      EXTERNAL_LINKEDIN_OIDC_SECRET: string
      EXTERNAL_NOTION_ENABLED: boolean
      EXTERNAL_NOTION_CLIENT_ID: string
      EXTERNAL_NOTION_SECRET: string
      EXTERNAL_SLACK_ENABLED: boolean
      EXTERNAL_SLACK_CLIENT_ID: string
      EXTERNAL_SLACK_SECRET: string
      EXTERNAL_SPOTIFY_ENABLED: boolean
      EXTERNAL_SPOTIFY_CLIENT_ID: string
      EXTERNAL_SPOTIFY_SECRET: string
      EXTERNAL_TWITCH_ENABLED: boolean
      EXTERNAL_TWITCH_CLIENT_ID: string
      EXTERNAL_TWITCH_SECRET: string
      EXTERNAL_TWITTER_ENABLED: boolean
      EXTERNAL_TWITTER_CLIENT_ID: string
      EXTERNAL_TWITTER_SECRET: string
      EXTERNAL_WORKOS_ENABLED: boolean
      EXTERNAL_WORKOS_CLIENT_ID: string
      EXTERNAL_WORKOS_SECRET: string
      EXTERNAL_WORKOS_URL: string
      EXTERNAL_ZOOM_ENABLED: boolean
      EXTERNAL_ZOOM_CLIENT_ID: string
      EXTERNAL_ZOOM_SECRET: string
    }
    UpdateGoTrueConfigBody: {
      SITE_URL?: string
      DISABLE_SIGNUP?: boolean
      JWT_EXP?: number
      SMTP_ADMIN_EMAIL?: string
      SMTP_HOST?: string
      SMTP_PORT?: string
      SMTP_USER?: string
      SMTP_PASS?: string
      SMTP_MAX_FREQUENCY?: number
      SMTP_SENDER_NAME?: string
      MAILER_ALLOW_UNVERIFIED_EMAIL_SIGN_INS?: boolean
      MAILER_AUTOCONFIRM?: boolean
      MAILER_SUBJECTS_INVITE?: string
      MAILER_SUBJECTS_CONFIRMATION?: string
      MAILER_SUBJECTS_RECOVERY?: string
      MAILER_SUBJECTS_EMAIL_CHANGE?: string
      MAILER_SUBJECTS_MAGIC_LINK?: string
      MAILER_SUBJECTS_REAUTHENTICATION?: string
      MAILER_TEMPLATES_INVITE_CONTENT?: string
      MAILER_TEMPLATES_REAUTHENTICATION_CONTENT?: string
      MAILER_TEMPLATES_CONFIRMATION_CONTENT?: string
      MAILER_TEMPLATES_RECOVERY_CONTENT?: string
      MAILER_TEMPLATES_EMAIL_CHANGE_CONTENT?: string
      MAILER_TEMPLATES_MAGIC_LINK_CONTENT?: string
      MFA_MAX_ENROLLED_FACTORS?: number
      URI_ALLOW_LIST?: string
      EXTERNAL_ANONYMOUS_USERS_ENABLED?: boolean
      EXTERNAL_EMAIL_ENABLED?: boolean
      EXTERNAL_PHONE_ENABLED?: boolean
      SAML_ENABLED?: boolean
      SECURITY_CAPTCHA_ENABLED?: boolean
      SECURITY_CAPTCHA_PROVIDER?: string
      SECURITY_CAPTCHA_SECRET?: string
      SESSIONS_TIMEBOX?: number
      SESSIONS_INACTIVITY_TIMEOUT?: number
      SESSIONS_SINGLE_PER_USER?: boolean
      SESSIONS_TAGS?: string
      RATE_LIMIT_ANONYMOUS_USERS?: number
      RATE_LIMIT_EMAIL_SENT?: number
      RATE_LIMIT_SMS_SENT?: number
      RATE_LIMIT_VERIFY?: number
      RATE_LIMIT_TOKEN_REFRESH?: number
      MAILER_SECURE_EMAIL_CHANGE_ENABLED?: boolean
      REFRESH_TOKEN_ROTATION_ENABLED?: boolean
      PASSWORD_HIBP_ENABLED?: boolean
      PASSWORD_MIN_LENGTH?: number
      /** @enum {string} */
      PASSWORD_REQUIRED_CHARACTERS?:
        | 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789'
        | 'abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789'
        | 'abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789:!@#$%^&*()_+-=[]{};\'\\:"|<>?,./`~'
        | ''
      SECURITY_MANUAL_LINKING_ENABLED?: boolean
      SECURITY_UPDATE_PASSWORD_REQUIRE_REAUTHENTICATION?: boolean
      SECURITY_REFRESH_TOKEN_REUSE_INTERVAL?: number
      MAILER_OTP_EXP?: number
      SMS_AUTOCONFIRM?: boolean
      SMS_MAX_FREQUENCY?: number
      SMS_OTP_EXP?: number
      SMS_OTP_LENGTH?: number
      SMS_PROVIDER?: string
      SMS_MESSAGEBIRD_ACCESS_KEY?: string
      SMS_MESSAGEBIRD_ORIGINATOR?: string
      SMS_TEST_OTP?: string
      SMS_TEST_OTP_VALID_UNTIL?: string
      SMS_TEXTLOCAL_API_KEY?: string
      SMS_TEXTLOCAL_SENDER?: string
      SMS_TWILIO_ACCOUNT_SID?: string
      SMS_TWILIO_AUTH_TOKEN?: string
      SMS_TWILIO_CONTENT_SID?: string
      SMS_TWILIO_MESSAGE_SERVICE_SID?: string
      SMS_TWILIO_VERIFY_ACCOUNT_SID?: string
      SMS_TWILIO_VERIFY_AUTH_TOKEN?: string
      SMS_TWILIO_VERIFY_MESSAGE_SERVICE_SID?: string
      SMS_VONAGE_API_KEY?: string
      SMS_VONAGE_API_SECRET?: string
      SMS_VONAGE_FROM?: string
      SMS_TEMPLATE?: string
      HOOK_MFA_VERIFICATION_ATTEMPT_ENABLED?: boolean
      HOOK_MFA_VERIFICATION_ATTEMPT_URI?: string
      HOOK_PASSWORD_VERIFICATION_ATTEMPT_ENABLED?: boolean
      HOOK_PASSWORD_VERIFICATION_ATTEMPT_URI?: string
      HOOK_CUSTOM_ACCESS_TOKEN_ENABLED?: boolean
      HOOK_CUSTOM_ACCESS_TOKEN_URI?: string
      HOOK_SEND_SMS_ENABLED?: boolean
      HOOK_SEND_SMS_URI?: string
      HOOK_SEND_EMAIL_ENABLED?: boolean
      HOOK_SEND_EMAIL_URI?: string
      EXTERNAL_APPLE_ENABLED?: boolean
      EXTERNAL_APPLE_CLIENT_ID?: string
      EXTERNAL_APPLE_SECRET?: string
      EXTERNAL_APPLE_ADDITIONAL_CLIENT_IDS?: string
      EXTERNAL_AZURE_ENABLED?: boolean
      EXTERNAL_AZURE_CLIENT_ID?: string
      EXTERNAL_AZURE_SECRET?: string
      EXTERNAL_AZURE_URL?: string
      EXTERNAL_BITBUCKET_ENABLED?: boolean
      EXTERNAL_BITBUCKET_CLIENT_ID?: string
      EXTERNAL_BITBUCKET_SECRET?: string
      EXTERNAL_DISCORD_ENABLED?: boolean
      EXTERNAL_DISCORD_CLIENT_ID?: string
      EXTERNAL_DISCORD_SECRET?: string
      EXTERNAL_FACEBOOK_ENABLED?: boolean
      EXTERNAL_FACEBOOK_CLIENT_ID?: string
      EXTERNAL_FACEBOOK_SECRET?: string
      EXTERNAL_FIGMA_ENABLED?: boolean
      EXTERNAL_FIGMA_CLIENT_ID?: string
      EXTERNAL_FIGMA_SECRET?: string
      EXTERNAL_GITHUB_ENABLED?: boolean
      EXTERNAL_GITHUB_CLIENT_ID?: string
      EXTERNAL_GITHUB_SECRET?: string
      EXTERNAL_GITLAB_ENABLED?: boolean
      EXTERNAL_GITLAB_CLIENT_ID?: string
      EXTERNAL_GITLAB_SECRET?: string
      EXTERNAL_GITLAB_URL?: string
      EXTERNAL_GOOGLE_ENABLED?: boolean
      EXTERNAL_GOOGLE_CLIENT_ID?: string
      EXTERNAL_GOOGLE_SECRET?: string
      EXTERNAL_GOOGLE_ADDITIONAL_CLIENT_IDS?: string
      EXTERNAL_GOOGLE_SKIP_NONCE_CHECK?: boolean
      EXTERNAL_KAKAO_ENABLED?: boolean
      EXTERNAL_KAKAO_CLIENT_ID?: string
      EXTERNAL_KAKAO_SECRET?: string
      EXTERNAL_KEYCLOAK_ENABLED?: boolean
      EXTERNAL_KEYCLOAK_CLIENT_ID?: string
      EXTERNAL_KEYCLOAK_SECRET?: string
      EXTERNAL_KEYCLOAK_URL?: string
      EXTERNAL_LINKEDIN_OIDC_ENABLED?: boolean
      EXTERNAL_LINKEDIN_OIDC_CLIENT_ID?: string
      EXTERNAL_LINKEDIN_OIDC_SECRET?: string
      EXTERNAL_NOTION_ENABLED?: boolean
      EXTERNAL_NOTION_CLIENT_ID?: string
      EXTERNAL_NOTION_SECRET?: string
      EXTERNAL_SLACK_ENABLED?: boolean
      EXTERNAL_SLACK_CLIENT_ID?: string
      EXTERNAL_SLACK_SECRET?: string
      EXTERNAL_SPOTIFY_ENABLED?: boolean
      EXTERNAL_SPOTIFY_CLIENT_ID?: string
      EXTERNAL_SPOTIFY_SECRET?: string
      EXTERNAL_TWITCH_ENABLED?: boolean
      EXTERNAL_TWITCH_CLIENT_ID?: string
      EXTERNAL_TWITCH_SECRET?: string
      EXTERNAL_TWITTER_ENABLED?: boolean
      EXTERNAL_TWITTER_CLIENT_ID?: string
      EXTERNAL_TWITTER_SECRET?: string
      EXTERNAL_WORKOS_ENABLED?: boolean
      EXTERNAL_WORKOS_CLIENT_ID?: string
      EXTERNAL_WORKOS_SECRET?: string
      EXTERNAL_WORKOS_URL?: string
      EXTERNAL_ZOOM_ENABLED?: boolean
      EXTERNAL_ZOOM_CLIENT_ID?: string
      EXTERNAL_ZOOM_SECRET?: string
    }
    UserBody: {
      id?: string
      aud?: string
      banned_until?: string
      confirmation_sent_at?: string
      confirmation_token?: string
      confirmed_at?: string
      created_at?: string
      email?: string
      email_change?: string
      email_change_confirm_status?: number
      email_change_sent_at?: string
      email_change_token_current?: string
      email_change_token_new?: string
      email_confirmed_at?: string
      encrypted_password?: string
      instance_id?: string
      invited_at?: string
      is_super_admin?: boolean
      last_sign_in_at?: string
      phone?: string
      phone_change?: string
      phone_change_sent_at?: string
      phone_change_token?: string
      phone_confirmed_at?: string
      raw_app_meta_data?: Record<string, never>
      raw_user_meta_data?: Record<string, never>
      reauthentication_sent_at?: string
      reauthentication_token?: string
      recovery_sent_at?: string
      recovery_token?: string
      role?: string
      updated_at?: string
      is_sso_user?: boolean
      deleted_at?: string
      is_anonymous?: boolean
    }
    UsersResponse: {
      total: number
      users: components['schemas']['UserBody'][]
    }
    Backup: {
      id: number
      isPhysicalBackup: boolean
      project_id: number
      status: Record<string, never>
      inserted_at: string
    }
    BackupsResponse: {
      tierKey: string
      region: string
      walg_enabled: boolean
      pitr_enabled: boolean
      backups: components['schemas']['Backup'][]
      physicalBackupData: {
        earliestPhysicalBackupDateUnix?: number
        latestPhysicalBackupDateUnix?: number
      }
    }
    DownloadBackupBody: {
      id: number
      data: Record<string, never>
      inserted_at: string
      project_id: number
      s3_bucket: string
      s3_path: string
      status: string
    }
    DownloadBackupResponse: {
      fileUrl: string
    }
    RestoreLogicalBackupBody: {
      id: number
    }
    RestorePhysicalBackupBody: {
      id: number
      recovery_time_target: string
    }
    PointInTimeRestoreBody: {
      recovery_time_target_unix: number
    }
    OwnerResponse: {
      project_ref: string
      /** @enum {string} */
      current: 'unmigrated' | 'temp_role' | 'migrated'
      /** @enum {string} */
      desired: 'unmigrated' | 'temp_role' | 'migrated'
      created_at: string
      modified_at: string
      migrated_at: string | null
    }
    OrganizationResponse: {
      /** @enum {string|null} */
      restriction_status: 'grace_period' | 'grace_period_over' | 'restricted' | null
      id: number
      slug: string
      name: string
      billing_email: string | null
      is_owner: boolean
      stripe_customer_id: string | null
      subscription_id: string | null
      opt_in_tags: string[]
      restriction_data: Record<string, never>
    }
    GetOrganizationByFlyOrganizationIdResponse: {
      slug: string
    }
    CreateOrganizationBody: {
      name: string
      kind?: string
      size?: string
      /** @enum {string} */
      tier: 'tier_payg' | 'tier_pro' | 'tier_free' | 'tier_team' | 'tier_enterprise'
      payment_method?: string
    }
    UpdateOrganizationBody: {
      name: string
      billing_email: string
      opt_in_tags: string[]
    }
    OrganizationSlugResponse: {
      id: number
      slug: string
      name: string
      billing_email?: string
      stripe_customer_id?: string
      opt_in_tags: string[]
    }
    CustomerResponse: {
      id: string
      email: string
      address: string
      balance: number
      invoice_settings: Record<string, never>
      billing_via_partner: boolean
    }
    CustomerUpdateResponse: {
      id: string
      object: string
      address: Record<string, never>
      balance: number
      cash_balance?: Record<string, never>
      created: number
      currency: string
      default_currency?: string
      default_source: string
      delinquent: boolean
      description: string
      discount: Record<string, never>
      email: string
      invoice_credit_balance?: Record<string, never>
      invoice_prefix: string
      invoice_settings: Record<string, never>
      livemode: boolean
      metadata: Record<string, never>
      name: string
      next_invoice_sequence?: number
      phone: string
      preferred_locales: string[]
      shipping: Record<string, never>
      sources?: Record<string, never>
      subscriptions?: Record<string, never>
      tax?: Record<string, never>
      tax_exempt?: string
      tax_ids?: Record<string, never>
      test_clock?: Record<string, never>
      lastResponse: {
        headers?: Record<string, never>
        requestId?: string
        statusCode?: number
        apiVersion?: string
        idempotencyKey?: string
        stripeAccount?: string
      }
    }
    Role: {
      id: number
      name: string
      description: string
    }
    RoleResponseV2: {
      org_scoped_roles: components['schemas']['Role'][]
      project_scoped_roles: components['schemas']['Role'][]
    }
    TaxId: {
      id: string
      object: string
      country: string
      created: number
      customer: Record<string, never>
      deleted?: Record<string, never>
      livemode: boolean
      type: string
      value: string
      verification: Record<string, never>
    }
    TaxIdResponse: {
      object: string
      data: components['schemas']['TaxId'][]
      has_more: boolean
      url: string
      lastResponse: {
        headers?: Record<string, never>
        requestId?: string
        statusCode?: number
        apiVersion?: string
        idempotencyKey?: string
        stripeAccount?: string
      }
    }
    CreateTaxIdBody: {
      type: Record<string, never>
      value: string
    }
    CreateTaxIdResponse: {
      id: string
      object: string
      country: string
      created: number
      customer: Record<string, never>
      livemode: boolean
      type: string
      value: string
      verification: Record<string, never>
      lastResponse: {
        headers?: Record<string, never>
        requestId?: string
        statusCode?: number
        apiVersion?: string
        idempotencyKey?: string
        stripeAccount?: string
      }
    }
    DeleteTaxIdBody: {
      id: string
    }
    DeleteTaxIdResponse: {
      id: string
      object: string
      deleted: boolean
      lastResponse: {
        headers?: Record<string, never>
        requestId?: string
        statusCode?: number
        apiVersion?: string
        idempotencyKey?: string
        stripeAccount?: string
      }
    }
    TransferOrganizationBody: {
      member_gotrue_id: string
      member_id: number
      org_id: number
    }
    ProjectAllocation: {
      ref: string
      usage: number
      name: string
    }
    OrgMetricUsage: {
      usage: number
      usage_original: number
      cost: number
      unit_price_desc: string
      available_in_plan: boolean
      unlimited: boolean
      capped: boolean
      /** @enum {string} */
      metric:
        | 'EGRESS'
        | 'DATABASE_SIZE'
        | 'STORAGE_SIZE'
        | 'MONTHLY_ACTIVE_USERS'
        | 'MONTHLY_ACTIVE_SSO_USERS'
        | 'FUNCTION_INVOCATIONS'
        | 'FUNCTION_COUNT'
        | 'STORAGE_IMAGES_TRANSFORMED'
        | 'REALTIME_MESSAGE_COUNT'
        | 'REALTIME_PEAK_CONNECTIONS'
        | 'COMPUTE_HOURS_BRANCH'
        | 'COMPUTE_HOURS_XS'
        | 'COMPUTE_HOURS_SM'
        | 'COMPUTE_HOURS_MD'
        | 'COMPUTE_HOURS_L'
        | 'COMPUTE_HOURS_XL'
        | 'COMPUTE_HOURS_2XL'
        | 'COMPUTE_HOURS_4XL'
        | 'COMPUTE_HOURS_8XL'
        | 'COMPUTE_HOURS_12XL'
        | 'COMPUTE_HOURS_16XL'
      /** @enum {string} */
      pricing_strategy: 'UNIT' | 'PACKAGE' | 'NONE'
      pricing_free_units?: number
      pricing_package_price?: number
      pricing_package_size?: number
      pricing_per_unit_price?: number
      project_allocations: components['schemas']['ProjectAllocation'][]
    }
    OrgUsageResponse: {
      usage_billing_enabled: boolean
      slugs: string[]
      usages: components['schemas']['OrgMetricUsage'][]
    }
    OrgDocumentUrlResponse: {
      fileUrl: string
    }
    AuditLogsResponse: {
      result: Record<string, never>[]
      retention_period: number
    }
    Invite: {
      invited_id: number
      invited_at: string
      invited_email: string
      role_id: number
    }
    InviteUserBody: {
      invited_email: string
      owner_id: number
      role_id: number
    }
    SendInviteResponse: {
      invited_at: string
      invited_email: string
      role_id: number
    }
    InviteResponse: {
      organization_name: string
      invite_id: string
      token_does_not_exist: boolean
      email_match: boolean
      authorized_user: boolean
      expired_token: boolean
    }
    JoinResponse: {
      billing_email: string
      id: number
      name: string
      slug: string
      stripe_customer_id: string
    }
    Member: {
      gotrue_id: string
      primary_email: string | null
      role_ids: number[]
      username: string
      mfa_enabled: boolean
    }
    UpdateMemberBody: {
      role_id: number
    }
    UpdateMemberRoleBodyV2: {
      assign_role_id?: number
      assign_role_scoped_projects?: string[]
      unassign_role_id?: number
    }
    MemberWithFreeProjectLimit: {
      free_project_limit: number
      primary_email: string
      username: string
    }
    Invitation: {
      id: number
      invited_at: string
      invited_email: string
      role_id: number
    }
    InvitationResponse: {
      invitations: components['schemas']['Invitation'][]
    }
    InvitationByTokenResponse: {
      organization_name: string
      invite_id?: number
      token_does_not_exist: boolean
      email_match: boolean
      authorized_user: boolean
      expired_token: boolean
    }
    CreateInvitationBody: {
      email: string
      role_id: number
      role_scoped_projects?: string[]
    }
    Payment: {
      id: string
      object: string
      acss_debit?: Record<string, never>
      affirm?: Record<string, never>
      afterpay_clearpay?: Record<string, never>
      alipay?: Record<string, never>
      au_becs_debit?: Record<string, never>
      bacs_debit?: Record<string, never>
      bancontact?: Record<string, never>
      billing_details: Record<string, never>
      blik?: Record<string, never>
      boleto?: Record<string, never>
      card?: Record<string, never>
      card_present?: Record<string, never>
      created: number
      customer: Record<string, never>
      customer_balance?: Record<string, never>
      eps?: Record<string, never>
      fpx?: Record<string, never>
      giropay?: Record<string, never>
      grabpay?: Record<string, never>
      ideal?: Record<string, never>
      interac_present?: Record<string, never>
      klarna?: Record<string, never>
      konbini?: Record<string, never>
      link?: Record<string, never>
      livemode: boolean
      metadata: Record<string, never>
      oxxo?: Record<string, never>
      p24?: Record<string, never>
      paynow?: Record<string, never>
      promptpay?: Record<string, never>
      radar_options?: Record<string, never>
      sepa_debit?: Record<string, never>
      sofort?: Record<string, never>
      type: string
      us_bank_account?: Record<string, never>
      wechat_pay?: Record<string, never>
    }
    PaymentsResponse: {
      object: string
      data: components['schemas']['Payment'][]
      has_more: boolean
      url: string
      lastResponse: {
        headers?: Record<string, never>
        requestId?: string
        statusCode?: number
        apiVersion?: string
        idempotencyKey?: string
        stripeAccount?: string
      }
    }
    DetachPaymentMethodBody: {
      card_id: string
    }
    DetachPaymentResponse: {
      id: string
      object: string
      acss_debit?: Record<string, never>
      affirm?: Record<string, never>
      afterpay_clearpay?: Record<string, never>
      alipay?: Record<string, never>
      au_becs_debit?: Record<string, never>
      bacs_debit?: Record<string, never>
      bancontact?: Record<string, never>
      billing_details: Record<string, never>
      blik?: Record<string, never>
      boleto?: Record<string, never>
      card?: Record<string, never>
      card_present?: Record<string, never>
      created: number
      customer: Record<string, never>
      customer_balance?: Record<string, never>
      eps?: Record<string, never>
      fpx?: Record<string, never>
      giropay?: Record<string, never>
      grabpay?: Record<string, never>
      ideal?: Record<string, never>
      interac_present?: Record<string, never>
      klarna?: Record<string, never>
      konbini?: Record<string, never>
      link?: Record<string, never>
      livemode: boolean
      metadata: Record<string, never>
      oxxo?: Record<string, never>
      p24?: Record<string, never>
      paynow?: Record<string, never>
      promptpay?: Record<string, never>
      radar_options?: Record<string, never>
      sepa_debit?: Record<string, never>
      sofort?: Record<string, never>
      type: string
      us_bank_account?: Record<string, never>
      wechat_pay?: Record<string, never>
      lastResponse: {
        headers?: Record<string, never>
        requestId?: string
        statusCode?: number
        apiVersion?: string
        idempotencyKey?: string
        stripeAccount?: string
      }
    }
    HCaptchaBody: {
      hcaptchaToken: string
    }
    SetupIntentResponse: {
      id: string
      object: string
      application: Record<string, never>
      attach_to_self?: boolean
      cancellation_reason: string
      client_secret: string
      created: number
      customer: Record<string, never>
      description: string
      flow_directions: Record<string, never>
      last_setup_error: Record<string, never>
      latest_attempt: Record<string, never>
      livemode: boolean
      mandate: Record<string, never>
      metadata: Record<string, never>
      next_action: Record<string, never>
      on_behalf_of: Record<string, never>
      payment_method: Record<string, never>
      payment_method_options: Record<string, never>
      payment_method_types: string[]
      single_use_mandate: Record<string, never>
      status: string
      usage: string
      lastResponse: {
        headers?: Record<string, never>
        requestId?: string
        statusCode?: number
        apiVersion?: string
        idempotencyKey?: string
        stripeAccount?: string
      }
    }
    /** @enum {string} */
    BillingPlanId: 'free' | 'pro' | 'team' | 'enterprise'
    BillingSubscriptionPlan: {
      id: components['schemas']['BillingPlanId']
      name: string
      price: number
    }
    BillingSubscriptionAddon: {
      name: string
      supabase_prod_id: string
      price: number
    }
    /** @enum {string} */
    ProjectAddonType: 'custom_domain' | 'compute_instance' | 'pitr' | 'ipv4'
    /** @enum {string} */
    AddonVariantId:
      | 'ci_micro'
      | 'ci_small'
      | 'ci_medium'
      | 'ci_large'
      | 'ci_xlarge'
      | 'ci_2xlarge'
      | 'ci_4xlarge'
      | 'ci_8xlarge'
      | 'ci_12xlarge'
      | 'ci_16xlarge'
      | 'cd_default'
      | 'pitr_7'
      | 'pitr_14'
      | 'pitr_28'
      | 'ipv4_default'
    /** @enum {string} */
    ProjectAddonVariantPricingType: 'fixed' | 'usage'
    /** @enum {string} */
    ProjectAddonPricingInterval: 'monthly' | 'hourly'
    ProjectAddonVariantResponse: {
      identifier: components['schemas']['AddonVariantId']
      price_type: components['schemas']['ProjectAddonVariantPricingType']
      price_interval: components['schemas']['ProjectAddonPricingInterval']
      name: string
      price_description: string
      price: number
      meta?: Record<string, never>
    }
    SelectedAddonResponse: {
      type: components['schemas']['ProjectAddonType']
      variant: components['schemas']['ProjectAddonVariantResponse']
    }
    BillingProjectAddonResponse: {
      addons: components['schemas']['SelectedAddonResponse'][]
      name: string
      ref: string
    }
    BillingPricingOptionsUnit: {
      perUnitPrice: number
      freeUnits?: number
    }
    BillingPricingOptionsPackage: {
      packageSize: number
      packagePrice: number
      freeUnits?: number
    }
    BillingPricingOptionsNone: {
      freeUnits?: number
    }
    BillingUsageBasedPrice: {
      /** @enum {string} */
      metric:
        | 'EGRESS'
        | 'DATABASE_SIZE'
        | 'STORAGE_SIZE'
        | 'MONTHLY_ACTIVE_USERS'
        | 'MONTHLY_ACTIVE_SSO_USERS'
        | 'FUNCTION_INVOCATIONS'
        | 'FUNCTION_COUNT'
        | 'STORAGE_IMAGES_TRANSFORMED'
        | 'REALTIME_MESSAGE_COUNT'
        | 'REALTIME_PEAK_CONNECTIONS'
        | 'COMPUTE_HOURS_BRANCH'
        | 'COMPUTE_HOURS_XS'
        | 'COMPUTE_HOURS_SM'
        | 'COMPUTE_HOURS_MD'
        | 'COMPUTE_HOURS_L'
        | 'COMPUTE_HOURS_XL'
        | 'COMPUTE_HOURS_2XL'
        | 'COMPUTE_HOURS_4XL'
        | 'COMPUTE_HOURS_8XL'
        | 'COMPUTE_HOURS_12XL'
        | 'COMPUTE_HOURS_16XL'
      /** @enum {string} */
      pricingStrategy: 'UNIT' | 'PACKAGE' | 'NONE'
      pricingOptions:
        | components['schemas']['BillingPricingOptionsUnit']
        | components['schemas']['BillingPricingOptionsPackage']
        | components['schemas']['BillingPricingOptionsNone']
      name: string
      unit: string
    }
    PaymentMethodCardDetails: {
      last_4_digits: string
      brand: string
      expiry_month: number
      expiry_year: number
    }
    ScheduledPlanChange: {
      target_plan: components['schemas']['BillingPlanId']
      /** Format: date-time */
      at: string
      usage_billing_enabled: boolean
    }
    GetSubscriptionResponse: {
      billing_cycle_anchor: number
      current_period_end: number
      current_period_start: number
      next_invoice_at: number
      usage_billing_enabled: boolean
      plan: components['schemas']['BillingSubscriptionPlan']
      addons: components['schemas']['BillingSubscriptionAddon'][]
      project_addons: components['schemas']['BillingProjectAddonResponse'][]
      usage_fees: components['schemas']['BillingUsageBasedPrice'][]
      payment_method_type: string
      payment_method_id?: string
      payment_method_card_details?: components['schemas']['PaymentMethodCardDetails']
      billing_via_partner: boolean
      /** @enum {string} */
      billing_partner: 'fly' | 'aws'
      scheduled_plan_change: components['schemas']['ScheduledPlanChange'] | null
      customer_balance: number
      nano_enabled: boolean
    }
    UpdateSubscriptionBody: {
      payment_method?: string
      /** @enum {string} */
      tier: 'tier_payg' | 'tier_pro' | 'tier_free' | 'tier_team' | 'tier_enterprise'
    }
    /** @enum {string} */
    BillingPlanChangeType: 'upgrade' | 'downgrade' | 'none'
    /** @enum {string} */
    BillingPlanEffectiveAt: 'now' | 'end_of_billing_period' | 'none'
    PlanResponse: {
      id: components['schemas']['BillingPlanId']
      change_type: components['schemas']['BillingPlanChangeType']
      effective_at: components['schemas']['BillingPlanEffectiveAt']
      name: string
      price: number
      is_current: boolean
    }
    PlansResponse: {
      plans: components['schemas']['PlanResponse'][]
    }
    UpcomingInvoice: Record<string, never>
    ColumnPrivilege: {
      grantor: string
      grantee: string
      /** @enum {string} */
      privilege_type: 'ALL' | 'SELECT' | 'INSERT' | 'UPDATE' | 'REFERENCES'
      is_grantable: boolean
    }
    PostgresColumnPrivileges: {
      column_id: string
      relation_schema: string
      relation_name: string
      column_name: string
      privileges: components['schemas']['ColumnPrivilege'][]
    }
    GrantColumnPrivilegesBody: {
      is_grantable?: boolean
      column_id: string
      grantee: string
      /** @enum {string} */
      privilege_type: 'ALL' | 'SELECT' | 'INSERT' | 'UPDATE' | 'REFERENCES'
    }
    RevokeColumnPrivilegesBody: {
      column_id: string
      grantee: string
      /** @enum {string} */
      privilege_type: 'ALL' | 'SELECT' | 'INSERT' | 'UPDATE' | 'REFERENCES'
    }
    PostgresColumn: {
      table_id: number
      schema: string
      table: string
      id: string
      ordinal_position: number
      name: string
      default_value: Record<string, never>
      data_type: string
      format: string
      is_identity: boolean
      identity_generation: Record<string, never>
      is_generated: boolean
      is_nullable: boolean
      is_updatable: boolean
      is_unique: boolean
      enums: string[]
      check: string | null
      comment: string | null
    }
    CreateColumnBody: {
      tableId: number
      name: string
      type: string
      check?: string
      comment?: string
      defaultValue?: Record<string, never>
      /** @enum {string} */
      defaultValueFormat?: 'expression' | 'literal'
      /** @enum {string} */
      identityGeneration?: 'BY DEFAULT' | 'ALWAYS'
      isIdentity?: boolean
      isNullable?: boolean
      isPrimaryKey?: boolean
      isUnique?: boolean
    }
    UpdateColumnBody: {
      dropDefault?: boolean
      name?: string
      type?: string
      id?: number
      check?: string
      comment?: string
      defaultValue?: Record<string, never>
      /** @enum {string} */
      defaultValueFormat?: 'expression' | 'literal'
      /** @enum {string} */
      identityGeneration?: 'BY DEFAULT' | 'ALWAYS'
      isIdentity?: boolean
      isNullable?: boolean
      isUnique?: boolean
    }
    PostgresExtension: {
      name: string
      schema: string | null
      default_version: string
      installed_version: string | null
      comment: string | null
    }
    CreateExtensionBody: {
      cascade: boolean
      name: string
      schema: string
      version: string
    }
    PostgresForeignTable: {
      id: number
      schema: string
      name: string
      comment: string | null
      columns?: components['schemas']['PostgresColumn'][]
    }
    PostgresFunction: {
      id: number
      schema: string
      name: string
      language: string
      definition: string
      complete_statement: string
      argument_types: string
      identity_argument_types: string
      return_type: string
      /** @enum {string} */
      behavior: 'VOLATILE' | 'STABLE' | 'IMMUTABLE'
      security_definer: boolean
      config_params: unknown
    }
    CreateFunctionBody: {
      args: string[]
      /** @enum {string} */
      behavior: 'VOLATILE' | 'STABLE' | 'IMMUTABLE'
      config_params?: Record<string, never>
      definition: string
      language: string
      name: string
      return_type: string
      schema: string
      security_definer: boolean
    }
    UpdateFunctionBody: {
      id?: number
      args?: string[]
      /** @enum {string} */
      behavior?: 'VOLATILE' | 'STABLE' | 'IMMUTABLE'
      config_params?: Record<string, never>
      definition?: string
      language?: string
      name?: string
      return_type?: string
      schema?: string
      security_definer?: boolean
    }
    PostgresMaterializedView: {
      id: number
      schema: string
      name: string
      is_populated: boolean
      comment: string | null
      columns?: components['schemas']['PostgresColumn'][]
    }
    PostgresPolicy: {
      id: number
      schema: string
      table: string
      table_id: number
      name: string
      /** @enum {string} */
      action: 'PERMISSIVE' | 'RESTRICTIVE'
      roles: string[]
      /** @enum {string} */
      command: 'SELECT' | 'INSERT' | 'UPDATE' | 'DELETE' | 'ALL'
      definition: string | null
      check: string | null
    }
    CreatePolicyBody: {
      name: string
      table: string
      schema?: string
      definition?: string
      check?: string
      /** @enum {string} */
      action?: 'PERMISSIVE' | 'RESTRICTIVE'
      /** @enum {string} */
      command?: 'SELECT' | 'INSERT' | 'UPDATE' | 'DELETE' | 'ALL'
      roles?: string[]
    }
    UpdatePolicyBody: {
      id?: number
      name?: string
      definition?: string
      check?: string
      roles?: string[]
    }
    Table: {
      id: number
      name: string
      schema: string
    }
    PostgresPublication: {
      id: number
      name: string
      owner: string
      publish_insert: boolean
      publish_update: boolean
      publish_delete: boolean
      publish_truncate: boolean
      tables: components['schemas']['Table'][] | null
    }
    CreatePublicationBody: {
      name: string
      owner?: string
      tables?: string[] | null
      publish_insert?: boolean
      publish_update?: boolean
      publish_delete?: boolean
      publish_truncate?: boolean
    }
    UpdatePublicationBody: {
      id?: number
      name?: string
      owner?: string
      tables?: string[] | null
      publish_insert?: boolean
      publish_update?: boolean
      publish_delete?: boolean
      publish_truncate?: boolean
    }
    RunQueryBody: {
      query: string
    }
    FormatQueryBody: {
      query: string
    }
    ValidateQueryBody: {
      query: string
    }
    ValidateQueryResponse: {
      valid: boolean
    }
    PostgresRole: {
      id: number
      name: string
      is_superuser: boolean
      can_create_db: boolean
      can_create_role: boolean
      inherit_role: boolean
      can_login: boolean
      is_replication_role: boolean
      can_bypass_rls: boolean
      active_connections: number
      connection_limit: number
      password: string
      valid_until: string | null
      config: string[] | null
    }
    CreateRoleBody: {
      name: string
      password?: string
      inherit_role?: boolean
      can_login?: boolean
      is_superuser?: boolean
      can_create_db?: boolean
      can_create_role?: boolean
      is_replication_role?: boolean
      can_bypass_rls?: boolean
      connection_limit?: number
      member_of?: string[]
      members?: string[]
      admins?: string[]
      valid_until?: string
      config?: Record<string, never>
    }
    UpdateRoleBody: {
      name?: string
      password?: string
      inherit_role?: boolean
      can_login?: boolean
      is_superuser?: boolean
      can_create_db?: boolean
      can_create_role?: boolean
      is_replication_role?: boolean
      can_bypass_rls?: boolean
      connection_limit?: number
      valid_until?: string
      config?: Record<string, never>
    }
    PostgresSchema: {
      id: number
      name: string
      owner: string
    }
    CreateSchemaBody: {
      name: string
      owner: string
    }
    UpdateSchemaBody: {
      name?: string
      owner?: string
    }
    SearchTableBody: {
      name: string
      schema: string
    }
    SearchColumnBody: {
      name: string
      schema: string
    }
    Column: {
      id: number
      name: string
      schema: string
      table_id: number
      table: string
    }
    TablePrivilege: {
      grantor: string
      grantee: string
      /** @enum {string} */
      privilege_type:
        | 'ALL'
        | 'SELECT'
        | 'INSERT'
        | 'UPDATE'
        | 'DELETE'
        | 'TRUNCATE'
        | 'REFERENCES'
        | 'TRIGGER'
      is_grantable: boolean
    }
    PostgresTablePrivileges: {
      schema: string
      name: string
      kind: string
      privileges: components['schemas']['TablePrivilege'][]
    }
    GrantTablePrivilegesBody: {
      is_grantable?: boolean
      relation_id: number
      grantee: string
      /** @enum {string} */
      privilege_type:
        | 'ALL'
        | 'SELECT'
        | 'INSERT'
        | 'UPDATE'
        | 'DELETE'
        | 'TRUNCATE'
        | 'REFERENCES'
        | 'TRIGGER'
    }
    RevokeTablePrivilegesBody: {
      relation_id: number
      grantee: string
      /** @enum {string} */
      privilege_type:
        | 'ALL'
        | 'SELECT'
        | 'INSERT'
        | 'UPDATE'
        | 'DELETE'
        | 'TRUNCATE'
        | 'REFERENCES'
        | 'TRIGGER'
    }
    PrimaryKey: {
      schema: string
      table_name: string
      name: string
      table_id: number
    }
    Relationship: {
      id: number
      constraint_name: string
      source_schema: string
      source_table_name: string
      source_column_name: string
      target_table_schema: string
      target_table_name: string
      target_column_name: string
    }
    PostgresTable: {
      id: number
      schema: string
      name: string
      rls_enabled: boolean
      rls_forced: boolean
      /** @enum {string} */
      replica_identity: 'DEFAULT' | 'INDEX' | 'FULL' | 'NOTHING'
      bytes: number
      size: string
      live_rows_estimate: number
      dead_rows_estimate: number
      comment: string | null
      columns?: components['schemas']['PostgresColumn'][]
      primary_keys: components['schemas']['PrimaryKey'][]
      relationships: components['schemas']['Relationship'][]
    }
    CreateTableBody: {
      name: string
      schema?: string
      comment?: string
    }
    UpdateTableBody: {
      id?: number
      rls_enabled?: boolean
      rls_forced?: boolean
      /** @enum {string} */
      replica_identity?: 'DEFAULT' | 'INDEX' | 'FULL' | 'NOTHING'
      replica_identity_index?: string
      name?: string
      schema?: string
      comment?: string
    }
    PostgresTrigger: {
      id: number
      table_id: number
      /** @enum {string} */
      enabled_mode: 'ORIGIN' | 'REPLICA' | 'ALWAYS' | 'DISABLED'
      name: string
      table: string
      schema: string
      condition: string | null
      /** @enum {string} */
      orientation: 'ROW' | 'STATEMENT'
      /** @enum {string} */
      activation: 'AFTER' | 'BEFORE'
      events: string[]
      function_schema: string
      function_name: string
      function_args: string[]
    }
    CreateTriggerBody: {
      /** @enum {string} */
      activation: 'AFTER' | 'BEFORE'
      /** @enum {string} */
      enabled_mode: 'ORIGIN' | 'REPLICA' | 'ALWAYS' | 'DISABLED'
      events: ('INSERT' | 'UPDATE' | 'DELETE')[]
      function_args: string[]
      function_name: string
      function_schema: string
      name: string
      /** @enum {string} */
      orientation: 'ROW' | 'STATEMENT'
      schema: string
      table: string
      table_id?: number
    }
    UpdateTriggerBody: {
      id?: number
      /** @enum {string} */
      activation?: 'AFTER' | 'BEFORE'
      /** @enum {string} */
      enabled_mode?: 'ORIGIN' | 'REPLICA' | 'ALWAYS' | 'DISABLED'
      events?: ('INSERT' | 'UPDATE' | 'DELETE')[]
      function_args?: string[]
      function_name?: string
      function_schema?: string
      name?: string
      /** @enum {string} */
      orientation?: 'ROW' | 'STATEMENT'
      schema?: string
      table?: string
      table_id?: number
    }
    PostgresType: {
      id: number
      name: string
      schema: string
      format: string
      enums: string[]
      comment: string | null
    }
    PostgresView: {
      id: number
      schema: string
      name: string
      is_updatable: boolean
      comment: string | null
      columns?: components['schemas']['PostgresColumn'][]
    }
    AccessToken: {
      created_at: string
      id: number
      token_alias: string
      name: string
      /** @enum {string} */
      scope?: 'V0'
    }
    CreateAccessTokenBody: {
      name: string
      /** @enum {string} */
      scope?: 'V0'
    }
    CreateAccessTokenResponse: {
      created_at: string
      id: number
      token_alias: string
      name: string
      /** @enum {string} */
      scope?: 'V0'
      token: string
    }
    SearchProfileBody: {
      keywords: string
    }
    Profile: {
      first_name: string
      gotrue_id: string
      id: number
      last_name: string
      username: string
    }
    SubscriptionStatisticsResponse: {
      total_paid_projects: number
      total_free_projects: number
      total_active_free_projects: number
      total_paused_free_projects: number
      total_pro_projects: number
      total_payg_projects: number
      total_team_projects: number
      total_enterprise_projects: number
    }
    PasswordCheckBody: {
      password: string
    }
    PasswordCheckResponse: {
      result: {
        feedback?: {
          warning?: string
          suggestions?: string[]
        }
        score?: number
      }
    }
    Permission: {
      actions: (
        | 'analytics:Read'
        | 'auth:Execute'
        | 'billing:Read'
        | 'billing:Write'
        | 'write:Create'
        | 'write:Delete'
        | 'functions:Read'
        | 'functions:Write'
        | 'infra:Execute'
        | 'read:Read'
        | 'sql:Read:Select'
        | 'sql:Write:Delete'
        | 'sql:Write:Insert'
        | 'sql:Write:Update'
        | 'storage:Admin:Read'
        | 'storage:Admin:Write'
        | 'tenant:Sql:Admin:Read'
        | 'tenant:Sql:Admin:Write'
        | 'tenant:Sql:CreateTable'
        | 'tenant:Sql:Write:Delete'
        | 'tenant:Sql:Write:Insert'
        | 'tenant:Sql:Query'
        | 'tenant:Sql:Read:Select'
        | 'tenant:Sql:Write:Update'
        | 'write:Update'
      )[]
      condition: unknown
      organization_id: number
      resources: string[]
    }
    ProfileResponse: {
      id: number
      auth0_id: string
      primary_email: string
      username: string
      first_name: string
      last_name: string
      mobile: string
      is_alpha_user: boolean
      gotrue_id: string
      free_project_limit: number
      disabled_features: (
        | 'organizations:create'
        | 'organizations:delete'
        | 'organization_members:create'
        | 'organization_members:delete'
        | 'projects:create'
        | 'projects:transfer'
        | 'project_auth:all'
        | 'project_storage:all'
        | 'project_edge_function:all'
        | 'profile:update'
        | 'billing:account_data'
        | 'billing:credits'
        | 'billing:invoices'
        | 'billing:payment_methods'
        | 'realtime:all'
      )[]
    }
    UpdateProfileBody: {
      first_name: string
      last_name: string
    }
    /** @enum {string} */
    DbInstanceSize:
      | 'nano'
      | 'micro'
      | 'small'
      | 'medium'
      | 'large'
      | 'xlarge'
      | '2xlarge'
      | '4xlarge'
      | '8xlarge'
      | '12xlarge'
      | '16xlarge'
    ProjectInfo: {
      infra_compute_size?: components['schemas']['DbInstanceSize']
      cloud_provider: string
      id: number
      inserted_at: string
      name: string
      organization_id: number
      ref: string
      region: string
      status: string
      subscription_id: string
      is_branch_enabled: boolean
      is_read_replicas_enabled: boolean
      preview_branch_refs: string[]
      disk_volume_size_gb?: number
    }
    GetProjectByFlyExtensionIdResponse: {
      ref: string
    }
    /** @enum {string} */
    DesiredInstanceSize:
      | 'micro'
      | 'small'
      | 'medium'
      | 'large'
      | 'xlarge'
      | '2xlarge'
      | '4xlarge'
      | '8xlarge'
      | '12xlarge'
      | '16xlarge'
    AmiSearchOptions: {
      search_tags?: Record<string, never>
    }
    CustomSupabaseInternalRequests: {
      ami: components['schemas']['AmiSearchOptions']
    }
    CreateProjectBody: {
      /** @deprecated */
      kps_enabled?: boolean
      desired_instance_size?: components['schemas']['DesiredInstanceSize']
      cloud_provider: string
      org_id: number
      name: string
      db_pass: string
      db_region: string
      db_pricing_tier_id?: string
      db_sql?: string
      auth_site_url?: string
      vercel_configuration_id?: string
      custom_supabase_internal_requests?: components['schemas']['CustomSupabaseInternalRequests']
    }
    CreateProjectResponse: {
      infra_compute_size?: components['schemas']['DbInstanceSize']
      cloud_provider: string
      id: number
      inserted_at: string
      name: string
      organization_id: number
      ref: string
      region: string
      status: string
      subscription_id: string
      is_branch_enabled: boolean
      is_read_replicas_enabled: boolean
      preview_branch_refs: string[]
      disk_volume_size_gb?: number
      endpoint: string
      anon_key: string
      service_key: string
    }
    GetUserContentObject: {
      owner: {
        id?: number
        username?: string
      }
      updated_by: {
        id?: number
        username?: string
      }
      id: string
      inserted_at: string
      updated_at: string
      type: Record<string, never>
      visibility: Record<string, never>
      name: string
      description?: string
      project_id: number
      owner_id: number
      last_updated_by: number
    }
    GetUserContentResponse: {
      data: components['schemas']['GetUserContentObject'][]
    }
    CreateContentParams: {
      id: string
      name: string
      description: string
      /** @enum {string} */
      type: 'sql' | 'report' | 'log_sql'
      /** @enum {string} */
      visibility: 'user' | 'project' | 'org' | 'public'
      content?: Record<string, never>
      owner_id?: number
    }
    UserContentObject: {
      id: string
      inserted_at: string
      updated_at: string
      type: Record<string, never>
      visibility: Record<string, never>
      name: string
      description?: string
      project_id: number
      owner_id: number
      last_updated_by: number
    }
    UpsertContentParams: {
      id: string
      name: string
      description: string
      /** @enum {string} */
      type: 'sql' | 'report' | 'log_sql'
      /** @enum {string} */
      visibility: 'user' | 'project' | 'org' | 'public'
      content?: Record<string, never>
      owner_id?: number
      project_id: number
    }
    UpdateContentParams: {
      id?: string
      name?: string
      description?: string
      /** @enum {string} */
      type?: 'sql' | 'report' | 'log_sql'
      /** @enum {string} */
      visibility?: 'user' | 'project' | 'org' | 'public'
      content?: Record<string, never>
      owner_id?: number
    }
    BulkDeleteUserContentResponse: {
      id: string
    }
    DatabaseDetailResponse: {
      /** @enum {string} */
      status:
        | 'ACTIVE_HEALTHY'
        | 'ACTIVE_UNHEALTHY'
        | 'COMING_UP'
        | 'GOING_DOWN'
        | 'INIT_FAILED'
        | 'REMOVED'
        | 'RESTORING'
        | 'UNKNOWN'
        | 'UPGRADING'
        | 'INIT_READ_REPLICA'
        | 'INIT_READ_REPLICA_FAILED'
      /** @enum {string} */
      cloud_provider: 'AWS' | 'FLY'
      db_port: number
      db_name: string
      db_user: string
      restUrl: string
      db_host: string
      connectionString: string
      identifier: string
      inserted_at: string
      size: string
      region: string
    }
    DatabaseStatusResponse: {
      /** @enum {string} */
      status:
        | 'ACTIVE_HEALTHY'
        | 'ACTIVE_UNHEALTHY'
        | 'COMING_UP'
        | 'GOING_DOWN'
        | 'INIT_FAILED'
        | 'REMOVED'
        | 'RESTORING'
        | 'UNKNOWN'
        | 'UPGRADING'
        | 'INIT_READ_REPLICA'
        | 'INIT_READ_REPLICA_FAILED'
      identifier: string
    }
    UpdatePasswordBody: {
      password: string
    }
    LoadBalancerDatabase: {
      identifier: string
      /** @enum {string} */
      type: 'PRIMARY' | 'READ_REPLICA'
      status: string
    }
    LoadBalancerDetailResponse: {
      endpoint: string
      databases: components['schemas']['LoadBalancerDatabase'][]
    }
    Buffer: Record<string, never>
    ResizeBody: {
      volume_size_gb: number
    }
    ServiceVersions: {
      gotrue: string
      postgrest: string
      'supabase-postgres': string
    }
    ProjectDetailResponse: {
      infra_compute_size?: components['schemas']['DbInstanceSize']
      cloud_provider: string
      db_host: string
      id: number
      inserted_at: string
      name: string
      organization_id: number
      ref: string
      region: string
      /** @enum {string} */
      status:
        | 'INACTIVE'
        | 'ACTIVE_HEALTHY'
        | 'ACTIVE_UNHEALTHY'
        | 'COMING_UP'
        | 'UNKNOWN'
        | 'GOING_DOWN'
        | 'INIT_FAILED'
        | 'REMOVED'
        | 'RESTORING'
        | 'UPGRADING'
      subscription_id: string
      connectionString: string
      kpsVersion?: string
      dbVersion?: string
      restUrl: string
      serviceVersions?: components['schemas']['ServiceVersions']
      volumeSizeGb?: number
      maxDatabasePreprovisionGb?: number
      lastDatabaseResizeAt?: string
      is_branch_enabled: boolean
      parent_project_ref?: string
      is_read_replicas_enabled: boolean
      v2MaintenanceWindow: {
        start?: string
        end?: string
      }
    }
    ProjectRefResponse: {
      id: number
      ref: string
      name: string
    }
    UpdateProjectBody: {
      name: string
    }
    BackupId: {
      id: number
    }
    RestoreProjectInfo: {
      id: number
      status: string
      organization_id: number
      subscription_id: string
      region: string
      cloud_provider: string
      back_ups: components['schemas']['BackupId'][]
    }
    RestartServiceRequest: {
      services: (
        | 'adminapi'
        | 'api-gateway'
        | 'envoy'
        | 'functions'
        | 'gotrue'
        | 'kong'
        | 'pgbouncer'
        | 'pgsodium'
        | 'postgresql'
        | 'postgrest'
        | 'realtime'
        | 'storage'
        | 'walg'
        | 'autoshutdown'
      )[]
      source_notification_id?: string
      region: string
    }
    RestartServicesBody: {
      restartRequest: components['schemas']['RestartServiceRequest']
    }
    ProjectAppConfigResponse: {
      db_schema: string
      endpoint: string
    }
    ProjectServiceApiKeyResponse: {
      api_key: string
      name: string
      tags: string
    }
    ProjectSettingsResponse: {
      name: string
      ref: string
      status: string
      inserted_at: string
      db_dns_name: string
      db_host: string
      db_name: string
      db_user: string
      db_port: string
      ssl_enforced: boolean
      cloud_provider: string
      region: string
      app_config?: components['schemas']['ProjectAppConfigResponse']
      jwt_secret?: string
      service_api_keys?: components['schemas']['ProjectServiceApiKeyResponse'][]
      /** @enum {string|null} */
      db_ip_addr_config: 'legacy' | 'static-ipv4' | 'concurrent-ipv6' | 'ipv6' | null
    }
    TransferProjectBody: {
      target_organization_slug: string
    }
    PreviewTransferInfo: {
      key: string
      message: string
    }
    MemberExceedingFreeProjectLimit: {
      name: string
      limit: number
    }
    PreviewTransferInvoiceItem: {
      description: string
      quantity: number
      amount: number
    }
    PreviewProjectTransferResponse: {
      source_subscription_plan: components['schemas']['BillingPlanId']
      target_subscription_plan: components['schemas']['BillingPlanId']
      valid: boolean
      warnings: components['schemas']['PreviewTransferInfo'][]
      errors: components['schemas']['PreviewTransferInfo'][]
      members_exceeding_free_project_limit: components['schemas']['MemberExceedingFreeProjectLimit'][]
      has_permissions_on_source_organization: boolean
      has_access_to_target_organization: boolean
      source_project_eligible: boolean
      target_organization_eligible: boolean | null
      target_organization_has_free_project_slots: boolean | null
      credits_on_source_organization: number
      costs_on_target_organization: number
      charge_on_target_organization: number
      source_invoice_items: components['schemas']['PreviewTransferInvoiceItem'][]
      target_invoice_items: components['schemas']['PreviewTransferInvoiceItem'][]
    }
    AnalyticsResponse: {
      error?: OneOf<
        [
          {
            code?: number
            errors?: {
              domain?: string
              location?: string
              locationType?: string
              message?: string
              reason?: string
            }[]
            message?: string
            status?: string
          },
          string,
        ]
      >
      result?: Record<string, never>[]
    }
    LFUser: {
      token: string
      metadata: {
        project_ref?: string
      }
    }
    LFSource: {
      token: string
      id: number
      name: string
    }
    LFEndpoint: {
      token: string
      id: number
      name: string
      description: string
      query: string
      language: Record<string, never>
      sandboxable: boolean | null
      cache_duration_seconds: number
      proactive_requerying_seconds: number
      max_limit: number
      enable_auth: number
    }
    PgbouncerConfigResponse: {
      default_pool_size?: number
      ignore_startup_parameters?: string
      max_client_conn?: number
      /** @enum {string} */
      pool_mode?: 'transaction' | 'session' | 'statement'
      inserted_at: string
      db_dns_name: string
      db_user: string
      db_host: string
      db_port: number
      db_name: string
      ssl_enforced: boolean
      pgbouncer_enabled: boolean
      supavisor_enabled: boolean
      /** @enum {string} */
      pgbouncer_status: 'COMING_DOWN' | 'COMING_UP' | 'DISABLED' | 'ENABLED' | 'RELOADING'
      connectionString: string
    }
    PgbouncerStatusResponse: {
      active: boolean
    }
    UpdatePgbouncerConfigBody: {
      default_pool_size?: number
      max_client_conn?: number | null
      ignore_startup_parameters: string
      pgbouncer_enabled: boolean
      /** @enum {string} */
      pool_mode: 'transaction' | 'session' | 'statement'
    }
    UpdatePoolingConfigResponse: {
      default_pool_size?: number
      max_client_conn?: number | null
      ignore_startup_parameters: string
      pgbouncer_enabled: boolean
      /** @enum {string} */
      pool_mode: 'transaction' | 'session' | 'statement'
      /** @enum {string} */
      pgbouncer_status: 'COMING_DOWN' | 'COMING_UP' | 'DISABLED' | 'ENABLED' | 'RELOADING'
    }
    PostgrestConfigResponse: {
      db_schema: string
      db_anon_role: string
      role_claim_key: string
      jwt_secret: string
      max_rows: number
      db_extra_search_path: string
    }
    UpdatePostgrestConfigBody: {
      max_rows?: number
      db_extra_search_path?: string
      db_schema?: string
    }
    V1PostgrestConfigResponse: {
      max_rows: number
      db_schema: string
      db_extra_search_path: string
    }
    PostgresConfigResponse: {
      statement_timeout?: string
      effective_cache_size?: string
      maintenance_work_mem?: string
      max_connections?: number
      max_locks_per_transaction?: number
      max_parallel_maintenance_workers?: number
      max_parallel_workers?: number
      max_parallel_workers_per_gather?: number
      max_worker_processes?: number
      shared_buffers?: string
      work_mem?: string
      /** @enum {string} */
      session_replication_role?: 'origin' | 'replica' | 'local'
    }
    UpdatePostgresConfigBody: {
      statement_timeout?: string
      effective_cache_size?: string
      maintenance_work_mem?: string
      max_connections?: number
      max_locks_per_transaction?: number
      max_parallel_maintenance_workers?: number
      max_parallel_workers?: number
      max_parallel_workers_per_gather?: number
      max_worker_processes?: number
      shared_buffers?: string
      work_mem?: string
      /** @enum {string} */
      session_replication_role?: 'origin' | 'replica' | 'local'
    }
    UpdateSecretsConfigBody: {
      jwt_secret: string
      change_tracking_id: string
    }
    UpdateSecretsResponse: {
      message: string
    }
    StorageConfigResponse: {
      isFreeTier: boolean
      fileSizeLimit: number
    }
    UpdateStorageConfigBody: {
      fileSizeLimit: number
    }
    UpdateStorageConfigResponse: {
      fileSizeLimit: number
    }
    SupavisorConfigResponse: {
      identifier: string
      /** @enum {string} */
      database_type: 'PRIMARY' | 'READ_REPLICA'
      is_using_scram_auth: boolean
      db_user: string
      db_host: string
      db_port: number
      db_name: string
      connectionString: string
      default_pool_size: number | null
      max_client_conn: number | null
      /** @enum {string|null} */
      pool_mode: 'transaction' | 'session' | 'statement' | null
    }
    UpdateSupavisorConfigBody: {
      default_pool_size?: number
      /** @enum {string} */
      pool_mode: 'transaction' | 'session' | 'statement'
    }
    UpdateSupavisorConfigResponse: {
      default_pool_size?: number
      /** @enum {string} */
      pool_mode: 'transaction' | 'session' | 'statement'
    }
    AvailableAddonResponse: {
      type: components['schemas']['ProjectAddonType']
      name: string
      variants: components['schemas']['ProjectAddonVariantResponse'][]
    }
    ProjectAddonsResponse: {
      ref: string
      selected_addons: components['schemas']['SelectedAddonResponse'][]
      available_addons: components['schemas']['AvailableAddonResponse'][]
    }
    UpdateAddonBody: {
      addon_variant: components['schemas']['AddonVariantId']
      addon_type: components['schemas']['ProjectAddonType']
    }
    ServiceApiKey: {
      api_key_encrypted?: string
      tags: string
      name: string
    }
    AutoApiService: {
      protocol: string
      endpoint: string
      restUrl: string
      project: {
        ref?: string
      }
      defaultApiKey: string
      serviceApiKey: string
      id: number
      name: string
      app_config: Record<string, never>
      app: {
        id?: number
        name?: string
      }
      service_api_keys: components['schemas']['ServiceApiKey'][]
    }
    ApiResponse: {
      autoApiService: components['schemas']['AutoApiService']
    }
    JwtSecretUpdateStatus: {
      jwtSecretUpdateStatus: {
        change_tracking_id?: string
        /** @enum {number} */
        error?: 0 | 1 | 2 | 3 | 4 | 5
        /** @enum {number} */
        progress?: 0 | 1 | 2 | 3 | 4 | 5
        /** @enum {number} */
        status?: 0 | 1 | 2
      }
    }
    ServiceApiKeyResponse: {
      api_key_encrypted?: string
      tags: string
      name: string
      api_key?: string
    }
    ServiceResponse: {
      service_api_keys: components['schemas']['ServiceApiKeyResponse'][]
      id: number
      name: string
      app_config: Record<string, never>
      app: {
        id?: number
        name?: string
      }
    }
    ProjectResponse: {
      jwt_secret: string
      services?: components['schemas']['ServiceResponse'][]
      id: number
      name: string
      ref: string
      status: string
      inserted_at: string
      db_dns_name: string
      db_host: string
      db_name: string
      db_user: string
      db_port: string
      ssl_enforced: boolean
      cloud_provider: string
      region: string
    }
    SettingsResponse: {
      project: components['schemas']['ProjectResponse']
      services: components['schemas']['ServiceResponse'][]
    }
    StorageBucket: {
      id: string
      name: string
      owner: string
      created_at: string
      updated_at: string
      public: boolean
    }
    UpdateStorageBucketBody: {
      public: boolean
      file_size_limit: number
      allowed_mime_types: string[]
    }
    CreateStorageBucketBody: {
      id: string
      public: boolean
      file_size_limit: number
      allowed_mime_types: string[]
    }
    StorageObjectSortBy: {
      column?: string
      order?: string
    }
    StorageObjectSearchOptions: {
      limit?: number
      offset?: number
      sortBy?: components['schemas']['StorageObjectSortBy']
      search?: string
    }
    GetObjectsBody: {
      path: string
      options: components['schemas']['StorageObjectSearchOptions']
    }
    StorageObject: {
      name: string
      bucket_id: string
      owner: string
      id: string
      updated_at: string
      created_at: string
      last_accessed_at: string
      metadata: Record<string, never>
      buckets: components['schemas']['StorageBucket']
    }
    StorageObjectTransformOptions: {
      width?: number
      height?: number
      /** @enum {string} */
      resize?: 'cover' | 'contain' | 'fill'
      quality?: number
      /** @enum {string} */
      format?: 'origin'
    }
    PublicUrlOptions: {
      transform?: components['schemas']['StorageObjectTransformOptions']
      download?: boolean
      downloadName?: string
    }
    GetPublicUrlBody: {
      path: string
      options?: components['schemas']['PublicUrlOptions']
    }
    PublicUrlResponse: {
      publicUrl: string
    }
    DownloadObjectOptions: {
      transform?: components['schemas']['StorageObjectTransformOptions']
      download?: boolean
      downloadName?: string
    }
    DownloadObjectBody: {
      path: string
      options?: components['schemas']['DownloadObjectOptions']
    }
    SignedUrlOptions: {
      transform?: components['schemas']['StorageObjectTransformOptions']
      download?: boolean
      downloadName?: string
    }
    GetSignedUrlBody: {
      path: string
      expiresIn: number
      options?: components['schemas']['SignedUrlOptions']
    }
    SignedUrlResponse: {
      signedUrl: string
    }
    SignedUrlsOptions: {
      download?: boolean
      downloadName?: string
    }
    GetSignedUrlsBody: {
      path: string[]
      expiresIn: number
      options?: components['schemas']['SignedUrlsOptions']
    }
    SignedUrlsResponse: {
      signedUrl: string
      error: string | null
      path: string | null
    }
    CopyObjectBody: {
      from: string
      to: string
    }
    CopyObjectResponse: {
      path: string
    }
    MoveObjectBody: {
      from: string
      to: string
    }
    DeleteObjectsBody: {
      paths: string[]
    }
    GetStorageCredential: {
      id: string
      description: string
      created_at: string
    }
    GetStorageCredentialsResponse: {
      data: components['schemas']['GetStorageCredential'][]
    }
    CreateStorageCredentialBody: {
      description: string
    }
    CreateStorageCredentialResponse: {
      id: string
      access_key: string
      secret_key: string
      description: string
    }
    Invoice: {
      id: string
      invoice_pdf: string
      subscription: string
      subtotal: number
      number: string
      period_end: number
      status: string
    }
    OverdueInvoiceCount: {
      organization_id: number
      overdue_invoice_count: number
    }
    GoogleAnalyticBody: {
      language?: string
      screen_resolution?: string
      session_id: string
    }
    TelemetryEventBody: {
      category: string
      action: string
      label?: Record<string, never>
      value?: string
      page_referrer?: string
      page_title?: string
      page_location?: string
      ga?: components['schemas']['GoogleAnalyticBody']
    }
    IdentifyUserBody: {
      id: number
      gotrue_id: string
      mobile?: string
      primary_email: string
      username?: string
      first_name?: string
      last_name?: string
      is_alpha_user?: boolean
      free_project_limit?: number
      auth0_id?: string
    }
    TelemetryIdentifyBody: {
      user: components['schemas']['IdentifyUserBody']
      ga?: components['schemas']['GoogleAnalyticBody']
    }
    TelemetryPageBody: {
      referrer: string
      title: string
      route?: string
      ga?: components['schemas']['GoogleAnalyticBody']
    }
    PageBody: {
      path: string
      location: string
      referrer?: string
      title?: string
    }
    TelemetryActivityBody: {
      activity: string
      source: string
      projectRef?: string
      orgSlug?: string
      data?: Record<string, never>
      page: components['schemas']['PageBody']
    }
    TelemetryPageviewBody: {
      projectRef?: string
      orgSlug?: string
      referrer: string
      title: string
      path: string
      location: string
    }
    CreateVercelEnvironmentVariableBody: {
      key: string
      target: string[]
      type: string
      value: string
    }
    GetUserOrganizationIntegrationResponse: {
      id: string
      inserted_at: string
      updated_at: string
      metadata: Record<string, never>
      integration: {
        name?: string
      }
      added_by: {
        username?: string
        primary_email?: string
      }
      organization: {
        slug?: string
      }
    }
    ProjectIntegrationConnection: {
      id: string
      inserted_at: string
      updated_at: string
      organization_integration_id: string
      supabase_project_ref: string
      added_by: {
        username?: string
        primary_email?: string
      }
    }
    GetOrganizationIntegrationResponse: {
      id: string
      inserted_at: string
      updated_at: string
      metadata: Record<string, never>
      integration: {
        name?: string
      }
      added_by: {
        username?: string
        primary_email?: string
      }
      organization: {
        slug?: string
      }
      connections: components['schemas']['ProjectIntegrationConnection'][]
    }
    CreateVercelIntegrationBody: {
      code: string
      configuration_id: string
      organization_slug: string
      metadata: Record<string, never>
      source: string
      teamId?: string
    }
    VercelProjectDeployHooks: {
      createdAt?: number
      id: string
      name: string
      ref: string
      url: string
    }
    VercelProjectLink: {
      type?: string
      deployHooks: components['schemas']['VercelProjectDeployHooks'][]
      gitCredentialId?: string
      productionBranch?: string
    }
    IntegrationVercelProject: {
      id: string
      name: string
      framework?: string | null
      link?: components['schemas']['VercelProjectLink']
    }
    GetVercelProjectsResponse: {
      projects: components['schemas']['IntegrationVercelProject'][]
      pagination: {
        count?: number
        next?: number | null
        prev?: number | null
      }
    }
    GetVercelConnections: {
      id: string
      inserted_at: string
      updated_at: string
      organization_integration_id: string
      supabase_project_ref: string
      foreign_project_id: string
      metadata: Record<string, never>
    }
    IntegrationConnectionVercel: {
      foreign_project_id: string
      supabase_project_ref: string
      metadata: Record<string, never>
    }
    CreateVercelConnectionsBody: {
      organization_integration_id: string
      connection: components['schemas']['IntegrationConnectionVercel']
    }
    SyncVercelEnvError: {
      message: string
    }
    CreateVercelConnectionResponse: {
      id: string
      env_sync_error?: components['schemas']['SyncVercelEnvError']
    }
    UpdateVercelConnectionsBody: {
      metadata: Record<string, never>
    }
    DeleteVercelConnectionResponse: {
      id: string
    }
    GitHubAuthorization: {
      id: number
      user_id: number
      sender_id: number
    }
    CreateGitHubAuthorizationBody: {
      code: string
    }
    ListGitHubConnectionsProject: {
      id: number
      ref: string
      name: string
    }
    ListGitHubConnectionsRepository: {
      id: number
      name: string
    }
    ListGitHubConnectionsUser: {
      id: number
      username: string
      primary_email: string | null
    }
    ListGitHubConnectionsConnection: {
      id: number
      inserted_at: string
      updated_at: string
      installation_id: number
      project: components['schemas']['ListGitHubConnectionsProject']
      repository: components['schemas']['ListGitHubConnectionsRepository']
      user: components['schemas']['ListGitHubConnectionsUser'] | null
      workdir: string
    }
    ListGitHubConnectionsResponse: {
      connections: components['schemas']['ListGitHubConnectionsConnection'][]
    }
    CreateGitHubConnectionsBody: {
      project_ref: string
      installation_id: number
      repository_id: number
    }
    UpdateGitHubConnectionsBody: {
      workdir?: string
      supabase_changes_only?: boolean
    }
    CreateCliLoginSessionBody: {
      session_id: string
      public_key: string
      token_name?: string
    }
    V1UpdateFunctionBody: {
      name?: string
      body?: string
      verify_jwt?: boolean
    }
    FunctionResponse: {
      id: string
      slug: string
      name: string
      /** @enum {string} */
      status: 'ACTIVE' | 'REMOVED' | 'THROTTLED'
      version: number
      created_at: number
      updated_at: number
      verify_jwt?: boolean
      import_map?: boolean
      entrypoint_path?: string
      import_map_path?: string
    }
    V1CreateFunctionBody: {
      slug: string
      name: string
      body: string
      verify_jwt?: boolean
    }
    SecretResponse: {
      name: string
      value: string
    }
    CreateSecretBody: {
      /**
       * @description Secret name must not start with the SUPABASE_ prefix.
       * @example string
       */
      name: string
      value: string
    }
    HealthResponse: {
      healthy: boolean
    }
    ReportStatusBody: {
      /** @enum {string} */
      status:
        | 'ACTIVE_HEALTHY'
        | 'ACTIVE_UNHEALTHY'
        | 'COMING_UP'
        | 'GOING_DOWN'
        | 'INIT_FAILED'
        | 'REMOVED'
        | 'RESTORING'
        | 'UNKNOWN'
        | 'UPGRADING'
        | 'INIT_READ_REPLICA'
        | 'INIT_READ_REPLICA_FAILED'
      reportingToken: string
      databaseIdentifier: string
    }
    EventBody: {
      reportingToken: string
      eventType: string
      message: string
    }
    CredentialsRequestBody: {
      projectToken: string
    }
    CredentialsResponseBody: {
      access_key_id: string
      secret_access_key: string
      session_token: string
      /** Format: date-time */
      expiry_time: string
    }
    UpdateAddonAdminBody: {
      addon_variant: components['schemas']['AddonVariantId']
      addon_type: components['schemas']['ProjectAddonType']
      /** @enum {string} */
      proration_behaviour?: 'prorate_and_invoice_end_of_cycle' | 'prorate_and_invoice_now'
      price_id?: string
    }
    SystemCreateProjectBody: {
      /** @description Database password */
      db_pass: string
      /** @description Name of your project, should not contain dots */
      name: string
      /** @description Slug of your organization */
      organization_id: string
      /**
       * @description Subscription plan
       * @example free
       * @enum {string}
       */
      plan: 'free' | 'pro'
      /**
       * @description Region you want your server to reside in
       * @example us-east-1
       * @enum {string}
       */
      region:
        | 'us-east-1'
        | 'us-west-1'
        | 'us-west-2'
        | 'ap-east-1'
        | 'ap-southeast-1'
        | 'ap-northeast-1'
        | 'ap-northeast-2'
        | 'ap-southeast-2'
        | 'eu-west-1'
        | 'eu-west-2'
        | 'eu-west-3'
        | 'eu-central-1'
        | 'ca-central-1'
        | 'ap-south-1'
        | 'sa-east-1'
      jwt_secret: string
      anon_key: string
      service_key: string
      api_key_supabase: string
      db_pass_supabase: string
    }
    SystemDatabaseResponse: {
      /** @description Database host */
      host: string
      /** @description Database version */
      version: string
    }
    SystemProjectResponse: {
      /** @description Id of your project */
      id: string
      /** @description Slug of your organization */
      organization_id: string
      /** @description Name of your project */
      name: string
      /**
       * @description Region of your project
       * @example us-east-1
       */
      region: string
      /**
       * @description Creation timestamp
       * @example 2023-03-29T16:32:59Z
       */
      created_at: string
      database?: components['schemas']['SystemDatabaseResponse']
    }
    UpdateSubscriptionV2AdminBody: {
      payment_method?: string
      /** @enum {string} */
      tier: 'tier_payg' | 'tier_pro' | 'tier_free' | 'tier_team' | 'tier_enterprise'
      price_id?: string
    }
    RestrictionData: {
      grace_period_end?: string
      /** @enum {string} */
      restrictions?: 'drop_requests_402'
      violations?: (
        | 'exceed_db_size_quota'
        | 'exceed_egress_quota'
        | 'exceed_edge_functions_count_quota'
        | 'exceed_edge_functions_invocations_quota'
        | 'exceed_monthly_active_users_quota'
        | 'exceed_realtime_connection_count_quota'
        | 'exceed_realtime_message_count_quota'
        | 'exceed_storage_size_quota'
        | 'overdue_payment'
      )[]
    }
    UpdateRestrictionsBody: {
      /** @enum {string} */
      restriction_status: 'grace_period' | 'grace_period_over' | 'null' | 'restricted'
      restriction_data?: components['schemas']['RestrictionData']
      no_notification?: boolean
    }
    UpdateRestrictionsResponse: {
      slug: string
      /** @enum {string} */
      restriction_status?: 'grace_period' | 'grace_period_over' | 'null' | 'restricted'
      restriction_data?: components['schemas']['RestrictionData']
      message?: string
    }
    CreateAwsPartnerOrganizationBody: {
      primary_email: string
      name: string
    }
    AwsPartnerOrganizationResponse: {
      id: number
      slug: string
      name: string
    }
    GetMetricsBody: {
      /** @enum {string} */
      metric: 'user_queries'
      /** @enum {string} */
      interval: '1d' | '3d' | '7d'
      project_refs: string[]
      region: string
    }
    ProjectMetric: {
      project_ref: string
      metric: string
      value: number
    }
    GetMetricsResponse: {
      metrics: components['schemas']['ProjectMetric'][]
    }
    BranchDetailResponse: {
      db_port: number
      ref: string
      postgres_version: string
      /** @enum {string} */
      status:
        | 'ACTIVE_HEALTHY'
        | 'ACTIVE_UNHEALTHY'
        | 'COMING_UP'
        | 'GOING_DOWN'
        | 'INACTIVE'
        | 'INIT_FAILED'
        | 'REMOVED'
        | 'RESTORING'
        | 'UNKNOWN'
        | 'UPGRADING'
        | 'PAUSING'
      db_host: string
      db_user?: string
      db_pass?: string
      jwt_secret?: string
    }
    UpdateBranchBody: {
      branch_name?: string
      git_branch?: string
      reset_on_push?: boolean
      persistent?: boolean
    }
    BranchResponse: {
      id: string
      name: string
      project_ref: string
      parent_project_ref: string
      is_default: boolean
      git_branch?: string
      pr_number?: number
      reset_on_push: boolean
      persistent: boolean
      /** @enum {string} */
      status: 'CREATING_PROJECT' | 'RUNNING_MIGRATIONS' | 'MIGRATIONS_PASSED' | 'MIGRATIONS_FAILED'
      created_at: string
      updated_at: string
    }
    BranchDeleteResponse: {
      message: string
    }
    BranchResetResponse: {
      message: string
    }
    V1DatabaseResponse: {
      /** @description Database host */
      host: string
      /** @description Database version */
      version: string
    }
    V1ProjectResponse: {
      /** @description Id of your project */
      id: string
      /** @description Slug of your organization */
      organization_id: string
      /** @description Name of your project */
      name: string
      /**
       * @description Region of your project
       * @example us-east-1
       */
      region: string
      /**
       * @description Creation timestamp
       * @example 2023-03-29T16:32:59Z
       */
      created_at: string
      database?: components['schemas']['V1DatabaseResponse']
      /** @enum {string} */
      status:
        | 'ACTIVE_HEALTHY'
        | 'ACTIVE_UNHEALTHY'
        | 'COMING_UP'
        | 'GOING_DOWN'
        | 'INACTIVE'
        | 'INIT_FAILED'
        | 'REMOVED'
        | 'RESTORING'
        | 'UNKNOWN'
        | 'UPGRADING'
        | 'PAUSING'
    }
    V1CreateProjectBody: {
      /** @description Database password */
      db_pass: string
      /** @description Name of your project, should not contain dots */
      name: string
      /** @description Slug of your organization */
      organization_id: string
      /**
       * @deprecated
       * @description Subscription plan is now set on organization level and is ignored in this request
       * @example free
       * @enum {string}
       */
      plan?: 'free' | 'pro'
      /**
       * @description Region you want your server to reside in
       * @example us-east-1
       * @enum {string}
       */
      region:
        | 'us-east-1'
        | 'us-west-1'
        | 'us-west-2'
        | 'ap-east-1'
        | 'ap-southeast-1'
        | 'ap-northeast-1'
        | 'ap-northeast-2'
        | 'ap-southeast-2'
        | 'eu-west-1'
        | 'eu-west-2'
        | 'eu-west-3'
        | 'eu-central-1'
        | 'ca-central-1'
        | 'ap-south-1'
        | 'sa-east-1'
      /** @deprecated */
      kps_enabled?: boolean
      desired_instance_size?: components['schemas']['DesiredInstanceSize']
      /**
       * @description Template URL used to create the project from the CLI.
       * @example https://github.com/supabase/supabase/tree/master/examples/slack-clone/nextjs-slack-clone
       */
      template_url?: string
    }
    ApiKeyResponse: {
      name: string
      api_key: string
    }
    CreateBranchBody: {
      branch_name: string
      git_branch?: string
      region?: string
    }
    UpdateCustomHostnameResponse: {
      /** @enum {string} */
      status:
        | '1_not_started'
        | '2_initiated'
        | '3_challenge_verified'
        | '4_origin_setup_completed'
        | '5_services_reconfigured'
      custom_hostname: string
      data: Record<string, never>
    }
    UpdateCustomHostnameBody: {
      custom_hostname: string
    }
    NetworkBanResponse: {
      banned_ipv4_addresses: string[]
    }
    RemoveNetworkBanRequest: {
      ipv4_addresses: string[]
    }
    NetworkRestrictionsRequest: {
      dbAllowedCidrs?: string[]
      dbAllowedCidrsV6?: string[]
    }
    NetworkRestrictionsResponse: {
      /** @enum {string} */
      entitlement: 'disallowed' | 'allowed'
      config: components['schemas']['NetworkRestrictionsRequest']
      old_config?: components['schemas']['NetworkRestrictionsRequest']
      /** @enum {string} */
      status: 'stored' | 'applied'
    }
    PgsodiumConfigResponse: {
      root_key: string
    }
    UpdatePgsodiumConfigBody: {
      root_key: string
    }
    PostgrestConfigWithJWTSecretResponse: {
      max_rows: number
      db_schema: string
      db_extra_search_path: string
      jwt_secret?: string
    }
    V1ProjectRefResponse: {
      id: number
      ref: string
      name: string
    }
    SslEnforcements: {
      database: boolean
    }
    SslEnforcementResponse: {
      currentConfig: components['schemas']['SslEnforcements']
      appliedSuccessfully: boolean
    }
    SslEnforcementRequest: {
      requestedConfig: components['schemas']['SslEnforcements']
    }
    TypescriptResponse: {
      types: string
    }
    VanitySubdomainConfigResponse: {
      /** @enum {string} */
      status: 'not-used' | 'custom-domain-used' | 'active'
      custom_domain?: string
    }
    VanitySubdomainBody: {
      vanity_subdomain: string
    }
    SubdomainAvailabilityResponse: {
      available: boolean
    }
    ActivateVanitySubdomainResponse: {
      custom_domain: string
    }
    UpgradeDatabaseBody: {
      target_version: number
    }
    ProjectUpgradeInitiateResponse: {
      tracking_id: string
    }
    ProjectVersion: {
      postgres_version: number
      app_version: string
    }
    ProjectUpgradeEligibilityResponse: {
      eligible: boolean
      current_app_version: string
      latest_app_version: string
      target_upgrade_versions: components['schemas']['ProjectVersion'][]
      potential_breaking_changes: string[]
      duration_estimate_hours: number
      legacy_auth_custom_roles: string[]
      extension_dependent_objects: string[]
    }
    DatabaseUpgradeStatus: {
      initiated_at: string
      target_version: number
      /** @enum {string} */
      error?:
        | '1_upgraded_instance_launch_failed'
        | '2_volume_detachchment_from_upgraded_instance_failed'
        | '3_volume_attachment_to_original_instance_failed'
        | '4_data_upgrade_initiation_failed'
        | '5_data_upgrade_completion_failed'
        | '6_volume_detachchment_from_original_instance_failed'
        | '7_volume_attachment_to_upgraded_instance_failed'
        | '8_upgrade_completion_failed'
      /** @enum {string} */
      progress?:
        | '0_requested'
        | '1_started'
        | '2_launched_upgraded_instance'
        | '3_detached_volume_from_upgraded_instance'
        | '4_attached_volume_to_original_instance'
        | '5_initiated_data_upgrade'
        | '6_completed_data_upgrade'
        | '7_detached_volume_from_original_instance'
        | '8_attached_volume_to_upgraded_instance'
        | '9_completed_upgrade'
      /** @enum {number} */
      status: 0 | 1 | 2
    }
    DatabaseUpgradeStatusResponse: {
      databaseUpgradeStatus: components['schemas']['DatabaseUpgradeStatus'] | null
    }
    ReadOnlyStatusResponse: {
      enabled: boolean
      override_enabled: boolean
      override_active_until: string
    }
    SetUpReadReplicaBody: {
      /**
       * @description Region you want your read replica to reside in
       * @example us-east-1
       * @enum {string}
       */
      read_replica_region:
        | 'us-east-1'
        | 'us-west-1'
        | 'us-west-2'
        | 'ap-east-1'
        | 'ap-southeast-1'
        | 'ap-northeast-1'
        | 'ap-northeast-2'
        | 'ap-southeast-2'
        | 'eu-west-1'
        | 'eu-west-2'
        | 'eu-west-3'
        | 'eu-central-1'
        | 'ca-central-1'
        | 'ap-south-1'
        | 'sa-east-1'
    }
    RemoveReadReplicaBody: {
      database_identifier: string
    }
    AuthHealthResponse: {
      name: string
      version: string
      description: string
    }
    RealtimeHealthResponse: {
      healthy: boolean
      db_connected: boolean
      connected_cluster: number
    }
    V1ServiceHealthResponse: {
      info?:
        | components['schemas']['AuthHealthResponse']
        | components['schemas']['RealtimeHealthResponse']
      /** @enum {string} */
      name: 'auth' | 'db' | 'pooler' | 'realtime' | 'rest' | 'storage'
      healthy: boolean
      /** @enum {string} */
      status: 'COMING_UP' | 'ACTIVE_HEALTHY' | 'UNHEALTHY'
      error?: string
    }
    V1PgbouncerConfigResponse: {
      /** @enum {string} */
      pool_mode?: 'transaction' | 'session' | 'statement'
      default_pool_size?: number
      ignore_startup_parameters?: string
      max_client_conn?: number
      connection_string?: string
    }
    AuthConfigResponse: {
      disable_signup: boolean | null
      external_anonymous_users_enabled: boolean | null
      external_apple_additional_client_ids: string | null
      external_apple_client_id: string | null
      external_apple_enabled: boolean | null
      external_apple_secret: string | null
      external_azure_client_id: string | null
      external_azure_enabled: boolean | null
      external_azure_secret: string | null
      external_azure_url: string | null
      external_bitbucket_client_id: string | null
      external_bitbucket_enabled: boolean | null
      external_bitbucket_secret: string | null
      external_discord_client_id: string | null
      external_discord_enabled: boolean | null
      external_discord_secret: string | null
      external_email_enabled: boolean | null
      external_facebook_client_id: string | null
      external_facebook_enabled: boolean | null
      external_facebook_secret: string | null
      external_figma_client_id: string | null
      external_figma_enabled: boolean | null
      external_figma_secret: string | null
      external_github_client_id: string | null
      external_github_enabled: boolean | null
      external_github_secret: string | null
      external_gitlab_client_id: string | null
      external_gitlab_enabled: boolean | null
      external_gitlab_secret: string | null
      external_gitlab_url: string | null
      external_google_additional_client_ids: string | null
      external_google_client_id: string | null
      external_google_enabled: boolean | null
      external_google_secret: string | null
      external_google_skip_nonce_check: boolean | null
      external_kakao_client_id: string | null
      external_kakao_enabled: boolean | null
      external_kakao_secret: string | null
      external_keycloak_client_id: string | null
      external_keycloak_enabled: boolean | null
      external_keycloak_secret: string | null
      external_keycloak_url: string | null
      external_linkedin_oidc_client_id: string | null
      external_linkedin_oidc_enabled: boolean | null
      external_linkedin_oidc_secret: string | null
      external_notion_client_id: string | null
      external_notion_enabled: boolean | null
      external_notion_secret: string | null
      external_phone_enabled: boolean | null
      external_slack_client_id: string | null
      external_slack_enabled: boolean | null
      external_slack_secret: string | null
      external_spotify_client_id: string | null
      external_spotify_enabled: boolean | null
      external_spotify_secret: string | null
      external_twitch_client_id: string | null
      external_twitch_enabled: boolean | null
      external_twitch_secret: string | null
      external_twitter_client_id: string | null
      external_twitter_enabled: boolean | null
      external_twitter_secret: string | null
      external_workos_client_id: string | null
      external_workos_enabled: boolean | null
      external_workos_secret: string | null
      external_workos_url: string | null
      external_zoom_client_id: string | null
      external_zoom_enabled: boolean | null
      external_zoom_secret: string | null
      hook_custom_access_token_enabled: boolean | null
      hook_custom_access_token_uri: string | null
      hook_mfa_verification_attempt_enabled: boolean | null
      hook_mfa_verification_attempt_uri: string | null
      hook_password_verification_attempt_enabled: boolean | null
      hook_password_verification_attempt_uri: string | null
      jwt_exp: number | null
      mailer_allow_unverified_email_sign_ins: boolean | null
      mailer_autoconfirm: boolean | null
      mailer_otp_exp: number | null
      mailer_secure_email_change_enabled: boolean | null
      mailer_subjects_confirmation: string | null
      mailer_subjects_email_change: string | null
      mailer_subjects_invite: string | null
      mailer_subjects_magic_link: string | null
      mailer_subjects_recovery: string | null
      mailer_subjects_reauthentication: string | null
      mailer_templates_confirmation_content: string | null
      mailer_templates_email_change_content: string | null
      mailer_templates_invite_content: string | null
      mailer_templates_magic_link_content: string | null
      mailer_templates_recovery_content: string | null
      mailer_templates_reauthentication_content: string | null
      mfa_max_enrolled_factors: number | null
      password_hibp_enabled: boolean | null
      password_min_length: number | null
      password_required_characters: string | null
      rate_limit_anonymous_users: number | null
      rate_limit_email_sent: number | null
      rate_limit_sms_sent: number | null
      rate_limit_token_refresh: number | null
      rate_limit_verify: number | null
      refresh_token_rotation_enabled: boolean | null
      saml_enabled: boolean | null
      security_captcha_enabled: boolean | null
      security_captcha_provider: string | null
      security_captcha_secret: string | null
      security_manual_linking_enabled: boolean | null
      security_refresh_token_reuse_interval: number | null
      security_update_password_require_reauthentication: boolean | null
      sessions_inactivity_timeout: number | null
      sessions_single_per_user: boolean | null
      sessions_tags: string | null
      sessions_timebox: number | null
      site_url: string | null
      sms_autoconfirm: boolean | null
      sms_max_frequency: number | null
      sms_messagebird_access_key: string | null
      sms_messagebird_originator: string | null
      sms_otp_exp: number | null
      sms_otp_length: number | null
      sms_provider: string | null
      sms_template: string | null
      sms_test_otp: string | null
      sms_test_otp_valid_until: string | null
      sms_textlocal_api_key: string | null
      sms_textlocal_sender: string | null
      sms_twilio_account_sid: string | null
      sms_twilio_auth_token: string | null
      sms_twilio_content_sid: string | null
      sms_twilio_message_service_sid: string | null
      sms_twilio_verify_account_sid: string | null
      sms_twilio_verify_auth_token: string | null
      sms_twilio_verify_message_service_sid: string | null
      sms_vonage_api_key: string | null
      sms_vonage_api_secret: string | null
      sms_vonage_from: string | null
      smtp_admin_email: string | null
      smtp_host: string | null
      smtp_max_frequency: number | null
      smtp_pass: string | null
      smtp_port: string | null
      smtp_sender_name: string | null
      smtp_user: string | null
      uri_allow_list: string | null
    }
    UpdateAuthConfigBody: {
      site_url?: string
      disable_signup?: boolean
      jwt_exp?: number
      smtp_admin_email?: string
      smtp_host?: string
      smtp_port?: string
      smtp_user?: string
      smtp_pass?: string
      smtp_max_frequency?: number
      smtp_sender_name?: string
      mailer_allow_unverified_email_sign_ins?: boolean
      mailer_autoconfirm?: boolean
      mailer_subjects_invite?: string
      mailer_subjects_confirmation?: string
      mailer_subjects_recovery?: string
      mailer_subjects_email_change?: string
      mailer_subjects_magic_link?: string
      mailer_subjects_reauthentication?: string
      mailer_templates_invite_content?: string
      mailer_templates_confirmation_content?: string
      mailer_templates_recovery_content?: string
      mailer_templates_email_change_content?: string
      mailer_templates_magic_link_content?: string
      mailer_templates_reauthentication_content?: string
      mfa_max_enrolled_factors?: number
      uri_allow_list?: string
      external_anonymous_users_enabled?: boolean
      external_email_enabled?: boolean
      external_phone_enabled?: boolean
      saml_enabled?: boolean
      security_captcha_enabled?: boolean
      security_captcha_provider?: string
      security_captcha_secret?: string
      sessions_timebox?: number
      sessions_inactivity_timeout?: number
      sessions_single_per_user?: boolean
      sessions_tags?: string
      rate_limit_anonymous_users?: number
      rate_limit_email_sent?: number
      rate_limit_sms_sent?: number
      rate_limit_verify?: number
      rate_limit_token_refresh?: number
      mailer_secure_email_change_enabled?: boolean
      refresh_token_rotation_enabled?: boolean
      password_hibp_enabled?: boolean
      password_min_length?: number
      /** @enum {string} */
      password_required_characters?:
        | 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789'
        | 'abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789'
        | 'abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789:!@#$%^&*()_+-=[]{};\'\\:"|<>?,./`~'
        | ''
      security_manual_linking_enabled?: boolean
      security_update_password_require_reauthentication?: boolean
      security_refresh_token_reuse_interval?: number
      mailer_otp_exp?: number
      sms_autoconfirm?: boolean
      sms_max_frequency?: number
      sms_otp_exp?: number
      sms_otp_length?: number
      sms_provider?: string
      sms_messagebird_access_key?: string
      sms_messagebird_originator?: string
      sms_test_otp?: string
      sms_test_otp_valid_until?: string
      sms_textlocal_api_key?: string
      sms_textlocal_sender?: string
      sms_twilio_account_sid?: string
      sms_twilio_auth_token?: string
      sms_twilio_content_sid?: string
      sms_twilio_message_service_sid?: string
      sms_twilio_verify_account_sid?: string
      sms_twilio_verify_auth_token?: string
      sms_twilio_verify_message_service_sid?: string
      sms_vonage_api_key?: string
      sms_vonage_api_secret?: string
      sms_vonage_from?: string
      sms_template?: string
      hook_mfa_verification_attempt_enabled?: boolean
      hook_mfa_verification_attempt_uri?: string
      hook_password_verification_attempt_enabled?: boolean
      hook_password_verification_attempt_uri?: string
      hook_custom_access_token_enabled?: boolean
      hook_custom_access_token_uri?: string
      hook_send_sms_enabled?: boolean
      hook_send_sms_uri?: string
      hook_send_email_enabled?: boolean
      hook_send_email_uri?: string
      external_apple_enabled?: boolean
      external_apple_client_id?: string
      external_apple_secret?: string
      external_apple_additional_client_ids?: string
      external_azure_enabled?: boolean
      external_azure_client_id?: string
      external_azure_secret?: string
      external_azure_url?: string
      external_bitbucket_enabled?: boolean
      external_bitbucket_client_id?: string
      external_bitbucket_secret?: string
      external_discord_enabled?: boolean
      external_discord_client_id?: string
      external_discord_secret?: string
      external_facebook_enabled?: boolean
      external_facebook_client_id?: string
      external_facebook_secret?: string
      external_figma_enabled?: boolean
      external_figma_client_id?: string
      external_figma_secret?: string
      external_github_enabled?: boolean
      external_github_client_id?: string
      external_github_secret?: string
      external_gitlab_enabled?: boolean
      external_gitlab_client_id?: string
      external_gitlab_secret?: string
      external_gitlab_url?: string
      external_google_enabled?: boolean
      external_google_client_id?: string
      external_google_secret?: string
      external_google_additional_client_ids?: string
      external_google_skip_nonce_check?: boolean
      external_kakao_enabled?: boolean
      external_kakao_client_id?: string
      external_kakao_secret?: string
      external_keycloak_enabled?: boolean
      external_keycloak_client_id?: string
      external_keycloak_secret?: string
      external_keycloak_url?: string
      external_linkedin_oidc_enabled?: boolean
      external_linkedin_oidc_client_id?: string
      external_linkedin_oidc_secret?: string
      external_notion_enabled?: boolean
      external_notion_client_id?: string
      external_notion_secret?: string
      external_slack_enabled?: boolean
      external_slack_client_id?: string
      external_slack_secret?: string
      external_spotify_enabled?: boolean
      external_spotify_client_id?: string
      external_spotify_secret?: string
      external_twitch_enabled?: boolean
      external_twitch_client_id?: string
      external_twitch_secret?: string
      external_twitter_enabled?: boolean
      external_twitter_client_id?: string
      external_twitter_secret?: string
      external_workos_enabled?: boolean
      external_workos_client_id?: string
      external_workos_secret?: string
      external_workos_url?: string
      external_zoom_enabled?: boolean
      external_zoom_client_id?: string
      external_zoom_secret?: string
    }
    CreateThirdPartyAuthBody: {
      oidc_issuer_url?: string
      jwks_url?: string
      custom_jwks?: Record<string, never>
    }
    ThirdPartyAuth: {
      id: string
      type: string
      oidc_issuer_url?: string | null
      jwks_url?: string | null
      custom_jwks?: unknown
      resolved_jwks?: unknown
      inserted_at: string
      updated_at: string
      resolved_at?: string | null
    }
    AttributeValue: {
      default?: Record<string, never> | number | string | boolean
      name?: string
      names?: string[]
    }
    AttributeMapping: {
      keys: {
        [key: string]: components['schemas']['AttributeValue']
      }
    }
    CreateProviderBody: {
      /**
       * @description What type of provider will be created
       * @enum {string}
       */
      type: 'saml'
      metadata_xml?: string
      metadata_url?: string
      domains?: string[]
      attribute_mapping?: components['schemas']['AttributeMapping']
    }
    SamlDescriptor: {
      id: string
      entity_id: string
      metadata_url?: string
      metadata_xml?: string
      attribute_mapping?: components['schemas']['AttributeMapping']
    }
    Domain: {
      id: string
      domain?: string
      created_at?: string
      updated_at?: string
    }
    CreateProviderResponse: {
      id: string
      saml?: components['schemas']['SamlDescriptor']
      domains?: components['schemas']['Domain'][]
      created_at?: string
      updated_at?: string
    }
    Provider: {
      id: string
      saml?: components['schemas']['SamlDescriptor']
      domains?: components['schemas']['Domain'][]
      created_at?: string
      updated_at?: string
    }
    ListProvidersResponse: {
      items: components['schemas']['Provider'][]
    }
    GetProviderResponse: {
      id: string
      saml?: components['schemas']['SamlDescriptor']
      domains?: components['schemas']['Domain'][]
      created_at?: string
      updated_at?: string
    }
    UpdateProviderBody: {
      metadata_xml?: string
      metadata_url?: string
      domains?: string[]
      attribute_mapping?: components['schemas']['AttributeMapping']
    }
    UpdateProviderResponse: {
      id: string
      saml?: components['schemas']['SamlDescriptor']
      domains?: components['schemas']['Domain'][]
      created_at?: string
      updated_at?: string
    }
    DeleteProviderResponse: {
      id: string
      saml?: components['schemas']['SamlDescriptor']
      domains?: components['schemas']['Domain'][]
      created_at?: string
      updated_at?: string
    }
    V1RunQueryBody: {
      query: string
    }
    V1Backup: {
      /** @enum {string} */
      status: 'COMPLETED' | 'FAILED' | 'PENDING' | 'REMOVED' | 'ARCHIVED'
      is_physical_backup: boolean
      inserted_at: string
    }
    V1PhysicalBackup: {
      earliest_physical_backup_date_unix?: number
      latest_physical_backup_date_unix?: number
    }
    V1BackupsResponse: {
      region: string
      walg_enabled: boolean
      pitr_enabled: boolean
      backups: components['schemas']['V1Backup'][]
      physical_backup_data: components['schemas']['V1PhysicalBackup']
    }
    V1RestorePitrBody: {
      recovery_time_target_unix: number
    }
    FunctionSlugResponse: {
      id: string
      slug: string
      name: string
      /** @enum {string} */
      status: 'ACTIVE' | 'REMOVED' | 'THROTTLED'
      version: number
      created_at: number
      updated_at: number
      verify_jwt?: boolean
      import_map?: boolean
      entrypoint_path?: string
      import_map_path?: string
    }
    V1StorageBucketResponse: {
      id: string
      name: string
      owner: string
      created_at: string
      updated_at: string
      public: boolean
    }
    OrganizationResponseV1: {
      id: string
      name: string
    }
    CreateOrganizationBodyV1: {
      name: string
    }
    V1OrganizationMemberResponse: {
      user_id: string
      user_name: string
      email?: string
      role_name: string
      mfa_enabled: boolean
    }
    V1OrganizationSlugResponse: {
      plan?: components['schemas']['BillingPlanId']
      opt_in_tags: 'AI_SQL_GENERATOR_OPT_IN'[]
      id: string
      name: string
    }
    OAuthTokenBody: {
      /** @enum {string} */
      grant_type: 'authorization_code' | 'refresh_token'
      client_id: string
      client_secret: string
      code?: string
      code_verifier?: string
      redirect_uri?: string
      refresh_token?: string
    }
    OAuthTokenResponse: {
      /** @enum {string} */
      token_type: 'Bearer'
      access_token: string
      refresh_token: string
      expires_in: number
    }
    SnippetProject: {
      id: number
      name: string
    }
    SnippetUser: {
      id: number
      username: string
    }
    SnippetMeta: {
      id: string
      inserted_at: string
      updated_at: string
      /** @enum {string} */
      type: 'sql'
      /** @enum {string} */
      visibility: 'user' | 'project' | 'org' | 'public'
      name: string
      description: string | null
      project: components['schemas']['SnippetProject']
      owner: components['schemas']['SnippetUser']
      updated_by: components['schemas']['SnippetUser']
    }
    SnippetList: {
      data: components['schemas']['SnippetMeta'][]
    }
    SnippetContent: {
      favorite: boolean
      schema_version: string
      sql: string
    }
    SnippetResponse: {
      id: string
      inserted_at: string
      updated_at: string
      /** @enum {string} */
      type: 'sql'
      /** @enum {string} */
      visibility: 'user' | 'project' | 'org' | 'public'
      name: string
      description: string | null
      project: components['schemas']['SnippetProject']
      owner: components['schemas']['SnippetUser']
      updated_by: components['schemas']['SnippetUser']
      content: components['schemas']['SnippetContent']
    }
    ServiceHealthResponse: {
      /**
       * @description Service name
       * @enum {string}
       */
      name: 'auth' | 'db' | 'pooler' | 'realtime' | 'rest' | 'storage'
      /** @description Whether the service is healthy */
      healthy: boolean
      /**
       * @description Service health status
       * @example COMING_UP
       * @enum {string}
       */
      status: 'COMING_UP' | 'ACTIVE_HEALTHY' | 'UNHEALTHY'
      /** @description Service health check error */
      error?: string
    }
    ResourceWithServicesStatusResponse: {
      /** @description Supabase project instance compute size */
      compute: string
      /** @description Unique ID representing the fly extension */
      id: string
      /**
       * @description Supabase project status
       * @example ACTIVE_HEALTHY
       * @enum {string}
       */
      status:
        | 'REMOVED'
        | 'COMING_UP'
        | 'INACTIVE'
        | 'ACTIVE_HEALTHY'
        | 'ACTIVE_UNHEALTHY'
        | 'UNKNOWN'
        | 'GOING_DOWN'
        | 'INIT_FAILED'
        | 'RESTORING'
        | 'UPGRADING'
        | 'PAUSING'
      /**
       * @description Supabase organization id
       * @example fly_123456789
       */
      supabase_org_id: string
      /** @description Supabase project services health status */
      services: components['schemas']['ServiceHealthResponse'][]
    }
    ResourceProvisioningConfigResponse: {
      /**
       * @description PSQL connection string
       * @example postgresql://postgres:dbpass@db.abcdefghijklmnop.supabase.co:5432/postgres
       */
      DATABASE_URL: string
      /**
       * @description Pooler connection string
       * @example postgres://postgres.abcdefghijklmnop:dbpass@aws-0-us-east-1.pooler.supabase.com:6543/postgres
       */
      DATABASE_POOLER_URL: string
    }
    ResourceProvisioningResponse: {
      /** @description Supabase envs config */
      config: components['schemas']['ResourceProvisioningConfigResponse']
      /**
       * @description The target Fly application for internal traffic
       * @example ext-db-pgshhamktpsgnptvcadw
       */
      fly_app_name: string
      /**
       * @description Supabase project id
       * @example pgshhamktpsgnptvcadw
       */
      id: string
      /** @description Welcome message */
      message: string
      /**
       * @description Supabase organization id
       * @example fly_123456789
       */
      supabase_org_id: string
    }
    FlyOrganization: {
      plan: components['schemas']['BillingPlanId']
      id: string
      supabase_org_id: string
      name: string
    }
    OrganizationExtensionStatus: {
      /** @description Supabase project instance compute size */
      compute: string
      /** @description Unique ID representing the fly extension */
      id: string
      /**
       * @description Supabase project status
       * @example ACTIVE_HEALTHY
       * @enum {string}
       */
      status:
        | 'REMOVED'
        | 'COMING_UP'
        | 'INACTIVE'
        | 'ACTIVE_HEALTHY'
        | 'ACTIVE_UNHEALTHY'
        | 'UNKNOWN'
        | 'GOING_DOWN'
        | 'INIT_FAILED'
        | 'RESTORING'
        | 'UPGRADING'
        | 'PAUSING'
      /**
       * @description Supabase organization id
       * @example fly_123456789
       */
      supabase_org_id: string
    }
    ResourceBillingItem: {
      /**
       * @description Non-Unique identifier of the item
       * @example usage_egress
       */
      itemIdentifier: string
      /**
       * @description Descriptive name of the billing item
       * @example Pro Plan
       */
      itemName: string
      /** @enum {string} */
      type: 'usage' | 'plan' | 'addon' | 'proration' | 'compute_credits'
      /**
       * @description In case of a usage item, the free usage included in the customers plan
       * @example 100
       */
      freeUnitsInPlan?: number
      /**
       * @description In case of a usage item, the total usage
       * @example 100
       */
      usageTotal?: number
      /**
       * @description In case of a usage item, the billable usage amount, free usage has been deducted
       * @example 100
       */
      usageBillable?: number
      /**
       * @description Costs of the item in cents
       * @example 100
       */
      costs: number
    }
    ResourceBillingResponse: {
      /** @description Whether the user is exceeding the included quotas in the plan - only relevant for users on usage-capped plans. */
      exceedsPlanLimits: boolean
      /** @description Whether the user is can have over-usage, which will be billed - this will be false on usage-capped plans. */
      overusageAllowed: boolean
      items: components['schemas']['ResourceBillingItem'][]
    }
  }
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}

export type $defs = Record<string, never>

export type external = Record<string, never>

export interface operations {
  /** Get notifications */
  NotificationsController_getNotificationsV2: {
    parameters: {
      query: {
        status: 'new' | 'seen' | 'archived'
        priority: 'Critical' | 'Warning' | 'Info'
        org_slug?: string[]
        project_ref?: string[]
        offset: number
        limit: number
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['NotificationResponseV2'][]
        }
      }
      /** @description Failed to retrieve notifications */
      500: {
        content: never
      }
    }
  }
  /** Delete notifications */
  NotificationsController_deleteNotifications: {
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateNotificationsBodyV1']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['NotificationResponseV1'][]
        }
      }
      /** @description Failed to delete notifications */
      500: {
        content: never
      }
    }
  }
  /** Update notifications */
  NotificationsController_updateNotificationsV2: {
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateNotificationBodyV2'][]
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['NotificationResponseV2'][]
        }
      }
      /** @description Failed to update notifications */
      500: {
        content: never
      }
    }
  }
  /** Get an aggregated data of interest across all notifications for the user */
  NotificationsController_getNotificationsSummary: {
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['NotificationsSummary']
        }
      }
    }
  }
  /** Archives all notifications */
  NotificationsController_archiveAllNotifications: {
    responses: {
      200: {
        content: never
      }
      /** @description Failed to archive all notifications */
      500: {
        content: never
      }
    }
  }
  /** Reset password for email */
  ResetPasswordController_resetPassword: {
    requestBody: {
      content: {
        'application/json': components['schemas']['ResetPasswordBody']
      }
    }
    responses: {
      201: {
        content: never
      }
    }
  }
  /** Send feedback */
  SendFeedbackController_sendFeedback: {
    requestBody: {
      content: {
        'application/json': components['schemas']['SendFeedbackBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['SendFeedbackResponse']
        }
      }
      /** @description Failed to send feedback */
      500: {
        content: never
      }
    }
  }
  /** Send exit survey to HubSpot */
  SendExitSurveyController_sendExitSurvey: {
    requestBody: {
      content: {
        'application/json': components['schemas']['SendExitSurveyBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['SendFeedbackResponse']
        }
      }
      /** @description Failed to send exit survey */
      500: {
        content: never
      }
    }
  }
  /** Send upgrade survey to survey_responses table */
  SendUpgradeSurveyController_sendUpgradeSurvey: {
    requestBody: {
      content: {
        'application/json': components['schemas']['SendUpgradeSurveyBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['SendFeedbackResponse']
        }
      }
      /** @description Failed to send upgrade survey */
      500: {
        content: never
      }
    }
  }
  /** Send feedback on docs */
  SendDocsFeedbackController_sendDocsFeedback: {
    requestBody: {
      content: {
        'application/json': components['schemas']['SendDocsFeedbackBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['SendFeedbackResponse']
        }
      }
      /** @description Failed to send feedback for docs */
      500: {
        content: never
      }
    }
  }
  /** Sign up with email and password */
  SignUpController_signUp: {
    requestBody: {
      content: {
        'application/json': components['schemas']['SignUpBody']
      }
    }
    responses: {
      201: {
        content: never
      }
    }
  }
  /** Gets project's status */
  StatusController_getStatus: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: never
      }
      /** @description Failed to get project's status */
      500: {
        content: never
      }
    }
  }
  /**
   * Gets resource warnings for all projects accessible by the user
   * @description Only returns the minimal project info
   */
  ProjectsResourceWarningsController_getProjectsResourceWarnings: {
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['ProjectResourceWarningsResponse'][]
        }
      }
    }
  }
  /** Redirects to Fly sso flow */
  TermsOfServiceController_flyTosAccepted: {
    parameters: {
      query: {
        extension_id: string
        organization_id: string
      }
    }
    responses: {
      200: {
        content: never
      }
    }
  }
  /** Gets GoTrue config */
  GoTrueConfigController_getGoTrueConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['GoTrueConfigResponse']
        }
      }
      /** @description Failed to retrieve GoTrue config */
      500: {
        content: never
      }
    }
  }
  /** Updates GoTrue config */
  GoTrueConfigController_updateGoTrueConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateGoTrueConfigBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['GoTrueConfigResponse']
        }
      }
      /** @description Failed to update GoTrue config */
      500: {
        content: never
      }
    }
  }
  /** Sends an invite to the given email */
  InviteController_sendInvite: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UserBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': Record<string, never>
        }
      }
      403: {
        content: never
      }
      /** @description Failed to send an invite to the given email */
      500: {
        content: never
      }
    }
  }
  /** Sends a magic link to the given email */
  MagicLinkController_sendMagicLink: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UserBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': Record<string, never>
        }
      }
      403: {
        content: never
      }
      /** @description Failed to send a magic link to the given email */
      500: {
        content: never
      }
    }
  }
  /** Sends an OTP to the given phone number */
  OtpController_sendOtp: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UserBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': Record<string, never>
        }
      }
      403: {
        content: never
      }
      /** @description Failed to send an OTP to the given phone number */
      500: {
        content: never
      }
    }
  }
  /** Sends a recovery email to the given email */
  RecoverController_sendRecover: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UserBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': Record<string, never>
        }
      }
      403: {
        content: never
      }
      /** @description Failed to send a recovery email to the given email */
      500: {
        content: never
      }
    }
  }
  /** Gets GoTrue template */
  TemplateController_getTemplate: {
    parameters: {
      path: {
        ref: string
        template:
          | 'confirmation'
          | 'email-change'
          | 'invite'
          | 'magic-link'
          | 'recovery'
          | 'reauthentication'
      }
    }
    responses: {
      200: {
        content: {
          'application/json': string
        }
      }
      /** @description Failed to retrieve GoTrue template */
      500: {
        content: never
      }
    }
  }
  /** Gets users */
  UsersController_getUsers: {
    parameters: {
      query: {
        keywords: string
        limit: string
        offset: string
        verified: string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['UsersResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve users */
      500: {
        content: never
      }
    }
  }
  /** Delete user with given ID */
  UsersController_deleteUser: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UserBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': Record<string, never>
        }
      }
      403: {
        content: never
      }
      /** @description Failed to delete user */
      500: {
        content: never
      }
    }
  }
  /** Delete all factors associated to a user */
  FactorsController_deleteFactors: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        id: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': Record<string, never>
        }
      }
      403: {
        content: never
      }
      /** @description Failed to delete factors */
      500: {
        content: never
      }
    }
  }
  /** Gets project backups */
  BackupsController_getBackups: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['BackupsResponse']
        }
      }
      /** @description Failed to get project backups */
      500: {
        content: never
      }
    }
  }
  /** Enable usage of physical backups */
  BackupsController_enablePhysicalBackup: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to enable usage of physical backups */
      500: {
        content: never
      }
    }
  }
  /** Download project backup */
  BackupsController_downloadBackup: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['DownloadBackupBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['DownloadBackupResponse']
        }
      }
      /** @description Failed to download project backup */
      500: {
        content: never
      }
    }
  }
  /** Restore project backup */
  BackupsController_restoreBackup: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RestoreLogicalBackupBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to restore project backup */
      500: {
        content: never
      }
    }
  }
  /** Restore project with a physical backup */
  BackupsController_restorePhysicalBackup: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RestorePhysicalBackupBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to restore project with physical backup */
      500: {
        content: never
      }
    }
  }
  /** Restore project to a previous point in time */
  BackupsController_restorePointInTimeBackup: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['PointInTimeRestoreBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to restore project to a previous point in time */
      500: {
        content: never
      }
    }
  }
  /** Gets hook logs with the given ID */
  HooksController_getHookLogs: {
    parameters: {
      query: {
        id: number
        limit?: string
        offset?: string
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': Record<string, never>
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get hook logs with the given ID */
      500: {
        content: never
      }
    }
  }
  /** Enables Database Webhooks on the project */
  HooksController_enableHooks: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      201: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to enable Database Webhooks on the project */
      500: {
        content: never
      }
    }
  }
  /** Gets the status of owner reassignment */
  OwnerController_getOwnerReassignStatus: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['OwnerResponse']
        }
      }
      /** @description Failed to get status of owner reassignment */
      500: {
        content: never
      }
    }
  }
  /** Reassigns object owner from supabase_admin to temp */
  OwnerController_applyOwnerReassign: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['OwnerResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to reassign owner on the project */
      500: {
        content: never
      }
    }
  }
  /** Rollback object owner from temp to supabase_admin */
  OwnerController_rollbackOwnerReassign: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['OwnerResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to rollback owner on the project */
      500: {
        content: never
      }
    }
  }
  /** Reassigns object owner from temp to postgres */
  OwnerController_finaliseOwnerReassign: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['OwnerResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to reassign owner on the project */
      500: {
        content: never
      }
    }
  }
  /**
   * List all organizations
   * @description Returns a list of organizations that you currently belong to.
   */
  OrganizationsController_getOrganizations: {
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['OrganizationResponseV1'][]
        }
      }
      /** @description Unexpected error listing organizations */
      500: {
        content: never
      }
    }
  }
  /** Creates an organization */
  OrganizationsController_createOrganizationWithTier: {
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateOrganizationBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['OrganizationResponse']
        }
      }
      /** @description Unexpected error creating an organization */
      500: {
        content: never
      }
    }
  }
  /** Gets organization linked to fly organization id */
  OrganizationsController_getOrganizationByFlyOrganizationId: {
    parameters: {
      path: {
        fly_organization_id: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['GetOrganizationByFlyOrganizationIdResponse']
        }
      }
    }
  }
  /** Deletes organization */
  OrganizationSlugController_deleteOrganization: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to delete organization */
      500: {
        content: never
      }
    }
  }
  /** Updates organization */
  OrganizationSlugController_updateOrganization: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateOrganizationBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['OrganizationSlugResponse']
        }
      }
      /** @description Failed to update organization */
      500: {
        content: never
      }
    }
  }
  /** Gets the Stripe customer */
  CustomerController_getCustomer: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['CustomerResponse']
        }
      }
      /** @description Failed to retrieve the Stripe customer */
      500: {
        content: never
      }
    }
  }
  /** Updates the Stripe customer */
  CustomerController_updateCustomer: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['CustomerUpdateResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to update the Stripe customer */
      500: {
        content: never
      }
    }
  }
  /** Gets the given organization's roles */
  RolesController_getAllRolesV2: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['RoleResponseV2']
        }
      }
      /** @description Failed to retrieve the organization's roles */
      500: {
        content: never
      }
    }
  }
  /** Gets the given organization's tax IDs */
  TaxIdsController_getTaxIds: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['TaxIdResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve the organization's tax IDs */
      500: {
        content: never
      }
    }
  }
  /** Creates a tax ID for the given organization */
  TaxIdsController_createTaxId: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateTaxIdBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['CreateTaxIdResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to create the tax ID */
      500: {
        content: never
      }
    }
  }
  /** Delete the tax ID with the given ID */
  TaxIdsController_deleteTaxId: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['DeleteTaxIdBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['DeleteTaxIdResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to delete the tax ID */
      500: {
        content: never
      }
    }
  }
  /** Transfers the organization to the given member */
  TransferController_transferOrganization: {
    requestBody: {
      content: {
        'application/json': components['schemas']['TransferOrganizationBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to update owner */
      500: {
        content: never
      }
    }
  }
  /** Gets daily organization stats */
  OrgDailyStatsController_getDailyStats: {
    parameters: {
      query: {
        metric:
          | 'EGRESS'
          | 'DATABASE_SIZE'
          | 'STORAGE_SIZE'
          | 'MONTHLY_ACTIVE_USERS'
          | 'MONTHLY_ACTIVE_SSO_USERS'
          | 'FUNCTION_INVOCATIONS'
          | 'FUNCTION_COUNT'
          | 'STORAGE_IMAGES_TRANSFORMED'
          | 'REALTIME_MESSAGE_COUNT'
          | 'REALTIME_PEAK_CONNECTIONS'
          | 'COMPUTE_HOURS_BRANCH'
          | 'COMPUTE_HOURS_XS'
          | 'COMPUTE_HOURS_SM'
          | 'COMPUTE_HOURS_MD'
          | 'COMPUTE_HOURS_L'
          | 'COMPUTE_HOURS_XL'
          | 'COMPUTE_HOURS_2XL'
          | 'COMPUTE_HOURS_4XL'
          | 'COMPUTE_HOURS_8XL'
          | 'COMPUTE_HOURS_12XL'
          | 'COMPUTE_HOURS_16XL'
        interval: string
        endDate: string
        startDate: string
        projectRef?: string
      }
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': Record<string, never>
        }
      }
      /** @description Failed to get daily organization stats */
      500: {
        content: never
      }
    }
  }
  /** Gets daily organization stats for compute */
  OrgDailyStatsController_getDailyStatsCompute: {
    parameters: {
      query: {
        endDate: string
        startDate: string
        projectRef?: string
      }
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: never
      }
      /** @description Failed to get daily organization stats for compute */
      500: {
        content: never
      }
    }
  }
  /** Gets usage stats */
  OrgUsageController_getOrgUsage: {
    parameters: {
      query?: {
        project_ref?: string
        start?: string
        end?: string
      }
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['OrgUsageResponse']
        }
      }
      /** @description Failed to get usage stats */
      500: {
        content: never
      }
    }
  }
  /** Get standard security questionnaire URL */
  OrgDocumentsController_getStandardSecurityQuestionnaireUrl: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['OrgDocumentUrlResponse']
        }
      }
    }
  }
  /** Get SOC2 Type 2 report URL */
  OrgDocumentsController_getSoc2Type2ReportUrl: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['OrgDocumentUrlResponse']
        }
      }
    }
  }
  /** Gets an organization's audit logs */
  OrgAuditLogsController_getAuditLogs: {
    parameters: {
      query?: {
        /** @description Start timestamp */
        iso_timestamp_start?: string
        /** @description End timestamp */
        iso_timestamp_end?: string
      }
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['AuditLogsResponse']
        }
      }
      /** @description Failed to get an organization's audit logs */
      500: {
        content: never
      }
    }
  }
  /** Gets invited users */
  InviteController_getInvitedUsers: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['Invite'][]
        }
      }
      /** @description Failed to get invited users */
      500: {
        content: never
      }
    }
  }
  /** Invites user */
  InviteController_inviteUser: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['InviteUserBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['SendInviteResponse']
        }
      }
      /** @description Failed to invite user */
      500: {
        content: never
      }
    }
  }
  /** Delete invited user */
  InviteController_deleteInvitedUser: {
    parameters: {
      query: {
        invited_id: number
      }
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: never
      }
      /** @description Failed to delete invited user */
      500: {
        content: never
      }
    }
  }
  /** Gets invite */
  JoinController_getInvite: {
    parameters: {
      query: {
        token: string
      }
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['InviteResponse']
        }
      }
      /** @description Failed to get invite */
      500: {
        content: never
      }
    }
  }
  /** Joins organization */
  JoinController_joinOrganization: {
    parameters: {
      query: {
        token: string
      }
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['JoinResponse']
        }
      }
      /** @description Failed to join organization */
      500: {
        content: never
      }
    }
  }
  /** Gets organization's members */
  MembersController_getMembers: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['Member'][]
        }
      }
      /** @description Failed to retrieve organization's members */
      500: {
        content: never
      }
    }
  }
  /** Removes organization member */
  MembersController_deleteMember: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
        gotrue_id: string
      }
    }
    responses: {
      200: {
        content: never
      }
      /** @description Failed to remove organization member */
      500: {
        content: never
      }
    }
  }
  /** Updates organization member role */
  MembersController_updateMemberRoleV2: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
        gotrue_id: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateMemberRoleBodyV2']
      }
    }
    responses: {
      200: {
        content: never
      }
      /** @description Failed to update organization member role */
      500: {
        content: never
      }
    }
  }
  /** Gets organization members who have reached their free project limit */
  ReachedFreeProjectLimitController_getMembersWhoReachedFreeProjectLimit: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['MemberWithFreeProjectLimit'][]
        }
      }
      /** @description Failed to retrieve organization members who have reached their free project limit */
      500: {
        content: never
      }
    }
  }
  /** Gets organization invitations */
  InvitationsController_getAllInvitations: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['InvitationResponse']
        }
      }
      /** @description Failed to get organization invitations */
      500: {
        content: never
      }
    }
  }
  /** Creates organization invitation */
  InvitationsController_createInvitation: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateInvitationBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to create organization invitation */
      500: {
        content: never
      }
    }
  }
  /** Gets organization invitation by token */
  InvitationsController_getInvitationByToken: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
        token: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['InvitationByTokenResponse']
        }
      }
      /** @description Failed to get organization invitation by token */
      500: {
        content: never
      }
    }
  }
  /** Accepts organization invitation by token */
  InvitationsController_acceptInvitationByToken: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
        token: string
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to accept organization invitation by token */
      500: {
        content: never
      }
    }
  }
  /** Deletes organization invitation with given id */
  InvitationsController_deleteInvitation: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
        id: number
      }
    }
    responses: {
      200: {
        content: never
      }
      /** @description Failed to delete organization invitation with given id */
      500: {
        content: never
      }
    }
  }
  /** Gets Stripe payment methods for the given organization */
  PaymentsController_getPaymentMethods: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PaymentsResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get Stripe payment methods */
      500: {
        content: never
      }
    }
  }
  /** Detach Stripe payment method with the given card ID */
  PaymentsController_detachPaymentMethod: {
    requestBody: {
      content: {
        'application/json': components['schemas']['DetachPaymentMethodBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['DetachPaymentResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to detach Stripe payment method */
      500: {
        content: never
      }
    }
  }
  /** Sets up a payment method */
  SetupIntentOrgController_setUpPaymentMethod: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['HCaptchaBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['SetupIntentResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to set up a payment method */
      500: {
        content: never
      }
    }
  }
  /** Gets the current subscription */
  SubscriptionController_getSubscription: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['GetSubscriptionResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve subscription */
      500: {
        content: never
      }
    }
  }
  /** Updates subscription */
  SubscriptionController_updateSubscription: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateSubscriptionBody']
      }
    }
    responses: {
      200: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to update subscription change */
      500: {
        content: never
      }
    }
  }
  /** Preview subscription changes */
  SubscriptionController_previewSubscriptionChange: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateSubscriptionBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to preview subscription changes */
      500: {
        content: never
      }
    }
  }
  /** Deletes any upcoming subscription schedule */
  SubscriptionController_deleteSubscriptionSchedule: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to update subscription change */
      500: {
        content: never
      }
    }
  }
  /** Gets subscription plans */
  OrgPlansController_getAvailablePlans: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PlansResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get subscription plans */
      500: {
        content: never
      }
    }
  }
  /** Gets the upcoming invoice */
  OrgInvoicesController_getUpcomingInvoice: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['UpcomingInvoice']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve upcoming invoice */
      500: {
        content: never
      }
    }
  }
  /** Retrieve column privileges */
  ColumnPrivilegesController_getColumnPrivileges: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresColumnPrivileges'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve column privileges */
      500: {
        content: never
      }
    }
  }
  /** Grant column privileges */
  ColumnPrivilegesController_grantColumnPrivileges: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['GrantColumnPrivilegesBody'][]
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['PostgresColumnPrivileges'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to grant column privileges */
      500: {
        content: never
      }
    }
  }
  /** Revoke column privileges */
  ColumnPrivilegesController_revokeColumnPrivileges: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RevokeColumnPrivilegesBody'][]
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresColumnPrivileges'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to revoke column privileges */
      500: {
        content: never
      }
    }
  }
  /** Gets project pg.columns */
  ColumnsController_getColumns: {
    parameters: {
      query: {
        included_schemas: string
        excluded_schemas: string
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresColumn'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get pg.columns */
      500: {
        content: never
      }
    }
  }
  /** Creates project pg.column */
  ColumnsController_createColumn: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateColumnBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['PostgresColumn']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to create pg.column */
      500: {
        content: never
      }
    }
  }
  /** Deletes project pg.column with the given ID */
  ColumnsController_deleteColumn: {
    parameters: {
      query: {
        /** @description Column ID */
        id: string
        cascade?: string
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresColumn']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to delete pg.column with the given ID */
      500: {
        content: never
      }
    }
  }
  /** Updates project pg.column with the given ID */
  ColumnsController_updateColumn: {
    parameters: {
      query: {
        /** @description Column ID */
        id: string
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateColumnBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresColumn']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to update pg.column with the given ID */
      500: {
        content: never
      }
    }
  }
  /** Gets project pg.extensions */
  ExtensionsController_getExtensions: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresExtension'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get pg.extensions */
      500: {
        content: never
      }
    }
  }
  /** Creates project pg.extension */
  ExtensionsController_createExtension: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateExtensionBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['PostgresExtension']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to create pg.extension */
      500: {
        content: never
      }
    }
  }
  /** Deletes project pg.extension with the given ID */
  ExtensionsController_deleteExtension: {
    parameters: {
      query: {
        /** @description Extension ID */
        id: string
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresExtension']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to delete pg.extension with the given ID */
      500: {
        content: never
      }
    }
  }
  /** Retrieve database foreign tables */
  ForeignTablesController_getForeignTables: {
    parameters: {
      query: {
        id: string
        limit: string
        offset: string
        include_columns: string
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresForeignTable'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve database foreign tables */
      500: {
        content: never
      }
    }
  }
  /**
   * List all functions
   * @description Returns all functions you've previously added to the specified project.
   */
  FunctionsController_getFunctions: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['FunctionResponse'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve project's functions */
      500: {
        content: never
      }
    }
  }
  /**
   * Create a function
   * @description Creates a function and adds it to the specified project.
   */
  FunctionsController_createFunction: {
    parameters: {
      query?: {
        slug?: string
        name?: string
        verify_jwt?: boolean
        import_map?: boolean
        entrypoint_path?: string
        import_map_path?: string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1CreateFunctionBody']
        'application/vnd.denoland.eszip': components['schemas']['V1CreateFunctionBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['FunctionResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to create project's function */
      500: {
        content: never
      }
    }
  }
  /** Deletes project pg.function with the given ID */
  FunctionsController_deleteFunction: {
    parameters: {
      query: {
        /** @description Function ID */
        id: number
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresFunction']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to delete pg.function with the given ID */
      500: {
        content: never
      }
    }
  }
  /** Updates project pg.function with the given ID */
  FunctionsController_updateFunction: {
    parameters: {
      query: {
        /** @description Function ID */
        id: number
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateFunctionBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresFunction']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to update pg.function with the given ID */
      500: {
        content: never
      }
    }
  }
  /** Retrieve database materialized views */
  MaterializedViewsController_getMaterializedViews: {
    parameters: {
      query: {
        id: string
        included_schemas: string
        excluded_schemas: string
        limit: string
        offset: string
        include_columns: string
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresMaterializedView'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve database materialized views */
      500: {
        content: never
      }
    }
  }
  /** Gets project pg.policies */
  PoliciesController_getPolicies: {
    parameters: {
      query: {
        included_schemas: string
        excluded_schemas: string
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresPolicy'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get pg.policies */
      500: {
        content: never
      }
    }
  }
  /** Creates project pg.policy */
  PoliciesController_createPolicy: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreatePolicyBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['PostgresPolicy']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to create pg.policy */
      500: {
        content: never
      }
    }
  }
  /** Deletes project pg.policy with the given ID */
  PoliciesController_deletePolicy: {
    parameters: {
      query: {
        /** @description Policy ID */
        id: number
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresPolicy']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to delete pg.policy with the given ID */
      500: {
        content: never
      }
    }
  }
  /** Updates project pg.policy with the given ID */
  PoliciesController_updatePolicy: {
    parameters: {
      query: {
        /** @description Policy ID */
        id: number
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdatePolicyBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresPolicy']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to update pg.policy with the given ID */
      500: {
        content: never
      }
    }
  }
  /** Gets project pg.publications */
  PublicationsController_getPublications: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresPublication'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get pg.publications */
      500: {
        content: never
      }
    }
  }
  /** Gets project pg.publications */
  PublicationsController_createPublication: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreatePublicationBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['PostgresPublication']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to create pg.publication */
      500: {
        content: never
      }
    }
  }
  /** Deletes project pg.publication with the given ID */
  PublicationsController_deletePublication: {
    parameters: {
      query: {
        /** @description Publication ID */
        id: number
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresPublication']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to delete pg.publication with the given ID */
      500: {
        content: never
      }
    }
  }
  /** Updates project pg.publication with the given ID */
  PublicationsController_updatePublication: {
    parameters: {
      query: {
        /** @description Publication ID */
        id: number
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdatePublicationBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresPublication']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to update pg.publication with the given ID */
      500: {
        content: never
      }
    }
  }
  /** Lists project's warehouse queries from logflare */
  QueryController_runQuery: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to fetch warehouse endpoints */
      500: {
        content: never
      }
    }
  }
  /** Format sql query */
  QueryController_formatQuery: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['FormatQueryBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': string
        }
      }
      /** @description Failed to format sql query */
      500: {
        content: never
      }
    }
  }
  /** Validate sql query */
  QueryController_validateQuery: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ValidateQueryBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['ValidateQueryResponse']
        }
      }
      /** @description Failed to validate sql query */
      500: {
        content: never
      }
    }
  }
  /** Gets project pg.roles */
  RolesController_getRoles: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresRole'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get pg.roles */
      500: {
        content: never
      }
    }
  }
  /** Creates project pg.role */
  RolesController_createRole: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateRoleBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['PostgresRole']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to create pg.role */
      500: {
        content: never
      }
    }
  }
  /** Deletes project pg.role with the given ID */
  RolesController_deleteRole: {
    parameters: {
      query: {
        /** @description Role ID */
        id: string
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresRole']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to delete pg.role with the given ID */
      500: {
        content: never
      }
    }
  }
  /** Updates project pg.role with the given ID */
  RolesController_updateRole: {
    parameters: {
      query: {
        /** @description Role ID */
        id: number
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateRoleBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresRole']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to update pg.role with the given ID */
      500: {
        content: never
      }
    }
  }
  /** Gets project pg.schemas */
  SchemasController_getSchemas: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresSchema'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get pg.schemas */
      500: {
        content: never
      }
    }
  }
  /** Creates project pg.schema */
  SchemasController_createSchema: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateSchemaBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['PostgresSchema']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to create pg.schema */
      500: {
        content: never
      }
    }
  }
  /** Deletes project pg.schema with the given ID */
  SchemasController_deleteSchema: {
    parameters: {
      query: {
        /** @description Schema ID */
        id: number
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresSchema']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to delete pg.schema with the given ID */
      500: {
        content: never
      }
    }
  }
  /** Updates project pg.schema with the given ID */
  SchemasController_updateSchema: {
    parameters: {
      query: {
        /** @description Schema ID */
        id: number
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateSchemaBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresSchema']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to update pg.schema with the given ID */
      500: {
        content: never
      }
    }
  }
  /** Searches project pg.tables. Return maximum 50 results. */
  SearchController_searchTables: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SearchTableBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['Table'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to search pg.tables */
      500: {
        content: never
      }
    }
  }
  /** Searches project pg.columns. Return maximum 50 results. */
  SearchController_searchColumns: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SearchColumnBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['Column'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to search pg.columns */
      500: {
        content: never
      }
    }
  }
  /** Retrieve table privileges */
  TablePrivilegesController_getTablePrivileges: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresTablePrivileges'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve table privileges */
      500: {
        content: never
      }
    }
  }
  /** Grant table privileges */
  TablePrivilegesController_grantTablePrivileges: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['GrantTablePrivilegesBody'][]
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['PostgresTablePrivileges'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to grant table privileges */
      500: {
        content: never
      }
    }
  }
  /** Revoke table privileges */
  TablePrivilegesController_revokeTablePrivileges: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RevokeTablePrivilegesBody'][]
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresTablePrivileges'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to revoke table privileges */
      500: {
        content: never
      }
    }
  }
  /** Gets project pg.tables or pg.table with the given ID */
  TablesController_getTables: {
    parameters: {
      query: {
        /** @description Table ID */
        id?: string
        include_system_schemas: string
        included_schemas: string
        excluded_schemas: string
        limit: string
        offset: string
        include_columns: string
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresTable'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get pg.tables or pg.table with the given ID */
      500: {
        content: never
      }
    }
  }
  /** Creates project pg.table */
  TablesController_createTable: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateTableBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['PostgresTable']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to create pg.table */
      500: {
        content: never
      }
    }
  }
  /** Deletes project pg.table with the given ID */
  TablesController_deleteTable: {
    parameters: {
      query: {
        /** @description Table ID */
        id: number
        cascade: boolean
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresTable']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to delete pg.table with the given ID */
      500: {
        content: never
      }
    }
  }
  /** Updates project pg.table with the given ID */
  TablesController_updateTable: {
    parameters: {
      query: {
        /** @description Table ID */
        id: number
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateTableBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresTable']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to update pg.table with the given ID */
      500: {
        content: never
      }
    }
  }
  /** Gets project pg.triggers */
  TriggersController_getTriggers: {
    parameters: {
      query: {
        included_schemas: string
        excluded_schemas: string
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresTrigger'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get pg.triggers */
      500: {
        content: never
      }
    }
  }
  /** Creates project pg.trigger */
  TriggersController_createTrigger: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateTriggerBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['PostgresTrigger']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to create pg.trigger */
      500: {
        content: never
      }
    }
  }
  /** Deletes project pg.trigger with the given ID */
  TriggersController_deleteTrigger: {
    parameters: {
      query: {
        /** @description Trigger ID */
        id: number
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresTrigger']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to delete pg.trigger with the given ID */
      500: {
        content: never
      }
    }
  }
  /** Updates project pg.trigger with the given ID */
  TriggersController_updateTrigger: {
    parameters: {
      query: {
        /** @description Trigger ID */
        id: number
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateTriggerBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresTrigger']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to update pg.trigger with the given ID */
      500: {
        content: never
      }
    }
  }
  /** Gets project pg.types */
  TypesController_getTypes: {
    parameters: {
      query: {
        included_schemas: string
        excluded_schemas: string
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresType'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get pg.types */
      500: {
        content: never
      }
    }
  }
  /** Retrieve database views */
  ViewsController_getViews: {
    parameters: {
      query: {
        id: string
        include_system_schemas: string
        included_schemas: string
        excluded_schemas: string
        limit: string
        offset: string
        include_columns: string
      }
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresView'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve database views */
      500: {
        content: never
      }
    }
  }
  /** Gets the user's access tokens */
  AccessTokensController_getAccessTokens: {
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['AccessToken'][]
        }
      }
      /** @description Failed to get user's access tokens */
      500: {
        content: never
      }
    }
  }
  /** Creates a new access token */
  AccessTokensController_createAccessToken: {
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateAccessTokenBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['CreateAccessTokenResponse']
        }
      }
      /** @description Failed to create access token */
      500: {
        content: never
      }
    }
  }
  /** Gets the access token with the given ID */
  AccessTokensController_getAccessToken: {
    parameters: {
      path: {
        /** @description Access token ID */
        id: number
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['AccessToken']
        }
      }
      /** @description Failed to get access token */
      500: {
        content: never
      }
    }
  }
  /** Deletes the access token with the given ID */
  AccessTokensController_deleteAccessToken: {
    parameters: {
      path: {
        /** @description Access token ID */
        id: number
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['AccessToken']
        }
      }
      /** @description Failed to delete access token */
      500: {
        content: never
      }
    }
  }
  /** Gets a user's audit logs */
  UserAuditLogsController_getAuditLogs: {
    parameters: {
      query?: {
        /** @description Start timestamp */
        iso_timestamp_start?: string
        /** @description End timestamp */
        iso_timestamp_end?: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['AuditLogsResponse']
        }
      }
      /** @description Failed to get a user's audit logs */
      500: {
        content: never
      }
    }
  }
  /** Search profiles by username, email with the given keywords */
  SearchProfileController_searchProfile: {
    requestBody: {
      content: {
        'application/json': components['schemas']['SearchProfileBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['Profile'][]
        }
      }
      /** @description Failed to search profiles with the given keywords */
      500: {
        content: never
      }
    }
  }
  /** Gets the user's subscription statistics */
  SubscriptionsController_getSubscriptionsStatistics: {
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['SubscriptionStatisticsResponse']
        }
      }
      /** @description Failed to retrieve user's subscription statistics */
      500: {
        content: never
      }
    }
  }
  /** Check password strength */
  PasswordCheckController_checkPassword: {
    requestBody: {
      content: {
        'application/json': components['schemas']['PasswordCheckBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['PasswordCheckResponse']
        }
      }
      /** @description Failed to check password strength */
      500: {
        content: never
      }
    }
  }
  /** Gets all the user's permissions */
  PermissionsController_getPermissions: {
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['Permission'][]
        }
      }
      /** @description Failed to retrieve permissions */
      500: {
        content: never
      }
    }
  }
  /** Gets the user's profile */
  ProfileController_getProfile: {
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['ProfileResponse']
        }
      }
      /** @description Failed to retrieve user's profile */
      500: {
        content: never
      }
    }
  }
  /** Creates user's profile */
  ProfileController_createProfile: {
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['ProfileResponse']
        }
      }
      /** @description Failed to create user's profile */
      500: {
        content: never
      }
    }
  }
  /** Deletes user's profile */
  ProfileController_deleteProfile: {
    responses: {
      200: {
        content: never
      }
      /** @description Forbidden action */
      403: {
        content: never
      }
      /** @description Failed to delete user's profile */
      500: {
        content: never
      }
    }
  }
  /** Updates user's profile */
  ProfileController_updateProfile: {
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateProfileBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['ProfileResponse']
        }
      }
      /** @description Failed to update user's profile */
      500: {
        content: never
      }
    }
  }
  /**
   * Gets all projects that belong to the authenticated user
   * @description Only returns the minimal project info
   */
  ProjectsController_getProjects: {
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['ProjectInfo'][]
        }
      }
    }
  }
  /** Creates a project */
  ProjectsController_createProject: {
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateProjectBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['CreateProjectResponse']
        }
      }
    }
  }
  /** Gets project linked to fly extension id */
  ProjectsController_getProjectByFlyExtensionId: {
    parameters: {
      path: {
        fly_extension_id: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['GetProjectByFlyExtensionIdResponse']
        }
      }
    }
  }
  /** Gets project's content */
  ContentController_getContent: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['GetUserContentResponse']
        }
      }
      /** @description Failed to retrieve project's content */
      500: {
        content: never
      }
    }
  }
  /** Updates project's content */
  ContentController_updateWholeContent: {
    requestBody: {
      content: {
        'application/json': components['schemas']['UpsertContentParams']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['UserContentObject']
        }
      }
      /** @description Failed to update project's content */
      500: {
        content: never
      }
    }
  }
  /** Creates project's content */
  ContentController_createContent: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateContentParams']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['UserContentObject'][]
        }
      }
      /** @description Failed to create project's content */
      500: {
        content: never
      }
    }
  }
  /** Deletes project's contents */
  ContentController_deleteContents: {
    parameters: {
      query: {
        ids: string[]
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['BulkDeleteUserContentResponse'][]
        }
      }
      /** @description Failed to delete project's contents */
      500: {
        content: never
      }
    }
  }
  /** Updates project's content */
  ContentController_updateContent: {
    parameters: {
      query: {
        id: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateContentParams']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['UserContentObject'][]
        }
      }
      /** @description Failed to update project's content */
      500: {
        content: never
      }
    }
  }
  /** Gets daily project stats */
  DailyStatsController_getDailyStats: {
    parameters: {
      query: {
        attribute: string
        interval: string
        endDate: string
        startDate: string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': Record<string, never>
        }
      }
      /** @description Failed to get daily project stats */
      500: {
        content: never
      }
    }
  }
  /** Gets non-removed databases of a specified project */
  DatabasesController_getDatabases: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['DatabaseDetailResponse'][]
        }
      }
    }
  }
  /** Gets statuses of databases within a project */
  DatabasesStatusesController_getStatus: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['DatabaseStatusResponse'][]
        }
      }
      /** @description Failed to get statuses of databases of a project */
      500: {
        content: never
      }
    }
  }
  /** Updates the database password */
  DbPasswordController_updatePassword: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdatePasswordBody']
      }
    }
    responses: {
      200: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to update database password */
      500: {
        content: never
      }
    }
  }
  /** Gets project health check */
  HealthCheckController_projectHealthCheck: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to get project health check */
      500: {
        content: never
      }
    }
  }
  /** Gets non-removed databases of a specified project */
  LoadBalancersController_getLoadBalancers: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['LoadBalancerDetailResponse'][]
        }
      }
    }
  }
  /** Gets project OpenApi */
  ApiController_projectOpenApi: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': Record<string, never>
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get project OpenApi */
      500: {
        content: never
      }
    }
  }
  /** Queries project Graphql */
  ApiController_projectGraphql: {
    parameters: {
      header: {
        'x-graphql-authorization': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['Buffer']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': Record<string, never>
        }
      }
      403: {
        content: never
      }
      /** @description Failed to query project Graphql */
      500: {
        content: never
      }
    }
  }
  /** Gets project's usage metrics */
  InfraMonitoringController_getUsageMetrics: {
    parameters: {
      query: {
        attribute:
          | 'cpu_usage'
          | 'max_cpu_usage'
          | 'avg_cpu_usage'
          | 'disk_io_budget'
          | 'disk_io_consumption'
          | 'ram_usage'
          | 'swap_usage'
        startDate: string
        endDate: string
        interval?: '1m' | '5m' | '10m' | '30m' | '1h' | '1d'
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': Record<string, never>
        }
      }
      /** @description Failed to get project's usage metrics */
      500: {
        content: never
      }
    }
  }
  /** Pauses the project */
  PauseController_pauseProject: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to pause the project */
      500: {
        content: never
      }
    }
  }
  /** Resize database disk */
  ResizeController_resizeDatabase: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ResizeBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to resize database disk */
      500: {
        content: never
      }
    }
  }
  /** Restarts project */
  RestartController_restartProject: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      201: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to restart project */
      500: {
        content: never
      }
    }
  }
  /** Gets a specific project that belongs to the authenticated user */
  ProjectsRefController_getProject: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['ProjectDetailResponse']
        }
      }
    }
  }
  /** Deletes the given project */
  ProjectsRefController_deleteProject: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['V1ProjectRefResponse']
        }
      }
      403: {
        content: never
      }
    }
  }
  /** Updates the given project */
  ProjectsRefController_updateProject: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateProjectBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['ProjectRefResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to update project */
      500: {
        content: never
      }
    }
  }
  /** Restores project */
  RestoreController_restoreProject: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['RestoreProjectInfo']
        }
      }
      /** @description Failed to restore project */
      500: {
        content: never
      }
    }
  }
  /** Restarts given services */
  RestartServicesController_restartServices: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RestartServicesBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to restart given services */
      500: {
        content: never
      }
    }
  }
  /** Gets project's settings */
  SettingsController_getProjectApi: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['ProjectSettingsResponse']
        }
      }
      /** @description Failed to retrieve project's settings */
      500: {
        content: never
      }
    }
  }
  /**
   * Updates the project
   * @deprecated
   * @description Replaced by PATCH /platform/projects/:ref
   */
  UpdateController_updateProject: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateProjectBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to update project */
      500: {
        content: never
      }
    }
  }
  /** Previews transfering a project to a different organizations, shows eligibility and impact. */
  ProjectTransferController_previewTransfer: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['TransferProjectBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['PreviewProjectTransferResponse']
        }
      }
      403: {
        content: never
      }
    }
  }
  /** Transfers a project to a different organization. */
  ProjectTransferController_transferProject: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['TransferProjectBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      403: {
        content: never
      }
    }
  }
  /** Gets a project's function invocation statistics */
  FunctionInvocationLogsController_getStatus: {
    parameters: {
      query: {
        interval: '5min' | '15min' | '1hr' | '1day' | '7day'
        function_id: string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['AnalyticsResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get project's function invocation statistics */
      500: {
        content: never
      }
    }
  }
  /** Gets a project's function request statistics */
  FunctionRequestLogsController_getStatus: {
    parameters: {
      query: {
        interval: '5min' | '15min' | '1hr' | '1day' | '7day'
        function_id: string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['AnalyticsResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get project's function request statistics */
      500: {
        content: never
      }
    }
  }
  /** Gets a project's function resource usage */
  FunctionResourceLogsController_getStatus: {
    parameters: {
      query: {
        interval: '5min' | '15min' | '1hr' | '1day' | '7day'
        function_id: string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['AnalyticsResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get project's function resource usage */
      500: {
        content: never
      }
    }
  }
  /** Gets project's logs */
  LogsController_getApiPaths: {
    parameters: {
      query: {
        sql: string
        project: string
        iso_timestamp_start: string
        iso_timestamp_end: string
        timestamp_start: string
        timestamp_end: string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['AnalyticsResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get project's logs */
      500: {
        content: never
      }
    }
  }
  /** Gets project's usage api counts */
  UsageApiController_getApiCounts: {
    parameters: {
      query: {
        interval: 'minutely' | 'hourly' | 'daily'
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['AnalyticsResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get project's usage api counts */
      500: {
        content: never
      }
    }
  }
  /** Gets project's usage api requests count */
  UsageApiController_getApiRequestsCount: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['AnalyticsResponse']
        }
      }
      /** @description Failed to get project's usage api requests count */
      500: {
        content: never
      }
    }
  }
  /** Gets project's warehouse tenant from logflare */
  TenantController_getTenant: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['LFUser']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to fetch or provision warehouse tenant */
      500: {
        content: never
      }
    }
  }
  /** Lists project's warehouse collections from logflare */
  CollectionController_listCollections: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['LFSource'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to fetch warehouse collections */
      500: {
        content: never
      }
    }
  }
  /** Create a warehouse collection */
  CollectionController_createCollection: {
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['LFSource']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to create warehouse collection */
      500: {
        content: never
      }
    }
  }
  /** Get a warehouse collection */
  CollectionController_getCollection: {
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['LFSource']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to fetch warehouse collection */
      500: {
        content: never
      }
    }
  }
  /** Delete a warehouse collection */
  CollectionController_deleteCollection: {
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['LFSource']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to delete warehouse collection */
      500: {
        content: never
      }
    }
  }
  /** Update a warehouse collection */
  CollectionController_updateCollection: {
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['LFSource']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to update warehouse collection */
      500: {
        content: never
      }
    }
  }
  /** Lists project's warehouse access tokens from logflare */
  AccessTokenController_listAccessTokens: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['LFSource'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to fetch warehouse access tokens */
      500: {
        content: never
      }
    }
  }
  /** Create a warehouse access token */
  AccessTokenController_createAccessToken: {
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['LFSource']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to create warehouse access token */
      500: {
        content: never
      }
    }
  }
  /** Delete a warehouse access token */
  AccessTokenController_deleteAccessToken: {
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['LFSource']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to delete warehouse access token */
      500: {
        content: never
      }
    }
  }
  /** Lists project's warehouse endpoints from logflare */
  EndpointController_listEndpoints: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['LFEndpoint'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to fetch warehouse endpoints */
      500: {
        content: never
      }
    }
  }
  /** Create a warehouse endpoint */
  EndpointController_createEndpoint: {
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['LFEndpoint']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to create warehouse endpoint */
      500: {
        content: never
      }
    }
  }
  /** Update a warehouse endpoint */
  EndpointController_updateEndpoint: {
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['LFEndpoint']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to update warehouse endpoint */
      500: {
        content: never
      }
    }
  }
  /** Delete a warehouse endpoint */
  EndpointController_deleteEndpoint: {
    responses: {
      200: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to delete warehouse endpoint */
      500: {
        content: never
      }
    }
  }
  /** Gets project's pgbouncer config */
  PgbouncerConfigController_getPgbouncerConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PgbouncerConfigResponse']
        }
      }
      /** @description Failed to retrieve project's pgbouncer config */
      500: {
        content: never
      }
    }
  }
  /** Updates project's pgbouncer config */
  PgbouncerConfigController_updatePgbouncerConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdatePgbouncerConfigBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['UpdatePoolingConfigResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to update project's pgbouncer config */
      500: {
        content: never
      }
    }
  }
  /** Gets project's pgbouncer status */
  PgbouncerConfigController_getPgbouncerStatus: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PgbouncerStatusResponse']
        }
      }
      /** @description Failed to retrieve project's pgbouncer status */
      500: {
        content: never
      }
    }
  }
  /** Gets project's postgrest config */
  PostgrestConfigController_getPostgRESTConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgrestConfigWithJWTSecretResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve project's postgrest config */
      500: {
        content: never
      }
    }
  }
  /** Updates project's postgrest config */
  PostgrestConfigController_updatePostgRESTConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdatePostgrestConfigBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['V1PostgrestConfigResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to update project's postgrest config */
      500: {
        content: never
      }
    }
  }
  /** Gets project's Postgres config */
  PostgresConfigController_getConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresConfigResponse']
        }
      }
      /** @description Failed to retrieve project's Postgres config */
      500: {
        content: never
      }
    }
  }
  /** Updates project's Postgres config */
  PostgresConfigController_updateConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdatePostgresConfigBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresConfigResponse']
        }
      }
      /** @description Failed to update project's Postgres config */
      500: {
        content: never
      }
    }
  }
  /** Updates project's secrets config */
  SecretsConfigController_updateConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateSecretsConfigBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['UpdateSecretsResponse']
        }
      }
      /** @description Failed to update project's secrets config */
      500: {
        content: never
      }
    }
  }
  /** Gets project's storage config */
  StorageConfigController_getConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['StorageConfigResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve project's storage config */
      500: {
        content: never
      }
    }
  }
  /** Updates project's storage config */
  StorageConfigController_updateConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateStorageConfigBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['UpdateStorageConfigResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to update project's storage config */
      500: {
        content: never
      }
    }
  }
  /** Gets project's supavisor config */
  SupavisorConfigController_getSupavisorConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['SupavisorConfigResponse'][]
        }
      }
      /** @description Failed to retrieve project's supavisor config */
      500: {
        content: never
      }
    }
  }
  /** Updates project's supavisor config */
  SupavisorConfigController_updateSupavisorConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateSupavisorConfigBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['UpdateSupavisorConfigResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to update project's supavisor config */
      500: {
        content: never
      }
    }
  }
  /** Gets project addons */
  ProjectAddonController_getProjectAddons: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['ProjectAddonsResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get project addons */
      500: {
        content: never
      }
    }
  }
  /** Updates project addon */
  ProjectAddonController_updateAddon: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateAddonBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to update project addon */
      500: {
        content: never
      }
    }
  }
  /** Removes project addon */
  ProjectAddonController_removeAddon: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        addon_variant: components['schemas']['AddonVariantId']
      }
    }
    responses: {
      200: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to remove project addon */
      500: {
        content: never
      }
    }
  }
  /**
   * Gets project's api info
   * @deprecated
   */
  ApiController_getProjectApi: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['ApiResponse']
        }
      }
      /** @description Failed to retrieve project's api info */
      500: {
        content: never
      }
    }
  }
  /** Gets the last JWT secret update status */
  JwtSecretUpdateStatusController_getJwtSecretUpdateStatus: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['JwtSecretUpdateStatus']
        }
      }
      /** @description Failed to retrieve JWT secret update status */
      500: {
        content: never
      }
    }
  }
  /** Gets bucket */
  StorageBucketIdController_getBucket: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        /** @description Storage bucket id */
        id: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['StorageBucket']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get bucket */
      500: {
        content: never
      }
    }
  }
  /** Deletes bucket */
  StorageBucketIdController_deleteBucket: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        /** @description Storage bucket id */
        id: string
      }
    }
    responses: {
      200: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to delete bucket */
      500: {
        content: never
      }
    }
  }
  /** Updates bucket */
  StorageBucketIdController_updateBucket: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        /** @description Storage bucket id */
        id: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateStorageBucketBody']
      }
    }
    responses: {
      200: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to update bucket */
      500: {
        content: never
      }
    }
  }
  /** Removes all objects inside a single bucket. */
  StorageBucketIdController_emptyBucket: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        /** @description Storage bucket id */
        id: string
      }
    }
    responses: {
      201: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to empty bucket */
      500: {
        content: never
      }
    }
  }
  /** Gets list of buckets */
  StorageBucketsController_getBuckets: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['StorageBucket'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get list of buckets */
      500: {
        content: never
      }
    }
  }
  /** Create bucket */
  StorageBucketsController_createBucket: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateStorageBucketBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': string
        }
      }
      403: {
        content: never
      }
      /** @description Failed to create bucket */
      500: {
        content: never
      }
    }
  }
  /** Gets list of objects with the given bucket */
  StorageObjectsController_getObjects: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        /** @description Storage bucket id */
        id: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['GetObjectsBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['StorageObject'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get list of objects with the given bucket */
      500: {
        content: never
      }
    }
  }
  /** Creates URL for an asset in a public bucket */
  StorageObjectsController_createPublicUrl: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        /** @description Storage bucket id */
        id: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['GetPublicUrlBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['PublicUrlResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to create public URL */
      500: {
        content: never
      }
    }
  }
  /** Downloads a file from a private bucket */
  StorageObjectsController_download: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        /** @description Storage bucket id */
        id: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['DownloadObjectBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to download the file */
      500: {
        content: never
      }
    }
  }
  /** Creates a signed URL */
  StorageObjectsController_createSignedUrl: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        /** @description Storage bucket id */
        id: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['GetSignedUrlBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['SignedUrlResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to create a signed URL */
      500: {
        content: never
      }
    }
  }
  /** Gets multiple signed URLs */
  StorageObjectsController_createSignedUrls: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        /** @description Storage bucket id */
        id: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['GetSignedUrlsBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['SignedUrlsResponse'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get multiple signed URLs */
      500: {
        content: never
      }
    }
  }
  /** Copys object */
  StorageObjectsController_copyObject: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        /** @description Storage bucket id */
        id: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CopyObjectBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['CopyObjectResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to copy object */
      500: {
        content: never
      }
    }
  }
  /** Move object */
  StorageObjectsController_moveObject: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        /** @description Storage bucket id */
        id: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['MoveObjectBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to move object */
      500: {
        content: never
      }
    }
  }
  /** Deletes objects */
  StorageObjectsController_deleteObjects: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        /** @description Storage bucket id */
        id: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['DeleteObjectsBody']
      }
    }
    responses: {
      200: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to delete objects */
      500: {
        content: never
      }
    }
  }
  /** Gets project storage credentials */
  StorageS3CredentialsController_getAllCredentials: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['GetStorageCredentialsResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get project storage credentials */
      500: {
        content: never
      }
    }
  }
  /** Creates project storage credential */
  StorageS3CredentialsController_createCredential: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateStorageCredentialBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['CreateStorageCredentialResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to create project storage credential */
      500: {
        content: never
      }
    }
  }
  /** Deletes project storage credential */
  StorageS3CredentialsController_deleteCredential: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        /** @description Storage credential id */
        id: string
      }
    }
    responses: {
      200: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to delete project storage credential */
      500: {
        content: never
      }
    }
  }
  /** Gets invoices for the given customer */
  InvoicesController_getInvoices: {
    parameters: {
      query: {
        customer: string
        slug?: string
        limit: string
        offset: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['Invoice'][]
        }
      }
      /** @description Failed to retrieve invoices */
      500: {
        content: never
      }
    }
  }
  /** Gets the total count of invoices for the given customer */
  InvoicesController_countInvoices: {
    parameters: {
      query: {
        customer: string
        slug?: string
      }
    }
    responses: {
      200: {
        headers: {
          /** @description total count value */
          'X-Total-Count'?: unknown
        }
        content: never
      }
      /** @description Failed to retrieve the total count of invoices */
      500: {
        content: never
      }
    }
  }
  /** Gets information about overdue invoices that relate to the authenticated user */
  InvoicesController_getOverdueInvoices: {
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['OverdueInvoiceCount'][]
        }
      }
    }
  }
  /** Gets invoice with the given invoice ID */
  InvoicesController_getInvoice: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['Invoice']
        }
      }
      /** @description Failed to retrieve invoice */
      500: {
        content: never
      }
    }
  }
  /** Sets up a payment method */
  SetupIntentController_setUpPaymentMethod: {
    requestBody: {
      content: {
        'application/json': components['schemas']['HCaptchaBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['SetupIntentResponse']
        }
      }
      /** @description Failed to set up a payment method */
      500: {
        content: never
      }
    }
  }
  /** Sends analytics server event */
  TelemetryEventController_sendServerEvent: {
    requestBody: {
      content: {
        'application/json': components['schemas']['TelemetryEventBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to send analytics server event */
      500: {
        content: never
      }
    }
  }
  /** Send analytics identify event */
  TelemetryIdentifyController_identify: {
    requestBody: {
      content: {
        'application/json': components['schemas']['TelemetryIdentifyBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to send analytics identify event */
      500: {
        content: never
      }
    }
  }
  /** Send server page event */
  TelemetryPageController_sendServerPage: {
    requestBody: {
      content: {
        'application/json': components['schemas']['TelemetryPageBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to send server page event */
      500: {
        content: never
      }
    }
  }
  /** Sends mixpanel server activity */
  TelemetryActivityController_sendServerActivity: {
    requestBody: {
      content: {
        'application/json': components['schemas']['TelemetryActivityBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to send mixpanel server activity */
      500: {
        content: never
      }
    }
  }
  /** Send mixpanel page event */
  TelemetryPageviewController_sendServerPageViewed: {
    requestBody: {
      content: {
        'application/json': components['schemas']['TelemetryPageviewBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to send mixpanel page event */
      500: {
        content: never
      }
    }
  }
  /** Gets the Vercel access token for the given code */
  VercelAccessTokenController_getAccessToken: {
    parameters: {
      query: {
        code: string
      }
    }
    responses: {
      200: {
        content: never
      }
      /** @description Failed to get Vercel access token */
      500: {
        content: never
      }
    }
  }
  /** Gets the list of Vercel projects */
  VercelProjectsController_getVercelProjects: {
    parameters: {
      query: {
        id: string
        teamId: string
      }
      header: {
        vercel_authorization: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': Record<string, never>[]
        }
      }
      /** @description Failed to get projects */
      500: {
        content: never
      }
    }
  }
  /** Gets the Vercel project with the given ID */
  VercelProjectsController_getVercelProject: {
    parameters: {
      query: {
        id: string
        teamId: string
      }
      header: {
        vercel_authorization: string
      }
      path: {
        id: string
        teamId: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': Record<string, never>
        }
      }
      /** @description Failed to get project */
      500: {
        content: never
      }
    }
  }
  /** Gets the environment variables for the given project ID on behalf of the given team ID */
  VercelEnvironmentVariablesController_getEnvironmentVariables: {
    parameters: {
      query: {
        projectId: string
        teamId?: string
      }
      header: {
        vercel_authorization: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': Record<string, never>[]
        }
      }
      /** @description Failed to get Vercel environment variables */
      500: {
        content: never
      }
    }
  }
  /** Creates the environment variable for the given project ID on behalf of the given team ID */
  VercelEnvironmentVariablesController_createEnvironmentVariable: {
    parameters: {
      query: {
        projectId: string
        teamId?: string
      }
      header: {
        vercel_authorization: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateVercelEnvironmentVariableBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': Record<string, never>
        }
      }
      /** @description Failed to get the environment variables */
      500: {
        content: never
      }
    }
  }
  /** Gets user's integrations */
  IntegrationsController_getProjectConnections: {
    parameters: {
      query: {
        /** @description Filter results by integration name. Optional */
        integration_name: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['GetUserOrganizationIntegrationResponse'][]
        }
      }
      /** @description Failed to get user's integrations */
      500: {
        content: never
      }
    }
  }
  /** Gets integration with the given organization slug */
  IntegrationsController_getProjectConnectionsForOrg: {
    parameters: {
      path: {
        slug: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['GetOrganizationIntegrationResponse'][]
        }
      }
      /** @description Failed to get integration with the given organization slug */
      500: {
        content: never
      }
    }
  }
  /**
   * Create vercel integration
   * @description Exchanges a vercel code for an access token and saves the access token to the new integration record
   */
  VercelIntegrationController_createVercelIntegration: {
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateVercelIntegrationBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to create vercel integration */
      500: {
        content: never
      }
    }
  }
  /** Removes Vercel organization integration with the given id */
  VercelIntegrationController_removeVercelIntegration: {
    parameters: {
      path: {
        organization_integration_id: string
      }
    }
    responses: {
      200: {
        content: never
      }
      /** @description Failed to remove Vercel organization integration with the given id */
      500: {
        content: never
      }
    }
  }
  /** Gets vercel projects with the given organization integration id */
  VercelProjectController_getVercelProjects: {
    parameters: {
      query: {
        search?: string
        from?: string
        limit: string
      }
      path: {
        organization_integration_id: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['GetVercelProjectsResponse']
        }
      }
      /** @description Failed to get vercel projects with the given organization integration id */
      500: {
        content: never
      }
    }
  }
  /** Gets installed vercel project connections for the given organization integration */
  VercelConnectionsController_getVercelConnections: {
    parameters: {
      path: {
        organization_integration_id: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['GetVercelConnections'][]
        }
      }
      /** @description Failed to get installed vercel connections for the given organization integration */
      500: {
        content: never
      }
    }
  }
  /** Connects a Vercel project to a supabase project */
  VercelConnectionsController_createVercelConnection: {
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateVercelConnectionsBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['CreateVercelConnectionResponse']
        }
      }
      /** @description Failed to create project connection */
      500: {
        content: never
      }
    }
  }
  /** Syncs supabase project envs with given connection id */
  VercelConnectionsController_syncVercelConnectionEnvironments: {
    parameters: {
      path: {
        connection_id: string
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to sync supabase project envs with given connection id */
      500: {
        content: never
      }
    }
  }
  /** Deletes vercel project connection */
  VercelConnectionsController_deleteVercelConnection: {
    parameters: {
      path: {
        connection_id: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['DeleteVercelConnectionResponse']
        }
      }
      /** @description Failed to delete vercel integration project connection */
      500: {
        content: never
      }
    }
  }
  /** Updates a Vercel connection for a supabase project */
  VercelConnectionsController_updateVercelConnection: {
    parameters: {
      path: {
        connection_id: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateVercelConnectionsBody']
      }
    }
    responses: {
      200: {
        content: never
      }
      /** @description Failed to update Vercel connection */
      500: {
        content: never
      }
    }
  }
  /** Get GitHub authorization */
  GitHubAuthorizationsController_getGitHubAuthorization: {
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['GitHubAuthorization']
        }
      }
      /** @description Failed to get GitHub authorization */
      500: {
        content: never
      }
    }
  }
  /** Create GitHub authorization */
  GitHubAuthorizationsController_createGitHubAuthorization: {
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateGitHubAuthorizationBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to create GitHub authorization */
      500: {
        content: never
      }
    }
  }
  /** List organization GitHub connections */
  GitHubConnectionsController_listOrganizationGitHubConnections: {
    parameters: {
      query: {
        organization_id: number
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['ListGitHubConnectionsResponse']
        }
      }
      /** @description Failed to list organization GitHub connections */
      500: {
        content: never
      }
    }
  }
  /** Connects a GitHub project to a supabase project */
  GitHubConnectionsController_createGitHubConnection: {
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateGitHubConnectionsBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to create project connections */
      500: {
        content: never
      }
    }
  }
  /** Deletes github project connection */
  GitHubConnectionsController_deleteGitHubConnection: {
    parameters: {
      path: {
        connection_id: string
      }
    }
    responses: {
      204: {
        content: never
      }
      /** @description Failed to delete github integration project connection */
      500: {
        content: never
      }
    }
  }
  /** Updates a GitHub connection for a supabase project */
  GitHubConnectionsController_updateGitHubConnection: {
    parameters: {
      path: {
        connection_id: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateGitHubConnectionsBody']
      }
    }
    responses: {
      204: {
        content: never
      }
      /** @description Failed to update GitHub connection */
      500: {
        content: never
      }
    }
  }
  /** List GitHub connection branches */
  GitHubBranchesController_listConnectionBranches: {
    parameters: {
      query?: {
        per_page?: number
        page?: number
      }
      path: {
        connectionId: number
      }
    }
    responses: {
      200: {
        content: {
          'application/json': Record<string, never>[]
        }
      }
      /** @description Failed to list GitHub connection branches */
      500: {
        content: never
      }
    }
  }
  /** Get GitHub connection branch */
  GitHubBranchesController_getConnectionBranch: {
    parameters: {
      path: {
        connectionId: number
        branchName: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': Record<string, never>
        }
      }
      /** @description Failed to get GitHub connection branch */
      500: {
        content: never
      }
    }
  }
  /** Gets GitHub repositories for user */
  GitHubRepositoriesController_listRepositories: {
    responses: {
      200: {
        content: never
      }
      /** @description Failed to get GitHub repositories for user */
      500: {
        content: never
      }
    }
  }
  /** Create CLI login session */
  CliLoginController_createCliLoginSession: {
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateCliLoginSessionBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to create CLI login session */
      500: {
        content: never
      }
    }
  }
  /** Retrieve CLI login session */
  CliLoginController_getCliLoginSession: {
    parameters: {
      path: {
        session_id: string
      }
    }
    responses: {
      200: {
        content: never
      }
      /** @description Failed to retrieve CLI login session */
      500: {
        content: never
      }
    }
  }
  /** Gets GoTrue template */
  AuthTemplateController_getTemplate: {
    parameters: {
      path: {
        ref: string
        template:
          | 'confirmation'
          | 'email-change'
          | 'invite'
          | 'magic-link'
          | 'recovery'
          | 'reauthentication'
      }
    }
    responses: {
      200: {
        content: {
          'application/json': string
        }
      }
      /** @description Failed to retrieve GoTrue template */
      500: {
        content: never
      }
    }
  }
  /** Gets the status of owner reassignment */
  DatabaseOwnerController_getOwnerReassignStatus: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['OwnerResponse']
        }
      }
      /** @description Failed to get status of owner reassignment */
      500: {
        content: never
      }
    }
  }
  /** Reassigns object owner from supabase_admin to temp */
  DatabaseOwnerController_applyOwnerReassign: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['OwnerResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to reassign owner on the project */
      500: {
        content: never
      }
    }
  }
  /** Rollback object owner from temp to supabase_admin */
  DatabaseOwnerController_rollbackOwnerReassign: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['OwnerResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to rollback owner on the project */
      500: {
        content: never
      }
    }
  }
  /** Reassigns object owner from temp to postgres */
  DatabaseOwnerController_finaliseOwnerReassign: {
    parameters: {
      header: {
        'x-connection-encrypted': string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['OwnerResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to reassign owner on the project */
      500: {
        content: never
      }
    }
  }
  /** Updates the database password */
  DatabasePasswordController_updatePassword: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdatePasswordBody']
      }
    }
    responses: {
      200: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to update database password */
      500: {
        content: never
      }
    }
  }
  /** Reset JWT if leaked keys found by GitHub secret scanning */
  GithubSecretAlertController_resetJwt: {
    parameters: {
      header: {
        'github-public-key-identifier': string
        'github-public-key-signature': string
      }
    }
    requestBody: {
      content: {
        'application/json': string
      }
    }
    responses: {
      200: {
        content: never
      }
      /** @description Failed to reset JWT */
      500: {
        content: never
      }
    }
  }
  /**
   * Update a function
   * @description Updates a function with the specified slug and project.
   */
  SystemFunctionSlugController_updateFunction: {
    parameters: {
      query?: {
        slug?: string
        name?: string
        verify_jwt?: boolean
        import_map?: boolean
        entrypoint_path?: string
        import_map_path?: string
      }
      path: {
        /** @description Project ref */
        ref: string
        /** @description Function slug */
        function_slug: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1UpdateFunctionBody']
        'application/vnd.denoland.eszip': components['schemas']['V1UpdateFunctionBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['FunctionResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to update function with given slug */
      500: {
        content: never
      }
    }
  }
  /**
   * List all functions
   * @description Returns all functions you've previously added to the specified project.
   */
  SystemFunctionsController_getFunctions: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['FunctionResponse'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve project's functions */
      500: {
        content: never
      }
    }
  }
  /**
   * Create a function
   * @description Creates a function and adds it to the specified project.
   */
  SystemFunctionsController_createFunction: {
    parameters: {
      query?: {
        slug?: string
        name?: string
        verify_jwt?: boolean
        import_map?: boolean
        entrypoint_path?: string
        import_map_path?: string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1CreateFunctionBody']
        'application/vnd.denoland.eszip': components['schemas']['V1CreateFunctionBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['FunctionResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to create project's function */
      500: {
        content: never
      }
    }
  }
  /** Deletes all Edge Functions from a project */
  SystemFunctionsController_systemDeleteAllFunctions: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: never
      }
    }
  }
  /**
   * List all secrets
   * @description Returns all secrets you've previously added to the specified project.
   */
  SystemSecretsController_getSecrets: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['SecretResponse'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve project's secrets */
      500: {
        content: never
      }
    }
  }
  /**
   * Bulk create secrets
   * @description Creates multiple secrets and adds them to the specified project.
   */
  SystemSecretsController_createSecrets: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateSecretBody'][]
      }
    }
    responses: {
      201: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to create project's secrets */
      500: {
        content: never
      }
    }
  }
  /**
   * Bulk delete secrets
   * @description Deletes all secrets with the given names from the specified project
   */
  SystemSecretsController_deleteSecrets: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': string[]
      }
    }
    responses: {
      200: {
        content: {
          'application/json': Record<string, never>
        }
      }
      403: {
        content: never
      }
      /** @description Failed to delete secrets with given names */
      500: {
        content: never
      }
    }
  }
  /** Refreshes secrets */
  SecretsRefreshController_refreshSecrets: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to refresh secrets */
      500: {
        content: never
      }
    }
  }
  /** Get API health status */
  HealthController_getStatus: {
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['HealthResponse']
        }
      }
      /** @description Failed to retrieve API health status */
      500: {
        content: never
      }
    }
  }
  /** Updates a project's health status. */
  HealthReportingController_updateStatus: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ReportStatusBody']
      }
    }
    responses: {
      200: {
        content: never
      }
      /** @description Failed to update health status. */
      500: {
        content: never
      }
    }
  }
  /** Records an HA event */
  HaEventsController_updateStatus: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['EventBody']
      }
    }
    responses: {
      200: {
        content: never
      }
      /** @description Failed to record HA event. */
      500: {
        content: never
      }
    }
  }
  /** Allows a project to obtain temporary credentials. */
  AwsCredentialsController_getTemporaryCredentials: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CredentialsRequestBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['CredentialsResponseBody']
        }
      }
      /** @description Failed to obtain temporary credentials. */
      500: {
        content: never
      }
    }
  }
  /** Updates project addon */
  AddonsController_updateAddon: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateAddonAdminBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to update project addon */
      500: {
        content: never
      }
    }
  }
  /** Removes project addon */
  AddonsController_removeAddon: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        addon_variant: components['schemas']['AddonVariantId']
      }
    }
    responses: {
      200: {
        content: never
      }
      /** @description Failed to remove project addon */
      500: {
        content: never
      }
    }
  }
  /** Handle update project jwt on completion */
  ProjectUpdateJwtController_completeUpdateJwt: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      201: {
        content: never
      }
    }
  }
  /** Gets usage stats */
  OrgUsageSystemController_getOrgUsage: {
    parameters: {
      query?: {
        project_ref?: string
        start?: string
        end?: string
      }
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['OrgUsageResponse']
        }
      }
      /** @description Failed to get usage stats */
      500: {
        content: never
      }
    }
  }
  /** Gets the partner usage and costs */
  PartnerBillingSystemController_getPartnerUsageAndCosts: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: never
      }
      /** @description Failed to retrieve subscription */
      500: {
        content: never
      }
    }
  }
  /** Gets the current subscription */
  OrgSubscriptionSystemController_getSubscription: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    responses: {
      200: {
        content: never
      }
      /** @description Failed to retrieve subscription */
      500: {
        content: never
      }
    }
  }
  /** Updates subscription */
  OrgSubscriptionSystemController_updateSubscription: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateSubscriptionV2AdminBody']
      }
    }
    responses: {
      200: {
        content: never
      }
      /** @description Failed to update subscription */
      500: {
        content: never
      }
    }
  }
  /** Updates restriction status of an org */
  OrgRestrictionsSystemController_updateRestriction: {
    parameters: {
      path: {
        /** @description Organization slug */
        slug: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateRestrictionsBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['UpdateRestrictionsResponse']
        }
      }
      /** @description Failed to update restriction status */
      500: {
        content: never
      }
    }
  }
  /** Creates a partner organization */
  AwsPartnerOrganizationsSystemController_createPartnerOrganization: {
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateAwsPartnerOrganizationBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['AwsPartnerOrganizationResponse']
        }
      }
      /** @description Unexpected error creating a partner organization */
      500: {
        content: never
      }
    }
  }
  /** Processes Vercel event */
  VercelWebhooksController_processEvent: {
    parameters: {
      header: {
        'x-vercel-signature': string
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to process Vercel event */
      500: {
        content: never
      }
    }
  }
  /** Processes GitHub event */
  GitHubWebhooksController_processEvent: {
    parameters: {
      header: {
        'x-github-delivery': string
        'x-github-event': string
        'x-hub-signature-256': string
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to process GitHub event */
      500: {
        content: never
      }
    }
  }
  /** Processes Stripe event */
  StripeWebhooksController_processEvent: {
    parameters: {
      header: {
        'stripe-signature': string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['Buffer']
      }
    }
    responses: {
      200: {
        content: never
      }
      /** @description Failed to process Stripe event */
      500: {
        content: never
      }
    }
  }
  /**
   * Get metrics
   * @description At most 50 projects can be queried at a time.
   * Currently supports '1d', '3d', and '7d' intervals.
   */
  V0ProjectsMetricsController_getProjectsMetrics: {
    requestBody: {
      content: {
        'application/json': components['schemas']['GetMetricsBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['GetMetricsResponse']
        }
      }
    }
  }
  /**
   * Get database branch config
   * @description Fetches configurations of the specified database branch
   */
  BranchController_getBranchDetails: {
    parameters: {
      path: {
        /** @description Branch ID */
        branch_id: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['BranchDetailResponse']
        }
      }
      /** @description Failed to retrieve database branch */
      500: {
        content: never
      }
    }
  }
  /**
   * Delete a database branch
   * @description Deletes the specified database branch
   */
  BranchController_deleteBranch: {
    parameters: {
      path: {
        /** @description Branch ID */
        branch_id: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['BranchDeleteResponse']
        }
      }
      /** @description Failed to delete database branch */
      500: {
        content: never
      }
    }
  }
  /**
   * Update database branch config
   * @description Updates the configuration of the specified database branch
   */
  BranchController_updateBranch: {
    parameters: {
      path: {
        /** @description Branch ID */
        branch_id: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateBranchBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['BranchResponse']
        }
      }
      /** @description Failed to update database branch */
      500: {
        content: never
      }
    }
  }
  /**
   * Resets a database branch
   * @description Resets the specified database branch
   */
  BranchController_resetBranch: {
    parameters: {
      path: {
        /** @description Branch ID */
        branch_id: string
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['BranchResetResponse']
        }
      }
      /** @description Failed to reset database branch */
      500: {
        content: never
      }
    }
  }
  /**
   * List all projects
   * @description Returns a list of all projects you've previously created.
   */
  V1ProjectsController_getProjects: {
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['V1ProjectResponse'][]
        }
      }
    }
  }
  /** Create a project */
  V1ProjectsController_createProject: {
    requestBody: {
      content: {
        'application/json': components['schemas']['V1CreateProjectBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['V1ProjectResponse']
        }
      }
    }
  }
  /** Get project api keys */
  ApiKeysController_getProjectApiKeys: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['ApiKeyResponse'][]
        }
      }
      403: {
        content: never
      }
    }
  }
  /**
   * List all database branches
   * @description Returns all database branches of the specified project.
   */
  BranchesController_getBranches: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['BranchResponse'][]
        }
      }
      /** @description Failed to retrieve database branches */
      500: {
        content: never
      }
    }
  }
  /**
   * Create a database branch
   * @description Creates a database branch from the specified project.
   */
  BranchesController_createBranch: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateBranchBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['BranchResponse']
        }
      }
      /** @description Failed to create database branch */
      500: {
        content: never
      }
    }
  }
  /**
   * Disables preview branching
   * @description Disables preview branching for the specified project
   */
  BranchesController_disableBranch: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: never
      }
      /** @description Failed to disable preview branching */
      500: {
        content: never
      }
    }
  }
  /** Gets project's custom hostname config */
  CustomHostnamesController_getCustomHostnameConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['UpdateCustomHostnameResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve project's custom hostname config */
      500: {
        content: never
      }
    }
  }
  /** Deletes a project's custom hostname configuration */
  CustomHostnamesController_removeCustomHostnameConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to delete project custom hostname configuration */
      500: {
        content: never
      }
    }
  }
  /** Updates project's custom hostname configuration */
  CustomHostnamesController_createCustomHostnameConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateCustomHostnameBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['UpdateCustomHostnameResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to update project custom hostname configuration */
      500: {
        content: never
      }
    }
  }
  /** Attempts to verify the DNS configuration for project's custom hostname configuration */
  CustomHostnamesController_reverify: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['UpdateCustomHostnameResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to verify project custom hostname configuration */
      500: {
        content: never
      }
    }
  }
  /** Activates a custom hostname for a project. */
  CustomHostnamesController_activate: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['UpdateCustomHostnameResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to activate project custom hostname configuration */
      500: {
        content: never
      }
    }
  }
  /** Gets project's network bans */
  NetworkBansController_getNetworkBans: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['NetworkBanResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve project's network bans */
      500: {
        content: never
      }
    }
  }
  /** Remove network bans. */
  NetworkBansController_removeNetworkBan: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RemoveNetworkBanRequest']
      }
    }
    responses: {
      200: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to remove network bans. */
      500: {
        content: never
      }
    }
  }
  /** Gets project's network restrictions */
  NetworkRestrictionsController_getNetworkRestrictions: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['NetworkRestrictionsResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve project's network restrictions */
      500: {
        content: never
      }
    }
  }
  /** Updates project's network restrictions */
  NetworkRestrictionsController_applyNetworkRestrictions: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['NetworkRestrictionsRequest']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['NetworkRestrictionsResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to update project network restrictions */
      500: {
        content: never
      }
    }
  }
  /** Gets project's pgsodium config */
  PgsodiumConfigController_getPgsodiumConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PgsodiumConfigResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve project's pgsodium config */
      500: {
        content: never
      }
    }
  }
  /** Updates project's pgsodium config. Updating the root_key can cause all data encrypted with the older key to become inaccessible. */
  PgsodiumConfigController_updatePgsodiumConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdatePgsodiumConfigBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PgsodiumConfigResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to update project's pgsodium config */
      500: {
        content: never
      }
    }
  }
  /**
   * List all secrets
   * @description Returns all secrets you've previously added to the specified project.
   */
  SecretsController_getSecrets: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['SecretResponse'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve project's secrets */
      500: {
        content: never
      }
    }
  }
  /**
   * Bulk create secrets
   * @description Creates multiple secrets and adds them to the specified project.
   */
  SecretsController_createSecrets: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateSecretBody'][]
      }
    }
    responses: {
      201: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to create project's secrets */
      500: {
        content: never
      }
    }
  }
  /**
   * Bulk delete secrets
   * @description Deletes all secrets with the given names from the specified project
   */
  SecretsController_deleteSecrets: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': string[]
      }
    }
    responses: {
      200: {
        content: {
          'application/json': Record<string, never>
        }
      }
      403: {
        content: never
      }
      /** @description Failed to delete secrets with given names */
      500: {
        content: never
      }
    }
  }
  /** Get project's SSL enforcement configuration. */
  SslEnforcementController_getSslEnforcementConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['SslEnforcementResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve project's SSL enforcement config */
      500: {
        content: never
      }
    }
  }
  /** Update project's SSL enforcement configuration. */
  SslEnforcementController_updateSslEnforcementConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SslEnforcementRequest']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['SslEnforcementResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to update project's SSL enforcement configuration. */
      500: {
        content: never
      }
    }
  }
  /**
   * Generate TypeScript types
   * @description Returns the TypeScript types of your schema for use with supabase-js.
   */
  TypesController_getTypescriptTypes: {
    parameters: {
      query?: {
        included_schemas?: string
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['TypescriptResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to generate TypeScript types */
      500: {
        content: never
      }
    }
  }
  /** Gets current vanity subdomain config */
  VanitySubdomainsController_getVanitySubdomainConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['VanitySubdomainConfigResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get project vanity subdomain configuration */
      500: {
        content: never
      }
    }
  }
  /** Deletes a project's vanity subdomain configuration */
  VanitySubdomainsController_removeVanitySubdomainConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to delete project vanity subdomain configuration */
      500: {
        content: never
      }
    }
  }
  /** Checks vanity subdomain availability */
  VanitySubdomainsController_checkVanitySubdomainAvailability: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['VanitySubdomainBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['SubdomainAvailabilityResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to check project vanity subdomain configuration */
      500: {
        content: never
      }
    }
  }
  /** Activates a vanity subdomain for a project. */
  VanitySubdomainsController_activateVanitySubdomainPlease: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['VanitySubdomainBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['ActivateVanitySubdomainResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to activate project vanity subdomain configuration */
      500: {
        content: never
      }
    }
  }
  /** Upgrades the project's Postgres version */
  UpgradeController_upgradeProject: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpgradeDatabaseBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['ProjectUpgradeInitiateResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to initiate project upgrade */
      500: {
        content: never
      }
    }
  }
  /** Returns the project's eligibility for upgrades */
  UpgradeController_upgradeEligibilityInformation: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['ProjectUpgradeEligibilityResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to determine project upgrade eligibility */
      500: {
        content: never
      }
    }
  }
  /** Gets the latest status of the project's upgrade */
  UpgradeController_getUpgradeStatus: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['DatabaseUpgradeStatusResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve project upgrade status */
      500: {
        content: never
      }
    }
  }
  /** Returns project's readonly mode status */
  ReadOnlyController_getReadOnlyModeStatus: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['ReadOnlyStatusResponse']
        }
      }
      /** @description Failed to get project readonly mode status */
      500: {
        content: never
      }
    }
  }
  /** Disables project's readonly mode for the next 15 minutes */
  ReadOnlyController_temporarilyDisableReadonlyMode: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to disable project's readonly mode */
      500: {
        content: never
      }
    }
  }
  /** Set up a read replica */
  ReadReplicaController_setUpReadReplica: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SetUpReadReplicaBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to set up read replica */
      500: {
        content: never
      }
    }
  }
  /** Remove a read replica */
  ReadReplicaController_removeReadReplica: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RemoveReadReplicaBody']
      }
    }
    responses: {
      201: {
        content: never
      }
      /** @description Failed to remove read replica */
      500: {
        content: never
      }
    }
  }
  /** Gets project's service health status */
  ServiceHealthController_checkServiceHealth: {
    parameters: {
      query: {
        timeout_ms?: number
        services: ('auth' | 'db' | 'pooler' | 'realtime' | 'rest' | 'storage')[]
      }
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['V1ServiceHealthResponse'][]
        }
      }
      /** @description Failed to retrieve project's service health status */
      500: {
        content: never
      }
    }
  }
  /** Gets project's Postgres config */
  AuthPostgresConfigController_getConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresConfigResponse']
        }
      }
      /** @description Failed to retrieve project's Postgres config */
      500: {
        content: never
      }
    }
  }
  /** Updates project's Postgres config */
  AuthPostgresConfigController_updateConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdatePostgresConfigBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PostgresConfigResponse']
        }
      }
      /** @description Failed to update project's Postgres config */
      500: {
        content: never
      }
    }
  }
  /** Get project's pgbouncer config */
  V1PgbouncerConfigController_v1GetPgbouncerConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['V1PgbouncerConfigResponse']
        }
      }
      /** @description Failed to retrieve project's pgbouncer config */
      500: {
        content: never
      }
    }
  }
  /** Gets project's auth config */
  V1AuthConfigController_getV1AuthConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['AuthConfigResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve project's auth config */
      500: {
        content: never
      }
    }
  }
  /** Updates a project's auth config */
  V1AuthConfigController_updateV1AuthConfig: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateAuthConfigBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['AuthConfigResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to update project's auth config */
      500: {
        content: never
      }
    }
  }
  /** Lists all third-party auth integrations */
  ThirdPartyAuthController_listTPAForProject: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['ThirdPartyAuth'][]
        }
      }
      403: {
        content: never
      }
    }
  }
  /** Creates a new third-party auth integration */
  ThirdPartyAuthController_createTPAForProject: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateThirdPartyAuthBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['ThirdPartyAuth']
        }
      }
      403: {
        content: never
      }
    }
  }
  /** Get a third-party integration */
  ThirdPartyAuthController_getTPAForProject: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        tpa_id: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['ThirdPartyAuth']
        }
      }
      403: {
        content: never
      }
    }
  }
  /** Removes a third-party auth integration */
  ThirdPartyAuthController_deleteTPAForProject: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        tpa_id: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['ThirdPartyAuth']
        }
      }
      403: {
        content: never
      }
    }
  }
  /** Lists all SSO providers */
  ProvidersController_listAllProviders: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['ListProvidersResponse']
        }
      }
      403: {
        content: never
      }
      /** @description SAML 2.0 support is not enabled for this project */
      404: {
        content: never
      }
    }
  }
  /** Creates a new SSO provider */
  ProvidersController_createProviderForProject: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateProviderBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['CreateProviderResponse']
        }
      }
      403: {
        content: never
      }
      /** @description SAML 2.0 support is not enabled for this project */
      404: {
        content: never
      }
    }
  }
  /** Gets a SSO provider by its UUID */
  ProvidersController_getProviderById: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        provider_id: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['GetProviderResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Either SAML 2.0 was not enabled for this project, or the provider does not exist */
      404: {
        content: never
      }
    }
  }
  /** Updates a SSO provider by its UUID */
  ProvidersController_updateProviderById: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        provider_id: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateProviderBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['UpdateProviderResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Either SAML 2.0 was not enabled for this project, or the provider does not exist */
      404: {
        content: never
      }
    }
  }
  /** Removes a SSO provider by its UUID */
  ProvidersController_removeProviderById: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        provider_id: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['DeleteProviderResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Either SAML 2.0 was not enabled for this project, or the provider does not exist */
      404: {
        content: never
      }
    }
  }
  /** Run sql query */
  V1QueryController_v1RunQuery: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1RunQueryBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': Record<string, never>
        }
      }
      403: {
        content: never
      }
      /** @description Failed to run sql query */
      500: {
        content: never
      }
    }
  }
  /** Enables Database Webhooks on the project */
  V1DatabaseWebhooksController_v1EnableDatabaseWebhooks: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      201: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to enable Database Webhooks on the project */
      500: {
        content: never
      }
    }
  }
  /** Lists all backups */
  V1BackupsController_getBackups: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['V1BackupsResponse']
        }
      }
      /** @description Failed to get backups */
      500: {
        content: never
      }
    }
  }
  /** Restores a PITR backup for a database */
  V1RestorePitrController_v1RestorePitr: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1RestorePitrBody']
      }
    }
    responses: {
      201: {
        content: never
      }
    }
  }
  /**
   * Retrieve a function
   * @description Retrieves a function with the specified slug and project.
   */
  FunctionSlugController_getFunction: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        /** @description Function slug */
        function_slug: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['FunctionSlugResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve function with given slug */
      500: {
        content: never
      }
    }
  }
  /**
   * Delete a function
   * @description Deletes a function with the specified slug from the specified project.
   */
  FunctionSlugController_deleteFunction: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        /** @description Function slug */
        function_slug: string
      }
    }
    responses: {
      200: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to delete function with given slug */
      500: {
        content: never
      }
    }
  }
  /**
   * Update a function
   * @description Updates a function with the specified slug and project.
   */
  FunctionSlugController_updateFunction: {
    parameters: {
      query?: {
        slug?: string
        name?: string
        verify_jwt?: boolean
        import_map?: boolean
        entrypoint_path?: string
        import_map_path?: string
      }
      path: {
        /** @description Project ref */
        ref: string
        /** @description Function slug */
        function_slug: string
      }
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1UpdateFunctionBody']
        'application/vnd.denoland.eszip': components['schemas']['V1UpdateFunctionBody']
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['FunctionResponse']
        }
      }
      403: {
        content: never
      }
      /** @description Failed to update function with given slug */
      500: {
        content: never
      }
    }
  }
  /**
   * Retrieve a function body
   * @description Retrieves a function body for the specified slug and project.
   */
  FunctionSlugController_getFunctionBody: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
        /** @description Function slug */
        function_slug: string
      }
    }
    responses: {
      200: {
        content: never
      }
      403: {
        content: never
      }
      /** @description Failed to retrieve function body with given slug */
      500: {
        content: never
      }
    }
  }
  /** Lists all buckets */
  V1StorageBucketsController_getBuckets: {
    parameters: {
      path: {
        /** @description Project ref */
        ref: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['V1StorageBucketResponse'][]
        }
      }
      403: {
        content: never
      }
      /** @description Failed to get list of buckets */
      500: {
        content: never
      }
    }
  }
  /** Create an organization */
  OrganizationsController_createOrganization: {
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateOrganizationBodyV1']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['OrganizationResponseV1']
        }
      }
      /** @description Unexpected error creating an organization */
      500: {
        content: never
      }
    }
  }
  /** List members of an organization */
  V1OrganizationMembersController_v1ListOrganizationMembers: {
    parameters: {
      path: {
        slug: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['V1OrganizationMemberResponse'][]
        }
      }
    }
  }
  /** Gets information about the organization */
  V1OrganizationSlugController_getOrganization: {
    parameters: {
      path: {
        slug: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['V1OrganizationSlugResponse']
        }
      }
    }
  }
  /** Authorize user through oauth */
  OAuthController_authorize: {
    parameters: {
      query: {
        client_id: string
        response_type: 'code' | 'token' | 'id_token token'
        redirect_uri: string
        scope?: string
        state?: string
        response_mode?: string
        code_challenge?: string
        code_challenge_method?: 'plain' | 'sha256' | 'S256'
      }
    }
    responses: {
      303: {
        content: never
      }
    }
  }
  /** Exchange auth code for user's access and refresh token */
  OAuthController_token: {
    requestBody: {
      content: {
        'application/x-www-form-urlencoded': components['schemas']['OAuthTokenBody']
      }
    }
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['OAuthTokenResponse']
        }
      }
    }
  }
  /** Lists SQL snippets for the logged in user */
  SnippetsController_listSnippets: {
    parameters: {
      query?: {
        project_ref?: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['SnippetList']
        }
      }
      /** @description Failed to list user's SQL snippets */
      500: {
        content: never
      }
    }
  }
  /** Gets a specific SQL snippet */
  SnippetsController_getSnippet: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['SnippetResponse']
        }
      }
      /** @description Failed to retrieve SQL snippet */
      500: {
        content: never
      }
    }
  }
  /** Redirects to Supabase dashboard after completing Fly sso */
  CallbackController_redirectToDashboardFlyioExtensionScreen: {
    responses: {
      200: {
        content: never
      }
    }
  }
  /** Gets database status */
  ExtensionController_getResourceStatus: {
    parameters: {
      path: {
        extension_id: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['ResourceWithServicesStatusResponse']
        }
      }
    }
  }
  /** Deletes a database */
  ExtensionController_deleteResource: {
    parameters: {
      path: {
        extension_id: string
      }
    }
    responses: {
      200: {
        content: never
      }
    }
  }
  /** Starts Fly single sign on */
  ExtensionController_startFlyioSSO: {
    parameters: {
      path: {
        extension_id: string
      }
    }
    responses: {
      200: {
        content: never
      }
    }
  }
  /** Creates a database */
  ExtensionsController_provisionResource: {
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['ResourceProvisioningResponse']
        }
      }
    }
  }
  /** Gets information about the organization */
  OrganizationsController_getOrganization: {
    parameters: {
      path: {
        organization_id: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['FlyOrganization']
        }
      }
    }
  }
  /** Gets all databases that belong to the Fly organization */
  OrganizationsController_getOrgExtensions: {
    parameters: {
      path: {
        organization_id: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['OrganizationExtensionStatus'][]
        }
      }
    }
  }
  /** Starts Fly single sign on */
  OrganizationsController_startFlyioSSO: {
    parameters: {
      path: {
        organization_id: string
      }
    }
    responses: {
      200: {
        content: never
      }
    }
  }
  /** Gets the organizations current unbilled charges */
  FlyBillingController_getResourceBilling: {
    parameters: {
      path: {
        organization_id: string
      }
    }
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['ResourceBillingResponse']
        }
      }
    }
  }
}
=======
export * from 'api-types'
>>>>>>> master
