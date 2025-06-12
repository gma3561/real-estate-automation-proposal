import React from 'react';

const AutomationFeatures = () => {
  const features = [
    {
      icon: '🤖',
      title: '채널톡 AI 자동 응답',
      subtitle: '지능형 고객 상담 시스템',
      desc: '고객 문의 유형별 맞춤형 자동 응답 및 상담사 배정',
      benefits: [
        '95% 문의 자동 처리',
        '30초 내 즉시 응답',
        '24시간 무인 운영',
        '감정 분석 기반 응답'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      stats: '450건/월',
      efficiency: '+300%'
    },
    {
      icon: '📊',
      title: '구글 시트 스마트 연동',
      subtitle: '실시간 데이터 자동화',
      desc: '문의부터 계약까지 모든 과정을 자동으로 기록 및 분석',
      benefits: [
        '실시간 데이터 동기화',
        '자동 보고서 생성',
        '오류율 99% 감소',
        '업무 시간 70% 절약'
      ],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      stats: '100% 자동화',
      efficiency: '+250%'
    },
    {
      icon: '💬',
      title: '슬랙 실시간 알림',
      subtitle: '즉시 알림 및 대응 시스템',
      desc: '중요한 비즈니스 이벤트를 실시간으로 팀에게 알림',
      benefits: [
        '신규 문의 즉시 알림',
        '계약 진행 상황 추적',
        '목표 달성 자동 알림',
        '이탈 위험 고객 감지'
      ],
      gradient: 'from-purple-500 to-violet-500',
      bgGradient: 'from-purple-50 to-violet-50',
      stats: '0.1초 알림',
      efficiency: '+400%'
    },
    {
      icon: '🔍',
      title: '네이버 부동산 크롤링',
      subtitle: '시장 데이터 자동 수집',
      desc: '경쟁사 매물 정보와 시장 트렌드를 자동으로 분석',
      benefits: [
        '시장가 자동 분석',
        '경쟁 매물 모니터링',
        '가격 트렌드 예측',
        '투자 기회 발굴'
      ],
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
      stats: '1000+ 매물/일',
      efficiency: '+500%'
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: '자동 접수',
      desc: '고객 문의 즉시 감지',
      icon: '📱',
      color: 'text-blue-600'
    },
    {
      step: 2,
      title: '지능형 분석',
      desc: 'AI가 문의 내용 분석',
      icon: '🧠',
      color: 'text-purple-600'
    },
    {
      step: 3,
      title: '자동 응답',
      desc: '맞춤형 답변 제공',
      icon: '💬',
      color: 'text-green-600'
    },
    {
      step: 4,
      title: '데이터 저장',
      desc: '모든 정보 자동 기록',
      icon: '💾',
      color: 'text-orange-600'
    },
    {
      step: 5,
      title: '팀 알림',
      desc: '담당자에게 즉시 전달',
      icon: '🔔',
      color: 'text-red-600'
    }
  ];

  const automationMetrics = [
    {
      label: '업무 자동화율',
      value: '95%',
      icon: '⚡',
      color: 'text-blue-600'
    },
    {
      label: '응답 시간 단축',
      value: '30초',
      icon: '⏱️',
      color: 'text-green-600'
    },
    {
      label: '인건비 절약',
      value: '600만원/월',
      icon: '💰',
      color: 'text-purple-600'
    },
    {
      label: '오류율 감소',
      value: '99%',
      icon: '🎯',
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="section-padding-lg bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-responsive relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-headline text-gray-900 mb-6">
            🤖 핵심 자동화 기능
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AI 기반 자동화로 반복 업무를 완전히 제거하고, 비즈니스 효율성을 극대화합니다
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {automationMetrics.map((metric, index) => (
              <div 
                key={index} 
                className="card p-6 text-center hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`text-3xl mb-2 ${metric.color}`}>
                  {metric.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {metric.value}
                </div>
                <div className="text-caption text-gray-600">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`card-elevated p-8 hover-lift bg-gradient-to-br ${feature.bgGradient} border border-white/50`}>
                {/* Feature Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-3xl flex items-center justify-center text-3xl text-white shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-caption font-bold text-gray-900">
                      {feature.stats}
                    </div>
                    <div className={`text-xs font-medium px-2 py-1 rounded-full bg-gradient-to-r ${feature.gradient} text-white`}>
                      {feature.efficiency}
                    </div>
                  </div>
                </div>

                {/* Feature Content */}
                <div className="mb-6">
                  <h3 className="text-title font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-caption text-gray-700 mb-4 font-medium">
                    {feature.subtitle}
                  </p>
                  <p className="text-body text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-caption font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-lg mr-2">✨</span>
                    주요 혜택
                  </h4>
                  <div className="grid gap-3">
                    {feature.benefits.map((benefit, bIndex) => (
                      <div 
                        key={bIndex} 
                        className="flex items-center p-3 bg-white/70 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/90 transition-all duration-300"
                      >
                        <span className="text-green-500 mr-3 text-lg font-bold">
                          ✓
                        </span>
                        <span className="text-gray-700 font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Automation Workflow */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-title font-bold text-gray-900 mb-4">
              🔄 자동화 워크플로우
            </h3>
            <p className="text-body text-gray-600">
              고객 문의부터 팀 알림까지 5단계 자동화 프로세스
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {workflowSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div 
                  className="group text-center"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="card p-6 hover-lift min-w-[160px]">
                    <div className={`w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 ${step.color}`}>
                      {step.icon}
                    </div>
                    <div className="text-xs font-bold text-gray-500 mb-2">
                      STEP {step.step}
                    </div>
                    <h4 className="text-caption font-bold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow connector */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block">
                    <div className="w-8 h-px bg-gradient-to-r from-gray-300 to-gray-400 relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card-elevated p-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <h3 className="text-title font-bold mb-4">
              🚀 지금 시작하세요!
            </h3>
            <p className="text-body mb-8 opacity-90">
              부동산 업무 자동화로 매출 40% 증가, 업무 효율성 300% 향상을 경험해보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-blue-600 hover:bg-gray-100 border-0 focus-ring">
                📞 무료 상담 신청
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white/10 focus-ring">
                📊 데모 체험하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationFeatures;