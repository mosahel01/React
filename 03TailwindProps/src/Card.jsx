function Card({ title }) {
  return (
    <>
      <div className="max-w-sm border-gray-500 border-4 rounded overflow-hidden shadow-lg ">
        <img
          className="w-full"
          src="https://images.pexels.com/photos/29421578/pexels-photo-29421578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {title || "Error in showing Weather"}
          </div>
          <p className="text-gray-200 text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            dolorum ut quaerat sequi, repellat excepturi.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </>
  );
}

export default Card;
