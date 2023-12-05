import PropTypes from 'prop-types';

import {
  Card,

  Select,
  Option,

} from "@material-tailwind/react";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export function DefaultSidebar({ getData, filter, setFilter }) {

  let [open, setOpen] = useState(false);
  // const [filter, setFilter] = useState({
  //   domain: '',
  //   available: '',
  //   gender: ''
  // });
  // console.log(filter);




  console.log(filter);
  const handleDomainChange = (value) => {
    setFilter({
      ...filter,
      domain: value
    });
    getData();
    console.log('filter again');
  };

  const handleAvailableChange = (value) => {
    setFilter({
      ...filter,
      available: value
    });
    getData();
    console.log('filter again');
  };

  const handleGenderChange = (value) => {
    setFilter({
      ...filter,
      gender: value
    });
    getData();
    console.log('filter again');
  };

  return (
    <Card className={`h-[calc(100vh)] overflow-hidden w-full max-w-[2.3rem] md:max-w-[15rem] ${open ? "max-w-[10rem] md:md:max-w-[15rem] " : ""} shadow-xl shadow-blue-gray-100`}>


      <div className="lg:hidden p-2 text-black text-2xl font-body"
        onClick={() => setOpen(!open)}>
        {open ? <IoMdClose /> : <CiMenuBurger />}
      </div>

      <div className="flex mt-2 w-full p-2 flex-col gap-3">
        <Select onChange={handleDomainChange} size="" label="Select Domain">
          <Option value="Sales">Sales</Option>
          <Option value="Finance">Finance</Option>
          <Option value="Marketing">Marketing</Option>
          <Option value="IT">IT</Option>
          <Option value="Management">Management</Option>
          <Option value="UI Designing">UI Designing</Option>
          <Option value="Business">Business</Option>
        </Select>
        <Select onChange={handleAvailableChange} size="sm" placeholder="Select Available">
          <Option value="true">Available</Option>
          <Option value="false">Unavailable</Option>
        </Select>

        <Select onChange={handleGenderChange} size="sm" placeholder="Select Gender">
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