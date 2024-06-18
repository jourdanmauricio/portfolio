import Nest2Js from './../icons/Nestjs2.astro';
import Postgres from './../icons/Postgresql.astro';
import Tailwind from './../icons/Tailwind.astro';
import AstroJS from '../icons/AstrojS.astro';
import Jest from '../icons/Jest.astro';
import Node from '../icons/Node.astro';
import Sqlite from '../icons/Sqlite.astro';
import Typeorm from '../icons/Typeorm.astro';
import Sequelize from '../icons/Sequelize.astro';
import Jwt from '../icons/JWT.astro';
import Swagger from '../icons/Swagger.astro';
import Cloudinary from '../icons/Cloudinary.astro';
import Docker from '../icons/Docker.astro';
import Azure from '../icons/Azure.astro';
import Nextjs from '../icons/Next.astro';

const TAGS = {
  JWT: {
    name: 'JWT',
    class: 'bg-black text-white',
    icon: Jwt,
  },
  JEST: {
    name: 'Jest',
    class: 'bg-black text-white',
    icon: Jest,
  },
  ASTROJS: {
    name: 'Astro',
    class: 'bg-black text-white',
    icon: AstroJS,
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    class: 'bg-[#003159] text-white',
    icon: Tailwind,
  },
  NODE: {
    name: 'Node js',
    class: 'bg-[#0c131c] text-white',
    icon: Node,
  },
  NEST: {
    name: 'Nest js',
    class: 'bg-[#0c131c] text-white',
    icon: Nest2Js,
  },
  SLITE: {
    name: 'Sqlite',
    class: 'bg-[#fffefe] text-[#044b5d]',
    icon: Sqlite,
  },
  SEQUELIZE: {
    name: 'Sequelize',
    class: 'bg-[#12223d] text-white',
    icon: Sequelize,
  },
  POSTGRES: {
    name: 'Postgres',
    class: 'bg-[#12223d] text-white',
    icon: Postgres,
  },
  TYPEORM: {
    name: 'TypeORM',
    class: 'bg-[#fffefe] text-black',
    icon: Typeorm,
  },

  SWAGGER: {
    name: 'Swagger',
    class: 'bg-[#fffefe] text-black',
    icon: Swagger,
  },
  CLOUDINARY: {
    name: 'Cloudinary',
    class: 'bg-[#fffefe] text-black',
    icon: Cloudinary,
  },
  DOCKER: {
    name: 'Docker',
    class: 'bg-[#fffefe] text-black',
    icon: Docker,
  },
  AZURE: {
    name: 'Azure',
    class: 'bg-[#fffefe] text-black',
    icon: Azure,
  },
  NEXT: {
    name: 'Next',
    class: 'bg-[#fffefe] text-black',
    icon: Nextjs,
  },
};

