import http from 'k6/http'
import { check } from 'k6'

// const url = 'https://run.mocky.io/v3/d4271006-87e2-4ece-a772-163e663bafec'
const url = 'https://run.mocky.io/v3/e2f95c9a-6927-467b-8b2a-ffb4acd2ddd9' // message no response body

export let options = {
    vus: 1,
    duration: '1s'
}

export default function () {
    
    const response = http.get(url) 

    console.log(`response body length: ${response.body.length} for VU = ${__VU} ITERA = ${__ITER}`);
    
    check(response, {
        'response status code is 200': (r) => r.status === 200,
        'response status_text: 200 OK': (r) => r.status_text === '200 OK',
        'body size is 0 bytes': (r) => r.body.length == 0
    })
}