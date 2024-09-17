import React, { useEffect, useState } from 'react';
import logo from '../../logo.svg';

function Home() {

  const [loggedin, setLoggedIn] = useState<Boolean>(false)

  useEffect(() => {
    console.log(loggedin)
  }, [loggedin])

  return (
    <div>
        I'm Home
    </div>
  );
}

export default Home;
