function SearchRepository({ value, setValue }) {
  return (
    <div class="flex mb-3 justify-between border border-solid border-gray-400 rounded-full px-2 items-center">
      <input
        value={value}
        type="search"
        class=" border-0 px-1 my-2 outline-none"
        placeholder="Search repository..."
        onChange={(e) => setValue(e.target.value)}
      />
      <p>
        <i class="fas fa-search" />
      </p>
    </div>
  );
}

export default SearchRepository;
