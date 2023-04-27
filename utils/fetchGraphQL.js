const fetchGraphQL = async (query, { variables } = {}, cacheOption) => {
  const headers = { 'Content-Type': 'application/json' }

  const res = await fetch("https://creativevibesid.000webhostapp.com/graphql", {
    method: "POST",
    cache: cacheOption,
    next: {
      revalidate: 60*60*24
    },
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    return {
      error: true
    }
  }
  return json.data
}

export default fetchGraphQL