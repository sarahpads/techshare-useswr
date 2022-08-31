import useSWR from 'swr'

enum Endpoint {
  PERSON = 'PERSON',
  PREFERENCES = 'PREFERENCES'
}

useSWR([Endpoint.PERSON, '1'], customFetcher)
useSWR(Endpoint.PREFERENCES, customFetcher)

var customFetcher = async (endpoint: Endpoint, ...args) => {
  switch (endpoint) {
    case Endpoint.PERSON:
      return personFetcher(args[0])

    case Endpoint.PREFERENCES:
      return preferenceFetcher()
  }
}

const personFetcher = async (id: string) => {
  const response = await fetch(`https://swapi.dev/api/people/${id}`)
  return response.json()
}

const preferenceFetcher = () => {
  const data = localStorage.getItem('preferences')

  try {
    const value = JSON.parse(data)
    return value
  } catch (error) {
    console.log(error)
    return {}
  }
}
