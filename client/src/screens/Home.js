import React, {
  Fragment,
  useContext,
  useState,
  useLayoutEffect,
  useEffect,
} from "react";
import { LoaderContext } from "../helpers/loaderContext";
import Searchfilter from "../partials/searchfilter";
import apiClient from "../network/apiClient";
import JobFeed from "../partials/jobsFeed";
import TextSearch from '../partials/textSearch'

const Home = () => {
  const [filters, setFilters] = useState({
    filters: { name:'',department_id: [], promotions_id: [] },
  });
  const [products, setProducts] = useState([]);
  const [size, setSize] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(6);
  const [render, setRender] = useState(false);
  const { load } = useContext(LoaderContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
      let ignore = false
           if(!ignore){

               getData();
             }

    return ()=>{ignore = true}

  }, []);

  useLayoutEffect(() => {
    const loadit = load();
    const timer = setTimeout(() => {
      setRender(loadit);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getData = async () => {
    try {
      let Products = await apiClient.getProducts(0, limit, filters.filters);
      setProducts(Products.data.data);
      setSize(Products.data.size);
      setSkip(0);
    } catch (e) {
      throw Error;
    }
  };
  const LoadMoreData = async () => {
    let toSkip = skip + limit;

    try {
      let Products = await apiClient.getProducts(
        toSkip,
        limit,
        filters.filters
      );
      let newProducts = [...products];
      newProducts.push(...Products.data.data);
      setProducts(newProducts);
      setSize(Products.data.size);
      setSkip(toSkip);
    } catch (e) {
      throw Error;
    }
  };

  const handleFilters = (filter, filterBy) => {
    const newFilters = { ...filters };
    newFilters.filters[filterBy] = filter;
    setFilters(newFilters);
    setShow(true);
    getData();
    return setTimeout(() => {
      setShow(false);
    }, 500);
  };
  console.log(filters);
  return render ? (
    <Fragment>
      <div className="container" style={{ paddingTop: "50px" }}>
        <div className="row">
          <div className="col-md-3">
              <TextSearch filterHandler={(filters, filterby) =>
                handleFilters(filters, filterby)} />
            <Searchfilter
              filterHandler={(filters, filterby) =>
                handleFilters(filters, filterby)
              }
            />
          </div>

          <div className="col-md-9">
            <JobFeed
              load={show}
              products={products}
              size={size}
              filterPromotion={filters.filters.promotions_id}
            />
            <div className="loadMoreSection">
              <button
                disabled={size <= 6 || size === products.length}
                onClick={LoadMoreData}
              >
                {" "}
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  ) : (
    "Loading"
  );
};

export default Home;
