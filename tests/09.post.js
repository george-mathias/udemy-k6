import http from 'k6/http'

export const options = {
    vus: 1,
    duration: '1s'
}

const url = 'https://run.mocky.io/v3/ed419e07-6d88-4764-b05c-ecac609f0828'
const param = {
    headers: {
        'Content-Type': 'application/json'
    }
}
const payload = JSON.stringify({
    email: 'abc@gmail.com',
    password: 'Abc123'
})

export default function () {

    const response = http.post(url, param, payload)
    
    console.log(`response: ${response}`);
    console.log(`responseTypeOf: ${typeof(response)}`);
    console.log(`responseLength: ${response.length}`);
    console.log(`responseBodyTypeOf: ${typeof(response.body)}`);
    console.log(`responseBodyLength: ${response.body.length}`);    
}