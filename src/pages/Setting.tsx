
import ProfileImage from "../components/forms/ProfileImage";
import ProfileInfo from "../components/forms/ProfileInfo";
import DefaultLay from "../layout/DefaultLay";

const Setting = () => {
  return (
    <DefaultLay>
      <section className="p-7 overflow-y-auto">
        <h1 className="text-2xl font-semibold font-poppins">Setting</h1>
        <div className="w-full my-4 flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-3/5 bg-white border border-gray-200 rounded">
            <ProfileInfo />
          </div>
          <div className="w-full lg:w-2/5 h-fit bg-white border border-gray-200 rounded">
            <ProfileImage />
          </div>
        </div>
      </section>
    </DefaultLay>
  )
};

export default Setting
