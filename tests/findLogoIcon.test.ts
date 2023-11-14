import { assertEquals } from "https://deno.land/std@0.206.0/assert/mod.ts";

import findLogoIcon from "../utils/findLogoIcon.ts";

Deno.test("findLogoIcon", () => {
  const testCases = [
    { logoSearchedFor: "HSBC Bank plc", logoToBeFound: "hsbc" },
    { logoSearchedFor: "Barclays Bank plc", logoToBeFound: "barclays" },
    { logoSearchedFor: "Lloyds Bank Plc", logoToBeFound: "lloyds" },
    {
      logoSearchedFor: "Standard Chartered Bank",
      logoToBeFound: "standard chartered",
    },
  ];

  for (const testCase of testCases) {
    Deno.test(`should find correct logo for ${testCase.logoSearchedFor}`, async () => {
      const foundLogoIcon = await findLogoIcon(testCase.logoSearchedFor);
      assertEquals(foundLogoIcon, testCase.logoToBeFound);
    });
  }

  Deno.test("should return null for a non-existent logo", async () => {
    const logo = await findLogoIcon("Non Existent Bank");
    assertEquals(logo, null);
  });
});
