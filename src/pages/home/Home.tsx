import Header from "../../components/HomePage/Header"
import TopNavBar from "../../components/generic/TopNavBar/TopNavBar"
import './Home.css'

const HomePage = () => {
    return(
        <div>
            <TopNavBar/>
            <div className="page-content">
                <Header/>
            </div>
        </div>
    )
}

export default HomePage