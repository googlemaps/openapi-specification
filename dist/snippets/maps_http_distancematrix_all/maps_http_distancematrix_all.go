// [START maps_http_distancematrix_all]
package main

import (
  "fmt"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Seattle,%20WA&destinations=North%20Fork,%20WA&avoid=highways&units=imperial&arrival_time=1614709737&traffic_model=pessimistic&mode=transit&transit_mode=bus&transit_routing_preference=less_walking&key=YOUR_API_KEY"
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
// [END maps_http_distancematrix_all]