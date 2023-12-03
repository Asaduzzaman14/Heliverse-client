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


const Table = ({ data, handleDelete, getData
}) => {
  const [open, setOpen] = useState(false);
  const [updateData, setUpdateData] = useState();

  const handleOpen = () => setOpen((cur) => !cur);

  const updateMe = (d) => {
    handleOpen();
    setUpdateData(d);
    // handleEdit(d);
  };

  return (
    <>
      <UpdateUser
        updateData={updateData}
        open={open}
        handleOpen={handleOpen}
        getData={getData}
      />
      {/* <Button onClick={handleOpen}>Sign In</Button> */}

      <Card className="h-full mt-4 w-full" style={{ maxWidth: '90%' }}>
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col lg:flex-row justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Recent Transactions
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                These are details about the last transactions
              </Typography>
            </div>

            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-44">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>

            </div>
          </div>
        </CardHeader>
        <div className="flex  flex-col overflow-x-auto">
          <div className=" ">
            <div className="inline-block  py-2   lg:px-8">
              <div className="overflow-x-auto">

                <table className=" w-[calc(100)] text-left text-sm font-light">
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