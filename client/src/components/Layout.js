import React, { useEffect } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../redux/actions/auth';

const Layout = (props) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        await props.checkAuthenticated();
        await props.load_user();
    } catch (err) {

    }
  }
  fetchData();
}, []);

  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}

export default connect(null, { checkAuthenticated, load_user })(Layout);
