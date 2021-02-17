# Copyright 2021 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

load("@npm//swagger-cli:index.bzl", "swagger_cli", "swagger_cli_test")

def bundle(name, data, entry, visibility = ["//visibility:public"]):
    JSON_FILENAME = "{}.json".format(name)

    swagger_cli(
        name = "raw",
        outs = ["raw.json"],
        args = ["bundle", entry, "--type", "json", "--outfile $@"],
        data = data,
    )

    # example(s) fields cannot have $ref and must be dereferenced
    native.genrule(
        name = "{}-json".format(name),
        outs = [JSON_FILENAME],
        cmd = "$(location //rules:dereference) --spec $(location //:raw.json) --output $@",
        srcs = data + [":raw.json"],
        tools = ["//rules:dereference"],
        visibility = visibility,
    )

    swagger_cli(
        name = "{}-yaml".format(name),
        outs = ["{}.yml".format(name)],
        args = ["bundle", "$(location {})".format(JSON_FILENAME), "--type", "yaml", "--outfile $@"],
        data = [JSON_FILENAME],
    )

def validate(name, data):
    swagger_cli_test(
        name = "{}-validation".format(name),
        args = ["validate", "$(location {})".format(data)],
        data = [data],
    )
