function search() {
  return (
    <div className="flex justify-center items-center h-screen bg-oxford-blue">
      <div
        id="search"
        className="w-2/5 bg-secondary1 h-[350px] rounded-2xl px-6 py-5 text-white"
      >
        <div className="flex pb-3 mb-2">
          <div className="bg-secondary-gray flex px-3 py-3 rounded-xl w-3/4 text-lg">
            <span className="material-symbols-outlined px-1">search</span>
            <form action="post" autoComplete="off" className="flex-1 flex px-1">
                <input
                type="text"
                name="city"
                id="city"
                className="bg-secondary-gray flex-1 autofill:bg-secondary-gray! outline-none"
                />
            </form>
          </div>
          <button className="bg-blue rounded-lg px-6 py-2 mx-4">Search</button>
          <span className="material-symbols-outlined py-3 cursor-pointer">close</span>
        </div>
        <div>
          <p className="px-4 py-2 hover:bg-secondary-gray rounded-lg transition duration-150 text-lg">London</p>
          <p className="px-4 py-2 hover:bg-secondary-gray rounded-lg transition duration-150 text-lg">London</p>
          <p className="px-4 py-2 hover:bg-secondary-gray rounded-lg transition duration-150 text-lg">London</p>
          <p className="px-4 py-2 hover:bg-secondary-gray rounded-lg transition duration-150 text-lg">London</p>
          <p className="px-4 py-2 hover:bg-secondary-gray rounded-lg transition duration-150 text-lg">London</p>
        </div>
      </div>
    </div>
  );
}

export default search;
