import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Card = ({children}) => {
    return (
        <div className="items-center w-1/2 rounded-2xl bg-[#fefefe] p-4 relative min-w-96 border-solid border-black">
            <div className="absolute top-4 right-4">
                <HighlightOffIcon />
            </div>
            {children}
        </div>
    )
}

Card.Title = ({children}) => {
    return <div className='text-lg'>{children}</div>
}
Card.Body = ({children}) => {
    return <div className='my-8'>{children}</div>;
}

export default Card;