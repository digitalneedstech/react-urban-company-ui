import React, { useState } from "react";
import _ from "lodash";
import { fetchData } from "../../../redux/helpers";

export default function ActiveInactive(props) {
  let { service } = props;
  const [published, setPublished] = useState(!!service.isPublished);

  const onChange = async () => {
    let url = `/services/${service.id}`;
    let response = await fetchData(url, "PATCH", {
      isPublished: !published ? 1 : 0,
    });
    if (!_.isEmpty(response)) {
      setPublished(!published);
    }
  };
  return (
    <div className="toogleSwitch">
      <label className="switch">
        <input
          type="checkbox"
          checked={service.state == "DRAFT" ? false : published}
          onChange={onChange}
          disabled={service.state == "DRAFT" ? true : false}
        />
        <div className="slider round slider2">
          <span className="swactive">ACTIVE</span>
          <span className="swinactive">INACTIVE</span>
        </div>
      </label>
    </div>
  );
}
