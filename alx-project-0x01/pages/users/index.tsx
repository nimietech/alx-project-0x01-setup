import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { useState } from "react";
import { UserData } from "@/interfaces";


interface UserPageProps {
  users: UserProps[];
}


const Posts: React.FC<UserPageProps> = ({ users: initialUsers }) => { 
  const [users, setUsers] = useState(initialUsers);
  const [showModal, setShowModal] = useState(false);
  console.log(users)

  const handleAddUser = (newUser: UserData) => {
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    // <div className="flex flex-col h-screen">
    //   <Header />
    //   <main className="p-4">
    //     <div className="flex justify-between">
    //     <h1 className=" text-2xl font-semibold text-blue-700">Post Content</h1>
    //     <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
    //     </div>
    //     <div className="grid grid-cols-3 gap-2 ">
    //       {
    //         users.map(({id, name, username, email, address, phone, website, company }: UserProps, key: number) => (
    //           <UserCard name={name} username={username} email={email} address={address} phone={phone} website={website} company={company} id={id} key={key} />
    //         ))
    //       }
    //     </div>
    //   </main>
    // </div>
  <div className="flex flex-col h-screen">
    <Header />
    <main className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-blue-700">User List</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition"
        >
          Add User
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user, index) => (
          <UserCard
            key={index}
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            phone={user.phone}
            website={user.website}
            address={user.address}
            company={user.company}
          />
        ))}
      </div>
    </main>

    {showModal && (
      <UserModal
        onClose={() => setShowModal(false)}
        onSubmit={handleAddUser}
      />
    )}
  </div>

  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}


export default Posts;