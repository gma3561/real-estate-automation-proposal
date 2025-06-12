import React from 'react';

const Implementation = () => {
  const phases = [
    {
      phase: 1,
      title: '분석 및 설계',
      duration: '2주',
      description: '현황 분석부터 맞춤형 솔루션 설계까지',
      tasks: [
        '현황 분석 및 요구사항 정의',
        '기존 시스템 데이터 구조 분석',
        '자동화 워크플로우 설계',
        '사용자 인터페이스 프로토타입',
        '보안 및 권한 체계 설계'
      ],
      deliverables: ['요구사항 명세서', '시스템 설계 문서', 'UI/UX 프로토타입'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      icon: '📋'
    },
    {
      phase: 2,
      title: '개발 및 통합',
      duration: '4주',
      description: '핵심 자동화 시스템 개발 및 기존 도구 연동',
      tasks: [
        '채널톡 API 연동 개발',
        '구글 시트 자동화 스크립트',
        '웹 대시보드 개발',
        '슬랙 알림 시스템 구축',
        '네이버 부동산 크롤러 개발'
      ],
      deliverables: ['자동화 시스템', '웹 대시보드', 'API 연동'],
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50',
      icon: '⚙️'
    },
    {
      phase: 3,
      title: '배포 및 교육',
      duration: '2주',
      description: '시스템 배포, 사용자 교육 및 안정화',
      tasks: [
        '운영 환경 배포',
        '데이터 이관 및 검증',
        '사용자 교육 프로그램',
        '시스템 모니터링 설정',
        '성능 최적화 및 버그 수정'
      ],
      deliverables: ['운영 시스템', '사용자 매뉴얼', '교육 자료'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      icon: '🚀'
    }
  ];

  const costs = [
    {
      category: '분석 및 설계',
      amount: 800,
      description: '요구사항 분석, 시스템 설계',
      icon: '📋',
      color: 'text-blue-600'
    },
    {
      category: '개발 및 통합',
      amount: 2800,
      description: '자동화 시스템 개발',
      icon: '💻',
      color: 'text-purple-600'
    },
    {
      category: '배포 및 교육',
      amount: 600,
      description: '시스템 배포, 사용자 교육',
      icon: '🎓',
      color: 'text-green-600'
    },
    {
      category: '프로젝트 관리',
      amount: 500,
      description: '일정 관리, 품질 보증',
      icon: '📊',
      color: 'text-orange-600'
    }
  ];

  const timeline = [
    { week: 1, phase: 1, title: '현황 분석', status: 'planning' },
    { week: 2, phase: 1, title: '설계 완료', status: 'planning' },
    { week: 3, phase: 2, title: '개발 시작', status: 'development' },
    { week: 4, phase: 2, title: '채널톡 연동', status: 'development' },
    { week: 5, phase: 2, title: '대시보드 개발', status: 'development' },
    { week: 6, phase: 2, title: '통합 테스트', status: 'development' },
    { week: 7, phase: 3, title: '배포 및 교육', status: 'deployment' },
    { week: 8, phase: 3, title: '안정화 완료', status: 'deployment' }
  ];

  const benefits = [
    {
      metric: '업무 효율성',
      improvement: '+300%',
      icon: '⚡',
      description: '반복 업무 자동화로 생산성 대폭 향상'
    },
    {
      metric: '매출 증가',
      improvement: '+40%',
      icon: '📈',
      description: '고객 응답 속도 개선으로 성약률 증가'
    },
    {
      metric: '인건비 절약',
      improvement: '600만원/월',
      icon: '💰',
      description: '자동화로 인한 인력 운영비 절감'
    },
    {
      metric: 'ROI',
      improvement: '1,612%',
      icon: '🎯',
      description: '투자 대비 압도적인 수익률 달성'
    }
  ];

  const totalCost = costs.reduce((sum, cost) => sum + cost.amount, 0);

  return (
    <section id="roi" className="section-padding-lg bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container-responsive relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-headline mb-6">
            📅 구현 로드맵 & 투자 분석
          </h2>
          <p className="text-body text-blue-100 max-w-3xl mx-auto leading-relaxed">
            체계적이고 효율적인 8주 구현 프로세스로 확실한 성과를 보장합니다
          </p>
          
          {/* Quick Benefits */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="glass rounded-2xl p-6 text-center hover-lift border border-white/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-3">
                  {benefit.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-2">
                  {benefit.improvement}
                </div>
                <div className="text-caption text-blue-200 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-xs text-gray-300">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Phases */}
        <div className="mb-20">
          <h3 className="text-title font-bold text-center mb-12">
            🔄 3단계 구현 프로세스
          </h3>
          
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div 
                key={index}
                className="relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-8">
                  {/* Phase Number */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${phase.color} rounded-3xl flex items-center justify-center text-3xl shadow-2xl z-10 relative flex-shrink-0`}>
                    {phase.icon}
                  </div>

                  {/* Phase Content */}
                  <div className="flex-1">
                    <div className="glass rounded-3xl p-8 border border-white/20">
                      {/* Phase Header */}
                      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
                        <div>
                          <h3 className="text-title font-bold text-white mb-2">
                            {phase.phase}단계: {phase.title}
                          </h3>
                          <p className="text-body text-gray-300">
                            {phase.description}
                          </p>
                        </div>
                        <div className={`bg-gradient-to-r ${phase.color} px-6 py-3 rounded-2xl text-white font-bold shadow-lg mt-4 lg:mt-0`}>
                          {phase.duration}
                        </div>
                      </div>

                      {/* Tasks and Deliverables */}
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Tasks */}
                        <div>
                          <h4 className="text-caption font-bold text-white mb-4 flex items-center">
                            <span className="text-lg mr-2">✅</span>
                            주요 작업
                          </h4>
                          <div className="space-y-3">
                            {phase.tasks.map((task, taskIndex) => (
                              <div 
                                key={taskIndex} 
                                className="flex items-center p-3 glass rounded-xl backdrop-blur-sm border border-white/10"
                              >
                                <span className="text-green-400 mr-3 text-lg">•</span>
                                <span className="text-white font-medium">
                                  {task}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <h4 className="text-caption font-bold text-white mb-4 flex items-center">
                            <span className="text-lg mr-2">📦</span>
                            주요 결과물
                          </h4>
                          <div className="space-y-3">
                            {phase.deliverables.map((deliverable, delIndex) => (
                              <div 
                                key={delIndex} 
                                className={`p-4 bg-gradient-to-r ${phase.bgColor} rounded-xl border border-white/20`}
                              >
                                <span className="text-gray-800 font-medium">
                                  {deliverable}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline connector */}
                {index < phases.length - 1 && (
                  <div className="flex justify-start ml-10 mt-6 mb-6">
                    <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-title font-bold text-center mb-12">
            📊 주차별 진행 일정
          </h3>
          
          <div className="glass rounded-3xl p-8 border border-white/10">
            <div className="grid grid-cols-4 lg:grid-cols-8 gap-4">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className="text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-full h-20 rounded-2xl flex flex-col items-center justify-center mb-3 ${
                    item.status === 'planning' 
                      ? 'bg-blue-500/20 border-2 border-blue-400' 
                      : item.status === 'development'
                      ? 'bg-purple-500/20 border-2 border-purple-400'
                      : 'bg-green-500/20 border-2 border-green-400'
                  }`}>
                    <div className="text-lg font-bold text-white">
                      {item.week}주
                    </div>
                    <div className="text-xs text-gray-300">
                      {item.phase}단계
                    </div>
                  </div>
                  <div className="text-xs text-gray-300">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Cost Details */}
          <div>
            <h3 className="text-title font-bold mb-8">
              💰 투자 비용 분석
            </h3>
            
            <div className="space-y-6">
              {costs.map((cost, index) => (
                <div 
                  key={index} 
                  className="glass rounded-2xl p-6 border border-white/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center text-2xl ${cost.color}`}>
                        {cost.icon}
                      </div>
                      <div>
                        <h4 className="text-caption font-bold text-white">
                          {cost.category}
                        </h4>
                        <p className="text-xs text-gray-300">
                          {cost.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white">
                        {cost.amount}만원
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 bg-gradient-to-r ${phases[Math.min(index, phases.length - 1)]?.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${(cost.amount / totalCost) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Cost */}
            <div className="glass rounded-2xl p-6 border-2 border-green-400/50 mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-title font-bold text-white mb-2">
                    총 투자 비용
                  </h4>
                  <p className="text-body text-gray-300">
                    8주 완성, 평생 혜택
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-400">
                    {totalCost.toLocaleString()}만원
                  </div>
                  <div className="text-caption text-gray-300">
                    VAT 별도
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Analysis */}
          <div>
            <h3 className="text-title font-bold mb-8">
              📈 ROI 분석 및 회수 기간
            </h3>
            
            <div className="glass rounded-2xl p-8 border border-white/10">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl font-bold text-green-400 mb-2">
                    1,612%
                  </div>
                  <div className="text-caption text-gray-300">
                    투자 대비 수익률 (연간)
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-blue-400 mb-1">
                      0.7개월
                    </div>
                    <div className="text-xs text-gray-400">
                      투자 회수 기간
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-purple-400 mb-1">
                      1.45억원
                    </div>
                    <div className="text-xs text-gray-400">
                      연간 예상 효과
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                    <span className="text-body text-gray-300">인건비 절약</span>
                    <span className="font-bold text-green-400">6,000만원</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                    <span className="text-body text-gray-300">매출 증가</span>
                    <span className="font-bold text-blue-400">8,000만원</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                    <span className="text-body text-gray-300">운영 효율성</span>
                    <span className="font-bold text-purple-400">500만원</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <div className="glass rounded-2xl p-6 text-center border border-white/10">
                <h4 className="text-caption font-bold text-white mb-4">
                  🚀 지금 시작하세요!
                </h4>
                <p className="text-body text-gray-300 mb-6">
                  첫 달부터 투자비를 회수하고, 지속적인 수익을 창출하세요
                </p>
                <div className="flex flex-col gap-3">
                  <button className="btn-primary bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 focus-ring">
                    📞 무료 상담 예약
                  </button>
                  <button className="btn-secondary border-white text-white hover:bg-white/10 focus-ring">
                    📊 상세 제안서 다운로드
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;