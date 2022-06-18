function _btoa(string) {
    return Buffer.from(string).toString('base64');
}

function _atob(string) {
    return Buffer.from(string, 'base64').toString()
}

const status_msg = {
    ok: {
        msg: 'OK',
        description: 'Acción con éxito'
    },

    failed: {
        msg: 'Failed',
        description: 'Algo salió mal'
    },

}


module.exports = { _btoa, _atob, status_msg };
