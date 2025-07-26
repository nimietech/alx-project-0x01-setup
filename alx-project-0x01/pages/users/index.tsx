import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { useState } from "react";
// import { UserProps } from "@/interfaces";


interface UserPageProps {
  posts: UserProps[];
}

const Users: React.FC<UserPageProps> = ({ posts: initialPosts }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [showModal, setShowModal] = useState(false);

  const handleAddUser = (newUser: UserProps) => {
    setPosts((prev) => [...prev, newUser]);
  };

  return (
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
          {posts.map((user, index) => (
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
  );
};


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}


export default Users;