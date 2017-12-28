import React,{Component} from 'react';


import MainHeader from './main-header/main-header.js'
import MainFooter from './main-footer/main-footer.js'
import RouterIndex from '../router/index.js'



  
class App extends Component {
    render() {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
                <MainHeader></MainHeader>
                <RouterIndex></RouterIndex>
                <MainFooter></MainFooter>
           </div>
           
        )
    }
}

export default App