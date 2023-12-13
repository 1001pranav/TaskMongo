import { RESPONSE } from "../constant/response.js";

export default function (req, res, next) {
    const response = {
        ...RESPONSE.SERVER_ERROR,
        data: {}
    };
    console.log("Handling response", res.response);
    try {
        if ("status" in res.response) {
            if (res.response.status === 200) {
                response.status = RESPONSE.SUCCESS.status;
                response.message = RESPONSE.SUCCESS.message;
            }
        }
        if ("message" in res.response) {
            if (res.response.message in RESPONSE) {
                response.status = RESPONSE[res.response.message].status;
                response.message = RESPONSE[res.response.message].message;
            }
        }
        if ("data" in res.response) {
            response.data = res.response.data;
        }
        console.log(JSON.stringify(response));

        res.status(response.status).json(response);
        next()
    } catch (error) {
        console.log("error on response helper", error)
        // res.status(response.status);
        res.json(response);
        return ;
    }
}