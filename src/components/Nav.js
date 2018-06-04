import React from 'react'

class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <section className="logo"><div className="logoContainer">CM</div><span className="strong">Configuration Manager</span></section>
                <section className="configuring"><span>Currently editing: </span><p className="strong">environment.xml</p></section>
            </nav>
        )
    }
}

export default Navigation;