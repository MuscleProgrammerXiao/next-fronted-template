'use client';
import style from './page.module.scss';
export default function Page() {
	return (
		<main className={style.page}>
			<header
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					paddingLeft: '28px',
					textAlign: 'center',
					height: '30px',
					backgroundColor: 'gray',
				}}
			>
				<p>logo</p>
				<nav>
					<div style={{ display: 'flex', columnGap: '20px', fontSize: '16px' }}>
						<span>link1</span>
						<span>link2</span>
						<span>link3</span>
					</div>
				</nav>
			</header>
			<main>main</main>
			<footer>footer</footer>
		</main>
	);
}
