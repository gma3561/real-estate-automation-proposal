import React from 'react';

const Overview = () => {
  const goals = [
    {
      icon: '⚡',
      title: '업무 효율성 300% 향상',
      desc: 'AI 자동화를 통한 반복 업무 완전 제거',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📈',
      title: '매출 40% 증가',
      desc: '체계적인 고객 관리로 전환율 극대화',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🔒',
      title: '데이터 보안 강화',
      desc: '직원 정보 유출 방지 완벽 보안 시스템',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const existingTools = [
    '📱 채널톡 자동화',
    '📊 구글 워크스페이스',
    '💬 슬랙 통합 알림',
    '📁 구글 드라이브 보안'
  ];

  const newFeatures = [
    '🌐 실시간 웹 대시보드',
    '📈 AI 퍼널 분석',
    '🤖 지능형 자동화 봇',
    '🕷️ 스마트 크롤링'
  ];

  const benefits = [
    {
      icon: '📊',
      title: '실시간 성과 추적',
      desc: '모든 KPI를 실시간으로 모니터링하고 즉시 대응',
      stats: '24/7 모니터링'
    },
    {
      icon: '🤝',
      title: '완벽한 고객 관리',
      desc: '문의부터 계약까지 전 과정 자동화 관리',
      stats: '이탈률 67% 감소'
    },
    {
      icon: '💡',
      title: '지능형 인사이트',
      desc: 'AI 기반 데이터 분석으로 최적의 전략 제시',
      stats: 'ROI 1,612%'
    }
  ];

  return (
    <section id="overview" className="section-padding-lg bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-headline text-gray-900 mb-6">
            🎯 프로젝트 개요
          </h2>
          <p className="text-body text-gray-600 max-w-4xl mx-auto leading-relaxed">
            기존 도구들을 최대한 활용하면서 인공지능 자동화를 통해 
            부동산 업무 효율성을 혁신적으로 개선합니다
          </p>
        </div>

        {/* Goals and Solution Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Goals */}
          <div className="space-y-8">
            <h3 className="text-title text-gray-900 mb-8 flex items-center">
              <span className="text-4xl mr-4">🚀</span>
              핵심 목표
            </h3>
            <div className="space-y-6">
              {goals.map((goal, index) => (
                <div 
                  key={index} 
                  className="card-elevated p-6 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${goal.color} rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg flex-shrink-0`}>
                      {goal.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-title font-bold text-gray-900 mb-2">
                        {goal.title}
                      </h4>
                      <p className="text-body text-gray-600 leading-relaxed">
                        {goal.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Architecture */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-title font-bold mb-8 flex items-center">
                <span className="text-3xl mr-3">🛠️</span>
                통합 솔루션 구성
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Existing Tools */}
                <div className="space-y-4">
                  <h4 className="font-bold text-blue-100 mb-4">기존 도구 최적화</h4>
                  <div className="space-y-3">
                    {existingTools.map((tool, index) => (
                      <div 
                        key={index} 
                        className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                      >
                        <span className="text-yellow-300">✨</span>
                        <span className="text-caption font-medium">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* New Features */}
                <div className="space-y-4">
                  <h4 className="font-bold text-purple-100 mb-4">신규 구축</h4>
                  <div className="space-y-3">
                    {newFeatures.map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                      >
                        <span className="text-pink-300">🚀</span>
                        <span className="text-caption font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-400 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="card-elevated p-8 hover-lift group-hover:border-blue-200 h-full">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h4 className="text-title font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h4>
                <p className="text-body text-gray-600 mb-6 leading-relaxed">
                  {benefit.desc}
                </p>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-caption font-medium">
                  {benefit.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
