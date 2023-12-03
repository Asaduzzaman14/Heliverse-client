import { useEffect, useState } from "react";
import { DefaultSidebar } from "./DefaultSidebar";
import Table from "./Table";

const Home = () => {
  const [data, setData] = useState();

  const getData = () => {
    fetch('https://heliverse-two.vercel.app/api/v1/users')
      .then(res => res.json())
      .then(res => setData(res?.data))
      .catch(error => {
        console.error('Error fetching data:', error.message);
        setData(null); // Set data to null in case of an error
      });
  };

  const [deleteid, setDeleteId] = useState(null);
  console.log(deleteid);
  const [updateid, setUpdateId] = useState(null);


  useEffect(() => {
    if (deleteid !== null) {
      fetch(`https://heliverse-two.vercel.app/api/v1/users/${deleteid}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Failed to delete user with ID ${deleteid}`);
          }
          return res.json();
        })
        .then((data) => {
          // Handle the response data if needed
          getData();
          alert('User deleted successfully');
          console.log('User deleted successfully', data);
        })
        .catch((error) => {
          // Handle errors
          console.error('Error deleting user:', error.message);
        });
    }
  }, [deleteid]);

  const handleDelete = (id) => {
    console.log(id);
    setDeleteId(id);
  };


  const handleEdit = (id) => {
    setUpdateId(id);
  };
  useEffect(() => {
    if (!data) {
      getData();
    }
  }, [data]);

  console.log(data);
  return (
    <div className="flex gap-2 lg:gap-5 )">
      <div className="flex">
        <DefaultSidebar />
        {/* <div className="pt-4 text-center flex mx-auto">
          <div className="relative flex w-full max-w-[24rem]">
            <Input
              type="text"
              label="search"
              value={email}
              onChange={onChange}
              className="pr-20"
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button
              size="sm"
              color={email ? "gray" : "blue-gray"}
              disabled={!email}
              className="!absolute right-1 top-1 rounded"
            >
              Search
            </Button>
          </div>
        </div> */}
      </div>
      <Table
        data={data}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        getData={getData}
      />
    </div>
  );
};

export default Home;