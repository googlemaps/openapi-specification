# Google Maps Platform API Specification (OpenAPI3)

![Build](https://github.com/googlemaps/http_specification/workflows/Build/badge.svg)
![Release](https://github.com/googlemaps/http_specification/workflows/Release/badge.svg)
![GitHub contributors](https://img.shields.io/github/contributors/googlemaps/http_specification?color=green)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![](https://github.com/jpoehnelt/in-solidarity-bot/raw/main/static//badge-flat.png)](https://github.com/apps/in-solidarity)

## Description

An OpenAPI specification for Google Maps Platform APIs.

> **Note**: This specification is a work in progress and likely missing important components and APIs.

| API                | Status       |
| ------------------ | ------------ |
| GeoLocation        | **Complete** |
| Elevation          | In Progress  |
| GeoCoding          | In Progress  |
| Distance           | Not Started  |
| Directions         | Not Started  |
| Time Zone          | Not Started  |
| Roads              | Not Started  |
| Maps Static        | Not Started  |
| Street View Static | Not Started  |
| Places             | Not Started  |

## Development

The repository makes use of [Bazel](bazel.build) to generate outputs from the specification and sample requests.

### Build and test

1. `npm run build`

    This generates the following outputs in the dist folder:

    - YAML file containing OpenAPI3 specification
    - JSON file containing OpenAPI3 specification
    - Structure Markdown documents for specification objects
    - Code snippets in multiple languages for sample requests

    > **Note**: The `dist/` folder is included in this repo and should be updated with all changes.

1. `npm run build:responses` (optional)

    > **Note**: This is an optional step requiring an API key. Set the `GOOGLE_MAPS_API_KEY` environmental variable before running. **Hint**: Use a `.bazelrc.user` file at the root of this project.

    > **Note**: This step only needs to run when the generation code or sample requests have been updated.

    > **Note**: The geolocation request that only provides an IP is not deterministic and skipped in the binary executed.

1. `npm run test`
