import http from 'k6/http'

export let options = {
    stages: [
        { target: 10, duration: '5s'},
        { target: 10, duration: '10s'},
        { target: 10, duration: '5s'}
    ]    
}

export default function () {
    http.get('https://www.google.com')
}