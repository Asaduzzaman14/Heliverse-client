import { useEffect, useState } from "react";
import { DefaultSidebar } from "./DefaultSidebar";
import Table from "./Table";

const Home = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const [filter, setFilter] = useState({
    domain: '',
    available: '',
    gender: ''
  });

  // Convert the filter object to a query string
  const queryString = Object.keys(filter)
    .filter(key => filter[key] !== '')
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(filter[key])}`)
    .join('&');


  const getData = (page = 1) => {
    console.log(`https://heliverse-two.vercel.app/api/v1/users?${queryString}&page=${page}&searchTerm=${search}`, 'urlllll');
    fetch(`https://heliverse-two.vercel.app/api/v1/users?${queryString}&page=${page}&searchTerm=${search}`)
      .then(res => res.json())
      .then(res => setData(res?.data))
      .catch(error => {
        console.error('Error fetching data:', error.message);
        setData(null); // Set data to null in case of an error
      });
  };

  const [deleteid, setDeleteId] = useState(null);
  const [setUpdateId] = useState(null);


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
    window.confirm('are you sure');
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

  return (
    <div className="flex gap-2 lg:gap-5 )">
      <div className="flex mr-7  lg:mr-[15rem]">
        <DefaultSidebar getData={getData} filter={filter} setFilter={setFilter} />
      </div>
      <Table
        data={data}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        getData={getData}
        search={search}
        setSearch={setSearch}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Home;