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
  let {type , data ,total ,query,category} = useSelector(state => state);
  data = data.hits ? data.hits : [];
  console.log(data , type);
  const dispatch = useDispatch();

    const [values , setValues] = useState({
      newData : [],
      page:3
    });
    
    const {newData,newTotal,page} = values;

    useEffect(() => {
      setValues({newData:[]}); 
    },[query,category])
  
    useEffect(() => {
      data && setValues({ newData:newData.concat(data) , page: page + 1});
    },[data])

   
    //  console.log(data);

     const getAllData = () => {
              try {
           dispatch(fetchData({page:page , type:type ,query:query}));
           
            // const img = newData.concat(data)
            // // console.log(result);
           
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='page'>
      <InfiniteScroll
        pageStart={3}
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
