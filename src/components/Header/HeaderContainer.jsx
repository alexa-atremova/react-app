<<<<<<< HEAD
import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getUserData } from "./../../redux/auth-reducer"

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getUserData();
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapState = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})

export default connect(mapState, { getUserData })(HeaderContainer);
=======
import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getUserData } from "./../../redux/auth-reducer"

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getUserData();
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapState = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})

export default connect(mapState, { getUserData })(HeaderContainer);
>>>>>>> db70ab3c752e90c3955a11814a955ac234e262ac
