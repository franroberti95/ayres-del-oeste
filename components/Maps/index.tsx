import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status: Status) => {
    return <h1>{status}</h1>;
};

const Maps = ({locations}: {locations: object[]}) =>
    <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
        {
         /*<YourComponent/>*/
        }
    </Wrapper>

export default Maps