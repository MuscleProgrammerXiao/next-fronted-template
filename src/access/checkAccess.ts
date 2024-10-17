import ACCESS_ENUM from '@/access/accessEnum';

/**
 * 检查用户是否有访问权限
 * @param userRole 用户角色
 * @param access 访问权限
 * @returns 是否有权限
 */
type LoginUserVO = {
	createTime?: string;
	id?: number;
	updateTime?: string;
	userAvatar?: string;
	userName?: string;
	userProfile?: string;
	userRole?: string;
};

const checkAccess = (loginUser: LoginUserVO, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
	// 获取当前登录用户具有的权限（如果没有 loginUser，则表示未登录）
	const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
	if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
		return true;
	}
	// 如果用户登录才能访问
	if (needAccess === ACCESS_ENUM.USER) {
		// 如果用户没登录，那么表示无权限
		if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
			return false;
		}
	}
	// 如果需要管理员权限
	if (needAccess === ACCESS_ENUM.ADMIN) {
		// 如果不为管理员，表示无权限
		if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
			return false;
		}
	}
	return true;
};
export default checkAccess;
