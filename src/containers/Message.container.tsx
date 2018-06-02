import { connect } from 'react-redux';
import Message from '../components/Message';
import { AppState } from '../store';

export default connect((state: AppState) => ({ message: state.message}))(Message);

