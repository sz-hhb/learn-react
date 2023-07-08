import PropTypes from "prop-types";
import React, { memo } from "react";
import Pagination from "@mui/material/Pagination";
import { PaginationWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  changeCurrentPageAction,
  fetchRoomListAction,
} from "@/store/modules/entire/actionCreators";

const EntirePagination = memo((props) => {
  const { currentPage, totalCount, roomList } = useSelector(
    (state) => ({
      currentPage: state.entire.currentPage,
      totalCount: state.entire.totalCount,
      roomList: state.entire.roomList,
    }),
    shallowEqual
  );
  const totalPage = Math.ceil(totalCount / 20);
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;

  const dispatch = useDispatch();
  function pageChangeHandle(event, pageCount) {
    window.scrollTo(0, 0);
    // dispatch(changeCurrentPageAction(pageCount - 1));
    dispatch(fetchRoomListAction(pageCount - 1));
  }

  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={totalPage} onChange={pageChangeHandle} />
          <div className="desc">
            第{startCount}-{endCount}个房源,共超过{totalCount}个
          </div>
        </div>
      )}
    </PaginationWrapper>
  );
});

EntirePagination.propTypes = {};

export default EntirePagination;
