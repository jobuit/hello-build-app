function SearchRepository({ value, setValue }) {
  return (
    <div className="flex mb-3 justify-between border border-solid border-gray-400 rounded-full px-2 items-center">
      <input
        value={value}
        type="search"
        className=" border-0 px-1 my-2 outline-none"
        placeholder="Search repository..."
        onChange={(e) => setValue(e.target.value)}
      />
      <p>
        <i className="fas fa-search" />
      </p>
    </div>
  );
}

export default SearchRepository;
