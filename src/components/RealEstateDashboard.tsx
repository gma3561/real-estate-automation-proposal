import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Bell, Users, Home, MessageSquare, TrendingUp, CheckCircle, Clock, Target, DollarSign } from 'lucide-react';

const RealEstateDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // 샘플 데이터
  const todayStats = {
    newInquiries: { value: 18, change: 20 },
    activeConsultations: { value: 12, change: 15 },
    scheduledViewings: { value: 5, change: -10 },
    pendingContracts: { value: 3, change: 50 }
  };

  const channelInquiries = [
    { channel: '채널톡', count: 45 },
    { channel: '네이버톡톡', count: 38 },
    { channel: '카카오톡', count: 25 },
    { channel: '전화문의', count: 12 },
    { channel: '직접방문', count: 8 }
  ];

  const priceDistribution = [
    { name: '10억 이하', value: 45, color: '#8884d8' },
    { name: '10-20억', value: 38, color: '#82ca9d' },
    { name: '20-30억', value: 25, color: '#ffc658' },
    { name: '30억 이상', value: 17, color: '#ff7300' }
  ];

  const StatCard = ({ title, value, change, icon: Icon, color }: any) => (
    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4" style={{ borderLeftColor: color }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-gray-600">{title}</p>
          <p className="text-xl font-bold text-gray-900">{value}건</p>
          <p className={`text-xs ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
          </p>
        </div>
        <Icon className="h-6 w-6" style={{ color }} />
      </div>
    </div>
  );

  const TabNavigation = () => (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex space-x-8">
          {[
            { id: 'overview', name: '대시보드', icon: TrendingUp },
            { id: 'funnel', name: '퍼널 분석', icon: Target },
            { id: 'employee-performance', name: '직원 성과', icon: Users },
            { id: 'properties', name: '매물 관리', icon: Home },
            { id: 'automation', name: '자동화 제안서', icon: MessageSquare }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-4 border-b-2 text-sm font-medium ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">🏢 더부동산 통합 관리 기획 및 자동화 제안서</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                📅 {currentTime.toLocaleDateString('ko-KR')} {currentTime.toLocaleTimeString('ko-KR')}
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">👤 관리자</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <TabNavigation />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Today's Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                title="📞 신규문의"
                value={todayStats.newInquiries.value}
                change={todayStats.newInquiries.change}
                icon={MessageSquare}
                color="#3B82F6"
              />
              <StatCard
                title="💬 진행상담"
                value={todayStats.activeConsultations.value}
                change={todayStats.activeConsultations.change}
                icon={Users}
                color="#10B981"
              />
              <StatCard
                title="🏠 임장예정"
                value={todayStats.scheduledViewings.value}
                change={todayStats.scheduledViewings.change}
                icon={Home}
                color="#F59E0B"
              />
              <StatCard
                title="📝 계약대기"
                value={todayStats.pendingContracts.value}
                change={todayStats.pendingContracts.change}
                icon={CheckCircle}
                color="#8B5CF6"
              />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">📊 채널별 문의량</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={channelInquiries}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="channel" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">💰 가격대별 매물 분포</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={priceDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}건`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {priceDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'automation' && (
          <div className="space-y-6">
            {/* 자동화 제안서 헤더 */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-2">🚀 부동산 업무 자동화 제안서</h2>
              <p className="text-blue-100">효율성 극대화를 위한 통합 자동화 솔루션</p>
            </div>

            {/* 효율 개선 방안 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <TrendingUp className="h-6 w-6 text-green-500 mr-2" />
                효율 개선 방안
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2 text-blue-700">1. 채널톡 응대 자동화</h4>
                  <p className="text-gray-600 mb-3">고객 유입 응대 채널 통합 및 자동 응답 시스템</p>
                  <ul className="text-sm space-y-1">
                    <li>• 24시간 자동 응답으로 고객 만족도 향상</li>
                    <li>• 문의 유형별 자동 분류 및 담당자 배정</li>
                    <li>• 매물 정보 자동 제공 및 상담 예약 연동</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2 text-green-700">2. 슬랙 알림 자동화</h4>
                  <p className="text-gray-600 mb-3">관리자 알림 자동화 봇 세팅</p>
                  <ul className="text-sm space-y-1">
                    <li>• 신규 문의 실시간 알림</li>
                    <li>• 계약 진행 상황 모니터링</li>
                    <li>• 직원 성과 지표 자동 리포트</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2 text-orange-700">3. 네이버 부동산 자동 수집</h4>
                  <p className="text-gray-600 mb-3">매물 정보 자동 크롤링 및 데이터베이스 구축</p>
                  <ul className="text-sm space-y-1">
                    <li>• 시세 정보 실시간 업데이트</li>
                    <li>• 경쟁 매물 분석 자동화</li>
                    <li>• 신규 매물 발굴 및 알림</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2 text-purple-700">4. 관련 뉴스 자동 수집</h4>
                  <p className="text-gray-600 mb-3">부동산 시장 동향 및 정책 뉴스 자동 수집</p>
                  <ul className="text-sm space-y-1">
                    <li>• 정책 변화 실시간 모니터링</li>
                    <li>• 지역별 시장 동향 분석</li>
                    <li>• 투자 기회 발굴을 위한 정보 제공</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 자동화 도입 효과 및 ROI */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <DollarSign className="h-5 w-5 text-green-500 mr-2" />
                자동화 도입 효과 및 ROI
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-700 mb-3">🎯 직원의 영업 집중도 향상</h4>
                  <ul className="text-sm space-y-2">
                    <li>• <strong>반복 업무 자동화:</strong> 문의 응답, 매물 정보 제공 등 80% 자동화</li>
                    <li>• <strong>영업 시간 확보:</strong> 일일 3-4시간 추가 영업 활동 가능</li>
                    <li>• <strong>고부가가치 업무 집중:</strong> 고객 상담, 계약 협상에 100% 집중</li>
                    <li>• <strong>스트레스 감소:</strong> 단순 반복 업무 제거로 직원 만족도 향상</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-3">📊 직원 상태 트래킹 최적화</h4>
                  <ul className="text-sm space-y-2">
                    <li>• <strong>실시간 성과 모니터링:</strong> 문의, 상담, 계약 현황 실시간 파악</li>
                    <li>• <strong>자동 알림 시스템:</strong> 목표 달성률, 고객 이탈 위험 자동 감지</li>
                    <li>• <strong>데이터 기반 관리:</strong> 객관적 지표로 공정한 평가 및 코칭</li>
                    <li>• <strong>업무 효율성 분석:</strong> 채널별, 시간대별 성과 분석으로 최적화</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">80%</div>
                  <div className="text-sm text-gray-600">업무 자동화율</div>
                  <div className="text-xs text-gray-500 mt-1">반복업무 → 영업집중</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600">3-4시간</div>
                  <div className="text-sm text-gray-600">일일 영업시간 증가</div>
                  <div className="text-xs text-gray-500 mt-1">순수 영업 활동</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600">실시간</div>
                  <div className="text-sm text-gray-600">직원 상태 트래킹</div>
                  <div className="text-xs text-gray-500 mt-1">성과 & 이탈위험 감지</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="text-2xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600">고객 응대 가능</div>
                  <div className="text-xs text-gray-500 mt-1">만족도 95% 향상</div>
                </div>
              </div>
            </div>

            {/* 도입 일정 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Clock className="h-5 w-5 text-blue-500 mr-2" />
                단계별 도입 계획 (총 6주)
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div className="flex-1">
                    <div className="font-medium">1-2주차: 유입채널 통합</div>
                    <div className="text-sm text-gray-600">채널톡, 네이버톡톡, 카카오톡 연동 + 자동응답 설정</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div className="flex-1">
                    <div className="font-medium">3-4주차: 슬랙 통합 대시보드</div>
                    <div className="text-sm text-gray-600">관리자 알림 봇 + 직원 상태 트래킹 시스템</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div className="flex-1">
                    <div className="font-medium">5주차: 매물 크롤링 + 뉴스 수집</div>
                    <div className="text-sm text-gray-600">네이버 부동산 자동 수집 + 시장 동향 뉴스 자동화</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div className="flex-1">
                    <div className="font-medium">6주차: 통합 테스트 및 최종 배포</div>
                    <div className="text-sm text-gray-600">전체 시스템 통합 테스트 + 직원 교육 + 실서비스 적용</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-medium mb-2 text-yellow-800">👨‍💼 전담 PM 지원</h4>
                <p className="text-sm text-yellow-700">
                  <strong>하상현 PM이 주 2회 상주</strong>하여 프로세스 효율 세팅을 직접 진행합니다.
                  <br />• 매주 화요일, 목요일 오전 9시-오후 6시 현장 상주
                  <br />• 실시간 이슈 대응 및 직원 교육 병행
                  <br />• 각 단계별 완료 후 성과 측정 및 피드백 반영
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default RealEstateDashboard;
