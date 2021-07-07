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
        page:1
    })
  
    const {total ,data ,page} = values;
// console.log(data)
if(data.length) {
  if((data[0].type === "film" && type === "images") || (data[0].type === "photo" && type === "videos")){
    setValues({...values , data:[] , page : 1});
  }
}

    

     useEffect(() => {
      // console.log("useEffect");
      getAllData();
     },[type]);
 
     const getAllData = async () => {
        try {
            const result = await getData(page , type);
            // console.log(result);
            result && setValues({total:result.total , data:data.concat(result.hits) , page:page+1});
        } catch (error) {
            console.log(error)
        }
    }

// console.log(data);
  return (
    <div className='page'>
      <InfiniteScroll
        pageStart={1}
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
            if(!(item.tags.includes("nude") || item.tags.includes("girl") || item.tags.includes("erotica")))
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
