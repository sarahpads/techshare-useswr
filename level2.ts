import useSWR from 'swr'

const personFetcher = async (id: string) => {
  const response = await fetch(`https://swapi.dev/api/people/${id}`)
  return response.json()
}

useSWR('1', personFetcher)
