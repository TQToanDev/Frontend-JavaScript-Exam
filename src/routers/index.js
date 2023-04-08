import Layout from "../components/layout"
import Home from "../pages/Home"
import Commit from "../pages/Commit"
import Repository from "../pages/Repository"

const publicRoue = [
    {path:'/', component:Home, layout:Layout },
    {path:'/commit', component:Commit, layout:Layout },
    {path:'/repository', component:Repository, layout:Layout },
]

export default publicRoue