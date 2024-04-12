import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/IMG_0082.jpg";

class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }

    render() {
        console.log(">>>Check props:", this.props)
        return (
            <>
                < div > Hello Coco Homepage </div >
                <div>
                    <img src={logo} className="Decorative-logo" alt="" style={{ width: '300px', height: '180px', margin: '20px', border: '2px solid' }} />
                </div>
            </>

        )
    }
}
// export default withRouter(Home);
export default withRouter(Home);