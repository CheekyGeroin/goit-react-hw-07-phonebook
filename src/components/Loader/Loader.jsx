import { Wrapper, LoaderText } from "./Loader.styled"
import { InfinitySpin } from "react-loader-spinner"

export const Loader = () => {
    return (
        <Wrapper>
            <InfinitySpin width='100' color='#000'/>
            <LoaderText>Waiting...</LoaderText>
        </Wrapper>
    )
}