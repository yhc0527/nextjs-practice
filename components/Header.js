import Link from 'next/link'

const linkStyle = {
    marginRight: '1rem'
}
const Header =  () => (
  <div>
      <a href="/" style={linkStyle}>Home</a>
      <a href="/about" style={linkStyle}>About</a>
      <a href="/users" style={linkStyle}>Users</a>
      <Link href="/ssr-test" style={linkStyle}><a>SSR 테스트</a></Link>
  </div>
);

export default Header