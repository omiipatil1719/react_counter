export const fetchData = (url, setter, method = 'GET') => {
    return fetch(url, { method: method })
        .then(res => res.json())
        .then(data => setter(data))
        .catch(err => { });
}