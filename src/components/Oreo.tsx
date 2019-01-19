import * as React from 'react';
import ReactSVG from 'react-svg';
import { Grid, Input } from 'semantic-ui-react';
import styled from 'styled-components';

const TagO = styled.span`
  color: white;
  background-color: black;
  border-radius: 50%;
  margin: 2px 0px;
  padding: 5px;
`;

const TagRe = styled.span`
  color: black;
  background-color: white;
  border-radius: 50%;
  margin: 2px 0px;
  padding: 3px;
  border-style: solid;
`;

const OreoText = styled.p`
  font-size: 21px;
  margin: 20px auto;
`;

const OreoImg = styled.div`
  position: relative;
  margin: 30px 40% 30px 40%;
`;

export interface OreoProps {
  text?: string;
  oreoArray?: string[];
  changeText?: (text: string) => void;
}

const Oreo: React.SFC<OreoProps> = ({
  text = '',
  oreoArray = [],
  changeText = () => {},
}) => (
  <Grid
    textAlign="center"
    verticalAlign="middle"
    centered={true}
    style={{ height: '100%' }}
  >
    <Grid.Column width={8}>
      <Input
        fluid={true}
        size="huge"
        placeholder="input your oreo!"
        onChange={(e, { value }) => changeText(value)}
      />
      <OreoText>
        {oreoArray
          ? oreoArray.map((w, i) =>
              w === 'o' || w === 'オ' || w === 'お' ? (
                <TagO key={i}>オ</TagO>
              ) : (
                <TagRe key={i}>レ</TagRe>
              ),
            )
          : ''}
      </OreoText>
      <OreoImg>
        {oreoArray
          ? oreoArray.map((w, i) =>
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
      </OreoImg>
    </Grid.Column>
  </Grid>
);

export default Oreo;
