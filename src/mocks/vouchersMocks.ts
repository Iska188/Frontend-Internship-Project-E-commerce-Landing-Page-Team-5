export interface Voucher {
  code: string;
  type: 'percentage' | 'fixed';
  discount: number;
  expiryDate: string;
  minOrder?: number;
  description: string;
  isExpired?: boolean;
}

export const VOUCHERS_MOCK: Voucher[] = [
  {
    code: 'NEST15',
    type: 'percentage',
    discount: 15,
    expiryDate: '2026-12-31',
    minOrder: 20,
    description: '15% discount for orders over $20.00',
  },
  {
    code: 'SUMMER20',
    type: 'percentage',
    discount: 20,
    expiryDate: '2026-09-30',
    minOrder: 30,
    description: '20% off summer special for orders over $30.00',
  },
  {
    code: 'WELCOME10',
    type: 'fixed',
    discount: 10,
    expiryDate: '2026-12-31',
    minOrder: 25,
    description: '$10.00 flat discount for new customers',
  },
  {
    code: 'FREESHIP',
    type: 'fixed',
    discount: 5,
    expiryDate: '2026-12-31',
    minOrder: 15,
    description: 'Free standard shipping discount ($5.00 value)',
  },
  {
    code: 'BLACKFRIDAY50',
    type: 'percentage',
    discount: 50,
    expiryDate: '2024-11-30',
    minOrder: 50,
    description: 'Black Friday 50% discount (EXPIRED on 2024-11-30)',
    isExpired: true,
  },
  {
    code: 'WINTER2023',
    type: 'percentage',
    discount: 30,
    expiryDate: '2023-12-31',
    minOrder: 20,
    description: 'Winter Promo 30% discount (EXPIRED on 2023-12-31)',
    isExpired: true,
  },
  {
    code: 'EXPIRED50',
    type: 'percentage',
    discount: 50,
    expiryDate: '2025-01-01',
    minOrder: 10,
    description: 'Expired test coupon (EXPIRED on 2025-01-01)',
    isExpired: true,
  },
];

export function validateVoucher(
  code: string,
  orderTotal: number,
  vouchersList: Voucher[] = VOUCHERS_MOCK
): { valid: boolean; voucher?: Voucher; error?: string } {
  const normalizedCode = code.trim().toUpperCase();
  const voucher = vouchersList.find((v) => v.code.toUpperCase() === normalizedCode);

  if (!voucher) {
    return { valid: false, error: `Coupon code "${code}" does not exist. Please check the code and try again.` };
  }

  const now = new Date();
  const expiry = new Date(voucher.expiryDate);
  expiry.setHours(23, 59, 59, 999);

  if (now > expiry) {
    const formattedDate = expiry.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    return {
      valid: false,
      error: `Coupon "${voucher.code}" expired on ${formattedDate}. This coupon is no longer valid.`,
    };
  }

  if (voucher.minOrder && orderTotal < voucher.minOrder) {
    return {
      valid: false,
      error: `Minimum order amount of $${voucher.minOrder.toFixed(2)} is required to use coupon "${voucher.code}". Current subtotal is $${orderTotal.toFixed(2)}.`,
    };
  }

  return { valid: true, voucher };
}
