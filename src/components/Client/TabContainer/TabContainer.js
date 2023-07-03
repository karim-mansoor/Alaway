import React from 'react';

// Components
import Typography from 'material-ui/Typography';

const tabContainer = (props) => {
  const { children, dir } = props;
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

export default tabContainer;