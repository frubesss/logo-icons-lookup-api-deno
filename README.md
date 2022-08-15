# Welcome to Logo Icons Lookup API 👋

[![Tests](https://github.com/frubesss/logo-icons-lookup-api/actions/workflows/lint-tests.yml/badge.svg?branch=main)](https://github.com/frubesss/financial-logos-api-/actions/workflows/lint-tests.yml)

> This API allows consumers to find logo icons for a company based on string pattern matching.
> Fulfilling the use case where you want to display the logo icon of
> a company, but you only have a partial match of the company name.
>
> This is useful in scenarios where you are consuming company names from an API
> outside of your control, and you want to determine the icon for that company
> on end.
>
> For example: You want the company logo for American Express but the API you are consuming gives you American Express Europe Ltd.
> This API will return the American Express logo due to American Express being a pattern match.

## Usage

You have two choices.

1. Use the already hosted version of this API at
   https://logo-icons-lookup-api.deno.dev and add the company logo icons you
   require to this repository. Following the steps [here](#Contributing).

2. Fork this repository/use this template and host the API in your own deno
   deploy environment [here](https://deno.com/deploy/docs). Or even host it in
   your own serverless environment. (This has still yet to be tested).

## API

### Get list of all logo icons available

#### Request

`GET /all_logos`

#### Response

```TypeScript
string[]
```

##### Example

###### Request

`GET https://logo-icons-lookup-api.deno.dev/all_logos`

###### Response

```json
[
  "118 118 Money",
  "American Express",
  "Octopus Energy",
  "RateSetter"
]
```

### Lookup logo icon by name

#### Request

`GET /lookup_logo?logoName=:logoName`

| Query Parameter | Type   | Default   | Required | Description                                                                                                                            |
| --------------- | ------ | --------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| logoName        | string | undefined | Yes      | Name of logo you would like to find                                                                                                    |
| size            | number | 200       | No       | Size of the logo image to be returned. For performance, you want to set this to the same size you will be rendering in the application |

#### Response

##### 200

`The logo icon for the company name you provided in .png format.`

### Example

#### Request

`GET https://logo-icons-lookup-api.deno.dev/lookup_logo?logoName=monzo bank&size=50`

#### Response

![Monzo Logo Icon](./logos/monzo.png)

## Consumer Examples

- [Live gallery of all logos](https://financial-logos-app.vercel.app)

## Contributing

### Add new logo icon

- Find the company logo icon you would like to add.
  [Brandfetch](https://www.brandfetch.com) is a great resource for finding good,
  high quality logos. If Brandfetch does not find the logo you want, you can
  also try [Clearbit logo](https://clearbit.com/logo)

- Ensure the logo is:
  - a square in dimensions, so 50x50, 100x100, 200x200 etc
  - not a duplicate of another logo in the repository
- Name the logo filename to the company it is representing
- Add the logo to the `logos` directory
- Create a PR, and GitHub actions will format it for you:
  - To a png
  - To a square
  - Compress the logo

### Other

Any other changes, or suggestions are welcome.

## Local development

### Setup

Install deno:

```sh
curl -fsSL https://deno.land/install.sh | sh
```

### Running API locally

```sh
deno run --allow-read --allow-net ./index.ts
```

### Running tests

```sh
deno test --allow-read ./tests/requestHandler.test.ts
```

## Built with

- [Deno](https://deno.land/)

## Author

👤 **Craig Robertson**

- Website: [craigrobertson.me](https://www.craigrobertson.me)
- Github: [@frubesss](https://github.com/frubesss)
- LinkedIn: [@robertsoncra](https://linkedin.com/in/robertsoncra)

## Show your support

Give a ⭐️ if this project helped you!
