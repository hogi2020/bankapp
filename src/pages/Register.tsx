import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import type { RegisterForm } from "../types/userTypes.ts";
import {registerUser} from "../services/userService.ts";

const Register = () => {
    const navigate = useNavigate();
    const [registerForm, setRegisterForm] = useState<RegisterForm>({
        name: "",
        password: "",
        email: ""
    });

    const handleRegisterFormChange = (field: keyof RegisterForm) => (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setRegisterForm({ ...registerForm, [field]: e.target.value });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await registerUser(registerForm);
        } catch (error) {
            console.error("Error creating user", error);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <User className="w-8 h-8 text-green-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">회원가입</h1>
                    <p className="text-gray-600 mt-2">새 계정을 만들어보세요</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">사용자명</label>
                        <input
                            type="text"
                            value={registerForm.name}
                            onChange={handleRegisterFormChange('name')}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">비밀번호</label>
                        <input
                            type="password"
                            value={registerForm.password}
                            onChange={handleRegisterFormChange('password')}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
                        <input
                            type="email"
                            value={registerForm.email}
                            onChange={handleRegisterFormChange('email')}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                    >
                        회원가입
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <button
                        className="text-green-600 hover:text-green-700 font-medium"
                        onClick={() => navigate('/login')}
                    >
                        로그인으로 돌아가기
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;