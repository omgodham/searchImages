import React, { useState, useEffect } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import InfiniteScroll from "react-infinite-scroller";
import Masonry from "react-masonry-component";
import {masonryOptions} from "../../utils/masonry"
import {getData} from './helper';

import Image from './Image';

function Images({type}) {
    const [values , setValues] = useState({
        total:0,
        data:[],
        page:4
    })
    const {total ,data ,page} = values;

     useEffect(() => {
        getAllData()
     },[]);
 
     const getAllData = async () => {
        try {
            const result = await getData(page , type);
            console.log(result);
            result && setValues({total:result.total , data:data.concat(result.hits) , page:page+1});
        } catch (error) {
            console.log(error)
        }
    }

console.log(data);
  return (
    <div className='page'>
      <InfiniteScroll
        pageStart={page}
        loadMore={getAllData}
        hasMore={total > data.length}
        className="d-flex justify-content-center"
      >
        <Masonry
          className={"grid"}
          elementType={"div"}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >
          {data?.map((item, i) => {
            return (
              <Image item={item} key={i} type={type}/>
            ) 
          })}
        </Masonry>
      </InfiniteScroll>
    </div>
  );
}

export default Images;
