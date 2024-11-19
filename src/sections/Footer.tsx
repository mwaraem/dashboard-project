import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'

const footerLinks = [
  {
    title: 'Linkedin',
    href: '#',
  },
  {
    title: 'Twitter',
    href: '#',
  },
  {
    title: 'Instagram',
    href: '#',
  },
  {
    title: 'Github',
    href: '#',
  },
]

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <div>&copy; 2024. All rights reserved</div>
          <nav>
            {footerLinks.map(link => (
              <a href="#" key={link.title}>
                <span>{link.title}</span>
                <ArrowUpRightIcon />
              </a>
            ))}
          </nav>
          <div></div>
        </div>
      </div>
    </footer>
  )
};
