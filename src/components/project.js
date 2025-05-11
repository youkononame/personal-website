import {
    BaseStyles,
    Button,
    Card,
    Heading,
    Link
  } from 'theme-ui'

export default ({
    name = 'Project',
    description = 'A thing I made',
    buttons = {'Button1': 'https://youko.dev'}
}) => (
    <Card as={BaseStyles} variant='interactive' sx={{ mt: 4 }}>
        <Heading variant='headline'>{name}</Heading>
        <p>{description}</p>
        {Object.entries(buttons).map(([key, value]) => (
            <Link href={value}>
                <Button variant='primary' sx={{ mr: 3 }}>{key}</Button>
            </Link> 
        ))}
    </Card>
)