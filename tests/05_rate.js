import http from 'k6/http'
import { check } from 'k6'
import { Rate } from 'k6/metrics'

export let errorRate = new Rate('errors')

const url = 'https://run.mocky.io/v3/e2f95c9a-6927-467b-8b2a-ffb4acd2ddd9' // message no response body

export let options = {
    vus: 10,
    duration: '5s',
    thresholds: {
        errors: ['rate < 0.1']
    }
}

export default function () {
    
    const response = http.get(url) 
    
    console.log(`response body length: ${response.body.length} for VU = ${__VU} ITERA = ${__ITER}`);
    
    const check1 = check(response, {
        'response status code is 200': (r) => r.status === 200
    })
    errorRate.add(!check1)

    const check2 = check(response, {
        'body size is 12 bytes': (r) => r.body.length == 12
    })
    errorRate.add(!check2)
}