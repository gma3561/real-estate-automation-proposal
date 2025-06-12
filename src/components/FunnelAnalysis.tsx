import React from 'react';

const FunnelAnalysis = () => {
  const funnelData = [
    {
      name: '문의접수',
      count: 450,
      percentage: 100,
      target: 100,
      status: 'excellent',
      icon: '📞',
      color: 'from-blue-500 to-blue-600',
      description: '모든 채널을 통한 고객 문의'
    },
    {
      name: '1차상담',
      count: 378,
      percentage: 84,
      target: 85,
      status: 'warning',
      icon: '💬',
      color: 'from-green-500 to-green-600',
      description: '전문 상담사의 1:1 맞춤 상담'
    },
    {
      name: '매물추천',
      count: 294,
      percentage: 78,
      target: 70,
      status: 'excellent',
      icon: '🏠',
      color: 'from-purple-500 to-purple-600',
      description: 'AI 기반 맞춤 매물 추천'
    },
    {
      name: '임장신청',
      count: 126,
      percentage: 43,
      target: 30,
      status: 'excellent',
      icon: '📍',
      color: 'from-orange-500 to-orange-600',
      description: '실제 매물 확인 및 현장 방문'
    },
    {
      name: '계약체결',
      count: 58,
      percentage: 46,
      target: 50,
      status: 'warning',
      icon: '📝',
      color: 'from-red-500 to-red-600',
      description: '계약서 작성 및 법무 검토'
    },
    {
      name: '최종성약',
      count: 54,
      percentage: 93,
      target: 95,
      status: 'good',
      icon: '✅',
      color: 'from-emerald-500 to-emerald-600',
      description: '등기 완료 및 거래 종료'
    }
  ];

  const conversionRates = [
    { from: '문의', to: '상담', rate: 84, target: 85, status: 'warning' },
    { from: '상담', to: '매물', rate: 78, target: 70, status: 'excellent' },
    { from: '매물', to: '임장', rate: 43, target: 30, status: 'excellent' },
    { from: '임장', to: '계약', rate: 46, target: 50, status: 'warning' },
    { from: '계약', to: '성약', rate: 93, target: 95, status: 'good' }
  ];

  const actionPlans = [
    {
      issue: '1차 상담 전환율 1% 부족',
      solution: '응답시간 30초 단축 목표',
      priority: 'high',
      icon: '🚀'
    },
    {
      issue: '계약 체결률 4% 부족',
      solution: '협상 스킬 교육 강화',
      priority: 'high',
      icon: '💪'
    },
    {
      issue: '최종 성약률 2% 부족',
      solution: '사후관리 프로세스 개선',
      priority: 'medium',
      icon: '🎯'
    }
  ];

  const achievements = [
    {
      title: '매물 추천률 목표 초과',
      value: '+8%p',
      description: 'AI 추천 시스템의 정확도 향상'
    },
    {
      title: '임장 신청률 목표 초과',
      value: '+13%p',
      description: '가상 투어 도입 효과'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-100 border-green-200';
      case 'good': return 'text-blue-600 bg-blue-100 border-blue-200';
      case 'warning': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'danger': return 'text-red-600 bg-red-100 border-red-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent': return '🏆';
      case 'good': return '✅';
      case 'warning': return '⚠️';
      case 'danger': return '🔴';
      default: return '📊';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'excellent': return '목표 초과 달성';
      case 'good': return '목표 달성';
      case 'warning': return '주의 필요';
      case 'danger': return '개선 필요';
      default: return '분석 중';
    }
  };

  return (
    <section id="funnel" className="section-padding-lg bg-gradient-to-br from-white via-blue-50 to-indigo-50">
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-headline text-gray-900 mb-6">
            📊 고객 여정 퍼널 분석
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto leading-relaxed">
            실시간 전환율 추적 및 성과 최적화로 고객 여정의 모든 단계를 데이터 기반으로 관리
          </p>
          <div className="flex items-center justify-center mt-6 space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">93%</div>
              <div className="text-caption text-gray-600">전체 성공률</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">54명</div>
              <div className="text-caption text-gray-600">월 성약 건수</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">12%</div>
              <div className="text-caption text-gray-600">최종 전환율</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Funnel */}
          <div className="lg:col-span-2">
            <div className="card-elevated p-8">
              <h3 className="text-title font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
                <span className="text-3xl mr-3">🎯</span>
                고객 전환 퍼널
              </h3>

              <div className="space-y-6">
                {funnelData.map((stage, index) => (
                  <div 
                    key={index} 
                    className="group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`card p-6 hover-lift border-2 ${getStatusColor(stage.status)}`}>
                      {/* Stage Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-14 h-14 bg-gradient-to-r ${stage.color} rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            {stage.icon}
                          </div>
                          <div>
                            <h4 className="text-title font-bold text-gray-900">
                              {stage.name}
                            </h4>
                            <p className="text-caption text-gray-600">
                              {stage.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">
                            {stage.count}명
                          </div>
                          <div className="text-caption text-gray-600">
                            ({stage.percentage}%)
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative mb-4">
                        <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${stage.color} rounded-full transition-all duration-1000 ease-out flex items-center justify-end relative`} 
                            style={{ width: `${stage.percentage}%` }}
                          >
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-white text-sm font-bold">
                                {stage.percentage}%
                              </span>
                            </div>
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                              <div className="w-5 h-5 bg-white rounded-full shadow-lg animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Status and Target */}
                      <div className="flex justify-between items-center">
                        <span className="text-caption text-gray-600">
                          목표: {stage.target}%
                        </span>
                        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getStatusColor(stage.status)}`}>
                          <span>{getStatusIcon(stage.status)}</span>
                          <span className="text-xs font-medium">
                            {getStatusLabel(stage.status)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Funnel Connector */}
                    {index < funnelData.length - 1 && (
                      <div className="flex justify-center my-4">
                        <div className="flex flex-col items-center">
                          <div className="w-2 h-6 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
                          <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-6 bg-gradient-to-b from-gray-400 to-gray-300 rounded-full"></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Panels */}
          <div className="space-y-8">
            {/* Conversion Rates */}
            <div className="card-elevated p-6">
              <h4 className="text-title font-bold text-emerald-900 mb-6 flex items-center">
                <span className="text-2xl mr-3">📈</span>
                전환율 성과
              </h4>
              <div className="space-y-4">
                {conversionRates.map((item, index) => (
                  <div 
                    key={index} 
                    className="card p-4"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-caption font-medium text-gray-700">
                        {item.from} → {item.to}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(item.status)}`}>
                        {getStatusIcon(item.status)}
                      </span>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="font-bold text-gray-900">
                        {item.rate}%
                      </span>
                      <span className="text-xs text-gray-500">
                        목표: {item.target}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Plans */}
            <div className="card-elevated p-6">
              <h4 className="text-title font-bold text-amber-900 mb-6 flex items-center">
                <span className="text-2xl mr-3">⚠️</span>
                개선 액션 플랜
              </h4>
              <div className="space-y-4">
                {actionPlans.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`card p-4 border-l-4 ${
                      plan.priority === 'high' 
                        ? 'border-red-500 bg-red-50' 
                        : 'border-yellow-500 bg-yellow-50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-xl mt-1">{plan.icon}</span>
                      <div className="flex-1">
                        <div className="text-caption font-medium text-gray-900 mb-1">
                          {plan.issue}
                        </div>
                        <div className="text-xs text-gray-600">
                          {plan.solution}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="card-elevated p-6">
              <h4 className="text-title font-bold text-blue-900 mb-6 flex items-center">
                <span className="text-2xl mr-3">🏆</span>
                우수 성과
              </h4>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="card p-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-caption font-medium text-gray-900">
                        {achievement.title}
                      </span>
                      <span className="text-lg font-bold text-green-600">
                        {achievement.value}
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">
                      {achievement.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunnelAnalysis;
