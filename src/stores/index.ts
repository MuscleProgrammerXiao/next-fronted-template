import { configureStore } from '@reduxjs/toolkit';
import loginUser from './loginUser';
const store = configureStore({
	reducer: {
		// 在这里存放状态
		loginUser,
	},
});

// 用于类型推断和提示
// 推导出 Redux store 中所有状态的类型，确保在访问 state 时享有类型安全。
// 推导出 dispatch 方法的类型，确保在派发 actions 时有类型安全，避免错误的 action 被派发。
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
