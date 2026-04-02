// Stub — replace with real subscription plan logic

export const PLANS = {
    FREE: 'free',
    PRO: 'pro',
} as const;

export type PlanType = (typeof PLANS)[keyof typeof PLANS];
