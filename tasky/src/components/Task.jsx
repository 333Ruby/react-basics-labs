import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

const Task = (props) => {
  return (
    <Grid
      key={props.id}
      size={{ xs: 12, sm: 6, md: 4}}
    >
      <Card
        sx={{
          backgroundColor: props.done ? 'success.light' : 'primary.light',
          padding: '20px',
          borderRadius: '20px'
        }}
      >
        <CardHeader
          title={props.title}
          sx={{
            backgroundColor: 'white',
            borderRadius: '3px',
            padding: '20px',
            textAlign: 'center'
          }}
        />

        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'baseline',
              mb: 2,
              padding: '20px'
            }}
          >
            <Typography
              component="p"
              variant="subtitle2"
              color="text.primary"
            >
              Due: {props.deadline}
            </Typography>
          </Box>

          <Typography
            component="p"
            variant="subtitle1"
            align="center"
            sx={{ fontStyle: 'italic' }}
          >
            {props.description}
          </Typography>

          <Chip
            label={props.priority}
            color="primary"
            sx={{
              display: 'block',
              width: 'fit-content',
              margin: '20px auto 0'
            }}
            />
        </CardContent>

        <CardActions
          sx={{
            justifyContent: 'space-between',
            padding: '20px'
          }}
        >
          <Button
            variant="contained"
            size="small"
            color="success"
            onClick={props.markDone}
          >
            <DoneIcon />
            Done
          </Button>

          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={props.deleteTask}
          >
            <DeleteIcon />
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Task;