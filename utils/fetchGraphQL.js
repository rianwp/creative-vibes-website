const fetchGraphQL = async (query, { variables } = {}, cacheOption) => {
  const headers = { 'Content-Type': 'application/json' }

  const res = await fetch(`${process.env.WP_URL}/graphql`, {
    method: "POST",
    cache: cacheOption,
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