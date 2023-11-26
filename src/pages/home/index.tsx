import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Modal from '../../Components/Modal';

type Props = {}

const Home = (props: Props) => {
    const [isEditing, setIsEditing] = React.useState<any>(null);
    const [data, setData] = useState<any>([{
        id: 1,
        title: 'title 1',
        description: 'description 1',
    },
    {
        id: 2,
        title: 'title 2',
        description: 'description 2',
    },
    {
        id: 3,
        title: 'title 3',
        description: 'description 3',
    },
    {
        id: 4,
        title: 'title 4',
        description: 'description 4',
    },]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleAddItem = () => {
        //renderModal
        setIsModalOpen(true);
    }

    const handleDeleteItem = (id: number) => {
        const index = data.findIndex((item: any) => item.id === id);
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    }

    const handleSave = () => {
        setIsEditing(null);
    }

    const renderList = () => {
        return (
            <>
                {data.map((item: any, index: number) => {
                    const isOdd = index % 2 === 1;
                    return (
                        <div className={`flex flex-col p-2 rounded-md gap-4 relative
                        ${isOdd ? 'bg-tertiary' : ''}
                        `}>
                            <div className="flex flex-row justify-between">
                                {
                                    isEditing === item.id ?
                                        <input
                                            placeholder='Title'
                                            className="p-1 bg-transparent border-none rounded-lg focus:outline-none" />
                                        :
                                        <div className="text-xl">{item.title}</div>
                                }
                            </div>
                            <div className="flex flex-row justify-between">
                                {
                                    isEditing === item.id ?
                                        <input
                                            placeholder="Description"
                                            className="p-1 bg-transparent border-none focus:outline-none" />
                                        :
                                        <div className="text-md">{item.description}</div>
                                }
                            </div>
                            <div className="p-2 mt-3 absolute right-0">
                                {
                                    isEditing ?
                                        <div className="flex flex-row gap-2">
                                            <div
                                                onClick={() => { setIsEditing(null) }}
                                                className="hover:text-black rounded-xl  flex align-center text-secondary cursor-pointer">
                                                Cancel
                                            </div>
                                            <div
                                                onClick={handleSave}
                                                className="hover:text-black rounded-xl  flex align-center text-secondary cursor-pointer">
                                                Save
                                            </div>
                                        </div>
                                        :
                                        <div className="flex align-center text-secondary gap-4">
                                            <div
                                                onClick={() => setIsEditing(item.id)}
                                                className={`hover:text-black rounded-xl flex align-center cursor-pointer`}>
                                                <CiEdit className="mr-1 mt-1" />
                                                Edit
                                            </div>
                                            <button
                                                onClick={() => handleDeleteItem(item.id)}
                                                className={`hover:text-black rounded-xl flex align-center cursor-pointer`}
                                            >
                                                <MdDelete className="mt-1" />
                                                Delete
                                            </button>
                                        </div>
                                }
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }

    return (
        <div className="col-span-10 grid grid-rows-8 w-full h-[100dvh] pr-6 pb-6">
            <div className="">
            </div>
            <div className="row-start-2 row-end-9 p-6 rounded-3xl bg-primary shadow-2xl overflow-y-scroll">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row justify-between">
                        <div className="text-2xl">Today</div>
                        <button
                            onClick={handleAddItem}
                            className="ml-auto flex align-center gap-1 bg-bermuda p-2 rounded-xl">
                            New item</button>
                    </div>
                    <hr className="text-tertiary"></hr>
                    {renderList()}
                </div>
            </div>
            <Modal open={isModalOpen} setOpen={setIsModalOpen} />
        </div >
    )
}

export default Home
