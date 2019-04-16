require 'net/http'
require 'uri'

(0..10000).each { |i|
  if (i%5==0)
    uri = URI.parse("http://localhost:9999/404")
  else
    uri = URI.parse("http://localhost:9999/")
  end
  response = Net::HTTP.get_response(uri)
  sleep 0.7
}
