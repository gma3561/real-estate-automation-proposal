import React from 'react';

const ROIAnalysis = () => {
  const investmentData = {
    totalCost: 4700,
    monthlyBenefit: 1208,
    paybackPeriod: 0.7,
    annualROI: 1612
  };

  const costBreakdown = [
    {
      category: '분석 및 설계',
      amount: 800,
      percentage: 17,
      description: '요구사항 분석, 시스템 설계',
      icon: '📋',
      color: 'from-blue-500 to-blue-600'
    },
    {
      category: '개발 및 통합',
      amount: 2800,
      percentage: 60,
      description: '자동화 시스템 개발, API 연동',
      icon: '💻',
      color: 'from-purple-500 to-purple-600'
    },
    {
      category: '배포 및 교육',
      amount: 600,
      percentage: 13,
      description: '시스템 배포, 사용자 교육',
      icon: '🎓',
      color: 'from-green-500 to-green-600'
    },
    {
      category: '프로젝트 관리',
      amount: 500,
      percentage: 10,
      description: '일정 관리, 품질 보증',
      icon: '📊',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const benefits = [
    {
      category: '인건비 절약',
      monthlyAmount: 600,
      annualAmount: 7200,
      description: '자동화로 인한 인력 운영비 절감',
      icon: '👥',
      color: 'text-green-500',
      details: [
        '상담사 업무 50% 감소',
        '데이터 입력 93% 자동화',
        '보고서 작성 80% 단축',
        '관리 업무 70% 효율화'
      ]
    },
    {
      category: '매출 증가',
      monthlyAmount: 533,
      annualAmount: 6400,
      description: '고객 응답 속도 개선으로 성약률 증가',
      icon: '📈',
      color: 'text-blue-500',
      details: [
        '응답 시간 80% 단축',
        '고객 만족도 25% 향상',
        '성약률 15% 증가',
        '리드 전환율 20% 개선'
      ]
    },
    {
      category: '운영 효율성',
      monthlyAmount: 75,
      annualAmount: 900,
      description: '시스템 효율화로 인한 비용 절감',
      icon: '⚡',
      color: 'text-purple-500',
      details: [
        '시스템 통합 비용 절약',
        '오류 감소로 인한 비용 절감',
        '의사결정 속도 향상',
        '데이터 품질 개선'
      ]
    }
  ];

  const totalAnnualBenefit = benefits.reduce((sum, benefit) => sum + benefit.annualAmount, 0);

  const comparisonData = [
    {
      metric: '투자 비용',
      current: '4,700만원',
      competitor: '8,000만원+',
      advantage: '41% 절약',
      status: 'better'
    },
    {
      metric: '구현 기간',
      current: '8주',
      competitor: '16주+',
      advantage: '50% 단축',
      status: 'better'
    },
    {
      metric: 'ROI',
      current: '1,612%',
      competitor: '300-500%',
      advantage: '4배 이상',
      status: 'better'
    },
    {
      metric: '투자 회수',
      current: '0.7개월',
      competitor: '6-12개월',
      advantage: '10배 빠름',
      status: 'better'
    }
  ];

  return (
    <section className="section-padding-lg bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container-responsive relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-headline text-gray-900 mb-6">
            💰 ROI 분석 및 투자 효과
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto leading-relaxed">
            업계 최고 수준의 투자 대비 효과를 확인해보세요. 첫 달부터 투자비 회수가 시작됩니다.
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="card p-8 text-center hover-lift">
              <div className="text-4xl mb-4">🎯</div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {investmentData.annualROI}%
              </div>
              <div className="text-caption text-gray-600">연간 ROI</div>
            </div>
            <div className="card p-8 text-center hover-lift">
              <div className="text-4xl mb-4">⚡</div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {investmentData.paybackPeriod}개월
              </div>
              <div className="text-caption text-gray-600">투자 회수 기간</div>
            </div>
            <div className="card p-8 text-center hover-lift">
              <div className="text-4xl mb-4">💵</div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {investmentData.monthlyBenefit}만원
              </div>
              <div className="text-caption text-gray-600">월간 효과</div>
            </div>
            <div className="card p-8 text-center hover-lift">
              <div className="text-4xl mb-4">📊</div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {totalAnnualBenefit.toLocaleString()}만원
              </div>
              <div className="text-caption text-gray-600">연간 총 효과</div>
            </div>
          </div>
        </div>

        {/* Investment Breakdown */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Cost Breakdown */}
          <div>
            <h3 className="text-title font-bold text-gray-900 mb-8 flex items-center">
              <span className="text-2xl mr-3">💳</span>
              투자 비용 분석
            </h3>
            
            <div className="space-y-6">
              {costBreakdown.map((cost, index) => (
                <div 
                  key={index} 
                  className="card p-6 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${cost.color} rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg`}>
                        {cost.icon}
                      </div>
                      <div>
                        <h4 className="text-caption font-bold text-gray-900">
                          {cost.category}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {cost.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900">
                        {cost.amount}만원
                      </div>
                      <div className="text-caption text-gray-600">
                        {cost.percentage}%
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 bg-gradient-to-r ${cost.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${cost.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              
              {/* Total Cost */}
              <div className="card-elevated p-6 bg-gradient-to-r from-gray-50 to-blue-50 border-2 border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-title font-bold text-gray-900 mb-2">
                      총 투자 비용
                    </h4>
                    <p className="text-body text-gray-600">
                      8주 완성, 평생 혜택
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">
                      {investmentData.totalCost.toLocaleString()}만원
                    </div>
                    <div className="text-caption text-gray-600">
                      VAT 별도
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Analysis */}
          <div>
            <h3 className="text-title font-bold text-gray-900 mb-8 flex items-center">
              <span className="text-2xl mr-3">📈</span>
              연간 효과 분석
            </h3>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="card p-6 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl ${benefit.color}`}>
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="text-caption font-bold text-gray-900">
                          {benefit.category}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900">
                        {benefit.annualAmount.toLocaleString()}만원
                      </div>
                      <div className="text-caption text-gray-600">
                        연간 ({benefit.monthlyAmount}만원/월)
                      </div>
                    </div>
                  </div>

                  {/* Benefit Details */}
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {benefit.details.map((detail, detailIndex) => (
                      <div 
                        key={detailIndex} 
                        className="flex items-center p-2 bg-gray-50 rounded-lg"
                      >
                        <span className="text-green-500 mr-2 text-sm">✓</span>
                        <span className="text-xs text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Total Benefits */}
              <div className="card-elevated p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-title font-bold text-gray-900 mb-2">
                      연간 총 효과
                    </h4>
                    <p className="text-body text-gray-600">
                      투자 대비 {investmentData.annualROI}% ROI
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-600">
                      {totalAnnualBenefit.toLocaleString()}만원
                    </div>
                    <div className="text-caption text-gray-600">
                      월평균 {investmentData.monthlyBenefit}만원
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Competitive Comparison */}
        <div className="mb-20">
          <h3 className="text-title font-bold text-gray-900 mb-8 text-center">
            🥇 경쟁사 대비 우위
          </h3>
          
          <div className="card-elevated p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-6 text-caption font-bold text-gray-900">
                      비교 항목
                    </th>
                    <th className="text-center py-4 px-6 text-caption font-bold text-blue-600">
                      우리 솔루션
                    </th>
                    <th className="text-center py-4 px-6 text-caption font-bold text-gray-600">
                      경쟁사 평균
                    </th>
                    <th className="text-center py-4 px-6 text-caption font-bold text-green-600">
                      우위
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-gray-100 hover:bg-gray-50"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <td className="py-4 px-6 text-body font-medium text-gray-900">
                        {item.metric}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="text-body font-bold text-blue-600">
                          {item.current}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="text-body text-gray-600">
                          {item.competitor}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="text-body font-bold text-green-600">
                          {item.advantage}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card-elevated p-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <h3 className="text-title font-bold mb-4">
              🚀 투자 결정을 내리셨나요?
            </h3>
            <p className="text-body mb-8 opacity-90 max-w-2xl mx-auto">
              첫 달부터 투자비 회수가 시작되는 확실한 ROI를 경험해보세요. 
              지금 시작하면 8주 후 완전히 새로운 비즈니스 환경을 만나실 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-blue-600 hover:bg-gray-100 border-0 focus-ring px-8 py-3">
                📞 투자 상담 예약하기
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white/10 focus-ring px-8 py-3">
                📄 상세 ROI 보고서 다운로드
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROIAnalysis;