import {connect} from 'react-redux'
import notes from '../../screens/Home'

const mapStateToProps = () => (
    {
        data: "HOLA AMIGOS"
    }
);

export default connect(
    mapStateToProps()
)(notes);