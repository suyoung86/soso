import { VercelRequest, VercelResponse } from '@vercel/node';
import { handleOperation } from './services/sosoDispatcher';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { operation, servicekey, ServiceKey, ...rest } = req.query;

  if (!operation || typeof operation !== 'string') {
    return res.status(400).json({ message: 'operation 파라미터가 필요합니다' });
  }

  const SERVICE_KEY_ENV = process.env.SERVICE_KEY;
  const serviceKeyToUse = SERVICE_KEY_ENV || servicekey || ServiceKey;

  try {
    const result = await handleOperation(operation as string, { ...rest, servicekey: serviceKeyToUse });
    res.setHeader('Content-Type', result.contentType);
    res.send(result.data);
  } catch (error: any) {
    console.error('API 호출 오류:', error.message || error);
    res.status(error.status || 500).json({ message: error.message || '내부 서버 오류' });
  }
}
