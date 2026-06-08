let lastId = 0;

async function fetchSignal() {

    const response =
        await axios.get(URL);

    const signal =
        response.data;

    if(signal.id !== lastId){

        lastId = signal.id;

        io.emit(
            "signal",
            signal
        );

        console.log(
            "Sent Signal",
            signal.id
        );
    }
}
