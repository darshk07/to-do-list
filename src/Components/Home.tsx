import { useState, useEffect } from 'react'

type Props = {}

const ListItem = ({ item, deleteItem }: any) => {
    return (
        <div className="list-item">
            <div className="radio"></div>
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
            <button className="submit-button" onClick={()=>deleteItem(item.id)} style={{marginLeft: "auto"}}>Delete</button>
        </div>
    )
}

const InputItem = ({ handleSubmit }: any) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    return (
        <div className="list-item">
            <div className="radio"></div>
            <div style={{width: "100%"}}>
                <input
                className="input-box title"
                    type="text"
                    onChange={(e) => { setTitle(e.target.value) }}
                    placeholder='Enter Title' />
                <br />
                <input
                className="input-box" type="text"
                    onChange={(e) => { setDescription(e.target.value) }}
                    placeholder='Enter Description' />
                <br />
                <button className="submit-button" onClick={() => handleSubmit(title, description)}>Submit</button>
            </div>
        </div>
    )
}

export default function Home({ }: Props) {
    const [data, setData] = useState<any>([]);
    const [isEntering, setIsEntering] = useState<boolean>(true);

    useEffect(() => {
        const data = localStorage.getItem('data');
        if (data) {
            setData(JSON.parse(data));
        }
    }, [])

    function generateId(): string {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    const handleSubmit = (title: string, description: string) => {
        const newObj = { id: generateId(), title, description: description }
        setData([...data, newObj])
        localStorage.setItem('data', JSON.stringify([...data, newObj]));
        setIsEntering(false);
    }

    const addListItem = () => {
        setIsEntering(true);
    }

    const deleteItem = (id: string) => {
        const newData = data.filter((item: any) => item.id !== id);
        setData(newData);
        localStorage.setItem('data', JSON.stringify(newData));
    }

    return (
        <div className="home row-start-1 bg-[#F00] row-end-8 p-10 
        lg:col-start-2 lg:col-end-13 lg:row-span-full">
            {/* <h1>Home</h1> */}
            <div className="list-pane bg-zinc-700 p-5 h-full">
                {data.map((item: any) => <ListItem key={item.id} item={item} deleteItem={deleteItem}/>)}
                {
                    isEntering ? <>
                        <InputItem handleSubmit={handleSubmit} />
                        <button className="submit-button" onClick={() => { setIsEntering(false) }}>Cancel</button>
                    </> :
                        <button className="submit-button" onClick={addListItem}>Add</button>
                }
            </div>
        </div>
    )
}