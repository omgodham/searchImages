import React, { useState, useEffect } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import InfiniteScroll from "react-infinite-scroller";
import Masonry from "react-masonry-component";
import {masonryOptions} from "../../utils/masonry"
import {getData} from './helper';

import Image from './Image';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from "../../actions/fetchData";

function Images() {
  let {type , data ,total} = useSelector(state => state);
  data = data.hits ? data.hits : [];
  console.log(data , type);
  const dispatch = useDispatch();

    const [values , setValues] = useState({
      newData : [],
      page:4
    });
    
   const {page,newData,newTotal} = values;
    //  console.log(data);

     const getAllData = () => {
       console.log("bab");
        try {
          dispatch(fetchData(page , type));
          
            // const result = await getData(page , type);
            // // console.log(result);
            data && setValues({newData:newData.concat(data) , page:page+1});
        } catch (error) {
            console.log(error)
        }
    }

console.log(newData, newTotal);
  return (
    <div className='page'>
      <InfiniteScroll
        pageStart={page}
        loadMore={getAllData}
        hasMore={total > newData.length}
        className="d-flex justify-content-center"
      >
        <Masonry
          className={"grid"}
          elementType={"div"}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >
          {!newData.length ? data?.map((item, i) => {
            return (
              <Image item={item} key={i}/>
            ) 
          }) : newData?.map((item, i) => {
            return (
              <Image item={item} key={i}/>
            ) 
          })}
        </Masonry>
      </InfiniteScroll>
    </div>
  );
}

export default Images;
