import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import md5 from 'md5';

import Gravatar from '../lib/gravatar';
import Avatar from '../lib/avatar';
import Email from '../lib/email';

describe('<Gravatar />', () => {
    it('contains an <Avatar/> component', function() {
      const wrapper = shallow(<Gravatar/>);
      expect(wrapper.find(Avatar)).to.have.length(1);
    });

    it('contains an <Email /> component', function () {
      const wrapper = shallow(<Gravatar />);
      expect(wrapper.find(Gravatar)).to.have.length(1);
    });

    it('should have an initial email state', function () {
      const wrapper = shallow(<Gravatar />);
      expect(wrapper.state().src).to.equal('http://placehold.it/200x200');
    });

    it('should update the src state on clicking fetch', function () {
      const wrapper = shallow(<Gravatar />);
      wrapper.setState({ email: 'hello@thing.io' });
      wrapper.find('button').simulate('click');
      expect(wrapper.state('email')).to.equal('hello@thing.io');
      expect(wrapper.state('src')).to.equal(`http://gravatar.com/avatar/${md5('thing@gmail.com')}?s=200`);
    });
});
