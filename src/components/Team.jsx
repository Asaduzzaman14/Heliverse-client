import { useEffect, useState } from "react";

const Team = () => {
  const [data, setData] = useState();


  const getData = () => {
    fetch(`https://heliverse-two.vercel.app/api/v1/team`)
      .then(res => res.json())
      .then(res => setData(res?.data))
      .catch(error => {
        console.error('Error fetching data:', error.message);
        setData(null); // Set data to null in case of an error
      });
  };
  useEffect(() => {
    getData();

  }, []);

  return (
    <div className="px-4">
      <h2 className="text-center mt-4 font-semibold text-2xl">All Team</h2>
      <div className=" grid gap-3">

        {
          data?.map((team) => {
            return (
              <div key={team?._id} className="bg-gray-300 p-2 rounded-md">
                <h2 className="text-lg font-bold p-2">{team?.email} </h2>
                <div className="p-2 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
                  {team?.users?.map(user => {
                    return (
                      <div key={user?._id} className=" border rounded-md border-black p-2">
                        <img src={user?.avatar} alt="" />
                        <p className="pt-2">{user?.email}</p>
                        <p>{user?.first_name}</p>
                        <p>{user?.last_name}</p>
                        <p>{user?.domain}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );

          })
        }

      </div>
    </div>
  );
};

export default Team;

