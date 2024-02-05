import React, { useState } from 'react';
import { Box, Button, Card, InputLabel, TextField, Typography } from '@mui/material';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { API } from '../../constant/Network';

interface ExpenseData {
  Description: string;
  ExpenseDate: string;
  ExpenseAmount: number;
  Categories: string;
}

const ae = {
  fontWeight: 'bold',
  color: 'black',
  marginBottom: '10px',
  textAlign: 'center',
  fontSize: { xs: '15px', sm: '20px', md: '17px' },
  marginTop: '10px',
  borderRadius: '15px',
  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
  width: '100%',
  padding: '10px',
};

const EditExpenseForm: React.FC = () => {
  const { handleSubmit, register, formState: { errors }, setError, } = useForm();

  const initialExpenseData: ExpenseData = {
    Description: '',
    ExpenseDate: '',
    ExpenseAmount: 0,
    Categories: '',
  };

  const [editmyexpense, setEditMyExpense] = useState<ExpenseData>(initialExpenseData);

  const handleExpense = (fieldName: string, value: string | number) => {
    setEditMyExpense({ ...editmyexpense, [fieldName]: value });
    console.log(editmyexpense);

    setError(fieldName, {
      type: 'manual',
      message: undefined,
    });
  };

  const submitForm: SubmitHandler<FieldValues> = (data) => {
    // Check if all required fields are filled
    if (editmyexpense.Description && editmyexpense.ExpenseDate && editmyexpense.ExpenseAmount && editmyexpense.Categories) {
      // Assuming your API endpoint for updating expenses is like the one below
      const url = 'http://localhost:9001/api/v1/auth/expenseedit/';

      const headers = {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmM5Y2M1YTMyYjgxOTk5ZTlkZWM4NyIsImlhdCI6MTcwNzExMDkwMiwiZXhwIjoxNzA3MTM0MzU4fQ.Wvl9r1Mm1E1ebCOEUua-58xkaZMX5hJiTYedFA4R57A',
      };
      const params = {
        id: '65bf52ff4f01418ed2fed58a',
      };
     
      

      const d = { headers, params }

      // Assuming you are using the same API class and method for the PUT request
      API.put(url, editmyexpense,d)?.subscribe({
        next(res: any) {
          console.log('res data:', res.data);
          alert('Expense updated successfully');
          // Reset form or navigate to another page if needed
          setEditMyExpense({
            Description: '',
            ExpenseDate: '',
            ExpenseAmount: 0,
            Categories: '',
          });
        },
        error(err: any) {
          console.log('error:', err);
        },
      });
    }
  };


  return (
    <Card
      sx={{
        height: { xs: '91vh', sm: '80vh', md: '80vh' },
        margin: 'auto',
        width: { xs: '100%', sm: '80%', md: '60%' },
        background: 'white',
      }}
    >
      <Typography sx={ae}>Edit Expense</Typography>
      <form onSubmit={handleSubmit(submitForm)}>
        <Box sx={{ padding: '20px 50px' }}>
          <Box>
            <InputLabel
              required
              sx={{
                fontSize: { xs: '13px', md: '13px', sm: '17px' },
              }}
            >
              Description
            </InputLabel>
            <TextField
              {...register('Description', { required: 'Description is required' })}
              onChange={(e) => handleExpense('Description', e.target.value)}
              value={editmyexpense.Description}
              size="small"
              sx={{
                width: { xs: '100%', sm: '100%', md: '100%' },
                marginBottom: { xs: '10px', sm: '20px', md: '10px' },
              }}
              error={Boolean(errors.Description?.message)}
              helperText={errors.Description?.message as React.ReactNode}
            />
          </Box>

          <Box>
            <InputLabel
              required
              sx={{
                fontSize: { xs: '13px', md: '13px', sm: '17px' },
              }}
            >
              Expense Date
            </InputLabel>
            <TextField
              {...register('ExpenseDate', { required: 'Expense Date is required' })}
              onChange={(e) => handleExpense('ExpenseDate', e.target.value)}
              value={editmyexpense.ExpenseDate}
              size="small"
              type="date"
              sx={{
                width: { xs: '100%', sm: '100%', md: '100%' },
                marginBottom: { xs: '10px', sm: '20px', md: '10px' },
              }}
              error={Boolean(errors.ExpenseDate?.message)}
              helperText={errors.ExpenseDate?.message as React.ReactNode}
            />
          </Box>

          <Box>
            <InputLabel
              required
              sx={{
                fontSize: { xs: '13px', md: '13px', sm: '17px' },
              }}
            >
              Expense Amount
            </InputLabel>
            <TextField
              {...register('ExpenseAmount', { required: 'Expense Amount is required' })}
              onChange={(e) => handleExpense('ExpenseAmount', Number(e.target.value))}
              value={editmyexpense.ExpenseAmount}
              size="small"
              sx={{
                width: { xs: '100%', sm: '100%', md: '100%' },
                marginBottom: { xs: '10px', sm: '20px', md: '10px' },
              }}
              error={Boolean(errors.ExpenseAmount?.message)}
              helperText={errors.ExpenseAmount?.message as React.ReactNode}
            />
          </Box>

          <Box>
            <InputLabel
              required
              sx={{
                fontSize: { xs: '13px', md: '13px', sm: '17px' },
              }}
            >
              Categories
            </InputLabel>
            <TextField
              {...register('Categories', { required: 'Categories is required' })}
              onChange={(e) => handleExpense('Categories', e.target.value)}
              value={editmyexpense.Categories}
              size="small"
              sx={{
                width: { xs: '100%', sm: '100%', md: '100%' },
                marginBottom: { xs: '10px', sm: '20px', md: '10px' },
              }}
              error={Boolean(errors.Categories?.message)}
              helperText={errors.Categories?.message as React.ReactNode}
            />
          </Box>

          <Box>
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: { xs: '100%', sm: '100%', md: '100%' },
                backgroundColor: '#848484',
                color: 'white',
                fontSize: { xs: '13px', sm: '', md: '' },
              }}
            >
              Update Expense
            </Button>
          </Box>
        </Box>
      </form>
    </Card>
  );
}

export default EditExpenseForm;
