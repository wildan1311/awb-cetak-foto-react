import Swal from 'sweetalert2';

const alertError = ({ title, message }) => {
    return Swal.fire({
        title: title,
        text: message,
        icon: 'error',
        confirmButtonText: 'OK',
    });
}

const alertSuccess = ({ title, message }) => {
    return Swal.fire({
        title: title,
        text: message,
        icon: 'success',
        confirmButtonText: 'OK',
    });
}

export { alertError, alertSuccess };
