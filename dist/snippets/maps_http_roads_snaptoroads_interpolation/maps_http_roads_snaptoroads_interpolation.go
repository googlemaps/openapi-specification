// [START maps_http_roads_snaptoroads_interpolation]
package main

import (
  "fmt"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://roads.googleapis.com/v1/snapToRoads?path=-35.27801,149.12958%7C-35.28032,149.12907%7C-35.28099,149.12929%7C-35.28144,149.12984%7C-35.28194,149.13003%7C-35.28282,149.12956%7C-35.28302,149.12881%7C-35.28473,149.12836&interpolate=true&key=YOUR_API_KEY"
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
// [END maps_http_roads_snaptoroads_interpolation]