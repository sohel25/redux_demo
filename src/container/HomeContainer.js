import {connect} from 'react-redux';
import Home from "../component/Home";
import {addToCart} from "../service/actions/action";

const mapStateToProps=state=>({

})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)


// export default Home;