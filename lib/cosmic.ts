import { createBucketClient } from '@cosmicjs/sdk';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
});

// Error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all invoices
export async function getInvoices() {
  try {
    const response = await cosmic.objects
      .find({ type: 'invoices' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch invoices');
  }
}

// Fetch payment suggestions
export async function getPaymentSuggestions() {
  try {
    const response = await cosmic.objects
      .find({ type: 'payment-suggestions' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch payment suggestions');
  }
}

// Fetch monthly reports
export async function getMonthlyReports() {
  try {
    const response = await cosmic.objects
      .find({ type: 'monthly-reports' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch monthly reports');
  }
}

// Fetch single invoice by slug
export async function getInvoiceBySlug(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'invoices',
        slug
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch invoice');
  }
}