import Swal from 'sweetalert2';

const alertError = ({title, message})=> {
    Swal.fire({
        title: title,
        text: message,
        icon: 'error',
        confirmButtonText: 'OK',
        });
}

export default alertError;