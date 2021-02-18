// [START maps_http_geolocation_celltowers]
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
  "cellTowers": [
    {
      "cellId": 170402199,
      "locationAreaCode": 35632,
      "mobileCountryCode": 310,
      "mobileNetworkCode": 410,
      "age": 0,
      "signalStrength": -60,
      "timingAdvance": 15
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
// [END maps_http_geolocation_celltowers]