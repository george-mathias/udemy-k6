import http from 'k6/http'
import { check } from 'k6'

export let options = {
    vus: 1,
    duration: '1s'
}

export default function () {
    const response = http.get('https://run.mocky.io/v3/d4271006-87e2-4ece-a772-163e663bafec')

    check(response, {
        'response status code is 200': (r) => r.status === 200,
        'response status_text: 200 OK': (r) => r.status_text === '200 OK'
    })
}