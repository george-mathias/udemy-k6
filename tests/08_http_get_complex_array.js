import http from 'k6/http'

export const options = {
    vus: 1,
    duration: '1s'
}

const url = 'https://run.mocky.io/v3/58a861a1-28f9-4c17-8a3d-1742d200500c'

export default function () {

    const response = http.get(url)

    const body = JSON.parse(response.body)

    body.data.forEach(element => {
        console.log(`name: ${element.name}`);
        
        element.array.forEach((elementArray) => {
            console.log(`elementArray: ${elementArray}`);
            
        })
    });
}



// {
//     "data": [
//         {
//             "name": "George Mathias",
//             "email": "george@gmail.com",
//             "job": "NTT DATA",
//             "location": "Rio de Janeiro",
//             "array": [
//                 1,
//                 2,
//                 3
//             ]
//         },
//         {
//             "name": "Nataly Farache",
//             "email": "nataly@hotmail.com",
//             "job": "Corp Laser",
//             "location": "Barra da Tijuca",
//             "array": [
//                 4,
//                 5,
//                 6
//             ]
//         },
//         {
//             "name": "Letícia Mathias",
//             "email": "leticia@gmail.com",
//             "job": "estudante 1 ano",
//             "location": "Escola",
//             "array": [
//                 7,
//                 8,
//                 9
//             ]
//         },
//         {
//             "name": "Gustavo Mathias",
//             "email": "gustavo@io",
//             "job": "1 ano estudante",
//             "location": "Escola ao lado de casa",
//             "array": [
//                 11,
//                 12,
//                 13
//             ]
//         },
//         {
//             "name": "João Gabriel",
//             "email": "buzuzungo@gmail.com",
//             "job": "estudante",
//             "location": "outra igarape açu",
//             "array": [
//                 14,
//                 15,
//                 16
//             ]
//         }
//     ]
// }