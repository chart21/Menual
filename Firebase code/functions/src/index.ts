import * as functions from 'firebase-functions';
import * as req from 'request';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const detectText = functions.https.onRequest((request, response) => {
    console.log(request.body);

    req.post({
        url: 'https://vision.googleapis.com/v1/images:annotate?key=ADDYOURKEY',
        body: request.body
    }, function (error, tdRes, body) {

        if (!error && response.statusCode == 200) {
            const jsonResponse = JSON.parse(body);
            response.json(jsonResponse);
        }
        else {
            console.log(error);
        }
    })
});

export const getNutrition = functions.https.onRequest((request, response) => {
    console.log("new api");
    console.log(request.body);

    req.post({
        url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
        body: request.body,
        headers: {
            'User-Agent': 'request',
            "x-app-id": "d869ed82",
            "x-app-key": "Add your key",
            "x-user-jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzUzMTQ3LCJpYXQiOjE1Mjg2NzAwOTMsImV4cCI6MTUzMTM0ODQ5M30.RdHXW5dzxypQ3OUIIlrDIoI81fYViRt8qabAviRq-1c"
        }
    }, function (error, fbRes, body) {

        if (!error && response.statusCode == 200) {

            const jsonResponse = JSON.parse(body);
            console.log(jsonResponse);
            response.json(jsonResponse);
        }
        else {
            console.log(error);
        }
    })
});
