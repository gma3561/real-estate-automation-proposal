import React from 'react';

const Hero = () => {
  const tools = [
    {
      icon: '💬',
      title: '채널톡 통합',
      desc: '모든 고객 문의를 하나로 통합 관리',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📊',
      title: '구글 시트 연동',
      desc: '실시간 데이터 동기화 및 자동화',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: '💼',
      title: '슬랙 알림 시스템',
      desc: '즉시 알림으로 빠른 대응 가능',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      icon: '🌐',
      title: 'AI 자동화',
      desc: '지능형 고객 응답 및 매물 추천',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-responsive text-center text-white">
        <div className="space-y-8 animate-fadeInUp">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-display font-black leading-tight">
              <span className="block">부동산 업계</span>
              <span className="block gradient-text-accent bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                자동화 혁신
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto font-light leading-relaxed">
              기존 도구를 활용한 스마트 자동화로 업무 효율성을 
              <span className="font-bold text-yellow-300"> 300% 향상</span>시키고, 
              매출을 <span className="font-bold text-green-300">40% 증가</span>시키는 통합 솔루션
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl hover:shadow-3xl">
              📊 라이브 데모 보기
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 backdrop-blur-sm">
              📞 무료 상담 신청
            </button>
          </div>
        </div>

        {/* Tool Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          {tools.map((tool, index) => (
            <div key={index} className="group">
              <div className="glass rounded-2xl p-6 hover-lift group-hover:scale-105 transition-all duration-500 h-full">
                <div className={`text-4xl mb-4 group-hover:animate-bounce bg-gradient-to-r ${tool.gradient} p-3 rounded-xl w-fit mx-auto`}>
                  {tool.icon}
                </div>
                <h3 className="text-title font-bold mb-3 text-white">
                  {tool.title}
                </h3>
                <p className="text-caption text-blue-100 leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-4xl font-black text-yellow-400 mb-2">300%</div>
            <div className="text-blue-100">업무 효율성 향상</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-green-400 mb-2">40%</div>
            <div className="text-blue-100">매출 증가율</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-pink-400 mb-2">1,612%</div>
            <div className="text-blue-100">투자 수익률</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
