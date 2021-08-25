import React, {useEffect, useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import ViewArticle from './ViewArticle';
import GetAllArticleService from '../../services/GetAllArticleService';
import './Home.css'
import AddArticle from './AddArticle'


export default function Home() {
    const [articles,setArticles] = useState([])
    const [user,setUser] = useState(false)

    useEffect(() => {
        if(!localStorage.getItem("token")){
            window.location.href='/login'
        }
        else{
            setUser(true)
        }
    });

    useEffect(()=>{
        try{
            GetAllArticleService().then((response)=>{
                if(response.success){
                    setArticles(response.data.map(data =>({
                        article: data
                    })))
                } 
            })
        } catch(err){
            console.log("Show error/ error handling")
        }
    },[articles,setArticles])

    const logout = ()=>{
        localStorage.clear()
        window.location.href='/login'
        setUser(false)
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand >
                <img
                    // src="https://careers.quantiphi.com/images/20210118170722_Qallwhitelogo01.png"
                    src="https://4.bp.blogspot.com/-Z03DiVwt7Pw/WcL25SW1ffI/AAAAAAAAD2s/5PBRdJjFg-wxjupfCiv5Egyq5mxGtz0lQCLcBGAs/s1600/image2.png"
                    // src="https://logovectorseek.com/wp-content/uploads/2021/06/quantiphi-inc-logo-vector.png"
                    width="200"
                    height="40"
                    className="d-inline-block align-top"
                    alt="Quantiphi logo"
                />
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end" >
                    <Navbar.Brand> Hello {localStorage.getItem("name")} </Navbar.Brand>
                    <button className="btn btn-light" onClick={logout}>Logout </button>
                </Navbar.Collapse>
            </Navbar>
            
            <div className="home__articles">
                <div className="row">
                <AddArticle/>
                {
                    articles.slice(0).reverse().map(({article})=>(
                        <div className="col-sm-4 mt-2 mb-1">
                        <ViewArticle key={article.id} title={article.title} text={article.content} author={article.author_name}/>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
        
    )
}
