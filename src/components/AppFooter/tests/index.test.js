import React from 'react';
import AppFooter from '../index';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';

describe('<AppFooter />', () => {
  it('Expect to be render correctly', () => {
    const props = {
      deploymentEnvironment: 'test',
      frontEndBuildNumber: 123
    };
    const wrapper = renderer.create(
      <IntlProvider locale={'en'}>
        <AppFooter {...props} />
      </IntlProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
