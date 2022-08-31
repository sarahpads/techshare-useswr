import useSWR from 'swr'

const fetcher = async (url: string) => {
  const response = await fetch(url)
  return response.json()
}

useSWR('https://swapi.dev/api/people/1/', fetcher)
