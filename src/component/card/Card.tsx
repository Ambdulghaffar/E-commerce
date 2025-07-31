export default function Card() {
  return (
    <>
      <div className="grid grid-cols-2 gap-0">
        <div className="h-3/6 text-center pt-32">
          <div>
            <p className="font-thin text-2xl">Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className="py-10">
            <h1 className="font-black text-3xl">
              Lorem ipsum dolor sit amet consectetur<br />{" "}
              Hic animi odio officiis voluptatem{" "}
            </h1>
          </div>
          <div>
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Achete maintenant
            </button>
          </div>
        </div>
        <div className="w-full">
          <img src="/Images/image1.jpg" alt="" className="h-3/6 w-full" />
        </div>
      </div>
    </>
  );
}
