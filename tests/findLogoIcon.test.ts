import { assertEquals } from "@std/assert";

import findLogoIcon from "../utils/findLogoIcon.ts";

Deno.test("findLogoIcon", () => {
  const testCases = [
    { logoIconSearchedFor: "HSBC Bank plc", logoIconToBeFound: "hsbc" },
    { logoIconSearchedFor: "Barclays Bank plc", logoIconToBeFound: "barclays" },
    { logoIconSearchedFor: "Lloyds Bank Plc", logoIconToBeFound: "lloyds" },
    {
      logoIconSearchedFor: "Standard Chartered Bank",
      logoIconToBeFound: "standard chartered",
    },
  ];

  for (const testCase of testCases) {
    Deno.test(`should find correct logo for ${testCase.logoIconSearchedFor}`, async () => {
      const foundLogoIcon = await findLogoIcon(testCase.logoIconSearchedFor);
      assertEquals(foundLogoIcon, testCase.logoIconToBeFound);
    });
  }

  Deno.test("should return null for a non-existent logo", async () => {
    const logo = await findLogoIcon("Non existent logo icon");
    assertEquals(logo, null);
  });
});
