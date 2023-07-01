const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");
const https = require("https");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.get("/success", (req, res) => {
  res.sendFile(__dirname + "/successpage.html");
});
app.get("/failure", (req, res) => {
  res.sendFile(__dirname + "/failpage.html");
});
app.post("/failure", (req, res) => {
  res.redirect("/");
});
app.post("/success", (req, res) => {
  res.redirect("/");
});

app.post("/", (req, res) => {
  var email = req.body.email;
  var fname = req.body.fname;
  var lname = req.body.lname;
  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: fname,
          LNAME: lname
        }
      }
    ]
  };
  var jsonData = JSON.stringify(data);
  //This API is revoked - To run this app please change the API 
  const url = "https://us21.api.mailchimp.com/3.0/lists/de42c89d43";

  const options = {
    method: "POST",
    auth: "parteekishere:9f38748d38a91f7686c63e1ad241f6e8-us21"
  };

  const requ = https.request(url, options, (response) => {
    if(response.statusCode===200){
        res.redirect("/success");
    }
    else{
        res.redirect("/failure");
    }
    response.on("data", (data) => {
      console.log(data);
        console.log(JSON.parse(data));
    });
  });

  requ.write(jsonData);
  requ.end();

  console.log("hii "+email, fname, lname);
});

app.listen(3000, (error) => {
  console.log('Server is running on port 3000' + error);
});
