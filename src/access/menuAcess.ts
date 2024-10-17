import checkAccess from '@/access/checkAccess';
import { menus } from '../../config/menu';

/**
 * 获取有权限、可访问的菜单
 * @param loginUser
 * @param menuItems
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

const getAccessibleMenus = (loginUser: LoginUserVO, menuItems = menus) => {
	return menuItems.filter((item) => {
		if (!checkAccess(loginUser, item.access)) {
			return false;
		}
		if (item.children) {
			item.children = getAccessibleMenus(loginUser, item.children);
		}
		return true;
	});
};

export default getAccessibleMenus;
