// [START maps_http_places_queryautocomplete_location_weighted]
package main

import (
  "fmt"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=Market%20in%20Barcelona&location=42.3675294,-71.186966&radius=10000&key=YOUR_API_KEY"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
    return
  }
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
// [END maps_http_places_queryautocomplete_location_weighted]