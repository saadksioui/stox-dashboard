import { cardPropsType } from "../types";



const Card = ({ icon, title, value, percentage }: cardPropsType) => {
  return (
    <div className="bg-white p-4 border border-gray-300 shadow-md">
      <div className="bg-primary-500 rounded-full size-12 flex items-center justify-center text-white">
        {icon}
      </div>
      <div className="flex items-end justify-between mt-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold font-epilogue">
            {value}
          </h1>
          <p className="text-sm text-gray-700 font-poppins">
            {title}
          </p>
        </div>
        <span className={`text-xs font-poppins px-2 py-1 rounded-full text-white ${percentage.startsWith("-") ? "bg-red-500" : "bg-green-500"
          }`}
          >{percentage}</span>
      </div>
    </div>
  )
};

export default Card
