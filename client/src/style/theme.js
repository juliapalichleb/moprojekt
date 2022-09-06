export const theme1  = {
    components: {
        MuiButton: {
            variants: [
                {
                    props: { styled: 'AddButton' },
                    style: {
                        margin: '10px 0 0 10px',
                        backgroundColor:"#1976d2",
                    },
                },
             ]
        },
        MuiPaper: {
            variants: [
                {
                    props: { styled: 'SearchInput' },
                    style: {
                        padding: '2px 4px',
                        minWidth:"170px",
                        display: 'flex',
                        alignItems: 'center',
                        width: 400,
                        flexGrow:4,
                        margin: "0 5px 0 5px"
                    },
                },
            ]
        },
        MuiSelect: {
            variants: [
                {
                    props: { styled: 'SearchInput' },
                    style: {
                        minWidth:"150px",
                        color:"#fff",
                        flexGrow:2,
                        margin: "0 5px 0 5px"
                    },
                },
            ]
        },
        MuiGrid: {
            variants: [
                {
                    props: { variant: 'gridContainer1' },
                    style: {
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        marginTop: "10px"
                    }
                },
                {
                    props: { variant: 'gridContainer2' },
                    style: {
                        display:"flex",
                        flexDirection:"column",
                        marginTop: "10px"
                    }
                },
                {
                    props: { variant: 'gridContainer3' },
                    style: {
                        display:"flex",
                    }
                },
            ]
        },
        MuiDialogContent: {
            variants: [
                {
                    props: { variant: 'DialogContent1' },
                    style: {
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        flexDirection:"column"
                    }
                },
            ]
        },
        MuiDialogActions: {
            variants: [
                {
                    props: { variant: 'DialogActions1' },
                    style: {
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                    }
                },
            ]
        },
        MuiCard: {
            variants: [
                {
                    props: { variant: 'ClickableCard' },
                    style: {
                        width:"50%",
                        margin:"5px",
                        padding:"5px",

                        '&:hover': {
                            opacity:'0.9',
                            cursor: 'pointer'
                        },
                        '&:active': {
                            background: "",
                            transform: 'translateY(4px)',
                            cursor: 'pointer'
                        },
                    }
                },
            ]
        },
        MuiDrawer: {
           defaultProps: {
               PaperProps: {
sx:{ width: 200,  bgcolor: '#082038', color:"white", borderColor:"rgb(30, 73, 118)" }
               }
           }
        },
    }
}

