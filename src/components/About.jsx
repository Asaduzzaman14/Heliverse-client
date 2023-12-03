

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Input,
  CardBody,
  Card,
} from "@material-tailwind/react";
import { useState } from "react";

const About = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button onClick={handleOpen}>Long Dialog</Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Long Dialog</DialogHeader>
        <DialogBody className="h-[42rem] overflow-scroll">

          <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Update data
              </Typography>

              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Enter your new Data.
              </Typography>
              <Typography className="-mb-3">
                Email
              </Typography>
              <Input label="Email" size="xs" />

              <Typography className="-mb-3" >
                First Name
              </Typography>
              <Input label="First Name" size="sm" />
              <Typography className="-mb-3" >
                Last Name
              </Typography>
              <Input label="last Name" size="sm" />
              <Typography className="-mb-3" >
                Gender
              </Typography>
              <Input label="Gender" size="sm" />

              <Typography className="-mb-3" >
                Position
              </Typography>
              <Input label="Position" size="sm" />
            </CardBody>
          </Card>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            cancel
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </>

  );
};

export default About;