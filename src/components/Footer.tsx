import React from 'react';

const Footer = () => {
  const quickStats = [
    { label: '업무 자동화율', value: '95%', icon: '⚡' },
    { label: '고객 만족도', value: '4.9/5', icon: '⭐' },
    { label: '평균 ROI', value: '1,612%', icon: '📈' },
    { label: '도입 기업', value: '150+', icon: '🏢' }
  ];

  const coreFeatures = [
    { name: 'AI 채널톡 자동 응답', desc: '95% 문의 자동 처리' },
    { name: '실시간 구글 시트 연동', desc: '100% 데이터 동기화' },
    { name: '스마트 슬랙 알림', desc: '0.1초 즉시 알림' },
    { name: '지능형 부동산 크롤링', desc: '1000+ 매물/일 수집' },
    { name: '실시간 성과 대시보드', desc: '24/7 모니터링' },
    { name: '예측 분석 및 인사이트', desc: 'AI 기반 시장 분석' }
  ];

  const benefits = [
    { metric: '업무 효율성', value: '+300%', desc: '반복 업무 완전 자동화' },
    { metric: '매출 증가', value: '+40%', desc: '고객 응답 속도 개선' },
    { metric: '응답 시간', value: '-80%', desc: '평균 30초 내 응답' },
    { metric: '데이터 정확도', value: '99%', desc: '수동 입력 오류 제거' },
    { metric: 'ROI 달성', value: '1,612%', desc: '투자 대비 압도적 수익' },
    { metric: '투자 회수', value: '0.7개월', desc: '업계 최단 회수 기간' }
  ];

  const contactMethods = [
    {
      icon: '📞',
      title: '무료 상담 전화',
      value: '02-1234-5678',
      desc: '평일 09:00 - 18:00',
      action: '📞 지금 전화하기'
    },
    {
      icon: '📧',
      title: '이메일 문의',
      value: 'contact@realestate-ai.com',
      desc: '24시간 접수 가능',
      action: '📧 이메일 보내기'
    },
    {
      icon: '💬',
      title: '카카오톡 상담',
      value: '@부동산자동화',
      desc: '실시간 1:1 상담',
      action: '💬 카톡 상담하기'
    },
    {
      icon: '🌐',
      title: '온라인 데모',
      value: 'demo.realestate-ai.com',
      desc: '5분 체험 가능',
      action: '🌐 데모 체험하기'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Quick Stats Section */}
        <div className="border-b border-gray-700/50">
          <div className="container-responsive py-12">
            <div className="text-center mb-8">
              <h3 className="text-title font-bold text-white mb-2">
                🚀 검증된 성과
              </h3>
              <p className="text-body text-gray-300">
                150+ 부동산 기업이 선택한 자동화 솔루션
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 glass rounded-2xl border border-white/10 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-caption text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container-responsive py-16">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-3xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-title font-bold text-white">
                    부동산 자동화 솔루션
                  </h3>
                  <p className="text-caption text-gray-300">
                    Real Estate CRM & Automation
                  </p>
                </div>
              </div>
              
              <p className="text-body text-gray-300 mb-6 leading-relaxed">
                AI 기반 자동화로 부동산 업무의 디지털 트랜스포메이션을 이끌고, 
                데이터 중심의 스마트한 의사결정을 지원합니다.
              </p>

              {/* Tool Icons */}
              <div className="flex flex-wrap gap-3">
                {[
                  { emoji: '📱', name: '채널톡' },
                  { emoji: '📊', name: '구글시트' },
                  { emoji: '💬', name: '슬랙' },
                  { emoji: '🌐', name: '웹대시보드' },
                  { emoji: '🤖', name: 'AI분석' },
                  { emoji: '⚡', name: '자동화' }
                ].map((tool, index) => (
                  <div 
                    key={index} 
                    className="group w-14 h-14 glass rounded-xl flex items-center justify-center text-xl hover-lift cursor-pointer border border-white/10"
                    title={tool.name}
                  >
                    <span className="group-hover:animate-bounce">{tool.emoji}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Features */}
            <div className="lg:col-span-1">
              <h4 className="text-title font-bold mb-6 text-blue-300 flex items-center">
                <span className="text-2xl mr-2">⚙️</span>
                핵심 기능
              </h4>
              <div className="space-y-4">
                {coreFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group p-3 glass rounded-xl hover-lift border border-white/5"
                  >
                    <div className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1 text-lg group-hover:animate-pulse">✓</span>
                      <div>
                        <div className="text-caption font-medium text-white mb-1">
                          {feature.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          {feature.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="lg:col-span-1">
              <h4 className="text-title font-bold mb-6 text-purple-300 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                기대 효과
              </h4>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="group p-3 glass rounded-xl hover-lift border border-white/5"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-caption font-medium text-white">
                        {benefit.metric}
                      </span>
                      <span className="text-caption font-bold text-yellow-400 group-hover:animate-pulse">
                        {benefit.value}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {benefit.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="lg:col-span-1">
              <h4 className="text-title font-bold mb-6 text-green-300 flex items-center">
                <span className="text-2xl mr-2">📞</span>
                상담 신청
              </h4>
              <div className="space-y-4">
                {contactMethods.map((contact, index) => (
                  <div 
                    key={index} 
                    className="group p-4 glass rounded-xl hover-lift border border-white/5 cursor-pointer"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl group-hover:animate-bounce flex-shrink-0 mt-1">
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-caption font-medium text-white mb-1">
                          {contact.title}
                        </div>
                        <div className="text-caption text-blue-300 font-medium mb-1">
                          {contact.value}
                        </div>
                        <div className="text-xs text-gray-400 mb-2">
                          {contact.desc}
                        </div>
                        <div className="text-xs text-green-400 font-medium group-hover:text-green-300">
                          {contact.action}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mb-12">
            <div className="glass rounded-3xl p-8 text-center border border-white/10 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
              <h3 className="text-title font-bold text-white mb-4">
                🚀 지금 바로 시작하세요!
              </h3>
              <p className="text-body text-gray-300 mb-6 max-w-2xl mx-auto">
                8주 만에 업무 효율성 300% 향상, 매출 40% 증가를 경험해보세요. 
                투자비는 첫 달에 회수됩니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 focus-ring px-8 py-3">
                  📞 무료 상담 예약 (5분 완료)
                </button>
                <button className="btn-secondary border-white text-white hover:bg-white/10 focus-ring px-8 py-3">
                  📊 성공 사례 더 보기
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-center lg:text-left">
                <p className="text-gray-400 mb-2">
                  © 2025 부동산 자동화 솔루션. All rights reserved.
                </p>
                <p className="text-xs text-gray-500">
                  Made with ❤️ for Real Estate Professionals
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { name: '개인정보처리방침', href: '#privacy' },
                  { name: '이용약관', href: '#terms' },
                  { name: '고객지원', href: '#support' },
                  { name: '파트너십', href: '#partnership' },
                  { name: '채용정보', href: '#careers' }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm font-medium hover:underline"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-gray-700/30">
              <div className="flex flex-wrap justify-center items-center gap-8 text-xs text-gray-500">
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">🔒</span>
                  SSL 보안 인증
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">🛡️</span>
                  개인정보보호 인증
                </div>
                <div className="flex items-center">
                  <span className="text-purple-400 mr-2">✅</span>
                  ISO 27001 준수
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-2">⭐</span>
                  99.9% 서비스 안정성
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
