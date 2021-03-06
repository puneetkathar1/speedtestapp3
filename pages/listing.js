import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Sticky from 'react-stickynode';
import Toolbar from 'components/UI/Toolbar/Toolbar';
import CategorySearch from 'container/Listing/Search/CategorySearch/CategorySearch';
import { Checkbox } from 'antd';
import SectionGrid from 'components/SectionGrid/SectionGrid';
import { PostPlaceholder } from 'components/UI/ContentLoader/ContentLoader';
import ListingMap from 'container/Listing/ListingMap';
import { SearchContext } from 'context/SearchProvider';
import GetAPIData, {
  Paginator,
  SearchedData,
  SearchStateKeyCheck,
  ProcessAPIData,
} from 'library/helpers/get_api_data';
import { SINGLE_POST_PAGE } from 'settings/constant';
import {
  LISTING_PAGE_POST_LIMIT,
  LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP,
  LISTING_PAGE_COLUMN_WIDTH_WITH_MAP,
} from 'settings/config';
import ListingWrapper, {
  PostsWrapper,
  ShowMapCheckbox,
} from 'container/Listing/Listing.style';

const FilterDrawer = dynamic(() =>
  import('container/Listing/Search/MobileSearchView')
);

export default function ListingPage(props) {
  const { state, dispatch } = useContext(SearchContext);
  const statekey = SearchStateKeyCheck(state);
  const [posts, setPosts] = useState(
    props.processedData.slice(0, LISTING_PAGE_POST_LIMIT) || []
  );
  const [loading, setLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (statekey === true) {
      const newData = SearchedData(props.processedData);
      setPosts(newData);
    } else {
      setPosts(props.processedData.slice(0, LISTING_PAGE_POST_LIMIT) || []);
    }
  }, [statekey]);

  const handleMapToggle = () => {
    setShowMap((showMap) => !showMap);
  };

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const data = Paginator(posts, props.processedData, LISTING_PAGE_POST_LIMIT);
      setPosts(data);
      setLoading(false);
    }, 1000);
  };

  let columnWidth = LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP;
  if (showMap) {
    columnWidth = LISTING_PAGE_COLUMN_WIDTH_WITH_MAP;
  }

  let columnCount = 'col-24';


  return (
    <ListingWrapper>
      <Head>
        <title>Listing | A react next listing template</title>
      </Head>

      <Sticky top={82} innerZ={999} activeClass="isHeaderSticky">
        <Toolbar

          right={
            <ShowMapCheckbox>
              <Checkbox defaultChecked={false} onChange={handleMapToggle}>
                Show map
              </Checkbox>
            </ShowMapCheckbox>
          }
        />
      </Sticky>

      <PostsWrapper className={columnCount}>
        <SectionGrid
          link={SINGLE_POST_PAGE}
          columnWidth={columnWidth}
          data={posts}
          totalItem={props.processedData.length}
          limit={LISTING_PAGE_POST_LIMIT}
          loading={loading}
          handleLoadMore={handleLoadMore}
          placeholder={<PostPlaceholder />}
        />
      </PostsWrapper>
      {showMap && <ListingMap loading={loading} mapData={posts} />}
    </ListingWrapper>
  );
}

export async function getStaticProps() {
  const apiUrl = [
    {
      endpoint: 'hotel',
      name: 'listingHotel',
    },
  ];
  const pageData = await GetAPIData(apiUrl);
  const processedData = ProcessAPIData(pageData);
  return {
    props: { processedData: processedData },
  };
}
