import { Link } from 'react-router-dom'
export const Navbar = () => {

    const nav = [
        {title: 'home', to:'/'},
        {title: 'layout1', to:'/chakra1'},
        {title: 'layout2', to:'/chakra2'},
        {title: 'layout3', to:'/chakra3'}
    ]

    return (
        <div>
            {nav.map((e,i) => (
                <Link key={i} to={e.to} style={{margin: '5px', color: 'blue'}}>
                    {e.title}
                </Link>
            ))}
        </div>
    )
}