import { useDispatch, useSelector } from "react-redux"
import { createUser, fetchAllUsers } from "./store/slices/createUserSlice"
import { useEffect, useState } from "react"
import { RouterProvider, useLocation } from 'react-router-dom';
import { router } from "./routes/routes";
import { AppShell, Burger, Group, Input, ScrollArea, Skeleton } from '@mantine/core';

import Textfield from "./components/Textfield";
import Header from "./components/Header";


function App() {


  const allUsers = useSelector(e => e?.userSliceReducer)
  const dispatch = useDispatch()

  

  useEffect(() => {
    console.log(allUsers)
  }, [allUsers])

  

  return (
    <>
      {/* App
      <button
        onClick={e => {
          // dispatch(createUser(
          //   {
          //     email: 'reduxmail@gmail.com',
          //     password: 'pass@123',
          //     agreeToTerms: "Y",
          //     subscribeToNewsletter: "N"
          //   }
          // ))

          dispatch(fetchAllUsers('test'))
        }}
      >
        fetch all users
      </button>

      {
        allUsers?.isLoading
          ?
          <h1>Loading...</h1>
          :
          allUsers?.isError
            ?
            <h1>{allUsers?.isError}</h1>
            :
            allUsers?.users && allUsers?.users?.map(o => <li key={o?._id}>{o?.email}</li>)
      } */}
      {/* <Provider store={store}> */}
      {/* <Header /> */}
      {/* <RouterProvider router={router} /> */}
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
