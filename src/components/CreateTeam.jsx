import { useSelector } from "react-redux";


const CreateTeam = () => {
  const { users } = useSelector((state) => state.cart);
  console.log(users);
  const myData = {
    email: 'team',
    users: users,
  };
  console.log(myData);
  const buildTeam = async () => {

    if (users.length === 0) {
      return alert('select user for create team');

    }
    try {
      const response = await fetch(
        "https://heliverse-two.vercel.app/api/v1/team",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(myData),
        }
      );
      const resData = await response?.json();

      console.log(resData);
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };



  return (
    <div>
      <div className='flex justify-center py-6'>
        <button onClick={() => buildTeam()}
          className='border border-black bg-blue-gray-800 text-white rounded-md  py-2 px-5'>Create Team</button>

        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, non! Atque cupiditate culpa laboriosam beatae explicabo totam adipisci dolorum debitis?</p> */}
      </div>

    </div>
  );
};

export default CreateTeam;