// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'

// Helper function to read the request body as string
async function readBody(readable: ReadableStream<Uint8Array> | null): Promise<string> {
  if (!readable) return ''
  
  const reader = readable.getReader()
  const chunks: Uint8Array[] = []
  
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      chunks.push(value)
    }
  } finally {
    reader.releaseLock()
  }
  
  // Combine all chunks into a single buffer
  const totalLength = chunks.reduce((acc, chunk) => acc + chunk.length, 0)
  const combined = new Uint8Array(totalLength)
  let offset = 0
  
  for (const chunk of chunks) {
    combined.set(chunk, offset)
    offset += chunk.length
  }
  
  return new TextDecoder().decode(combined)
}

export async function POST(req: NextRequest) {
  console.log('Webhook request received');
  
  // Get the signature from headers
  const signature = req.headers.get(SIGNATURE_HEADER_NAME)
  const secret = process.env.SANITY_WEBHOOK_SECRET
  
  if (!secret) {
    console.error('SANITY_WEBHOOK_SECRET environment variable not set');
    return NextResponse.json({ message: 'Webhook secret not configured' }, { status: 500 })
  }
  
  if (!signature) {
    console.log('No signature found in request headers');
    return NextResponse.json({ message: 'Missing signature' }, { status: 401 })
  }

  try {
    // Read the raw body for signature validation
    const body = await readBody(req.body)
    console.log('Request body received, length:', body.length);
    
    // Validate the signature
    const isValid = await isValidSignature(body, signature, secret)
    
    if (!isValid) {
      console.log('Invalid signature detected');
      return NextResponse.json({ message: 'Invalid signature' }, { status: 401 })
    }
    
    console.log('Signature validated successfully');
    
    // Parse the webhook payload
    const payload = JSON.parse(body)
    console.log('Webhook payload:', {
      type: payload._type,
      id: payload._id,
      operation: payload._rev ? 'update' : 'create'
    });

    // Revalidate all routes
    console.log('Starting revalidation of all routes...');
    revalidatePath('/', 'layout')
    console.log('Revalidation completed. All content should be updated.');
    
    return NextResponse.json({ 
      success: true,
      message: 'Webhook received and routes revalidated',
      timestamp: new Date().toISOString()
    })
    
  } catch (err) {
    console.error('Error processing webhook:', err);
    return NextResponse.json({ 
      success: false,
      message: 'Error processing webhook',
      error: typeof err === 'object' && err !== null && 'message' in err ? (err as { message: string }).message : String(err)
    }, { status: 500 })
  }
}