const styles = {
    page: {
        width: '100%',
        height: '800px',
        background: '#235E6F',
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
    },
    categories: {
        display: 'flex',
        justifyContent: 'flex-start',
        border: 'solid black 1px',
        height: '45%',
    },
    category: {
        display: 'block',
        height: '100%',
        width: '20%',
        // border: 'solid black 1px',
    },
    categoryImage: {
        width: '100%',
        height: '100%',
    },
    wishPage: {
        width: '100%',
        height: 'auto',
        background: '#235E6F',
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
        // border: 'solid black 1px',
        borderRadius: '50px',
        width: '30%',
        height: '40%',
        marginRight: '10%',
        marginBottom: '5%',
        background: '#1d4e5c',

    },
    wishImage: {
        width: '10em',
        height: 'auto',
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
    }
}

module.exports = styles;