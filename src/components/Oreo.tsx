import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import ReactSVG from 'react-svg';
import { Field, reduxForm } from 'redux-form';

const renderTextField: React.FC<any> = ({
  input,
  meta: { touched, error },
  label,
  type = 'text',
  required = false,
  rootClass = '',
}) => (
  <TextField
    label={label}
    required={required}
    classes={{ root: rootClass }}
    type={type}
    variant="outlined"
    error={!!(touched && error)}
    helperText={touched && error}
    fullWidth={true}
    {...input}
  />
);

export interface OreoProps {
  text?: string;
  oreoArray?: string[];
  handleChange?: () => void;
}

const Oreo: React.FC<any> = ({
  text = '',
  oreoArray = [],
  handleChange = () => {},
}) => (
  <Grid
    container={true}
    justify="center"
    direction="column"
    alignItems="center"
  >
    <Grid item={true} xs={12}>
      <form>
        <Field
          name="text"
          label="text"
          component={renderTextField}
          onChange={(e: any) => handleChange(e.target.value)}
        />
      </form>
    </Grid>
    <Grid item={true} xs={12}>
      <div style={{ fontSize: '21px', margin: '20px auto' }}>
        {oreoArray
          ? oreoArray.map((w: string, i: number) =>
              w === 'o' || w === 'オ' || w === 'お' ? (
                <span
                  style={{
                    color: 'white',
                    backgroundColor: 'black',
                    borderRadius: '50%',
                    margin: '2px 0px',
                    padding: '5px',
                  }}
                  key={i}
                >
                  オ
                </span>
              ) : (
                <span
                  style={{
                    color: 'black',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    margin: '2px 0px',
                    padding: '3px',
                    borderStyle: 'solid',
                  }}
                  key={i}
                >
                  レ
                </span>
              ),
            )
          : ''}
      </div>
    </Grid>
    <Grid
      item={true}
      xs={12}
      style={{ position: 'relative', margin: '30px 40% 30px 40%' }}
    >
      {oreoArray
        ? oreoArray.map((w: string, i: number) =>
            w === 'o' || w === 'オ' || w === 'お' ? (
              <ReactSVG
                src="oreo_o.svg"
                svgStyle={{
                  position: 'absolute',
                  top: 25 * i,
                  zIndex: 999 - i,
                  padding: 0,
                  margin: 0,
                }}
                key={i}
              />
            ) : (
              <ReactSVG
                src="oreo_re.svg"
                svgStyle={{
                  position: 'absolute',
                  top: 25 * i,
                  zIndex: 999 - i,
                  paddingLeft: 5,
                  marginTop: 10,
                  marginRight: 5,
                }}
                key={i}
              />
            ),
          )
        : ''}
    </Grid>
  </Grid>
);

export default reduxForm({
  form: 'oreo-form',
})(Oreo);
