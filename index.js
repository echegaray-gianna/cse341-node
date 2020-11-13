const PORT = process.env.PORT || 5000


var express = require('express');
var app = express();

//to plain htm, img, css 
app.use(express.static("public"));


// for the views
app.set("views", "views");
// set the view engine to ejs
app.set('view engine', 'ejs');
// use res.render to load up an ejs view file



app.get('/getPrice', handlePrice);

app.get('/getPriceT', handlePriceT);


app.listen(PORT);
console.log('http://localhost:5000/');





function handlePrice(req, res) {

    const weight = Number(req.query.weight);
    const unit = req.query.units;
    const type = req.query.mailType;

    let price;

    switch (type) {

        case "Letters (Stamped)":

            if (unit === "ounce" && weight <3.5) {

                if (weight <= 1) {
                    price = "$0.55";
                } else if (weight <= 2) {
                    price = "$0.70";
                } else if (weight <= 3) {
                    price = "$0.85";
                } else if (weight <= 3.5) {
                    price = "$1.00";
                }

            } else {

                return res.render("pages/nofound");
                
            }

            break;

        case "Letters (Metered)":

            if (unit === "ounce" && weight <3.5) {

                if (weight <= 1) {
                    price = "$0.50";
                } else if (weight <= 2) {
                    price = "$0.65";
                } else if (weight <= 3) {
                    price = "$0.80";
                } else if (weight <= 3.5) {
                    price = "$0.95";
                }

            } else {

                return res.render("pages/nofound");
            }

            break;


        case "Large Envelopes (Flats)":

            if (unit === "ounce") {

                if (weight <= 1) {
                    price = "$1.00";
                } else if (weight <= 2) {
                    price = "$1.20";
                } else if (weight <= 3) {
                    price = "$1.40";
                } else if (weight <= 4) {
                    price = "$1.60";
                } else if (weight <= 5) {
                    price = "$1.80";
                } else if (weight <= 6) {
                    price = "$2.00";
                } else if (weight <= 7) {
                    price = "$2.20";
                } else if (weight <= 8) {
                    price = "$2.40";
                } else if (weight <= 9) {
                    price = "$2.60";
                } else if (weight <= 10) {
                    price = "$2.80";
                } else if (weight <= 11) {
                    price = "$3.00";
                } else if (weight <= 12) {
                    price = "$3.20";
                } else if (weight <= 13) {
                    price = "$3.40";
                }

            } else {
                
                return res.render("pages/nofound");

            }

            break;

        case "Keys and Identification Devices":

            if (unit === "ounce") {

                if (weight <= 1) {
                    price = "$3.65";
                } else if (weight <= 2) {
                    price = "$3.85";
                } else if (weight <= 3) {
                    price = "$4.05";
                } else if (weight <= 4) {
                    price = "$4.25";
                } else if (weight <= 5) {
                    price = "$4.45";
                } else if (weight <= 6) {
                    price = "$4.65";
                } else if (weight <= 7) {
                    price = "$4.85";
                } else if (weight <= 8) {
                    price = "$5.05";
                } else if (weight <= 9) {
                    price = "$5.25";
                } else if (weight <= 10) {
                    price = "$5.45";
                } else if (weight <= 11) {
                    price = "$5.65";
                } else if (weight <= 12) {
                    price = "$5.85";
                } else if (weight <= 13) {
                    price = "$6.05";
                }
            } else {

                if (weight <= 1) {
                    price = "$8.85";
                } else if (weight <= 2) {
                    price = "$10.75";
                } else {

                    return res.render("pages/nofound");

                }
            }

        break;
    

    }


    const params = {
        weight: weight,
        unit: unit,
        type: type,
        price: price,
    };

    res.render("pages/getRate", params)
    console.log(price);



};



