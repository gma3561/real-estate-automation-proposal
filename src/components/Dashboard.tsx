import React from 'react';

const Dashboard = () => {
  const kpiData = [
    { 
      label: '신규문의', 
      value: '47.2억', 
      change: '+18.3%', 
      trend: 'up',
      icon: '💰',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      label: '진행 중 거래', 
      value: '23건', 
      change: '+3건', 
      trend: 'up',
      icon: '📈',
      color: 'from-green-500 to-green-600'
    },
    { 
      label: '평균 응답시간', 
      value: '1.2분', 
      change: '-0.3분', 
      trend: 'up',
      icon: '⏰',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      label: '전환율', 
      value: '24.8%', 
      change: '+2.1%', 
      trend: 'up',
      icon: '🎯',
      color: 'from-orange-500 to-orange-600'
    },
    { 
      label: '고객 만족도', 
      value: '4.7점', 
      change: '+0.2점', 
      trend: 'up',
      icon: '⭐',
      color: 'from-yellow-500 to-yellow-600'
    },
    { 
      label: '주간 상담', 
      value: '147건', 
      change: '+23건', 
      trend: 'up',
      icon: '📞',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const employeeData = [
    { 
      name: '박소현', 
      avatar: '👩‍💼',
      inquiries: 45, 
      consultations: 38, 
      contracts: 6, 
      rate: 13.3, 
      status: 'excellent',
      revenue: '1.2억'
    },
    { 
      name: '김효석', 
      avatar: '👨‍💼',
      inquiries: 32, 
      consultations: 28, 
      contracts: 5, 
      rate: 15.6, 
      status: 'good',
      revenue: '980만'
    },
    { 
      name: '이직원', 
      avatar: '👨‍💼',
      inquiries: 28, 
      consultations: 22, 
      contracts: 3, 
      rate: 10.7, 
      status: 'average',
      revenue: '640만'
    }
  ];

  const activities = [
    { icon: '📞', text: '김효석님이 한남동 투룸 상담 완료', time: '방금 전', type: 'success' },
    { icon: '🏠', text: '새로운 분양권 매물: 강남구 삼성동 상업', time: '2분 전', type: 'info' },
    { icon: '🔔', text: '박소현님이 계약서 처리 완료', time: '5분 전', type: 'success' },
    { icon: '🤖', text: 'AI 물 추천 시스템 작동', time: '8분 전', type: 'info' },
    { icon: '📊', text: '채널톡 자동 응답 처리 완료', time: '12분 전', type: 'success' }
  ];

  const getStatusBadge = (status: 'excellent' | 'good' | 'average') => {
    const styles: Record<string, string> = {
      excellent: 'bg-green-100 text-green-800 border-green-200',
      good: 'bg-blue-100 text-blue-800 border-blue-200',
      average: 'bg-yellow-100 text-yellow-800 border-yellow-200'
    };
    const icons: Record<string, string> = {
      excellent: '🏆',
      good: '👍',
      average: '⚡'
    };
    const labels: Record<string, string> = {
      excellent: '우수',
      good: '양호',
      average: '보통'
    };
    
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${styles[status]}`}>
        <span className="mr-1">{icons[status]}</span>
        {labels[status]}
      </span>
    );
  };

  return (
    <section id="dashboard" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-headline text-gray-900 mb-6">
            📊 실시간 성과 대시보드
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            모든 업무 현황을 한눈에 파악하고 데이터 기반 의사결정을 내리세요
          </p>
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center text-green-600 text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              실시간 연동 • 마지막 업데이트: 오후 12:26:20
            </div>
          </div>
        </div>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {kpiData.map((kpi, index) => (
            <div 
              key={index} 
              className="card-elevated p-6 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${kpi.color} rounded-xl flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {kpi.icon}
                </div>
                <div className={`text-sm font-medium px-2 py-1 rounded-full ${
                  kpi.trend === 'up' 
                    ? 'text-green-700 bg-green-100' 
                    : 'text-red-700 bg-red-100'
                }`}>
                  ↗ {kpi.change}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-gray-900">
                  {kpi.value}
                </div>
                <div className="text-caption text-gray-600">
                  {kpi.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Employee Performance Table */}
          <div className="lg:col-span-2">
            <div className="card-elevated p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-title font-bold text-gray-900 flex items-center">
                  <span className="text-2xl mr-3">👥</span>
                  직원별 성과 현황
                </h3>
                <button className="btn-secondary text-sm py-2 px-4">
                  상세 보고서
                </button>
              </div>
              
              <div className="space-y-4">
                {employeeData.map((emp, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl">
                          {emp.avatar}
                        </div>
                        <div>
                          <div className="text-title font-bold text-gray-900">{emp.name}</div>
                          <div className="text-caption text-gray-600">매출: {emp.revenue}</div>
                        </div>
                      </div>
                      {getStatusBadge(emp.status as 'excellent' | 'good' | 'average')}
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{emp.inquiries}</div>
                        <div className="text-caption text-gray-600">문의</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{emp.consultations}</div>
                        <div className="text-caption text-gray-600">상담</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{emp.contracts}</div>
                        <div className="text-caption text-gray-600">계약</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{emp.rate}%</div>
                        <div className="text-caption text-gray-600">성약률</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Real-time Activity Feed */}
          <div className="space-y-8">
            <div className="card-elevated p-6">
              <h3 className="text-title font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-2xl mr-3">📍</span>
                실시간 활동
                <span className="ml-2 text-sm bg-red-500 text-white px-2 py-1 rounded-full">Live</span>
              </h3>
              
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-caption text-gray-900 font-medium leading-relaxed">
                        {activity.text}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="card-elevated p-6">
              <h3 className="text-title font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-2xl mr-3">📈</span>
                주요 지표
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-body text-gray-700">오늘 총 문의</span>
                  <span className="font-bold text-gray-900">28건</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-body text-gray-700">응답 대기</span>
                  <span className="font-bold text-orange-600">3건</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-body text-gray-700">예약 상담</span>
                  <span className="font-bold text-blue-600">12건</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-body text-gray-700">계약 진행</span>
                  <span className="font-bold text-green-600">7건</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
