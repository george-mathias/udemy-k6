import { check } from 'k6'
import http from 'k6/http'

export const options = {
    vus: 1,
    duration: '1s'
}

export default function () {
    const url = 'https://run.mocky.io/v3/ddfbb8aa-ee8d-455e-bf42-38a3e90c7a9b'
    const headerParam = {
        headers: {
            'Content-Type': 'application/json'
        }
    }    
    const response = http.get(url, headerParam)
    const body = JSON.parse(response.body)  // convertendo para objeto

    console.log(`stringfy body: ${JSON.stringify(body)}`);
    console.log(`response body: ${response.body}`);
    console.log(`Message is: ${body.Message}`);

    check(response, {
        'is status is 200: ': (r) => r.status === 200
    })
    check(response, {
        'is message is: "Data Fetched Successfully!"': (r) => JSON.parse(r.body).Message === "Data Fetched Successfully!"
    })   
    
}