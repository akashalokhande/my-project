const Locationlist = require("../model/location.json")

module.exports.getlocationlist = (request,response)=>{
    let senddata = {
        status: true,
        location:Locationlist
    }
    response.send(senddata)

}