import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#2196F3"
        },
        secondary: {
            main: "#800080"
        },
        error: {
            main: "#FF2800"
        },
        action: {
            hover: "#ede7f6"
        }
    }
})

export default theme;