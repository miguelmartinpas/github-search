import React from "react";

interface Props {
  value?: string;
  onChange: (value: string) => void;
}

const Search = ({ value = "", onChange }: Props) => {
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
