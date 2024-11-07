export default {
    dialect: "postgresql",
    schema: "./utils/db/schema.ts",
    out:'./drizzle',

    dbCredentials: {
        url: "postgresql://neondb_owner:WL8zJjovcr5F@ep-solitary-boat-a5hxxdut.us-east-2.aws.neon.tech/threadCraftDb?sslmode=require",
        connectionString:
          "postgresql://neondb_owner:WL8zJjovcr5F@ep-solitary-boat-a5hxxdut.us-east-2.aws.neon.tech/threadCraftDb?sslmode=require",
      },


}