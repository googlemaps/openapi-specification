// [START maps_http_geolocation_wifi]
package main

import (
    "fmt"
    "strings"
    "net/http"
    "io/ioutil"
)

func main() {

    url := "https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY"
    method := "POST"

    payload := strings.NewReader(`{
  "considerIp": "false",
  "wifiAccessPoints": [
    {
      "macAddress": "00:25:9c:cf:1c:ac",
      "signalStrength": -43,
      "signalToNoiseRatio": 0
    },
    {
      "macAddress": "00:25:9c:cf:1c:ad",
      "signalStrength": -55,
      "signalToNoiseRatio": 0
    }
  ]
}`)

    client := &http.Client {
    }
    req, err := http.NewRequest(method, url, payload)

    if err != nil {
        fmt.Println(err)
        return
    }
    req.Header.Add("content-type", "application/json")

    res, err := client.Do(req)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer res.Body.Close()

    body, err := ioutil.ReadAll(res.Body)
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println(string(body))
}
// [END maps_http_geolocation_wifi]