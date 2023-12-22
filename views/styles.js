const styles = {
    page: {
        width: '100%',
        height: '800px',
        background: '#235E6F',
        fontFamily: 'sans-serif',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        top: '0',
        width: '100%',
        height: '5em',
        border: 'solid black 1px',
        color: 'white',
        background: '#CC231E',

    },
    title: {
        textAlign: 'center',
    },
    a: {
        color: 'white',
        textDecoration: 'none',
        border: 'solid black 2px',
        // borderRadius: '10px',
        padding: '5px',
        background: '#0F8A5F',
    },
    categories: {
        display: 'flex',
        justifyContent: 'space-between',
        // border: 'solid black 1px',
        height: '50%',
        width: '100%',
        overflowX: 'auto',
        whiteSpace: 'nowrap',

        // display: 'flex',
        // width: '100%',
        // height: '70%',
        // border: 'solid black 1px',
        // overflowX: 'auto',
        // whiteSpace: 'nowrap',

    },
    category: {
        display: 'block',
        height: '60%',
        width: '100%',
        // border: 'solid black 1px',
        marginRight: '5%',
        paddingRight: '5em',
        paddingLeft: '5em',
        textAlign: 'center',
    },
    categoryImageContainer: {
        width: '150%',
    },
    categoryImage: {
        width: '15em',
        border: 'solid black 2px',
        borderRadius: '30px',
    },
    wishPage: {
        width: '100%',
        height: 'auto',
        background: '#235E6F',
        fontFamily: 'sans-serif',
    },
    wishList: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginLeft: '10%',
        // border: 'solid black 1px',

    },
    wishElement: {
        display: 'flex',
        border: 'solid black 1px',
        borderRadius: '50px',
        width: '35%',
        height: '40%',
        marginRight: '10%',
        marginBottom: '5%',
        background: '#1d4e5c',

    },
    imageBlock: {
        display: 'block',
        // border: 'solid black 1px',        
    },
    wishImage: {
        // alignSelf: 'flex-end',
        width: '10em',
        height: 'auto',
        borderRadius: '50px',
        // border: 'solid black 1px',
    },
    formy: {
        // border: 'solid black 1px',
        height: '2em',
        width: '9em',
    },
    formyButton: {
        height: '100%',
        borderRadius: '20px',
        background: '#358fa9',
    },

    toyList: {
        display: 'flex',
        width: '100%',
        height: '70%',
        // border: 'solid black 1px',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
    },
    toyElement: {
        // border: 'solid black 1px',
        width: '100%',
        height: '40%',
        marginRight: '10%',
    },
    toyImage: {
        width: '20em',
        height: 'auto',
        borderRadius: '50px',
    },
    form: {
        display: 'block',
        // border: 'solid black 1px',
        height: '30%',
        padding: '10%',
        paddingLeft: '25%',
        color: 'white',
    },
    formFirst: {
        marginBottom: '5%',
    },
    goldColor: {
        color: 'gold',
        fontWeight: '900',
    } 
}

module.exports = styles;