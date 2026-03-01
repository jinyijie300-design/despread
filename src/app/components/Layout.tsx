import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Globe, Shield, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import '../../styles/fonts.css';

// Utility for class names
export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '关于我们', path: '/about' },
    { name: '核心服务', path: '/services' },
    { name: '套餐报价', path: '/pricing' },
    { name: '案例展示', path: '/cases' },
    { name: '合规说明', path: '/compliance' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center overflow-hidden">
              <img src="/logo.png" alt="DeSpread" className="w-full h-full object-contain" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 font-sans tracking-tight text-[#5d007a00] text-[24px] font-bold">
              DeSpread
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                    isActive(link.path)
                      ? "text-violet-400 bg-slate-800/50"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/30"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40"
            >
              联系我们
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  isActive(link.path)
                    ? "text-violet-400 bg-slate-800"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-violet-600 text-white px-5 py-3 rounded-md font-medium"
            >
              联系我们
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="DeSpread" className="w-6 h-6 object-contain brightness-0 invert" />
              </div>
              <span className="text-xl font-bold text-white">DeSpread</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              聚焦合规化品牌包装与全球化精准宣发，为Web3项目提供从品牌搭建到落地执行的一站式营销解决方案。
            </p>
            <div className="flex items-center space-x-2 text-emerald-400 text-sm font-medium">
              <Shield className="w-4 h-4" />
              <span>合规经营 · 专业服务</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">快速导航</h3>
            <ul className="space-y-3">
              {[
                { name: '关于我们', path: '/about' },
                { name: '核心服务', path: '/services' },
                { name: '套餐报价', path: '/pricing' },
                { name: '案例展示', path: '/cases' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-violet-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">核心业务</h3>
            <ul className="space-y-3">
              <li className="text-slate-400 text-sm">整合营销全案</li>
              <li className="text-slate-400 text-sm">品牌全案策划</li>
              <li className="text-slate-400 text-sm">海外社媒运营</li>
              <li className="text-slate-400 text-sm">Web3线下活动</li>
              <li className="text-slate-400 text-sm">国内合规包装</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">联系方式</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-1 h-1 mt-2 rounded-full bg-violet-500" />
                <span className="text-slate-400 text-sm">地址：浙江省杭州市滨江区互联网小镇</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1 h-1 mt-2 rounded-full bg-violet-500" />
                <span className="text-slate-400 text-sm">邮箱：1005685376@qq.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1 h-1 mt-2 rounded-full bg-violet-500" />
                <span className="text-slate-400 text-sm">电话：13484349952</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1 h-1 mt-2 rounded-full bg-violet-500" />
                <span className="text-slate-400 text-sm">联系人：金经理</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} DeSpread Marketing. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <Link to="/compliance" className="hover:text-slate-300">合规声明</Link>
            <Link to="#" className="hover:text-slate-300">隐私政策</Link>
            <Link to="#" className="hover:text-slate-300">服务条款</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-violet-500/30" style={{ fontFamily: "'Montserrat', 'Noto Sans SC', sans-serif" }}>
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
