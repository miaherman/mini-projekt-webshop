import React, { Component } from "react";
import PrimarySearchAppBar from "./primarySearchAppBar";

import { FormControl } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export default class Checkout extends Component {
  

    render() {
      return (
        <>
         <PrimarySearchAppBar/>
           <FormControl>
           <TextField id="standard-basic" label="Standard" />

           </FormControl>
        </>

      
      );
    }
  }