import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./structure-examples/home";
import { RenderBased } from "./structure-examples/render-based";
import { PropsBased } from "./structure-examples/props-based";
import { HookBased } from "./structure-examples/hook-based";
import { HybridBased } from "./structure-examples/hybrid-based";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/render-based" element={<RenderBased />} />
      <Route path="/props-based" element={<PropsBased />} />
      <Route path="/hook-based" element={<HookBased />} />
      <Route path="/hybrid-based" element={<HybridBased />} />
    </Routes>
  );
}
