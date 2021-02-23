// [START maps_http_geocode]
package main

import (
  "fmt"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://maps.googleapis.com/maps/api/geocode/json?address=1600%20Amphitheatre%20Parkway,%20Mountain%20View,%20CA&key=YOUR_API_KEY"
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
// [END maps_http_geocode]