import React from "react";
import Enzyme, { mount, ReactWrapper } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-enzyme";
import Search, { ISearch } from "./index";

Enzyme.configure({ adapter: new Adapter() });

const mockOnChange = jest.fn();
const defaultProps: ISearch = {
  value: "",
  onChange: (value: string) => mockOnChange(value),
};

describe("Search Component", () => {
  let component: ReactWrapper;

  const renderComponent = (props: any = defaultProps) => {
    component = mount(<Search {...defaultProps} {...props} />);
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  describe("Rendering", () => {
    it("WHEN component is rendering THEN instance is to be defined and render one input", () => {
      renderComponent({ value: undefined });

      expect(component).toBeDefined();
      expect(component.find("input")).toHaveLength(1);
    });

    it("WHEN change input THEN mockOnChange should be called", () => {
      renderComponent();

      const event = {
        currentTarget: {
          value: "foo-bar",
        },
      } as React.ChangeEvent<HTMLInputElement>;

      const { onChange = jest.fn() } = component.find("input").at(0).props();
      onChange(event);
      expect(mockOnChange).toHaveBeenLastCalledWith("foo-bar");
    });
  });
});
