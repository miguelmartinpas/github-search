import React from 'react';
import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { act } from 'react-dom/test-utils';
import 'jest-enzyme';
import Search, { ISearch } from './index';

Enzyme.configure({ adapter: new Adapter() });

const mockOnChange = jest.fn();
const defaultProps: ISearch = {
    value: '',
    onChange: (value: string) => mockOnChange(value),
};

describe('Search Component', () => {
    let component: ReactWrapper;

    const renderComponent = (props: ISearch = defaultProps) => {
        component = mount(<Search {...defaultProps} {...props} />);
    };

    beforeEach(() => {
        mockOnChange.mockClear();
    });

    describe('Rendering', () => {
        it('WHEN component is rendering THEN instance is to be defined and render one input', () => {
            renderComponent({ ...defaultProps, value: undefined });

            expect(component).toBeDefined();
            expect(component.find('input')).toHaveLength(1);
        });

        it('WHEN change input THEN mockOnChange should be called', () => {
            renderComponent();

            const clickEvent = {
                currentTarget: {
                    tagName: 'Search',
                },
            } as React.MouseEvent<HTMLButtonElement>;

            const { onClick = jest.fn() } = component.find('button').at(0).props();
            onClick(clickEvent);
            expect(mockOnChange).toHaveBeenLastCalledWith('');
        });
    });
});
