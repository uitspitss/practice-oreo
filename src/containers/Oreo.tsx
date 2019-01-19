import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Action } from 'typescript-fsa';

import { changeText, InputTextActionPayload } from 'actions/input';
import Oreo, { OreoProps } from 'components/Oreo';
import { State } from 'reducer';

interface StateProps {
  text: string;
  oreoArray: string[];
}

interface DispatchProps {
  changeText: (text: string) => void;
}

const mapStateToProps = (state: State): StateProps => ({
  text: state.text,
  oreoArray: state.oreoArray,
});

const mapDispatchToProps = (
  dispatch: Dispatch<Action<InputTextActionPayload>>,
): DispatchProps =>
  bindActionCreators(
    {
      changeText: (text: string) =>
        changeText({
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
