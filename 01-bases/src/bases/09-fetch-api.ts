const apiKey = 'OVyXC0RkOlfQqG9wSdXJZVIHFUrrSVSh'

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
.then(resp => {
    return resp.json()
})
.then(body =>console.log(body))
.catch(err => console.info(err))