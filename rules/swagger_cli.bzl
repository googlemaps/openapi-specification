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
