import React from 'react';
import './Table.styles.less';

export interface Iitem {
    name: string;
    url: string;
}

interface Props {
    items: Iitem[];
}

const Table = ({ items }: Props): React.ReactElement => {
    const renderHeaderOfTable = (): React.ReactElement => (
        <div className="header">
            <div className="item">Name</div> <div className="item">Url</div>
        </div>
    );

    const renderBodyOfTable = (): React.ReactElement[] =>
        items.map(({ name, url }: Iitem, index: number) => (
            <div key={`div-${name}`} className={index % 2 === 0 ? 'body odd' : 'body even'}>
                <div className="item">{name}</div>
                <div className="item">{url}</div>
            </div>
        ));

    return (
        <div className="table">
            {renderHeaderOfTable()}
            {renderBodyOfTable()}
        </div>
    );
};

export default Table;
