
import AllCategories from "../components/tables/AllCategories";
import DefaultLay from "../layout/DefaultLay";

const Categories = () => {
  return (
    <DefaultLay>
      <section className="p-7 overflow-y-auto">
        <h1 className="text-2xl font-semibold font-poppins">Categories</h1>
        <div className="w-full my-4">
          <AllCategories />
        </div>
      </section>
    </DefaultLay>
  )
};

export default Categories
