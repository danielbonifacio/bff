import axios from 'axios'

/**
 * Add a new pet to the store
 * @param body Pet object that needs to be added to the store
  */
export const addPet = async (body) => {
  return axios.post('http://batata/pet', { body })
}

/**
 * Update an existing pet
 * @param body Pet object that needs to be added to the store
  */
export const updatePet = async (body) => {
  return axios.put('http://batata/pet', { body })
}

/**
 * Finds Pets by status
 * @param status Status values that need to be considered for filter
  */
export const findPetsByStatus = async (status) => {
  return axios.get(`http://batata/pet/findByStatus?status=${status}`)
}

/**
 * Finds Pets by tags
 * @param tags Tags to filter by
  */
export const findPetsByTags = async (tags) => {
  return axios.get(`http://batata/pet/findByTags?tags=${tags}`)
}

/**
 * Find pet by ID
 * @param petId ID of pet to return
  */
export const getPetById = async (petId) => {
  return axios.get(`http://batata/pet/${petId}`)
}

/**
 * Updates a pet in the store with form data
 * @param petId ID of pet that needs to be updated
 * @param name Updated name of the pet
 * @param status Updated status of the pet
  */
export const updatePetWithForm = async (petId, name, status) => {
  return axios.post(`http://batata/pet/${petId}`, { name, status })
}

/**
 * Deletes a pet
 * @param petId Pet id to delete
  */
export const deletePet = async (petId) => {
  return axios.delete(`http://batata/pet/${petId}`)
}

/**
 * uploads an image
 * @param petId ID of pet to update
 * @param additionalMetadata Additional data to pass to server
 * @param file file to upload
  */
export const uploadFile = async (petId, additionalMetadata, file) => {
  return axios.post(`http://batata/pet/${petId}/uploadImage`, { additionalMetadata, file })
}

/**
 * Returns pet inventories by status
  */
export const getInventory = async () => {
  return axios.get('http://batata/store/inventory')
}

/**
 * Place an order for a pet
 * @param body order placed for purchasing the pet
  */
export const placeOrder = async (body) => {
  return axios.post('http://batata/store/order', { body })
}

/**
 * Find purchase order by ID
 * @param orderId ID of pet that needs to be fetched
  */
export const getOrderById = async (orderId) => {
  return axios.get(`http://batata/store/order/${orderId}`)
}

/**
 * Delete purchase order by ID
 * @param orderId ID of the order that needs to be deleted
  */
export const deleteOrder = async (orderId) => {
  return axios.delete(`http://batata/store/order/${orderId}`)
}

/**
 * Create user
 * @param body Created user object
  */
export const createUser = async (body) => {
  return axios.post('http://batata/user', { body })
}

/**
 * Creates list of users with given input array
 * @param body List of user object
  */
export const createUsersWithArrayInput = async (body) => {
  return axios.post('http://batata/user/createWithArray', { body })
}

/**
 * Creates list of users with given input array
 * @param body List of user object
  */
export const createUsersWithListInput = async (body) => {
  return axios.post('http://batata/user/createWithList', { body })
}

/**
 * Logs user into the system
 * @param username The user name for login
 * @param password The password for login in clear text
  */
export const loginUser = async (username, password) => {
  return axios.get(`http://batata/user/login?username=${username}&password=${password}`)
}

/**
 * Logs out current logged in user session
  */
export const logoutUser = async () => {
  return axios.get('http://batata/user/logout')
}

/**
 * Get user by user name
 * @param username The name that needs to be fetched. Use user1 for testing.
  */
export const getUserByName = async (username) => {
  return axios.get(`http://batata/user/${username}`)
}

/**
 * Updated user
 * @param username name that need to be updated
 * @param body Updated user object
  */
export const updateUser = async (username, body) => {
  return axios.put(`http://batata/user/${username}`, { body })
}

/**
 * Delete user
 * @param username The name that needs to be deleted
  */
export const deleteUser = async (username) => {
  return axios.delete(`http://batata/user/${username}`)
}
