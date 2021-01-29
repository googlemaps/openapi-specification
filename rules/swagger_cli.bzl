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

def bundle(name, type, data, entry, visibility = ["//visibility:public"]):
    if type == "yaml":
        extension = "yml"
    else:
        extension = "json"

    swagger_cli(
        name = "{}-{}".format(name, type),
        outs = ["{}.{}".format(name, extension)],
        args = ["bundle", entry, "--type", type, "--outfile $@"],
        data = data,
        visibility = visibility,
    )

def validate(name, data):
    swagger_cli_test(
        name = "{}-validation".format(name),
        args = ["validate", "$(location {})".format(data)],
        data = [data],
    )
