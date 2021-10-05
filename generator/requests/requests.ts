/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { PostJsonRequest, Request, SnippetRequest } from "./types";

import { Url } from "postman-collection";
import path from "path";
import { readFileSync } from "fs";
import yaml from "js-yaml";

function parseRequestBody(filename) {
  if (filename.match(/\.yml$/)) {
    return yaml.load(
      readFileSync(path.resolve(__dirname, filename)).toString()
    );
  }

  return JSON.parse(
    readFileSync(path.resolve(__dirname, filename)).toString()
  ) as any;
}

export const REQUESTS: SnippetRequest[] = [
  {
    regionTag: "maps_http_geolocation_celltowers",
    request: new PostJsonRequest({
      url: "https://www.googleapis.com/geolocation/v1/geolocate",
      json: parseRequestBody(
        "../../specification/requests/maps_http_geolocation_celltowers_request.yml"
      ),
    }),
  },
  {
    regionTag: "maps_http_geolocation_wifi",
    request: new PostJsonRequest({
      url: "https://www.googleapis.com/geolocation/v1/geolocate",
      json: parseRequestBody(
        "../../specification/requests/maps_http_geolocation_wifi_request.yml"
      ),
    }),
  },
  {
    regionTag: "maps_http_geolocation_ip",
    request: new PostJsonRequest({
      url: "https://www.googleapis.com/geolocation/v1/geolocate",
      json: parseRequestBody(
        "../../specification/requests/maps_http_geolocation_ip_request.yml"
      ),
    }),
  },
  {
    regionTag: "maps_http_geolocation_error_404",
    request: new PostJsonRequest({
      url: "https://www.googleapis.com/geolocation/v1/geolocate",
      json: { considerIP: false },
    }),
  },
  {
    regionTag: "maps_http_geolocation_error_400",
    request: new PostJsonRequest({
      url: "https://www.googleapis.com/geolocation/v1/geolocate",
      json: { cellTowers: "foo" },
    }),
  },
  {
    regionTag: "maps_http_geolocation_error_400_invalid_key",
    request: new PostJsonRequest({
      url: "https://www.googleapis.com/geolocation/v1/geolocate?key=INVALID_KEY",
      json: parseRequestBody(
        "../../specification/requests/maps_http_geolocation_ip_request.yml"
      ),
    }),
  },
  {
    regionTag: "maps_http_geocode",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/geocode/json",
        query: [
          {
            key: "address",
            value: "1600 Amphitheatre Parkway, Mountain View, CA",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_geocode_postcode_localities",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/geocode/json",
        query: [
          {
            key: "components",
            value: "postal_code:94608",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_geocode_reverse",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/geocode/json",
        query: [{ key: "latlng", value: "40.714224,-73.961452" }],
      }),
    }),
  },
  {
    regionTag: "maps_http_geocode_reverse_filtering",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/geocode/json",
        query: [
          { key: "latlng", value: "40.714224,-73.961452" },
          { key: "location_type", value: "ROOFTOP" },
          { key: "result_type", value: "street_address" },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_geocode_winnetka",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/geocode/json",
        query: [{ key: "address", value: "Winnetka" }],
      }),
    }),
  },
  {
    regionTag: "maps_http_geocode_winnetka_bounds",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/geocode/json",
        query: [
          { key: "address", value: "Winnetka" },
          {
            key: "bounds",
            value: "34.172684,-118.604794|34.236144,-118.500938",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_geocode_toledo",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/geocode/json",
        query: [{ key: "address", value: "Toledo" }],
      }),
    }),
  },
  {
    regionTag: "maps_http_geocode_toledo_region_es",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/geocode/json",
        query: [
          { key: "address", value: "Toledo" },
          { key: "region", value: "es" },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_geocode_components_filtering",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/geocode/json",
        query: [
          { key: "address", value: "high st hasting" },
          { key: "components", value: "country:GB" },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_geocode_components",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/geocode/json",
        query: [{ key: "components", value: "locality:santa cruz|country:ES" }],
      }),
    }),
  },
  {
    regionTag: "maps_http_geocode_components_zero_results",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/geocode/json",
        query: [
          { key: "components", value: "administrative_area:TX|country:FR" },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_geocode_components_zero_results_fixed",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/geocode/json",
        query: [
          {
            key: "components",
            value:
              "components=route:Annankatu|administrative_area:Helsinki|country:Finland",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_geocode_place_id",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/geocode/json",
        query: [
          {
            key: "place_id",
            value: "ChIJd8BlQ2BZwokRAFUEcm_qrcA",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_geocode_invalid_place",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/geocode/json",
        query: [
          {
            key: "place_id",
            value: "1234",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_geocode_zero_results",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/geocode/json",
        query: [{ key: "latlng", value: "0,0" }, ,],
      }),
    }),
  },
  {
    regionTag: "maps_http_geocode_invalid_request",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/geocode/json",
      }),
    }),
  },
  {
    regionTag: "maps_http_elevation_locations",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/elevation/json",
        query: [{ key: "locations", value: "39.7391536,-104.9847034" }],
      }),
    }),
  },
  {
    regionTag: "maps_http_elevation_locations_multiple",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/elevation/json",
        query: [
          {
            key: "locations",
            value: "39.7391536,-104.9847034|36.455556,-116.866667",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_elevation_locations_encoded",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/elevation/json",
        query: [{ key: "locations", value: "enc:gfo}EtohhU" }],
      }),
    }),
  },
  {
    regionTag: "maps_http_elevation_path",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/elevation/json",
        query: [
          { key: "path", value: "36.578581,-118.291994|36.23998,-116.83171" },
          { key: "samples", value: "3" },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_elevation_path_missing_samples",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/elevation/json",
        query: [{ key: "path", value: "35,-100|40,-110|45,-100" }],
      }),
    }),
  },
  {
    regionTag: "maps_http_elevation_invalid_key",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/elevation/json",
        query: [
          { key: "locations", value: "39.7391536,-104.9847034" },
          { key: "key", value: "invalid" },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_timezone",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/timezone/json",
        query: [
          { key: "location", value: "39.6034810,-119.6822510" },
          { key: "timestamp", value: "1331161200" },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_timezone_dstoffset",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/timezone/json",
        query: [
          { key: "location", value: "39.6034810,-119.6822510" },
          { key: "timestamp", value: "1331766000" },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_timezone_localized",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/timezone/json",
        query: [
          { key: "location", value: "39.6034810,-119.6822510" },
          { key: "timestamp", value: "1331766000" },
          { key: "language", value: "es" },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_timezone_not_found",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/timezone/json",
        query: [
          { key: "location", value: "0,0" },
          { key: "timestamp", value: "1331161200" },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_timezone_invalid",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/timezone/json",
        query: [{ key: "location", value: "" }],
      }),
    }),
  },
  {
    regionTag: "maps_http_timezone_request_denied",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/timezone/json",
        query: [{ key: "key", value: "" }],
      }),
    }),
  },
  {
    regionTag: "maps_http_roads_snaptoroads_interpolation",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "roads.googleapis.com",
        path: "/v1/snapToRoads",
        query: [
          {
            key: "path",
            value:
              "-35.27801,149.12958|-35.28032,149.12907|-35.28099,149.12929|-35.28144,149.12984|-35.28194,149.13003|-35.28282,149.12956|-35.28302,149.12881|-35.28473,149.12836",
          },
          { key: "interpolate", value: "true" },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_roads_snaptoroads_no_interpolation",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "roads.googleapis.com",
        path: "/v1/snapToRoads",
        query: [
          {
            key: "path",
            value:
              "-35.27801,149.12958|-35.28032,149.12907|-35.28099,149.12929|-35.28144,149.12984|-35.28194,149.13003|-35.28282,149.12956|-35.28302,149.12881|-35.28473,149.12836",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_roads_snaptoroads_invalid",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "roads.googleapis.com",
        path: "/v1/snapToRoads",
        query: [
          {
            key: "path",
            value: "0,0|1,1",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_roads_nearest",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "roads.googleapis.com",
        path: "/v1/nearestRoads",
        query: [
          {
            key: "points",
            value:
              "60.170880,24.942795|60.170879,24.942796|60.170877,24.942796",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_roads_nearest_error_400",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "roads.googleapis.com",
        path: "/v1/nearestRoads",
        query: [
          {
            key: "points",
            value: "",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_roads_nearest_error_404",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "roads.googleapis.com",
        path: "/v1/nearestRoads",
        query: [
          {
            key: "points",
            value: "0,0",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_distancematrix_start",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/distancematrix/json",
        query: [
          {
            key: "origins",
            value: "Washington, DC",
          },
          {
            key: "destinations",
            value: "New York City, NY",
          },
          {
            key: "units",
            value: "imperial",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_distancematrix",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/distancematrix/json",
        query: [
          {
            key: "origins",
            value: "Boston,MA|Charlestown,MA",
          },
          {
            key: "destinations",
            value: "Lexington,MA|Concord,MA",
          },
          {
            key: "departure_time",
            value: "now",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_distancematrix_side_of_road",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/distancematrix/json",
        query: [
          {
            key: "origins",
            value: "37.7680296,-122.4375126",
          },
          {
            key: "destinations",
            value: "side_of_road:37.7663444,-122.4412006",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_distancematrix_side_of_road_polyline",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/distancematrix/json",
        query: [
          {
            key: "origins",
            value: "San Francisco City hall",
          },
          {
            key: "destinations",
            value: "side_of_road:enc:{oqeF`fejV[nC:",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_distancematrix_heading",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/distancematrix/json",
        query: [
          {
            key: "origins",
            value: "heading=90:37.773279,-122.468780",
          },
          {
            key: "destinations",
            value: "37.773245,-122.469502",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_distancematrix_bicycling",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/distancematrix/json",
        query: [
          {
            key: "origins",
            value: "Vancouver BC|Seattle",
          },
          {
            key: "destinations",
            value: "San Francisco|Victoria BC",
          },
          {
            key: "mode",
            value: "bicycling",
          },
          {
            key: "language",
            value: "fr-FR",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_distancematrix_latlng",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/distancematrix/json",
        query: [
          {
            key: "origins",
            value: "40.6655101,-73.89188969999998",
          },
          {
            key: "destinations",
            value: "40.659569,-73.933783|40.729029,-73.851524|40.6860072,-73.6334271|40.598566,-73.7527626",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_distancematrix_encoded",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/distancematrix/json",
        query: [
          {
            key: "origins",
            value: "40.6655101,-73.89188969999998",
          },
          {
            key: "destinations",
            value:
              "enc:_kjwFjtsbMt`EgnKcqLcaOzkGari@naPxhVg|Jjjb@cqLcaOzkGari@naPxhV:",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_distancematrix_plus_code",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/distancematrix/json",
        query: [
          {
            key: "origins",
            value: "849VCWC8+R9",
          },
          {
            key: "destinations",
            value: "San Francisco",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_distancematrix_place_id",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/distancematrix/json",
        query: [
          {
            key: "origins",
            value: "place_id:ChIJ3S-JXmauEmsRUcIaWtf4MzE",
          },
          {
            key: "destinations",
            value: "Sydney",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_distancematrix_avoid",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/distancematrix/json",
        query: [
          {
            key: "origins",
            value: "Seattle",
          },
          {
            key: "destinations",
            value: "Victoria BC",
          },
          {
            key: "avoid",
            value: "tolls",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_distancematrix_all",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/distancematrix/json",
        query: [
          {
            key: "origins",
            value: "Seattle, WA",
          },
          {
            key: "destinations",
            value: "North Fork, WA",
          },
          {
            key: "avoid",
            value: "highways",
          },
          {
            key: "units",
            value: "imperial",
          },
          {
            key: "arrival_time",
            value: "1614709737",
          },
          {
            key: "traffic_model",
            value: "pessimistic",
          },
          {
            key: "mode",
            value: "transit",
          },
          {
            key: "transit_mode",
            value: "bus",
          },
          { key: "transit_routing_preference", value: "less_walking" },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_directions_disneyland",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/directions/json",
        query: [
          {
            key: "origin",
            value: "Disneyland",
          },
          {
            key: "destination",
            value: "Universal Studios Hollywood",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_directions_toronto_montreal",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/directions/json",
        query: [
          {
            key: "origin",
            value: "Toronto",
          },
          {
            key: "destination",
            value: "Montreal",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_directions_toronto_montreal_bicycling",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/directions/json",
        query: [
          {
            key: "origin",
            value: "Toronto",
          },
          {
            key: "destination",
            value: "Montreal",
          },
          { key: "avoid", value: "highways" },
          { key: "mode", value: "bicycling" },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_directions_brooklyn_queens_transit",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/directions/json",
        query: [
          {
            key: "origin",
            value: "Brooklyn",
          },
          {
            key: "destination",
            value: "Queens",
          },
          { key: "mode", value: "transit" },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_directions_brooklyn_queens_transit_departure_time",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/directions/json",
        query: [
          {
            key: "origin",
            value: "Brooklyn",
          },
          {
            key: "destination",
            value: "Queens",
          },
          { key: "mode", value: "transit" },
          { key: "departure_time", value: "1343641500" },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_directions_plus_codes",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/directions/json",
        query: [
          {
            key: "origin",
            value: "H8MW+WP Kolkata India",
          },
          {
            key: "destination",
            value: "GCG2+3M Kolkata India",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_directions_place_id",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/directions/json",
        query: [
          {
            key: "origin",
            value: "place_id:ChIJ685WIFYViEgRHlHvBbiD5nE",
          },
          {
            key: "destination",
            value: "place_id:ChIJA01I-8YVhkgRGJb0fW4UX7Y",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_directions_boston_concord_waypoints",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/directions/json",
        query: [
          {
            key: "origin",
            value: "Boston, MA",
          },
          {
            key: "destination",
            value: "Concord, MA",
          },
          {
            key: "waypoints",
            value: "via:Charlestown,MA|via:Lexington,MA",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_directions_boston_concord_waypoints_now",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/directions/json",
        query: [
          {
            key: "origin",
            value: "Boston, MA",
          },
          {
            key: "destination",
            value: "Concord, MA",
          },
          {
            key: "waypoints",
            value: "via:Charlestown,MA|via:Lexington,MA",
          },
          {
            key: "departure_time",
            value: "now",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_directions_boston_concord_waypoints_via",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/directions/json",
        query: [
          {
            key: "origin",
            value: "Boston, MA",
          },
          {
            key: "destination",
            value: "Concord, MA",
          },
          {
            key: "waypoints",
            value: "Charlestown,MA|via:Lexington,MA",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_directions_sydney_perth_waypoints_latlng",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/directions/json",
        query: [
          {
            key: "origin",
            value: "Sydney, AU",
          },
          {
            key: "destination",
            value: "Perth, AU",
          },
          {
            key: "waypoints",
            value: "via:-37.81223,144.96254|via:-34.92788,138.60008",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_directions_sydney_perth_waypoints_mixed",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/directions/json",
        query: [
          {
            key: "origin",
            value: "Sydney, AU",
          },
          {
            key: "destination",
            value: "Perth, AU",
          },
          {
            key: "waypoints",
            value: "side_of_road:via:enc:lexeF{~wsZejrPjtye@:",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_directions_heading",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/directions/json",
        query: [
          {
            key: "origin",
            value: "heading=90:37.773279,-122.468780",
          },
          {
            key: "destination",
            value: "37.773245,-122.469502",
          },         
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_directions_side_of_road",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/directions/json",
        query: [
          {
            key: "origin",
            value: "37.7680296,-122.4375126",
          },
          {
            key: "destination",
            value: "side_of_road:37.7663444,-122.4412006",
          },         
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_directions_sydney_perth_waypoints_polyline",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/directions/json",
        query: [
          {
            key: "origin",
            value: "Sydney, AU",
          },
          {
            key: "destination",
            value: "Perth, AU",
          },
          {
            key: "waypoints",
            value: "via:enc:lexeF{~wsZejrPjtye@:",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_directions_waypoints_optimize",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/directions/json",
        query: [
          {
            key: "origin",
            value: "Adelaide, SA",
          },
          {
            key: "destination",
            value: "Adelaide, SA",
          },
          {
            key: "waypoints",
            value:
              "optimize:true|Barossa Valley, SA|Clare, SA|Connawarra, SA|McLaren Vale, SA",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_directions_region_toledo_es",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/directions/json",
        query: [
          {
            key: "origin",
            value: "Toledo",
          },
          {
            key: "destination",
            value: "Madrid",
          },
          {
            key: "region",
            value: "es",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_directions_region_toledo_default",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/directions/json",
        query: [
          {
            key: "origin",
            value: "Toledo",
          },
          {
            key: "destination",
            value: "Madrid",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_directions_chicago_los_angeles",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/directions/json",
        query: [
          {
            key: "origin",
            value: "Chicago, IL",
          },
          {
            key: "destination",
            value: "Los Angeles, CA",
          },
          { key: "waypoints", value: "Joplin, MO|Oklahoma City, OK" },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_directions_zero_results",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/directions/json",
        query: [
          {
            key: "origin",
            value: "0,0",
          },
          {
            key: "destination",
            value: "45,45",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_directions_available_travel_modes",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/directions/json",
        query: [
          {
            key: "origin",
            value: "frontera el hierro",
          },
          {
            key: "destination",
            value: "la restinga el hierro",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_directions_invalid",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/directions/json",
        query: [],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_details",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/details/json",
        query: [
          {
            key: "place_id",
            value: "ChIJN1t_tDeuEmsRUsoyG83frY4",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_details_fields",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/details/json",
        query: [
          {
            key: "place_id",
            value: "ChIJN1t_tDeuEmsRUsoyG83frY4",
          },
          {
            key: "fields",
            value: "name,rating,formatted_phone_number",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_details_no_plus_compound_code",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/details/json",
        query: [
          {
            key: "place_id",
            value: "GhIJQWDl0CKxOMARUrgehSvwYEA",
          },
          {
            key: "fields",
            value: "plus_code",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_findplacefromtext_mca",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/findplacefromtext/json",
        query: [
          {
            key: "input",
            value: "Museum of Contemporary Art Australia",
          },
          {
            key: "inputtype",
            value: "textquery",
          },
          {
            key: "fields",
            value: "formatted_address,name,rating,opening_hours,geometry",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_findplacefromtext_locationbias",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/findplacefromtext/json",
        query: [
          {
            key: "input",
            value: "mongolian",
          },
          {
            key: "inputtype",
            value: "textquery",
          },
          {
            key: "locationbias",
            value: "circle:2000@47.6918452,-122.2226413",
          },
          {
            key: "fields",
            value: "formatted_address,name,rating,opening_hours,geometry",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_findplacefromtext_phonenumber",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/findplacefromtext/json",
        query: [
          {
            key: "input",
            value: "+16502530000",
          },
          {
            key: "inputtype",
            value: "phonenumber",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_findplacefromtext_error",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/findplacefromtext/json",
        query: [
          {
            key: "input",
            value: "+16502530000",
          },
          {
            key: "inputtype",
            value: "textquery",
          },
          { key: "fields", value: "invalid" },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_nearbysearch",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/nearbysearch/json",
        query: [
          {
            key: "location",
            value: "-33.8670522,151.1957362",
          },
          {
            key: "radius",
            value: "1500",
          },
          { key: "type", value: "restaurant" },
          { key: "keyword", value: "cruise" },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_textsearch",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/textsearch/json",
        query: [
          {
            key: "query",
            value: "restaurants in Sydney",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_textsearch_incomplete_address",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/textsearch/json",
        query: [
          {
            key: "query",
            value: "123 main street",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_textsearch_location",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/textsearch/json",
        query: [
          {
            key: "query",
            value: "123 main street",
          },
          {
            key: "location",
            value: "42.3675294,-71.186966",
          },
          {
            key: "radius",
            value: "10000",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_textsearch_weighted",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/textsearch/json",
        query: [
          {
            key: "query",
            value: "Market in Barcelona",
          },
          {
            key: "location",
            value: "42.3675294,-71.186966",
          },
          {
            key: "radius",
            value: "10000",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_textsearch_pagetoken",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/nearbysearch/json",
        query: [
          {
            key: "pagetoken",
            value:
              "CpQCAgEAAFxg8o-eU7_uKn7Yqjana-HQIx1hr5BrT4zBaEko29ANsXtp9mrqN0yrKWhf-y2PUpHRLQb1GT-mtxNcXou8TwkXhi1Jbk-ReY7oulyuvKSQrw1lgJElggGlo0d6indiH1U-tDwquw4tU_UXoQ_sj8OBo8XBUuWjuuFShqmLMP-0W59Vr6CaXdLrF8M3wFR4dUUhSf5UC4QCLaOMVP92lyh0OdtF_m_9Dt7lz-Wniod9zDrHeDsz_by570K3jL1VuDKTl_U1cJ0mzz_zDHGfOUf7VU1kVIs1WnM9SGvnm8YZURLTtMLMWx8-doGUE56Af_VfKjGDYW361OOIj9GmkyCFtaoCmTMIr5kgyeUSnB-IEhDlzujVrV6O9Mt7N4DagR6RGhT3g1viYLS4kO5YindU6dm3GIof1Q",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_photo_binary", // Note: Generated code does not support binary response well
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/photo",
        query: [
          {
            key: "photo_reference",
            value:
              "Aap_uEA7vb0DDYVJWEaX3O-AtYp77AaswQKSGtDaimt3gt7QCNpdjp1BkdM6acJ96xTec3tsV_ZJNL_JP-lqsVxydG3nh739RE_hepOOL05tfJh2_ranjMadb3VoBYFvF0ma6S24qZ6QJUuV6sSRrhCskSBP5C1myCzsebztMfGvm7ij3gZT",
          },
          {
            key: "maxwidth",
            value: "400",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_photo_invalid_key_error_binary", // Note: Generated code does not support binary response well
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/photo",
        query: [
          {
            key: "photoreference",
            value:
              "Aap_uEA7vb0DDYVJWEaX3O-AtYp77AaswQKSGtDaimt3gt7QCNpdjp1BkdM6acJ96xTec3tsV_ZJNL_JP-lqsVxydG3nh739RE_hepOOL05tfJh2_ranjMadb3VoBYFvF0ma6S24qZ6QJUuV6sSRrhCskSBP5C1myCzsebztMfGvm7ij3gZT",
          },
          {
            key: "maxwidth",
            value: "400",
          },
          {
            key: "key",
            value: "INVALID_KEY",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_autocomplete_paris",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/autocomplete/json",
        query: [
          {
            key: "input",
            value: "Paris",
          },
          {
            key: "types",
            value: "geocode",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_autocomplete_amoeba",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/autocomplete/json",
        query: [
          {
            key: "input",
            value: "amoeba",
          },
          {
            key: "types",
            value: "establishment",
          },
          {
            key: "location",
            value: "37.76999,-122.44696",
          },
          {
            key: "radius",
            value: "500",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_autocomplete_amoeba_strict",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/autocomplete/json",
        query: [
          {
            key: "input",
            value: "amoeba",
          },
          {
            key: "types",
            value: "establishment",
          },
          {
            key: "location",
            value: "37.76999,-122.44696",
          },
          {
            key: "radius",
            value: "500",
          },
          { key: "strictbounds", value: "true" },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_autocomplete_fr",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/autocomplete/json",
        query: [
          {
            key: "input",
            value: "Vict",
          },
          {
            key: "types",
            value: "geocode",
          },
          { key: "language", value: "fr" },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_autocomplete_pt_br",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/autocomplete/json",
        query: [
          {
            key: "input",
            value: "Vict",
          },
          {
            key: "types",
            value: "(cities)",
          },
          { key: "language", value: "pt_BR" },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_queryautocomplete_pizza",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/queryautocomplete/json",
        query: [
          {
            key: "input",
            value: "pizza near par",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_queryautocomplete_pizza_fr",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/queryautocomplete/json",
        query: [
          {
            key: "input",
            value: "pizza near par",
          },
          { key: "language", value: "fr" },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_queryautocomplete_pizza_sydney",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/queryautocomplete/json",
        query: [
          {
            key: "input",
            value: "pizza near Sydney",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_places_queryautocomplete_location_weighted",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/place/queryautocomplete/json",
        query: [
          {
            key: "input",
            value: "Market in Barcelona",
          },
          {
            key: "location",
            value: "42.3675294,-71.186966",
          },
          {
            key: "radius",
            value: "10000",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_streetview_binary",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/streetview",
        query: [
          {
            key: "heading",
            value: "151.78",
          },
          {
            key: "pitch",
            value: "-0.76",
          },
          {
            key: "location",
            value: "46.414382,10.013988",
          },
          {
            key: "size",
            value: "600x300",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_streetview_metadata",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/streetview/metadata",
        query: [
          {
            key: "heading",
            value: "151.78",
          },
          {
            key: "pitch",
            value: "-0.76",
          },
          {
            key: "location",
            value: "46.414382,10.013988",
          },
          {
            key: "size",
            value: "600x300",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_streetview_metadata_error_invalid_pano",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/streetview/metadata",
        query: [        
          {
            key: "pano",
            value: "invalid",
          },
        ],
      }),
    }),
  },
  {
    regionTag: "maps_http_streetview_error_invalid_pano_binary",
    request: new Request({
      url: new Url({
        protocol: "https",
        host: "maps.googleapis.com",
        path: "/maps/api/streetview",
        query: [        
          {
            key: "pano",
            value: "invalid",
          },
          {
            key: "size",
            value: "600x300",
          },
        ],
      }),
    }),
  },  
];
