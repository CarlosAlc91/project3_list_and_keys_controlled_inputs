const LocationForm = ({ handlerSubmit }) => {
  return (
    <>
      <div class="relative flex justify-center items-center mx-auto max-w-screen-xl">
        <div>
          <img
            class="inset-0 object-cover w-full h-full"
            src="/images/green_cloud.png"
            alt=""
          />
        </div>
        <div class="absolute inset-0 object-cover w-auto h-auto sm:-translate-x-1/4 lg:translate-x-1/4">
          <img src="/images/header.png" alt="" />
        </div>
      </div>

      <div className="py-11">
        <form
          onSubmit={handlerSubmit}
          className="flex items-center overflow-hidden max-w-max mx-auto border-2 border-[#8EFF8B]"
        >
          <input
            className="bg-black text-[#938686] p-2 outline-none flex-grow auto"
            min={1}
            id="newLocation"
            max={126}
            placeholder="Type a location Id..."
            type="text"
          />
          <div className="flex items-center overflow-hidden max-w-max mx-auto m-0 gap-3 bg-[#8EFF8B] text-[#938686] font-semibold hover:bg-[#529350] hover:text-white py-2 px-3  cursor-pointer flex-grow">
            <button className="items-center overflow-hidden max-w-max mx-auto m-0 ">
              Search
            </button>
            <div className="bx bx-search-alt-2"></div>
          </div>
        </form>
        <div className="py-11">
          <h1 className=" text-center  text-[#8EFF8B]">
            ¡Wellcome to the crazy universe!
          </h1>
        </div>
      </div>
    </>
  );
};
export default LocationForm;
