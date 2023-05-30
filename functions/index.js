const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51MwS1JCSmqiMocCbz1PLkgwbLuVOAeRW6gGmBR8nr09M0is1ikpU0zMpvcgPdfp2zhaEh1RyKCOwNbsCVK9xOJ8700fqoZZZfo")


// API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
    const total =request.query.total;

    console.log("Payment Request Received BOOM!!! for this amount >>>", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });
    // OK -Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});


// Listen commands
exports.api=functions.https.onRequest(app);
