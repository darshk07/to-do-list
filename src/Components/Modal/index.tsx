import React, { useEffect, useState } from 'react'

type Props = {}

const Modal = ({
    open,
    setOpen
}: any) => {

    return (
        <div className={`${open ? 'block' : 'hidden'} fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center
        `}>
            <div className="rounded p-4 bg-primary w-[600px] h-[300px]">
                <div className="text-xl">Add a Task</div>
                <hr className="text-tertiary my-2" />
                <input
                    placeholder='Task name'
                    className="mb-6 p-1 rounded-lg w-full focus:outline-none"
                />
                <input
                    placeholder='Task Description'
                    className="p-1 rounded-lg w-full focus:outline-none"
                />
                <button
                    onClick={() => setOpen(false)}
                    className="bg-[#dd0000] rounded-lg p-2 mt-4 text-white mr-2"
                >
                    Cancel
                </button>
                <button
                    className="bg-bermuda rounded-lg p-2 mt-4"
                >
                    Add Task
                </button>

            </div>
        </div>
    )
}

export default Modal
