import React from "react";

export interface ISearch {
  value?: string;
  onChange: (value: string) => void;
}

const Search = ({ value = "", onChange }: ISearch) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onChange(event.currentTarget.value);
        }}
      />
    </div>
  );
};

export default Search;
