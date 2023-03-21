import { types } from 'react-bricks/frontend'
import website from 'react-bricks-ui/website'
import blog from 'react-bricks-ui/blog'
import HeroUnit from './MyHeroUnit'
import Thumbnail from './Thumbnail'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Demo from './Demo'
import Testimonials from './Testimonials'
import Wallet from './Wallet'
const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  ...blog,
  HeroUnit, 
  Thumbnail,
  Navbar,
  Hero,
  About,
  Demo,
  Testimonials,
  Wallet,

  
  
]

export default bricks
