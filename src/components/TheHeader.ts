import { Component } from "../core/heropy";

interface State {
  [key: string]: unknown
  menus: {
    name: string
    href: string
  }[]
}

export default class TheHeader extends Component {
  public state!: State
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'Search',
            href: '#/'
          },
          {
            name: 'Movie',
            href: '#/movie?id=tt4520988'
          },
          {
            name: 'About',
            href: '#/about'
          }
        ]
      }
    })
    window.addEventListener('popstate', () => {
      this.render()
    })
  }
  render() {
    this.el.innerHTML = /* HTML */ `
      <a href="#/" class="logo">
        <span>OMDbAPI</span>.COM
      </a>
      <nav>
        <ul>
          ${this.state.menus.map(menu => {
            const href = menu.href.split('?')[0]
            const hash = location.hash.split('?')[0]
            const isActive = href === hash
            return /* html */ `
              <li>
                <a
                  class="${isActive ? 'active' : ''}" 
                  href="${menu.href}">
                  ${menu.name}
                </a>
              </li>
            `
          }).join('')}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="https://i.namu.wiki/i/cS4lR_Kmb2H-LcVV0ge9eaLsenhaeSnoZ-NhIkiv4xn_GvCYStjYniOKQVAlk6WJaRyXNIkZ2_peC__BnibDFg.webp" alt="User" />
      </a>
    `
  }
}