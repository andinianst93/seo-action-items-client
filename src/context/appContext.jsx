import axios from 'axios'
import '../axios'
import React, { useContext, useEffect, useReducer } from 'react'
import {
  SET_LOADING,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  SET_USER,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_ERROR,
  LOGOUT_USER,
  CREATE_ITEM_SUCCESS,
  CREATE_ITEM_ERROR,
  DELETE_ITEM_ERROR,
  FETCH_SINGLE_ITEM_SUCCESS,
  FETCH_SINGLE_ITEM_ERROR,
  EDIT_ITEM_SUCCESS,
  EDIT_ITEM_ERROR,
} from './actions'
import reducer from './reducer'

const initialState = {
  user: null,
  isLoading: 'false',
  items: [],
  showAlert: false,
  editItem: null,
  singleItemError: false,
  editComplete: false,
}
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const setLoading = () => {
    dispatch({ type: SET_LOADING })
  }
  // register
  const register = async (userInput) => {
    setLoading()
    try {
      const { data } = await axios.post(`/auth/register`, { ...userInput })
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user.name })
      localStorage.setItem(
        'user',
        JSON.stringify({ name: data.user.name, token: data.token })
      )
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR })
    }
  }
  // login
  const login = async (userInput) => {
    setLoading()
    try {
      const { data } = await axios.post(`/auth/login`, { ...userInput })
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user.name })
      localStorage.setItem(
        'user',
        JSON.stringify({ name: data.user.name, token: data.token })
      )
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR })
    }
  }
  // logout
  const logout = () => {
    localStorage.removeItem('user')
    dispatch({ type: LOGOUT_USER })
  }
  // fetch item
  const fetchItems = async () => {
    setLoading()
    try {
      const { data } = await axios.get(`/items`)
      dispatch({ type: FETCH_ITEMS_SUCCESS, payload: data.items })
    } catch (error) {
      dispatch({ type: FETCH_ITEMS_ERROR })
      logout()
    }
  }
  // create item
  const createItem = async (userInput) => {
    setLoading()
    try {
      const { data } = await axios.post(`/items`, { ...userInput })
      dispatch({ type: CREATE_ITEM_SUCCESS, payload: data.item })
    } catch (error) {
      dispatch({ type: CREATE_ITEM_ERROR })
    }
  }
  // delete item
  const deleteItem = async (itemId) => {
    setLoading()
    try {
      await axios.delete(`/items/${itemId}`)
      fetchItems()
    } catch (error) {
      dispatch({ type: DELETE_ITEM_ERROR })
    }
  }
  // fetch single item
  const fetchSingleItem = async (itemId) => {
    setLoading()
    try {
      const { data } = await axios.get(`/items/${itemId}`)
      dispatch({ type: FETCH_SINGLE_ITEM_SUCCESS, payload: data.singleItem })
    } catch (error) {
      dispatch({ FETCH_SINGLE_ITEM_ERROR })
    }
  }
  // edit item
  const editSingleItem = async (itemId, userInput) => {
    setLoading()
    try {
      const { data } = await axios.patch(`/items/${itemId}`, { ...userInput })
      dispatch({ type: EDIT_ITEM_SUCCESS, payload: data.item })
    } catch (error) {
      dispatch({ type: EDIT_ITEM_ERROR })
    }
  }
  // useEffect localStorage
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      const newUser = JSON.parse(user)
      dispatch({ type: SET_USER, payload: newUser.name })
    }
  }, [])
  return (
    <AppContext.Provider
      value={{
        ...state,
        setLoading,
        register,
        login,
        logout,
        fetchItems,
        createItem,
        deleteItem,
        fetchSingleItem,
        editSingleItem,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppProvider }
