import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <>
            {/* 공통 레이아웃이 있다면 여기 배치 */}
            <Outlet />
        </>
    )
}

export default App;