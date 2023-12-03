import {
  Card,

  Select,
  Option,

} from "@material-tailwind/react";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export function DefaultSidebar() {
  let [open, setOpen] = useState(false);

  return (
    <Card className={`h-[calc(100vh)] overflow-hidden w-full max-w-[2.3rem] md:max-w-[15rem] ${open ? "max-w-[10rem] md:md:max-w-[15rem] " : ""} shadow-xl shadow-blue-gray-100`}>


      <div className="lg:hidden p-2 text-black text-2xl font-body"
        onClick={() => setOpen(!open)}>
        {open ? <IoMdClose /> : <CiMenuBurger />}
      </div>

      <div className="flex mt-2 w-full p-2 flex-col gap-3">
        <Select size="sm" label="Select Domain">
          <Option>Management</Option>
          <Option>Marketing</Option>
          <Option>Business </Option>
          <Option>Sales</Option>
          <Option>IT</Option>

        </Select>
        <Select size="sm" label="Select Available">
          <Option>Available</Option>
          <Option>Unavailable</Option>
        </Select>

        <Select size="sm" label="Select Gender">
          <Option>Male</Option>
          <Option>Female</Option>
        </Select>
      </div>


    </Card>
  );
}