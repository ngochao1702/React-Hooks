import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

GetApi.propTypes = {
  list: PropTypes.array,
};
GetApi.defaultProps = {
  list: null,
};

function GetApi(props) {
  const { list } = props;

  // useEffect(async () => {
  //   axios
  //     .get(
  //       `https://gist.githubusercontent.com/ngochao1702/2c741806070995e03c86f9cfc4a98da5/raw/505c21e4c83eb97d40842b4d23af99acd7f27d02/gistfile1.txt`
  //     )
  //     .then((res) => {
  //       const list = res.list;
  //       console.log(list)
  //       setBook(list);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <p>{item.name}</p>
        </li>
      ))}
    </ul>

  );
}

export default GetApi;
