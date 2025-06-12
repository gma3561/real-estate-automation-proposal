import React from 'react';

const SystemArchitecture = () => {
  const workflowSteps = [
    {
      id: 1,
      title: '📱 채널톡 통합',
      subtitle: '통합 커뮤니케이션 허브',
      description: '모든 고객 문의를 하나의 플랫폼으로 통합 관리',
      features: ['카카오톡', '네이버톡톡', '웹채팅', '인스타그램 DM'],
      gradient: 'from-blue-500 to-cyan-500',
      stats: '응답률 95%'
    },
    {
      id: 2,
      title: '📊 구글 시트 자동화',
      subtitle: '실시간 데이터 동기화',
      description: '문의부터 계약까지 모든 데이터를 자동으로 기록',
      features: ['고객 정보', '상담 이력', '매물 관리', '일정 관리'],
      gradient: 'from-green-500 to-emerald-500',
      stats: '100% 자동화'
    },
    {
      id: 3,
      title: '🌐 웹 대시보드',
      subtitle: '실시간 성과 분석',
      description: '모든 지표를 시각화하여 한눈에 파악',
      features: ['퍼널 분석', '직원 성과', '매출 현황', '예측 분석'],
      gradient: 'from-purple-500 to-violet-500',
      stats: '실시간 업데이트'
    },
    {
      id: 4,
      title: '💬 슬랙 알림',
      subtitle: '즉시 알림 시스템',
      description: '중요한 이벤트를 실시간으로 알림',
      features: ['신규 문의', '계약 진행', '목표 달성', '이탈 위험'],
      gradient: 'from-orange-500 to-red-500',
      stats: '0.1초 알림'
    }
  ];

  const automationFeatures = [
    {
      icon: '🤖',
      title: '문의 접수 자동화',
      desc: '1분 내 자동 응답 + 담당자 배정'
    },
    {
      icon: '📝',
      title: '고객 정보 자동 수집',
      desc: '대화 중 핵심 정보 자동 추출'
    },
    {
      icon: '📅',
      title: '일정 관리 자동화',
      desc: '상담 일정 자동 조율 및 알림'
    },
    {
      icon: '📈',
      title: '성과 분석 자동화',
      desc: '일/주/월 리포트 자동 생성'
    }
  ];

  return (
    <section id="system" className="section-padding-lg bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container-responsive relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-headline mb-6">
            🔄 시스템 아키텍처
          </h2>
          <p className="text-body text-gray-300 max-w-3xl mx-auto leading-relaxed">
            기존 도구들을 유기적으로 연결하여 완전 자동화된 부동산 업무 생태계를 구축
          </p>
          <div className="flex items-center justify-center mt-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium">
              ⚡ 24시간 무중단 자동화 시스템
            </div>
          </div>
        </div>

        {/* Workflow Steps */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <div 
                key={step.id} 
                className="group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="glass rounded-3xl p-8 hover-lift transition-all duration-500 border border-white/10">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      {step.title.split(' ')[0]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-title font-bold">
                          {step.title}
                        </h3>
                        <span className="text-xs bg-white/10 text-white px-3 py-1 rounded-full">
                          {step.stats}
                        </span>
                      </div>
                      <p className="text-caption text-gray-300 mb-4">
                        {step.subtitle}
                      </p>
                      <p className="text-body text-gray-400 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.features.map((feature, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-white/5 text-gray-300 px-3 py-1 rounded-lg border border-white/10"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector Arrow */}
                {index < workflowSteps.length - 1 && (
                  <div className="flex justify-center my-6">
                    <div className="flex flex-col items-center">
                      <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent"></div>
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center animate-pulse">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/50"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Data Flow Visualization */}
          <div className="flex items-center justify-center">
            <div className="glass rounded-3xl p-8 w-full max-w-md border border-white/10">
              <h3 className="text-title font-bold text-center mb-8">
                📊 실시간 데이터 흐름
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-body text-gray-300">고객 문의</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-blue-400">450건/월</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-body text-gray-300">자동 응답</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-green-500 rounded-full animate-pulse animation-delay-2000"></div>
                    <span className="text-sm text-green-400">95%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-body text-gray-300">상담 전환</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-2 bg-yellow-500 rounded-full animate-pulse animation-delay-4000"></div>
                    <span className="text-sm text-yellow-400">67%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-body text-gray-300">계약 성사</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-purple-400">12%</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl border border-green-500/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">300%</div>
                  <div className="text-caption text-gray-300">효율성 향상</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Automation Features */}
        <div className="text-center mb-12">
          <h3 className="text-title font-bold mb-8">
            🤖 AI 워크플로우 자동화
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {automationFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="glass rounded-2xl p-6 text-center hover-lift group border border-white/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:animate-bounce">
                {feature.icon}
              </div>
              <h4 className="text-caption font-bold mb-3">
                {feature.title}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture;
