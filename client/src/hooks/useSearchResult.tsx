
import React from "react";
import { useEffect, useState } from "react";
import { commonAxios } from "api/CommonAxios";
import { useDispatch, useSelector } from "react-redux";
import { setLimit } from "store/SearchSlice";
import { setLoading } from "store/ListSlice";

const useSearchResult = (searchType, searchValue) => {
  const dispatch = useDispatch();
  const limit = useSelector((state) => state.search.limit);
  const [searchList, setSearchList] = useState([]);
  const [noResult, setNoResult] = useState(false);
  useEffect(() => {
    const getSearchResult = async () => {
      dispatch(setLoading(true));
      try {
        const result = await commonAxios.get(`/searchList/${searchType}`, {
          params: {
            value: searchValue,
          },
        });
        setSearchList(result.data);
        setNoResult(result.data.length === 0);
      } catch (error) {
        console.log(error);
      }
      dispatch(setLoading(false));
    };
    if (searchValue.length > 0) {
      getSearchResult();
    }
  }, [searchType, searchValue]);

  const addList = (type) => {
    if (searchList.length > 0) {
      dispatch(setLimit(searchList.length));
      dispatch(type(true));
    }
  };

  return { searchList, limit, addList, noResult };
};

export default useSearchResult;
