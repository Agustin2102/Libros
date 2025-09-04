import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Verificar que la aplicación esté funcionando
    return NextResponse.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      service: 'libros-app',
      version: process.env.npm_package_version || '1.0.0'
    });
  } catch {
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: 'Service check failed'
      },
      { status: 500 }
    );
  }
}
