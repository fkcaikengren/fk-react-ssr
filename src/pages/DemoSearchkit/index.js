import {useMemo} from 'react'
import {
  SearchkitManager,
  SearchBox,
  RefinementListFilter,
  Hits,
  HitsStats,
  SearchkitComponent,
  SelectedFilters,
  MenuFilter,
  HierarchicalMenuFilter,
  Pagination,
  ResetFilters,
  SearchkitProvider
  } from "searchkit";

const DemoSearchkit = ()=>{

  const searchkit = useMemo(() => new SearchkitManager('https://api-test.castlery.co/search/product'), [])
  return <SearchkitProvider searchkit={searchkit}>
    <div>
    <SearchBox
        searchOnChange={true}
        queryOptions={{analyzer:"standard"}}
        queryFields={["name"]}/>
  </div>
  </SearchkitProvider>
}

export default DemoSearchkit