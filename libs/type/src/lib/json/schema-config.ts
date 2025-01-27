/**
 * Schemea proejct configuration
 */
export type SchemaConfig = {
  /**
   * Schema project root directory that contains the entity schema file
   */
  root: string;
  /**
   * Entity sceham file that right under the root directory
   */
  main: string;

  /**
   * Output configuration
   */
  output: {
    /**
     * Output file path for the schema file
     */
    schema: string;
    /**
     * Output file path for the typescript type file
     */
    type: string;
  };
};
