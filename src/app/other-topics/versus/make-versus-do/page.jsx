import QuizForm from "@/src/components/QuizForm";

import {
	Container,
	Box,
	Stack,
	ListItem,
	ListItemText,
	List,
	Typography,
} from "@mui/material";

import styles from "../../../styles/content-page.module.css";

export const metadata = {
	title: "Make versus Do | English in Eight Minutes",
	description:
		"Learn about the differences between 'make' and 'do' in English with English in Eight Minutes. Test your knowledge with a quiz and understand when to use these words correctly.",
	keywords:
		"English, Make versus Do, English grammar, Vocabulary, English in Eight Minutes",
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		title: "Make versus Do | English in Eight Minutes",
		description:
			"Learn about the differences between 'make' and 'do' in English with English in Eight Minutes. Test your knowledge with a quiz and understand when to use these words correctly.",
		images: [
			{
				alt: "English in Eight Logo",
				url: "/images/english-logo.svg",
				width: 800,
				height: 600,
			},
			{
				url: "/images/english-logo.svg",
				width: 1800,
				height: 1600,
				alt: "English in Eight Logo",
			},
		],
	},
};

export default function MakeVersusDo() {
	const questionsArray = [
		{
			id: 1,
			title:
				"Juan worked hard and __________ his best at his job, but he still wasn't promoted.",
			possibleAnswers: [
				{ title: "made" },
				{ title: "did", correctAnswer: true },
			],
			userAnswer: "",
			explanation: "In English we do our best.",
		},
		{
			id: 2,
			title:
				"If you don't speak English, you'll find it hard to ________ business in the UK.",
			possibleAnswers: [
				{ title: "make" },
				{ title: "do", correctAnswer: true },
			],
			userAnswer: "",
			explanation:
				"In English we do business, considering it a general activity.",
		},
		{
			id: 3,
			title:
				"So many chores to _______! I need to clean the bathroom and the kitchen, vacuum and make all the beds.",
			possibleAnswers: [
				{ title: "make" },
				{ title: "do", correctAnswer: true },
			],
			userAnswer: "",
			explanation:
				"In English we do chores, considering it a general activity.",
		},

		{
			id: 4,
			title: "It has always been hard for me to ________________ decisions.",
			possibleAnswers: [
				{ title: "make", correctAnswer: true },
				{ title: "do" },
			],
			userAnswer: "",
			explanation: "In English we make decisions.",
		},
		{
			id: 5,
			title: " My grandmother loves ________ crosswords.",
			possibleAnswers: [
				{ title: "to make" },
				{ title: "to do", correctAnswer: true },
			],
			userAnswer: "",
			explanation: "In English we do crosswords because it's an activity.",
		},
		{
			id: 6,
			title:
				"I really need to _______ some shopping this afternoon. We have no food in the house at all.",
			possibleAnswers: [
				{ title: "do", correctAnswer: true },
				{ title: "make" },
			],
			userAnswer: "",
			explanation: "In English we do shopping because it's an activity.",
		},
		{
			id: 7,
			title:
				"Demarcus  __________ a joke at the start of the meeting, but nobody laughed.",
			possibleAnswers: [
				{ title: "made", correctAnswer: true },
				{ title: "did" },
			],
			userAnswer: "",
			explanation: "In English we make jokes.",
		},
		{
			id: 8,
			title:
				" The teenagers were _________ so much noise that the neighbour called the police.",
			possibleAnswers: [
				{ title: "making", correctAnswer: true },
				{ title: "doing" },
			],
			userAnswer: "",
			explanation: "In English we create, or make noise.",
		},
		{
			id: 9,
			title: "If you'll _________ the dishes, I'll sweep the floor.",
			possibleAnswers: [
				{ title: "make" },
				{ title: "do", correctAnswer: true },
			],
			userAnswer: "",
			explanation: "In English we do dishes, washing dishes is an activity.",
		},
		{
			id: 10,
			title:
				"Could you __________ me a favor and bring dessert to my dinner party tomorrow?",
			possibleAnswers: [
				{ title: "do", correctAnswer: true },
				{ title: "make" },
			],
			userAnswer: "",
			explanation: "In English we do favors.",
		},
		{
			id: 11,
			title:
				"When you're trying to solve a difficult problem, do you usually find it hard to _________ progress?",
			possibleAnswers: [
				{ title: "make", correctAnswer: true },
				{ title: "do" },
			],
			userAnswer: "",
			explanation: "In English, we make progress.",
		},
		{
			id: 12,
			title: "Sarah is talented and can ________ delicious desserts.",
			possibleAnswers: [
				{ title: "make", correctAnswer: true },
				{ title: "do" },
			],
			userAnswer: "",
			explanation: "In English, we make food because it's a creative process.",
		},
		{
			id: 13,
			title:
				"It's important to ________ a decision about your future career path.",
			possibleAnswers: [
				{ title: "make", correctAnswer: true },
				{ title: "do" },
			],
			userAnswer: "",
			explanation: "In English, we make decisions.",
		},
		{
			id: 14,
			title:
				"When you're feeling sad, what do you usually need to ________ to feel better? Rest or exercise?",
			possibleAnswers: [
				{ title: "make" },
				{ title: "do", correctAnswer: true },
			],
			userAnswer: "",
			explanation:
				"In English, we do things to recover because it's considered an activity.",
		},
		{
			id: 15,
			title: "The chef is known for her ability to ________ delicious food.",
			possibleAnswers: [
				{ title: "make", correctAnswer: true },
				{ title: "do" },
			],
			userAnswer: "",
			explanation: "In English, we make food because it's a creation.",
		},
		{
			id: 16,
			title:
				"Mark decided to ________ the right thing and return the lost wallet to its owner.",
			possibleAnswers: [
				{ title: "make" },
				{ title: "do", correctAnswer: true },
			],
			userAnswer: "",
			explanation: "In English, we do things.",
		},
		{
			id: 17,
			title: "When you're planning a trip, what do you need to ________ first?",
			possibleAnswers: [
				{ title: "make" },
				{ title: "do", correctAnswer: true },
			],
			userAnswer: "",
			explanation: "In English we do things first, second, etc.....",
		},
		{
			id: 18,
			title:
				"The construction workers will ________ repairs on the damaged bridge to ensure it's safe for use.",
			possibleAnswers: [
				{ title: "make", correctAnswer: true },
				{ title: "do" },
			],
			userAnswer: "",
			explanation: "In English, we make repairs.",
		},
		{
			id: 19,
			title:
				"If you want to be successful in your career, you need to ________ an effort to continually improve your skills.",
			possibleAnswers: [
				{ title: "make", correctAnswer: true },
				{ title: "do" },
			],
			userAnswer: "",
			explanation: "In English, we make an effort.",
		},
		{
			id: 20,
			title:
				"Every morning, I like to ________ a list of tasks for the day to stay organized and productive.",
			possibleAnswers: [
				{ title: "make", correctAnswer: true },
				{ title: "do" },
			],
			userAnswer: "",
			explanation: "In English, we create or make a list.",
		},
	];

	return (
		<Container>
			<Stack>
				<Typography
					mb={2}
					component="h1"
					variant="h1"
					sx={{ fontSize: "2.5rem", color: "#cc1e1e;" }}
				>
					Make versus Do
				</Typography>
			</Stack>
			<Stack>
				<Typography variant="h6" mb={2}>
					It can be hard to decide when to use 'make' or 'do' in English. Here's
					some help.
				</Typography>
			</Stack>
			<Box component="section">
				<Typography>
					{" "}
					We usually use 'make' when we create or construct something.
				</Typography>
				<List sx={{ marginLeft: "20px" }}>
					<ListItem sx={{ display: "list-item" }}>
						<ListItemText> She made a cake.</ListItemText>
					</ListItem>
					<ListItem sx={{ display: "list-item" }}>
						<ListItemText> I've made us some coffee.</ListItemText>
					</ListItem>
					<ListItem sx={{ display: "list-item" }}>
						<ListItemText>Did you really make that hat?</ListItemText>
					</ListItem>
				</List>
				<List>
					<Typography>
						{" "}
						We use 'do' for general activities and for actions you have to do,
						like jobs or work. In this case, 'do' is sometimes used with
						'something', 'nothing', 'anything' or 'everything'.
					</Typography>

					<ListItem sx={{ display: "list-item" }}>
						<ListItemText>What did you do on the weekend?</ListItemText>
					</ListItem>
					<ListItem sx={{ display: "list-item" }}>
						<ListItemText>I hate doing dishes (washing dishes).</ListItemText>
					</ListItem>
					<ListItem sx={{ display: "list-item" }}>
						<ListItemText>I didn't do anything yesterday.</ListItemText>
					</ListItem>
					<ListItem sx={{ display: "list-item" }}>
						<ListItemText>
							The first thing I plan to do is build my resume.
						</ListItemText>
					</ListItem>
					<ListItem sx={{ display: "list-item" }}>
						<ListItemText>
							{" "}
							She's fed up (frustrated) with doing everything herself. She needs
							some help.
						</ListItemText>
					</ListItem>
				</List>

				<Typography variant="h5" mb={2}>
					{" "}
					This lesson isn’t easy, so don’t worry if you make a lot of mistakes
					on the quiz. Sometimes the difference between make and do isn’t clear,
					and there are also many exceptions to the rules above. Remember,
					practice makes perfect. Do the quiz as many times as you need.
				</Typography>
			</Box>

			<QuizForm questionsArray={questionsArray} />

			<iframe
				className={styles.iframe_wrapper}
				width="560"
				height="315"
				src="https://www.youtube.com/embed/lvKA9rH_WlU?si=Vt24LxozN8rq3Db5"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			></iframe>
		</Container>
	);
}
