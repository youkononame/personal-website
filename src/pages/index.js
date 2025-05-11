import {
    Box,
    Container,
    Grid,
    Heading,
    NavLink,
    Text
  } from 'theme-ui'
  import Head from '../components/meta'
  import ColorSwitcher from '../components/color-switcher'
import Project from '../components/project'

export default function HomePage(props) {
    const projects = props.projects;
    return (
        <>
      <Head
        description="Hi, I'm youko. I make silly little things on the internet :D"
      />
      <Box as='header' sx={{ bg: 'sheet', color: 'text' }}>
        <Container sx={{ pt: 5, pb: [3, 4], textAlign: 'center' }}>
          <ColorSwitcher />
          <Heading as='h1' variant='title' color='red'>
            👋 Hi, I'm youko
          </Heading>
          <Text as='p' variant='subtitle' mt={3}>
            I make silly little things on the internet :D
          </Text>
          <Grid
            gap={4}
            columns='auto auto auto'
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 2,
              mt: 3,
              mb: 4,
              a: { color: 'muted', transition: 'color .125s ease-in-out' }
            }}
          >
            <NavLink href='https://github.com/youkononame'>GitHub</NavLink>
            <NavLink href='https://signal.me/#eu/ZJjRpqm2lLRZ-IJCHY1PeK1jyvHgKPj6iJqh3UAmRurBKDATbk1MAKiDeuiMWVCS'>
              Signal
            </NavLink>
            <NavLink href='mailto:noname@youko.dev'>
              Email
            </NavLink>
          </Grid>
        </Container>
      </Box>
      <Box
      as='main'
      sx={{ bg: 'background', color: 'text', py: 2, h2: { mt: 3 } }}
    >
        <Container>
            <Heading variant='title'>Projects</Heading>
            {projects.map(project =>
                <Project
                    name={project.name}
                    description={project.description}
                    buttons={project.buttons}
                />
            )}
      </Container>
    </Box>
    </>
    )
}

import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), './pages/projects.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}