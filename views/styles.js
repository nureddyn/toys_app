const styles = {
    page: {
        width: '100%',
        height: '800px',
        background: '#235E6F',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-around',
        top: '0',
        width: '100%',
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
        border: 'solid black 1px',
    },
    categoryImage: {
        width: '100%',
        height: '100%',
    },
    toyList: {
        display: 'flex',
        // alignItems: 'flex-start',
        width: '100%',
        height: '70%',
        // border: 'solid black 1px',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        // overflow: 'scroll',
    },
    toyElement: {
        // border: 'solid black 1px',
        // display: 'block',
        width: '100%',
        height: '40%',
        marginRight: '10%',

    },
    toyImage: {
        width: '20em',
        height: 'auto',

    }
}

module.exports = styles;