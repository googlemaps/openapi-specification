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

import { SnippetRequest, PostJsonRequest, Request } from './types';
import { Url } from 'postman-collection';

import { readFileSync } from 'fs';
import path from 'path';
import yaml from 'js-yaml';

function parseRequestBody(filename) {
	if (filename.match(/\.yml$/)) {
		return yaml.load(readFileSync(path.resolve(__dirname, filename)).toString());
	}

	return JSON.parse(readFileSync(path.resolve(__dirname, filename)).toString()) as any;
}

export const REQUESTS: SnippetRequest[] = [
	{
		regionTag: 'maps_http_geolocation_celltowers',
		request: new PostJsonRequest({
			url: 'https://www.googleapis.com/geolocation/v1/geolocate',
			json: parseRequestBody('../../specification/requests/maps_http_geolocation_celltowers_request.yml'),
		}),
	},
	{
		regionTag: 'maps_http_geolocation_wifi',
		request: new PostJsonRequest({
			url: 'https://www.googleapis.com/geolocation/v1/geolocate',
			json: parseRequestBody('../../specification/requests/maps_http_geolocation_wifi_request.yml'),
		}),
	},
	{
		regionTag: 'maps_http_geolocation_ip',
		request: new PostJsonRequest({
			url: 'https://www.googleapis.com/geolocation/v1/geolocate',
			json: parseRequestBody('../../specification/requests/maps_http_geolocation_ip_request.yml'),
		}),
	},
	{
		regionTag: 'maps_http_geolocation_error_404',
		request: new PostJsonRequest({
			url: 'https://www.googleapis.com/geolocation/v1/geolocate',
			json: { considerIP: false },
		}),
	},
	{
		regionTag: 'maps_http_geolocation_error_400',
		request: new PostJsonRequest({
			url: 'https://www.googleapis.com/geolocation/v1/geolocate',
			json: { cellTowers: 'foo' },
		}),
	},
	{
		regionTag: 'maps_http_geolocation_error_400_invalid_key',
		request: new PostJsonRequest({
			url: 'https://www.googleapis.com/geolocation/v1/geolocate?key=INVALID_KEY',
			json: parseRequestBody('../../specification/requests/maps_http_geolocation_ip_request.yml'),
		}),
	},
	{
		regionTag: 'maps_http_geocode',
		request: new Request({
			url: new Url({
				protocol: 'https',
				host: 'maps.googleapis.com',
				path: '/maps/api/geocode/json',
				query: [{ key: 'address', value: '1600 Amphitheatre Parkway, Mountain View, CA' }],
			}),
		}),
	},
	{
		regionTag: 'maps_http_geocode_reverse',
		request: new Request({
			url: new Url({
				protocol: 'https',
				host: 'maps.googleapis.com',
				path: '/maps/api/geocode/json',
				query: [{ key: 'latlng', value: '40.714224,-73.961452' }],
			}),
		}),
	},
	{
		regionTag: 'maps_http_geocode_reverse_filtering',
		request: new Request({
			url: new Url({
				protocol: 'https',
				host: 'maps.googleapis.com',
				path: '/maps/api/geocode/json',
				query: [
					{ key: 'latlng', value: '40.714224,-73.961452' },
					{ key: 'location_type', value: 'ROOFTOP' },
					{ key: 'result_type', value: 'street_address' },
				],
			}),
		}),
	},
	{
		regionTag: 'maps_http_geocode_winnetka',
		request: new Request({
			url: new Url({
				protocol: 'https',
				host: 'maps.googleapis.com',
				path: '/maps/api/geocode/json',
				query: [{ key: 'address', value: 'Winnetka' }],
			}),
		}),
	},
	{
		regionTag: 'maps_http_geocode_winnetka_bounds',
		request: new Request({
			url: new Url({
				protocol: 'https',
				host: 'maps.googleapis.com',
				path: '/maps/api/geocode/json',
				query: [
					{ key: 'address', value: 'Winnetka' },
					{ key: 'bounds', value: '34.172684,-118.604794|34.236144,-118.500938' },
				],
			}),
		}),
	},
	{
		regionTag: 'maps_http_geocode_toledo',
		request: new Request({
			url: new Url({
				protocol: 'https',
				host: 'maps.googleapis.com',
				path: '/maps/api/geocode/json',
				query: [{ key: 'address', value: 'Toledo' }],
			}),
		}),
	},
	{
		regionTag: 'maps_http_geocode_toledo_region_es',
		request: new Request({
			url: new Url({
				protocol: 'https',
				host: 'maps.googleapis.com',
				path: '/maps/api/geocode/json',
				query: [
					{ key: 'address', value: 'Toledo' },
					{ key: 'region', value: 'es' },
				],
			}),
		}),
	},
	{
		regionTag: 'maps_http_geocode_components_filtering',
		request: new Request({
			url: new Url({
				protocol: 'https',
				host: 'maps.googleapis.com',
				path: '/maps/api/geocode/json',
				query: [
					{ key: 'address', value: 'high st hasting' },
					{ key: 'components', value: 'country:GB' },
				],
			}),
		}),
	},
	{
		regionTag: 'maps_http_geocode_components',
		request: new Request({
			url: new Url({
				protocol: 'https',
				host: 'maps.googleapis.com',
				path: '/maps/api/geocode/json',
				query: [{ key: 'components', value: 'locality:santa+cruz|country:ES' }],
			}),
		}),
	},
	{
		regionTag: 'maps_http_geocode_components_zero_results',
		request: new Request({
			url: new Url({
				protocol: 'https',
				host: 'maps.googleapis.com',
				path: '/maps/api/geocode/json',
				query: [{ key: 'components', value: 'administrative_area:TX|country:FR' }],
			}),
		}),
	},
	{
		regionTag: 'maps_http_geocode_components_zero_results_fixed',
		request: new Request({
			url: new Url({
				protocol: 'https',
				host: 'maps.googleapis.com',
				path: '/maps/api/geocode/json',
				query: [
					{
						key: 'components',
						value: 'components=route:Annankatu|administrative_area:Helsinki|country:Finland',
					},
				],
			}),
		}),
	},
	{
		regionTag: 'maps_http_geocode_place_id',
		request: new Request({
			url: new Url({
				protocol: 'https',
				host: 'maps.googleapis.com',
				path: '/maps/api/geocode/json',
				query: [
					{
						key: 'place_id',
						value: 'ChIJd8BlQ2BZwokRAFUEcm_qrcA',
					},
				],
			}),
		}),
	},
	{
		regionTag: 'maps_http_geocode_invalid_place',
		request: new Request({
			url: new Url({
				protocol: 'https',
				host: 'maps.googleapis.com',
				path: '/maps/api/geocode/json',
				query: [
					{
						key: 'place_id',
						value: '1234',
					},
				],
			}),
		}),
	},
	{
		regionTag: 'maps_http_geocode_zero_results',
		request: new Request({
			url: new Url({
				protocol: 'https',
				host: 'maps.googleapis.com',
				path: '/maps/api/geocode/json',
				query: [
					{ key: 'latlng', value: '0,0' },
					,
				],
			}),
		}),
	},
	{
		regionTag: 'maps_http_geocode_invalid_request',
		request: new Request({
			url: new Url({
				protocol: 'https',
				host: 'maps.googleapis.com',
				path: '/maps/api/geocode/json',
			}),
		}),
	},
];
