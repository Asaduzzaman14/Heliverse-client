import PropTypes from 'prop-types';

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import {
  Card,
  CardHeader,

  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import UpdateUser from "./UpdateUser";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/team';
import CreateTeam from './CreateTeam';


const Table = ({ data,
  handleDelete,
  handleEdit,
  getData,
  search,
  setSearch,
  currentPage,
  setCurrentPage
}) => {
  console.log(data);
  const [open, setOpen] = useState(false);
  const [updateData, setUpdateData] = useState();

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    getData();

  }, [search]);

  const updateMe = (d) => {
    handleOpen();
    setUpdateData(d);
    handleEdit(d);
  };

  const handleUpdate = async (updatedUserData) => {
    try {
      // Perform the PATCH request here
      const response = await fetch(`https://heliverse-two.vercel.app/api/v1/users/${updateData._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUserData),
      });

      if (!response.ok) {
        throw new Error('Failed to update user');
      }
      if (response.ok) {
        getData();
        handleOpen();
        alert('updated');
        // console.log('done');
      }

    } catch (error) {
      // console.error('Error updating user:', error.message);
    }
  };

  const handelSearch = () => {
    getData();
  };


  const dispatch = useDispatch();

  const handleAddUser = (paylode) => {
    // console.log(paylode);
    dispatch(addToCart(paylode));
  };

  const perPage = 20;

  const totalPages = Math.ceil(data?.meta?.total / perPage);
  const handlePageChange = (page = 1) => {
    // console.log(page);
    setCurrentPage(page);
    getData(page);
  };


  return (
    <>
      <UpdateUser
        updateData={updateData}
        open={open}
        handleOpen={handleOpen}
        handleUpdate={handleUpdate}
      />
      {/* <Button onClick={handleOpen}>Sign In</Button> */}

      <Card className="h-full mt-4">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="relative flex w-full max-w-[15rem]">
            <Input
              type="text"
              label="text"
              className="pr-20"
              name='search'

              onChange={(e) => setSearch(e.target.value)}
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button
              size="sm"
              className="!absolute right-1 top-1 rounded"
              onClick={() => handelSearch()}
              disabled={!search}
            >
              Search
            </Button>
          </div>

        </CardHeader>
        <div className="flex flex-col overflow-x-auto">
          <div className=" ">
            <div className="inline-block  py-2 lg:px-8">
              <div className="overflow-x-auto">

                <table className="tableResponsive max-w-sm text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-2 md:px-4 py-4">Select</th>
                      <th scope="col" className="px-2 md:px-4 py-4">User</th>
                      <th scope="col" className="px-2 md:px-4 py-4">Name</th>
                      <th scope="col" className="px-2 md:px-4 py-4">Email</th>
                      <th scope="col" className="px-2 md:px-4 py-4">Gender</th>
                      <th scope="col" className="px-2 md:px-4 py-4 text-center">Position</th>
                      <th scope="col" className="px-2 md:px-4 py-4 text-center">Available</th>
                      <th scope="col" className="px-2 md:px-4 py-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.data ?
                      data?.data?.map(d => {
                        return (
                          <tr className="border-b dark:border-neutral-500" key={d._id}>
                            <td className="whitespace-nowrap px-2 md:px-4 py-4 font-medium"><Checkbox onChange={() => handleAddUser(d)} /></td>
                            <td className="whitespace-nowrap px-2 md:px-4 py-4"><img src={d?.avatar} alt="" /></td>
                            <td className="whitespace-nowrap px-2 md:px-4 py-4">{d?.first_name} {d.last_name}</td>
                            <td className="whitespace-nowrap px-2 md:px-4 py-4">{d?.email}</td>
                            <td className="whitespace-nowrap px-2 md:px-4 py-4">{d?.gender}</td>
                            <td className="whitespace-nowrap px-2 md:px-4 py-4 text-center">{d?.domain}</td>
                            <td className="whitespace-nowrap px-2 md:px-4 py-4 text-center">{d?.available ? "Available" : 'Unavailable'}</td>
                            <td className="whitespace-nowrap px-2 md:px-4 py-4">
                              <div className="flex  gap-1">
                                <button onClick={() => handleDelete(d?._id)}>
                                  <MdDelete className="text-2xl text-red-500 hover:bg-blue-gray-200 rounded-sm " /></button>
                                <button onClick={() => updateMe(d)}>
                                  <FaEdit className="text-2xl text-green-900 hover:bg-blue-gray-200 rounded-sm " /> </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                      : <tr>{getData()}</tr>
                    }

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <CreateTeam />

        <div className="flex justify-center my-4">
          <nav>
            <ul className="pagination flex rounded-md font-medium">
              {Array.from({ length: totalPages }).map((_, index) => (
                <li
                  key={index}
                  className={`cursor-pointer px-3 py-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
                    }`}
                  onClick={() => {
                    handlePageChange(index + 1);

                  }
                  }
                >
                  {index + 1}
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </Card>
    </>
  );

};

export default Table;


Table.propTypes = {
  data: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.func.isRequired,
};