import React from "react"
import Layout from  '../components/layout'
import { Link } from "gatsby"
export default () => 
    <Layout>
        <div className="col-sm">
         <h1>Necrorol</h1>
            <ul>
            <li><Link  to={'/class'}>Clases</Link></li>
            <li><Link  to={'/skills'}>Skills</Link></li>
            <li><Link  to={'/armory'}>Armory</Link></li>
            <li><Link  to={'/traits'}>Traits</Link></li>
            </ul>
            </div>
    </Layout>

