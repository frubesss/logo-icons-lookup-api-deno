import { assertEquals } from "https://deno.land/std@0.206.0/assert/mod.ts";

import getAllLogoIcons from "../utils/getAllLogoIcons.ts";
import requestHandler from "../requestHandler.ts";

Deno.test("returns 400 response when no valid path provided", async () => {
  const request = new Request("http://localhost:8000/hello");
  const response = await requestHandler(request);

  assertEquals(response.status, 400);
  assertEquals(await response.text(), "Use routes /all_logos or /lookup_logo");
});

Deno.test("returns name of all logos in logos directory when /all_logos is called", async () => {
  const request = new Request("http://localhost:8000/all_logos");
  const response = await requestHandler(request);
  const responseJson = await response.json();

  const allLogoNames = await getAllLogoIcons();

  assertEquals(response.status, 200);
  assertEquals(responseJson, allLogoNames);
});

Deno.test("returns 400 response when lookup_logo path is called with no logoName query parameter", async () => {
  const request = new Request("http://localhost:8000/lookup_logo");
  const response = await requestHandler(request);

  assertEquals(response.status, 400);
  assertEquals(
    await response.text(),
    "Please provide a logoName query parameter",
  );
});

Deno.test("returns 404 when a logo looked up does not exist", async () => {
  const request = new Request(
    "http://localhost:8000/lookup_logo?logoName=I am not a logo and I shall never be found",
  );
  const response = await requestHandler(request);

  assertEquals(response.status, 404);
  assertEquals(await response.text(), "No logo found");
});

Deno.test("returns matching logo when a logo name matches the exact logo looked up", async () => {
  const request = new Request(
    "http://localhost:8000/lookup_logo?logoName=starling",
  );
  const response = await requestHandler(request);

  assertEquals(response.status, 200);
});

Deno.test("returns 200 when logo name is an exact match but contains extra characters after the match", async () => {
  const request = new Request(
    "http://localhost:8000/lookup_logo?logoName=starling bank",
  );
  const response = await requestHandler(request);

  assertEquals(response.status, 200);
});

Deno.test("returns 200 when logo name is an exact match but contains extra characters before the match", async () => {
  const request = new Request(
    "http://localhost:8000/lookup_logo?logoName=bank of starling",
  );
  const response = await requestHandler(request);

  assertEquals(response.status, 200);
});

Deno.test("returns 404 when logo name looked up is similar to the logo name but not an exact match", async () => {
  const request = new Request(
    "http://localhost:8000/lookup_logo?logoName=starlig",
  );
  const response = await requestHandler(request);

  assertEquals(response.status, 404);
});

Deno.test("returns 200 when logo is found and size query parameter is in the required bounds", async () => {
  const request = new Request(
    "http://localhost:8000/lookup_logo?logoName=starling&size=96",
  );
  const response = await requestHandler(request);

  assertEquals(response.status, 200);
});

Deno.test("returns 400 when logo is found but size query parameter is over the required bounds", async () => {
  const request = new Request(
    "http://localhost:8000/lookup_logo?logoName=starling&size=-1",
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
    "http://localhost:8000/lookup_logo?logoName=starling&size=1000",
  );
  const response = await requestHandler(request);

  assertEquals(response.status, 400);
  assertEquals(
    await response.text(),
    "Size query parameter must be between 1 and 200",
  );
});
