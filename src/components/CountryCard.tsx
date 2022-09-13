import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Typography, Popover } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

import { ICountry } from '../api/country/types';
import useLongPress from '../hooks/useLongPress';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 125px;
  width: 380px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 20px;
  border-radius: 20px;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  > svg {
    margin-top: 20px;
    margin-right: 20px;
    cursor: pointer;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const InfoContainer = styled.button`
  padding: 0;
  margin-top: 10px;
  margin-right: 10px;
`;

interface Props {
  country: ICountry;
}

const FoodRecipeCard: FunctionComponent<Props> = ({ country }) => {
  const { name, capital, region, subregion, latlng, area, population } = country;
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const id = open ? 'simple-popover' : undefined;

  const longPress = useLongPress(() => setOpen(true), 2000);

  return (
      <Container>
        <HeaderContainer>
          <InfoContainer onMouseEnter={handleMouseEnter} {...longPress}>
            <InfoIcon />
          </InfoContainer>
        </HeaderContainer>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}>Region: {region}</Typography>
          <Typography sx={{ p: 2 }}>Subregion: {subregion}</Typography>
          <Typography sx={{ p: 2 }}>Latitude: {latlng[0]}</Typography>
          <Typography sx={{ p: 2 }}>Longitude: {latlng[1]}</Typography>
          <Typography sx={{ p: 2 }}>Area: {area}</Typography>
          <Typography sx={{ p: 2 }}>Population: {population}</Typography>
        </Popover>
        <ContentContainer>
          <Typography>Name: {name}</Typography>
          <Typography>Capital: {capital}</Typography>
        </ContentContainer>
      </Container>
  )
}

export default FoodRecipeCard;