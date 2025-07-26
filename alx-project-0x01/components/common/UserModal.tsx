import React, { useState } from "react";
import { UserProps, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserProps>({
    id: Date.now(), // generate unique ID
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setUser((prevUser) => {
      // Handle nested properties
      if (name.includes("address.")) {
        const addressKey = name.split(".")[1];
        return {
          ...prevUser,
          address: {
            ...prevUser.address,
            [addressKey]: value
          }
        };
      } else if (name.includes("geo.")) {
        const geoKey = name.split(".")[1];
        return {
          ...prevUser,
          address: {
            ...prevUser.address,
            geo: {
              ...prevUser.address.geo,
              [geoKey]: value
            }
          }
        };
      } else if (name.includes("company.")) {
        const companyKey = name.split(".")[1];
        return {
          ...prevUser,
          company: {
            ...prevUser.company,
            [companyKey]: value
          }
        };
      } else {
        return { ...prevUser, [name]: value };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
            />
            <input
              name="phone"
              value={user.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="website"
              value={user.website}
              onChange={handleChange}
              placeholder="Website"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <h3 className="text-lg font-semibold mt-4">Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="address.street"
              value={user.address.street}
              onChange={handleChange}
              placeholder="Street"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="address.suite"
              value={user.address.suite}
              onChange={handleChange}
              placeholder="Suite"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="address.city"
              value={user.address.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="address.zipcode"
              value={user.address.zipcode}
              onChange={handleChange}
              placeholder="Zipcode"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="geo.lat"
              value={user.address.geo.lat}
              onChange={handleChange}
              placeholder="Latitude"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="geo.lng"
              value={user.address.geo.lng}
              onChange={handleChange}
              placeholder="Longitude"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <h3 className="text-lg font-semibold mt-4">Company</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="company.name"
              value={user.company.name}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="company.catchPhrase"
              value={user.company.catchPhrase}
              onChange={handleChange}
              placeholder="Catch Phrase"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="company.bs"
              value={user.company.bs}
              onChange={handleChange}
              placeholder="Business Strategy"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex justify-between items-center pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
