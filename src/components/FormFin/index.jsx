import React from "react";
import "./styles.css";
import {TextField} from '@mui/material'
import { Link } from 'react-router-dom';

const FormFinish = () => {
  return (
    <>
      <div className="formContainer">
        <div className="inputCont">

      <TextField
          required
          id="outlined-required"
          label="First Name"
          margin="normal"
          />
          <TextField
          required
          id="outlined-required"
          label="Last Name"
          margin="normal"
        />
        <TextField
          required
          id="outlined-number"
          label="Number Phone"
          type="number"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
        <div className="rightInputs">
          <TextField
            required
            id="outlined-required"
            label="Addres"
            margin="normal"
            />
          <TextField
            required
            id="outlined-required"
            label="Addres 2 optional"
            margin="normal"
            />
          <TextField
          required
          id="outlined-required"
          label="City"
          margin="normal"
          />
        </div>
        <div className="tarjeta">
        <TextField
          required
          id="standard-number"
          label="Tarjet Number"
          type="number"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="standard-number"
          label="Required"
          type="number"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
         <TextField
          required
          id="standard-number"
          label="Required"
          type="number"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
      </div>
      <div className="submitButtonCont">
        <Link className='submitButton' to='/FinCompra'>Enviar Pedido</Link>
      </div>
    </>
  );
};

export default FormFinish;
