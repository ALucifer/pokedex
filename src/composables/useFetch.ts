export async function useFetch<T>(url: string): Promise<T> {
  const data = await fetch(url)

  return await data.json()
}
