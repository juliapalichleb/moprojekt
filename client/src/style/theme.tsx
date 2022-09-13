export const theme1  = {
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained',
            },
        },
        MuiSelect: {
            defaultProps: {
                variant: 'outlined',
            },
        },
        MuiDrawer: {
           defaultProps: {
               PaperProps: {
                    sx: {
                        width: 200,
                        backgroundColor: '#082038',
                        color:"white",
                        borderColor:"rgb(30, 73, 118)"
                    }
               }
           }
        },
    }
}

