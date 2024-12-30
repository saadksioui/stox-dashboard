import { Edit, Mail, Phone, User } from "lucide-react";

const ProfileInfo = () => {
  return (
    <div className="w-full p-4">
      <h1 className="text-xl font-epilogue font-semibold">Personal Information</h1>

      <form className="w-full flex flex-col gap-8 mt-5">
        <div className="w-full flex flex-col lg:flex-row items-center gap-5">
          <div className="w-full flex flex-col gap-2">
            <label className="block text-sm font-medium font-poppins text-gray-700">Full Name</label>
            <div className="relative mt-2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                <User size={20} />
              </span>
              <input type="text" className="block font-poppins w-full pl-10 pr-4 py-2 text-sm border rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500" defaultValue="John Doe" disabled />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="block text-sm font-medium font-poppins text-gray-700">Phone Number</label>
            <div className="relative mt-2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                <Phone size={20} />
              </span>
              <input type="text" className="block font-poppins w-full pl-10 pr-4 py-2 text-sm border rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500" defaultValue="+1 234 567 890" disabled />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div>
            <label className="block text-sm font-medium font-poppins text-gray-700">Email Address</label>
            <div className="relative mt-2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                <Mail size={20} />
              </span>
              <input type="email" id="email" className="block font-poppins w-full pl-10 pr-4 py-2 text-sm border rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500" defaultValue="johndoe@example.com" disabled />
            </div>
          </div>

        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="block text-sm font-medium font-poppins text-gray-700">Username</label>
          <input type="text" defaultValue="johndoe" className="block font-poppins w-full pl-4 pr-4 py-2 text-sm border rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500" disabled />
        </div>
        <div className="w-full flex flex-col gap-2">
          <div>
            <label className="block text-sm font-medium font-poppins text-gray-700">BIO</label>
            <div className="relative mt-2">
              <span className="absolute top-2 left-3 text-gray-500 cursor-pointer">
                {/* Edit Icon */}
                <Edit size={20} />
              </span>
              <textarea id="bio" rows={3} className="block font-poppins w-full px-4 py-2 text-sm border rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500" placeholder="Enter your bio..." defaultValue={"              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet.\n            "} />
            </div>
          </div>
        </div>
      </form>
      <div className="w-full flex items-center justify-end font-poppins gap-3 mt-5">
        <button
          className="px-4 py-2 rounded text-gray-600 border border-gray-300 hover:bg-gray-100"
          type="button"
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          type="button"
        >
          Save
        </button>
      </div>
    </div>
  )
};

export default ProfileInfo
