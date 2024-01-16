import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Container,
  Typography,
  Grid,
  FormControl,
} from "@mui/material";

interface FormData {
  name: string;
  phoneNumber: number;
  email: string;
}

const MyForm: React.FC = () => {

  const navigate = useNavigate();
  const initialFormData: FormData = {
    name: "",
    phoneNumber: 0 ,
    email: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  const handleChange = (field: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newFormData = { ...formData, [field]: event.target.value };
      setFormData(newFormData);
      // Store form data in localStorage on every change
      localStorage.setItem("formData", JSON.stringify(newFormData));
    };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formData.email || !formData.name || !formData.phoneNumber) {
      alert("All Fields are Required");
    } else {
      navigate('/secondpage',{replace:true})
      console.log("no");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
     
        <Typography variant="h5" align="center">
          My Form
        </Typography>
        <FormControl onSubmit={handleSubmit} component={"form"} noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="text"
                label="Name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange("name")}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
               
               
                fullWidth
                label="Phone Number"
                variant="outlined"
                value={formData.phoneNumber}
                onChange={handleChange("phoneNumber")}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                fullWidth
                label="Email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange("email")}
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Go to Second Page
          </Button>
        </FormControl>
     
    </Container>
  );
};

export default MyForm;
