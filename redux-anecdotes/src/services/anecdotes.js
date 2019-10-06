import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (newObj) => {
  const response = await axios.post(baseUrl, newObj)
  return response.data
}

const update = async (id, updated) => {
  const response = await axios.put(`${baseUrl}/${id}`, updated)
  return response.data
}

export default { getAll, createNew, update }