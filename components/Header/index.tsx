import React from 'react';
import styled from "styled-components";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DownIcon from '@mui/icons-material/ExpandMore';

function BasicMenuButton() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<DownIcon />}
            >
                Desarrollos
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Oportunidades</MenuItem>
                <MenuItem onClick={handleClose}>Vendidos</MenuItem>
            </Menu>
        </div>
    );
}
const Header = () =>
    <HeaderContainer>
        <HeaderLogoContainer>
            <HeaderLogo src={'https://www.romaydesarrollos.com.ar/wp-content/themes/romay/images/logo-romay.svg'}></HeaderLogo>
        </HeaderLogoContainer>
        <HeaderItem>
            <BasicMenuButton/>
        </HeaderItem>
        <HeaderItem>
            <Button>
                Nosotros
            </Button>
        </HeaderItem>
        <HeaderItem>
            <Button
                target={'_blank'}
                href={'https://api.whatsapp.com/send?phone=+5491124577070&text=Buenas!%20Me%20interesar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20los%20desarrollos%20de%20ayres%20del%20oeste'}
            >
                Contacto
            </Button>
        </HeaderItem>
    </HeaderContainer>;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 14px 0 14px 0;
  //background-color: rgba(56, 56, 152,0.1);
`;
const HeaderItem = styled.div`
`;
const HeaderLogoContainer = styled.div`
  max-width: 200px;
`;
const HeaderLogo = styled.img`
  width: 100%;
`;

export default Header;
