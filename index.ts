import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

import requestHandler from "./requestHandler.ts";

await serve(requestHandler);
