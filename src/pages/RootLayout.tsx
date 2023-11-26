import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'

type Props = {}

const RootLayout = (props: Props) => {
    return (
        <div className="w-screen h-screen bg-primary grid grid-cols-12 overflow-hidden relative">
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default RootLayout