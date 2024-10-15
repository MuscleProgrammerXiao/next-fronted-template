'use client';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import BasicLayout from '@/layouts/BasicLayout';
import React, { useCallback, useEffect } from 'react';
import '../assets/globals.css';

/**
 * 全局初始化函数
 * @param children
 * @returns
 */
const InitLayout: React.FC<
	Readonly<{
		children: React.ReactNode;
	}>
> = ({ children }) => {
	/**
	 * 全局初始化函数，有全局单次调用的代码，都可以写到这里
	 */
	const doInit = useCallback(() => {
		console.log('欢迎来到我的项目！');
	}, []);
	useEffect(() => {
		doInit();
	}, []);
	return children;
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="zh">
			<body>
				<AntdRegistry>
					<InitLayout>
						<BasicLayout>{children}</BasicLayout>
					</InitLayout>
				</AntdRegistry>
			</body>
		</html>
	);
}
