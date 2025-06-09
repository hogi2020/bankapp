import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard } from 'lucide-react';

interface LoginForm {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [ loginForm, setLoginForm ] = useState<LoginForm>({
        username: "",
        password: ""
    });

    // keyof를 사용하면 field는 "username" | "password" 만 가질 수 있게 됩니다.
    const handleLoginFormChange = (field: keyof LoginForm) => (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setLoginForm({ ...loginForm, [field]: e.target.value });
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CreditCard className="w-8 h-8 text-blue-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">계좌관리 시스템</h1>
                    <p className="text-gray-600 mt-2">안전한 온라인 뱅킹</p>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">사용자명</label>
                        <input
                            type="text"
                            value={loginForm.username}
                            onChange={handleLoginFormChange('username')}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="사용자명을 입력하세요"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">비밀번호</label>
                        <input
                            type="password"
                            value={loginForm.password}
                            onChange={handleLoginFormChange('password')}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="비밀번호를 입력하세요"
                            required
                        />
                    </div>
                    <button
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                        로그인
                    </button>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-gray-600">계정이 없으신가요?</p>
                    <button
                        className="text-blue-600 hover:text-blue-700 font-medium mt-1"
                        onClick={() => navigate('/register')}
                    >
                        회원가입
                    </button>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg text-sm text-gray-600">
                    <p><strong>데모 계정:</strong></p>
                    <p>사용자명: sample</p>
                    <p>비밀번호: 12345</p>
                </div>
            </div>
        </div>
    );
}

export default Login;