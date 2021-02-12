import React from 'react';
import Utama from './component/utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      
      <div> <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <nav class="navbar navbar-light" style="background-color: #e3f2fd;"></nav>
      <div class="p-3 mb-2 bg-light text-dark">.bg-light</div>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Selamat Datang</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="./react2/src/component/beranda">Beranda</a>
            <a class="nav-link" href="./react2/src/component/tentangsaya">Tentang Saya</a>
            <a class="nav-link" href="./react2/src/component/karya">Karya</a>
            <a class="nav-link" href="./react2/src/component/kontak">Kontak</a>
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
        <p><Utama /></p>
      </div>
    )
  }
}
export default App;
