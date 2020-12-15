import React from 'react';

export interface Iitem {
    name: string;
    url: string;
}

interface Props {
    items: Iitem[];
}

const Table = ({ items }: Props): React.ReactElement => {
    const renderHeader = (): React.ReactElement => (
        <div>
            <div>Name</div> <div>Url</div>
        </div>
    );

    const renderBody = (): React.ReactElement[] =>
        items.map(({ name, url }: Iitem, index: number) => (
            <div key={`div-${name}`} className={index % 2 === 0 ? 'odd' : 'even'}>
                <div>{name}</div>
                <div>{url}</div>
            </div>
        ));

    return (
        <div>
            {renderHeader()}
            {renderBody()}
        </div>
    );
};

export default Table;
