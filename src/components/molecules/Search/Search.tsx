import React, { useState } from 'react';
import './Search.styles.less';

export interface ISearch {
    value?: string;
    onChange: (value: string) => void;
}

const Search = ({ value = '', onChange }: ISearch): React.ReactElement => {
    const [term, setTerm] = useState(value);

    return (
        <div>
            <input
                className="ml-search"
                type="text"
                value={term}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setTerm(event.currentTarget.value);
                }}
            />
            <button type="button" className="ml-button" onClick={() => onChange(term)} disabled={term === ''}>
                Search
            </button>
        </div>
    );
};

export default Search;
