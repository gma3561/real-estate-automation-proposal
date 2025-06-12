import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '개요', href: '#overview', icon: '🎯' },
    { label: '시스템', href: '#system', icon: '⚙️' },
    { label: '퍼널분석', href: '#funnel', icon: '📈' },
    { label: '대시보드', href: '#dashboard', icon: '📊' },
    { label: 'ROI', href: '#roi', icon: '💰' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-dark border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="container-responsive">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
              <span className="text-white text-2xl">🏢</span>
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-white' : 'text-white'
              }`}>
                부동산 통합 자동화 시스템
              </h1>
              <p className={`text-sm transition-colors duration-300 ${
                scrolled ? 'text-gray-300' : 'text-blue-100'
              }`}>
                Real Estate CRM & Automation Platform
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex space-x-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`group flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                  scrolled 
                    ? 'text-white hover:bg-white/10 hover:text-blue-300' 
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="text-lg group-hover:animate-bounce">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Status Indicator */}
          <div className="hidden md:flex items-center space-x-6">
            <div className={`flex items-center text-sm font-medium transition-colors duration-300 ${
              scrolled ? 'text-green-400' : 'text-green-300'
            }`}>
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              실시간 연동
            </div>
            <div className={`text-sm transition-colors duration-300 ${
              scrolled ? 'text-gray-300' : 'text-blue-100'
            }`}>
              업데이트: 오후 12:26
            </div>
            <button className="btn-primary text-sm py-2 px-4 focus-ring">
              📞 상담신청
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-xl glass transition-all duration-300 hover:scale-105">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-white rounded"></div>
              <div className="w-full h-0.5 bg-white rounded"></div>
              <div className="w-full h-0.5 bg-white rounded"></div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
