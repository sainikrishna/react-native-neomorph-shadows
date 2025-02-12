import React from 'react';
import InnerShadow from './InnerShadow';
import OuterShadow from './OuterShadow';

export default class Shadow extends React.PureComponent {
  render() {
    const { inner, ...other } = this.props;
    return inner ? <InnerShadow {...other} /> : <OuterShadow {...other} />;
  }
}

Shadow.defaultProps = {
  inner: false,
  useArt: false,
};
