import React, {useState} from 'react';
import styled from "styled-components";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DownIcon from '@mui/icons-material/ExpandMore';
import Logo from './Logo.svg';
import Link from 'next/link'


function BasicMenuButton({buildings}) {
    const [showSold, setShowSold] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorElMenu2, setAnchorElMenu2] = React.useState<null | HTMLElement>(null);
    const openMenu2 = Boolean(anchorElMenu2);

    const handleOpenSecondMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElMenu2(event.currentTarget);
    }

    const handleAvailableClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        handleOpenSecondMenu(event);
        setShowSold(false);

    };
    const handleCloseSecondMenu = () => {
        setAnchorEl(null);
        setAnchorElMenu2(null);
    };

    const handleSoldClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        handleOpenSecondMenu(event);
        setShowSold(true);
    }

    return (
        <div>
            
            <CustomButton
                
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<DownIcon />}
            >
                Desarrollos
            </CustomButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleAvailableClick}>
                        DISPONIBLES
                </MenuItem>
                <MenuItem onClick={handleSoldClick}>
                    VENDIDOS           
                </MenuItem>
            </Menu>


            <Menu
                id="basic-menu-2"
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                anchorEl={anchorElMenu2}
                open={openMenu2}
                onClose={handleCloseSecondMenu}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {buildings.filter( i => i.sold === showSold).map(i => 
            <Link key={i.id} href={`/building/${i.id}`}>
                    <MenuItem onClick={handleCloseSecondMenu}>
                        {i.title}
                    </MenuItem>
            </Link>
                    )
                    }      
            </Menu>
        </div>
    );
}

const Header = ({buildings}) =>
    <HeaderContainer>
        <HeaderLogoContainer>
            <Link href={`/`}>
                <HeaderLogo src={Logo.src}></HeaderLogo>
            </Link>
        </HeaderLogoContainer>
        <HeaderItem>
            <BasicMenuButton buildings={buildings}/>
        </HeaderItem>
               <HeaderItem>
            <CustomButton
                target={'_blank'}
                href={'https://api.whatsapp.com/send?phone=+5491124577070&text=Buenas!%20Me%20interesar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20los%20desarrollos%20de%20ayres%20del%20oeste'}
            >
                Contacto
            </CustomButton>
        </HeaderItem>
    </HeaderContainer>;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 14px 0 14px 0;
  background-color: #23b3a7;
`;
const HeaderItem = styled.div`
`;
const HeaderLogoContainer = styled.div`
  max-width: 200px;
`;
const HeaderLogo = styled.img`
  width: 100%;
  cursor: pointer;
`;

const CustomButton = styled(Button)`
color: white;
text-shadow: 1px 1px 2px black;
`;




export default Header;
