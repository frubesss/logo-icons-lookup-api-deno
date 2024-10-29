# Logo Icons Lookup API - Deno 🚀

[![Tests](https://github.com/frubesss/logo-icons-lookup-api-deno/actions/workflows/lint-tests.yml/badge.svg?branch=main)](https://github.com/frubesss/logo-icons-lookup-api/actions/workflows/lint-tests.yml)

# Overview

Effortlessly Find and Display Company Logo Icons! The Logo Icons Lookup API
offers a convenient way to retrieve company logos based on partial or full
company names. This is especially handy when working with external APIs that
provide variations of company names.

Example Use Case: You're given 'American Express Europe Ltd' and need the
American Express logo. This API simplifies the process by returning the relevant
logo through pattern matching.

Check out our [Logo Icon Gallery](https://frubesss.github.io/logo-icons-web-app)
to see all available logos.

## How to Use

### Options:

1. **Hosted API**: Directly use the hosted API at
   [https://logo-icons-lookup-api-deno.deno.dev](https://logo-icons-lookup-api.deno.dev)
   and add the logos you need by contributing to this repository. Detailed
   instructions are available in the Contributing section.

2. **Self-Hosting**: Fork this repository or use it as a template, and deploy
   your own instance using Deno Deploy.

## API Endpoints

### 1. List All Logo Icons

Returns a JSON array of all available logo icons

#### Request

`GET /all_logo_icons`

#### Response

```TypeScript
string[]
```

##### Example

###### Request

`GET https://logo-icons-lookup-api.deno.dev/all_logo_icons`

###### Response

```json
[
  "118 118 Money",
  "American Express",
  "Octopus Energy",
  "RateSetter"
]
```

### 2. Lookup Logo Icon by Name

#### Request

`GET /lookup_logo_icon?logoIconName=:logoIconName`

| Query Parameter | Type   | Default   | Required | Description                                                                                                                                           |
| --------------- | ------ | --------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| logoIconName    | string | undefined | Yes      | Name of logo icon you would like to find                                                                                                              |
| size            | number | 200       | No       | An integer between 1 and 200 to resize the logo icon. For performance, you want to set this to the same size you will be rendering in the application |

#### Response

##### 200

`The logo icon for the company name you provided in .png format.`

### Example

#### Request

`GET https://logo-icons-lookup-api.deno.dev/lookup_logo_icon?logoIconName=monzo bank&size=50`

#### Response

![Monzo Logo Icon](logoIcons/monzo.png)

## Contributing

### Add a New Logo Icon

- Find the logo on sites like [Brandfetch](https://www.brandfetch.com) or
  [Clearbit logo](https://clearbit.com/logo).
- Ensure the logo is square in dimensions, no less than 200x200 and unique
  within the repository.
- Name the file after the company it represents.
- Add it to the logoIcons directory.
- Create a PR. GitHub actions will auto-format the image (png, square,
  compressed).

### Other

Any other changes, or suggestions are welcome.

## Local Development

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
deno test --allow-read
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
