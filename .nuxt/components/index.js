export { default as Logo } from '../../components/Logo.vue'
export { default as Navbar } from '../../components/shared/Navbar.vue'
export { default as Showcase } from '../../components/shared/Showcase.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyNavbar = import('../../components/shared/Navbar.vue' /* webpackChunkName: "components/shared/Navbar" */).then(c => c.default || c)
export const LazyShowcase = import('../../components/shared/Showcase.vue' /* webpackChunkName: "components/shared/Showcase" */).then(c => c.default || c)
