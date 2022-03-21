import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import GroupRoutines from "./GroupRoutines";

function GroupMain() {
  const [isMain, setIsMain] = useState(true);
  const [selectedGroupId, setSelectedGroupId] = React.useState(1);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("group")) {
      setIsMain(false);
    } else setIsMain(true);
  }, [location]);

  return (
    <div>
      {isMain ? (
        <GroupRoutines />
      ) : (
        <Outlet context={[selectedGroupId, setSelectedGroupId]} />
      )}
    </div>
  );
}

export default GroupMain;
