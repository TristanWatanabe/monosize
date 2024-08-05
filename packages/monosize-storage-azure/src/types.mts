export type AzureAuthenticationType = 'AzureNamedKeyCredential' | 'AzurePipelinesCredential';

export type AzureStorageConfig = {
  endpoint: string;
  /**
   * @default 'AzureNamedKeyCredential'
   */
  authType: AzureAuthenticationType;
  /**
   * @default 'latest' table name
   */
  tableName?: string;
};
