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


const Table = ({ data,
  handleDelete,
  handleEdit,
  getData,
  search,
  setSearch
}) => {
  console.log(data);
  const [open, setOpen] = useState(false);
  const [updateData, setUpdateData] = useState();

  const handleOpen = () => setOpen((cur) => !cur);

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
        console.log('done');
      }

      // Handle success, update state, etc.
    } catch (error) {
      console.error('Error updating user:', error.message);
    }
  };
  // console.log(data);

  const handelSearch = (e) => {
    setSearch(e?.target?.value);
    if (e?.target?.value == '') {
      console.log(e);
    }
    setTimeout(() => {
      getData();
    }, [!search, 1000]);
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
              onChange={(e) => handelSearch(e)}
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button
              size="sm"
              className="!absolute right-1 top-1 rounded"
              onClick={() => getData()}
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
                      <th scope="col" className="px-2 md:px-4 py-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.data ?
                      data?.data?.map(d => {
                        return (
                          <tr className="border-b dark:border-neutral-500" key={d._id}>
                            <td className="whitespace-nowrap px-2 md:px-4 py-4 font-medium"><Checkbox /></td>
                            <td className="whitespace-nowrap px-2 md:px-4 py-4"><img src={d?.avatar} alt="" /></td>
                            <td className="whitespace-nowrap px-2 md:px-4 py-4">{d?.first_name} {d.last_name}</td>
                            <td className="whitespace-nowrap px-2 md:px-4 py-4">{d?.email}</td>
                            <td className="whitespace-nowrap px-2 md:px-4 py-4">{d?.gender}</td>
                            <td className="whitespace-nowrap px-2 md:px-4 py-4 text-center">{d?.domain}</td>
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

        {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">

          <div className="flex items-center gap-2">
            <IconButton variant="outlined" size="sm">
              1
            </IconButton>
            <IconButton variant="text" size="sm">
              2
            </IconButton>
            <IconButton variant="text" size="sm">
              3
            </IconButton>
            <IconButton variant="text" size="sm">
              ...
            </IconButton>
            <IconButton variant="text" size="sm">
              8
            </IconButton>
            <IconButton variant="text" size="sm">
              9
            </IconButton>
            <IconButton variant="text" size="sm">
              10
            </IconButton>
          </div>

        </CardFooter> */}
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
  setSearch: PropTypes.func.isRequired,
};