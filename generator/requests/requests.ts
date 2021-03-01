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

import { SnippetRequest, PostJsonRequest, Request } from "./types";
import { Url } from "postman-collection";

import { readFileSync } from "fs";
import path from "path";
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
      url:
        "https://www.googleapis.com/geolocation/v1/geolocate?key=INVALID_KEY",
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
        query: [{ key: "components", value: "locality:santa+cruz|country:ES" }],
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
              "enc:_kjwFjtsbMt%60EgnKcqLcaOzkGari%40naPxhVg%7CJjjb%40cqLcaOzkGari%40naPxhV:",
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
];
