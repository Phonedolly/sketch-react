import React, { Component } from 'react';

// reactstrap components

// core components
import DefaultNavbar from './CoreViewFrame/DefaultNavbar';
import CardsFooter from './CoreViewFrame/CardsFooter.js';
import SimpleFooter from './CoreViewFrame/SimpleFooter';

// index page sections
import BigBoard from './ViewFrame/BigBoard';

import Hero from './views/IndexSections/Hero.js';
import Buttons from './views/IndexSections/Buttons.js';
import Inputs from './views/IndexSections/Inputs.js';
import CustomControls from './views/IndexSections/CustomControls.js';
import Menus from './views/IndexSections/Menus.js';
import Navbars from './views/IndexSections/Navbars.js';
import Tabs from './views/IndexSections/Tabs.js';
import Progress from './views/IndexSections/Progress.js';
import Pagination from './views/IndexSections/Pagination.js';
import Pills from './views/IndexSections/Pills.js';
import Labels from './views/IndexSections/Labels.js';
import Alerts from './views/IndexSections/Alerts.js';
import Typography from './views/IndexSections/Typography.js';
import Modals from './views/IndexSections/Modals.js';
import Datepicker from './views/IndexSections/Datepicker.js';
import TooltipPopover from './views/IndexSections/TooltipPopover.js';
import Carousel from './views/IndexSections/Carousel.js';
import Icons from './views/IndexSections/Icons.js';
import Login from './views/IndexSections/Login.js';
import Download from './views/IndexSections/Download.js';

class App extends Component {
  render() {
    return (
      <>
        <DefaultNavbar />
        <BigBoard />

        {/* <CardsFooter /> */}
        <SimpleFooter />
      </>
    );
  }
}

export default App;
