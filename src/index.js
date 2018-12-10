//import sjcl from './sjcl'

global.doGet = function(request){
  // return ContentService.createTextOutput(sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash("hello")))
  return ContentService.createTextOutput("Hello world")
}
