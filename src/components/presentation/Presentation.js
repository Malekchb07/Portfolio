import { ListItem, IconButton, Stack, Text, Image } from '@chakra-ui/react';
import bggeneral from '../../assests/images/abstract.jpg';
import user from '../../assests/images/undraw_make_it_rain_re_w9pc.svg';
import user2 from '../../assests/images/undraw_multitasking_re_ffpb.svg';
import { OpenDrawer } from './openDrawer/OpenDrawer';
import { FiCornerDownRight } from "react-icons/fi";
import { useEffect } from 'react';
import Chart from 'chart.js/auto';

const Presentation = () => {
    useEffect(() => {
        const data = {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                ],
                hoverOffset: 4,
            }],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                ],
                hoverOffset: 4,
            }],
        };

        const options = {
            responsive: true,
            maintainAspectRatio: false,
        };

        const ctx = document.getElementById('myChart').getContext('2d');
        let myChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: options,
        });

        return () => {
            myChart.destroy();
        };
    }, []);

	return (
		<Stack
			// bgImage={`url(${bggeneral})`}
			bgSize="cover"
			// bgPosition="center"
			// bgRepeat="no-repeat"
			minHeight="100vh"
			// backgroundImage='linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)'
			display="flex"
			alignItems="center"
			justifyContent="center"
			color="red"
		>
			<Stack flexDirection={'row'} justifyContent={'space-between'} >
				<Text fontFamily={'cursive'} fontSize={'medium'} textAlign={'justify'}>
					Diplômé récent en Informatique, spécialisé en e-commerce, je suis motivé pour
					mettre en pratique mes connaissances et acquérir une expérience professionnelle
					enrichissante. À la recherche d'opportunités variées liées à mes études, je valorise
					l'apprentissage rapide et l'excellence dans mes missions.
				</Text>
				<Stack>
					<Image src={user} alt='Malek Motif' />
				</Stack>
			</Stack>
			<Stack>
			<canvas id="myChart" width="400" height="400"></canvas>;
			</Stack>
			<Stack>
			<canvas id="myChart" width="400" height="400"></canvas>;
			</Stack>
			<Stack>
				<Image src={user2} alt='malek motif2' />
			</Stack>

			<Stack direction='row' className='flip-scale-2-hor-top{animation:flip-scale-2-hor-top .5s linear both}'>
				<IconButton as="a" href="https://github.com/Malekchb07" aria-label="GitHub" icon={<FiCornerDownRight />} />
				<OpenDrawer />

			</Stack>

		</Stack>
	);
};

export default Presentation;
