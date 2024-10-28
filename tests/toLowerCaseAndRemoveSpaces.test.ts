import { assertEquals } from "@std/assert";

import toLowerCaseAndRemoveSpaces from "../utils/toLowerCaseAndRemoveSpaces.ts";

Deno.test("normalizeString normalizes strings correctly", () => {
  assertEquals(toLowerCaseAndRemoveSpaces("Icon One"), "iconone");
  assertEquals(toLowerCaseAndRemoveSpaces("ICON_two"), "icon_two");
  assertEquals(toLowerCaseAndRemoveSpaces("icon-Three"), "icon-three");
});
