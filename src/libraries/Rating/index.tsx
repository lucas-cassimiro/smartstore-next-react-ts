import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Container } from "./styles";

interface RatingProps {
    star: number;
}

export default function HalfRating({ star }: RatingProps) {
    return (
        <Container>
            <Stack spacing={1}>
                <Rating
                    name="half-rating-read"
                    defaultValue={star}
                    precision={0.5}
                    readOnly
                />
            </Stack>
        </Container>
    );
}
