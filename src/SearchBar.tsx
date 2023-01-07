import React, { useState } from "react";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <input
        className="border rounded-lg p-2 w-full"
        type="text"
        placeholder="Search for a Pokemon..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button
        className="bg-blue-500 rounded-lg p-2 mt-2 text-white"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
