import PropTypes from 'prop-types';

import {
  Card,

  Select,
  Option,

} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export function DefaultSidebar({ getData, filter, setFilter }) {

  let [open, setOpen] = useState(false);
  const handleDomainChange = (value) => {
    setFilter({
      ...filter,
      domain: value
    });
    getData();
  };

  const handleAvailableChange = (value) => {
    setFilter({
      ...filter,
      available: value
    });
    getData();
  };

  const handleGenderChange = (value) => {
    setFilter({
      ...filter,
      gender: value
    });
    getData();
  };
  useEffect(() => {
    getData();
  }, [filter]);


  return (
    <Card className={`h-[calc(100vh)] overflow-hidden absolute  z-40 w-full max-w-[2.3rem] md:max-w-[15rem] ${open ? "max-w-[15rem] md:md:max-w-[15rem] " : ""} shadow-xl shadow-blue-gray-100`}>


      <div className="lg:hidden p-2 text-black text-2xl font-body"
        onClick={() => setOpen(!open)}>
        {open ? <IoMdClose /> : <CiMenuBurger />}
      </div>

      <div className="flex mt-2 w-20 p-2 flex-col gap-3">
        <Select onChange={handleDomainChange} size="md" label="Select Domain">
          <Option value="Sales">Sales</Option>
          <Option value="Finance">Finance</Option>
          <Option value="Marketing">Marketing</Option>
          <Option value="IT">IT</Option>
          <Option value="Management">Management</Option>
          <Option value="UI Designing">UI Designing</Option>
          <Option value="Business">Business</Option>
        </Select>
        <Select onChange={handleAvailableChange} size="sm" label="Select Available">
          <Option value="true">Available</Option>
          <Option value="false">Unavailable</Option>
        </Select>

        <Select onChange={handleGenderChange} size="sm" label="Select Gender">
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
          <Option value="Agender">Agender</Option>
        </Select>

      </div>


    </Card>
  );
}




DefaultSidebar.propTypes = {
  getData: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};