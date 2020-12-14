import React from "react";

export interface Iitem {
  name: string;
  url: string;
}

interface Props {
  items: Iitem[];
}

const Table = ({ items }: Props) => {
  return (
    <div>
      <div>
        <div>Name</div> <div>Url</div>
      </div>
      {items.map(({ name, url }: Iitem, index: number) => (
        <div key={index} className={index % 2 == 0 ? "odd" : "even"}>
          <div>{name}</div>
          <div>{url}</div>
        </div>
      ))}
    </div>
  );
};

export default Table;
