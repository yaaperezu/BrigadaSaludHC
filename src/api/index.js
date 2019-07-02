const URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchSchedule = () => {
    console.log(URL);
    return fetch(URL)
        .then(Response => {
            return Promise.all([Response, Response.json()])
        })
}
