// 공통 타입 정의
export interface MetricCard {
  label: string;
  value: string | number;
  icon: string;
  description?: string;
  color?: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  subtitle?: string;
  description: string;
  benefits?: string[];
  color?: string;
  gradient?: string;
  bgGradient?: string;
}

export interface ContactMethod {
  icon: string;
  title: string;
  value: string;
  description: string;
  action?: string;
}

export interface CostItem {
  category: string;
  amount: number;
  percentage?: number;
  description: string;
  icon: string;
  color: string;
}

export interface BenefitItem {
  category: string;
  monthlyAmount: number;
  annualAmount: number;
  description: string;
  icon: string;
  color: string;
  details: string[];
}

export interface FunnelStage {
  name: string;
  count: number;
  percentage: number;
  target: number;
  status: 'excellent' | 'good' | 'warning' | 'danger';
  icon: string;
  color: string;
  description: string;
}

export interface KPICard {
  title: string;
  value: string | number;
  change: string;
  trend: 'up' | 'down' | 'stable';
  icon: string;
  color: string;
}

export interface EmployeePerformance {
  name: string;
  role: string;
  inquiries: number;
  consultations: number;
  contracts: number;
  revenue: string;
  efficiency: number;
  avatar?: string;
}

export interface TimelineEvent {
  week: number;
  phase: number;
  title: string;
  status: 'planning' | 'development' | 'deployment';
}

export interface Phase {
  phase: number;
  title: string;
  duration: string;
  description: string;
  tasks: string[];
  deliverables: string[];
  color: string;
  bgColor: string;
  icon: string;
}

export interface ComparisonItem {
  metric: string;
  current: string;
  competitor: string;
  advantage: string;
  status: 'better' | 'equal' | 'worse';
}

export interface AutomationStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface SystemFlow {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  gradient: string;
  bgGradient?: string;
  stats: string;
  icon: string;
}

// 애니메이션 관련 타입
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
}

// 컴포넌트 Props 타입
export interface SectionProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export interface CardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  icon?: string;
  color?: string;
  gradient?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

// 상태 관리 타입
export interface AppState {
  isLoading: boolean;
  error: string | null;
  theme: 'light' | 'dark';
  language: 'ko' | 'en';
}

// API 관련 타입
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  consent: boolean;
}

// 차트 데이터 타입
export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
  }[];
}

export interface ChartOptions {
  responsive?: boolean;
  maintainAspectRatio?: boolean;
  plugins?: {
    legend?: {
      display?: boolean;
      position?: 'top' | 'bottom' | 'left' | 'right';
    };
    tooltip?: {
      enabled?: boolean;
    };
  };
  scales?: {
    x?: {
      display?: boolean;
    };
    y?: {
      display?: boolean;
    };
  };
}

// 유틸리티 타입
export type ColorVariant = 
  | 'blue' 
  | 'green' 
  | 'purple' 
  | 'orange' 
  | 'red' 
  | 'yellow' 
  | 'gray' 
  | 'indigo' 
  | 'pink' 
  | 'cyan';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type Status = 'success' | 'warning' | 'error' | 'info';

export type Direction = 'up' | 'down' | 'left' | 'right';

// 내보내기 기본값
export default {};
