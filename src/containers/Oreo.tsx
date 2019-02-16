import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Action } from 'typescript-fsa';

import { handleChange, InputTextActionPayload } from 'actions/input';
import Oreo, { OreoProps } from 'components/Oreo';
import { State } from 'reducer';

interface StateProps {
  text: string;
  oreoArray: string[];
}

interface DispatchProps {
  handleChange: (text: string) => void;
}

const mapStateToProps = (state: State): StateProps => ({
  text: state.app.text,
  oreoArray: state.app.oreoArray,
});

const mapDispatchToProps = (
  dispatch: Dispatch<Action<InputTextActionPayload>>,
): DispatchProps =>
  bindActionCreators(
    {
      handleChange: (text: string) =>
        handleChange({
          text,
          oreoArray: text.match(/(o|re|オ|レ|お|れ)/g),
        }),
    },
    dispatch,
  );

export default connect<StateProps, DispatchProps, OreoProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Oreo);