export const PROJECTS = [
    {
    title: 'Coco+',
    description:
      `Coco+ es una plataforma centralizada para la gestión de coworkings y empresas que implementa funcionalidades de reserva para que los usuarios puedan reservar espacios de trabajo. <br><br>
      Integra geolocalización para facilitar la ubicación de los coworkings y empresas e incluye distintos dashboards para la configuración de empresas y de coworkings.
      
      <details class='mt-8'>
        <summary>
          <span class="cursor-pointer font-semibold text-yellow-200">Funcionalidades principales:</span>
        </summary>
        <ul class="mt-4" style="list-style-type:disc; list-style-position: inside;">
          <li>Registrar y administrar múltiples coworkings</li>
          <li>Registrar y administrar empresas dentro de la plataforma</li>
          <li>Permitir a los usuarios buscar y reservar espacios de trabajo</li>
          <li>Confirmación y cancelación de reservas mediante notificaciones</li>
          <li>Mostrar la ubicación de coworkings en un mapa interactivo</li>
          <li>Permitir a los usuarios buscar coworkings cercanos a su ubicación actual</li>
          <li>Integración con servicios de mapas (Google Maps)</li>
          <li>Panel de administración para gestionar coworkings, empresas y usuarios</li>
        </ul>
      </details>
    `,
    link: 'https://coco-plus-front.vercel.app/',
    github: 'https://github.com/jourdanmauricio/PM4-ecommerce',
    image: 'proyects/coco-plus.webp',
    tags: [
      TAGS.NEST,
      TAGS.TYPEORM,
      TAGS.POSTGRES,
      TAGS.JWT,
      TAGS.SWAGGER,
      TAGS.CLOUDINARY,
      TAGS.AZURE,
      TAGS.NEXT,
      TAGS.TAILWIND
    ],
  },
  {
    title: 'Especilización backend (Henry)',
    description:
      `Desarrollo de una API RESTful para un ecommerce sobre productos tecnológicos con gestión de categorías, productos, usuarios, roles, órdenes de compra, autenticación y autorización. <br><br>
      Implementamos funcionalidades clave para un ecommerce como carrito de compras y gestión de stock, asegurando la seguridad y la escalabilidad del backend mediante buenas prácticas y tecnologías adecuadas.<br><br> 
      Documentamos la API para facilitar su uso por parte de desarrolladores frontend y otros consumidores de la API.

      <details class='mt-8'>
        <summary>
          <span class="cursor-pointer font-semibold text-yellow-200">Funcionalidades principales:</span>
        </summary>

        <ul class="mt-4" style="list-style-type:disc; list-style-position: inside;">
          <li>Búsqueda y filtrado de productos por diversos criterios</li>
          <li>Registro y autenticación de usuarios</li>
          <li>Carrito de compras persistente</li>
          <li>Creación y seguimiento de órdenes</li>
          <li>Historial de órdenes para los usuarios</li>
          <li>Perfil de usuario</li>
        </ul>
      </details>
    `,
    link: 'https://pm4-ecommerce-latest.onrender.com/api/',
    github: 'https://github.com/jourdanmauricio/PM4-ecommerce',
    image: 'proyects/e-commerce.webp',
    tags: [
      TAGS.NEST,
      TAGS.TYPEORM,
      TAGS.POSTGRES,
      TAGS.JEST,
      TAGS.JWT,
      TAGS.SWAGGER,
      TAGS.CLOUDINARY,
      TAGS.DOCKER,
    ],
  },
  {
    title: 'Hatha Yoga Lobería - Escuela de Yoga',
    description:
      `Desarrollo de un sitio web completo para una Escuela de Yoga que incluya información sobre las clases, un blog para la publicación de artículos relacionados con el yoga y bienestar, y una sección de administración para gestionar contenido y alumnos.
      <details class='mt-8'>
        <summary>
          <span class="cursor-pointer font-semibold text-yellow-200">Funcionalidades principales:</span>
        </summary>
      
        <ul class="mt-4" style="list-style-type:disc; list-style-position: inside;">
          <li>Página de inicio con información general sobre la escuela de yoga</li>
          <li>Sección de horarios de clases y descripción de los tipos de clases</li>
          <li>Formulario de contacto para consultas</li>
          <li>Página de blog con listado de artículos</li>
          <li>Páginas de detalle para cada artículo del blog</li>
          <li>Gestión de contenido estático del sitio (información de clases, artículos, medios de contacto, etc.)</li>
        </ul>
      </details>
      `,
    link: 'https://jourdanmauricio.github.io/hathayogaloberia/',
    github: 'https://github.com/jourdanmauricio/hathayogaloberia',
    image: 'proyects/hathaYogaLoberia.webp',
    tags: [TAGS.ASTROJS, TAGS.TAILWIND, TAGS.NODE, TAGS.SLITE, TAGS.SEQUELIZE],
  },
  {
    title: 'Syren - Tratamientos laser',
    description: `Desarrollo de un sitio web completo para Syren Tratamientos Láser que incluye información sobre los servicios, una interfaz para la reserva de turnos, formulario de contacto y newsletter.<br><br>
    El proyecto que ofrece una experiencia completa en desarrollo full stack, cubriendo desde la creación de interfaces de usuario hasta la implementación de lógica de backend y la integración de servicios externos para la gestión eficiente de reservas.
    <details class='mt-8'>
      <summary>
        <span class="cursor-pointer font-semibold text-yellow-200">Funcionalidades principales:</span>
      </summary>
      <ul class="mt-4" style="list-style-type:disc; list-style-position: inside;">
        <li>Página de inicio con información general sobre Syren Tratamientos Láser</li>
        <li>Implementa un sistema de reservas para que los clientes puedan agendar citas en línea</li>
        <li>Galería de imágenes y testimonios de clientes</li>
        <li>Formulario de contacto para consultas generales</li>
        <li>Formulario de reserva donde los clientes pueden ingresar su información</li>
        <li>Confirmación y recordatorios de citas por correo electrónico</li>
        <li>Gestión de reservas: ver, confirmar, modificar y cancelar turnos</li>
        <li>Gestión de clientes: ver y actualizar información de los clientes</li>
      </ul>
    </details>
    `,
    link: 'https://jourdanmauricio.github.io/syren-frontend/',
    github: 'https://github.com/jourdanmauricio/syren-frontend',
    github2: 'https://github.com/jourdanmauricio/syren-backend',
    image: 'proyects/syren.webp',
    tags: [TAGS.TYPEORM, TAGS.TAILWIND, TAGS.NEST, TAGS.ASTROJS, TAGS.POSTGRES],
  },
];