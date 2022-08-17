import { assertEquals } from "https://deno.land/std@0.150.0/testing/asserts.ts";

import findLogoIcon from "../utils/findLogoIcon.ts";

Deno.test("findLogoIcon", async (t) => {
  const testCases = [{
    logoSearchedFor: "HSBC Bank plc",
    logoToBeFound: "hsbc",
  }, {
    logoSearchedFor: "Barclays Bank plc",
    logoToBeFound: "barclays",
  }, {
    logoSearchedFor: "Lloyds Bank Plc",
    logoToBeFound: "lloyds",
  }, {
    logoSearchedFor: "Standard Chartered Bank",
    logoToBeFound: "standard chartered",
  }];

  await Promise.all(testCases.map((testCase) =>
    t.step({
      name:
        `returns ${testCase.logoToBeFound} when searching for ${testCase.logoSearchedFor}`,
      fn: async () => {
        const response = await findLogoIcon(testCase.logoSearchedFor);

        assertEquals(response[0], testCase.logoToBeFound);
      },
      sanitizeOps: false,
      sanitizeResources: false,
      sanitizeExit: false,
    })
  ));
});
