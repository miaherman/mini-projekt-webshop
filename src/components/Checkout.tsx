import React, { Component } from "react";
import ButtonAppBar from "./buttonAppBar";

import { FormControl } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export default class Checkout extends Component {
  

    render() {
      return (
        <>
         <ButtonAppBar/>
           <FormControl>
                <TextField id="standard-basic" label="Mitt lilleformulärhehe" />
           </FormControl>
        </>

      
      );
    }
  }