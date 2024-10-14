"use client";
import GloabeFooter from "@/components/GlobalFooter";
import {
  GithubFilled,
  LogoutOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { ProLayout } from "@ant-design/pro-components";
import { Dropdown, Input } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menus } from "../../../config/menu";
import style from "./index.module.scss";
/**
 * 搜索条
 * @returns
 */
const SearchInput = () => {
  return (
    <div
      key="SearchOutlined"
      aria-hidden
      style={{
        display: "flex",
        alignItems: "center",
        marginInlineEnd: 24,
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Input
        style={{
          borderRadius: 4,
          marginInlineEnd: 12,
        }}
        prefix={<SearchOutlined />}
        placeholder="搜索题目"
        variant="borderless"
      />
    </div>
  );
};

interface Props {
  children: React.ReactNode;
}
export default function BasicLayout({ children }: Props) {
  const pathname = usePathname();
  return (
    <div
      className={style.basicLayouts}
      style={{
        height: "100vh",
        overflow: "auto",
      }}
    >
      <ProLayout
        style={{ height: "100vh" }}
        title="basic layout"
        layout="top"
        location={{ pathname }}
        avatarProps={{
          src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
          size: "small",
          title: "七妮妮",
          render: (props, dom) => {
            return (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: "logout",
                      icon: <LogoutOutlined />,
                      label: "退出登录",
                    },
                  ],
                }}
              >
                {dom}
              </Dropdown>
            );
          },
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            <SearchInput key="SearchInput" />,
            <a
              key="GithubFilled"
              href="https://github.com/MuscleProgrammerXiao"
              target="_blank"
            >
              <GithubFilled />
            </a>,
          ];
        }}
        headerTitleRender={(logo, title, _) => {
          const defaultDom = (
            <a>
              {logo}
              {title}
            </a>
          );
          if (typeof window === "undefined") return defaultDom;
          if (document.body.clientWidth < 1400) {
            return defaultDom;
          }
          if (_.isMobile) return defaultDom;
          return <>{defaultDom}</>;
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        //定义有哪些菜单
        menuDataRender={() => menus}
        // 定义了菜单项如何渲染
        menuItemRender={(item, dom) => (
          <Link href={item.path || "/"} target={item.target}>
            {dom}
          </Link>
        )}
        // 渲染底部栏
        footerRender={() => <GloabeFooter />}
      >
        {children}
      </ProLayout>
    </div>
  );
}
