import React, { useCallback, useEffect, useMemo, useState } from "react";
import Modal from "../../Components/Modal";
import Task from "../../types/task";
import dayjs from "dayjs";
// import useTheme from "../../hooks/useTheme";
import Header from "../../Components/header";
import wavy from "../../assets/wavy.svg";
// import useMusic from "../../hooks/useMusic";

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const [data, setData] = useState<Task[]>([
    {
      id: 1,
      title: "title 1",
      description: "description 1",
      date: "9:40:00 PM, 25 Dec 2023",
    },
    {
      id: 2,
      title: "title 2",
      description: "description 2",
      date: "10:40:00 PM, 24 Dec 2023",
    },
    {
      id: 3,
      title: "title 3",
      description: "description 3",
      date: "8:40:00 PM, 25 Dec 2023",
    },
    {
      id: 4,
      title: "title 4",
      description: "description 4",
      date: "10:40:00 PM, 25 Dec 2023",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<Task>({
    id: -1,
    title: "",
    description: "",
    date: dayjs().format("hh:mm:ss A, D MMM YYYY"),
  });
  // const { currTheme } = useTheme();
  // const { isPlaying } = useMusic();

  const handleSave = useCallback(() => {
    setIsLoading(true);
    const items = data.filter((item: Task) => item.id !== newTask.id);
    items.push({
      id: items.length + 1,
      title: newTask.title,
      description: newTask.description,
      date: dayjs().format("hh:mm:ss A, D MMM YYYY"),
    });
    setData([...items]);
    setIsEditing(false);
    setTimeout(() => {
      setNewTask({
        id: -1,
        title: "",
        description: "",
        date: dayjs().format("hh:mm:ss A, D MMM YYYY"),
      });
      setIsLoading(false);
    }, 1000);
  }, [data, newTask]);

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  useEffect(() => {
    console.log("newTask", newTask);
  }, [newTask]);

  useEffect(() => {
    const autoSave = (e: any) => {
      const inputs = ["input__description", "input__title", "button__newItem"];
      if (isEditing) {
        if (!(e?.target?.id && inputs.includes(e.target.id))) {
          if (newTask.title === "" && newTask.description === "") {
            let items: Task[] = data;
            items = items.filter((item: Task) => item?.id !== newTask.id);
            setData([...items]);
            setIsEditing(false);
            return;
          }
          handleSave();
          return;
        } else {
          return;
        }
      }
    };
    window.addEventListener("click", autoSave);

    return () => {
      window.removeEventListener("click", autoSave);
    };
  }, [isEditing, newTask, data, handleSave]);

  const handleAddItem = () => {
    setIsEditing(true);
    setData((prev) => [...prev, newTask]);
  };

  // const handleDeleteItem = (id: number) => {
  //   const index = data.findIndex((item: any) => item.id === id);
  //   const newData = [...data];
  //   newData.splice(index, 1);
  //   setData(newData);
  // };

  const renderList = useMemo(() => {
    console.log("here");
    return (
      <>
        {data
          .sort(function (a: any, b: any) {
            return dayjs(b.date).unix() - dayjs(a.date).unix();
          })
          .map((item: any, index: number) => {
            const isOdd = index % 2 === 1;
            return (
              <div
                key={item.id}
                className={`flex flex-col p-2 rounded-md gap-4 relative
												${isOdd ? "bg-tertiary dark:bg-[#333]" : ""}
												`}
              >
                <div className="flex flex-row justify-between">
                  {isEditing && item.id === newTask.id ? (
                    <input
                      id="input__title"
                      onChange={(e) =>
                        setNewTask({ ...newTask, title: e.target.value })
                      }
                      placeholder="Title"
                      className="p-1 bg-transparent border-none rounded-lg focus:outline-none"
                    />
                  ) : (
                    <div className="text-xl">{item.id + " " + item.title}</div>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  {isEditing && item.id === newTask.id ? (
                    <input
                      id="input__description"
                      onChange={(e) =>
                        setNewTask({ ...newTask, description: e.target.value })
                      }
                      placeholder="Description"
                      className="p-1 bg-transparent border-none focus:outline-none"
                    />
                  ) : (
                    <div className="text-md">{item.description}</div>
                  )}
                </div>
                {/* <div className="p-2 mt-3 absolute right-0">
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
									</div> */}
              </div>
            );
          })}
      </>
    );
  }, [data, isEditing, newTask]);

  return (
    <div className="dark:text-white relative col-span-full col-start-3 grid grid-rows-8 w-full h-[100dvh] pr-6 pb-6">
      <Header />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <img id="wavyBG" src={wavy} alt="" className="z-0 scale-150 wavy" />
      </div>
      <div className="z-10 row-start-2 row-end-9 p-6 rounded-3xl dark:bg-black bg-primary shadow-lg dark:shadow-[#000] overflow-y-scroll">
        <div className={`flex flex-col gap-4 ${isLoading ? "blur-sm" : ""}`}>
          <div className="flex flex-row justify-between">
            <div className="text-2xl">Today</div>
            <button
              id="button__newItem"
              disabled={isEditing}
              onClick={handleAddItem}
              className="ml-auto flex align-center gap-1 dark:bg-white dark:text-black bg-black text-white p-2 rounded-xl disabled:opacity-60"
            >
              New item
            </button>
          </div>
          <hr className="text-tertiary"></hr>
          {renderList}
        </div>
      </div>
      <Modal open={isModalOpen} setOpen={setIsModalOpen} />
    </div>
  );
};

export default Home;
