export const selectContacts = state => state.users.items;
export const selectFilters = state => state.filter.status;
export const selectIsLoading = state => state.users.isLoading;
export const selectError = state => state.users.error;
