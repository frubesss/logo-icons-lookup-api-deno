import { assertEquals } from "@std/assert";

import removeFileExtension from "../utils/removeFileExtension.ts";

Deno.test("removeFileExtension removes file extension correctly", () => {
  assertEquals(removeFileExtension("icon1.png"), "icon1");
  assertEquals(removeFileExtension("icon2.jpeg"), "icon2");
  assertEquals(removeFileExtension("icon3.svg"), "icon3");
});
