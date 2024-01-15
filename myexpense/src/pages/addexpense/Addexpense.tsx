
import React, { ReactNode } from 'react';
import { useState } from 'react';
import { Box, Button, Card, InputLabel, TextField, Typography } from '@mui/material';
// import Simplesidebar from '../simplesidebar/Simplesidebar';
// import Appbar from '../appbar/Appbar';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';


const Addexpense: React.FC = () => {
  const { handleSubmit, register, formState: { errors }, setError } = useForm();

  interface ExpenseData {
    Description: string;
    ExpenseDate: string;
    ExpenseAmount: number;
    Categories: string;
  }

  const [expensestuff, setExpensestuff] = useState<ExpenseData>({
    Description: '',
    ExpenseDate: '',
    ExpenseAmount: 0,
    Categories: '',
  });

  // const [date, setDate] = useState<string | number | null>();
  // const [errordisappear, setErrordisappear] = useState(false); 

  const handleExpense = (fieldName: string, value: string | number) => {
    setExpensestuff({...expensestuff, [fieldName]: value });
    setError(fieldName, {
      type: "manual",
      message: undefined,
    });
  };

  const submitform: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
    if (expensestuff.Description && expensestuff.ExpenseDate && expensestuff.ExpenseAmount && expensestuff.Categories) {
      alert('All expenses added successfully');
      setExpensestuff({
        Description: '',
        ExpenseDate: '',
        ExpenseAmount: 0,
        Categories: '',
      });
    }
  };

  const ae = {
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '10px',
    textAlign: 'center',
    fontSize: { xs: '15px', sm: '20px', md: '17px' },
    marginTop: '10px',
    borderRadius: '15px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    padding: '10px',
  };

  console.log(Boolean(errors.Description?.message))

  return (
    <>
     
        <Box sx={{ position: 'static', width: '100%' }}>
          {/* <Appbar /> */}
          <Box
            sx={{
              height: { xs: '80vh', sm: '100vh', md: '100vh' },
              backgroundColor: '#040f13',
              paddingTop: { xs: '0px', sm: '20px', md: '20px' },
            }}
          >
            <Card
              sx={{
                height: { xs: '91vh', sm: '80vh', md: '80vh' },
                margin: 'auto',
                width: { xs: '100%', sm: '80%', md: '60%' },
                background: 'white',
              }}
            >
              <Typography sx={ae}>Add Expense</Typography>
              <form onSubmit={handleSubmit(submitform)}>
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
                      value={expensestuff.Description}
                      size="small"
                      sx={{
                        width: { xs: '100%', sm: '100%', md: '100%' },
                        marginBottom: { xs: '10px', sm: '20px', md: '10px' },
                      }}
                      error={Boolean(errors.Description?.message)}
                      helperText={errors.Description?.message as ReactNode}
                      inputProps={{
                        sx: {
                          height: { xs: '15px', sm: '25px', md: '15px' },
                        }
                      }}
                    />

                  </Box>
                  <Box>
                    <InputLabel
                      required
                      sx={{
                        fontSize: { xs: '13px', md: '13px', sm: '17px' },
                      }}
                    >
                      ExpenseDate
                    </InputLabel>
                    <TextField
                      {...register('ExpenseDate', { required: 'ExpenseDate is required' })}
                      onChange={(e) => handleExpense('ExpenseDate', (e.target.value))}
                      value={expensestuff.ExpenseDate}
                      size="small"
                      type='date'
                      sx={{
                        width: { xs: '100%', sm: '100%', md: '100%' },
                        marginBottom: { xs: '10px', sm: '20px', md: '10px' },
                      }}
                      error={Boolean(errors.ExpenseDate?.message)}
                      helperText={errors.ExpenseDate?.message as ReactNode}

                      inputProps={{
                        sx: {
                          height: { xs: '15px', sm: '25px', md: '15px' },
                        },
                      }}
                    />

                  </Box>
                  <Box>

                    <InputLabel
                      required
                      sx={{
                        fontSize: { xs: '13px', md: '13px', sm: '17px' },
                      }}
                    >
                      ExpenseAmount
                    </InputLabel>
                    <TextField
                      {...register('ExpenseAmount', { required: 'ExpenseAmount is required' })}
                      onChange={(e) => handleExpense('ExpenseAmount', Number(e.target.value))}
                      value={expensestuff.ExpenseAmount}
                      size="small"
                      sx={{
                        width: { xs: '100%', sm: '100%', md: '100%' },
                        marginBottom: { xs: '10px', sm: '20px', md: '10px' },
                      }}
                      error={Boolean(errors.ExpenseAmount?.message )}
                      helperText={errors.ExpenseAmount?.message as ReactNode}
                      inputProps={{
                        sx: {
                          height: { xs: '15px', sm: '25px', md: '15px' },
                        },
                      }}
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
                      value={expensestuff.Categories}
                      size="small"
                      sx={{
                        width: { xs: '100%', sm: '100%', md: '100%' },
                        marginBottom: { xs: '10px', sm: '20px', md: '10px' },
                      }}
                      error={Boolean(errors.Categories?.message)}
                      helperText={errors.Categories?.message as ReactNode}
                      inputProps={{
                        sx: {
                          height: { xs: '15px', sm: '25px', md: '15px' },
                        },
                      }}
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
                      Add Expense
                    </Button>
                  </Box>
                  <Box />
                </Box>
              </form>
            </Card>
          </Box>
        </Box>
     
    </>
  );
};

export default Addexpense;


