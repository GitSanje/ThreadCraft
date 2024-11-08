### ERR1
 **No database connection string was provided to `neon()`. Perhaps an environment variable has not been set?**

 -> soln put "use server"

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });

### ERR2

`TypeError: _dbConfig__WEBPACK_IMPORTED_MODULE_1__.db.select is not a function
    at getUserPoints (actions.ts:26:8)
    at fetchUserPoints (page.tsx:93:41)`

### soln =>


