import { assertEquals } from "https://deno.land/std@0.206.0/assert/mod.ts";

import getAllLogoIcons from "../utils/getAllLogoIcons.ts";
import requestHandler from "../requestHandler.ts";

Deno.test("returns 400 response when no valid path provided", async () => {
  const request = new Request("http://localhost:8000/hello");
  const response = await requestHandler(request);

  assertEquals(response.status, 400);
  assertEquals(
    await response.text(),
    "Use routes /all_logo_icons or /lookup_logo_icon",
  );
});

Deno.test("returns name of all logos in the logoIcons directory when /all_logo_icons is called", async () => {
  const request = new Request("http://localhost:8000/all_logo_icons");
  const response = await requestHandler(request);
  const responseJson = await response.json();

  const allLogoNames = await getAllLogoIcons();

  assertEquals(response.status, 200);
  assertEquals(responseJson, allLogoNames);
});

Deno.test("returns 400 response when lookup_logo_icon path is called with no logoName query parameter", async () => {
  const request = new Request("http://localhost:8000/lookup_logo_icon");
  const response = await requestHandler(request);

  assertEquals(response.status, 400);
  assertEquals(
    await response.text(),
    "Please provide a logoIconName query parameter",
  );
});

Deno.test("returns 404 when a logo icon looked up does not exist", async () => {
  const request = new Request(
    "http://localhost:8000/lookup_logo_icon?logoIconName=I am not a logo and I shall never be found",
  );
  const response = await requestHandler(request);

  assertEquals(response.status, 404);
  assertEquals(await response.text(), "No logo icon found");
});

Deno.test("returns matching logo icon when a logo icon name matches the exact logo icon looked up", async () => {
  const request = new Request(
    "http://localhost:8000/lookup_logo_icon?logoIconName=starling",
  );
  const response = await requestHandler(request);

  assertEquals(response.status, 200);
});

Deno.test("returns 200 when logo name is an exact match but contains extra characters after the match", async () => {
  const request = new Request(
    "http://localhost:8000/lookup_logo_icon?logoIconName=starling bank",
  );
  const response = await requestHandler(request);

  assertEquals(response.status, 200);
});

Deno.test("returns 200 when logo name is an exact match but contains extra characters before the match", async () => {
  const request = new Request(
    "http://localhost:8000/lookup_logo_icon?logoIconName=bank of starling",
  );
  const response = await requestHandler(request);

  assertEquals(response.status, 200);
});

Deno.test("returns 404 when logo name looked up is similar to the logo name but not an exact match", async () => {
  const request = new Request(
    "http://localhost:8000/lookup_logo_icon?logoIconName=starlig",
  );
  const response = await requestHandler(request);

  assertEquals(response.status, 404);
});

Deno.test("returns 200 when logo is found and size query parameter is in the required bounds", async () => {
  const request = new Request(
    "http://localhost:8000/lookup_logo_icon?logoIconName=starling&size=96",
  );
  const response = await requestHandler(request);

  assertEquals(response.status, 200);
});

Deno.test("returns 400 when logo is found but size query parameter is over the required bounds", async () => {
  const request = new Request(
    "http://localhost:8000/lookup_logo_icon?logoIconName=starling&size=-1",
  );
  const response = await requestHandler(request);

  assertEquals(response.status, 400);
  assertEquals(
    await response.text(),
    "Size query parameter must be between 1 and 200",
  );
});

Deno.test("returns 400 when logo is found but size query parameter is under the required bounds", async () => {
  const request = new Request(
    "http://localhost:8000/lookup_logo_icon?logoIconName=starling&size=1000",
  );
  const response = await requestHandler(request);

  assertEquals(response.status, 400);
  assertEquals(
    await response.text(),
    "Size query parameter must be between 1 and 200",
  );
});
