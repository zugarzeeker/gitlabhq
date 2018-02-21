import FilteredSearchManager from '~/filtered_search/filtered_search_manager';

export default ({ page }) => {
  const filteredSearchEnabled = FilteredSearchManager && document.querySelector('.filtered-search');
  if (filteredSearchEnabled) {
    const filteredSearchManager = new FilteredSearchManager({ page });
    filteredSearchManager.setup();
  }
};
