import React from "react";
import { Container, Grid, Avatar, TextField, Button, Typography } from "@mui/material";
import { CenterFocusStrong } from "@mui/icons-material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

function StudentRegister() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            {console.log("studentRegister.js")}
            <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, textAlign: "center" }}>
                Student Registration
            </Typography>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", border: '1px solid' }}>

                <form>

                    <Container sx={{ mb: 1, display: "flex", flexDirection: 'column ', justifyContent: "center", alignItems: "center", }} >
                        <Grid container sx={{ justifyContent: "flex-start" }}>
                            <Grid item md={2}>
                                {/* <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "2rem 0 5rem",
                                margin: "auto auto",
                            }}
                        > */}
                                {/* <Avatar
                                sx={{ width: 150, height: 150, mt: 5 }}
                                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                            /> */}
                                {/* <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
                                Student name
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                edogaru@daiict.ac.in
                            </Typography> */}
                                {/* </div> */}
                            </Grid>
                            <Grid item md={4} sx={{ borderRight: 0, borderColor: "divider", mr: 5 }}>
                                <div style={{ padding: "2rem 0 5rem" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                                    </div>
                                    <Grid container spacing={2}>
                                        <Grid item md={6}>
                                            <TextField
                                                label="name"
                                                id="name"
                                                name="name"
                                                type="text"
                                                variant="outlined"
                                                fullWidth
                                                required
                                            />
                                        </Grid>
                                        <Grid item md={6}>
                                            <TextField
                                                label="surname"
                                                id="surname"
                                                name="surname"
                                                type="text"
                                                variant="outlined"
                                                fullWidth
                                                required
                                            />
                                        </Grid>
                                    </Grid>
                                    {/* <TextField label="Student ID" variant="outlined" fullWidth sx={{ mt: 3 }} required /> */}
                                    <TextField
                                        label="student_id"
                                        id="student_id"
                                        name="name"
                                        type="number"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        sx={{ mt: 2 }}
                                    />
                                    {/* <TextField label="Alternate Email Address" variant="outlined" fullWidth required sx={{ mt: 2 }} /> */}
                                    <TextField
                                        label="email"
                                        id="email"
                                        name="email"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField
                                        label="alternate-email"
                                        id="alt-email"
                                        name="alt-email"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField
                                        label="password"
                                        id="password"
                                        name="password"
                                        type="password"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField
                                        label="Confirm password"
                                        id="conf-password"
                                        name="conf-password"
                                        type="password"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        sx={{ mt: 2 }}
                                    />
                                    {/* <TextField label="Skype ID" variant="outlined" required fullWidth sx={{ mt: 2 }} /> */}
                                    <TextField
                                        label="Skype ID"
                                        id="skype-id"
                                        name="skype-id"
                                        type="text"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        sx={{ mt: 2 }}
                                    />
                                    {/* <TextField label="Date Of Birth" variant="outlined" required fullWidth sx={{ mt: 2 }} /> */}


                                    {/* <TextField label="Mobile Number" variant="outlined" required fullWidth sx={{ mt: 2 }} /> */}
                                    <TextField
                                        label="mobile number"
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        pattern="[1-9]{1}[0-9]{9}"
                                        fullWidth
                                        required
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField
                                        label="alternate mobile number"
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        pattern="[1-9]{1}[0-9]{9}"
                                        fullWidth
                                        required
                                        sx={{ mt: 2 }}
                                    />
                                    <div style={{
                                        marginTop: "5px",
                                    }}>

                                        <FormLabel id="radio-buttons-group-label">Gender</FormLabel>
                                    </div>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="male"
                                        name="radio-buttons-group"
                                    >
                                        <span style={{
                                            marginTop: "1px",
                                        }}>
                                            <FormControlLabel value="male" control={<Radio />} label="male" />
                                            <FormControlLabel value="female" control={<Radio />} label="female" />
                                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                                        </span>
                                    </RadioGroup>
                                    <div style={{
                                        marginTop: "7px",
                                    }}>
                                        <FormLabel id="dob"
                                        >Date Of Birth</FormLabel>
                                    </div>
                                    <TextField
                                        label=""
                                        id="dob"
                                        name="dob"
                                        type="date"
                                        variant="outlined"
                                        fullWidth
                                        required

                                        sx={{ mt: 1 }}
                                    />
                                </div>
                            </Grid>
                            <Grid item md={4} sx={{}}>
                                <div style={{ padding: "2rem 0 5rem" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                                    </div>
                                    <Grid container spacing={2} sx={{}}>
                                        <Grid item md={6}>
                                            <TextField
                                                label="father name"
                                                id="fath-name"
                                                name="fath-name"
                                                type="text"
                                                variant="outlined"
                                                fullWidth
                                                required
                                            />
                                        </Grid>
                                        <Grid item md={6}>
                                            <TextField
                                                label="mother name"
                                                id="moth-name"
                                                name="moth-name"
                                                type="text"
                                                variant="outlined"
                                                fullWidth
                                                required
                                            />
                                        </Grid>
                                    </Grid>
                                    <TextField
                                        label="Permanent Address"
                                        variant="outlined"
                                        name="permanent-address"
                                        id="permanent-address"
                                        type="text"
                                        fullWidth
                                        required
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField
                                        label="Current Address"
                                        variant="outlined"
                                        name="current-address"
                                        id="current-address"
                                        type="text"
                                        fullWidth
                                        required
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField
                                        label="10th Percentage"
                                        id="10th-percentage"
                                        name="10th-percentage"
                                        variant="outlined"
                                        fullWidth
                                        type="number"
                                        sx={{ mt: 2 }}
                                        required
                                    />
                                    <TextField
                                        label="12th Percentage"
                                        id="12th-percentage"
                                        name="12th-percentage"
                                        variant="outlined"
                                        fullWidth
                                        type="number"
                                        required
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField
                                        label="CPI"
                                        id="cpi"
                                        name="cpi"
                                        variant="outlined"
                                        fullWidth
                                        type="number"
                                        required
                                        sx={{ mt: 2 }}
                                    />
                                    <Grid container spacing={2} sx={{ mt: 0.3 }}>
                                        <Grid item md={6}>
                                            <TextField
                                                label="Current BackLogs"
                                                variant="outlined"
                                                fullWidth
                                                type="number"
                                                id="current-backlogs"
                                                name="current-backlogs"
                                                required
                                            />
                                        </Grid>
                                        <Grid item md={6}>
                                            <TextField
                                                label="Total BackLogs"
                                                variant="outlined"
                                                fullWidth
                                                type="number"
                                                id="total-backlogs"
                                                name="total-backlogs"
                                                required
                                            />
                                        </Grid>
                                    </Grid>
                                    <TextField
                                        label="Branch"
                                        id="branch"
                                        name="branch"
                                        variant="outlined"
                                        fullWidth
                                        type="text"
                                        required
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField label="Registering For" variant="outlined" fullWidth sx={{ mt: 2 }} />
                                    <div>
                                        <Button
                                            id="demo-customized-button"
                                            aria-controls={open ? 'demo-customized-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            variant="contained"
                                            disableElevation
                                            onClick={handleClick}
                                            endIcon={<KeyboardArrowDownIcon />}
                                            sx={{ mt: 2 }}
                                        >
                                            Options
                                        </Button>
                                        <StyledMenu
                                            id="menu"
                                            MenuListProps={{
                                                'aria-labelledby': 'demo-customized-button',
                                            }}
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}

                                        >
                                            <MenuItem onClick={handleClose} disableRipple>
                                                ICT with CS
                                            </MenuItem>
                                            <MenuItem onClick={handleClose} disableRipple>
                                                ICT
                                            </MenuItem>
                                            <MenuItem onClick={handleClose} disableRipple>
                                                MnC
                                            </MenuItem>
                                        </StyledMenu>
                                    </div>

                                    <Grid container spacing={2} sx={{ mt: 0.3 }}>
                                        <Grid item md={6}>
                                            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                                                Upload Resume
                                                <VisuallyHiddenInput type="file" />
                                            </Button>

                                        </Grid>
                                        <Grid item md={6}>
                                            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                                                Upload Photo
                                                <VisuallyHiddenInput type="file" />
                                            </Button>
                                        </Grid>
                                    </Grid>


                                </div>
                            </Grid>
                        </Grid>
                        {/* submit button */}
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Button type="submit" variant="contained">
                                Submit
                            </Button>
                        </div>
                    </Container >

                </form >
            </div >
        </>
    );
}

export default StudentRegister;