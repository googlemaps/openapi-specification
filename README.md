# Google Maps Platform OpenAPI3 Specification

![Build](https://github.com/googlemaps/openapi-specification/workflows/Test/badge.svg)
![Release](https://github.com/googlemaps/openapi-specification/workflows/Release/badge.svg)
![GitHub contributors](https://img.shields.io/github/contributors/googlemaps/openapi-specification?color=green)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![](https://github.com/jpoehnelt/in-solidarity-bot/raw/main/static//badge-flat.png)](https://github.com/apps/in-solidarity)

## Description

An OpenAPI specification for Google Maps Platform APIs.

| API                | Status       | Documentation |
| ------------------ | ------------ | ------------- |
| Elevation          | **Complete** | [JS](https://developers.google.com/maps/documentation/javascript/elevation), [API](https://developers.google.com/maps/documentation/elevation/overview) |
| GeoCoding          | **Complete** | [JS](https://developers.google.com/maps/documentation/javascript/geocoding), [Android](https://developer.android.com/reference/android/location/Geocoder), [iOS](https://developers.google.com/maps/documentation/ios-sdk/reverse_geocoding), [API](https://developers.google.com/maps/documentation/geocoding) |
| GeoLocation        | **Complete** | [API](https://developers.google.com/maps/documentation/geolocation/overview) |
| Distance           | **Complete** | [JS](https://developers.google.com/maps/documentation/javascript/distancematrix), [API](https://developers.google.com/maps/documentation/distance-matrix) |
| Roads              | **Complete** | [API](https://developers.google.com/maps/documentation/roads) |
| Time Zone          | **Complete** | [API](https://developers.google.com/maps/documentation/timezone) |
| Directions         | **Complete** | [JS](https://developers.google.com/maps/documentation/javascript/directions), [API](https://developers.google.com/maps/documentation/directions) |
| Places             | **Complete** | [JS](https://developers.google.com/maps/documentation/javascript/places), [Android](https://developers.google.com/maps/documentation/places/android-sdk), [iOS](https://developers.google.com/maps/documentation/places/ios-sdk), [API](https://developers.google.com/maps/documentation/places/web-service) |
| Street View        | **Complete** | [JS](https://developers.google.com/maps/documentation/javascript/streetview), [Android](https://developers.google.com/maps/documentation/android-sdk/streetview), [iOS](https://developers.google.com/maps/documentation/ios-sdk/streetview), [API](https://developers.google.com/maps/documentation/streetview) |
| Maps Static        | In-progress  | [API](https://developers.google.com/maps/documentation/maps-static) |

> **Note**: New APIs will be documented using Google Discovery documents and Protobuf files.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/13440387-fc4788d5-77f9-4639-a4c5-74a2878d7eb5?action=collection%2Ffork&collection-url=entityId%3D13440387-fc4788d5-77f9-4639-a4c5-74a2878d7eb5%26entityType%3Dcollection%26workspaceId%3D047c6f75-6b23-42df-b77a-70d716895d9f)

## Development

The repository makes use of [Bazel](https://bazel.build/) to generate outputs from the specification and sample requests.

### Build and test
1. `npm i`

1. `npm run build`

    This generates the following outputs in the dist folder:

    - YAML file containing OpenAPI3 specification
    - JSON file containing OpenAPI3 specification
    - Structure Markdown documents for specification objects
    - Code snippets in multiple languages for sample requests

    > **Note**: There is a bot that can be triggered in a pull request with a comment containing `/update-dist`. See the workflow at https://github.com/googlemaps/openapi-specification/blob/main/.github/workflows/command.yml.

    > **Note**: The `dist/` folder is included in this repo and should be updated with all changes.

    > **Note**: If a documentation item is not generated, be sure it is included
    in the appropriate index.yml file.

1. `npm run responses` (optional)

    > **Note**: This is an optional step requiring an API key. Set the `GOOGLE_MAPS_API_KEY` environmental variable before running.

    > **Note**: This step only needs to run when the generation code or sample requests have been updated.

    > **Note**: The geolocation request that only provides an IP is not deterministic and skipped in the binary executed.

    > **Note**: A single response can be updated similar to `npm run responses -- --only maps_http_places_nearbysearch`.

1. `npm run test`
