import { useMemo } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useUsers = (users, query) => useMemo(() => users.filter((user) => {
  const values = Object.values(user).join('');
  return values.includes(query);
}), [users, query]);
