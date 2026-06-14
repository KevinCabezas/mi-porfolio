create table projects (
  id bigint generated always as identity primary key,
  title text not null,
  description text not null,
  icon text not null,
  image text[] not null,
  stack text[] not null,
  created_at timestamptz default now()
);

insert into projects (title, icon, description, image, stack)
values
(
  'Portfolio Personal',
  'ri-global-line',
  'Sitio web de portfolio personal desarrollado con React y Tailwind CSS.',
  array['/images/portfolio.jpg'],
  array['React', 'TypeScript', 'Tailwind CSS']
),
(
  'API REST Node.js',
  'ri-server-line',
  'API RESTful construida con Node.js y Express para gestión de usuarios y autenticación JWT.',
  array['/images/api-rest.jpg'],
  array['Node.js', 'Express', 'MongoDB']
),
(
  'App de Gestión',
  'ri-apps-line',
  'Aplicación web para gestión de tareas y proyectos con panel de administración y reportes.',
  array['/images/app-gestion.jpg'],
  array['React', 'Redux', 'PostgreSQL']
),
(
  'E-commerce',
  'ri-shopping-cart-line',
  'Tienda online con carrito de compras, pasarela de pago y panel de administración de productos.',
  array['/images/ecommerce.jpg'],
  array['Next.js', 'Stripe', 'MySQL']
),
(
  'Chat en Tiempo Real',
  'ri-chat-3-line',
  'Aplicación de mensajería en tiempo real usando WebSockets con salas de chat y notificaciones.',
  array['/images/chat.jpg'],
  array['Socket.io', 'Node.js', 'React']
),
(
  'Sistema de Inventario',
  'ri-archive-line',
  'Sistema de control de inventario con alertas de stock, reportes y gestión de proveedores.',
  array['/images/inventario.jpg'],
  array['Vue.js', 'Laravel', 'MySQL']
);