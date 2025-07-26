//PROPS COMPONENT

import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h1>{id}</h1>
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      </div>
      <p className="text-gray-600">{username}, {email}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span> Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}</span>

        <span>Phone Number: {phone}</span>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>{website}</span>
        <span>{company.name}</span>
      </div>
    </div>
  );
};

export default UserCard;