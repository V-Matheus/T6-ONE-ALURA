import React from 'react'
import { Banner } from '../Banner'
import { Outlet } from 'react-router-dom'

export const PadginaPadrao = () => {
  return (
    <main>
      <Banner />

      <Outlet />
    </main>
  )
}
