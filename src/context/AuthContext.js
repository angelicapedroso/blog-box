import React, { useContext, createContext } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export function AuthProvider({ children, value }) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthValue() {
  return useContext(AuthContext);
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string,
  }),
};

AuthProvider.defaultProps = {
  value: {
    user: {
      displayName: '',
      email: '',
    },
  },
};
