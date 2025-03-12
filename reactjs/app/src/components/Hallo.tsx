interface HalloProps {
    nama: string;
    umur?: number;  // umur optional
}


const Halo: React.FC<HalloProps> = ({ nama, umur }) => {
    return (
        <div>
            <h1>Hallo ,{nama}</h1>
            {umur && <p>Umur Kamu: {umur} tahun</p>}
        </div>
    )
}


export default Halo;



/*
    penjelasan 
    interface Hallo props -> mendefiniskan type props
    nama: string
    umur? umur bersifat optional artinya bersifat optional 
    React.FC<HalloProps> menetukan bahwa ini adalah functional  components dengan props
    

*/