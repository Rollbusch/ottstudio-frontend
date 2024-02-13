export async function getData (endpoint) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    }
  })
  if (!data.ok) return { data: [] }
  return await data.json()
}

export const getImageUrl = (imageUrl) => {
  if (!imageUrl) return ''
  const url = `${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`
  return url
}