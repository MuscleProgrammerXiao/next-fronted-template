/**
 * 全局底部栏组件
 * @returns
 */
import style from './index.module.scss';
export default function GloabeFooter() {
	const currentYear = new Date().getFullYear();
	return (
		<footer
			className={style.global_footer}
			style={{
				textAlign: 'center',
				paddingBlockStart: 12,
			}}
		>
			<div>&copy; {currentYear}. All rights reserved.</div>
			<div>作者：xiao. </div>
		</footer>
	);
}
