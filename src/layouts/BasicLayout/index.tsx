'use client';
import { GithubFilled, LogoutOutlined, SearchOutlined } from '@ant-design/icons';
import { ProLayout } from '@ant-design/pro-components';
import { Dropdown, Input } from 'antd';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { menus } from '../../../config/menu';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores';
import GloabeFooter from '@/components/GlobalFooter';
import getAccessibleMenus from '@/access/menuAcess';

import './index.css';

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
				display: 'flex',
				alignItems: 'center',
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
/**
 * 全局通用布局
 * @param children
 * @returns
 */
export default function BasicLayout({ children }: Props) {
	const pathname = usePathname();
	const loginUser = useSelector((state: RootState) => state.loginUser);
	console.log(loginUser);

	return (
		<div id="basicLayout">
			<ProLayout
				title="面试鸭刷题平台"
				layout="top"
				logo={<Image src="/assets/logo.gif" unoptimized width={32} height={32} alt="面试鸭刷题网站" />}
				location={{ pathname }}
				avatarProps={{
					src: loginUser.userAvatar || '/assets/logo.png',
					size: 'small',
					title: loginUser.userName || 'xiao',
					render: (props, dom) => {
						return (
							<Dropdown
								menu={{
									items: [
										{
											key: 'logout',
											icon: <LogoutOutlined />,
											label: '退出登录',
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
						<a key="GithubFilled" href="https://github.com/MuscleProgrammerXiao" target="_blank">
							<GithubFilled />
						</a>,
					];
				}}
				headerTitleRender={(logo, title, _) => (
					<a>
						{logo}
						{title}
					</a>
				)}
				// 渲染底部栏
				footerRender={() => <GloabeFooter />}
				onMenuHeaderClick={(e) => console.log(e)}
				//定义有哪些菜单
				menuDataRender={() => getAccessibleMenus(loginUser, menus)}
				// 定义了菜单项如何渲染
				menuItemRender={(item, dom) => (
					<Link href={item.path || '/'} target={item.target}>
						{dom}
					</Link>
				)}
			>
				{children}
			</ProLayout>
		</div>
	);
}
