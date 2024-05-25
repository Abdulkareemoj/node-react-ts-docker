
export default function Navbar() {
 

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  to?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Inspiration',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        to: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        to: '#',
      },
    ],
  },
  {
    label: 'Find Work',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        to: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        to: '#',
      },
    ],
  },
  {
    label: 'Contact',
    to: '/contact',
  },
  {
    label: 'About',
    to: '/about',
  },
];
return(
  <div>Navbar</div>
)
}
