import http from 'k6/http'

export const options = {
    vus: 1,
    duration: '1s'
}

const url = 'https://run.mocky.io/v3/6eaa0552-6259-4436-b684-9cc737e468cf'

export default function () {

    const response = http.get(url)

    // console.log(`response: ${response.body}`);
    const body = JSON.parse(response.body)

    body.forEach(element => {
        console.log(`    name: ${element.name}`);
        console.log(`   email: ${element.email}`);
        console.log(`     job: ${element.job}`);
        console.log(`location: ${element.location}`);
        console.log('\n');
    });

    
}

// [
//     {
//         "name": "George Mathias",
//         "email": "george@gmail.com",
//         "job": "NTT DATA",
//         "location": "Rio de Janeiro"
//     },
//     {
//         "name": "Nataly Farache",
//         "email": "nataly@hotmail.com",
//         "job": "Corp Laser",
//         "location": "Barra da Tijuca"
//     },
//     {
//         "name": "Letícia Mathias",
//         "email": "leticia@gmail.com",
//         "job": "estudante 1 ano",
//         "location": "Escola"
//     },
//     {
//         "name": "Gustavo Mathias",
//         "email": "gustavo@io",
//         "job": "1 ano estudante",
//         "location": "Escola ao lado de casa"
//     },
//     {
//         "name": "João Gabriel",
//         "email": "buzuzungo@gmail.com",
//         "job": "estudante",
//         "location": "outra igarape açu"
//     }
// ]