"use client";
import React from "react";
import { Button } from "antd";
import style from "./page.module.scss";
export default function Page() {
  return (
    <main className="page">
      <h1 className={style.title}>1232</h1>
      <div style={{ height: "90vh" }}>测试</div>
      <p>
        <Button type="primary">123</Button>
      </p>
    </main>
  );
}
