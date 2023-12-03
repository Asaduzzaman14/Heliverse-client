/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";


const UpdateUser = ({ updateData,
  open,
  handleOpen,
  handleUpdate,
}) => {
  const [updatedUserData, setUpdatedUserData] = useState();
  useEffect(() => {
    setUpdatedUserData({ ...updateData });
  }, [updateData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log(updatedUserData?.email);
  return (
    <>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto max-h-screen overflow-scroll w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">

            <div className="flex justify-between">
              <Typography variant="h4" color="blue-gray">
                Update data
              </Typography>
              <div onClick={() => handleOpen()} className="text-xl cursor-pointer font-bold">
                X
              </div>
            </div>
            <Typography className="-mb-3">
              Email
            </Typography>
            <Input type="text"
              name="email"
              value={updatedUserData?.email}
              onChange={handleInputChange}
            />

            <Typography className="-mb-3" >
              First Name
            </Typography>
            <Input label="First name"
              name="first_name"
              value={updatedUserData?.first_name}
              onChange={handleInputChange}
              size="sm" />



            <Typography className="-mb-3" >
              Last Name
            </Typography>
            <Input
              label="last Name"
              name="last_name"
              value={updatedUserData?.last_name}
              onChange={handleInputChange} size="sm"
            />

            <Typography className="-mb-3" >
              Gender
            </Typography>

            <Input
              label="Gender" size="sm" name="gender"
              value={updatedUserData?.gender}
              onChange={handleInputChange} />

            <Typography className="-mb-3" >
              domain
            </Typography>
            <Input label="domain"
              name="domain"
              value={updatedUserData?.domain}
              onChange={handleInputChange}
              size="sm" />

          </CardBody>

          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={() => handleUpdate(updatedUserData)} fullWidth>
              Update
            </Button>
          </CardFooter>

        </Card>
      </Dialog>
    </>
  );
};

export default UpdateUser;