function handlePriceT(req, res) {

    const weight = Number(req.query.weightT);
    const zone = req.query.zones;


    let price;


    switch (zone) {

        case "1":

            if (weight <= 1) {
                price = "$3.80";
            } else if (weight <= 2) {
                price = "$3.80";
            } else if (weight <= 3) {
                price = "$3.80";
            } else if (weight <= 4) {
                price = "$3.80";
            } else if (weight <= 5) {
                price = "$4.60";
            } else if (weight <= 6) {
                price = "$4.60";
            } else if (weight <= 7) {
                price = "$4.60";
            } else if (weight <= 8) {
                price = "$4.60";
            } else if (weight <= 9) {
                price = "$5.30";
            } else if (weight <= 10) {
                price = "$5.30";
            } else if (weight <= 11) {
                price = "$5.30";
            } else if (weight <= 12) {
                price = "$5.30";
            } else if (weight <= 13) {
                price = "$5.90";
            }

            break;

        case "2":
            if (weight <= 1) {
                price = "$3.80";
            } else if (weight <= 2) {
                price = "$3.80";
            } else if (weight <= 3) {
                price = "$3.80";
            } else if (weight <= 4) {
                price = "$3.80";
            } else if (weight <= 5) {
                price = "$4.60";
            } else if (weight <= 6) {
                price = "$4.60";
            } else if (weight <= 7) {
                price = "$4.60";
            } else if (weight <= 8) {
                price = "$4.60";
            } else if (weight <= 9) {
                price = "$5.30";
            } else if (weight <= 10) {
                price = "$5.30";
            } else if (weight <= 11) {
                price = "$5.30";
            } else if (weight <= 12) {
                price = "$5.30";
            } else if (weight <= 13) {
                price = "$5.90";
            }

            break;


        case "3":
            if (weight <= 1) {
                price = "$3.85";
            } else if (weight <= 2) {
                price = "$3.85";
            } else if (weight <= 3) {
                price = "$3.85";
            } else if (weight <= 4) {
                price = "$3.85";
            } else if (weight <= 5) {
                price = "$4.65";
            } else if (weight <= 6) {
                price = "$4.65";
            } else if (weight <= 7) {
                price = "$4.65";
            } else if (weight <= 8) {
                price = "$4.65";
            } else if (weight <= 9) {
                price = "$5.35";
            } else if (weight <= 10) {
                price = "$5.35";
            } else if (weight <= 11) {
                price = "$5.35";
            } else if (weight <= 12) {
                price = "$5.35";
            } else if (weight <= 13) {
                price = "$5.95";
            }

         break;

        case "4":
            if (weight <= 1) {
                price = "$3.90";
            } else if (weight <= 2) {
                price = "$3.90";
            } else if (weight <= 3) {
                price = "$3.90";
            } else if (weight <= 4) {
                price = "$3.90";
            } else if (weight <= 5) {
                price = "$4.70";
            } else if (weight <= 6) {
                price = "$4.70";
            } else if (weight <= 7) {
                price = "$4.70";
            } else if (weight <= 8) {
                price = "$4.70";
            } else if (weight <= 9) {
                price = "$5.40";
            } else if (weight <= 10) {
                price = "$5.40";
            } else if (weight <= 11) {
                price = "$5.40";
            } else if (weight <= 12) {
                price = "$5.40";
            } else if (weight <= 13) {
                price = "$6.05";
            }

        break;

        case "5":
            if (weight <= 1) {
                price = "$3.95";
            } else if (weight <= 2) {
                price = "$3.95";
            } else if (weight <= 3) {
                price = "$3.95";
            } else if (weight <= 4) {
                price = "$3.95";
            } else if (weight <= 5) {
                price = "$4.75";
            } else if (weight <= 6) {
                price = "$4.75";
            } else if (weight <= 7) {
                price = "$4.75";
            } else if (weight <= 8) {
                price = "$4.75";
            } else if (weight <= 9) {
                price = "$5.45";
            } else if (weight <= 10) {
                price = "$5.45";
            } else if (weight <= 11) {
                price = "$5.45";
            } else if (weight <= 12) {
                price = "$5.45";
            } else if (weight <= 13) {
                price = "$6.15";
            }

        break;

        case "6":
            if (weight <= 1) {
                price = "$4.00";
            } else if (weight <= 2) {
                price = "$4.00";
            } else if (weight <= 3) {
                price = "$4.00";
            } else if (weight <= 4) {
                price = "$4.00";
            } else if (weight <= 5) {
                price = "$4.70";
            } else if (weight <= 6) {
                price = "$4.70";
            } else if (weight <= 7) {
                price = "$4.70";
            } else if (weight <= 8) {
                price = "$4.70";
            } else if (weight <= 9) {
                price = "$5.40";
            } else if (weight <= 10) {
                price = "$5.40";
            } else if (weight <= 11) {
                price = "$5.40";
            } else if (weight <= 12) {
                price = "$5.40";
            } else if (weight <= 13) {
                price = "$6.15";
            }

        break;

        case "7":
            if (weight <= 1) {
                price = "$4.05";
            } else if (weight <= 2) {
                price = "$4.05";
            } else if (weight <= 3) {
                price = "$4.05";
            } else if (weight <= 4) {
                price = "$4.05";
            } else if (weight <= 5) {
                price = "$4.90";
            } else if (weight <= 6) {
                price = "$4.90";
            } else if (weight <= 7) {
                price = "$4.90";
            } else if (weight <= 8) {
                price = "$4.90";
            } else if (weight <= 9) {
                price = "$5.65";
            } else if (weight <= 10) {
                price = "$5.65";
            } else if (weight <= 11) {
                price = "$5.65";
            } else if (weight <= 12) {
                price = "$5.65";
            } else if (weight <= 13) {
                price = "$6.40";
            }

        break;

        case "8":
            if (weight <= 1) {
                price = "$4.20";
            } else if (weight <= 2) {
                price = "$4.20";
            } else if (weight <= 3) {
                price = "$4.20";
            } else if (weight <= 4) {
                price = "$4.20";
            } else if (weight <= 5) {
                price = "$5.00";
            } else if (weight <= 6) {
                price = "$5.00";
            } else if (weight <= 7) {
                price = "$5.00";
            } else if (weight <= 8) {
                price = "$5.00";
            } else if (weight <= 9) {
                price = "$5.75";
            } else if (weight <= 10) {
                price = "$5.75";
            } else if (weight <= 11) {
                price = "$5.75";
            } else if (weight <= 12) {
                price = "$5.75";
            } else if (weight <= 13) {
                price = "$6.50";
            }

        break;

        case "9":
            if (weight <= 1) {
                price = "$4.20";
            } else if (weight <= 2) {
                price = "$4.20";
            } else if (weight <= 3) {
                price = "$4.20";
            } else if (weight <= 4) {
                price = "$4.20";
            } else if (weight <= 5) {
                price = "$5.00";
            } else if (weight <= 6) {
                price = "$5.00";
            } else if (weight <= 7) {
                price = "$5.00";
            } else if (weight <= 8) {
                price = "$5.00";
            } else if (weight <= 9) {
                price = "$5.75";
            } else if (weight <= 10) {
                price = "$5.75";
            } else if (weight <= 11) {
                price = "$5.75";
            } else if (weight <= 12) {
                price = "$5.75";
            } else if (weight <= 13) {
                price = "$6.50";
            }

        break;



    }


    const params = {
        weight: weight,
        zone: zone,
        price: price
    };

    res.render("pages/getRateT", params)
    console.log(price);


};