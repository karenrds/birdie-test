import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CareRecipientSelector from './CareRecepientSelector';

configure({adapter: new Adapter()});

describe('CareRecipientSelector', () => {
  it("should render care recipients component", () => {
    const wrapper = shallow(<CareRecipientSelector />);
    expect(wrapper.find('select[name="recipients"]').prop('value')).toEqual('Select')  });
});