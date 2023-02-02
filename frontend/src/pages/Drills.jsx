// import React, { useState } from "react";
import ButtonCreateDrill from "../components/drills/ButtonCreateDrill";
import NavBarDash from "../components/dashboard/NavBardash";
import AllDrills from "../components/drills/AllDrills";

export default function Drills() {
  return (
    <div>
      <NavBarDash />
      <ButtonCreateDrill />
      <AllDrills />
    </div>
  );
}
