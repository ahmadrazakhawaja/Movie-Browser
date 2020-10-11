export const fetchMovies = async (title,type) => {
  if(type===""){
    const response = await fetch(`http://www.omdbapi.com/?s=${title}&page=1&apikey=56c365e2`)
    const results = await response.json()
    return results
  }
  else{
    const response = await fetch(`http://www.omdbapi.com/?s=${title}&type=${type}&page=1&apikey=56c365e2`)
    const results = await response.json()
    return results
  }
}

export const fetchTitle = async (title) => {
    const response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=56c365e2`)
    const results = await response.json()
    return results
}

export const fetchpages = async (title,page) => {
  const response = await fetch(`http://www.omdbapi.com/?s=${title}&page=${page}&apikey=56c365e2`)
  const results = await response.json()
  return results
}

export const fetchid = async (id) => {
  const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=56c365e2`)
  const results = await response.json()
  return results
}