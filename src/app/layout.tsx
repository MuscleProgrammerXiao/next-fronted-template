'use client';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import BasicLayout from '@/layouts/BasicLayout';
import { setLoginUser } from '@/stores/loginUser';
import AccessLayout from '@/access/AccessLayout';
import React, { useCallback, useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store, { AppDispatch } from '@/stores';
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
	const dispatch = useDispatch<AppDispatch>();

	const doInitLoginUser = useCallback(() => {
		setTimeout(() => {
			const testUser = {
				userName: '测试登录',
				id: 1,
				userAvatar: 'https://avatars.githubusercontent.com/u/1?v=4',
			};
			dispatch(setLoginUser(testUser));
		}, 3000);
	}, []);
	useEffect(() => {
		doInitLoginUser();
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
					<Provider store={store}>
						<InitLayout>
							<BasicLayout>
								<AccessLayout>{children}</AccessLayout>
							</BasicLayout>
						</InitLayout>
					</Provider>
				</AntdRegistry>
			</body>
		</html>
	);
}
