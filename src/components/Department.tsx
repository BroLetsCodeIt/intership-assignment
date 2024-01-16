import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Container } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function Department() {
  const [checked1, setChecked1] = React.useState([true, false]);
  const [checked2, setChecked2] = React.useState([true, false, false]);
  const [isboxedclicked1 , setisboxedclick1] = React.useState(true);
  const [isboxedclicked2 ,setisboxedclick2] = React.useState(true);
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1([event.target.checked, checked1[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1([checked1[0], event.target.checked]);
  };

  // handle change for second dropdown
  const handleChange4forsd1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2([
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };
  const handleChange4forsd2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2([event.target.checked, checked2[1], checked2[2]]);
  };
  const handleChange4forsd3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2([checked2[0], event.target.checked, checked2[2]]);
  };
  const handleChange4forsd4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2([checked2[0], checked2[1], event.target.checked]);
  };

  const children1 = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="support"
        control={<Checkbox checked={checked1[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="customer_success"
        control={<Checkbox checked={checked1[1]} onChange={handleChange3} />}
      />
    </Box>
  );

  const children2 = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="graphic design"
        control={
          <Checkbox checked={checked2[0]} onChange={handleChange4forsd2} />
        }
      />
      <FormControlLabel
        label="web design"
        control={
          <Checkbox checked={checked2[1]} onChange={handleChange4forsd3} />
        }
      />
      <FormControlLabel
        label="product_design"
        control={
          <Checkbox checked={checked2[2]} onChange={handleChange4forsd4} />
        }
      />
    </Box>
  );

  const handledropdown = () => {
    setisboxedclick1(!isboxedclicked1);
    
  };

  const handledropdown2  = () =>{
    setisboxedclick2(!isboxedclicked2);
  }
  return (
    <>
      <Box>
        <Container sx={{ display: "flex" }}>
          {isboxedclicked1 ? 
          <ArrowDropDownIcon
            onClick={handledropdown}
            sx={{ cursor: "pointer", width: "min-content" }}
          /> : <ArrowRightIcon
          onClick={handledropdown}
          sx={{ cursor: "pointer", width: "min-content" }}
        />}
          {isboxedclicked1 && 
          <Box id="form-1" >
            <FormControlLabel
              label="Customer_service"
              control={
                <Checkbox
                  name="form-1"
                  checked={checked1[0] && checked1[1]}
                  indeterminate={checked1[0] !== checked1[1]}
                  onChange={handleChange1}
                />
              }
            />
            {children1}
          </Box>}
        </Container>
      </Box>
      <Box>
        <Container sx={{ display: "flex" }}>
          {isboxedclicked2 ? <ArrowDropDownIcon sx={{ cursor: "pointer" }} onClick={handledropdown2}/> : <ArrowRightIcon sx={{ cursor: "pointer" }} onClick={handledropdown2}/>}
          
          {isboxedclicked2 && 
          <Box id="form-2">
            <FormControlLabel
              label="design"
              control={
                <Checkbox
                  checked={checked2[0] && checked2[1] && checked2[2]}
                  indeterminate={
                    checked2[0] !== checked2[1] || 
                    checked2[1] !== checked2[2] ||
                    checked2[2] !== checked2[0]
                  }
                  onChange={handleChange4forsd1}
                />
              }
            />
            {children2}
          </Box>}
        </Container>
      </Box>
    </>
  );
}
