/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import {

  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,

  CardFooter,
  IconButton,
  Input,
} from "@material-tailwind/react";
import UpdateUser from "./UpdateUser";
import { useState } from "react";


const Table = ({ data,
  handleDelete,
  handleEdit,
  getData
}) => {
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



  return (
    <>
      <UpdateUser
        updateData={updateData}
        open={open}
        handleOpen={handleOpen}
        handleUpdate={handleUpdate}
      />
      {/* <Button onClick={handleOpen}>Sign In</Button> */}

      <Card className="h-full mt-4"  >
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4">
            <div className="flex  first-letter:">
              <Typography variant="h5" color="blue-gray">
                All Users
              </Typography>
              <div className="w-44">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
            </div>

          </div>
        </CardHeader>
        <div className="flex flex-col overflow-x-auto">
          <div className=" ">
            <div className="inline-block  py-2 lg:px-8">
              <div className="overflow-x-auto">

                <table className=" max-w-sm text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">No.</th>

                      <th scope="col" className="px-6 py-4">User</th>
                      <th scope="col" className="px-6 py-4">Name</th>
                      <th scope="col" className="px-6 py-4">Email</th>
                      <th scope="col" className="px-6 py-4">Gender</th>
                      <th scope="col" className="px-6 py-4">Position</th>
                      <th scope="col" className="px-6 py-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data?.map((d,) => {
                        return (
                          <tr className="border-b dark:border-neutral-500" key={d._id}>
                            <td className="whitespace-nowrap px-6 py-4 font-medium">{d?.id}</td>
                            <td className="whitespace-nowrap px-6 py-4"><img src={d?.avatar} alt="" /></td>
                            <td className="whitespace-nowrap px-6 py-4">{d?.first_name} {d.last_name}</td>
                            <td className="whitespace-nowrap px-6 py-4">{d?.email}</td>
                            <td className="whitespace-nowrap px-6 py-4">{d?.gender}</td>
                            <td className="whitespace-nowrap px-6 py-4">{d?.domain}</td>
                            <td className="whitespace-nowrap px-6 py-4"> <div>
                              <button onClick={() => handleDelete(d?._id)}> <MdDelete className="text-2xl text-red-500" /></button>
                              <button onClick={() => updateMe(d)}>
                                <FaEdit /> </button>
                            </div></td>
                          </tr>
                        );
                      })
                    }

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">

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

        </CardFooter>
      </Card>
    </>
  );

};

export default Table;