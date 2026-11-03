import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/presentation/shared/app.module';
import { environment } from './environments/environment';
import { defineCustomElements } from '@ionic/core/loader';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then((moduleRef) => {
      const injector = moduleRef.injector;
      const appRef = moduleRef.injector.get('ApplicationRef');
      const componentRef = appRef.components[0];
      
      if (!componentRef) {
        console.error('No se pudo obtener la referencia del componente raíz');
        throw new Error('Error en el bootstrap: componente raíz no encontrado');
      }
      
      console.log('Aplicación Ionic iniciada correctamente');
      console.log(`Entorno: ${environment.production ? 'producción' : 'desarrollo'}`);
      console.log(`Fecha de inicio: ${new Date().toISOString()}`);
      
      return moduleRef;
    })
    .catch((error) => {
      console.error('Error crítico durante el bootstrap de la aplicación:', error);
      
      if (error instanceof TypeError) {
        console.error('Error de tipo detectado. Verifique las dependencias y módulos.');
      } else if (error instanceof Error) {
        console.error(`Mensaje de error: ${error.message}`);
        if (error.stack) {
          console.error('Stack trace:', error.stack.split('\n').slice(0, 5).join('\n'));
        }
      }
      
      return null;
    });
};

defineCustomElements(window).then(() => {
  console.log('Componentes personalizados de Ionic cargados');
  
  bootstrap().then((moduleRef) => {
    if (moduleRef) {
      console.log('Módulo de aplicación bootstrapped exitosamente');
      
      window.addEventListener('error', (event) => {
        console.error('Error global capturado:', event.error);
      });
      
      window.addEventListener('unhandledrejection', (event) => {
        console.error('Promesa rechazada no manejada:', event.reason);
      });
      
      if ('serviceWorker' in navigator && environment.production) {
        navigator.serviceWorker.register('/ngsw-worker.js').then((registration) => {
          console.log('Service Worker registrado:', registration.scope);
        }).catch((error) => {
          console.error('Error al registrar Service Worker:', error);
        });
      }
    } else {
      console.error('El bootstrap de la aplicación falló');
      const rootElement = document.querySelector('ion-app');
      if (rootElement) {
        rootElement.innerHTML = `
          <div style="display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column; font-family: sans-serif;">
            <h2 style="color: #dc3545;">Error de inicialización</h2>
            <p style="color: #6c757d;">La aplicación no pudo iniciar correctamente.</p>
            <button onclick="window.location.reload()" style="padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">Reintentar</button>
          </div>
        `;
      }
    }
  });
}).catch((error) => {
  console.error('Error al cargar los custom elements de Ionic:', error);
  document.body.innerHTML = `
    <div style="padding: 20px; text-align: center; font-family: sans-serif;">
      <h2 style="color: #dc3545;">Error de carga</h2>
      <p>No se pudieron cargar los componentes de Ionic.</p>
    </div>
  `;
});

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM completamente cargado');
  const loadingElement = document.getElementById('app-loading');
  if (loadingElement) {
    loadingElement.style.display = 'none';
  }
});

window.addEventListener('load', () => {
  console.log('Recursos de la página cargados completamente');
  const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (perfData) {
    console.log(`Tiempo de carga: ${perfData.loadEventEnd - perfData.fetchStart}ms`);
  }
});